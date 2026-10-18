import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HomePaths from "../components/HomePaths";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomePaths />
      <section className="bg-brand-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-white sm:text-3xl">Ready to talk staffing?</h2>
            <p className="mt-2 max-w-xl text-brand-100">
              Hiring managers and job seekers — send a message or call the Anderson office.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-accent-500 px-6 py-3 text-center text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              About Rush Staffing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
