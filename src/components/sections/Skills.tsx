import type { CSSProperties } from "react";
import {
  glassPanel,
  sectionContainer,
  sectionEyebrow,
  sectionHeader,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

const skillCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "TypeScript", color: "#3178c6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#1572b6" },
    ],
  },
  {
    title: "Frameworks & Styling",
    skills: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Framer Motion", color: "#333333" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    skills: [
      { name: "Git & GitHub", color: "#f05032" },
      { name: "Node.js", color: "#339933" },
      { name: "Figma", color: "#f24e1e" },
      { name: "VS Code", color: "#007acc" },
    ],
  },
];

// Helper to render SVG paths dynamically or fallback to generic code icon
function getSkillIcon(name: string) {
  switch (name) {
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
          <path d="M7 8h4M9 8v8M17 8h-4v8"/>
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <path d="M12 22V12M12 12L4 7.5M12 12l8-4.5"/>
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a10 10 0 0 1 7.54 16.58L9.12 7.42A10 10 0 0 1 12 2z"/>
          <path d="M18.88 16.58L16.2 13.5v3h.6"/>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3c-1.2 0-2.4.6-3.3 1.6C7 6.4 7 9.6 8.7 11.4c.9.9 2.1 1.6 3.3 1.6s2.4-.6 3.3-1.6c1.7-1.8 1.7-5 0-6.8C14.4 3.6 13.2 3 12 3z"/>
          <path d="M6 13c-1.2 0-2.4.6-3.3 1.6-1.7 1.8-1.7 5 0 6.8.9 1 2.1 1.6 3.3 1.6s2.4-.6 3.3-1.6c1.7-1.8 1.7-5 0-6.8C8.4 13.6 7.2 13 6 13z"/>
        </svg>
      );
    case "Framer Motion":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M21 12H3M12 3v18"/>
        </svg>
      );
    case "Git & GitHub":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
          <path d="M12 9H8.5A3.5 3.5 0 0 1 5 12.5 3.5 3.5 0 0 1 8.5 16H12V9z"/>
          <path d="M12 16H8.5a3.5 3.5 0 0 1 0 7 3.5 3.5 0 0 1 3.5-3.5V16z"/>
          <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z"/>
          <path d="M12 12.5a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        </svg>
      );
    case "VS Code":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 22L6 17.5l-4-2 1-1.5L6 12l-3-2-1-1.5 4-2L18 2l4 4.5v11L18 22z"/>
          <path d="M6 6v12M14 8v8"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f5f7_0%,#e8e8ed_100%)] py-16 sm:py-20 lg:py-[100px]" id="skills">
      <div className="light-dot-grid pointer-events-none absolute inset-0 opacity-5" />

      <div className={`${sectionContainer} relative z-1`}>
        <div className={sectionHeader}>
          <span className={sectionEyebrow}>My Arsenal</span>
          <h2 className={sectionTitle}>Skills & Technologies</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${glassPanel} rounded-2xl p-5 hover:-translate-y-1 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-6 lg:p-[30px]`}
            >
              <h3 className="mb-6 border-b border-black/4 pb-3 text-[17px] font-bold text-(--text-primary)">{category.title}</h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item flex items-center gap-3.5 rounded-[10px] border border-black/3 bg-white/40 px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:border-black/8 hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                    style={{ "--skill-color": skill.color } as CSSProperties}
                  >
                    <div className="skill-icon flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-white text-(--text-secondary) shadow-(--shadow-sm) transition-all duration-300">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-[14.5px] font-semibold text-(--text-primary)">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
