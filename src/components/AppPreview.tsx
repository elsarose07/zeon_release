"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import desktopImg from "../../public/pic_2.png";
import mobileImg from "../../public/mobile_preview.png";

export function AppPreview() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-28 sm:pb-36 md:pb-44 lg:pb-48 overflow-x-clip">
      {/* Container wrapper providing side breathing room for the mobile phone */}
      <div className="relative pl-3 sm:pl-6 md:pl-16 lg:pl-20 pr-1 sm:pr-2 md:pr-4 lg:pr-6">
        {/* Main Desktop Window Frame */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-[#E5E2DA] bg-white p-2 sm:p-3.5 shadow-hero-mockup backdrop-blur-md"
        >
          {/* Top Window Bar */}
          <div className="relative overflow-hidden rounded-2xl border border-[#ECE9E2] bg-[#FAFAF8]">
            <div className="flex items-center justify-between border-b border-[#EAE7E0] bg-white px-4 py-3 sm:px-6">
              {/* Window Controls & Title */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                </div>
                <div className="h-4 w-px bg-[#EAE7E0] hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#141414] tracking-wide">
                    ZEON
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-200/60 shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Live Sync Active
                  </span>
                </div>
              </div>

              {/* Platform indicator badge */}
              <div className="flex items-center gap-2 text-xs text-[#737373]">
                <span className="hidden sm:inline font-medium text-[11px] uppercase tracking-wider text-[#8A8A8A]">
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

          {/* Overlapping Mobile Phone Mockup at the LEFT SIDE of the Windows App */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="absolute top-[38%] sm:top-[39%] -left-3 sm:-left-6 md:-left-12 lg:-left-16 z-20 w-[135px] sm:w-[180px] md:w-[215px] lg:w-[235px] rounded-[28px] sm:rounded-[38px] border-[6px] sm:border-[8px] border-[#141414] bg-[#141414] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
          >
            {/* Top Notch / Camera Pill */}
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-30 h-3 sm:h-4 w-16 sm:w-22 rounded-full bg-[#141414] flex items-center justify-center">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#2E2E2E] mr-1.5 sm:mr-2" />
              <div className="h-1 sm:h-1.5 w-6 sm:w-7 rounded-full bg-[#2A2A2A]" />
            </div>

            {/* Phone Screen displaying mobile app preview */}
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-white">
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
    </div>
  );
}
