import { statuses } from "@/src/data/ags";

function StatusDetail({ item }: { item: (typeof statuses)[number] }) {
  return (
    <>
      <span className="research-label">{item.status}</span>
      <p className="mt-4 text-sm leading-6 text-[#58645e]">{item.evidence.join(" · ")}</p>
      {"tag" in item && <code className="mt-4 block break-all font-mono text-[.68rem] text-[#68736e]">{item.tag}</code>}
      {"commit" in item && <code className="mt-1 block break-all font-mono text-[.68rem] text-[#68736e]">Pinned: {item.commit}</code>}
    </>
  );
}

export function StatusTable() {
  return (
    <div className="mt-10">
      <div className="grid gap-3 lg:hidden">
        {statuses.map((item) => <article className="border hairline bg-[#f6f7f3] p-5" key={item.component}><h3 className="mb-4 text-lg font-semibold">{item.component}</h3><StatusDetail item={item} /></article>)}
      </div>
      <table className="hidden w-full border-collapse text-left lg:table">
        <caption className="sr-only">Alignment Governance Stack implementation status</caption>
        <thead><tr className="border-y hairline text-xs uppercase tracking-[.14em] text-[#68736e]"><th className="py-4 pr-6 font-medium">Component</th><th className="py-4 pr-6 font-medium">Status</th><th className="py-4 font-medium">Evidence and boundary</th></tr></thead>
        <tbody>
          {statuses.map((item) => (
            <tr className="border-b hairline align-top" key={item.component}>
              <th className="w-[27%] py-6 pr-8 font-semibold">{item.component}{"tag" in item && <code className="mt-2 block break-all font-mono text-[.68rem] font-normal text-[#68736e]">{item.tag}</code>}{"commit" in item && <code className="mt-1 block break-all font-mono text-[.68rem] font-normal text-[#68736e]">Pinned: {item.commit}</code>}</th>
              <td className="w-[25%] py-6 pr-8"><span className="research-label">{item.status}</span></td>
              <td className="py-6 text-sm leading-6 text-[#58645e]">{item.evidence.join(" · ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
