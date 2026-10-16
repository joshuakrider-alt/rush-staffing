"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Employers", href: "#employers" },
  { label: "Job Seekers", href: "#job-seekers" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-900 text-lg font-black text-accent-500">
            R
          </span>
          <span className="text-lg font-extrabold tracking-tight text-brand-950">
            Rush<span className="text-accent-600"> Staffing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#job-seekers"
            className="rounded-md bg-accent-500 px-4 py-2 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
          >
            Find Work
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-brand-950 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#job-seekers"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-accent-500 px-3 py-2.5 text-center text-sm font-bold text-brand-950"
          >
            Find Work
          </Link>
        </div>
      )}
    </header>
  );
}
