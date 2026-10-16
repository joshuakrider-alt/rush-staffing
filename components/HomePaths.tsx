import Link from "next/link";

const paths = [
  {
    href: "/employers",
    eyebrow: "For employers",
    title: "Need people on the floor?",
    body: "QC inspectors, line associates, operators, and skilled trades — screened and matched to your plant.",
    cta: "Explore employer staffing",
  },
  {
    href: "/job-seekers",
    eyebrow: "For job seekers",
    title: "Ready to start earning?",
    body: "Apply once, get matched to local factory work, and start within days on many assignments.",
    cta: "See how to apply",
  },
  {
    href: "/industries",
    eyebrow: "Industries",
    title: "Where our people work",
    body: "Automotive quality control is our flagship — plus general manufacturing and warehousing.",
    cta: "View industries",
  },
];

export default function HomePaths() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Where to go next</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
          Pick the path that fits.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {paths.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">{p.eyebrow}</p>
              <h3 className="mt-3 text-xl font-black text-brand-950 group-hover:text-brand-800">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.body}</p>
              <span className="mt-6 text-sm font-bold text-brand-700 group-hover:underline">{p.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
