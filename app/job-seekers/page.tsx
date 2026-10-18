import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import JobSeekers from "../../components/JobSeekers";

export const metadata: Metadata = {
  title: "Job Seekers",
  description:
    "Find factory work in Anderson, Indiana. Apply with Rush Staffing for QC, production, forklift, and general labor placements.",
};

export default function JobSeekersPage() {
  return (
    <>
      <PageBanner
        eyebrow="For Job Seekers"
        title="Get to work fast."
        lead="Apply once, get matched to local manufacturing and warehouse jobs, and start earning — often within days."
      />
      <JobSeekers />
    </>
  );
}
