import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/Primitives";

export const metadata: Metadata = {
  title: "Alignment Theory",
  description: "Conceptual research into load-bearing relationships, system coherence, distortion, and recoverable alignment.",
};

export default function AlignmentTheoryPage() {
  return (
    <main>
      <section className="container py-20 md:py-28">
        <StatusBadge>Conceptual</StatusBadge>
        <p className="eyebrow mt-8">Alignment Theory</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-.05em] md:text-7xl">What keeps a system coherent under pressure?</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#58645e]">The conceptual work that preceded AGS examines how systems distort when relationships depart from load-bearing constraints—and how coherence can be preserved or restored.</p>
      </section>

      <section className="border-y hairline bg-white py-20">
        <div className="container">
          <p className="eyebrow">A conceptual frame</p>
          <div className="mt-10 grid gap-0 border hairline md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {[
              ["Pressure", "A force, demand, incentive, or changing condition acts on the system."],
              ["Relationship / constraint", "A load-bearing relation determines what must remain true."],
              ["Coherence or distortion", "The system either preserves that relation or drifts into a changed form."],
            ].map(([title, description], index) => (
              <div className="relative min-h-56 p-7 md:p-8" key={title}>
                <span className="font-mono text-xs text-[#a94f2d]">0{index + 1}</span>
                <h2 className="mt-8 font-serif text-2xl font-medium">{title}</h2>
                <p className="mt-4 leading-7 text-[#68736e]">{description}</p>
              </div>
            )).reduce<React.ReactNode[]>((nodes, node, index) => [...nodes, node, index < 2 ? <div className="flex items-center justify-center border-y hairline px-4 py-2 text-[#a94f2d] md:border-x md:border-y-0" aria-hidden="true" key={"arrow-" + index}>→</div> : null], [])}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">From theory to inquiry</p><h2 className="mt-4 font-serif text-4xl font-medium tracking-[-.04em]">A concept becomes useful when it can constrain a prediction.</h2></div>
          <ol className="grid gap-px border hairline bg-[#d4dbd6] sm:grid-cols-2">
            {["Concept", "Invariant", "Mechanism", "Prediction", "Experiment"].map((item, index) => <li className="bg-[#f6f7f3] p-6" key={item}><span className="font-mono text-xs text-[#a94f2d]">0{index + 1}</span><p className="mt-8 text-xl font-semibold">{item}</p></li>)}
          </ol>
        </div>
        <div className="prose-custom mt-16 border-t hairline pt-10 text-lg"><p>This direction is conceptual rather than a claim of complete formal theory. Its role in the larger program is to identify the relationships that later architecture and experiments can make explicit, govern, and test.</p></div>
      </section>

      <section className="bg-[#17201d] py-16 text-white"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow !text-[#d68b67]">Next in the research lineage</p><h2 className="mt-3 text-3xl font-semibold">Human Agency Infrastructure</h2><p className="mt-4 max-w-xl leading-7 text-[#bdc9c1]">The broader program that carries these conceptual questions into AI systems and delegated agency.</p></div><Link className="text-link shrink-0 text-sm" href="/research/human-agency-infrastructure">Continue to HAI →</Link></div></section>
    </main>
  );
}
