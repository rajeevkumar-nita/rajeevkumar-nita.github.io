/* global process */
// Vercel Serverless Function: GET /api/github
//
// Fetches GitHub profile stats + the last year's contribution calendar using
// the GitHub GraphQL API. The token (GITHUB_TOKEN) lives only in Vercel's
// server-side environment and is never sent to the browser.
//
// The username is fixed server-side so this endpoint can't be used to burn
// the token's rate limit on arbitrary lookups.

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const DEFAULT_USERNAME = "rajeevkumar-nita";
const REQUEST_TIMEOUT_MS = 8000;

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      login
      followers { totalCount }
      repositories(ownerAffiliations: OWNER, isFork: false, first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {
        totalCount
        nodes { stargazerCount }
      }
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
        totalPullRequestContributions
        totalIssueContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays { date contributionCount contributionLevel }
          }
        }
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME;

  if (!token) {
    console.error("[api/github] GITHUB_TOKEN is not configured");
    res.setHeader("Cache-Control", "no-store");
    return res.status(503).json({ error: "GitHub integration not configured" });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-github-activity",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: username } }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok || !payload || payload.errors || !payload.data?.user) {
      console.error(
        "[api/github] GitHub API error",
        response.status,
        JSON.stringify(payload?.errors ?? payload?.message ?? null)
      );
      res.setHeader("Cache-Control", "no-store");
      return res.status(502).json({ error: "Failed to load data from GitHub" });
    }

    const user = payload.data.user;
    const cc = user.contributionsCollection;

    const days = cc.contributionCalendar.weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: LEVELS[d.contributionLevel] ?? 0,
      }))
    );

    const stars = user.repositories.nodes.reduce((sum, r) => sum + r.stargazerCount, 0);

    // Cache at Vercel's edge for 1h, serve stale for up to a day while revalidating.
    // Keeps the site fast and the token far below GitHub's rate limits.
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      username: user.login,
      stats: {
        totalContributions: cc.contributionCalendar.totalContributions,
        commits: cc.totalCommitContributions + cc.restrictedContributionsCount,
        pullRequests: cc.totalPullRequestContributions,
        issues: cc.totalIssueContributions,
        reviews: cc.totalPullRequestReviewContributions,
        repositories: user.repositories.totalCount,
        stars,
        followers: user.followers.totalCount,
      },
      days,
    });
  } catch (err) {
    const timedOut = err?.name === "AbortError";
    console.error("[api/github]", timedOut ? "Request timed out" : err);
    res.setHeader("Cache-Control", "no-store");
    return res
      .status(timedOut ? 504 : 500)
      .json({ error: timedOut ? "GitHub request timed out" : "Unexpected error" });
  } finally {
    clearTimeout(timer);
  }
}
