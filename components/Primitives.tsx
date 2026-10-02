import Link from "next/link";

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return <span className="research-label">{children}</span>;
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <header className="mb-10 max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-[-.04em] md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-xl leading-7 text-[#68736e]">{intro}</p>}
    </header>
  );
}

export function WorkCard({ item, featured = false }: { item: { title: string; slug: string; shortDescription: string; status: string; category: string }; featured?: boolean }) {
  const researchRoutes: Record<string, string> = {
    "alignment-theory": "/research/alignment-theory",
    "human-agency-infrastructure": "/research/human-agency-infrastructure",
  };
  const href = researchRoutes[item.slug] || "/projects/" + item.slug;
  return (
    <Link href={href} className={(featured ? "md:col-span-2 " : "") + "surface-card group relative flex min-h-full flex-col p-6 md:p-8"}>
      <span className="absolute right-6 top-6 text-[#a94f2d] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
      <div className="pr-10"><p className="eyebrow mb-3">{item.category}</p><h3 className={(featured ? "text-3xl md:text-4xl" : "text-2xl") + " font-semibold tracking-[-.03em] group-hover:text-[#a94f2d]"}>{item.title}</h3></div>
      <p className={(featured ? "max-w-3xl text-lg leading-8" : "leading-7") + " mt-5 text-[#68736e]"}>{item.shortDescription}</p>
      <div className="mt-auto pt-7"><StatusBadge>{item.status}</StatusBadge></div>
    </Link>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="border border-[#d4dbd6] bg-[#f6f7f3] px-2 py-1 text-xs text-[#68736e]">#{tag}</span>)}</div>;
}
