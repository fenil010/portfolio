"use client";

import { useState } from "react";
import Image from "next/image";
import {
  cn,
  sectionContainer,
  sectionEyebrow,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

const categories = ["All", "Web Apps", "Mobile Apps"];

const projects = [
  {
    id: 1,
    title: "Cloud Analytics Platform",
    category: "Web Apps",
    image: "/project1.png",
    tech: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    description: "A premium, real-time analytics dashboard featuring visual telemetry, revenue forecasting, and location tracking widgets.",
  },
  {
    id: 2,
    title: "InnovateHub SaaS Product",
    category: "Web Apps",
    image: "/project2.png",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Animations"],
    description: "High-conversion landing page for a modern SaaS tool, utilizing pastel gradients, responsive grids, and clean visual cards.",
  },
  {
    id: 3,
    title: "SoleSole Sneaker Shop",
    category: "Mobile Apps",
    image: "/project3.png",
    tech: ["React Native", "TypeScript", "Redux", "UI Mockup"],
    description: "A sleek e-commerce mobile app experience for high-end sneakers, including animations, cart systems, and custom checkout flows.",
  },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-(--bg-secondary) py-16 sm:py-20 lg:py-[100px]" id="works">
      <div className={sectionContainer}>
        <div className="mb-12 flex flex-col items-center text-center md:mb-[50px]">
          <span className={sectionEyebrow}>My Portfolio</span>
          <h2 className={sectionTitle}>Recent Works</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 md:mb-[50px]">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 max-[420px]:w-full",
                activeCategory === category
                  ? "border-(--accent-primary) bg-(--accent-primary) text-white shadow-[0_4px_12px_rgba(45,45,58,0.15)]"
                  : "border-black/8 bg-(--bg-primary) text-(--text-secondary) hover:border-black/15 hover:bg-(--bg-secondary) hover:text-(--text-primary)",
              )}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.5)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-(--bg-primary)">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="project-image h-full w-full object-cover transition-transform duration-500"
                />
                
                <div className="project-overlay absolute inset-0 hidden items-center justify-center bg-[rgba(45,45,58,0.85)] p-6 opacity-0 backdrop-blur-lg transition-all duration-300 sm:flex lg:p-[30px]">
                  <div className="project-overlay-content flex translate-y-2.5 flex-col items-center gap-5 text-center transition-transform duration-300">
                    <p className="text-[13.5px] leading-relaxed text-white/85">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-[18px] py-2.5 text-[13px] font-semibold text-(--accent-primary) transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0f0f5]"
                        aria-label={`Discuss a project like ${project.title}`}
                      >
                        <span>Discuss Similar Work</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex grow flex-col p-5 sm:p-6">
                <span className="mb-2 text-[11px] font-bold uppercase tracking-normal text-(--text-muted)">{project.category}</span>
                <h3 className="mb-4 text-lg font-bold leading-snug text-(--text-primary)">{project.title}</h3>
                <p className="mb-4 text-[13.5px] leading-relaxed text-(--text-secondary) sm:hidden">{project.description}</p>
                
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md border border-black/4 bg-(--bg-primary) px-2.5 py-1 text-[11.5px] font-medium text-(--text-secondary)">{t}</span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-(--accent-primary) px-4 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-(--accent-hover) sm:hidden"
                  aria-label={`Discuss a project like ${project.title}`}
                >
                  Discuss Similar Work
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
