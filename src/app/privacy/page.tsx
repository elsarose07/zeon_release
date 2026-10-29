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
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md border border-white/60 bg-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3A3A3A] backdrop-blur-sm">
                  EFFECTIVE DATE: OCTOBER 2026 • VERSION 2.1 (INDIA)
                </span>
                <span className="inline-flex items-center rounded-md border border-white/40 bg-white/20 px-3 py-1 text-[11px] font-medium text-[#5A5A5A]">
                  Platform: Zeon by XEOPS • Warehouse &amp; Order Management
                </span>
              </div>

              {/* Intro */}
              <p className="text-[#3A3A3A] leading-relaxed">
                This Privacy Policy outlines how Zeon (&ldquo;the Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), owned and operated by XEOPS (&ldquo;the Company&rdquo;, &ldquo;Enterprise&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a Micro Enterprise registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India (UDYAM Registration No: UDYAM-KL-03-0044323) and founded by Johan P Manoj in Kerala, India, collects, stores, processes, and protects personal and business operational data across our mobile and desktop warehouse applications.
              </p>
              <p className="text-xs text-[#5A5A5A] italic">
                Zeon operates strictly as a B2B warehouse inventory and order management system for businesses in India and is governed exclusively by the laws of India.
              </p>

              {/* 1. Operational Architecture & Roles */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Briefcase className="h-4 w-4 text-[#141414]" />
                  <h2>1. Operational Architecture &amp; Roles</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Warehouse Owners / Administrators</strong> act as the primary Data Fiduciaries / Controllers for their respective warehouse workspaces, determining what business, customer, and staff records are collected and maintained.</li>
                  <li><strong>Zeon (operated by XEOPS)</strong> acts as the technology infrastructure provider and Data Processor facilitating secure cloud synchronization and storage.</li>
                </ul>
              </div>

              {/* 2. Information We Process */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Folder className="h-4 w-4 text-[#141414]" />
                  <h2>2. Information We Process</h2>
                </div>
                <div className="space-y-2.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-[#141414]">A. Administrator Account Data</h3>
                    <p className="mt-0.5">When an administrator signs in via Google OAuth 2.0, we collect authorized account details including full name, Google email address, and profile photo for authentication and workspace access control.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">B. Warehouse Staff Information (Managed by Owner)</h3>
                    <p className="mt-0.5">Warehouse administrators may register staff members by providing their name, Google email address, and specific inventory/billing permission flags.</p>
                    <p className="mt-1.5 rounded-lg border border-amber-200/60 bg-amber-50/50 p-2.5 text-[11.5px] text-[#4A4035]">
                      <strong>Voluntary Aadhaar Storage:</strong> The app provides an optional storage field for a staff member&apos;s Aadhaar number. Providing an Aadhaar number is 100% voluntary and is NEVER mandated, required, or compelled by Zeon. It is provided solely as an optional record-keeping utility for the respective warehouse owner&apos;s internal verification. Warehouse owners hold sole discretion over whether to collect this detail. When stored, Aadhaar numbers are encrypted client-side using military-grade AES-256-CBC encryption before being sent to the cloud, and are never stored or logged in plain text.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">C. Customer Directory Data</h3>
                    <p className="mt-0.5">To facilitate wholesale invoicing and order dispatch, warehouse staff may record customer profiles, including business contact names, telephone numbers, and physical delivery/shipping addresses.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">D. Inventory &amp; Transaction Records</h3>
                    <p className="mt-0.5">Footwear catalog listings, brand names, size/color variant stock balances, wholesale order histories, pricing tiers, and generated PDF invoice documents.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">E. Device Diagnostics &amp; Push Tokens</h3>
                    <p className="mt-0.5">To deliver instant stock and order alerts, we register Firebase Cloud Messaging (FCM) device push tokens, device platform metadata, and tamper-proof security audit logs.</p>
                  </div>
                </div>
              </div>

              {/* 3. Purpose of Processing */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Shield className="h-4 w-4 text-[#141414]" />
                  <h2>3. Purpose of Processing</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li>Real-time synchronization of footwear catalog stocks and wholesale orders across distribution terminals.</li>
                  <li>Enforcement of granular role-based access permissions and staff authorization barriers.</li>
                  <li>Automated compilation of PDF wholesale invoices, order analytics, and packing slips.</li>
                  <li>Real-time high-priority push notification dispatching for incoming wholesale orders.</li>
                  <li>Fraud prevention, platform security, and audit trail preservation.</li>
                </ul>
              </div>

              {/* 4. Data Storage & Security Safeguards */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Lock className="h-4 w-4 text-[#141414]" />
                  <h2>4. Data Storage &amp; Security Safeguards</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Encryption in Transit:</strong> All communications between the app, servers, and storage services are encrypted using industry-standard TLS 1.3 over HTTPS.</li>
                  <li><strong>Cloud Database at Rest:</strong> Primary operational records are encrypted at rest using Google Cloud Firestore infrastructure (AES-256).</li>
                  <li><strong>Client-Side PII Encryption:</strong> Sensitive identity numbers (such as Aadhaar) undergo an extra dedicated client-side AES-256-CBC encryption layer on your device before cloud transmission.</li>
                  <li><strong>Media Asset CDN:</strong> Product and branding media are stored securely on ImageKit.io with cryptographic HMAC-SHA1 upload authorization tokens.</li>
                </ul>
              </div>

              {/* 5. Third-Party Infrastructure Processors */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Share2 className="h-4 w-4 text-[#141414]" />
                  <h2>5. Third-Party Infrastructure Processors</h2>
                </div>
                <div className="pl-6 space-y-2 text-xs text-[#5A5A5A] leading-relaxed">
                  <p>We do NOT sell, rent, broker, or monetize your personal or business data under any circumstances. Data is shared strictly with essential cloud infrastructure service providers:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li><strong>Google Cloud &amp; Firebase:</strong> User authentication, Cloud Firestore database, and Firebase Cloud Messaging (FCM).</li>
                    <li><strong>Cloudflare, Inc.:</strong> Cloudflare Workers for secure API proxying, HMAC signature generation, and FCM push notification routing.</li>
                    <li><strong>ImageKit.io:</strong> Media asset storage and dynamic image delivery.</li>
                  </ul>
                </div>
              </div>

              {/* 6. Data Retention & Deletion Policy */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <ShieldCheck className="h-4 w-4 text-[#141414]" />
                  <h2>6. Data Retention &amp; Deletion Policy</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Warehouse Owner Controlled:</strong> Because records belong to the respective business, all data deletion and workspace purging requests can only be initiated by the verified warehouse owner.</li>
                  <li><strong>Deletion Procedure:</strong> A warehouse owner may request permanent deletion of their warehouse account, customer directories, staff records, or inventory archives by contacting support directly at <a href="mailto:support.zeon@xeops.in" className="text-[#141414] underline font-medium">support.zeon@xeops.in</a>.</li>
                  <li><strong>Statutory Retention:</strong> Commercial invoices, order history, and audit logs may be preserved as required by applicable Indian taxation (GST) and commercial regulations.</li>
                  <li><strong>Trial Expiration &amp; Data Retention:</strong> If a warehouse owner elects not to proceed following their evaluation trial period, a 7-day grace window is provided to export data, after which workspace records may be archived or securely deleted.</li>
                </ul>
              </div>

              {/* 7. Grievance Redressal & Support Contact */}
              <div className="space-y-2 pb-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <ShieldCheck className="h-4 w-4 text-[#141414]" />
                  <h2>7. Grievance Redressal &amp; Support Contact</h2>
                </div>
                <div className="pl-6 space-y-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                  <p className="font-medium text-[#141414]">In compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li><strong>Operating Entity:</strong> XEOPS (Registered Micro Enterprise, Ministry of MSME, Govt. of India • UDYAM-KL-03-0044323)</li>
                    <li><strong>Founder &amp; Grievance Officer:</strong> Johan P Manoj</li>
                    <li><strong>Support &amp; Privacy Inquiries:</strong> <a href="mailto:support.zeon@xeops.in" className="text-[#141414] underline font-medium">support.zeon@xeops.in</a></li>
                    <li><strong>Location:</strong> Kerala, India</li>
                    <li><strong>Response SLA:</strong> All privacy inquiries, data subject requests, and grievances will be acknowledged and addressed within 15 days.</li>
                    <li><strong>Governing Law &amp; Jurisdiction:</strong> Governed exclusively by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Kerala, India.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-white/60 bg-white/30 backdrop-blur-sm px-6 py-4 sm:px-8">
              <span className="text-xs text-[#737373]" suppressHydrationWarning>
                © {new Date().getFullYear()} Zeon
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
