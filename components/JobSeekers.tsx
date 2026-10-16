import Link from "next/link";

const steps = [
  {
    n: "1",
    title: "Apply",
    body: "Stop by our Anderson office or reach out online. Tell us what you can do and when you can work.",
  },
  {
    n: "2",
    title: "Get matched",
    body: "We fit you to the right shift and site — QC, production, forklift, or skilled trades.",
  },
  {
    n: "3",
    title: "Start earning",
    body: "Most placements start within days. Show up, work hard, and grow from there.",
  },
];

const perks = [
  "Competitive pay across local assignments",
  "Day and night shifts to fit your life",
  "Temp-to-hire paths into full-time roles",
  "A local team that answers the phone",
];

export default function JobSeekers() {
  return (
    <section id="job-seekers" className="scroll-mt-20 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">For Job Seekers</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
          Get to work fast.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Looking for factory work in the Anderson area? We place people every
          week — many start within days of applying.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-lg font-black text-accent-500">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <ul className="grid gap-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="shrink-0 rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-800"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
}
