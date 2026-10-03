import type { Metadata } from "next";
import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { SocialLinks } from "@/components/SocialLinks";

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
          <div><p className="eyebrow">About Michael Bower</p><h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.4vw,4.9rem)] font-semibold leading-[1.01] tracking-[-.055em]">Building AI systems that can act for us without replacing us.</h1><div className="prose-custom mt-8 max-w-[65ch] text-lg"><p>I’m an independent researcher and builder working on AI alignment, delegated authority, memory, and agent governance. My work focuses on a simple problem: as AI becomes more capable of acting on our behalf, how do we make sure human authority remains connected to what it does?</p><p>I didn’t enter AI through a traditional computer science or machine-learning path. I started by studying recurring patterns in human agency, alignment, judgment, and behavior. Those questions eventually led me to formalize Alignment Theory, Human Agency Infrastructure, and the Alignment Governance Stack (AGS).</p><p>Today, I’m building and testing architectures for agents that can learn a person, reduce cognitive load, and take meaningful action without confusing prediction, preference, or familiarity with permission.</p></div><div className="mt-10 border-t hairline pt-6"><p className="eyebrow mb-4">Elsewhere</p><SocialLinks className="text-[#58645e]" /></div></div>
        </div>
      </section>
      <section className="border-y hairline bg-[#e9eee9] py-20">
        <div className="container"><p className="eyebrow">Explore the work</p><div className="mt-8 grid gap-px border hairline bg-[#c5cec7] md:grid-cols-2">{pathways.map(([title, description, href]) => <Link className="group bg-[#f6f7f3] p-6 md:p-8" href={href} key={title}><h2 className="text-xl font-semibold group-hover:text-[#a94f2d]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#68736e]">{description}</p><span className="mt-5 inline-block text-sm">Explore →</span></Link>)}</div></div>
      </section>
    </main>
  );
}
