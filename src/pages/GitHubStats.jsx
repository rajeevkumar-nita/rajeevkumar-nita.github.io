import React, { useEffect, useMemo, useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import MagneticButton from "../components/MagneticButton";
import { loadGitHubActivity, computeStreaks, buildCalendar } from "../utils/githubActivity";

const GITHUB_USERNAME = "rajeevkumar-nita";

const LEVEL_CLASSES = [
  "bg-slate-200 dark:bg-slate-700/70",
  "bg-indigo-200 dark:bg-indigo-900",
  "bg-indigo-400 dark:bg-indigo-700",
  "bg-indigo-500 dark:bg-indigo-500",
  "bg-indigo-700 dark:bg-indigo-300",
];

const CARD = "rounded-2xl shadow-card bg-white dark:bg-slate-900/40";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const StatTile = ({ label, value }) => (
  <div className={`${CARD} px-4 py-5`}>
    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
      {Number(value).toLocaleString("en-US")}
    </div>
    <div className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{label}</div>
  </div>
);

const ContributionGraph = ({ days }) => {
  const { weeks, months } = useMemo(() => buildCalendar(days), [days]);

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-max text-left">
        <div className="relative h-4 ml-8 text-[10px] text-slate-500 dark:text-slate-400">
          {months.map((m) => (
            <span key={`${m.col}-${m.label}`} className="absolute" style={{ left: m.col * 14 }}>
              {m.label}
            </span>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[3px] w-8 text-[10px] leading-[11px] text-slate-500 dark:text-slate-400">
            {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
              <span key={i} className="h-[11px]">{d}</span>
            ))}
          </div>
          <div className="flex gap-[3px]" role="img" aria-label="GitHub contribution calendar for the past year">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) =>
                  day ? (
                    <div
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                      className={`w-[11px] h-[11px] rounded-[2px] ${LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]}`}
                    />
                  ) : (
                    <div key={`empty-${di}`} className="w-[11px] h-[11px]" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-slate-500 dark:text-slate-400">
          <span className="mr-1">Less</span>
          {LEVEL_CLASSES.map((cls, i) => (
            <span key={i} className={`w-[11px] h-[11px] rounded-[2px] ${cls}`} />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div aria-busy="true" aria-live="polite">
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 mb-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`${CARD} h-[88px] animate-pulse`} />
      ))}
    </div>
    <div className={`${CARD} h-[170px] mb-8 animate-pulse`} />
    <span className="sr-only">Loading GitHub activity…</span>
  </div>
);

const GitHubStats = () => {
  const [state, setState] = useState({ status: "loading", data: null });

  useEffect(() => {
    let cancelled = false;
    loadGitHubActivity(GITHUB_USERNAME)
      .then((data) => !cancelled && setState({ status: "ready", data }))
      .catch((err) => {
        if (import.meta.env.DEV) console.error("[GitHubActivity]", err);
        if (!cancelled) setState({ status: "error", data: null });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const { data } = state;
  const streaks = useMemo(() => (data ? computeStreaks(data.days) : null), [data]);
  const totalLastYear = useMemo(
    () => (data ? data.stats?.totalContributions ?? data.days.reduce((s, d) => s + d.count, 0) : 0),
    [data]
  );

  const tiles = data
    ? [
        { label: "Contributions (past year)", value: totalLastYear },
        { label: "Current streak (days)", value: streaks.current },
        { label: "Longest streak (days)", value: streaks.longest },
        ...(data.stats
          ? [
              { label: "Commits (past year)", value: data.stats.commits },
              { label: "Pull requests", value: data.stats.pullRequests },
              { label: "Public repositories", value: data.stats.repositories },
              { label: "Stars earned", value: data.stats.stars },
              { label: "Followers", value: data.stats.followers },
            ]
          : []),
      ]
    : [];

  return (
    <section
      id="github"
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-10" data-aos="fade-up">
          <span className="section-eyebrow">Proof Of Work</span>
          <h2 className="text-4xl font-bold text-gradient-heading">GitHub Activity</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A live snapshot of my GitHub activity and coding consistency.
          </p>
        </div>

        {state.status === "loading" && <Skeleton />}

        {state.status === "error" && (
          <div className={`${CARD} px-6 py-10 mb-8 text-slate-600 dark:text-slate-300`}>
            GitHub activity is temporarily unavailable. You can view it directly on my GitHub profile.
          </div>
        )}

        {state.status === "ready" && (
          <>
            <div
              className={`grid gap-4 mb-6 ${tiles.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}
            >
              {tiles.map((t) => (
                <StatTile key={t.label} {...t} />
              ))}
            </div>

            <div className={`${CARD} p-4 sm:p-6 mb-8`}>
              <ContributionGraph days={data.days} />
            </div>
          </>
        )}

        <MagneticButton
          as="a"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:shadow-glow hover:-translate-y-0.5 transition-all"
          data-aos="zoom-in"
        >
          <FaGithub /> Visit My GitHub <FaArrowRight className="text-sm" />
        </MagneticButton>
      </div>
    </section>
  );
};

export default GitHubStats;
