"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,oklch(0.3_0.12_285_/_0.12),transparent)]" />

      <div className="max-w-5xl mx-auto w-full relative pt-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-base mb-5 font-light"
        >
          Computer Science &middot; VIT-AP University
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05]"
          style={{ textWrap: "balance" }}
        >
          Parth Arsid
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-muted mt-6 max-w-[48ch] font-light leading-[1.7]"
        >
          Building at the intersection of hardware and intelligence.
          Edge&nbsp;AI&nbsp;systems, cybersecurity tools, and full&#8209;stack applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 mt-10"
        >
          <a
            href="https://github.com/Partharsid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle text-foreground text-sm font-medium rounded-lg hover:bg-surface hover:border-accent/30 transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
