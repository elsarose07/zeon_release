"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import desktopImg from "../../public/pic_2.png";
import mobileImg from "../../public/mobile_preview.png";

export function AppPreview() {
  return (
    <section id="preview" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-24 md:pb-36 lg:pb-44 overflow-x-clip">
      {/* Container wrapper */}
      <div className="relative pl-1 sm:pl-3 md:pl-5 pr-4 sm:pr-8 md:pr-12 lg:pr-14">
        {/* Main Laptop & Phone Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          {/* ─── LAPTOP UNIT ─── */}
          <div className="relative mx-auto w-full">
            {/* LAPTOP LID / SCREEN */}
            <div className="relative mx-auto rounded-t-[14px] sm:rounded-t-[24px] md:rounded-t-[28px] border-[4px] sm:border-[8px] md:border-[10px] border-[#0D0D11] bg-[#0D0D11] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] ring-1 ring-white/10 ring-offset-1 ring-offset-[#9CA3AF]/60">
              {/* Top Camera Notch (MacBook style) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-2.5 sm:h-4.5 md:h-5 w-16 sm:w-32 md:w-36 rounded-b-md sm:rounded-b-lg bg-[#0D0D11] flex items-center justify-center">
                {/* Webcam Lens */}
                <div className="h-1 w-1 sm:h-2 sm:w-2 rounded-full bg-[#18181C] ring-1 ring-white/15 flex items-center justify-center">
                  <div className="h-0.5 w-0.5 rounded-full bg-[#2563EB]/40" />
                </div>
              </div>

              {/* Screen Display Content */}
              <div className="relative overflow-hidden rounded-t-[10px] sm:rounded-t-[16px] md:rounded-t-[18px] bg-[#FAFAF8]">
                {/* Top Window Bar */}
                <div className="flex items-center justify-between border-b border-[#EAE7E0] bg-white px-2.5 sm:px-5 py-2 sm:py-3">
                  {/* Window Controls & Title */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                    </div>
                    <div className="h-3.5 sm:h-4 w-px bg-[#EAE7E0] hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-[#141414] tracking-wide">
                        ZEON
                      </span>
                    </div>
                  </div>

                  {/* Platform indicator badge */}
                  <div className="flex items-center gap-2 text-xs text-[#737373]">
                    <span className="font-medium text-[9px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">
                      Windows Desktop &amp; Android Client
                    </span>
                  </div>
                </div>

                {/* Desktop Screenshot */}
                <div className="relative w-full overflow-hidden bg-[#FDFDFB]">
                  <Image
                    src={desktopImg}
                    alt="ZEON Desktop Workspace Preview"
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* LAPTOP LOWER CHASSIS / BASE */}
            <div className="relative -mx-1.5 sm:-mx-3 md:-mx-4 z-10">
              {/* Sleek Silver Aluminium Unibody Base */}
              <div className="h-2.5 sm:h-4 md:h-5 w-full rounded-b-[8px] sm:rounded-b-[14px] md:rounded-b-[18px] bg-gradient-to-b from-[#E4E7EC] via-[#CFD4DC] to-[#A8AEB8] border-t border-white/80 border-b border-[#7A828E] shadow-[0_4px_12px_rgba(0,0,0,0.18)] flex items-start justify-center">
                {/* Thumb Opening Notch / Groove in Center */}
                <div className="h-1 sm:h-2 w-12 sm:w-22 md:w-28 rounded-b-md bg-[#8E95A1] shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)]" />
              </div>

              {/* Soft Contact Ground Shadow below Laptop */}
              <div className="w-[96%] mx-auto h-3 sm:h-6 bg-black/25 blur-lg rounded-full -mt-1 sm:-mt-1.5 pointer-events-none" />
            </div>
          </div>

          {/* ─── MOBILE PHONE MOCKUP (RIGHT SIDE, RESPONSIVE SCALING) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="absolute bottom-0 sm:bottom-0.5 md:bottom-1 -right-1 sm:-right-4 md:-right-6 lg:-right-7 z-30 w-[95px] xs:w-[120px] sm:w-[165px] md:w-[210px] lg:w-[245px] rounded-[18px] sm:rounded-[36px] md:rounded-[40px] border-[3.5px] sm:border-[7px] md:border-[8px] border-[#0D0D11] bg-[#0D0D11] shadow-[-16px_10px_32px_rgba(0,0,0,0.45),0_25px_50px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
          >
            {/* Dynamic Island Pill at Top Center */}
            <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-40 h-2 sm:h-4 w-8 sm:w-18 md:w-20 rounded-full bg-black flex items-center justify-end pr-1 sm:pr-2">
              <div className="h-0.5 w-0.5 sm:h-1.5 sm:w-1.5 rounded-full bg-[#18181C]" />
            </div>

            {/* Phone Screen displaying mobile app preview */}
            <div className="relative overflow-hidden rounded-[14px] sm:rounded-[28px] md:rounded-[32px] bg-white">
              <Image
                src={mobileImg}
                alt="ZEON Mobile App Preview"
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
