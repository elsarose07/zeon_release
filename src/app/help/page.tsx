"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What is Zeon, who operates it, and who is it designed for?",
    answer: (
      <p>
        Zeon is a B2B warehouse inventory and wholesale order management system specifically designed for footwear catalog management, multi-variant stock tracking, wholesale order booking, customer directories, and automated PDF invoicing across Windows desktop and Android mobile. It is developed, owned, and operated by <strong>XEOPS</strong>, a registered Micro Enterprise under the Ministry of MSME, Government of India (UDYAM Registration No: <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.9em] text-[#141414]">UDYAM-KL-03-0044323</code>), founded by Johan P Manoj in Kerala, India.
      </p>
    ),
  },
  {
    id: "faq-2",
    number: "02",
    question: "How does the complimentary evaluation trial work, and are there upfront costs?",
    answer: (
      <div className="space-y-2.5">
        <p>
          New warehouse clients receive a tailored complimentary evaluation trial period agreed upon during onboarding. During this trial:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[#5A5A5A]">
          <li>
            You receive <strong>full platform access</strong> across both Windows desktop and Android mobile.
          </li>
          <li>
            There are <strong>zero upfront charges</strong>, zero setup fees, and no payment card or credit card commitments required.
          </li>
          <li>
            Under the evaluation terms, the platform is provided strictly &ldquo;AS-IS&rdquo; and &ldquo;AS-AVAILABLE&rdquo; with nil (₹0 INR) financial liability for trial usage.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq-3",
    number: "03",
    question: "What happens when the trial period ends? Can I walk away without penalties?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Yes. At the conclusion of your trial, our team discusses a customized commercial pricing model with the warehouse owner. You have complete freedom of choice:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[#5A5A5A]">
          <li>
            <strong>Proceed:</strong> Transition seamlessly to an active commercial agreement.
          </li>
          <li>
            <strong>Discontinue:</strong> Walk away freely with <strong>zero cancellation fees, zero penalties, and no ongoing obligations</strong>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq-4",
    number: "04",
    question: "Can I export our warehouse data if we choose not to continue after the trial?",
    answer: (
      <p>
        Yes. If you decide not to proceed following your evaluation trial, Zeon provides a <strong>7-day grace window</strong> allowing you to export or receive your complete business records—including customer shop directories, brand catalogs, inventory listings, and order histories—before your workspace partition is archived or deleted.
      </p>
    ),
  },
  {
    id: "faq-5",
    number: "05",
    question: "Who owns the business data entered into Zeon?",
    answer: (
      <ul className="list-disc pl-5 space-y-2 marker:text-[#5A5A5A]">
        <li>
          <strong>Your Data:</strong> The Customer (Warehouse Owner) retains <strong>100% full and exclusive ownership</strong> of all proprietary business data, catalogs, pricing tiers, customer contacts, and transaction histories.
        </li>
        <li>
          <strong>Software IP:</strong> All application code, UX architecture, visual designs, algorithms, and logos remain the exclusive intellectual property of XEOPS and its founder Johan P Manoj.
        </li>
      </ul>
    ),
  },
  {
    id: "faq-6",
    number: "06",
    question: "How do staff and administrators sign in, and who controls access?",
    answer: (
      <p>
        Authentication is handled strictly via <strong>Google OAuth 2.0</strong>—Zeon does not store passwords. Warehouse Administrators serve as the primary Data Fiduciaries/Controllers and maintain complete authority over their workspace, including adding staff members, assigning granular access permissions (e.g., inventory vs. billing), and managing workspace settings.
      </p>
    ),
  },
  {
    id: "faq-7",
    number: "07",
    question: "Is staff Aadhaar information required, and how is sensitive personal data protected?",
    answer: (
      <p>
        Providing an Aadhaar number is <strong>100% voluntary</strong> and is <strong>never mandated or required by Zeon</strong>. It is provided strictly as an optional record-keeping field if a warehouse owner chooses to track it internally. When entered, Aadhaar numbers undergo <strong>client-side AES-256-CBC encryption</strong> on the device before cloud transmission and are never stored or logged in plain text.
      </p>
    ),
  },
  {
    id: "faq-8",
    number: "08",
    question: "Does Zeon sell or monetize our business or customer data?",
    answer: (
      <div className="space-y-2.5">
        <p>
          <strong>No.</strong> Zeon does not sell, rent, broker, or monetize your personal or business data under any circumstances. Data is processed exclusively to deliver platform services via vetted cloud infrastructure providers:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[#5A5A5A]">
          <li>
            <strong>Google Cloud &amp; Firebase:</strong> Authentication, Cloud Firestore database (encrypted at rest with AES-256), and FCM push alerts.
          </li>
          <li>
            <strong>Cloudflare, Inc.:</strong> Secure API proxying, HMAC signature verification, and FCM routing.
          </li>
          <li>
            <strong>ImageKit.io:</strong> Product and catalog image CDN with cryptographic HMAC-SHA1 upload tokens.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq-9",
    number: "09",
    question: "How does Zeon prevent internal disputes and unauthorized inventory changes?",
    answer: (
      <p>
        Zeon maintains <strong>immutable, append-only security audit trails</strong> for critical operational actions, including stock adjustments, order status transitions, and staff updates. These audit logs cannot be retroactively altered or deleted, ensuring verifiable accountability for warehouse operations.
      </p>
    ),
  },
  {
    id: "faq-10",
    number: "10",
    question: "How can I request account/data deletion, and who handles privacy grievances?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Verified warehouse owners can request data deletion or workspace purging by emailing support directly.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[#5A5A5A]">
          <li>
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:support.zeon@xeops.in"
              className="font-medium text-[#141414] underline hover:text-black transition-colors"
            >
              support.zeon@xeops.in
            </a>
          </li>
          <li>
            <strong>Grievance Officer:</strong> Johan P Manoj (in compliance with DPDPA 2023 and the IT Act, 2000).
          </li>
          <li>
            <strong>Response SLA:</strong> Inquiries and privacy requests are acknowledged and addressed within <strong>15 days</strong>.
          </li>
          <li>
            <strong>Statutory Retention:</strong> Certain transaction logs and GST invoice copies may be retained as mandated by Indian commercial and taxation laws.
          </li>
          <li>
            <strong>Governing Law:</strong> Exclusively governed by the laws of India, under the jurisdiction of civil courts in Kerala, India.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function HelpPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const cardStyle: React.CSSProperties = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
    backdropFilter: "blur(14px) saturate(118%)",
    WebkitBackdropFilter: "blur(14px) saturate(118%)",
    boxShadow:
      "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
  };

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
              Find answers to common questions about setting up, trials, privacy, data ownership, and managing your warehouse with Zeon.
            </p>
          </div>

          {/* Quick Help Topics / FAQ List */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => {
                const isOpen = openIndices.includes(index);
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/60 transition-all duration-300 hover:border-white/85 overflow-hidden"
                    style={cardStyle}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-white/50 border border-white/70 text-xs font-semibold text-[#141414] shadow-xs select-none">
                          {faq.number}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-[#141414] leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#5A5A5A] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#141414]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed border-t border-black/5 animate-in fade-in-50 duration-200">
                        <div className="pl-0 sm:pl-12">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Need Direct Assistance Banner */}
          <div
            className="mt-14 max-w-4xl mx-auto rounded-3xl border border-white/60 p-8 text-center transition-all duration-300 hover:border-white/85"
            style={cardStyle}
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
