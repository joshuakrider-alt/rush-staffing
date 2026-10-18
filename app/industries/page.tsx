import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import Industries from "../../components/Industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rush Staffing serves automotive quality control, general manufacturing, and warehousing & logistics across the Anderson, IN area.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Industries Served"
        title="Where our people work."
        lead="Automotive QC is our flagship. We also staff general manufacturing plants and warehousing operations that need reliable coverage."
      />
      <Industries />
    </>
  );
}
