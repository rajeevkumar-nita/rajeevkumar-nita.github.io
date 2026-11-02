// Client-side helpers for the GitHub Activity section.
//
// Data source order:
//   1. /api/github  — our own Vercel function (authenticated, full stats).
//   2. Public contributions API — no token needed; gives the contribution
//      calendar only, so the graph still renders if (1) is unavailable
//      (e.g. local `vite dev`, or GITHUB_TOKEN not yet configured).

const PRIMARY_URL = "/api/github";
const fallbackUrl = (username) =>
  `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`;

const TIMEOUT_MS = 10000;

async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    // In local dev the SPA may answer /api/* with index.html — guard on content type.
    const type = res.headers.get("content-type") || "";
    if (!res.ok || !type.includes("application/json")) {
      throw new Error(`Request failed: ${res.status}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function isValidDays(days) {
  return Array.isArray(days) && days.length > 0;
}

export async function loadGitHubActivity(username) {
  try {
    const data = await fetchJson(PRIMARY_URL);
    if (isValidDays(data?.days)) {
      return { stats: data.stats ?? null, days: data.days, source: "api" };
    }
    throw new Error("Malformed /api/github response");
  } catch (primaryErr) {
    if (import.meta.env.DEV) {
      console.warn("[GitHubActivity] /api/github unavailable, using public fallback:", primaryErr);
    }
  }

  const data = await fetchJson(fallbackUrl(username));
  if (!isValidDays(data?.contributions)) {
    throw new Error("No contribution data available");
  }
  const days = data.contributions.map((d) => ({
    date: d.date,
    count: d.count,
    level: d.level,
  }));
  return { stats: null, days, source: "fallback" };
}

const toKey = (date) => date.toISOString().slice(0, 10);

/** Current and longest streaks (in days) across the provided calendar. */
export function computeStreaks(days) {
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));

  let longest = 0;
  let run = 0;
  for (const d of sorted) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }

  // Current streak: walk back from the latest day. A zero "today" doesn't
  // break the streak (the day isn't over yet), so skip it.
  let current = 0;
  let i = sorted.length - 1;
  const today = toKey(new Date());
  if (i >= 0 && sorted[i].count === 0 && sorted[i].date >= today) i -= 1;
  for (; i >= 0 && sorted[i].count > 0; i -= 1) current += 1;

  return { current, longest };
}

/**
 * Groups days into Sunday-first week columns (GitHub layout), padding the
 * first/last week with nulls. Also returns month labels keyed by column.
 */
export function buildCalendar(days) {
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  if (!sorted.length) return { weeks: [], months: [] };

  const firstDow = new Date(`${sorted[0].date}T00:00:00Z`).getUTCDay();
  const cells = [...Array(firstDow).fill(null), ...sorted];
  while (cells.length % 7) cells.push(null);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const months = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
    if (month !== lastMonth) {
      // Skip a label if it would collide with the previous one.
      if (!months.length || col - months[months.length - 1].col >= 3) {
        months.push({
          col,
          label: new Date(Date.UTC(2000, month, 1)).toLocaleString("en-US", {
            month: "short",
            timeZone: "UTC",
          }),
        });
      }
      lastMonth = month;
    }
  });

  return { weeks, months };
}
