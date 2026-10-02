import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t hairline bg-[#eef1ed]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_.7fr] md:py-16">
        <div>
          <p className="font-semibold">Michael Bower</p>
          <p className="mt-2 text-sm text-[#68736e]">Human Agency Infrastructure</p>
          <p className="mt-6 max-w-lg text-sm leading-6 text-[#68736e]">Research and engineering for preserving human agency in increasingly capable systems.</p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#58645e] md:justify-self-end">
          <Link className="hover:text-[#a94f2d]" href="/research">Research</Link>
          <Link className="hover:text-[#a94f2d]" href="/projects">Projects</Link>
          <Link className="hover:text-[#a94f2d]" href="/writing">Writing</Link>
          <Link className="hover:text-[#a94f2d]" href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
}
