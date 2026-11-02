"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Download Your Variant",
    description:
      "Choose the Windows desktop installer for central dispatch or download the Android APK for mobile order taking.",
  },
  {
    number: "2",
    title: "Sign In via Google OAuth",
    description:
      "Log in securely using your organization credentials with automatic role authorization.",
  },
  {
    number: "3",
    title: "Instant Real-Time Sync",
    description:
      "All inventory records, catalog items, and wholesale orders automatically synchronize across all connected devices in real time.",
  },
];

const stepCardStyle: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
  backdropFilter: "blur(14px) saturate(118%)",
  WebkitBackdropFilter: "blur(14px) saturate(118%)",
  boxShadow:
    "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
};

function StepCardContent({ step }: { step: (typeof steps)[0] }) {
  return (
    <>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-3 sm:mb-4">
        {step.number}
      </div>
      <h4 className="font-semibold text-sm sm:text-base text-[#141414]">
        {step.title}
      </h4>
      <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
        {step.description}
      </p>
    </>
  );
}

export function InstallationSteps() {
  return (
    <div className="mt-10 sm:mt-14 max-w-5xl mx-auto overflow-x-clip">
      <h3 className="text-lg sm:text-xl font-bold text-[#141414] text-center mb-6 sm:mb-8">
        Get Started in 3 Simple Steps
      </h3>

      {/* ─── MOBILE LAYOUT (< md): Alternating Fast Left / Right Slide & Pop-Up ─── */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step, idx) => {
          const isFromLeft = idx % 2 === 0;

          return (
            <motion.div
              key={`m-step-${step.number}`}
              initial={{
                opacity: 0,
                x: isFromLeft ? -80 : 80,
                y: 16,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px 40px 0px",
              }}
              transition={{
                duration: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-white/60 p-5 sm:p-6 transition-all duration-300 hover:border-white/85"
              style={stepCardStyle}
            >
              <StepCardContent step={step} />
            </motion.div>
          );
        })}
      </div>

      {/* ─── DESKTOP LAYOUT (>= md): 3-Column Grid ─── */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((step, idx) => {
          return (
            <motion.div
              key={`d-step-${step.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-white/60 p-5 sm:p-6 transition-all duration-300 hover:border-white/85"
              style={stepCardStyle}
            >
              <StepCardContent step={step} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
