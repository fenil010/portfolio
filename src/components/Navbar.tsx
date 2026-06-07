"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/styles";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={cn(
        "navbar-glass fixed left-1/2 top-2 z-1000 h-14 w-[calc(100%-24px)] max-w-(--max-width) -translate-x-1/2 rounded-2xl border border-white/25 backdrop-blur-[20px] backdrop-saturate-[1.8] transition-all duration-400 sm:w-[calc(100%-32px)] md:top-3 md:w-[calc(100%-48px)]",
        scrolled && "navbar-glass-scrolled border-white/35 backdrop-blur-[28px] backdrop-saturate-[2]",
      )}
    >
      <nav className="relative flex h-full items-center justify-between px-3.5 sm:px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] font-bold text-(--text-primary) transition-all duration-200 hover:scale-[0.98] hover:opacity-80"
          id="nav-logo"
        >
          <span className="inline-flex items-center justify-center text-[15px] font-extrabold tracking-normal">
            &lt;/&gt;
          </span>
          <span>Portfolio</span>
        </Link>

        <ul className="hidden list-none items-center gap-0.5 min-[900px]:flex" id="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-(--text-secondary) transition-all duration-200 hover:bg-black/4 hover:text-(--text-primary)"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-0.5 min-[900px]:flex" id="nav-icons">
          <a
            href="#contact"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] text-(--text-secondary) transition-all duration-200 hover:-translate-y-px hover:bg-black/6 hover:text-(--text-primary)"
            aria-label="Go to contact section"
            id="nav-contact-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <a
            href="#works"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] text-(--text-secondary) transition-all duration-200 hover:-translate-y-px hover:bg-black/6 hover:text-(--text-primary)"
            aria-label="Go to portfolio section"
            id="nav-portfolio-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </a>
          <a
            href="mailto:fenilpatel.dev@gmail.com"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] text-(--text-secondary) transition-all duration-200 hover:-translate-y-px hover:bg-black/6 hover:text-(--text-primary)"
            aria-label="Email Fenil Patel"
            id="nav-email-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>

        <button
          type="button"
          className="z-1001 flex h-9 w-9 flex-col items-center justify-center gap-1.25 rounded-[10px] transition-colors duration-200 hover:bg-black/4 min-[900px]:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          id="nav-hamburger"
        >
          <span
            className={cn(
              "block h-0.5 w-5 rounded-sm bg-(--text-primary) transition-all duration-200",
              mobileOpen && "translate-x-0 translate-y-1.75 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-sm bg-(--text-primary) transition-all duration-200",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-sm bg-(--text-primary) transition-all duration-200",
              mobileOpen && "-translate-y-1.75 -rotate-45",
            )}
          />
        </button>
      </nav>

      <div
        className={cn(
          "fixed left-3 right-3 top-19 block max-h-[calc(100svh-96px)] overflow-y-auto rounded-2xl border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.35)_100%)] p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[32px] backdrop-saturate-[1.8] transition-all duration-300 sm:left-4 sm:right-4 sm:p-4 min-[900px]:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0",
        )}
        id="mobile-menu"
      >
        <ul className="flex list-none flex-col gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block rounded-[10px] px-4 py-3 text-[15px] font-medium text-(--text-secondary) transition-all duration-200 hover:bg-black/4 hover:text-(--text-primary)"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
