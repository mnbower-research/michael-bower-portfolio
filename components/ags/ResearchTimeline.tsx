import { researchTimeline } from "@/src/data/ags";

export function ResearchTimeline() {
  return (
    <ol className="mt-10 grid gap-x-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Evolution of the research">
      {researchTimeline.map((item, index) => (
        <li className="relative border-t-2 border-[#839188] pb-8 pt-6" key={item}>
          <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full border-2 border-[#f6f7f3] bg-[#a94f2d] ring-1 ring-[#a94f2d]" aria-hidden="true" />
          <span className="font-mono text-xs text-[#68736e]">{String(index + 1).padStart(2, "0")}</span>
          <p className="mt-3 max-w-[12rem] font-semibold leading-6">{item}</p>
          {index === researchTimeline.length - 1 && <p className="mt-2 text-xs uppercase tracking-wider text-[#a94f2d]">Future direction</p>}
        </li>
      ))}
    </ol>
  );
}
