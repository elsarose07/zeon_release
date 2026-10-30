"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  X,
  Briefcase,
  CheckCircle2,
  Lock,
  Scale,
  ShieldAlert,
  Building2,
  Sparkles,
} from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  // Close on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex max-h-[85dvh] w-full max-w-2xl flex-col rounded-2xl border border-white/60 shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(228, 233, 240, 0.82) 50%, rgba(240, 243, 246, 0.85) 100%)",
              backdropFilter: "blur(20px) saturate(118%)",
              WebkitBackdropFilter: "blur(20px) saturate(118%)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EFECE6] px-4 sm:px-8 py-3.5 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#F4F4F0] border border-[#E8E6DF] text-[#141414]">
                  <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#141414]">
                    Terms of Service
                  </h2>
                  <p className="text-[11px] sm:text-xs text-[#737373]">
                    Zeon • Commercial &amp; Evaluation Terms (India)
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-[#737373] transition-colors hover:bg-[#F4F4F0] hover:text-[#141414] touch-manipulation"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-6 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              {/* Effective Date Pill Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md border border-white/60 bg-white/40 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#3A3A3A] backdrop-blur-sm">
                  EFFECTIVE: OCTOBER 2026 • COMMERCIAL &amp; EVALUATION TERMS (INDIA)
                </span>
                <span className="inline-flex items-center rounded-md border border-white/40 bg-white/20 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-[#5A5A5A]">
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
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <Briefcase className="h-4 w-4 text-[#141414]" />
                  <h3>1. Nature of Service &amp; Scope</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  Zeon provides digital footwear catalog browsing, multi-variant inventory tracking, wholesale order booking, customer directories, and automated PDF invoice generation. The software is designed strictly for internal B2B commercial warehouse operations.
                </p>
              </div>

              {/* 2. Client Onboarding & Complimentary Free Trial */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <Sparkles className="h-4 w-4 text-[#141414]" />
                  <h3>2. Client Onboarding &amp; Complimentary Free Trial</h3>
                </div>
                <div className="space-y-2.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-[#141414]">A. Tailored Trial Period for New Clients</h4>
                    <p className="mt-0.5">When a new client (warehouse owner) joins Zeon, they are provided with a complimentary evaluation trial period as communicated and informed by our team upon onboarding (&ldquo;Trial Period&rdquo;).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">B. Full Platform Access &amp; Zero Upfront Charges</h4>
                    <p className="mt-0.5">During this agreed trial period, all platform modules, features, and management utilities across Windows desktop and Android mobile are completely free to use without any licensing fees, setup costs, or payment card commitments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">C. Post-Trial Pricing Discussion &amp; Freedom to Walk Away</h4>
                    <p className="mt-0.5">Following the conclusion of the trial period, a customized commercial pricing model will be discussed between our team and the warehouse owner. The client has absolute freedom to decide:</p>
                    <ul className="list-disc space-y-1 pl-4 mt-1">
                      <li>If the pricing model and terms are agreeable, they can seamlessly continue using the platform under a commercial agreement; or</li>
                      <li>If they choose not to proceed, they can freely walk away with zero cancellation fees, zero penalties, and no ongoing obligations.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">D. Data Export Upon Discontinuation</h4>
                    <p className="mt-0.5">If the warehouse owner elects not to continue after the completion of their trial period, Zeon will provide a reasonable 7-day window for the warehouse owner to export or receive customer records, brand catalogs, inventory listings, and order histories before the workspace partition is archived.</p>
                  </div>
                  <div className="rounded-lg border border-amber-200/60 bg-amber-50/50 p-3 text-[#4A4035]">
                    <h4 className="font-semibold text-[#141414] flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4 text-amber-700" />
                      E. Absolute Zero Liability During Free Trial
                    </h4>
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
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <CheckCircle2 className="h-4 w-4 text-[#141414]" />
                  <h3>3. User Accounts &amp; Google Authentication</h3>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li>Authentication is conducted solely via Google OAuth 2.0. Users are responsible for safeguarding their Google accounts.</li>
                  <li>Warehouse Administrators hold sole authority over workspace configuration, brand catalogs, staff accounts, and permission assignments.</li>
                  <li>The Customer is solely responsible for all actions, orders, and stock adjustments executed by its authorized staff accounts.</li>
                </ul>
              </div>

              {/* 4. Data Ownership & Intellectual Property */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <Lock className="h-4 w-4 text-[#141414]" />
                  <h3>4. Data Ownership &amp; Intellectual Property</h3>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Customer Data Ownership:</strong> The Customer retains full and exclusive ownership of all proprietary business data, brand catalogs, pricing tiers, customer shop directories, and order records entered into the system.</li>
                  <li><strong>Software IP:</strong> All software code, visual layouts, UX architecture, logos, brand assets, and algorithms remain the exclusive intellectual property of XEOPS and its founder Johan P Manoj. Decompilation, reverse-engineering, or unauthorized redistribution is strictly prohibited.</li>
                  <li><strong>Third-Party Infrastructure:</strong> Platform operations rely on Google Cloud (Firebase Auth, Cloud Firestore, FCM), Cloudflare Workers, and ImageKit.io CDN.</li>
                </ul>
              </div>

              {/* 5. Audit Logs & Tamper-Proof Records */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <FileText className="h-4 w-4 text-[#141414]" />
                  <h3>5. Audit Logs &amp; Tamper-Proof Records</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  To maintain operational integrity and prevent internal disputes, the system records immutable, append-only audit trails for inventory adjustments, order status changes, and staff actions. These records cannot be retroactively modified or deleted.
                </p>
              </div>

              {/* 6. Termination */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <X className="h-4 w-4 text-[#141414]" />
                  <h3>6. Termination</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  Either party may terminate trial access at any time. Clauses governing intellectual property, data ownership, zero liability during trial, and governing law shall survive termination.
                </p>
              </div>

              {/* 7. Governing Law & Dispute Resolution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <Scale className="h-4 w-4 text-[#141414]" />
                  <h3>7. Governing Law &amp; Dispute Resolution</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  These Terms shall be governed exclusively by the laws of India. Any disputes or claims arising out of this Agreement shall fall under the exclusive jurisdiction of the competent civil courts in Kerala, India.
                </p>
              </div>

              {/* 8. Support, Contact & Inquiries */}
              <div className="space-y-2 pb-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#141414]">
                  <Building2 className="h-4 w-4 text-[#141414]" />
                  <h3>8. Support, Contact &amp; Inquiries</h3>
                </div>
                <ul className="list-disc space-y-1.5 pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  <li><strong>Entity:</strong> XEOPS (Registered Micro Enterprise, Ministry of MSME, Govt. of India • UDYAM-KL-03-0044323)</li>
                  <li><strong>Founder &amp; Lead Developer:</strong> Johan P Manoj</li>
                  <li><strong>Support &amp; Contact:</strong> <a href="mailto:support.zeon@xeops.in" className="text-[#141414] underline font-medium">support.zeon@xeops.in</a></li>
                  <li><strong>Location:</strong> Kerala, India</li>
                </ul>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="flex items-center justify-between border-t border-[#EFECE6] bg-[#FAFAF8] px-4 sm:px-8 py-3.5 sm:py-4">
              <span className="text-xs text-[#737373]" suppressHydrationWarning>
                © {new Date().getFullYear()} Zeon
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-[#141414] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#262626] active:scale-95 touch-manipulation"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
