"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "React Developer",
  "Next.js Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const hiRef = useRef<HTMLDivElement>(null);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Floating animation for HI badge
  useEffect(() => {
    const el = hiRef.current;
    if (!el) return;
    let frame: number;
    let start: number | null = null;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const y = Math.sin(elapsed * 1.5) * 6;
      el.style.transform = `translateY(${y}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Animated dot grid background */}
      <div className={styles.gridBg} />

      {/* Floating ambient glow orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.greeting}>
            <h1 className={styles.heading}>
              Hello, I&apos;m <span className={styles.name}>Fenil Patel</span>
            </h1>
            <h2 className={styles.role}>
              <span className={styles.roleText}>{displayText}</span>
              <span
                className={styles.cursor}
                style={{ opacity: showCursor ? 1 : 0 }}
              >
                |
              </span>
            </h2>
          </div>

          <p className={styles.description}>
            Building modern, responsive, and user-friendly web
            applications with React.js, Next.js,
            and Tailwind CSS.
          </p>

          <div className={styles.ctas}>
            <a href="#works" className={styles.ctaPrimary} id="cta-projects">
              View Projects
            </a>
            <a href="#contact" className={styles.ctaSecondary} id="cta-contact">
              Contact Me
            </a>
          </div>
        </div>

        {/* Character with Background Glass Text */}
        <div className={styles.characterWrapper}>
          {/* Liquid Glass Background Text with Custom Kerning */}
          <div className={styles.bgText}>
            <span>F</span>
            <span className={styles.letterE}>E</span>
            <span>N</span>
            <span>I</span>
            <span>L</span>
          </div>

          {/* HI! Badge */}
          <div className={styles.hiBadge} ref={hiRef}>
            <span className={styles.hiText}>HI!</span>
          </div>

          <div className={styles.characterImage}>
            <Image
              src="/Simplification.svg"
              alt="Fenil Patel - 3D Developer Character"
              width={520}
              height={520}
              priority
              className={styles.avatar}
            />
          </div>

          {/* Ground shadow */}
          <div className={styles.groundShadow} />
        </div>
      </div>
    </section>
  );
}
