import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import Employers from "../../components/Employers";

export const metadata: Metadata = {
  title: "Employers",
  description:
    "Industrial staffing for Anderson-area manufacturers — QC inspectors, production labor, operators, and skilled trades. Temp, temp-to-hire, and direct hire.",
};

export default function EmployersPage() {
  return (
    <>
      <PageBanner
        eyebrow="For Employers"
        title="Staffing built for production floors."
        lead="Fill QC, production, operator, and skilled roles with screened people who show up ready — temporary, temp-to-hire, or direct hire."
      />
      <Employers />
    </>
  );
}
