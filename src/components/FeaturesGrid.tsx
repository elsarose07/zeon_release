"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  FileText,
  Smartphone,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Real-Time Stock Intelligence",
    description:
      "Track footwear catalog variants, sizes, and quantities in one responsive grid with instant stock updates.",
    tag: "Inventory",
  },
  {
    icon: FileText,
    title: "Order Summaries & PDF Export",
    description:
      "Create, review, and export clear PDF wholesale order summaries for clients in seconds without manual spreadsheet math.",
    tag: "Orders",
  },
  {
    icon: Smartphone,
    title: "Mobile Order Taking",
    description:
      "Empower sales representatives and staff with a fast Android client for taking customer orders and digital signatures on the go.",
    tag: "Mobility",
  },
  {
    icon: RefreshCw,
    title: "Seamless Cloud Sync",
    description:
      "All updates made on Windows or Android sync immediately across every team member with real-time consistency.",
    tag: "Cloud",
  },
  {
    icon: ShieldCheck,
    title: "Google OAuth & Role Security",
    description:
      "Granular access controls ensure authorized staff and administrators have safe, encrypted access to business data.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "Calm, High-Speed Experience",
    description:
      "Built with modern performance standards for lightning-fast lookups, zero clutter, and friction-free daily operations.",
    tag: "Speed",
  },
];

export function FeaturesGrid() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative py-12 sm:py-24 max-w-6xl mx-auto px-4 sm:px-10 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#141414]"
        >
          Business, brought together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#5A5A5A] text-balance"
        >
          Orders, inventory, customers, and teams — all working together in one seamless workspace.
        </motion.p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onPointerMove={handlePointerMove}
              onPointerEnter={handlePointerMove}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/60 p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-white/85 hover:shadow-[0_20px_48px_-10px_rgba(15,23,42,0.14)]"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
                backdropFilter: "blur(14px) saturate(118%)",
                WebkitBackdropFilter: "blur(14px) saturate(118%)",
                boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
              }}
            >
              {/* Compact cursor-following frosted very-light-green spotlight reflection */}
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:hidden"
                style={{
                  background: "radial-gradient(circle 90px at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(187, 247, 208, 0.62) 0%, rgba(134, 239, 172, 0.25) 35%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/45 border border-white/65 text-[#141414] backdrop-blur-sm transition-colors duration-200 group-hover:bg-[#141414] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8A8A]">
                    {feature.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#141414] tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A5A5A]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
