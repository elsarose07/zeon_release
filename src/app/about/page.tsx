import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  Sparkles,
  Layers,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Learn more about our philosophy, core values, and get in touch directly.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFCF9] text-[#141414] flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow" />

      <div>
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-8 lg:py-16">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#141414] leading-[1.02]">
              Building tools with <br />
              <span className="italic text-[#737373]">clarity and purpose.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              We believe great software should be calm, dependable, and invisible in your day-to-day operations—empowering teams to move forward without friction or clutter.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-[#E8E6DF] bg-white p-7 shadow-subtle transition-all hover:border-[#D5D0C5] hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F4F0] text-[#141414] mb-5">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#141414]">
                Simplicity First
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                We craft clean, thoughtful interfaces that eliminate noise, letting you focus entirely on your work.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E6DF] bg-white p-7 shadow-subtle transition-all hover:border-[#D5D0C5] hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F4F0] text-[#141414] mb-5">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#141414]">
                Engineered for Speed
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                Fast interactions, instant cloud synchronization, and responsive feedback across desktop and mobile.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E6DF] bg-white p-7 shadow-subtle transition-all hover:border-[#D5D0C5] hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F4F0] text-[#141414] mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#141414]">
                Built on Trust
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                Rigorous security standards, data privacy, and reliable architecture designed for long-term growth.
              </p>
            </div>
          </div>

          {/* Contact Cards Section */}
          <div className="mt-16 rounded-3xl border border-[#E8E6DF] bg-white p-8 sm:p-12 shadow-hero-mockup text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141414]">
              Direct Contact
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A] max-w-md mx-auto">
              Have questions, inquiries, or feedback? Reach out directly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support.zeon@xeops.in"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-[#E8E6DF] bg-[#FAFAF8] px-7 py-3.5 text-sm font-medium text-[#141414] shadow-sm transition-all hover:border-[#141414] hover:bg-white active:scale-95"
              >
                <Mail className="h-4 w-4 text-[#737373] transition-colors group-hover:text-[#141414]" />
                <span>support.zeon@xeops.in</span>
              </a>

              <a
                href="tel:9447141984"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-[#E8E6DF] bg-[#FAFAF8] px-7 py-3.5 text-sm font-medium text-[#141414] shadow-sm transition-all hover:border-[#141414] hover:bg-white active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#737373] transition-colors group-hover:text-[#141414]" />
                <span>9447141984</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
