"use client";

import { useEffect, useRef, useState } from "react";
import {
  cn,
  sectionContainer,
  sectionEyebrow,
  sectionHeader,
  sectionTitle,
  sectionUnderline,
} from "@/lib/styles";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const sendTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (sendTimeoutRef.current) clearTimeout(sendTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");
    if (sendTimeoutRef.current) clearTimeout(sendTimeoutRef.current);
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    
    sendTimeoutRef.current = setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      resetTimeoutRef.current = setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f5f7_0%,#e8e8ed_100%)] py-16 sm:py-20 lg:py-[100px]" id="contact">
      <div className={sectionContainer}>
        <div className={sectionHeader}>
          <span className={sectionEyebrow}>Get in Touch</span>
          <h2 className={sectionTitle}>Contact Me</h2>
          <div className={sectionUnderline} />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-[60px]">
          <div className="flex min-w-0 flex-col gap-6">
            <h3 className="text-[22px] font-bold leading-snug text-(--text-primary) sm:text-[26px]">Let&apos;s Build Something Great Together</h3>
            <p className="text-[15px] leading-[1.7] text-(--text-secondary)">
              Have a project in mind, want to discuss a potential job opportunity, or just want to say hello? Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-2.5 flex flex-col gap-5">
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-(--text-primary) shadow-(--shadow-sm)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold uppercase tracking-normal text-(--text-muted)">Email Me</h4>
                  <a href="mailto:fenilpatel.dev@gmail.com" className="break-all text-[15px] font-semibold text-(--text-primary) transition-colors duration-200 hover:text-(--text-secondary)">fenilpatel.dev@gmail.com</a>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-(--text-primary) shadow-(--shadow-sm)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold uppercase tracking-normal text-(--text-muted)">My Location</h4>
                  <p className="text-[15px] font-semibold text-(--text-primary)">Gujarat, India (Open to Remote)</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-(--text-secondary) shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-primary) hover:text-white" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-(--text-secondary) shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-primary) hover:text-white" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-(--text-secondary) shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-primary) hover:text-white" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.45)_100%)] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl sm:p-6 md:p-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-semibold text-(--text-primary)">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-black/8 bg-white/60 px-4 py-3 text-[14.5px] text-(--text-primary) outline-none transition-all duration-300 focus:border-(--accent-primary) focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === "sending"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-semibold text-(--text-primary)">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-black/8 bg-white/60 px-4 py-3 text-[14.5px] text-(--text-primary) outline-none transition-all duration-300 focus:border-(--accent-primary) focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === "sending"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-semibold text-(--text-primary)">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and goals..."
                  className="w-full resize-y rounded-lg border border-black/8 bg-white/60 px-4 py-3 text-[14.5px] text-(--text-primary) outline-none transition-all duration-300 focus:border-(--accent-primary) focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === "sending"}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "mt-2.5 w-full rounded-lg bg-(--accent-primary) px-7 py-3.5 text-center text-[14.5px] font-semibold text-white shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-hover) hover:shadow-(--shadow-md) disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
                  status === "success" && "bg-(--accent-hover)",
                )}
                disabled={status === "sending" || status === "success"}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </button>

              {status === "success" && (
                <div className="rounded-lg border border-[rgba(39,174,96,0.2)] bg-[rgba(39,174,96,0.1)] px-4 py-3 text-[13.5px] font-medium leading-normal text-(--accent-green)">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
