"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/50 bg-[#C8CCD2]/65 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
          {/* Brand Logo (Preserved as requested) */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/brand.png"
              alt="ZEON"
              width={140}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#404040]">
            <Link
              href="/product"
              className="transition-colors hover:text-[#141414]"
            >
              Product
            </Link>
            <Link
              href="/help"
              className="transition-colors hover:text-[#141414]"
            >
              Help
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[#141414]"
            >
              About
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 rounded-full border border-[#141414]/30 hover:border-[#141414] bg-white/35 hover:bg-white/70 px-4 py-1.5 text-[14px] font-medium text-[#141414] backdrop-blur-md shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              <span>Get started</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141414] focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown & Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 top-[69px] z-30 bg-black/20 backdrop-blur-sm md:hidden"
              />

              {/* Mobile Drawer */}
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-40 border-b border-black/10 bg-[#E8EBED]/95 px-6 py-5 backdrop-blur-xl md:hidden shadow-lg"
              >
                <nav className="flex flex-col gap-4 text-base font-medium text-[#404040]">
                  <Link
                    href="/product"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 hover:text-[#141414]"
                  >
                    Product
                  </Link>
                  <Link
                    href="/help"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 hover:text-[#141414]"
                  >
                    Help
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 hover:text-[#141414]"
                  >
                    About
                  </Link>
                  <div className="pt-2 border-t border-black/10">
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center justify-between w-full rounded-full border border-[#141414]/30 bg-white/40 hover:bg-white/70 px-4 py-2 font-medium text-[#141414] backdrop-blur-sm shadow-sm transition-all duration-200"
                    >
                      <span>Get started</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Document flow spacer to preserve layout spacing when header is fixed */}
      <div className="h-[72px] sm:h-[76px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
