type PageBannerProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export default function PageBanner({ eyebrow, title, lead }: PageBannerProps) {
  return (
    <div className="border-b border-brand-100 bg-brand-50 pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-brand-950 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{lead}</p>
      </div>
    </div>
  );
}
