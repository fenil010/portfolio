import {
  sectionContainer,
  sectionEyebrow,
  sectionHeader,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    avatar: "S",
    quote: "Fenil's frontend skills are unmatched. He took our Figma files and translated them into clean, performant React code in record time. Absolute professional!",
  },
  {
    name: "David Chen",
    role: "Founder at LaunchPad",
    avatar: "D",
    quote: "We hired Fenil to optimize our website loading times and implement a new Next.js dashboard. The results exceeded expectations. Our page speed score jumped to 98!",
  },
  {
    name: "Aria Rodriguez",
    role: "Design Lead at CreativeStudio",
    avatar: "A",
    quote: "Fenil has a rare eye for design. He doesn't just copy the mockups; he understands layout flows, padding dynamics, and UX micro-interactions perfectly.",
  },
];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-(--bg-secondary) py-16 sm:py-20 lg:py-[100px]" id="clients">
      <div className={sectionContainer}>
        <div className={sectionHeader}>
          <span className={sectionEyebrow}>Testimonials</span>
          <h2 className={sectionTitle}>Client Stories</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-black/4 bg-[linear-gradient(135deg,rgba(240,240,245,0.6)_0%,rgba(255,255,255,0.4)_100%)] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-black/8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:p-6 lg:px-[30px] lg:py-10"
            >
              <div className="pointer-events-none absolute right-5 top-5 text-black/4 transition-colors duration-300 group-hover:text-black/8 sm:right-[30px] sm:top-[30px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <p className="relative z-1 mb-6 text-[14.5px] italic leading-[1.7] text-(--text-secondary)">&ldquo;{t.quote}&rdquo;</p>

              <div className="mb-5 mt-auto h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.05),transparent)]" />

              <div className="flex min-w-0 items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--accent-primary) text-base font-bold text-white shadow-(--shadow-sm) transition-transform duration-300 group-hover:scale-105">
                  <span>{t.avatar}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[15px] font-bold text-(--text-primary)">{t.name}</h4>
                  <p className="text-[12.5px] font-medium text-(--text-muted)">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
