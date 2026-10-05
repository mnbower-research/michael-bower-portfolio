import Link from "next/link";
import { StatusBadge } from "@/components/Primitives";
import { ictf } from "@/src/data/ictf";

export function ICTFCard() {
  return (
    <Link href={ictf.route} className="surface-card group flex h-full flex-col p-6 md:p-8">
      <p className="eyebrow">Independent measurement · ICTF</p>
      <h2 className="mt-5 text-2xl font-semibold tracking-[-.03em] group-hover:text-[#a94f2d]">Invariant-Constrained Transition Framework</h2>
      <p className="mt-4 font-medium leading-7">Measurement framework for consequential agent governance.</p>
      <p className="mt-3 leading-7 text-[#68736e]">Separates representation, authorization, execution, evaluation, and trajectory-level failure so governance claims can be tested under search pressure.</p>
      <div className="mt-auto pt-7"><StatusBadge>First preregistered experiment complete</StatusBadge></div>
      <span className="text-link mt-6 self-start text-sm font-semibold">View Research <span aria-hidden="true">→</span></span>
    </Link>
  );
}
