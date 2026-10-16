const industries = [
  {
    title: "Automotive Quality Control",
    highlight: true,
    body: "Our flagship specialty. Inspectors and QC techs for Tier 1 and Tier 2 suppliers — sorting, rework, containment, and PPAP support.",
  },
  {
    title: "General Manufacturing",
    highlight: false,
    body: "Line associates, assemblers, packers, and material handlers for factories across every sector.",
  },
  {
    title: "Warehousing & Logistics",
    highlight: false,
    body: "Forklift operators, pickers, and shipping/receiving staff to keep product moving on schedule.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Industries Served</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
          Where our people work.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.title}
              className={`rounded-xl p-6 ${
                i.highlight
                  ? "bg-brand-950 text-white shadow-lg"
                  : "border border-slate-200 bg-white shadow-sm"
              }`}
            >
              {i.highlight && (
                <span className="inline-block rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-950">
                  Flagship
                </span>
              )}
              <h3 className={`mt-3 text-lg font-bold ${i.highlight ? "text-white" : "text-brand-950"}`}>
                {i.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${i.highlight ? "text-brand-100" : "text-slate-600"}`}>
                {i.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
