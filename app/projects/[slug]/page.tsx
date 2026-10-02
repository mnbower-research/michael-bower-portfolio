import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/Primitives";
import { AGSPage } from "@/components/ags/AGSPage";
import { work } from "@/src/data/work";
import { absoluteUrl } from "@/src/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = work.find((entry) => entry.slug === params.slug);
  if (!item) return {};
  const isAGS = item.slug === "alignment-governance-stack";
  const title = isAGS ? "Alignment Governance Stack (AGS) | Michael Bower" : item.title;
  const description = isAGS
    ? "Alignment Governance Stack is Michael Bower's research architecture for preserving legitimate delegated authority as increasingly autonomous AI systems move from human intent toward action and consequence."
    : item.shortDescription;
  const canonical = absoluteUrl("/projects/" + item.slug);
  return {
    title: { absolute: title },
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: { title, description, type: "article", url: canonical },
    keywords: isAGS ? ["Alignment Governance Stack", "AI agent governance", "delegated authority", "human agency", "AI alignment", "autonomous agents", "agent memory", "AI permissions", "execution-time revalidation", "multi-agent governance"] : undefined,
  };
}

export default function ProjectPage({ params }: Props) {
  const item = work.find((entry) => entry.slug === params.slug);
  if (!item) notFound();
  if (item.slug === "alignment-governance-stack") return <AGSPage />;
  return (
    <main className="container max-w-4xl py-20 md:py-28">
      <p className="eyebrow">{item.category}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.05em] md:text-7xl">{item.title}</h1>
      <div className="mt-7"><StatusBadge>{item.status}</StatusBadge></div>
      <p className="mt-10 max-w-2xl text-xl leading-9 text-[#43504a]">{item.shortDescription}</p>
      <div className="mt-16 border-t hairline pt-6 text-sm text-[#68736e]">This page is an initial project placeholder. More detailed architecture, methods, and evidence boundaries can be added as the work develops.</div>
    </main>
  );
}
