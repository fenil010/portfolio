"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Works.module.css";

const categories = ["All", "Web Apps", "Mobile Apps"];

const projects = [
  {
    id: 1,
    title: "Cloud Analytics Platform",
    category: "Web Apps",
    image: "/project1.png",
    tech: ["Next.js", "TypeScript", "Recharts", "CSS Modules"],
    description: "A premium, real-time analytics dashboard featuring visual telemetry, revenue forecasting, and location tracking widgets.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "InnovateHub SaaS Product",
    category: "Web Apps",
    image: "/project2.png",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Animations"],
    description: "High-conversion landing page for a modern SaaS tool, utilizing pastel gradients, responsive grids, and clean visual cards.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "SoleSole Sneaker Shop",
    category: "Mobile Apps",
    image: "/project3.png",
    tech: ["React Native", "TypeScript", "Redux", "UI Mockup"],
    description: "A sleek e-commerce mobile app experience for high-end sneakers, including animations, cart systems, and custom checkout flows.",
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className={styles.works} id="works">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>My Portfolio</span>
          <h2 className={styles.title}>Recent Works</h2>
          <div className={styles.underline} />
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  className={styles.image}
                />
                
                {/* Hover Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <p className={styles.overlayDescription}>{project.description}</p>
                    <div className={styles.links}>
                      <a href={project.demoLink} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                      <a href={project.codeLink} className={styles.linkBtnOutline} target="_blank" rel="noopener noreferrer">
                        <span>Source Code</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className={styles.meta}>
                <span className={styles.categoryTag}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                {/* Tech tags */}
                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
