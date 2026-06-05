"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>Get to Know Me</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline} />
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Left Column: Visual Card */}
          <div className={styles.visualCard}>
            <div className={styles.cardGlass}>
              <div className={styles.avatarMock}>
                <span className={styles.avatarChar}>F</span>
                <div className={styles.avatarRing1} />
                <div className={styles.avatarRing2} />
              </div>
              <h3 className={styles.cardName}>Fenil Patel</h3>
              <p className={styles.cardRole}>Frontend Developer & UI Engineer</p>
              
              <div className={styles.divider} />
              
              <p className={styles.cardQuote}>
                &ldquo;Designing with passion, coding with precision to build beautiful, seamless web experiences.&rdquo;
              </p>
              
              <div className={styles.cardStats}>
                <div className={styles.cardStat}>
                  <span className={styles.statNum}>24+</span>
                  <span className={styles.statLbl}>Months Exp</span>
                </div>
                <div className={styles.cardStat}>
                  <span className={styles.statNum}>50+</span>
                  <span className={styles.statLbl}>Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Quick Facts */}
          <div className={styles.bioContent}>
            <h3 className={styles.bioTitle}>Crafting Digital Experiences</h3>
            <p className={styles.bioParagraph}>
              I am a Frontend Developer and UI Engineer based in India. I specialize in building responsive, modern, and user-centric web applications. My focus lies at the intersection of clean, logical code and delightful, high-fidelity design.
            </p>
            <p className={styles.bioParagraph}>
              With over 2 years of experience working with React, Next.js, and TypeScript, I enjoy solving complex structural challenges and optimizing performance down to the millisecond. I believe the best user interfaces are not just visually pleasing, but fast, accessible, and structured with clean semantic markup.
            </p>

            {/* Quick Info Grid */}
            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Education</h4>
                  <p className={styles.infoValue}>B.Tech in Computer Science</p>
                </div>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Location</h4>
                  <p className={styles.infoValue}>Gujarat, India (Remote)</p>
                </div>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Availability</h4>
                  <p className={styles.infoValue}>Full-Time / Freelance</p>
                </div>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Core Passion</h4>
                  <p className={styles.infoValue}>UX design & Web Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
