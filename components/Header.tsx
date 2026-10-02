"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Writing", "/writing"],
  ["About", "/about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#f6f7f3]/95 backdrop-blur-md">
      <div className="container flex min-h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 font-semibold tracking-[-.02em]" onClick={() => setOpen(false)}>
          <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
            <span className="absolute h-px w-5 bg-[#8f9b94]" />
            <span className="relative h-2 w-2 rounded-full border-2 border-[#f6f7f3] bg-[#a94f2d] ring-1 ring-[#a94f2d]" />
          </span>
          Michael Bower
        </Link>
        <button
          className="min-h-11 min-w-11 px-2 text-sm md:hidden"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-navigation"
          className={(open ? "block" : "hidden") + " absolute left-0 right-0 top-[72px] border-b hairline bg-[#f6f7f3] px-6 py-5 md:static md:block md:border-0 md:bg-transparent md:p-0"}
          aria-label="Main navigation"
        >
          <div className="flex flex-col gap-1 text-sm md:flex-row md:items-center md:gap-1">
            {links.map(([label, href]) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={(active ? "text-[#17201d]" : "text-[#68736e]") + " relative flex min-h-11 items-center px-3 transition-colors hover:text-[#17201d]"}
                >
                  {label}
                  {active && <span className="absolute bottom-1 left-3 right-3 h-px bg-[#a94f2d]" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
