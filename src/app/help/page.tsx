"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  FileQuestion,
  ArrowRight,
  X,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HelpPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-play when lightbox opens, pause when closed
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "";
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FCFCF9] text-[#141414] flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow" />

      <div>
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-8 lg:py-14">
          {/* Description */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              Watch our complete walkthrough video below to learn how to set up, sync, and manage your orders and stock with ease.
            </p>
          </div>

          {/* Video — auto-plays on page open, click expand for lightbox */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-[#E8E6DF] bg-white p-3 sm:p-4 shadow-hero-mockup">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#141414]">
                <video
                  className="w-full h-full object-cover"
                  src="/Zeondemo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
                {/* Expand to lightbox */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm hover:bg-black/80 transition-colors"
                >
                  <Maximize2 className="h-3 w-3" />
                  <span>Expand</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Help Topics Grid */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5F4F0] text-[#141414]">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-[#141414] text-sm">
                    How do I install the apps?
                  </h3>
                </div>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  Visit the <Link href="/product" className="underline font-medium text-[#141414]">Product page</Link> to download either the Windows desktop setup or the Android APK package for mobile devices.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5F4F0] text-[#141414]">
                    <FileQuestion className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-[#141414] text-sm">
                    How does real-time sync work?
                  </h3>
                </div>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  Sign in with your Google OAuth credentials on both desktop and mobile. All stock entries and wholesale orders synchronize automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Need Direct Assistance Banner */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-[#E8E6DF] bg-white p-8 text-center shadow-subtle">
            <h3 className="font-serif text-2xl font-normal text-[#141414]">
              Still need assistance?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A]">
              Get in touch with our team directly for one-on-one help and questions.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#141414] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-[#262626]"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Actual Video */}
              <video
                ref={modalVideoRef}
                className="w-full aspect-video bg-black"
                controls
                playsInline
                src="/Zeondemo.mp4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
