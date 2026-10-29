import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FileText,
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  Lock,
  Scale,
  ShieldAlert,
  Building2,
  Sparkles,
  X,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Terms of Service for Zeon Warehouse & Order Management platform.",
};

export default function TermsPage() {
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

          {/* Terms Card replicating layout */}
          <div
            className="rounded-2xl border border-white/60 shadow-xl overflow-hidden transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
              backdropFilter: "blur(14px) saturate(118%)",
              WebkitBackdropFilter: "blur(14px) saturate(118%)",
              boxShadow:
                "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/60 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/45 border border-white/65 text-[#141414] backdrop-blur-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#141414]">
                    Terms of Service
                  </h1>
                  <p className="text-xs text-[#737373]">
                    Zeon • Commercial &amp; Evaluation Terms (India)
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-[#4A4A4A] leading-relaxed">
              {/* Effective Date Pill Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md border border-white/60 bg-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3A3A3A] backdrop-blur-sm">
                  EFFECTIVE: OCTOBER 2026 • COMMERCIAL &amp; EVALUATION TERMS (INDIA)
                </span>
                <span className="inline-flex items-center rounded-md border border-white/40 bg-white/20 px-3 py-1 text-[11px] font-medium text-[#5A5A5A]">
                  Platform: Zeon by XEOPS • Warehouse &amp; Order Management
                </span>
              </div>

              {/* Intro */}
              <p className="text-[#3A3A3A] leading-relaxed">
                These Terms of Service (&ldquo;Terms&rdquo;, &ldquo;Agreement&rdquo;) govern your access to and use of Zeon, a warehouse inventory and wholesale order management system developed, owned, and operated by XEOPS (&ldquo;the Enterprise&rdquo;, &ldquo;Licensor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a Micro Enterprise registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India (UDYAM Registration No: UDYAM-KL-03-0044323) and founded by Johan P Manoj in Kerala, India.
              </p>
              <p className="text-xs text-[#5A5A5A] italic">
                By accessing, installing, registering, or signing into Zeon on Windows desktop or Android mobile, you (&ldquo;Customer&rdquo;, &ldquo;Warehouse Owner&rdquo;, &ldquo;Administrator&rdquo;, or &ldquo;Staff&rdquo;) agree to be legally bound by these Terms.
              </p>

              {/* 1. Nature of Service & Scope */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Briefcase className="h-4 w-4 text-[#141414]" />
                  <h2>1. Nature of Service &amp; Scope</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  Zeon provides digital footwear catalog browsing, multi-variant inventory tracking, wholesale order booking, customer directories, and automated PDF invoice generation. The software is designed strictly for internal B2B commercial warehouse operations.
                </p>
              </div>

              {/* 2. Client Onboarding & Complimentary Free Trial */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Sparkles className="h-4 w-4 text-[#141414]" />
                  <h2>2. Client Onboarding &amp; Complimentary Free Trial</h2>
                </div>
                <div className="space-y-2.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-[#141414]">A. Tailored Trial Period for New Clients</h3>
                    <p className="mt-0.5">When a new client (warehouse owner) joins Zeon, they are provided with a complimentary evaluation trial period as communicated and informed by our team upon onboarding (&ldquo;Trial Period&rdquo;).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">B. Full Platform Access &amp; Zero Upfront Charges</h3>
                    <p className="mt-0.5">During this agreed trial period, all platform modules, features, and management utilities across Windows desktop and Android mobile are completely free to use without any licensing fees, setup costs, or payment card commitments.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">C. Post-Trial Pricing Discussion &amp; Freedom to Walk Away</h3>
                    <p className="mt-0.5">Following the conclusion of the trial period, a customized commercial pricing model will be discussed between our team and the warehouse owner. The client has absolute freedom to decide:</p>
                    <ul className="list-disc space-y-1 pl-4 mt-1">
                      <li>If the pricing model and terms are agreeable, they can seamlessly continue using the platform under a commercial agreement; or</li>
                      <li>If they choose not to proceed, they can freely walk away with zero cancellation fees, zero penalties, and no ongoing obligations.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141414]">D. Data Export Upon Discontinuation</h3>
                    <p className="mt-0.5">If the warehouse owner elects not to continue after the completion of their trial period, Zeon will provide a reasonable 7-day window for the warehouse owner to export or receive customer records, brand catalogs, inventory listings, and order histories before the workspace partition is archived.</p>
                  </div>
                  <div className="rounded-lg border border-amber-200/60 bg-amber-50/50 p-3 text-[#4A4035]">
                    <h3 className="font-semibold text-[#141414] flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4 text-amber-700" />
                      E. Absolute Zero Liability During Free Trial
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed">
                      BECAUSE THE SOFTWARE IS PROVIDED 100% FREE OF CHARGE FOR EVALUATION PURPOSES, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW:
                    </p>
                    <ul className="list-disc space-y-1 pl-4 mt-1 text-[11.5px]">
                      <li>The Platform is provided strictly &ldquo;AS-IS&rdquo; and &ldquo;AS-AVAILABLE&rdquo;, with no guarantees of server uptime, speed, or uninterrupted operation.</li>
                      <li>In no event shall the Licensor (XEOPS, its founder Johan P Manoj, or its representatives) be liable for any direct, indirect, incidental, special, or consequential damages, including lost footwear sales, lost profits, inventory count discrepancies, or business interruptions arising out of the use or inability to use the Platform.</li>
                      <li>The Licensor&apos;s total aggregate financial and legal liability during this complimentary trial is explicitly NIL (₹0 INR).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. User Accounts & Google Authentication */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <CheckCircle2 className="h-4 w-4 text-[#141414]" />
                  <h2>3. User Accounts &amp; Google Authentication</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li>Authentication is conducted solely via Google OAuth 2.0. Users are responsible for safeguarding their Google accounts.</li>
                  <li>Warehouse Administrators hold sole authority over workspace configuration, brand catalogs, staff accounts, and permission assignments.</li>
                  <li>The Customer is solely responsible for all actions, orders, and stock adjustments executed by its authorized staff accounts.</li>
                </ul>
              </div>

              {/* 4. Data Ownership & Intellectual Property */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Lock className="h-4 w-4 text-[#141414]" />
                  <h2>4. Data Ownership &amp; Intellectual Property</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Customer Data Ownership:</strong> The Customer retains full and exclusive ownership of all proprietary business data, brand catalogs, pricing tiers, customer shop directories, and order records entered into the system.</li>
                  <li><strong>Software IP:</strong> All software code, visual layouts, UX architecture, logos, brand assets, and algorithms remain the exclusive intellectual property of XEOPS and its founder Johan P Manoj. Decompilation, reverse-engineering, or unauthorized redistribution is strictly prohibited.</li>
                  <li><strong>Third-Party Infrastructure:</strong> Platform operations rely on Google Cloud (Firebase Auth, Cloud Firestore, FCM), Cloudflare Workers, and ImageKit.io CDN.</li>
                </ul>
              </div>

              {/* 5. Audit Logs & Tamper-Proof Records */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <FileText className="h-4 w-4 text-[#141414]" />
                  <h2>5. Audit Logs &amp; Tamper-Proof Records</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  To maintain operational integrity and prevent internal disputes, the system records immutable, append-only audit trails for inventory adjustments, order status changes, and staff actions. These records cannot be retroactively modified or deleted.
                </p>
              </div>

              {/* 6. Termination */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <X className="h-4 w-4 text-[#141414]" />
                  <h2>6. Termination</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  Either party may terminate trial access at any time. Clauses governing intellectual property, data ownership, zero liability during trial, and governing law shall survive termination.
                </p>
              </div>

              {/* 7. Governing Law & Dispute Resolution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Scale className="h-4 w-4 text-[#141414]" />
                  <h2>7. Governing Law &amp; Dispute Resolution</h2>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  These Terms shall be governed exclusively by the laws of India. Any disputes or claims arising out of this Agreement shall fall under the exclusive jurisdiction of the competent civil courts in Kerala, India.
                </p>
              </div>

              {/* 8. Support, Contact & Inquiries */}
              <div className="space-y-2 pb-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Building2 className="h-4 w-4 text-[#141414]" />
                  <h2>8. Support, Contact &amp; Inquiries</h2>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Entity:</strong> XEOPS (Registered Micro Enterprise, Ministry of MSME, Govt. of India • UDYAM-KL-03-0044323)</li>
                  <li><strong>Founder &amp; Lead Developer:</strong> Johan P Manoj</li>
                  <li><strong>Support &amp; Contact:</strong> <a href="mailto:support.zeon@xeops.in" className="text-[#141414] underline font-medium">support.zeon@xeops.in</a></li>
                  <li><strong>Location:</strong> Kerala, India</li>
                </ul>
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
