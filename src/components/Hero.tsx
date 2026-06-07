"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 40);
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
    <section
      className="relative flex min-h-svh items-center overflow-hidden bg-[linear-gradient(180deg,#eeeef0_0%,#dddde0_60%,#d0d0d5_100%)] pt-(--nav-height) max-[900px]:min-h-auto max-[900px]:pb-12 max-[900px]:pt-(--hero-mobile-padding-top)"
      id="home"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 z-0 overflow-hidden" />

      <div className="relative z-1 mx-auto flex w-full max-w-(--max-width) items-center justify-between px-4 pt-2 sm:px-6 lg:px-10 lg:pt-10 max-[900px]:flex-col max-[900px]:gap-7 max-[900px]:text-center">
        <div className="z-2 flex basis-[450px] flex-col gap-6 pb-20 max-[1100px]:basis-[360px] max-[900px]:order-1 max-[900px]:basis-auto max-[900px]:items-center max-[900px]:pb-0">
          <div className="flex flex-col gap-1">
            <h1 className="text-[26px] font-extrabold leading-tight text-(--text-primary) min-[380px]:text-[28px] sm:text-[38px]">
              Hello, I&apos;m <span>Fenil Patel</span>
            </h1>
            <h2 className="flex min-h-[42px] items-center text-[22px] font-bold leading-snug text-(--text-primary) sm:text-[30px] max-[900px]:justify-center">
              <span>{displayText}</span>
              <span
                className="ml-px inline-block font-light transition-opacity duration-100"
                style={{ opacity: showCursor ? 1 : 0 }}
              >
                |
              </span>
            </h2>
          </div>

          <p className="max-w-[400px] text-[13.5px] leading-[1.75] text-(--text-secondary) sm:text-[14.5px] max-[900px]:text-center">
            Building modern, responsive, and user-friendly web
            applications with React.js, Next.js,
            and Tailwind CSS.
          </p>

          <div className="-mt-1 flex items-center gap-1.5 max-[900px]:justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-black/6 bg-black/4 text-(--text-secondary) transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#333] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] sm:h-10 sm:w-10 sm:rounded-xl" aria-label="GitHub" id="social-github">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-black/6 bg-black/4 text-(--text-secondary) transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0077b5] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] sm:h-10 sm:w-10 sm:rounded-xl" aria-label="LinkedIn" id="social-linkedin">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-black/6 bg-black/4 text-(--text-secondary) transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#000000] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] sm:h-10 sm:w-10 sm:rounded-xl" aria-label="X / Twitter" id="social-twitter">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-black/6 bg-black/4 text-(--text-secondary) transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dc2743] hover:bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] sm:h-10 sm:w-10 sm:rounded-xl" aria-label="Instagram" id="social-instagram">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

          <div className="mt-1 flex flex-wrap gap-3.5 max-[420px]:w-full max-[420px]:max-w-[320px] max-[420px]:flex-col max-[900px]:justify-center">
            <a href="#works" className="cta-shine relative inline-flex items-center justify-center overflow-hidden rounded-full bg-(--accent-primary) px-6 py-3 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(45,45,58,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-hover) hover:shadow-[0_6px_20px_rgba(45,45,58,0.3)] max-[420px]:w-full sm:px-[30px] sm:py-[13px] sm:text-sm" id="cta-projects">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center overflow-hidden rounded-full border border-black/15 bg-white/30 px-6 py-3 text-[13px] font-semibold text-(--text-primary) backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--text-primary) hover:bg-(--text-primary) hover:text-white hover:shadow-[0_6px_20px_rgba(45,45,58,0.25)] max-[420px]:w-full sm:px-[30px] sm:py-[13px] sm:text-sm" id="cta-contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative z-1 m-0 flex w-full flex-1 flex-col items-center justify-end overflow-visible max-[900px]:order-2">
          <div
            aria-hidden="true"
            className="hero-name-wordmark pointer-events-none absolute left-1/2 top-[49%] z-0 w-[calc(100vw-24px)] max-w-[1200px] animate-[glass-text-float_8s_ease-in-out_infinite] select-none whitespace-nowrap text-center font-sans text-[90px] font-black not-italic uppercase leading-none tracking-normal min-[380px]:text-[100px] sm:text-[150px] md:text-[200px] min-[901px]:text-[300px]"
          >
            FENIL
          </div>

          <div
            className="hi-badge absolute right-[12%] top-3 z-10 min-w-[58px] rounded-[18px] bg-[linear-gradient(135deg,#2d2d3a_0%,#3d3d4a_100%)] px-5 py-2.5 text-center text-white shadow-[0_6px_20px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.1)] will-change-transform sm:right-[18%] sm:top-5 min-[901px]:right-[25%] min-[901px]:top-[56px]"
            ref={hiRef}
          >
            <span className="text-[17px] font-extrabold tracking-normal">HI!</span>
          </div>

          <div className="relative flex h-[260px] w-[260px] items-end justify-center min-[380px]:h-[300px] min-[380px]:w-[300px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] min-[901px]:h-[520px] min-[901px]:w-[520px]">
            <Image
              src="/Simplification.svg"
              alt="Fenil Patel - 3D Developer Character"
              width={520}
              height={520}
              priority
              className="h-full w-full object-contain object-bottom drop-shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            />
          </div>

          <div className="mt-[-15px] h-5 w-[220px] shrink-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.12)_0%,transparent_70%)] min-[380px]:w-[280px] min-[901px]:w-[380px]" />
        </div>
      </div>
    </section>
  );
}
