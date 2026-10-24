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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-[#E2E6EB]/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
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
              className="group flex items-center gap-1.5 text-[15px] font-medium text-[#141414] transition-all duration-200 hover:opacity-80"
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
                      className="flex items-center justify-between font-semibold text-[#141414] py-1"
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
    </>
  );
}
