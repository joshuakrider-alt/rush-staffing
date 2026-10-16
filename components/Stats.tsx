const stats = [
  { value: "24/7", label: "On-call dispatch for urgent coverage needs" },
  { value: "QC-first", label: "Specialists in quality-control staffing for auto" },
  { value: "3 ways", label: "Temporary, temp-to-hire, and direct hire placements" },
  { value: "Local", label: "Anderson-based team that knows area manufacturers" },
];

export default function Stats() {
  return (
    <section className="bg-brand-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="text-2xl font-black text-accent-500">{s.value}</p>
            <p className="mt-1 text-sm leading-snug text-brand-100">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
