import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/Primitives";

export const metadata: Metadata = {
  title: "Human Agency Infrastructure",
  description: "The umbrella research program exploring how capable systems can expand human capability without silently replacing human authorship or authority.",
};

export default function HumanAgencyInfrastructurePage() {
  const branches = ["Delegation Formation", "Current Standing", "Execution-Time Revalidation", "Governance Memory", "Handoff Integrity"];
  return (
    <main>
      <section className="container py-20 md:py-28">
        <StatusBadge>Active Research</StatusBadge>
        <p className="eyebrow mt-8">Human Agency Infrastructure</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">Capability without the quiet loss of authorship.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#58645e]">Human Agency Infrastructure is the broader research program exploring how increasingly capable systems can expand human capability without silently replacing human authorship or authority.</p>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20 md:py-24">
        <div className="container">
          <p className="eyebrow">Research hierarchy</p>
          <div className="mx-auto mt-12 max-w-3xl">
            {[
              ["Alignment Theory", "Conceptual foundation", "/research/alignment-theory"],
              ["Human Agency Infrastructure", "Umbrella research program", ""],
              ["Alignment Governance Stack", "Technical governance architecture", "/projects/alignment-governance-stack"],
            ].map(([title, role, href], index) => (
              <div key={title}>
                {href ? <Link href={href} className="surface-card group grid gap-3 p-6 sm:grid-cols-[1fr_auto] sm:items-center"><h2 className="text-xl font-semibold group-hover:text-[#a94f2d]">{title}</h2><span className="text-sm text-[#68736e]">{role}</span></Link> : <div className="border-2 border-[#a94f2d] bg-[#f6f7f3] p-6 shadow-[8px_8px_0_#d8dfda] sm:flex sm:items-center sm:justify-between"><h2 className="text-xl font-semibold">{title}</h2><span className="mt-2 block text-sm text-[#68736e] sm:mt-0">{role}</span></div>}
                {index < 2 && <div className="mx-auto h-10 w-px bg-[#9eaaa2]" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 h-8 w-px bg-[#9eaaa2]" aria-hidden="true" />
          <div className="mx-auto h-px max-w-4xl bg-[#9eaaa2]" aria-hidden="true" />
          <div className="mx-auto grid max-w-5xl gap-2 pt-5 sm:grid-cols-2 lg:grid-cols-5">{branches.map((branch, index) => <div className="relative border hairline bg-[#f6f7f3] p-4 text-center text-sm font-semibold" key={branch}><span className="absolute -top-5 left-1/2 h-5 w-px bg-[#9eaaa2]" aria-hidden="true" /><span className="font-mono text-[.6rem] text-[#a94f2d]">0{index + 1}</span><p className="mt-2">{branch}</p></div>)}</div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><p className="eyebrow">The program question</p><blockquote className="mt-5 text-3xl font-semibold leading-tight tracking-[-.035em]">How can increasingly capable systems act for humans without silently replacing human authority?</blockquote></div>
          <div className="prose-custom text-lg"><p>The focus is not only on whether a system can complete a task. It is on whether the resulting capability remains attributable to, bounded by, and revisable by the human whose agency the system is meant to extend.</p><p>AGS is the primary implemented architecture within this program. Governance Memory and longitudinal internalization research explore how systems might become easier to work with over time without treating accumulated knowledge as new permission.</p></div>
        </div>
        <Link href="/projects/alignment-governance-stack" className="text-link mt-12 inline-block text-sm font-semibold">Explore the Alignment Governance Stack →</Link>
      </section>
    </main>
  );
}
