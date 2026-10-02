import Link from "next/link";
import { ArchitectureFlow } from "./ArchitectureFlow";
import { EvidenceLadder } from "./EvidenceLadder";
import { ResearchTimeline } from "./ResearchTimeline";
import { StatusTable } from "./StatusTable";
import { distinctions, invariants } from "@/src/data/ags";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="research-label">{children}</span>;
}
function SectionLead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <header className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">{title}</h2>{children && <div className="mt-6 text-lg leading-8 text-[#58645e]">{children}</div>}</header>;
}

export function AGSPage() {
  return (
    <main>
      <section className="container py-20 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <div className="flex flex-wrap gap-2"><Label>Implemented architecture</Label><Label>Active research</Label></div>
            <p className="eyebrow mt-8">Alignment Governance Stack · AGS</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.06em] md:text-7xl lg:text-[5rem]">Preserving legitimate delegated authority from human intent to consequence.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4e5b55]">AGS is an architecture for preserving legitimate delegated agency as AI systems interpret human requests, reason, use tools, delegate, encounter changing conditions, and produce consequences.</p>
          </div>
          <aside className="grid-paper border hairline p-6 md:p-8">
            <p className="eyebrow">Claim boundary</p>
            <p className="mt-4 text-xl leading-8">AGS does not attempt to dictate every correct action.</p>
            <p className="mt-4 leading-7 text-[#68736e]">It attempts to preserve the conditions under which legitimate action can remain possible.</p>
            <a className="mt-8 inline-block text-sm underline decoration-[#af5b36] underline-offset-4" href="#status">See implementation status ↓</a>
          </aside>
        </div>
      </section>

      <section className="bg-[#17201d] py-20 text-[#f7f8f5] md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow !text-[#d68b67]">The problem</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">Reasonable steps can still produce an illegitimate whole.</h2></div>
          <div className="space-y-6 text-lg leading-8 text-[#c6d0c9]">
            <p>A user may ask for something. An agent interprets it. A tool is permitted. Another agent receives a task. A runtime permit exists. Execution occurs. Every step can appear locally reasonable, yet the final consequence can still be something the human never actually authorized.</p>
            <blockquote className="border-l-2 border-[#d68b67] py-2 pl-6 text-2xl leading-9 text-white">Local legitimacy can coexist with global illegitimacy.</blockquote>
            <p>The governing question is therefore not only, “Was this individual action permitted?” It is also, “Did legitimate authority remain continuous from the human’s original intent through every transformation and all the way to execution?”</p>
          </div>
        </div>
      </section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Core distinctions" title="Things a capable system must not collapse together."><p>These distinctions separate useful inference from legitimate authority. Losing them can make a system more fluent while making its actions less attributable to the person it is meant to serve.</p></SectionLead>
        <div className="mt-12 grid gap-px border hairline bg-[#d9dfda] md:grid-cols-2">
          {distinctions.map(([left, right, description]) => <article className="bg-[#f7f8f5] p-6 md:p-8" key={left}><h3 className="text-xl font-semibold">{left} <span className="mx-2 text-[#af5b36]">≠</span> {right}</h3><p className="mt-4 leading-7 text-[#68736e]">{description}</p></article>)}
        </div>
      </section>

      <section className="bg-[#e9eee9] py-20 md:py-28"><div className="container">
        <SectionLead eyebrow="Architecture" title="A governed path from expression to consequence."><p>The lifecycle is a research architecture, not a claim that every component has equal implementation or evidence maturity.</p></SectionLead>
        <ArchitectureFlow />
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Delegation Formation" title="Expression is not executable authority."><p>Human expression is first treated as something that may require interpretation. Inference may help clarify meaning. It may not manufacture permission.</p></SectionLead>
        <div className="mt-10 flex flex-wrap items-center gap-2 text-sm" aria-label="Delegation formation progression">
          {["Expression", "Provisional intent", "Clarification if needed", "Authority establishment", "Governable delegation"].map((step, index, values) => <span className="flex items-center gap-2" key={step}><span className="border hairline bg-white px-3 py-2">{step}</span>{index < values.length - 1 && <span className="text-[#af5b36]">→</span>}</span>)}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-t hairline pt-6"><h3 className="font-semibold">Current deterministic Phase 1 concepts</h3><p className="mt-4 leading-7 text-[#68736e]">Human Expression, Intent Proposal, Clarification Requirement, Delegation Proposal, explicit Confirmation, Established Delegation, Revocation, and downstream delegated-action validation.</p></div>
          <div className="border-t hairline pt-6"><h3 className="font-semibold">Bounded supported claim</h3><p className="mt-4 leading-7 text-[#68736e]">Phase 1 deterministically establishes explicitly confirmed bounded delegation envelopes from well-formed supplied inputs and checks relevant authority, receiver, temporal, and revocation conditions. It does not claim to recover true human intent.</p></div>
        </div>
      </section>

      <section className="border-y hairline bg-white py-20 md:py-28"><div className="container grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Current Standing</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">Does established authority still support this exact action now?</h2>
          <div className="mt-8 grid gap-3">{[["standing_valid", "Available evidence supports current standing."], ["standing_defeated", "Expiry, revocation, failed conditions, stale evidence, or changed circumstances defeat it."], ["standing_unresolved", "Available evidence is insufficient; unknown standing does not silently become valid standing."]].map(([state, text]) => <div className="border hairline p-5" key={state}><code className="text-sm text-[#8d4427]">{state}</code><p className="mt-2 text-sm leading-6 text-[#68736e]">{text}</p></div>)}</div>
          <p className="mt-6 text-sm leading-6 text-[#68736e]">A passing Current Standing check is still not proof of execution.</p>
        </div>
        <div>
          <p className="eyebrow">Execution-Time Revalidation</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">Conditions can change between permission and consequence.</h2>
          <p className="mt-6 leading-7 text-[#68736e]">A user permits a purchase under $500. The item costs $420 when permission is produced, then $780 at checkout. “I already had permission” is not enough. Immediately before consequence, the system should ask whether authority, standing, action binding, and the conditions that justified the permit still hold.</p>
          <div className="mt-7 flex flex-wrap gap-2 font-mono text-xs">{["execution_revalidated", "execution_defeated", "execution_unresolved"].map(x => <span className="border hairline px-3 py-2" key={x}>{x}</span>)}</div>
          <aside className="mt-8 border-l-2 border-[#af5b36] pl-5 text-sm leading-6 text-[#68736e]"><strong className="text-[#17201d]">Remaining limitation:</strong> a small time-of-check/time-of-use gap can still exist between revalidation and an external side effect unless execution is atomic with the governed check.</aside>
        </div>
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Governance Memory / Internalization" title="Learn the person without replacing the person."><blockquote className="text-2xl font-medium leading-9 text-[#17201d]">“Memory may reduce uncertainty about what the human means. It may not increase what the agent is authorized to do.”</blockquote></SectionLead>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[["Preference Memory", "What the person tends to prefer."], ["Procedure Memory", "How an authorized process is usually carried out."], ["Observed Routine", "A recurring pattern the system has observed."]].map(([title, text]) => <article className="border-t-2 border-[#839188] bg-white p-6" key={title}><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#68736e]">{text}</p></article>)}</div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="prose-custom"><p>An agent may learn that a user normally orders a large coffee with two creams and no sugar. That memory can support a likely interpretation. It does not create current purchasing authority.</p><p>After repeated approved behavior, the system might instead ask: “You almost always approve this order. Would you like me to handle this automatically under a limit you choose?” Increased autonomy would then come from new human delegation—not prediction confidence.</p><p>If the human later says, “Stop putting cream in my coffee,” the system should preserve correction history and distinguish an explicit correction from another conflicting observation.</p></div>
          <div className="grid gap-4 self-start"><div className="border border-[#7e9485] bg-[#eff4ef] p-6"><Label>Governed path</Label><p className="mt-5 text-lg font-semibold">Learning → recommendation → human delegation → bounded autonomy</p></div><div className="border border-[#c8aaa0] bg-[#f6efec] p-6"><Label>Invalid shortcut</Label><p className="mt-5 text-lg font-semibold">Learning → confidence → assumed authority</p></div><p className="mt-2 text-sm leading-6 text-[#68736e]">The desired experience is an assistant that needs less explanation over time without silently acquiring more control.</p></div>
        </div>
      </section>

      <section className="bg-[#17201d] py-20 text-white md:py-28"><div className="container grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="eyebrow !text-[#d68b67]">Handoff Integrity</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">Authority should survive the transfer.</h2></div>
        <div><div className="flex flex-wrap items-center gap-2 text-sm">{["Human", "Personal agent", "Travel agent", "Booking agent", "External tool"].map((x, i, a) => <span className="flex items-center gap-2" key={x}><span className="border border-[#66736b] px-3 py-2">{x}</span>{i < a.length - 1 && <span className="text-[#d68b67]">→</span>}</span>)}</div><p className="mt-8 leading-8 text-[#c6d0c9]">Each handoff risks losing where authority came from, what limits existed, what was inferred, what changed, and when permission expires. AGS explores how authority and provenance can remain connected through those transfers.</p><p className="mt-6 text-xl font-semibold">Downstream delegation should not silently expand upstream authority.</p></div>
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Key invariants" title="Constraints the system should preserve."><p>The shorthand makes relationships inspectable. It is not presented as a complete mathematical proof.</p></SectionLead>
        <div className="mt-10 divide-y hairline border-y hairline">{invariants.map(([formula, explanation]) => <div className="grid gap-3 py-5 md:grid-cols-[.9fr_1.1fr] md:gap-10" key={formula}><code className="font-mono text-sm font-semibold text-[#8d4427]">{formula}</code><p className="text-sm leading-6 text-[#68736e]">{explanation}</p></div>)}</div>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20"><div className="container">
        <SectionLead eyebrow="Conceptual distortions" title="What the research is trying to keep from drifting."><p>These are failure modes under investigation, not claims of empirically universal laws.</p></SectionLead>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["authority", "domination"], ["assistance", "substitution of agency"], ["confidence", "false certainty"], ["optimization", "Goodharting"], ["memory", "unauthorized inheritance"], ["obedience", "blind compliance"], ["coordination", "coercion"], ["delegation", "authority expansion"]].map(([from, to]) => <div className="bg-[#f7f8f5] p-5" key={from}><span className="font-semibold">{from}</span><span className="mx-3 text-[#af5b36]">→</span><span className="text-[#68736e]">{to}</span></div>)}</div>
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Research method" title="Prediction becomes the evidence."><p>Prospective prediction is more informative than noticing a failure afterward and writing a theory that explains it.</p></SectionLead>
        <div className="mt-12 flex flex-wrap items-center gap-2 text-sm" aria-label="Research method sequence">{["Invariant removed", "Predicted distortion", "Measurable failure", "Invariant restored", "Expected recovery"].map((x, i, a) => <span className="flex items-center gap-2" key={x}><span className="border hairline bg-white px-3 py-2">{x}</span>{i < a.length - 1 && <span className="text-[#af5b36]">→</span>}</span>)}</div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">{[["Explicit invariants", "State the relationship that should remain true."], ["Prospective predictions", "Record expected failure modes before outcomes are observed."], ["Preregistration", "Freeze important predictions and measurement structures before execution."], ["Adversarial review", "Try to break the architecture and the measurement apparatus."], ["Failure preservation", "Retain unexpected results instead of tuning them away."], ["Evidence boundaries", "Keep synthetic, experimental, real-world, and production claims distinct."]].map(([title, text]) => <div className="border-t hairline pt-5" key={title}><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#68736e]">{text}</p></div>)}</div>
      </section>

      <section className="bg-white py-20 md:py-28" id="status"><div className="container">
        <SectionLead eyebrow="Implementation status" title="What exists, and what does not yet exist."><p>Status is reported per component. “Implemented” describes deterministic mechanisms; it does not imply production validation or universal safety.</p></SectionLead>
        <StatusTable />
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Current experiment review status" title="The longitudinal experiment remains unexecuted."><p>It asks whether accumulated Governance Memory reduces unresolved interpretation parameters over repeated governed interactions without expanding delegated authority.</p></SectionLead>
        <div className="mt-10 grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div className="border-l-2 border-[#af5b36] pl-6"><p className="text-4xl font-semibold tracking-[-.04em]">42</p><p className="mt-2 text-sm text-[#68736e]">prospective synthetic cases</p><p className="mt-8 break-all font-mono text-sm">unresolved_material_parameter_count</p><p className="mt-2 text-sm leading-6 text-[#68736e]">Primary metric. Authority is measured separately as a fieldwise vector, not as an overall “alignment score.”</p></div>
          <div><p className="leading-7 text-[#58645e]">An independent read-only review of the measurement adapter found six measurement and reproducibility blockers before experimental execution:</p><ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">{["Authority comparison completeness", "Positive-control isolation", "Internally coherent correction fixtures", "Complete failure preservation", "Provenance completeness", "Effective Core dependency-resolution sealing"].map(x => <li className="border hairline bg-white p-4" key={x}>{x}</li>)}</ul><p className="mt-7 text-sm leading-6 text-[#68736e]">These are measurement-apparatus findings, not observed failures of the 42 experimental cases. No experiment execution has occurred, and no outcome data is claimed. The experiment remains unfrozen until the blockers are resolved.</p></div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20 md:py-28"><div className="container">
        <SectionLead eyebrow="Evidence ladder" title="Maturity is a property of each claim."><p>Current AGS work reaches different stages. Nothing here is placed at real-world pilot or production evidence.</p></SectionLead><EvidenceLadder />
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Research timeline" title="From questions about agency toward governed personal agents."><p>This is an evolution of the research program, not a publication record.</p></SectionLead><ResearchTimeline />
      </section>

      <section className="bg-[#17201d] py-20 text-white md:py-28"><div className="container grid gap-12 lg:grid-cols-2">
        <SectionLead eyebrow="Direction / future work" title="Why this matters for personal agents."><p className="!text-[#c6d0c9]">Increasingly capable assistants may learn preferences, routines, communication style, schedules, procedures, repeated choices, and contextual behavior. A model of the person is not the person; prediction of a likely choice is not the person’s actual choice.</p></SectionLead>
        <div className="border-t border-[#52605a] pt-8"><blockquote className="text-3xl font-semibold leading-tight">“A capable assistant should need less explanation over time, not more authority.”</blockquote><p className="mt-8 leading-8 text-[#c6d0c9]">AGS could support agents that become more useful while people deliberately cultivate bounded autonomy. That is a research and product direction, not a claim that a consumer system currently exists.</p></div>
      </div></section>

      <section className="container border-t hairline py-20 md:py-28">
        <SectionLead eyebrow="Limitations" title="What AGS does not currently establish."><p>Stating the edge of the evidence is part of the architecture’s research discipline.</p></SectionLead>
        <ul className="mt-10 grid gap-x-10 border-y hairline sm:grid-cols-2">{["Solved AI alignment", "Universal correctness", "Production safety", "Truthful external observations", "Perfect semantic understanding", "Complete human intent recovery", "Complete history", "Autonomous authority creation", "Perfect prevention of every external race condition", "Real-world consumer-agent validation"].map(x => <li className="border-b hairline py-4 text-[#58645e]" key={x}>{x}</li>)}</ul>
      </section>

      <section className="container border-t hairline py-20">
        <SectionLead eyebrow="Related research" title="The larger program around AGS." />
        <div className="mt-10 grid gap-px border hairline bg-[#d9dfda] md:grid-cols-2">{[
          ["Human Agency Infrastructure", "The broader program for expanding capability without replacing authorship.", "/research/human-agency-infrastructure"],
          ["Alignment Theory", "Conceptual foundations concerned with load-bearing relationships and distortion.", "/research/alignment-theory"],
          ["Governance Memory / Internalization", "Learning preferences and routines without creating authority.", "/projects/governance-memory"],
          ["Things I Noticed", "Exploratory field notes and analogies about agency, systems, and behavior.", "/writing"],
        ].map(([title, text, href]) => <Link className="group bg-[#f7f8f5] p-7 transition-colors hover:bg-white" href={href} key={title}><h3 className="text-xl font-semibold group-hover:text-[#af5b36]">{title}</h3><p className="mt-3 leading-7 text-[#68736e]">{text}</p><span className="mt-5 inline-block text-sm">Explore →</span></Link>)}</div>
      </section>
    </main>
  );
}
