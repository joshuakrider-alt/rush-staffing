import Image from "next/image";
import Link from "next/link";

const badges = ["24/7 dispatch", "Locally owned", "Temp \u2022 Temp-to-hire \u2022 Direct hire"];

export default function Hero() {
  return (
    <section className="bg-brand-50 pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            Anderson, Indiana &mdash; Industrial Staffing
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-950 sm:text-5xl">
            Quality people for quality-driven factories.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Rush Staffing places trained quality-control inspectors with
            automotive companies &mdash; and dependable, hard-working people
            with factories of every kind.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/employers"
              className="rounded-md bg-brand-900 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-800"
            >
              I need workers
            </Link>
            <Link
              href="/job-seekers"
              className="rounded-md border-2 border-brand-900 px-6 py-3 text-center text-sm font-bold text-brand-900 transition-colors hover:bg-brand-900 hover:text-white"
            >
              Find work
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <svg className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/hero-qc.webp"
            alt="Quality control inspector examining an automotive part in a factory"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
