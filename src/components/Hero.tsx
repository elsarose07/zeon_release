"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* â”€â”€â”€ tiny icon SVGs matching the reference image â”€â”€â”€ */

function IconCustomers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconOrders() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconTeam() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 pointer-events-none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* â”€â”€â”€ Glass card component â”€â”€â”€ */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function GlassCard({ children, className = "", style }: GlassCardProps) {
  // Derive corner radius for inner rim decorations from the style override (if any)
  const rimRadius = (style?.borderRadius as string) ?? "14px";
  return (
    <div
      className={`relative rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 45%, rgba(255, 255, 255, 0.26) 100%)",
        backdropFilter: "blur(10px) saturate(118%)",
        WebkitBackdropFilter: "blur(10px) saturate(118%)",
        border: "1px solid rgba(255, 255, 255, 0.75)",
        boxShadow: [
          "0 2px 6px -1px rgba(15, 23, 42, 0.10)",
          "0 14px 32px -6px rgba(15, 23, 42, 0.18)",
          "0 26px 52px -10px rgba(15, 23, 42, 0.13)",
          "inset 0 1.5px 0px rgba(255, 255, 255, 1)",
          "inset 0 -1px 0px rgba(200, 210, 222, 0.25)",
        ].join(", "),
        ...style,
      }}
    >
      {/* Bright top-edge glass rim */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-0"
        style={{
          height: "1.5px",
          background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba(255,255,255,0.3) 100%)",
          borderRadius: `${rimRadius} ${rimRadius} 0 0`,
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
      {/* Upper-left corner shimmer */}
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

/* â”€â”€â”€ Arrow button (small round) â”€â”€â”€ */
function ArrowBtn() {
  return (
    <div
      className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
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

/* â”€â”€â”€ Icon container (embossed circular capsule like reference) â”€â”€â”€ */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
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

/* â”€â”€â”€ Interactive 3D Cursor-Tracking Tilt Card Component â”€â”€â”€ */
interface TiltCardProps {
  children: React.ReactNode;
  baseRotate: number;
  className?: string;
  style?: React.CSSProperties;
}

function TiltCard({ children, baseRotate, className = "", style }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    setTilt({
      x: -normY * 11,
      y: normX * 11,
    });
  };

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
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

/* â”€â”€â”€ Shared 3D Crystal Glass Sphere Component â”€â”€â”€ */
function CentralGlassOrb() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Soft ground shadow beneath orb */}
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
  );
}

/* â”€â”€â”€ Mobile Central Glass Orb (Exact Reference 1:1) â”€â”€â”€ */
function MobileCentralGlassOrb() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Soft ground shadow beneath orb */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "90%",
          height: "20%",
          bottom: "-10%",
          left: "5%",
          background:
            "radial-gradient(ellipse, rgba(15, 23, 42, 0.22) 0%, rgba(15, 23, 42, 0.05) 55%, transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* Pearlescent 3D Crystal Glass Sphere Body */}
      <div
        className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at 36% 28%,
            #FFFFFF 0%,
            #F8FAFC 22%,
            #EEF2F6 46%,
            #E2E8F0 72%,
            #CBD5E1 92%,
            rgba(255, 255, 255, 0.95) 100%)`,
          border: "1.5px solid rgba(255, 255, 255, 0.9)",
          boxShadow: `
            inset 0 2px 4px rgba(255, 255, 255, 1),
            inset 0 -3px 8px rgba(15, 23, 42, 0.12),
            inset 0 0 16px rgba(255, 255, 255, 0.5),
            0 18px 40px -10px rgba(15, 23, 42, 0.20),
            0 4px 14px rgba(15, 23, 42, 0.06)
          `,
        }}
      >
        {/* Top-left specular curved glass crescent highlight */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "50%",
            height: "24%",
            top: "8%",
            left: "10%",
            background:
              "radial-gradient(ellipse at 35% 45%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6) 35%, rgba(255, 255, 255, 0.1) 65%, transparent 80%)",
            transform: "rotate(-30deg)",
            filter: "blur(0.8px)",
          }}
        />

        {/* Specular pin-point glint */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "8%",
            height: "5%",
            top: "13%",
            left: "20%",
            background: "#FFFFFF",
            filter: "blur(0.3px)",
            boxShadow: "0 0 4px #FFFFFF",
          }}
        />

        {/* Bottom-right reflex rim reflection */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "30%",
            height: "14%",
            bottom: "10%",
            right: "10%",
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 75%)",
            transform: "rotate(-28deg)",
            filter: "blur(1.2px)",
          }}
        />

        {/* Black Logo inside the sphere */}
        <div style={{ position: "relative", zIndex: 10, width: "45%", height: "45%" }}>
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
  );
}

