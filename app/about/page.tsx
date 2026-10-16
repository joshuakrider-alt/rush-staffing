import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import About from "../../components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rush Staffing is a locally owned industrial staffing agency in Anderson, Indiana specializing in automotive quality-control staffing.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Anderson-based. Factory-focused."
        lead="We're the local team plants call when they need QC inspectors and dependable production people — and the place workers come when they want a straight path to work."
      />
      <About />
    </>
  );
}
