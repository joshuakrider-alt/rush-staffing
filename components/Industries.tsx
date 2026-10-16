import Link from "next/link";

const industries = [
  {
    title: "Automotive Quality Control",
    highlight: true,
    body: "Our flagship specialty. Inspectors and QC techs for Tier 1 and Tier 2 suppliers — sorting, rework, containment, and PPAP support.",
    points: [
      "Containment & sorting crews on short notice",
      "Dimensional checks and documentation discipline",
      "People who understand supplier quality expectations",
    ],
  },
  {
    title: "General Manufacturing",
    highlight: false,
    body: "Line associates, assemblers, packers, and material handlers for factories across every sector.",
    points: [
      "Production and assembly coverage",
      "Packing, labeling, and material flow",
      "Temp, temp-to-hire, and direct hire",
    ],
  },
  {
    title: "Warehousing & Logistics",
    highlight: false,
    body: "Forklift operators, pickers, and shipping/receiving staff to keep product moving on schedule.",
    points: [
      "Certified forklift operators",
      "Shipping / receiving support",
      "Peak-season and surge staffing",
    ],
  },
];

export default function Industries() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8">
          {industries.map((i) => (
            <div
              key={i.title}
              className={`rounded-2xl p-8 lg:p-10 ${
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
              <h2 className={`mt-3 text-2xl font-black ${i.highlight ? "text-white" : "text-brand-950"}`}>
                {i.title}
              </h2>
              <p className={`mt-3 max-w-3xl text-base leading-relaxed ${i.highlight ? "text-brand-100" : "text-slate-600"}`}>
                {i.body}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {i.points.map((point) => (
                  <li
                    key={point}
                    className={`text-sm font-semibold ${i.highlight ? "text-accent-400" : "text-brand-800"}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-brand-50 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
          <div>
            <h3 className="text-xl font-black text-brand-950">Staffing for your plant?</h3>
            <p className="mt-2 text-slate-600">Tell us the industry and roles — we&rsquo;ll respond fast.</p>
          </div>
          <Link
            href="/contact?type=employer"
            className="rounded-md bg-brand-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-800"
          >
            Contact Rush Staffing
          </Link>
        </div>
      </div>
    </section>
  );
}
