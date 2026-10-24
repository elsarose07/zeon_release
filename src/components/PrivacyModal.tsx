"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  X,
  Folder,
  Briefcase,
  Lock,
  Share2,
  ShieldCheck,
} from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
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
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-[#E8E6DF] bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EFECE6] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F4F0] border border-[#E8E6DF] text-[#141414]">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#141414]">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-[#737373]">
                    Zeon • Warehouse &amp; Order Management
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-[#737373] transition-colors hover:bg-[#F4F4F0] hover:text-[#141414]"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6 text-sm text-[#4A4A4A] leading-relaxed">
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
                  <h3>1. Information We Collect</h3>
                </div>

                <div className="space-y-3 pl-6">
                  <div>
                    <h4 className="font-semibold text-[#141414]">
                      A. Account &amp; Identification Data
                    </h4>
                    <p className="mt-0.5 text-xs text-[#5A5A5A] leading-relaxed">
                      When you sign in via Google OAuth 2.0, we collect your authorized full name, email address, profile avatar, and assigned workspace role (Administrator or Staff).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#141414]">
                      B. Warehouse Operational &amp; Inventory Data
                    </h4>
                    <p className="mt-0.5 text-xs text-[#5A5A5A] leading-relaxed">
                      We process business information entered into the system including product brand names, footwear catalog items, size/color variant stocks, wholesale order records, pricing, order line items, and customer directories.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#141414]">
                      C. Audit Logs &amp; System Diagnostics
                    </h4>
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
                  <h3>2. How We Use Your Information</h3>
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
                  <h3>3. Data Storage &amp; Cloud Security</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  All records are encrypted in transit using industry-standard TLS 1.3 and encrypted at rest utilizing Google Cloud Firestore infrastructure (AES-256). Image and media assets are stored and optimized securely via ImageKit.io Content Delivery Network with signed tokens.
                </p>
              </div>

              {/* 4. Third-Party Services & Data Sharing */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-[#141414]">
                  <Share2 className="h-4 w-4 text-[#141414]" />
                  <h3>4. Third-Party Services &amp; Data Sharing</h3>
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
                  <h3>5. Data Governance &amp; User Rights</h3>
                </div>
                <p className="pl-6 text-xs text-[#5A5A5A] leading-relaxed">
                  In accordance with international data protection standards (including GDPR and CCPA principles), Workspace Administrators retain full authority to review, export, update, or purge inventory records, staff accounts, customer directories, and order archives from the workspace.
                </p>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="flex items-center justify-between border-t border-[#EFECE6] bg-[#FAFAF8] px-6 py-4 sm:px-8">
              <span className="text-xs text-[#737373]" suppressHydrationWarning>
                © {new Date().getFullYear()} Zeon
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-[#141414] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#262626] active:scale-95"
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
