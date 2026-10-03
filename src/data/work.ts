export type WorkItem = { title: string; slug: string; shortDescription: string; longDescription?: string; status: string; category: string; year?: string; featured?: boolean; externalUrl?: string | null; githubUrl?: string | null; tags?: string[] };

export const work: WorkItem[] = [
  { title: "Alignment Governance Stack", slug: "alignment-governance-stack", shortDescription: "An implemented governance architecture for preserving legitimate delegated authority across the lifecycle from human intent toward execution and consequence.", status: "Implemented", category: "Agent Governance", year: "2026", featured: true, externalUrl: null, githubUrl: null, tags: ["delegation", "authority", "governance"] },
  { title: "Human Agency Infrastructure", slug: "human-agency-infrastructure", shortDescription: "The broader research direction exploring how increasingly capable systems can expand human capability without silently replacing human authorship or authority.", status: "Active Research", category: "Human Agency", year: "2026", featured: true, tags: ["agency", "personal agents"] },
  { title: "Alignment Theory", slug: "alignment-theory", shortDescription: "Conceptual work examining how systems distort when relationships depart from load-bearing constraints and how coherence can be preserved or restored.", status: "Ongoing Theory", category: "Systems / Alignment", year: "2026", featured: true, tags: ["systems", "alignment"] },
  { title: "Governance Memory / Internalization", slug: "governance-memory", shortDescription: "Research into how an agent can learn preferences, procedures and routines over time without treating memory, repetition or prediction confidence as new authority.", status: "Experimental", category: "Memory / Personal Agents", year: "2026", featured: true, tags: ["memory", "internalization"] }
];

export const projectDirections: WorkItem[] = [
  {
    title: "Governed Personal Agent",
    slug: "governed-personal-agent",
    shortDescription: "A personal AI agent designed to learn how a person works, reduce cognitive load, and take meaningful action without confusing prediction, preference, or familiarity with permission.",
    longDescription: "Built around the principle that a capable assistant should need less explanation over time, not more authority.",
    status: "Concept / In Development",
    category: "Personal AI",
    year: "2026",
    featured: false,
    externalUrl: null,
    githubUrl: null,
    tags: ["personal agents", "bounded autonomy"],
  },
  {
    title: "AGS Evaluation & Conformance Tooling",
    slug: "ags-evaluation-conformance-tooling",
    shortDescription: "Tools for testing whether agentic systems preserve delegated authority, runtime continuity, provenance, revocation, and other AGS invariants across real workflows.",
    status: "Research / In Development",
    category: "Evaluation",
    year: "2026",
    featured: false,
    externalUrl: null,
    githubUrl: null,
    tags: ["evaluation", "conformance", "governance"],
  },
];
