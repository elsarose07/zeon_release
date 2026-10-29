import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveCard } from "@/components/InteractiveCard";
import {
  Mail,
  Phone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Learn more about our philosophy, core values, and get in touch directly.",
};

export default function AboutPage() {
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

        <main className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-36 lg:pb-24">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.02]">
              Building tools with <br />
              <span className="italic text-[#5A5A5A]">clarity and purpose.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              We believe great software should be calm, dependable, and invisible in your day-to-day operations—empowering teams to move forward without friction or clutter.
            </p>
          </div>

          {/* Dual Primary Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 1. Philosophy & Mission Card */}
            <InteractiveCard
              maxTilt={4}
              className="rounded-3xl border border-white/60 hover:border-white/85 p-8 sm:p-10 transition-all duration-300"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-white shadow-md">
                    <Layers className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-[#141414]">
                    Philosophy &amp; Mission
                  </h2>
                  <p className="mt-1 text-xs text-[#737373]">
                    Simplicity First • Distraction-Free Workspaces
                  </p>
                </div>

                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">
                  We craft thoughtful interfaces that eliminate noise, letting you focus entirely on moving your business forward with speed and confidence.
                </p>

                {/* Key Points List */}
                <ul className="mt-6 space-y-2.5 text-xs text-[#4A4A4A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Calm, distraction-free design eliminating operational clutter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Zero learning curve with intuitive and modern workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>High-throughput performance across desktop and mobile</span>
                  </li>
                </ul>
              </div>

              {/* Action Area */}
              <div className="mt-8 pt-6 border-t border-white/60 relative z-20">
                <a
                  href="mailto:johan.manojp@gmail.com"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#141414] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Email: johan.manojp@gmail.com</span>
                </a>
              </div>
            </InteractiveCard>

            {/* 2. Trust & Direct Support Card */}
            <InteractiveCard
              maxTilt={4}
              className="rounded-3xl border border-white/60 hover:border-white/85 p-8 sm:p-10 transition-all duration-300"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-white shadow-md">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-[#141414]">
                    Trust &amp; Direct Support
                  </h2>
                  <p className="mt-1 text-xs text-[#737373]">
                    Security Standards • Direct Personal Assistance
                  </p>
                </div>

                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">
                  Rigorous security standards, data privacy, and reliable architecture combined with personal, high-touch support whenever you need help.
                </p>

                {/* Key Points List */}
                <ul className="mt-6 space-y-2.5 text-xs text-[#4A4A4A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Enterprise data integrity and secure cloud synchronization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Role-based permissions, audit logging &amp; data privacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Direct phone support line for rapid operational inquiries</span>
                  </li>
                </ul>
              </div>

              {/* Action Area */}
              <div className="mt-8 pt-6 border-t border-white/60 relative z-20">
                <a
                  href="tel:9447141984"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#141414] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Call Directly: 9447141984</span>
                </a>
              </div>
            </InteractiveCard>
          </div>

          {/* Secondary Banner — Explore Products */}
          <div className="mt-8 max-w-5xl mx-auto">
            <InteractiveCard
              maxTilt={3}
              className="rounded-3xl border border-white/60 hover:border-white/85 p-8 sm:p-10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/65 bg-white/45 text-[#4A4A4A] backdrop-blur-sm">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#141414]">Explore ZEON Products</h3>
                    <p className="mt-1 text-sm text-[#737373]">
                      Available for Windows desktop dispatch and Android mobile APK order taking.
                    </p>
                  </div>
                </div>
                <div className="relative z-20">
                  <Link
                    href="/product"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/65 bg-white/45 px-6 py-2.5 text-sm font-medium text-[#141414] backdrop-blur-sm transition-all duration-200 hover:bg-[#141414] hover:text-white hover:border-[#141414] hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98]"
                  >
                    <span>View products</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </InteractiveCard>
          </div>

          {/* Core Principles Cards */}
          <div className="mt-14 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#141414] text-center mb-8">
              Our Core Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InteractiveCard
                maxTilt={4}
                className="rounded-2xl border border-white/60 hover:border-white/85 p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                    1
                  </div>
                  <h4 className="font-semibold text-[#141414]">Simplicity First</h4>
                  <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                    We craft clean, thoughtful interfaces that eliminate noise, letting you focus entirely on your work.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard
                maxTilt={4}
                className="rounded-2xl border border-white/60 hover:border-white/85 p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                    2
                  </div>
                  <h4 className="font-semibold text-[#141414]">Engineered for Speed</h4>
                  <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                    Fast interactions, instant cloud synchronization, and responsive feedback across desktop and mobile.
                  </p>
                </div>
              </InteractiveCard>

              <InteractiveCard
                maxTilt={4}
                className="rounded-2xl border border-white/60 hover:border-white/85 p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                    3
                  </div>
                  <h4 className="font-semibold text-[#141414]">Built on Trust</h4>
                  <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                    Rigorous security standards, data privacy, and reliable architecture designed for long-term growth.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
