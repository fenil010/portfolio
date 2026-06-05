"use client";

import styles from "./Clients.module.css";

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
    <section className={styles.clients} id="clients">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>Testimonials</span>
          <h2 className={styles.title}>Client Stories</h2>
          <div className={styles.underline} />
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              {/* Quote Icon */}
              <div className={styles.quoteIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>

              <div className={styles.divider} />

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <span>{t.avatar}</span>
                </div>
                <div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
