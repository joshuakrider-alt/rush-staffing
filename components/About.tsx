import Image from "next/image";

const testimonials = [
  {
    quote:
      "They understand what a containment action actually requires. The inspectors show up trained and ready.",
    who: "Plant Manager, automotive supplier",
  },
  {
    quote:
      "I walked in on a Monday and was working by Wednesday. They kept me busy and treated me right.",
    who: "QC Inspector placed by Rush",
  },
  {
    quote:
      "When we call with a surge order, they respond. That reliability is why we keep calling.",
    who: "HR Director, local manufacturer",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/factory-team.webp"
              alt="Rush Staffing placed workers in a manufacturing plant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">About Us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
              A local agency that knows the floor.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Rush Staffing is an Anderson, Indiana staffing agency built for
              manufacturing. We started with a simple idea: factories &mdash;
              especially automotive suppliers &mdash; need quality-control
              people they can trust, and good workers deserve a straight path
              to a paycheck.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From our office on Broadway Street, we serve plants across
              Madison County and beyond &mdash; QC inspection for the auto
              industry, and dependable staffing for just about any factory
              that needs it.
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="font-bold text-brand-950">Office:</dt>
                <dd className="text-slate-600">1500 Broadway St, Anderson, IN 46012</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold text-brand-950">Phone:</dt>
                <dd>
                  <a href="tel:+17656412355" className="text-brand-700 hover:underline">
                    (765) 641-2355
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-bold text-brand-950">Hours:</dt>
                <dd className="text-slate-600">Monday&ndash;Friday, 8:00 AM&ndash;5:00 PM</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-black text-brand-950">What people say</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.who} className="rounded-xl bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
