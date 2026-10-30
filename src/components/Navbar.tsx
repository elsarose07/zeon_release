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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/50 bg-[#C8CCD2]/65 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/brand.png"
              alt="ZEON"
              width={140}
              height={40}
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
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
              className="p-2 -mr-1.5 text-[#141414] focus:outline-none touch-manipulation rounded-lg active:bg-black/5"
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
                className="fixed inset-0 top-[64px] sm:top-[76px] z-30 bg-black/25 backdrop-blur-sm md:hidden h-[calc(100dvh-64px)] sm:h-[calc(100dvh-76px)]"
              />

              {/* Mobile Drawer */}
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-40 border-b border-black/10 bg-[#E8EBED]/98 px-6 py-6 backdrop-blur-2xl md:hidden shadow-xl"
              >
                <nav className="flex flex-col gap-4 text-base font-medium text-[#404040]">
                  <Link
                    href="/product"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#141414] active:text-[#141414] text-lg font-semibold"
                  >
                    Product
                  </Link>
                  <Link
                    href="/help"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#141414] active:text-[#141414] text-lg font-semibold"
                  >
                    Help
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#141414] active:text-[#141414] text-lg font-semibold"
                  >
                    About
                  </Link>
                  <div className="pt-3 border-t border-black/10">
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center justify-between w-full rounded-full border border-[#141414]/30 bg-white/70 hover:bg-white px-5 py-3 font-semibold text-[#141414] shadow-sm transition-all duration-200 active:scale-[0.98]"
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
      <div className="h-[64px] sm:h-[76px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
