"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "../lib/site";

const employerOption = "Employer looking for workers";
const seekerOption = "Job seeker looking for work";

export default function Contact() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const initialType = type === "seeker" ? seekerOption : employerOption;
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <p className="text-lg font-bold text-green-800">Message received.</p>
                <p className="mt-2 text-sm text-green-700">
                  Thanks for reaching out &mdash; someone from Rush Staffing will follow up shortly.
                </p>
                <p className="mt-4 text-xs text-green-700/80">
                  Note: this demo success state is front-end only until an email service is wired.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-bold text-brand-950">Full name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="Jane Smith"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-bold text-brand-950">Phone</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="(765) 555-0123"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-bold text-brand-950">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-brand-950">I am a&hellip;</span>
                  <select
                    key={initialType}
                    name="type"
                    defaultValue={initialType}
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  >
                    <option>{employerOption}</option>
                    <option>{seekerOption}</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-brand-950">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us what you need — roles, shift times, start date, or the kind of work you're looking for."
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-md bg-accent-500 px-6 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl bg-brand-950 p-8 text-white">
              <h2 className="text-lg font-black">Rush Staffing</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-bold text-accent-400">Address</dt>
                  <dd className="mt-0.5 text-brand-100">
                    {site.addressLine1}
                    <br />
                    {site.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-accent-400">Phone</dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${site.phoneTel}`} className="text-brand-100 hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-accent-400">Hours</dt>
                  <dd className="mt-0.5 text-brand-100">
                    Monday&ndash;Friday
                    <br />
                    8:00 AM&ndash;5:00 PM
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
