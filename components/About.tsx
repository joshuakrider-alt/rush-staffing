import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/site";

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
    <>
      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
              <h2 className="text-2xl font-black tracking-tight text-brand-950 sm:text-3xl">
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
                  <dd className="text-slate-600">
                    {site.addressLine1}, {site.addressLine2}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-brand-950">Phone:</dt>
                  <dd>
                    <a href={`tel:${site.phoneTel}`} className="text-brand-700 hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-brand-950">Hours:</dt>
                  <dd className="text-slate-600">{site.hours}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-800"
                >
                  Get in touch
                </Link>
                <Link
                  href="/employers"
                  className="rounded-md border-2 border-brand-900 px-6 py-3 text-center text-sm font-bold text-brand-900 transition-colors hover:bg-brand-900 hover:text-white"
                >
                  Employer services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-center text-2xl font-black text-brand-950 sm:text-3xl">What people say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Representative feedback from plants and workers we support. Swap in
            approved client quotes before launch.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.who} className="rounded-xl bg-brand-50 p-6 shadow-sm">
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
      </section>
    </>
  );
}
