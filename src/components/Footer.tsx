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
      <footer className="border-t border-[#E8E6DF] bg-white py-6 sm:py-8 text-[#5A5A5A]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-10 lg:px-16">
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
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-[#737373] text-center sm:text-left">
            <p suppressHydrationWarning>© {new Date().getFullYear()} XEOPS. All rights reserved. ZEON™ is a product of XEOPS.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="py-2 px-1 font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline touch-manipulation"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="py-2 px-1 font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline touch-manipulation"
              >
                Privacy Policy
              </button>
            </div>
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
