import {
  glassPanel,
  sectionContainer,
  sectionEyebrow,
  sectionHeader,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

const services = [
  {
    title: "Frontend Development",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    description: "Building production-grade web applications using modular React components, clean Next.js routing, and type-safe TypeScript layouts.",
  },
  {
    title: "UI/UX Engineering",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
        <path d="M12 8V16M8 12H16"/>
      </svg>
    ),
    description: "Translating complex design systems from Figma mockup grids into fluid, animated interfaces with extreme attention to padding and alignments.",
  },
  {
    title: "Responsive Web Design",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    description: "Crafting layout structures that flow seamlessly from ultra-wide 4K desktop screens down to small compact mobile phone viewports.",
  },
  {
    title: "Performance Optimization",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
      </svg>
    ),
    description: "Improving core web vitals, bundle size reductions, image lazy-loading, and clean code splits to guarantee swift loading speeds.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f5f7_0%,#e8e8ed_100%)] py-16 sm:py-20 lg:py-[100px]" id="services">
      <div className={sectionContainer}>
        <div className={sectionHeader}>
          <span className={sectionEyebrow}>What I Offer</span>
          <h2 className={sectionTitle}>Services</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-[30px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${glassPanel} group flex flex-col gap-4 rounded-2xl p-5 hover:-translate-y-1.5 hover:border-white/80 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-6 md:p-8 lg:p-10`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-(--accent-primary) shadow-(--shadow-sm) transition-all duration-300 group-hover:scale-105 group-hover:bg-(--accent-primary) group-hover:text-white">{service.icon}</div>
              <h3 className="text-xl font-bold text-(--text-primary)">{service.title}</h3>
              <p className="text-[14.5px] leading-[1.7] text-(--text-secondary)">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
