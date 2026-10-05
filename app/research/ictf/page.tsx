import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader, StatusBadge } from "@/components/Primitives";
import { HazardProfiles } from "@/components/ictf/HazardProfiles";
import { absoluteUrl } from "@/src/config/site";
import { ictf, ictfPractices, ictfTimeline } from "@/src/data/ictf";

const title = `${ictf.title} | Michael Bower`;
const description = "A formal measurement framework for consequential agent systems, adaptive governance escape, runtime fidelity, trajectory invariants, and independent AI governance evaluation.";
const canonical = absoluteUrl(ictf.route);
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: { title, description, type: "article", url: canonical },
  keywords: ["ICTF", "AI alignment", "AI governance", "agentic AI", "AI safety", "runtime governance", "adaptive AI agents", "autonomous agents", "AI security", "consequential agent systems", "trajectory invariants"],
};

const actionClass = "inline-flex min-h-12 items-center justify-center border border-[#aeb9b1] bg-white px-5 py-3 text-center text-sm font-semibold transition-colors hover:border-[#a94f2d] hover:text-[#a94f2d]";

export default function ICTFPage() {
  return (
    <main>
      <section className="container py-20 md:py-28">
        <Link href="/research" className="text-link text-sm">← Research index</Link>
        <p className="eyebrow mt-10">Independent measurement · ICTF</p>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.3rem,5.8vw,4.75rem)] font-semibold leading-[1.04] tracking-[-.05em]">Invariant-Constrained Transition Framework <span className="text-[#68736e]">(ICTF)</span></h1>
        <p className="mt-7 max-w-3xl font-serif text-2xl leading-9 md:text-3xl">A Formal Measurement Framework for Consequential Agent Systems</p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#58645e]">ICTF is a measurement framework for consequential agent systems. It separates representation, proposal, authorization, execution, independent evaluation, and trajectory-level constraints so that governance failures can be measured rather than collapsed into a single “alignment” or “safety” score.</p>
        <div className="mt-8 flex flex-wrap gap-2">{["Working Preprint v1.2.1", "October 2026", "Not peer reviewed", "Active research"].map(label => <StatusBadge key={label}>{label}</StatusBadge>)}</div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className={actionClass + " !border-[#17201d] !bg-[#17201d] !text-white hover:!bg-[#33403a]"} href={ictf.overview}>Read 1-Page Overview</a>
          <a className={actionClass} href={ictf.preprint}>Read Full Technical Preprint</a>
          <a className={actionClass} href={ictf.experiment}>View First Experiment</a>
        </div>
        <aside className="mt-12 border-l-2 border-[#a94f2d] pl-6">
          <p className="max-w-3xl text-xl font-medium leading-8">ICTF is the measuring instrument. AGS is one system being measured.</p>
          <p className="mt-3 max-w-3xl leading-7 text-[#58645e]">AGS is a planned evaluation target. The first ICTF synthetic benchmark did not use AGS. AGS has not yet been evaluated with this benchmark.</p>
        </aside>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-16 md:py-20">
        <div className="container">
          <h2 className="eyebrow">Core idea</h2>
          <blockquote className="mt-6 max-w-4xl font-serif text-3xl leading-snug tracking-[-.025em] md:text-4xl">“Governance defines what may happen. Optimization chooses among what may happen. Evidence determines whether the distinction held in reality.”</blockquote>
          <p className="mt-8 max-w-2xl leading-7 text-[#58645e]">Keep these failure surfaces separately measurable:</p>
          <ul className="mt-5 grid gap-x-10 md:grid-cols-2">{[
            ["World state", "admitted representation"], ["Proposal", "executable action"], ["Operational gate", "independent evaluation"], ["Local checks", "trajectory invariants"], ["Model-relative compliance", "invariant adequacy"],
          ].map(([left, right]) => <li key={left} className="border-t border-[#bfc9c1] py-4 leading-7"><span className="font-medium">{left}</span> <span className="px-1 text-[#a94f2d]">≠</span> {right}</li>)}</ul>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#58645e]">Neither ICTF nor AGS is a solution to AI alignment. Compliance with specified invariants does not establish that those invariants are complete, legitimate, or adequate.</p>
        </div>
      </section>

      <section id="timeline" className="container scroll-mt-24 py-20 md:py-28">
        <SectionHeader eyebrow="Research lineage" title="From architecture to independent evidence." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01 · Alignment Theory / HAPI", "The conceptual program asks how capable systems can preserve human agency and load-bearing constraints.", "/research/alignment-theory"],
            ["02 · AGS architecture", "AGS turns these questions into an architecture for delegated authority, governance, and execution.", "/projects/alignment-governance-stack"],
            ["03 · Independent measurement", "Architecture needs an evaluator that can disagree with its gate. ICTF separates the measurements needed to test those governance claims.", "#ictf-vs-ags"],
          ].map(([label, copy, href]) => <div className="border-t-2 border-[#aeb9b1] py-5" key={label}><h3 className="font-semibold"><Link className="text-link" href={href}>{label}</Link></h3><p className="mt-5 leading-7 text-[#68736e]">{copy}</p></div>)}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#68736e]">HAPI refers to the Human Agency Infrastructure program in the preprint. <Link className="text-link" href="/research/human-agency-infrastructure">Explore the broader research program</Link>.</p>
        <p className="mb-10 mt-12 text-sm leading-6 text-[#68736e]">Milestone times below come from linked Git commits, shown in Pacific time. They mark recorded artifacts, not inferred run start or finish times.</p>
        <ol className="ml-2 border-l border-[#aeb9b1]">
          {ictfTimeline.map((event, index) => <li key={event.title} className="relative pb-12 pl-7 last:pb-0 md:pl-10">
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#a94f2d]" aria-hidden="true" />
            <div className="grid gap-3 md:grid-cols-[.65fr_1.35fr] md:gap-10">
              <div><p className="eyebrow">{String(index + 1).padStart(2, "0")} · {event.label}</p><p className="mt-3 text-sm leading-6 text-[#68736e]">{event.date}</p></div>
              <div><h3 className="text-2xl font-semibold tracking-[-.025em]">{event.title}</h3><p className="mt-4 max-w-2xl leading-7 text-[#58645e]">{event.description}</p>{event.href && <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm"><a className="text-link" href={event.href}>{event.source} →</a>{event.secondaryHref && <a className="text-link" href={event.secondaryHref}>{event.secondarySource} →</a>}</div>}</div>
            </div>
          </li>)}
        </ol>
      </section>

      <section id="artifacts" className="border-y hairline bg-white py-20">
        <div className="container">
          <SectionHeader eyebrow="Research artifacts" title="The framework, at two depths." intro="The technical preprint is preserved as the pre-experiment version. Results and later interpretation are recorded separately." />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex flex-col border hairline bg-[#f6f7f3] p-7 md:p-9"><p className="eyebrow">01 · PDF · 1 page</p><h3 className="mt-6 text-3xl font-semibold tracking-[-.03em]">Quick Overview</h3><p className="mt-3 font-medium">1-page ICTF summary</p><p className="mt-4 leading-7 text-[#68736e]">Understand the framework in a few minutes: core distinctions, measurement targets, and boundary conditions.</p><a href={ictf.overview} className={actionClass + " mt-8 self-start"}>Read 1-Page Summary</a></article>
            <article className="flex flex-col border border-[#aeb9b1] bg-[#f6f7f3] p-7 md:p-9"><p className="eyebrow">02 · PDF · 25 pages</p><h3 className="mt-6 text-3xl font-semibold tracking-[-.03em]">Technical Preprint</h3><p className="mt-3 font-medium">25-page ICTF v1.2.1</p><div className="mt-4"><StatusBadge>Frozen pre-experiment version</StatusBadge></div><p className="mt-4 leading-7 text-[#68736e]">Formal model, hypotheses, experimental program, threat model, HAPI/AGS mapping, limitations, and references.</p><a href={ictf.preprint} className={actionClass + " mt-8 self-start"}>Read Full Preprint</a></article>
          </div>
        </div>
      </section>

      <section id="first-result" className="container scroll-mt-24 py-20 md:py-28">
        <SectionHeader eyebrow="First empirical result" title="First Preregistered ICTF Benchmark" intro="The first experiment tested whether adaptive proposers would increasingly discover weaknesses in imperfect synthetic governance gates." />
        <dl className="grid grid-cols-2 gap-px border hairline bg-[#d4dbd6] md:grid-cols-4">{[["720,000", "Synthetic episodes"], ["2", "Gate-error geometries"], ["4", "Proposer/search policies"], ["9", "Interaction budgets"]].map(([value, label]) => <div className="bg-[#f6f7f3] p-5 md:p-7" key={label}><dt className="text-sm text-[#68736e]">{label}</dt><dd className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-4xl">{value}</dd></div>)}</dl>
        <p className="mt-5 text-sm leading-7 text-[#58645e]">Synthetic gates and synthetic proposer/search policies only. This benchmark provides no empirical evaluation of AGS.</p>
        <div className="mt-10 border-l-4 border-[#a94f2d] bg-[#f1dfd5] p-6 md:p-9">
          <p className="eyebrow">Preregistered / confirmatory</p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.035em] md:text-4xl">Confirmatory result: H4 not supported</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8">The preregistered positive hazard-slope prediction did not survive the first experiment. All four confirmatory adaptive conditions produced non-positive estimated slopes.</p>
          <a href={`${ictf.experiment}/POST_RESULT_001.md`} className="text-link mt-6 inline-block text-sm font-semibold">Read the confirmatory result record →</a>
        </div>
        <div className="mt-10 border hairline bg-white p-6 md:p-9">
          <p className="eyebrow">Exploratory / post-result</p>
          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">Post-result exploratory finding</h3>
          <p className="mt-5 max-w-3xl leading-8 text-[#58645e]">Approximately matched baseline false-admission rates produced very different temporal risk profiles depending on search policy and error geometry. These observations generate new hypotheses; they do not change the negative confirmatory result.</p>
          <HazardProfiles />
          <p className="mt-8 border-t hairline pt-6 text-sm leading-7 text-[#58645e]"><strong className="text-[#17201d]">Descriptive / post-result:</strong> In the structured score-feedback condition, cumulative escape relative to random peaked at approximately 1.42× at interaction budget B=8. That advantage reversed at longer horizons.</p>
          <p className="mt-4 text-sm leading-7 text-[#58645e]">The synthetic proposal space, error geometry, utility function, and fixed search policies limit generalization. Episode summaries cannot cleanly separate search dynamics from survivor-selection effects.</p>
          <a href={`${ictf.experiment}/POST_RESULT_002_EXPLORATORY.md`} className="text-link mt-6 inline-block text-sm font-semibold">Read the exploratory report and limitations →</a>
        </div>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div><SectionHeader eyebrow="Post-result hypothesis / future research" title="Reachable Error Sets" /><p className="leading-8 text-[#58645e]">A weakness may exist continuously while being immediately reachable to one search policy, reached much later by another, or encountered approximately at random by another.</p><p className="mt-5 leading-8 text-[#58645e]">The first experiment suggests that static error rate alone may be insufficient to characterize search-conditioned governance risk. This is a hypothesis for future testing, not a confirmed theorem.</p></div>
          <div className="self-start border hairline bg-[#f6f7f3] p-7 md:p-9">
            <p className="eyebrow">A candidate explanatory structure</p>
            <p className="my-8 font-serif text-4xl md:text-5xl" aria-label="R sub pi of t intersect F">R<sub>π</sub>(t) ∩ F</p>
            <dl className="space-y-5 leading-7"><div><dt className="font-semibold">F · false-admission region</dt><dd className="mt-1 text-[#58645e]">The region where the operational gate admits independently invalid proposals.</dd></div><div><dt className="font-semibold">R<sub>π</sub>(t) · effectively reachable region</dt><dd className="mt-1 text-[#58645e]">The region effectively reachable by proposer/search policy π by time t.</dd></div></dl>
            <p className="mt-7 border-t hairline pt-6 text-sm leading-7 text-[#58645e]"><strong className="text-[#17201d]">Historical distinction:</strong> Before this experiment, v1.2.1 already identified a reachable-error-set or query-complexity bound as a future mathematical target (§7 and the research agenda). The post-result finding motivates investigating that target; it does not establish the bound.</p>
          </div>
        </div>
      </section>

      <section id="ictf-vs-ags" className="container scroll-mt-24 py-20 md:py-28">
        <SectionHeader eyebrow="ICTF vs AGS" title="An instrument and an architecture." />
        <blockquote className="mb-10 max-w-4xl font-serif text-3xl leading-snug md:text-4xl">ICTF is the measuring instrument. AGS is one system being measured.</blockquote>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { name: "ICTF", role: "Measurement framework", items: ["Independent evaluation", "False-admission measurement", "Conditional hazard", "Finite-budget escape", "Observability decomposition", "Runtime-fidelity measurement", "Trajectory-invariant measurement", "Can produce evidence against AGS"] },
            { name: "AGS", role: "Governance architecture", items: ["Human Agency", "Governance Substrate", "Context Admission", "Agent Reasoning", "PGDL · Pre-Gate Deliberation", "AAG · Agent Action Gate", "Runtime Binding", "Receipts", "Governance Memory", "Continuity Console"] },
          ].map(column => <article className="border hairline bg-white p-7 md:p-9" key={column.name}><p className="eyebrow">{column.role}</p><h3 className="mt-4 text-3xl font-semibold">{column.name}</h3><ul className="mt-7 divide-y divide-[#d4dbd6]">{column.items.map(item => <li className="py-3 leading-6 text-[#58645e]" key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="mt-7 border-l-2 border-[#a94f2d] pl-5 leading-8">The first ICTF synthetic benchmark did not use AGS. AGS testing is the next experimental phase; those results do not exist yet.</p>
      </section>

      <section className="border-y hairline bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeader eyebrow="Research practices" title="Keep predictions and outcomes distinct." />
          <ul className="grid gap-x-8 sm:grid-cols-2">{ictfPractices.map(practice => <li className="border-t hairline py-5 leading-7 text-[#58645e]" key={practice}>{practice}</li>)}</ul>
        </div>
      </section>

      <section className="bg-[#17201d] py-20 text-white md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <div><p className="eyebrow !text-[#d68b67]">Active research</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">Current Status</h2></div>
          <div className="space-y-6 text-lg leading-8 text-[#bdc9c1]"><p>ICTF v1.2.1 is frozen as the pre-experiment technical version. The first 720,000-episode synthetic adaptive-search benchmark is complete. The preregistered H4 increasing-hazard hypothesis was not supported.</p><p>Post-result analysis identified a more specific research direction involving search policy, feedback, error-region geometry, and temporal reachability. The next experimental phase will evaluate AGS components individually and in combination.</p><p className="text-sm">Planned ablations: AAG, PGDL + AAG, Runtime Binding, and fuller AGS configurations. No AGS benchmark results are available yet.</p></div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="eyebrow">Links / resources</h2>
        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 text-sm font-semibold"><a className="text-link" href={ictf.experiment}>View First Preregistered Experiment →</a><a className="text-link" href={ictf.repository}>View AGS Repository →</a><Link className="text-link" href="/projects/alignment-governance-stack">Explore AGS architecture →</Link></div>
        <p className="mt-7 max-w-3xl text-sm leading-7 text-[#68736e]">The experiment lives inside the AGS repository on the <code className="break-all">experiment/ictf-adaptive-gate-search</code> branch, not main. ICTF does not have a standalone GitHub repository.</p>
      </section>
    </main>
  );
}
