"use client";

import { useEffect, useState } from "react";
import { cn, sectionContainer } from "@/lib/styles";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-black/5 bg-(--bg-secondary) py-10">
      <div className={`${sectionContainer} flex items-center justify-between gap-5 max-md:flex-col max-md:text-center`}>
        <p className="text-sm text-(--text-secondary)">
          &copy; {new Date().getFullYear()} Fenil Patel. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full bg-(--accent-primary) text-white shadow-(--shadow-sm) transition-all duration-300 hover:-translate-y-1 hover:bg-(--accent-hover) hover:shadow-(--shadow-md)",
            isVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-2.5 opacity-0",
          )}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
