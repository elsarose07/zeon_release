"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PrivacyModal } from "./PrivacyModal";
import { TermsModal } from "./TermsModal";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-[#E8E6DF] bg-white py-8 text-[#5A5A5A]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10 lg:px-16">
          {/* Brand Logo */}
          <Link href="/" className="group">
            <Image
              src="/brand.png"
              alt="ZEON"
              width={100}
              height={30}
              className="h-6 w-auto object-contain transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Copyright, Terms and Privacy Modal Triggers */}
          <div className="flex items-center gap-6 text-xs text-[#737373]">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Zeon. All rights reserved.</p>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      {/* Interactive Terms of Service Modal */}
      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </>
  );
}
