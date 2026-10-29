"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative py-16 sm:py-24 max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/60 p-10 sm:p-16 text-center transition-all duration-300 hover:border-white/85"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
          backdropFilter: "blur(14px) saturate(118%)",
          WebkitBackdropFilter: "blur(14px) saturate(118%)",
          boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
        }}
      >
        {/* Soft Ambient Radial Lights inside card */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-64 w-96 rounded-full bg-gradient-to-r from-amber-100/50 via-orange-100/30 to-amber-50/40 blur-3xl opacity-70" />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#141414] leading-[1.05]">
            Ready to bring calm <br />
            <span className="italic text-[#737373]">to your warehouse?</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#5A5A5A] text-balance">
            Get started with ZEON today. Download for Windows or mobile Android in seconds.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/product"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#141414] px-8 text-sm sm:text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:shadow-md active:scale-[0.98]"
            >
              <span>Start for free</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
