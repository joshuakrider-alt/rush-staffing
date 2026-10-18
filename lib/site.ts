export const site = {
  name: "Rush Staffing",
  phoneDisplay: "(765) 641-2355",
  phoneTel: "+17656412355",
  addressLine1: "1500 Broadway St",
  addressLine2: "Anderson, IN 46012",
  hours: "Monday–Friday, 8:00 AM–5:00 PM",
  hoursShort: "Mon–Fri, 8:00 AM–5:00 PM",
} as const;

export const navLinks = [
  { label: "Employers", href: "/employers" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
