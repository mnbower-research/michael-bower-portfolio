export const researchAreas = [
  { group: "Independent Measurement", items: [{ title: "Invariant-Constrained Transition Framework", status: "First benchmark complete" }] },
  { group: "Foundations", items: [{ title: "Alignment Theory", status: "Conceptual" }, { title: "Human Agency Infrastructure", status: "Active Research" }] },
  { group: "Architecture", items: [{ title: "Alignment Governance Stack", status: "Implemented" }] },
  { group: "Core Mechanisms", items: ["Delegation Formation", "Context Admission", "Pre-Gate Deliberation", "Agent Action Gate", "Current Standing", "Execution-Time Revalidation", "Governance Memory / Internalization", "Handoff Integrity"].map(title => ({ title, status: title === "Governance Memory / Internalization" ? "Experimental" : "In Development" })) },
  { group: "Experiments", items: [{ title: "Longitudinal internalization research", status: "Preregistered" }, { title: "Synthetic evaluations", status: "Experimental" }, { title: "Adversarial review methodology", status: "In Development" }] }
];
