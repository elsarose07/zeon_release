"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Catalog Your Inventory",
    description:
      "Enter your footwear brand lines, size charts, wholesale prices, and available quantities in minutes.",
    bulletPoints: ["Quick batch variant creator", "Live category sorting"],
  },
  {
    step: "02",
    title: "Take Wholesale Orders",
    description:
      "Use ZEON on Android or Windows to log client orders on the spot with real-time stock deductions.",
    bulletPoints: ["Digital client signatures", "Auto tax & subtotal math"],
  },
  {
    step: "03",
    title: "Instant Order Export & Sync",
    description:
      "Generate clear PDF order sheets and ensure the whole warehouse is aligned with zero delay.",
    bulletPoints: ["Instant cloud synchronization", "PDF export with 1-click"],
  },
];

export function WorkflowSection() {
  return (
    <section className="relative py-16 sm:py-24 max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
      {/* Background container styling */}
      <div className="rounded-3xl border border-[#ECE9E2] bg-white/70 p-8 sm:p-14 backdrop-blur-sm shadow-subtle">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141414]"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-xs sm:text-sm text-[#5A5A5A]"
          >
            A straightforward flow built to keep your wholesale order management moving fast.
          </motion.p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Number Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-[#737373]">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-[#E8E6DF]" />
                </div>

                <h3 className="text-lg font-bold text-[#141414] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-3 border-t border-[#F2EFE9] text-xs text-[#4A4A4A]">
                {item.bulletPoints.map((bp) => (
                  <li key={bp} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
