import type { Metadata } from "next";
import { StatusBadge, WorkCard } from "@/components/Primitives";
import { projectDirections, work } from "@/src/data/work";

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
      <section className="mt-16 border-t hairline pt-8">
        <div className="grid gap-4 md:grid-cols-[.42fr_1.58fr]">
          <div><p className="eyebrow">In development</p><p className="mt-4 max-w-xs text-sm leading-6 text-[#68736e]">Active project directions that are not represented as released products.</p></div>
          <div className="grid gap-3">
            {projectDirections.map((item) => (
              <article className="border hairline bg-white p-6 md:p-7" key={item.slug}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div><p className="eyebrow mb-3">{item.category}</p><h2 className="text-2xl font-semibold tracking-[-.03em]">{item.title}</h2></div>
                  <StatusBadge>{item.status}</StatusBadge>
                </div>
                <p className="mt-5 max-w-2xl leading-7 text-[#68736e]">{item.shortDescription}</p>
                {item.longDescription && <p className="mt-4 max-w-2xl border-l border-[#a94f2d] pl-4 text-sm leading-6 text-[#68736e]">{item.longDescription}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
