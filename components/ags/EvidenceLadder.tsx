import { evidenceStages } from "@/src/data/ags";

const occupied = new Set(["Conceptual", "Implemented", "Unit / Regression Tested", "Adversarially Reviewed", "Synthetic Evaluation", "Preregistered Experiment"]);

export function EvidenceLadder() {
  return (
    <ol className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-label="Evidence maturity ladder">
      {evidenceStages.map((stage, index) => {
        const reached = occupied.has(stage);
        return (
          <li className={`min-h-32 border p-5 ${reached ? "border-[#9eaca2] bg-white" : "border-dashed border-[#cbd2cd] text-[#8b9690]"}`} key={stage}>
            <span className="font-mono text-xs">0{index + 1}</span>
            <p className="mt-5 font-semibold">{stage}</p>
            <p className="mt-2 text-xs uppercase tracking-wider">{reached ? "Represented in current work" : "Not claimed"}</p>
          </li>
        );
      })}
    </ol>
  );
}
