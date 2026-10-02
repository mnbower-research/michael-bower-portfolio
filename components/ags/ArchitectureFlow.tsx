import { agsLifecycle } from "@/src/data/ags";

export function ArchitectureFlow() {
  return (
    <div className="mt-12">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Alignment Governance Stack lifecycle">
        {agsLifecycle.map(([number, title, description], index) => (
          <li className="group relative border border-[#c4cdc6] bg-[#f6f7f3] p-5 transition-colors hover:border-[#9ba89f] hover:bg-white" key={title}>
            <div className="flex items-center gap-3"><span className="font-mono text-xs text-[#a94f2d]">{number}</span><span className="h-px flex-1 bg-[#c4cdc6]" aria-hidden="true" /></div>
            <h3 className="mt-6 text-lg font-semibold leading-6">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#68736e]">{description}</p>
            {index < agsLifecycle.length - 1 && <span className="absolute -bottom-3 left-1/2 z-10 bg-[#e9eee9] px-2 text-[#a94f2d] sm:-right-2.5 sm:bottom-auto sm:left-auto sm:top-1/2 sm:bg-[#f6f7f3]" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <aside className="relative mt-8 overflow-hidden border border-[#a94f2d] bg-[#f6f7f3] p-6 md:p-8">
        <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#a94f2d]" aria-hidden="true" />
        <div className="grid gap-4 md:grid-cols-[.45fr_1.55fr] md:items-start">
          <div><p className="eyebrow">Cross-cutting invariant</p><h3 className="mt-2 text-2xl font-semibold">Handoff Integrity</h3></div>
          <p className="leading-7 text-[#68736e]">Source lineage, validated context, authority scope, transformations, expiration conditions, and evidence should remain coherent as responsibility passes through every stage of the lifecycle.</p>
        </div>
      </aside>
    </div>
  );
}
