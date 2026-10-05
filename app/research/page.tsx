import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader, StatusBadge } from "@/components/Primitives";
import { researchAreas } from "@/src/data/research";
import { ICTFCard } from "@/components/ictf/ICTFCard";

export const metadata: Metadata = {
  title: "Research",
  description: "Research into human agency, delegated authority, agent governance, memory, and alignment.",
};

const foundationLinks: Record<string, string> = {
  "Alignment Theory": "/research/alignment-theory",
  "Human Agency Infrastructure": "/research/human-agency-infrastructure",
  "Alignment Governance Stack": "/projects/alignment-governance-stack",
  "Governance Memory / Internalization": "/projects/governance-memory",
  "Invariant-Constrained Transition Framework": "/research/ictf",
};

export default function ResearchPage() {
  return (
    <main>
      <section className="container py-20 md:py-28">
        <p className="eyebrow">Research index</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">Preserving legitimate agency in capable systems.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#68736e]">This work examines how authority is formed, carried, checked, and remembered when systems act on behalf of people. Different components have different evidence maturity.</p>
      </section>

      <section className="container pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            ["01 · Conceptual foundation", "Alignment Theory", "How systems distort when relationships depart from load-bearing constraints.", "/research/alignment-theory", "Conceptual"],
            ["02 · Research program", "Human Agency Infrastructure", "The umbrella program connecting human agency to increasingly capable systems.", "/research/human-agency-infrastructure", "Active Research"],
            ["03 · Technical architecture", "Alignment Governance Stack", "The implemented architecture for preserving delegated authority from intent to consequence.", "/projects/alignment-governance-stack", "Implemented"],
          ].map(([label, title, description, href, status]) => (
            <Link className="surface-card group flex min-h-80 flex-col p-6 md:p-8" href={href} key={title}>
              <p className="eyebrow">{label}</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-.03em] group-hover:text-[#a94f2d]">{title}</h2>
              <p className="mt-4 leading-7 text-[#68736e]">{description}</p>
              <div className="mt-auto pt-8"><StatusBadge>{status}</StatusBadge></div>
            </Link>
          ))}
          <ICTFCard />
        </div>
      </section>

      <section className="border-y hairline bg-[#e9eee9] py-20">
        <div className="container">
          <SectionHeader eyebrow="Research map" title="Foundations, mechanisms, and experiments." intro="Status labels describe evidence maturity rather than importance." />
          <div className="grid gap-12 md:grid-cols-2">
            {researchAreas.map((group) => (
              <section key={group.group}>
                <h2 className="border-b border-[#bfc9c1] pb-4 text-xl font-semibold">{group.group}</h2>
                <div>
                  {group.items.map((item) => {
                    const href = foundationLinks[item.title];
                    const content = <><span>{item.title}</span><StatusBadge>{item.status}</StatusBadge></>;
                    return href
                      ? <Link href={href} key={item.title} className="flex min-h-16 items-center justify-between gap-5 border-b border-[#cbd3cc] py-4 transition-colors hover:text-[#a94f2d]">{content}</Link>
                      : <div key={item.title} className="flex min-h-16 items-center justify-between gap-5 border-b border-[#cbd3cc] py-4">{content}</div>;
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
