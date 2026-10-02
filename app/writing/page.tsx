import type { Metadata } from "next";
import Link from "next/link";
import { TagList } from "@/components/Primitives";
import { posts } from "@/src/data/writing";

export const metadata: Metadata = {
  title: "Things I Noticed",
  description: "Field notes, analogies, and thought experiments about human agency, AI, delegation, memory, and systems.",
};

export default function WritingPage() {
  return (
    <main>
      <section className="border-b hairline bg-[#f1eee7]">
        <div className="container grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div><p className="eyebrow">Things I Noticed</p><h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.02] tracking-[-.05em] md:text-7xl">Field notes on larger mechanisms.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#68736e]">Short essays, analogies, and thought experiments. Exploratory writing rather than formal research findings.</p></div>
          <div className="border-l border-[#c9c4b9] pl-6 text-sm leading-7 text-[#68736e]">Ordinary observations can expose the shape of a system before the system has a name.</div>
        </div>
      </section>
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          {posts.map((post, index) => (
            <article key={post.slug} className="grid gap-6 border-t hairline py-9 sm:grid-cols-[7rem_1fr] md:py-12">
              <div><span className="font-mono text-xs text-[#a94f2d]">0{index + 1}</span><time className="mt-3 block text-xs uppercase tracking-[.1em] text-[#68736e]" dateTime={post.date}>{post.date}</time>{post.draft && <span className="mt-3 inline-block text-[.65rem] font-bold uppercase tracking-[.12em] text-[#a94f2d]">Sample / Draft</span>}</div>
              <div><Link href={"/writing/" + post.slug} className="group"><h2 className="font-serif text-3xl font-medium tracking-[-.035em] group-hover:text-[#a94f2d] md:text-4xl">{post.title}</h2><p className="mt-4 max-w-2xl leading-8 text-[#68736e]">{post.description}</p><span className="text-link mt-6 inline-block text-sm">Read field note →</span></Link><div className="mt-6"><TagList tags={post.tags} /></div></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
