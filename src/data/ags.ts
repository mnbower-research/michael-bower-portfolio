export const agsLifecycle = [
  ["01", "Human Expression", "A goal, preference, request, or correction enters the system."],
  ["02", "Delegation Formation", "Expression is interpreted and, where needed, clarified."],
  ["03", "Established Delegation", "A bounded authority envelope is explicitly confirmed."],
  ["04", "Context Admission", "Relevant context is validated before it influences action."],
  ["05", "Reasoning", "The system considers possible actions within the admitted context."],
  ["06", "Pre-Gate Deliberation Layer (PGDL)", "A proposed action is prepared for governance checks."],
  ["07", "Agent Action Gate (AAG)", "The proposal is checked against delegated authority."],
  ["08", "Current Standing", "The system asks whether that authority still holds now."],
  ["09", "Runtime Binding", "The permit is bound to the intended action and conditions."],
  ["10", "Execution-Time Revalidation", "Authority and conditions are checked at the boundary."],
  ["11", "Consequence", "The external action produces an effect in the world."],
  ["12", "Receipts", "Evidence records what was attempted and what is known to have occurred."],
  ["13", "Governance Memory / Internalization", "Learning can reduce uncertainty without creating authority."],
] as const;

export const distinctions = [
  ["Human expression", "executable authorization", "A goal does not grant every possible means of accomplishing it."],
  ["Prediction confidence", "permission", "High confidence about a likely choice does not create authority to make it."],
  ["Memory", "authority", "Memory can improve interpretation without expanding permission."],
  ["Past authority", "current authority", "Expiry, revocation, changed conditions, recipients, prices, or context can defeat standing."],
  ["Permission", "consequence", "Passing an execution boundary is not proof of what ultimately happened."],
  ["Human presence", "meaningful human authority", "Being technically in the loop does not ensure understanding, authorship, or control."],
] as const;

export const invariants = [
  ["Delegated authority ≤ originating authority", "A delegate cannot legitimately receive more authority than the authorized source provides."],
  ["Action scope ⊆ granted scope", "The proposed action must remain inside the established delegation envelope."],
  ["Claimed knowledge ≤ evidence", "A system should not claim more certainty than its evidence supports."],
  ["Past authority ⇏ current authority", "Previously valid authority must not be assumed to remain valid."],
  ["Uncertainty ↑ ⇒ autonomous commitment ↓", "Greater uncertainty should reduce, not increase, irreversible autonomous action."],
  ["Consequence / irreversibility ↑ ⇒ assurance ↑", "Higher stakes call for stronger evidence and governance checks."],
  ["Downstream delegation ≤ upstream authority", "Handoffs must not silently expand authority."],
  ["Handoffs preserve authority + provenance + context", "Relevant constraints and source lineage should survive transfers."],
  ["Authorization ↔ execution continuity", "The executed action should remain connected to the action that was authorized."],
  ["Prediction confidence ≠ permission", "Accuracy about likely preference does not itself grant permission."],
  ["Memory ≠ permission", "Stored experience is evidence for interpretation, not a source of authority."],
] as const;

export const statuses = [
  {
    component: "Delegation Formation",
    status: "Implemented / Frozen Phase 1",
    tag: "ags-core-delegation-formation-1",
    evidence: ["Deterministic implementation", "Adversarially reviewed", "Bounded claims"],
  },
  {
    component: "Current Standing",
    status: "Implemented / Frozen Phase 1",
    tag: "ags-core-current-standing-1",
    evidence: ["Deterministic standing evaluation", "Adversarial review", "Temporal and evidence conditions represented"],
  },
  {
    component: "Execution-Time Revalidation",
    status: "Implemented / Frozen Phase 1",
    tag: "ags-core-execution-revalidation-1",
    evidence: ["Execution-boundary revalidation", "Revocation, expiry, and change handling", "Documented remaining TOCTOU limitation"],
  },
  {
    component: "Governance Memory / Internalization",
    status: "Implemented / Frozen Phase 1",
    tag: "ags-core-governance-memory-1",
    commit: "6b306aa9da67a55832673b297edf5465cd43f585",
    evidence: ["Deterministic memory structures", "Preference, procedure, and routine separation", "Corrections and provenance", "Memory-assisted interpretation", "No autonomous authority creation in the defined mechanism"],
  },
  {
    component: "Longitudinal Internalization Experiment",
    status: "Preregistered / Not Yet Executed",
    evidence: ["42 prospective synthetic cases", "Measurement adapter implemented", "Review blockers remain before freeze", "No execution and no outcome data"],
  },
] as const;

export const evidenceStages = [
  "Conceptual",
  "Implemented",
  "Unit / Regression Tested",
  "Adversarially Reviewed",
  "Synthetic Evaluation",
  "Preregistered Experiment",
  "Real-World Pilot",
  "Production Evidence",
] as const;

export const researchTimeline = [
  "Human Agency Questions",
  "Alignment Theory",
  "Human Agency Infrastructure",
  "Alignment Governance Stack",
  "Delegation Formation",
  "Current Standing",
  "Execution-Time Revalidation",
  "Governance Memory",
  "Longitudinal Internalization",
  "Future Real-World Agent Testing",
] as const;
