import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  FileQuestion,
  ArrowRight,
} from "lucide-react";

export default function HelpPage() {
  return (
    <div
      className="relative min-h-screen text-[#141414] flex flex-col justify-between overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 65% at 68% 42%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 38%, transparent 68%),
          radial-gradient(ellipse 50% 40% at 30% 18%, rgba(255,255,255,0.22) 0%, transparent 65%),
          linear-gradient(160deg, #C6CAD0 0%, #BCC1C7 28%, #B4B9C0 60%, #ABB0B7 100%)
        `,
      }}
    >
      <div>
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-36 lg:pb-24">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.02]">
              Help <span className="font-serif italic font-normal text-[#5A5A5A] text-[0.88em] mx-1 sm:mx-2 select-none" style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}>&amp;</span> Support
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              Find answers to common questions about setting up, syncing, and managing your orders and stock with ease.
            </p>
          </div>

          {/* Quick Help Topics Grid */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl border border-white/60 p-6 transition-all duration-300 hover:border-white/85"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
                  backdropFilter: "blur(14px) saturate(118%)",
                  WebkitBackdropFilter: "blur(14px) saturate(118%)",
                  boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/45 border border-white/65 text-[#141414] backdrop-blur-sm">
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

              <div
                className="rounded-2xl border border-white/60 p-6 transition-all duration-300 hover:border-white/85"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
                  backdropFilter: "blur(14px) saturate(118%)",
                  WebkitBackdropFilter: "blur(14px) saturate(118%)",
                  boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/45 border border-white/65 text-[#141414] backdrop-blur-sm">
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
          <div
            className="mt-14 max-w-4xl mx-auto rounded-3xl border border-white/60 p-8 text-center transition-all duration-300 hover:border-white/85"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
              backdropFilter: "blur(14px) saturate(118%)",
              WebkitBackdropFilter: "blur(14px) saturate(118%)",
              boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
            }}
          >
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
    </div>
  );
}
