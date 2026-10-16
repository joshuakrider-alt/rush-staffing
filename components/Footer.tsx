import Link from "next/link";

const links = [
  { label: "Employers", href: "#employers" },
  { label: "Job Seekers", href: "#job-seekers" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-lg font-black text-accent-500">
                R
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Rush<span className="text-accent-500"> Staffing</span>
              </span>
            </div>
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
                {links.map((l) => (
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
                <li>1500 Broadway St, Anderson, IN 46012</li>
                <li>
                  <a href="tel:+17656412355" className="hover:text-white">
                    (765) 641-2355
                  </a>
                </li>
                <li>Mon&ndash;Fri, 8:00 AM&ndash;5:00 PM</li>
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
