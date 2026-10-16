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

const openings = [
  {
    title: "Quality Control Inspector",
    detail: "Automotive suppliers · day & night · sorting, containment, documentation",
  },
  {
    title: "Production / Assembly Associate",
    detail: "Manufacturing lines · packing, assembly, material handling",
  },
  {
    title: "Forklift Operator",
    detail: "Warehousing & plants · certified operators preferred",
  },
  {
    title: "General Labor",
    detail: "Flexible shifts · great entry point if you want steady factory work",
  },
];

export default function JobSeekers() {
  return (
    <>
      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="max-w-2xl text-2xl font-black tracking-tight text-brand-950 sm:text-3xl">
            Three steps to a paycheck
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
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
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-black tracking-tight text-brand-950 sm:text-3xl">
            Roles we place often
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Openings change by the week. Tell us your skills and availability and
            we&rsquo;ll match you to what&rsquo;s live.
          </p>
          <ul className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {openings.map((o) => (
              <li key={o.title} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-brand-950">{o.title}</p>
                  <p className="text-sm text-slate-600">{o.detail}</p>
                </div>
                <Link
                  href="/contact?type=seeker"
                  className="mt-2 text-sm font-bold text-brand-700 hover:underline sm:mt-0"
                >
                  Ask about this role →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-8 rounded-2xl bg-brand-50 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
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
              href="/contact?type=seeker"
              className="shrink-0 rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-800"
            >
              Apply now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
