import type { Metadata } from "next";
import { WorkCard } from "@/components/Primitives";
import { work } from "@/src/data/work";

export const metadata: Metadata = {
  title: "Projects",
  description: "Implemented and build-oriented work in AI agent governance, human agency, and systems research.",
};

export default function ProjectsPage() {
  return (
    <main className="container py-20 md:py-28">
      <header className="mb-12 max-w-3xl"><p className="eyebrow">Projects</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.05em] md:text-7xl">Research made tangible.</h1><p className="mt-6 max-w-2xl leading-8 text-[#68736e]">Implemented and build-oriented work. Unfinished directions are described as such; this is not a catalog of released products.</p></header>
      <div className="grid gap-4 md:grid-cols-2">
        {work.slice(0, 2).map((item, index) => <WorkCard key={item.slug} item={item} featured={index === 0} />)}
      </div>
      <div className="mt-16 grid gap-8 border-t hairline pt-8 md:grid-cols-[.5fr_1.5fr]"><p className="eyebrow">Future project space</p><p className="max-w-2xl leading-7 text-[#68736e]">Personal agent applications, evaluation tools, conformance tooling, and other technical projects can be added here as they become sufficiently developed to represent accurately.</p></div>
    </main>
  );
}