/* â”€â”€â”€ Mobile Small Circular Components (Exact Scale for Mobile Cards) â”€â”€â”€ */
function MobileIconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #E8EEF5 100%)",
        border: "1px solid rgba(255, 255, 255, 0.92)",
        boxShadow:
          "0 1.5px 4px rgba(15, 23, 42, 0.06), inset 0 1px 1px #FFFFFF, inset 0 -1px 1.5px rgba(150, 165, 180, 0.15)",
        color: "#0F172A",
      }}
    >
      {children}
    </div>
  );
}

function MobileArrowBtn() {
  return (
    <div
      className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 pointer-events-none"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #EDF2F7 100%)",
        border: "1px solid rgba(255, 255, 255, 0.95)",
        boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08), inset 0 1px 1px #FFFFFF",
        color: "#0F172A",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 pointer-events-none"
        stroke="#0F172A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  );
}

/* â”€â”€â”€ Mobile Scroll-Triggered Orbital Section (1:1 Exact Replica) â”€â”€â”€ */
function MobileHeroSection() {
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y > 15) {
        setCardsVisible(true);
      } else {
        setCardsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Each card pops out from the orb center toward its corner */
  const cardAnim = (dx: number, dy: number, delay: number) => ({
    initial: { opacity: 0, x: dx, y: dy, scale: 0.25 },
    animate: cardsVisible
      ? { opacity: 1, x: 0, y: 0, scale: 1 }
      : { opacity: 0, x: dx, y: dy, scale: 0.25 },
    transition: {
      delay: delay * 0.08,
      duration: 0.54,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  /* â”€â”€ OrbCard: Exact 1:1 replica of reference image â”€â”€ */
  function OrbCard({
    icon,
    title,
    desc,
  }: {
    icon: React.ReactNode;
    title: string;
    desc: React.ReactNode;
  }) {
    return (
      <GlassCard
        style={{
          borderRadius: "18px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(240, 244, 248, 0.52) 50%, rgba(255, 255, 255, 0.68) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.90)",
          boxShadow:
            "0 10px 26px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px rgba(255, 255, 255, 1)",
        }}
      >
        <div className="p-2.5 sm:p-3 flex flex-col justify-between min-h-[86px] sm:min-h-[92px]">
          {/* Top: Icon pill on left, Title + Subtext stacked on right */}
          <div className="flex items-start gap-2">
            <MobileIconBox>{icon}</MobileIconBox>
            <div className="flex-1 min-w-0 pt-0.5">
              <h3 className="text-[12px] sm:text-[13px] font-semibold text-[#090D16] tracking-tight leading-tight">
                {title}
              </h3>
              <div className="text-[9.5px] sm:text-[10px] text-[#475569] leading-[1.3] font-normal mt-0.5">
                {desc}
              </div>
            </div>
          </div>

          {/* Bottom: Small circular arrow button at bottom-right */}
          <div className="flex justify-end mt-1">
            <MobileArrowBtn />
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* â”€â”€ 310px tall orbital stage (Proportional to 390px mobile viewport) â”€â”€ */}
      <div className="relative w-full max-w-[370px] select-none" style={{ height: "324px" }}>
        {/* â”€â”€ Orbital rings + glowing sparkles (z-5) â”€â”€ */}
        <svg
          viewBox="0 0 340 310"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
          fill="none"
        >
          <defs>
            <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" />
            </filter>
          </defs>

          {/* Outer ring */}
          <ellipse
            cx="170"
            cy="155"
            rx="148"
            ry="62"
            stroke="rgba(148, 163, 184, 0.38)"
            strokeWidth="1.1"
            transform="rotate(-9 170 155)"
          />

          {/* Inner ring */}
          <ellipse
            cx="170"
            cy="155"
            rx="118"
            ry="48"
            stroke="rgba(148, 163, 184, 0.28)"
            strokeWidth="1.0"
            transform="rotate(-3 170 155)"
          />

          {/* Sparkle flare: upper-left orb junction */}
          <g transform="translate(128, 114)">
            <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="6" fill="rgba(255,255,255,0.6)" filter="url(#starGlow)" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8" />
            <line x1="0" y1="-7" x2="0" y2="7" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8" />
          </g>

          {/* Sparkle node: lower-left ring */}
          <g transform="translate(120, 172)">
            <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="5.5" fill="rgba(255,255,255,0.5)" filter="url(#starGlow)" />
          </g>

          {/* Sparkle node: right ring */}
          <g transform="translate(242, 142)">
            <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="6.5" fill="rgba(255,255,255,0.55)" filter="url(#starGlow)" />
          </g>

          {/* Sparkle node: bottom ring */}
          <g transform="translate(176, 215)">
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="5" fill="rgba(255,255,255,0.4)" filter="url(#starGlow)" />
          </g>

          {/* Sparkle node: far left ring */}
          <g transform="translate(32, 170)">
            <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="4.5" fill="rgba(255,255,255,0.35)" filter="url(#starGlow)" />
          </g>
        </svg>

        {/* â”€â”€ Central Glass Orb (z-20, always overlapping corners of cards) â”€â”€ */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "120px",
            zIndex: 20,
          }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <MobileCentralGlassOrb />
          </motion.div>
        </div>

        {/* â”€â”€ CARD 1: Customers (top-left) â”€â”€ */}
        <motion.div
          style={{ position: "absolute", top: "4%", left: "0%", width: "46%", zIndex: 10 }}
          {...cardAnim(38, 38, 0)}
        >
          <Link href="/product" className="block active:scale-[0.98] transition-transform">
            <OrbCard
              icon={<IconCustomers />}
              title="Customers"
              desc={
                <>
                  Manage your
                  <br />
                  customers with ease.
                </>
              }
            />
          </Link>
        </motion.div>

        {/* â”€â”€ CARD 2: Orders (top-right, slightly higher) â”€â”€ */}
        <motion.div
          style={{ position: "absolute", top: "0%", right: "0%", width: "46%", zIndex: 10 }}
          {...cardAnim(-38, 38, 1)}
        >
          <Link href="/product" className="block active:scale-[0.98] transition-transform">
            <OrbCard
              icon={<IconOrders />}
              title="Orders"
              desc={
                <>
                  Track and manage
                  <br />
                  orders in real time.
                </>
              }
            />
          </Link>
        </motion.div>

        {/* â”€â”€ CARD 3: Team (bottom-left, slightly higher than Growth) â”€â”€ */}
        <motion.div
          style={{ position: "absolute", bottom: "4%", left: "0%", width: "46%", zIndex: 10 }}
          {...cardAnim(38, -38, 2)}
        >
          <Link href="/product" className="block active:scale-[0.98] transition-transform">
            <OrbCard
              icon={<IconTeam />}
              title="Team"
              desc={
                <>
                  Collaborate and
                  <br />
                  achieve more.
                </>
              }
            />
          </Link>
        </motion.div>

        {/* â”€â”€ CARD 4: Business Growth (bottom-right, slightly lower) â”€â”€ */}
        <motion.div
          style={{ position: "absolute", bottom: "0%", right: "0%", width: "46%", zIndex: 10 }}
          {...cardAnim(-38, -38, 3)}
        >
          <Link href="/product" className="block active:scale-[0.98] transition-transform">
            <OrbCard
              icon={<IconBarChart />}
              title="Business Growth"
              desc={
                <>
                  Total Revenue
                  <br />
                  (This Month)
                </>
              }
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-76px)] flex flex-col justify-center pt-3 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-0 w-full min-w-0">

          {/* â”€â”€â”€ LEFT COLUMN â”€â”€â”€ */}
          <div className="lg:col-span-5 text-left w-full min-w-0">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="font-serif text-[50px] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[86px] font-bold tracking-[-0.025em] text-[#111111] leading-[0.96]"
              >
                Zeon.
              </h1>
              <div className="font-canela text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium tracking-[-0.02em] text-[#6B7280] leading-[1.14] mt-2 sm:mt-3">
                <span className="block">Your business,</span>
                <span className="block text-[#6B7280]">in sync.</span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 sm:mt-6 max-w-[440px] text-sm sm:text-base leading-relaxed text-[#4A4A4A] font-normal"
            >
              Bring your orders, customers, inventory, and team together in one seamless workspace.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-7 flex items-center gap-4"
            >
              {/* Get started */}
              <Link
                href="/product"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#141414] px-6 sm:px-7 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#2a2a2a] active:scale-[0.98]"
              >
                <span>Get started</span>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* â”€â”€â”€ RIGHT COLUMN (DESKTOP & TABLET >= md): Full 3D Orbital Composition â”€â”€â”€ */}
          <div className="hidden md:flex lg:col-span-7 relative items-center justify-center lg:justify-end mt-8 lg:mt-0 w-full select-none lg:translate-x-6 xl:translate-x-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[580px] lg:max-w-[720px] xl:max-w-[800px]"
              style={{ aspectRatio: "800/620" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {/* LAYER 1 â€” RINGS (z-10, behind everything) */}
                <svg
                  viewBox="0 0 800 620"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 10, overflow: "visible" }}
                  fill="none"
                >
                  <defs>
                    <linearGradient id="ringGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8A9BAD" stopOpacity="0.16" />
                      <stop offset="20%" stopColor="#5C7080" stopOpacity="0.44" />
                      <stop offset="45%" stopColor="#3E5468" stopOpacity="0.36" />
                      <stop offset="70%" stopColor="#6A7E90" stopOpacity="0.42" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.16" />
                    </linearGradient>
                    <linearGradient id="ringGradB" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8A9BAD" stopOpacity="0.14" />
                      <stop offset="25%" stopColor="#5C7080" stopOpacity="0.42" />
                      <stop offset="55%" stopColor="#3E5468" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.14" />
                    </linearGradient>
                    <linearGradient id="ringGradAFront" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8A9BAD" stopOpacity="0.16" />
                      <stop offset="35%" stopColor="#5C7080" stopOpacity="0.44" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.16" />
                    </linearGradient>
                    <linearGradient id="ringGradBFront" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#8A9BAD" stopOpacity="0.14" />
                      <stop offset="35%" stopColor="#5C7080" stopOpacity="0.42" />
                      <stop offset="100%" stopColor="#8A9BAD" stopOpacity="0.14" />
                    </linearGradient>
                    <filter id="ringShadow" x="-5%" y="-20%" width="110%" height="140%">
                      <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0F172A" floodOpacity="0.03" />
                    </filter>
                  </defs>
                  {/* Outer ring */}
                  <g transform="translate(420,308) rotate(-7)" filter="url(#ringShadow)">
                    <ellipse cx="0" cy="0" rx="338" ry="162" stroke="url(#ringGradA)" strokeWidth="1.1" />
                  </g>
                  {/* Inner ring */}
                  <g transform="translate(420,300) rotate(-12)" filter="url(#ringShadow)">
                    <ellipse cx="0" cy="0" rx="256" ry="128" stroke="url(#ringGradB)" strokeWidth="1.1" />
                  </g>
                </svg>

                {/* LAYER 2 â€” CENTRAL GLASS ORB (z-20) */}
                <div
                  className="absolute aspect-square"
                  style={{
                    zIndex: 20,
                    width: "30%",
                    left: "52.5%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <CentralGlassOrb />
                </div>

                {/* LAYER 3 â€” FRONT ARCS (z-30) */}
                <svg
                  viewBox="0 0 800 620"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 30, overflow: "visible" }}
                  fill="none"
                >
                  <g transform="translate(420,300) rotate(-12)">
                    <path
                      d="M 256 0 A 256 128 0 0 1 -256 0"
                      stroke="url(#ringGradBFront)"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                    />
                  </g>
                  <g transform="translate(420,308) rotate(-7)">
                    <path
                      d="M 338 0 A 338 162 0 0 1 -338 0"
                      stroke="url(#ringGradAFront)"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>

                {/* LAYER 4 â€” GLASSMORPHIC CARDS (z-40) */}
                {/* CARD 1: Customers */}
                <TiltCard baseRotate={-5} style={{ position: "absolute", zIndex: 40, top: "5.5%", left: "0%", width: "42%", maxWidth: "310px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3.5 sm:p-4">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <IconBox><IconCustomers /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Customers</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[11px] sm:text-[12px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Manage your customers with ease.</p>
                            <div className="flex justify-end mt-2"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 2: Orders */}
                <TiltCard baseRotate={4} style={{ position: "absolute", zIndex: 40, top: "12%", right: "0%", width: "36%", maxWidth: "270px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3.5 sm:p-4">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <IconBox><IconOrders /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Orders</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[11px] sm:text-[12px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Track and manage orders in real time.</p>
                            <div className="flex justify-end mt-2"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 3: Team */}
                <TiltCard baseRotate={3} style={{ position: "absolute", zIndex: 40, top: "57%", left: "0%", width: "35%", maxWidth: "265px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3.5 sm:p-4">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <IconBox><IconTeam /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#090D16] tracking-tight truncate">Team</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <p className="text-[11px] sm:text-[12px] md:text-[12.5px] leading-snug font-medium text-[#334155]">Collaborate and achieve more.</p>
                            <div className="flex justify-end mt-2"><ArrowBtn /></div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

                {/* CARD 4: Business Growth */}
                <TiltCard baseRotate={-3} style={{ position: "absolute", zIndex: 40, top: "70%", right: "0%", width: "46%", maxWidth: "345px" }}>
                  <Link href="/product">
                    <GlassCard>
                      <div className="p-3.5 sm:p-4">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <IconBox><IconBarChart /></IconBox>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <h3 className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#090D16] tracking-tight truncate">Business Growth</h3>
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-400/80" />
                            </div>
                            <span className="text-[19px] sm:text-[23px] md:text-[26px] font-bold text-[#090D16] leading-none tracking-tight block mt-0.5">+32%</span>
                            <p className="text-[10px] sm:text-[11px] md:text-[11.5px] font-medium text-[#475569] mt-1 truncate">Total Revenue (This Month)</p>
                          </div>
                          {/* Sparkline */}
                          <div className="flex-shrink-0 self-center">
                            <svg viewBox="0 0 76 40" fill="none" className="w-[50px] h-[25px] sm:w-[60px] sm:h-[30px] md:w-[70px] md:h-[35px]" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="spkGrad" x1="0" y1="0" x2="1" y2="0">
                                  <stop offset="0%" stopColor="#64748B" />
                                  <stop offset="100%" stopColor="#090D16" />
                                </linearGradient>
                              </defs>
                              <path d="M2 34 L14 26 L26 29 L38 18 L50 20 L62 10 L74 3"
                                stroke="url(#spkGrad)" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-end mt-1.5"><ArrowBtn /></div>
                      </div>
                    </GlassCard>
                  </Link>
                </TiltCard>

              </motion.div>
            </motion.div>
          </div>

          {/* â”€â”€â”€ RIGHT COLUMN (MOBILE < md): Scroll-triggered Orb + Cards â”€â”€â”€ */}
          <div className="block md:hidden mt-4 w-full min-w-0 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <MobileHeroSection />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}