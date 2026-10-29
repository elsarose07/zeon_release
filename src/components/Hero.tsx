"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── tiny icon SVGs matching the reference image ─── */

function IconCustomers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconOrders() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconTeam() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 pointer-events-none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Glass card component ─── */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden ${className}`}
      style={{
        /* Crystalline translucent glass: grey background & orbital rings clearly show through */
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0.22) 100%)",
        backdropFilter: "blur(8px) saturate(118%)",
        WebkitBackdropFilter: "blur(8px) saturate(118%)",
        border: "1px solid rgba(255, 255, 255, 0.72)",
        boxShadow: [
          /* Crisp contact shadow right under the glass edge */
          "0 2px 6px -1px rgba(15, 23, 42, 0.10)",
          /* Soft diffused grey floating shadow beneath the card */
          "0 14px 32px -6px rgba(15, 23, 42, 0.18)",
          "0 26px 52px -10px rgba(15, 23, 42, 0.13)",
          /* Bright inset top rim — the signature glass panel line */
          "inset 0 1.5px 0px rgba(255, 255, 255, 1)",
          "inset 0 -1px 0px rgba(200, 210, 222, 0.25)",
        ].join(", "),
        ...style,
      }}
    >
      {/* Bright top-edge glass rim — fully opaque white line */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-0"
        style={{
          height: "1.5px",
          background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba(255,255,255,0.3) 100%)",
          borderRadius: "14px 14px 0 0",
        }}
      />
      {/* Left-edge rim light */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none z-0"
        style={{
          width: "1.5px",
          background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.40) 50%, rgba(255,255,255,0.08) 100%)",
        }}
      />
      {/* Upper-left corner shimmer — subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(140deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)",
          borderRadius: "inherit",
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

/* ─── Arrow button (small round) ─── */
function ArrowBtn() {
  return (
    <div
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(235,240,245,0.70) 100%)",
        border: "1px solid rgba(255,255,255,0.90)",
        boxShadow: "0 1px 4px rgba(15,23,42,0.08), inset 0 1px 1.5px rgba(255,255,255,1)",
        color: "#0F172A",
      }}
    >
      <IconArrow />
    </div>
  );
}

/* ─── Icon container (embossed circular capsule like reference) ─── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(225,232,240,0.55) 100%)",
        border: "1px solid rgba(255,255,255,0.85)",
        boxShadow: "0 2px 6px rgba(15,23,42,0.07), inset 0 1.5px 2px rgba(255,255,255,1), inset 0 -1px 1.5px rgba(150,165,180,0.18)",
        color: "#0F172A",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Interactive 3D Cursor-Tracking Tilt Card Component ─── */
interface TiltCardProps {
  children: React.ReactNode;
  baseRotate: number;
  className?: string;
  style?: React.CSSProperties;
}

function TiltCard({ children, baseRotate, className = "", style }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    setTilt({
      x: -normY * 11, // Tilt along X axis based on cursor vertical offset
      y: normX * 11,  // Tilt along Y axis based on cursor horizontal offset
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 }); // smoothly springs back to initial baseRotate tilt
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotate(${baseRotate}deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
          isHovered ? "scale3d(1.035, 1.035, 1.035)" : "scale3d(1, 1, 1)"
        }`,
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      {/* Soft diffused grey floating ground shadow directly cast by each card */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[16px] sm:rounded-[18px]"
        style={{
          transform: "translateY(14px) scale(0.95)",
          background: "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.08) 50%, transparent 75%)",
          filter: "blur(14px)",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-visible min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-76px)] flex flex-col justify-center pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10">
      <div className="w-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-0">

          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:col-span-5 text-left">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="font-serif text-[52px] sm:text-[68px] lg:text-[76px] xl:text-[84px] font-bold tracking-[-0.025em] text-[#111111] leading-[0.96]"
              >
                Zeon.
              </h1>
              <div className="font-canela text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[48px] font-medium tracking-[-0.02em] text-[#6B7280] leading-[1.14] mt-2.5 sm:mt-3">
                <span className="block">Your business,</span>
                <span className="block text-[#6B7280]">in sync.</span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[440px] text-[15px] sm:text-[16px] leading-relaxed text-[#4A4A4A] font-normal"
            >
              Bring your orders, customers, inventory, and team together in one seamless workspace.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex items-center gap-4"
            >
              {/* Get started */}
              <Link
                href="/product"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#141414] px-7 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#2a2a2a] active:scale-[0.98]"
              >
                Get started
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: 3D Composition ─── */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 w-full overflow-hidden sm:overflow-visible lg:translate-x-6 xl:translate-x-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[800px] select-none"
              style={{ aspectRatio: "800/620" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {/* LAYER 1 — RINGS (z-10, behind everything) */}
                <svg
                  viewBox="0 0 800 620"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 10, overflow: "visible" }}
                  fill="none"
                >
                  <defs>
                    <linearGradient id="ringGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#8A9BAD" stopOpacity="0.16" />
                      <stop offset="20%"  stopColor="#5C7080" stopOpacity="0.44" />
                      <stop offset="45%"  stopColor="#3E5468" stopOpacity="0.36" />
                      <stop offset="70%"  stopColor="#6A7E90" stopOpacity="0.42" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.16" />
                    </linearGradient>
                    <linearGradient id="ringGradB" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"   stopColor="#8A9BAD" stopOpacity="0.14" />
                      <stop offset="25%"  stopColor="#5C7080" stopOpacity="0.42" />
                      <stop offset="55%"  stopColor="#3E5468" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.14" />
                    </linearGradient>
                    <linearGradient id="ringGradAFront" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#8A9BAD" stopOpacity="0.16" />
                      <stop offset="35%"  stopColor="#5C7080" stopOpacity="0.44" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.16" />
                    </linearGradient>
                    <linearGradient id="ringGradBFront" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%"   stopColor="#8A9BAD" stopOpacity="0.14" />
                      <stop offset="35%"  stopColor="#5C7080" stopOpacity="0.42" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.14" />
                    </linearGradient>
                    <filter id="ringShadow" x="-5%" y="-20%" width="110%" height="140%">
                      <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0F172A" floodOpacity="0.03" />
                    </filter>
                  </defs>
                  {/* Outer ring — full ellipse behind orb */}
                  <g transform="translate(420,308) rotate(-7)" filter="url(#ringShadow)">
                    <ellipse cx="0" cy="0" rx="338" ry="162" stroke="url(#ringGradA)" strokeWidth="1.1" />
                  </g>
                  {/* Inner ring — full ellipse behind orb */}
                  <g transform="translate(420,300) rotate(-12)" filter="url(#ringShadow)">
                    <ellipse cx="0" cy="0" rx="256" ry="128" stroke="url(#ringGradB)" strokeWidth="1.1" />
                  </g>
                </svg>

                {/* LAYER 2 — CENTRAL GLASS ORB + LOGO (z-20) */}
                <div
                  className="absolute"
                  style={{
                    zIndex: 20,
                    width: "30%",
                    paddingBottom: "30%",
                    left: "52.5%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Soft ground shadow — subtle oval beneath orb giving 3D floating height */}
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: "88%",
                      height: "18%",
                      bottom: "-10%",
                      left: "6%",
                      background: "radial-gradient(ellipse, rgba(15, 23, 42, 0.20) 0%, rgba(15, 23, 42, 0.05) 55%, transparent 75%)",
                      filter: "blur(12px)",
                    }}
                  />

                  {/* ULTRA-TRANSLUCENT 3D CRYSTAL GLASS SPHERE BODY */}
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{
                      /* Center is transparent (0.00 opacity) so the grey background & rings show through */
                      background: `radial-gradient(circle at 36% 28%,
                        rgba(255, 255, 255, 0.22) 0%,
                        rgba(255, 255, 255, 0.04) 22%,
                        rgba(255, 255, 255, 0.00) 50%,
                        rgba(200, 215, 230, 0.06) 78%,
                        rgba(255, 255, 255, 0.40) 100%)`,
                      backdropFilter: "blur(2px) contrast(102%)",
                      WebkitBackdropFilter: "blur(2px) contrast(102%)",
                      border: "1.25px solid rgba(255, 255, 255, 0.65)",
                      boxShadow: `
                        inset 0 1.5px 3px rgba(255, 255, 255, 0.85),
                        inset 0 -2px 6px rgba(15, 23, 42, 0.08),
                        inset 0 0 16px rgba(255, 255, 255, 0.12),
                        0 20px 48px -12px rgba(15, 23, 42, 0.18),
                        0 4px 14px rgba(0, 0, 0, 0.05)
                      `,
                    }}
                  >
                    {/* Top-left specular curved glass crescent highlight */}
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "48%",
                        height: "22%",
                        top: "9%",
                        left: "11%",
                        background: "radial-gradient(ellipse at 35% 45%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.40) 32%, rgba(255, 255, 255, 0.05) 60%, transparent 78%)",
                        transform: "rotate(-30deg)",
                        filter: "blur(0.8px)",
                      }}
                    />

                    {/* Pin-point glint */}
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "6%",
                        height: "4%",
                        top: "14%",
                        left: "21%",
                        background: "#FFFFFF",
                        filter: "blur(0.4px)",
                        opacity: 0.95,
                      }}
                    />

                    {/* Bottom-right reflex rim reflection */}
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "28%",
                        height: "12%",
                        bottom: "12%",
                        right: "12%",
                        background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 75%)",
                        transform: "rotate(-28deg)",
                        filter: "blur(1.2px)",
                      }}
                    />

                    {/* Black Logo inside the translucent sphere */}
                    <div style={{ position: "relative", zIndex: 10, width: "44%", height: "44%" }}>
                      <Image
                        src="/logo.png"
                        alt="Zeon"
                        fill
                        className="object-contain"
                        style={{ filter: "brightness(0)", opacity: 0.98 }}
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* LAYER 3 — FRONT ARCS (z-30, in front of orb to create depth) */}
                <svg
                  viewBox="0 0 800 620"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 30, overflow: "visible" }}
                  fill="none"
                >
                  {/* Front half of inner ring (bottom arc passing in front of orb) */}
                  <g transform="translate(420,300) rotate(-12)">
                    <path
                      d="M 256 0 A 256 128 0 0 1 -256 0"
                      stroke="url(#ringGradBFront)"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                    />
                  </g>
                  {/* Front half of outer ring (bottom arc) */}
                  <g transform="translate(420,308) rotate(-7)">
                    <path
                      d="M 338 0 A 338 162 0 0 1 -338 0"
                      stroke="url(#ringGradAFront)"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>

                {/* LAYER 4 — GLASSMORPHIC CARDS (z-40) */}

                {/* CARD 1: Customers — top-left, touching outer ring */}
                <TiltCard baseRotate={-5} style={{ position: "absolute", zIndex: 40, top: "5.5%", left: "0%", width: "42%", maxWidth: "310px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3 sm:p-3.5 md:p-4">
                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                          <IconBox><IconCustomers /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                              <h3 className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Customers</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[10px] sm:text-[11px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Manage your customers<br className="hidden sm:inline" /> with ease.</p>
                            <div className="flex justify-end mt-1 sm:mt-1.5 md:mt-2.5"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 2: Orders — upper-right, outside orbital rings */}
                <TiltCard baseRotate={4} style={{ position: "absolute", zIndex: 40, top: "12%", right: "0%", width: "36%", maxWidth: "270px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3 sm:p-3.5 md:p-4">
                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                          <IconBox><IconOrders /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                              <h3 className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Orders</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[10px] sm:text-[11px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Track and manage<br className="hidden sm:inline" /> orders in real time.</p>
                            <div className="flex justify-end mt-1 sm:mt-1.5 md:mt-2.5"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 3: Team — left-middle, outside inner ring */}
                <TiltCard baseRotate={3} style={{ position: "absolute", zIndex: 40, top: "57%", left: "0%", width: "35%", maxWidth: "265px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3 sm:p-3.5 md:p-4">
                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                          <IconBox><IconTeam /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                              <h3 className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Team</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[10px] sm:text-[11px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Collaborate and<br className="hidden sm:inline" /> achieve more.</p>
                            <div className="flex justify-end mt-1 sm:mt-1.5 md:mt-2.5"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 4: Business Growth — lower-right, outside outer ring */}
                <TiltCard baseRotate={-3} style={{ position: "absolute", zIndex: 40, top: "70%", right: "0%", width: "46%", maxWidth: "345px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3 sm:p-3.5 md:p-4">
                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                          <IconBox><IconBarChart /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <h3 className="text-[11px] sm:text-[12px] md:text-[14px] font-semibold text-[#090D16] tracking-tight truncate">Business Growth</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <span className="text-[17px] sm:text-[21px] md:text-[26px] font-bold text-[#090D16] leading-none tracking-tight block mt-0.5">+32%</span>
                            <p className="text-[9px] sm:text-[10px] md:text-[11.5px] font-medium text-[#475569] mt-0.5 sm:mt-1 truncate">Total Revenue (This Month)</p>
                          </div>
                          {/* Sparkline */}
                          <div className="flex-shrink-0 self-center">
                            <svg viewBox="0 0 76 40" fill="none" className="w-[45px] h-[22px] sm:w-[56px] sm:h-[28px] md:w-[70px] md:h-[35px]" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="spkGrad" x1="0" y1="0" x2="1" y2="0">
                                  <stop offset="0%"   stopColor="#64748B" />
                                  <stop offset="100%" stopColor="#090D16" />
                                </linearGradient>
                              </defs>
                              <path d="M2 34 L14 26 L26 29 L38 18 L50 20 L62 10 L74 3"
                                stroke="url(#spkGrad)" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-end mt-1 sm:mt-1.5 md:mt-2"><ArrowBtn /></div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
