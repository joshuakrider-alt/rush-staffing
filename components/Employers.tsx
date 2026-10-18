import Link from "next/link";

const roles = [
  {
    title: "Quality Control Inspectors",
    tag: "Our specialty",
    body: "Trained inspectors for automotive suppliers: sorting, containment, dimensional checks, and documentation done right the first time.",
  },
  {
    title: "General Labor & Line Associates",
    tag: "High volume",
    body: "Dependable people for production lines, assembly, packing, and material handling — scaled to your schedule.",
  },
  {
    title: "Forklift & Machine Operators",
    tag: "Certified",
    body: "Experienced operators for forklifts, presses, and production machinery, matched to your equipment and safety standards.",
  },
  {
    title: "Skilled Trades & Technicians",
    tag: "As needed",
    body: "Maintenance techs, electricians, welders, and other skilled roles for short-term coverage or long-term placement.",
  },
];

const models = [
  { title: "Temporary", body: "Cover call-offs, surges, and seasonal demand without adding headcount." },
  { title: "Temp-to-hire", body: "Try talent on the job, then convert the best performers to your team." },
  { title: "Direct hire", body: "We recruit and screen; you hire directly onto your payroll." },
];

const process = [
  {
    n: "1",
    title: "Tell us the need",
    body: "Roles, shift, start date, skills, and any plant-specific requirements — even if you need coverage tonight.",
  },
  {
    n: "2",
    title: "We screen & match",
    body: "Candidates are vetted for reliability, safety awareness, and fit for QC or production work.",
  },
  {
    n: "3",
    title: "People show up ready",
    body: "We handle onboarding logistics and stay on-call so you can keep the line moving.",
  },
];

export default function Employers() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="max-w-2xl text-2xl font-black tracking-tight text-brand-950 sm:text-3xl">
            Roles we fill every week
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            One call fills the gap. Every candidate is screened, safety-minded,
            and matched to the demands of your operation — not just a warm body.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                  {r.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-950">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-black tracking-tight text-brand-950 sm:text-3xl">How engagement works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((s) => (
              <div key={s.n} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-lg font-black text-accent-500">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm lg:p-10">
            <h3 className="text-xl font-black text-brand-950">Three ways to engage us</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {models.map((m) => (
                <div key={m.title}>
                  <p className="text-base font-bold text-brand-900">{m.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?type=employer"
                className="inline-block rounded-md bg-accent-500 px-6 py-3 text-center text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
              >
                Request workers
              </Link>
              <Link
                href="/industries"
                className="inline-block rounded-md border-2 border-brand-900 px-6 py-3 text-center text-sm font-bold text-brand-900 transition-colors hover:bg-brand-900 hover:text-white"
              >
                See industries we serve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
