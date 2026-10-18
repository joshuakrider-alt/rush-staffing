# Rush Staffing — Website

Marketing site for **Rush Staffing** (1500 Broadway St, Anderson, IN 46012),
an industrial staffing agency specializing in quality-control staffing for the
automotive industry plus general factory staffing.

Built with Next.js 16 + React 19 + Tailwind CSS v4.

## Pages

| Route | Purpose |
|--------|---------|
| `/` | Home — hero, stats, paths into the site |
| `/employers` | Employer staffing services & engagement models |
| `/job-seekers` | Apply path, common roles, perks |
| `/industries` | Automotive QC, manufacturing, warehousing |
| `/about` | Company story, office details, testimonials |
| `/contact` | Contact form (`?type=employer` / `?type=seeker`) |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build for hosting

```bash
npm run build
npm start
```

Deploys cleanly to Vercel (`vercel deploy`), or any Node host. Fully static
output is also possible via `output: "export"` in `next.config.ts` if you
want cheap static hosting.

## Before handing it to the client

- **Contact form** currently shows a front-end success state only. Wire it to
  an email service (Resend, Formspree) or a Next.js API route before launch.
- **Testimonials** are representative placeholders — replace with real client
  and worker quotes (with permission).
- **Stats** are qualitative by design; swap in real numbers once the agency
  provides them.
- **Images** in `public/images/` were AI-generated for the mockup. Replace
  with real photos of the team and partner facilities if available.
- Business details used: (765) 641-2355, 1500 Broadway St, Anderson, IN 46012,
  Mon–Fri 8:00 AM–5:00 PM (from public listings — confirm with the owner).
