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

export default function Employers() {
  return (
    <section id="employers" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">For Employers</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
          Staffing built for production floors.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
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

        <div className="mt-12 rounded-2xl bg-brand-50 p-8 lg:p-10">
          <h3 className="text-xl font-black text-brand-950">Three ways to engage us</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {models.map((m) => (
              <div key={m.title}>
                <p className="text-base font-bold text-brand-900">{m.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-block rounded-md bg-accent-500 px-6 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
          >
            Request workers
          </Link>
        </div>
      </div>
    </section>
  );
}
