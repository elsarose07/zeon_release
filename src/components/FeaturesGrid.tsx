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
  return (
    <section className="relative py-16 sm:py-24 max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#141414]"
        >
          Everything your business needs. <br />
          <span className="italic text-[#737373]">Nothing it doesn&apos;t.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-base sm:text-lg text-[#5A5A5A] text-balance"
        >
          Designed thoughtfully to eliminate clutter so you and your team can focus on fulfilling orders and scaling smoothly.
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
              className="group relative flex flex-col justify-between rounded-3xl border border-[#E8E6DF] bg-white p-7 sm:p-8 shadow-subtle transition-all duration-300 hover:border-[#D5D0C5] hover:shadow-hero-mockup"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAFAF8] border border-[#EFECE6] text-[#141414] transition-colors duration-200 group-hover:bg-[#141414] group-hover:text-white">
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
