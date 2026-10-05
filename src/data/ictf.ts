export const ictf = {
  route: "/research/ictf",
  title: "Invariant-Constrained Transition Framework (ICTF)",
  overview: "/research/ictf/ictf-overview.pdf",
  preprint: "/research/ictf/ictf-v1.2.1-preprint.pdf",
  repository: "https://github.com/mnbower-research/alignment-governance-stack",
  experiment: "https://github.com/mnbower-research/alignment-governance-stack/tree/experiment/ictf-adaptive-gate-search/experiments/adaptive-gate-search",
};

const commit = (sha: string) => `${ictf.repository}/commit/${sha}`;
export const ictfTimeline = [
  {
    title: "ICTF v1.2.1 frozen",
    date: "October 4, 2026 · manuscript date",
    label: "Pre-experiment artifact",
    description: "Completed before the first adaptive-search experiment. The technical preprint preserves the formal framework, hypotheses, held-out evaluation model, research agenda, limitations, and falsification conditions.",
    href: ictf.preprint,
    source: "Read frozen preprint",
  },
  {
    title: "Adaptive-search experiment preregistered",
    date: "October 4, 2026 · 10:28–11:18 p.m. PDT",
    label: "Preregistration + pre-run amendments",
    description: "The protocol and subsequent pre-run amendments froze gate geometries, proposer classes, search budgets, calibration, hazard semantics, and analysis rules before results.",
    href: commit("ba017f788e1a10765e2001685237bd2b69c68711"),
    source: "Preregistration commit",
    secondaryHref: commit("191e3d7a3aeab7384752279775c704fdc313e75f"),
    secondarySource: "Final analysis-plan amendment",
  },
  {
    title: "Experimental apparatus frozen",
    date: "October 4, 2026 · 11:29 p.m. PDT",
    label: "Apparatus freeze",
    description: "The environment, proposer implementations, experiment runner, and analysis code were frozen and tagged before the first comparative run.",
    href: `${ictf.repository}/tree/ictf-adaptive-gate-search-apparatus-v0.1/experiments/adaptive-gate-search`,
    source: "Frozen apparatus tag",
  },
  {
    title: "First benchmark completed",
    date: "October 4, 2026 · 11:51 p.m. PDT",
    label: "First results recorded",
    description: "720,000 synthetic episodes across 2 gate-error geometries, 4 proposer/search policies, and 9 interaction budgets. The experiment used synthetic gates and proposers; it did not use AGS.",
    href: commit("8b50f935092db9fc273a8b3076b4cfd2396e8b84"),
    source: "First-results commit",
  },
  {
    title: "Confirmatory H4 result: not supported",
    date: "Recorded with the first benchmark results",
    label: "Negative confirmatory result",
    description: "The preregistered prediction was that adaptive proposers could produce increasing conditional escape hazard. All four confirmatory adaptive conditions produced non-positive estimated slopes.",
    href: `${ictf.experiment}/POST_RESULT_001.md`,
    source: "Confirmatory result record",
  },
  {
    title: "Post-result exploratory finding",
    date: "October 5, 2026 · 12:16 a.m. PDT",
    label: "Exploratory / post-result",
    description: "Search policy and error geometry produced different temporal hazard profiles: roughly constant random-search hazard, early hazard followed by decay under structured adaptive feedback, and a delayed wave under structured nonadaptive utility ranking. No comparable delayed wave appeared in the unstructured condition.",
    href: commit("27cead523f014b62bb87cf53bd9ba427a284a9a8"),
    source: "Exploratory report commit",
  },
  {
    title: "AGS component ablations",
    date: "Next · planned",
    label: "Future work / no results yet",
    description: "Use the ICTF benchmark to compare AAG, PGDL + AAG, Runtime Binding, and fuller AGS configurations through controlled ablations. AGS has not yet been evaluated with this benchmark.",
  },
];

export const ictfPractices = [
  "Preregister confirmatory experiments",
  "Freeze apparatus before results",
  "Preserve negative results",
  "Separate confirmatory from exploratory analysis",
  "Use held-out evaluation rather than letting the gate grade itself",
  "Preserve historical versions",
  "Publish benchmark failures and exploits",
  "Revise theory when predictions fail",
];
