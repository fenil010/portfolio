import {
  glassPanel,
  sectionContainer,
  sectionEyebrow,
  sectionHeader,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-(--bg-secondary) py-16 sm:py-20 lg:py-[100px]" id="about">
      <div className={sectionContainer}>
        <div className={sectionHeader}>
          <span className={sectionEyebrow}>Get to Know Me</span>
          <h2 className={sectionTitle}>About Me</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-[60px]">
          <div className="order-2 flex justify-center lg:order-1">
            <div className={`${glassPanel} flex w-full max-w-[380px] flex-col items-center rounded-2xl px-5 py-8 text-center hover:-translate-y-1.5 hover:border-white/95 hover:shadow-[0_30px_50px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-[30px] sm:py-10`}>
              <div className="relative mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-(--accent-primary)">
                <span className="z-2 text-[38px] font-extrabold text-white">F</span>
                <div className="absolute -inset-1.5 rounded-full border border-black/4 animate-[rotate-clockwise_20s_linear_infinite]" />
                <div className="absolute -inset-3 rounded-full border border-dashed border-black/8 animate-[rotate-counter-clockwise_25s_linear_infinite]" />
              </div>
              <h3 className="mb-1.5 text-[22px] font-bold text-(--text-primary)">Fenil Patel</h3>
              <p className="mb-5 text-[13.5px] font-medium text-(--text-muted)">Frontend Developer & UI Engineer</p>
              
              <div className="mb-5 h-px w-4/5 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.06),transparent)]" />
              
              <p className="mb-6 text-sm italic leading-relaxed text-(--text-secondary)">
                &ldquo;Designing with passion, coding with precision to build beautiful, seamless web experiences.&rdquo;
              </p>
              
              <div className="grid w-full grid-cols-2 gap-4 border-t border-black/4 pt-5">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-(--text-primary)">24+</span>
                  <span className="text-[11px] font-medium uppercase tracking-normal text-(--text-muted)">Months Exp</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-(--text-primary)">50+</span>
                  <span className="text-[11px] font-medium uppercase tracking-normal text-(--text-muted)">Projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-col gap-5 lg:order-2">
            <h3 className="text-[22px] font-bold leading-tight text-(--text-primary) sm:text-2xl">Crafting Digital Experiences</h3>
            <p className="text-[15px] leading-[1.75] text-(--text-secondary)">
              I am a Frontend Developer and UI Engineer based in India. I specialize in building responsive, modern, and user-centric web applications. My focus lies at the intersection of clean, logical code and delightful, high-fidelity design.
            </p>
            <p className="text-[15px] leading-[1.75] text-(--text-secondary)">
              With over 2 years of experience working with React, Next.js, and TypeScript, I enjoy solving complex structural challenges and optimizing performance down to the millisecond. I believe the best user interfaces are not just visually pleasing, but fast, accessible, and structured with clean semantic markup.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-5">
              <div className="group flex min-w-0 gap-4 rounded-xl border border-(--border-light) bg-(--bg-primary) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/8 hover:bg-(--bg-secondary) hover:shadow-(--shadow-md)">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-(--bg-secondary) text-(--text-primary) shadow-(--shadow-sm) transition-all duration-300 group-hover:bg-(--accent-primary) group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="mb-0.5 text-[12.5px] font-semibold uppercase tracking-normal text-(--text-muted)">Education</h4>
                  <p className="text-sm font-semibold text-(--text-primary)">B.Tech in Computer Science</p>
                </div>
              </div>

              <div className="group flex min-w-0 gap-4 rounded-xl border border-(--border-light) bg-(--bg-primary) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/8 hover:bg-(--bg-secondary) hover:shadow-(--shadow-md)">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-(--bg-secondary) text-(--text-primary) shadow-(--shadow-sm) transition-all duration-300 group-hover:bg-(--accent-primary) group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="mb-0.5 text-[12.5px] font-semibold uppercase tracking-normal text-(--text-muted)">Location</h4>
                  <p className="text-sm font-semibold text-(--text-primary)">Gujarat, India (Remote)</p>
                </div>
              </div>

              <div className="group flex min-w-0 gap-4 rounded-xl border border-(--border-light) bg-(--bg-primary) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/8 hover:bg-(--bg-secondary) hover:shadow-(--shadow-md)">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-(--bg-secondary) text-(--text-primary) shadow-(--shadow-sm) transition-all duration-300 group-hover:bg-(--accent-primary) group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="mb-0.5 text-[12.5px] font-semibold uppercase tracking-normal text-(--text-muted)">Availability</h4>
                  <p className="text-sm font-semibold text-(--text-primary)">Full-Time / Freelance</p>
                </div>
              </div>

              <div className="group flex min-w-0 gap-4 rounded-xl border border-(--border-light) bg-(--bg-primary) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/8 hover:bg-(--bg-secondary) hover:shadow-(--shadow-md)">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-(--bg-secondary) text-(--text-primary) shadow-(--shadow-sm) transition-all duration-300 group-hover:bg-(--accent-primary) group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="mb-0.5 text-[12.5px] font-semibold uppercase tracking-normal text-(--text-muted)">Core Passion</h4>
                  <p className="text-sm font-semibold text-(--text-primary)">UX design & Web Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
