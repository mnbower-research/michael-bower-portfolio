import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { KnowledgeLayers } from "@/components/HomeVisuals";
import { SectionHeader, WorkCard } from "@/components/Primitives";
import { work } from "@/src/data/work";

const lifecycle = ["Expression", "Delegation", "Context", "Reasoning", "Action Gate", "Standing", "Runtime", "Revalidation", "Consequence", "Receipts", "Memory"];

export default function Home() {
  return (
    <main>
      <section className="container grid gap-12 py-20 md:py-28 lg:grid-cols-[1.18fr_.72fr] lg:items-center">
        <div>
          <p className="eyebrow">Michael Bower · Human Agency Infrastructure</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,5.35rem)] font-semibold leading-[.98] tracking-[-.065em]">Systems for preserving human agency as AI acts on our behalf.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#58645e] md:text-xl">Researching and building architectures that keep delegated authority connected to human intent—from expression through execution and consequence.</p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm">
            <Link href="/projects/alignment-governance-stack" className="text-link font-semibold">Explore AGS →</Link>
            <Link href="/research" className="text-link">Research program →</Link>
            <Link href="/writing" className="text-link">Things I Noticed →</Link>
          </div>
        </div>
        <AuthorPortrait variant="hero" className="mx-auto lg:ml-auto lg:mr-0" />
      </section>

      <section className="border-y hairline bg-[#eef1ed]">
        <div className="container grid gap-4 py-7 md:grid-cols-[.28fr_1fr] md:items-center">
          <p className="eyebrow">Working question</p>
          <p className="max-w-3xl text-lg font-medium leading-8">How can delegation reduce human cognitive load without reducing human authorship?</p>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <SectionHeader eyebrow="Current work" title="A connected body of research." intro="Conceptual foundations, an umbrella research program, implemented governance architecture, and experimental work on memory." />
        <div className="grid gap-4 md:grid-cols-2">
          {work.map((item, index) => <WorkCard key={item.slug} item={item} featured={index === 0} />)}
        </div>
      </section>

      <section className="bg-[#17201d] py-20 text-[#f7f8f5] md:py-28">
        <div className="container">
          <p className="eyebrow !text-[#d68b67]">A central distinction</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h2 className="text-4xl font-semibold tracking-[-.05em] md:text-6xl">KNOWLEDGE <span className="text-[#d68b67]">≠</span> AUTHORITY</h2>
            <p className="text-lg leading-8 text-[#cbd3cc]">What an agent knows about you is not the same as what it is allowed to do for you.</p>
          </div>
          <KnowledgeLayers />
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <SectionHeader eyebrow="Research architecture" title="Keep the thread intact." intro="Authority, provenance, context, scope, expiration, and evidence should remain coherent as responsibility moves through a system." />
          <div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-0 sm:grid-cols-3">
              {lifecycle.map((step, index) => <li className="relative border-t hairline py-4 pr-4" key={step}><span className="font-mono text-[.65rem] text-[#a94f2d]">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-semibold">{step}</p></li>)}
            </ol>
            <Link href="/projects/alignment-governance-stack" className="text-link mt-8 inline-block text-sm">See the full architecture →</Link>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20 md:py-24">
        <div className="container grid gap-12 md:grid-cols-[.72fr_1.28fr]">
          <SectionHeader eyebrow="Research approach" title="Make constraints visible. Preserve failure." intro="The method aims to distinguish predictions made in advance from explanations created after the fact." />
          <ol className="grid gap-px border hairline bg-[#c5cec7] sm:grid-cols-2">
            {["Explicit invariants", "Prospective predictions", "Preregistered experiments", "Adversarial review", "Failure preservation", "Evidence boundaries"].map((item, index) => <li key={item} className="bg-[#f6f7f3] p-5"><span className="font-mono text-xs text-[#a94f2d]">0{index + 1}</span><p className="mt-3 font-semibold">{item}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeader eyebrow="Things I Noticed" title="Observations before they become systems." intro="Short field notes, analogies, and thought experiments about agency, delegation, memory, behavior, and coordination." />
            <Link href="/writing" className="text-link text-sm">Browse the archive →</Link>
          </div>
          <Link href="/writing/the-ant-trail" className="surface-card group relative p-7 md:p-10">
            <p className="eyebrow">Sample / draft · Field note</p>
            <h3 className="mt-8 font-serif text-4xl font-medium tracking-[-.04em] group-hover:text-[#a94f2d]">The Ant Trail</h3>
            <p className="mt-5 max-w-xl leading-8 text-[#68736e]">A short field note about obstacles, adaptation, and the difference between following a pattern and authorizing a decision.</p>
            <span className="mt-8 inline-block text-sm">Read the note →</span>
          </Link>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="container grid gap-10 py-20 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">About the work</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.04em] md:text-5xl">From questions about human agency to implemented agent governance.</h2><p className="mt-6 max-w-2xl leading-8 text-[#68736e]">The work connects conceptual foundations, systems research, and implementation around delegated AI, memory, authority continuity, and execution boundaries.</p></div>
          <Link href="/about" className="text-link text-sm">About Michael →</Link>
        </div>
      </section>
    </main>
  );
}
