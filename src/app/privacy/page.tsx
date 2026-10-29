import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Shield,
  ArrowLeft,
  Folder,
  Briefcase,
  Lock,
  Share2,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Privacy Policy for Zeon Warehouse & Order Management platform.",
};

export default function PrivacyPage() {
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

        <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16">
          {/* Back Navigation */}
          <Link
            href="/"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-[#737373] transition-colors hover:text-[#141414]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          {/* Privacy Card replicating modal layout */}
          <div
            className="rounded-2xl border border-white/60 shadow-xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
              backdropFilter: "blur(14px) saturate(118%)",
              WebkitBackdropFilter: "blur(14px) saturate(118%)",
              boxShadow: "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/60 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/45 border border-white/65 text-[#141414] backdrop-blur-sm">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#141414]">
                    Privacy Policy
                  </h1>
                  <p className="text-xs text-[#737373]">
                    Zeon • Warehouse &amp; Order Management
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-[#4A4A4A] leading-relaxed">
              {/* Effective Date Pill Badge */}
              <div>
                <span className="inline-flex items-center rounded-md border border-[#E8E6DF] bg-[#F9F9F6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5A5A5A]">
                  Effective Date: August 2026 • Version 1.0
                </span>
              </div>

              {/* Intro */}
              <p className="text-[#3A3A3A] leading-relaxed">
                This Privacy Policy outlines how Zeon (&ldquo;Zeon&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Platform&rdquo;) collects, stores, processes, and protects personal and business operational data across our mobile and desktop warehouse applications.
              </p>

              {/* 1. Information We Collect */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Folder className="h-4 w-4 text-[#141414]" />
                  <h2>1. Information We Collect</h2>
                </div>

                <div className="space-y-3 pl-6">
                  <div>
                    <h3 className="font-semibold text-[#141414]">
                      A. Account &amp; Identification Data
                    </h3>
                    <p className="mt-0.5 text-xs text-[#5A5A5A] leading-relaxed">
                      When you sign in via Google OAuth 2.0, we collect your authorized full name, email address, profile avatar, and assigned workspace role (Administrator or Staff).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#141414]">
                      B. Warehouse Operational &amp; Inventory Data
                    </h3>
                    <p className="mt-0.5 text-xs text-[#5A5A5A] leading-relaxed">
                      We process business information entered into the system including product brand names, footwear catalog items, size/color variant stocks, wholesale order records, pricing, order line items, and customer directories.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#141414]">
                      C. Audit Logs &amp; System Diagnostics
                    </h3>
                    <p className="mt-0.5 text-xs text-[#5A5A5A] leading-relaxed">
                      To maintain platform integrity, the system automatically logs stock adjustments, order confirmation events, permission modifications, device platform details, and diagnostic performance metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Briefcase className="h-4 w-4 text-[#141414]" />
                  <h2>2. How We Use Your Information</h2>
                </div>

                <ul className="list-disc space-y-2 pl-10 text-xs text-[#5A5A5A] leading-relaxed">
                  <li>Real-time synchronization of warehouse inventory and wholesale orders across distribution terminals.</li>
                  <li>Enforcement of granular role-based access permissions and staff authorization.</li>
                  <li>Automated generation of PDF wholesale order sheets, order analytics, and performance summaries.</li>
                  <li>System security, audit trail compliance, fraud prevention, and operational integrity.</li>
                </ul>
              </div>

              {/* 3. Data Storage & Cloud Security */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Lock className="h-4 w-4 text-[#141414]" />
                  <h2>3. Data Storage &amp; Cloud Security</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  All records are encrypted in transit using industry-standard TLS 1.3 and encrypted at rest utilizing Google Cloud Firestore infrastructure (AES-256). Image and media assets are stored and optimized securely via ImageKit.io Content Delivery Network with signed tokens.
                </p>
              </div>

              {/* 4. Third-Party Services & Data Sharing */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Share2 className="h-4 w-4 text-[#141414]" />
                  <h2>4. Third-Party Services &amp; Data Sharing</h2>
                </div>
                <div className="pl-6 space-y-2 text-xs text-[#5A5A5A] leading-relaxed">
                  <p>
                    We do NOT sell, rent, or monetize your personal or business data under any circumstances. Data is shared strictly with authorized infrastructure service providers essential for platform operations:
                  </p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Google Cloud &amp; Firebase (Authentication, Database, Cloud Infrastructure).</li>
                    <li>ImageKit.io (Media CDN &amp; Image Processing).</li>
                  </ul>
                </div>
              </div>

              {/* 5. Data Governance & User Rights */}
              <div className="space-y-2 pb-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <ShieldCheck className="h-4 w-4 text-[#141414]" />
                  <h2>5. Data Governance &amp; User Rights</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  In accordance with international data protection standards (including GDPR and CCPA principles), Workspace Administrators retain full authority to review, export, update, or purge inventory records, staff accounts, customer directories, and order archives from the workspace.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-white/60 bg-white/30 backdrop-blur-sm px-6 py-4 sm:px-8">
              <span className="text-xs text-[#737373]" suppressHydrationWarning>
                © {new Date().getFullYear()} XEOPS
              </span>
              <Link
                href="/"
                className="rounded-lg bg-[#141414] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#262626] active:scale-95"
              >
                Understood
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
