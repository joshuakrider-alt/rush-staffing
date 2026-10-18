import type { Metadata } from "next";
import { Suspense } from "react";
import PageBanner from "../../components/PageBanner";
import Contact from "../../components/Contact";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Rush Staffing in Anderson, IN. Call ${site.phoneDisplay} or send a message about hiring or finding work.`,
};

function ContactFormFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="h-64 animate-pulse rounded-xl bg-slate-100" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk about your staffing needs."
        lead={`Hiring or looking for work? Send a message — or call ${site.phoneDisplay}.`}
      />
      <Suspense fallback={<ContactFormFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
