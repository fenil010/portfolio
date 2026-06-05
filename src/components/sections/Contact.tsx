"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");
    
    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>Get in Touch</span>
          <h2 className={styles.title}>Contact Me</h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.grid}>
          {/* Left Column: Contact Details */}
          <div className={styles.detailsCol}>
            <h3 className={styles.subTitle}>Let&apos;s Build Something Great Together</h3>
            <p className={styles.description}>
              Have a project in mind, want to discuss a potential job opportunity, or just want to say hello? Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Email Me</h4>
                  <a href="mailto:fenilpatel.dev@gmail.com" className={styles.infoValue}>fenilpatel.dev@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>My Location</h4>
                  <p className={styles.infoValue}>Gujarat, India (Open to Remote)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                  disabled={status === "sending"}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                  disabled={status === "sending"}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and goals..."
                  className={styles.textarea}
                  disabled={status === "sending"}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending" || status === "success"}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </button>

              {status === "success" && (
                <div className={styles.successMessage}>
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
