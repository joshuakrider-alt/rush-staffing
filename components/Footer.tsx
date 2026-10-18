import Link from "next/link";
import { navLinks, site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-lg font-black text-accent-500">
                R
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Rush<span className="text-accent-500"> Staffing</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-100">
              Quality-control staffing for the automotive industry and
              dependable workers for factories of every kind. Anderson,
              Indiana.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-400">Site</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-brand-100 hover:text-white">
                    Home
                  </Link>
                </li>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-100 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-400">Reach us</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-100">
                <li>
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </li>
                <li>
                  <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>{site.hoursShort}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-brand-200">
          &copy; 2026 Rush Staffing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
