import type { Metadata } from "next";
import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";

export const metadata: Metadata = {
  title: "About",
  description: "Michael Bower is an independent researcher and builder focused on human agency, delegated authority, memory, alignment, and agent governance.",
};

const pathways = [
  ["Alignment Governance Stack", "Implemented governance architecture", "/projects/alignment-governance-stack"],
  ["Alignment Theory", "Conceptual foundation", "/research/alignment-theory"],
  ["Human Agency Infrastructure", "Umbrella research program", "/research/human-agency-infrastructure"],
  ["Things I Noticed", "Field notes and exploratory writing", "/writing"],
  ["Projects", "Build-oriented work", "/projects"],
];

export default function AboutPage() {
  return (
    <main>
      <section className="container py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <AuthorPortrait variant="profile" className="mx-auto lg:mx-0" />
          <div><p className="eyebrow">About Michael Bower</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">Independent research and building around human agency.</h1><div className="prose-custom mt-10 text-lg"><p>I am an independent researcher and builder focused on human agency, AI systems, delegated authority, memory, alignment, and agent governance.</p><p>My path into AI came through broader questions about human agency and alignment rather than traditional AI research. Those conceptual questions gradually developed into implemented agent-governance architecture.</p><p>The focus today is increasingly on delegated AI systems, memory, authority continuity, execution boundaries, and how increasingly capable personal agents can reduce human cognitive load without quietly replacing human decision-making.</p></div></div>
        </div>
      </section>
      <section className="border-y hairline bg-[#e9eee9] py-20">
        <div className="container"><p className="eyebrow">Explore the work</p><div className="mt-8 grid gap-px border hairline bg-[#c5cec7] md:grid-cols-2">{pathways.map(([title, description, href]) => <Link className="group bg-[#f6f7f3] p-6 md:p-8" href={href} key={title}><h2 className="text-xl font-semibold group-hover:text-[#a94f2d]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#68736e]">{description}</p><span className="mt-5 inline-block text-sm">Explore →</span></Link>)}</div></div>
      </section>
    </main>
  );
}
