export function KnowledgeLayers() {
  const layers = [
    ["01", "What the system knows", "Preferences, routines, corrections, context, and learned patterns."],
    ["02", "What the system thinks you mean", "Interpretation, prediction, and uncertainty."],
    ["03", "What the system is allowed to do", "Explicit delegation, standing authority, scope, limits, and revocation."],
  ];
  return (
    <div className="mt-14 grid gap-0 border border-[#52605a] md:grid-cols-3">
      {layers.map(([number, title, description], index) => (
        <article className="relative min-h-64 border-b border-[#52605a] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8" key={title}>
          <div className="flex items-center gap-3"><span className="font-mono text-xs text-[#d68b67]">{number}</span><span className="h-px flex-1 bg-[#52605a]" aria-hidden="true" /></div>
          <h3 className="mt-12 max-w-[16rem] text-xl font-semibold leading-7">{title}</h3>
          <p className="mt-4 max-w-xs leading-7 text-[#aebbb2]">{description}</p>
          {index < layers.length - 1 && <span className="absolute -bottom-3 left-1/2 z-10 bg-[#17201d] px-2 text-[#d68b67] md:-right-3 md:bottom-auto md:left-auto md:top-1/2" aria-hidden="true">→</span>}
        </article>
      ))}
    </div>
  );
}
