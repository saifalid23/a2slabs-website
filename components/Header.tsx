"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="z-50" aria-label="A2S Labs Home">
          <Logo height={isScrolled ? 32 : 40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className="font-sans text-sm font-bold text-[#94A3B8] transition-colors duration-300 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#approach"
            className="font-sans text-sm font-bold text-[#94A3B8] transition-colors duration-300 hover:text-white"
          >
            Approach
          </Link>
          <Link
            href="#work"
            className="font-sans text-sm font-bold text-[#94A3B8] transition-colors duration-300 hover:text-white"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded-lg bg-[#00F0FF] px-6 py-2.5 font-sans text-sm font-bold text-[#0F172A] transition-colors hover:bg-white"
          >
            Book a Strategy Audit
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="z-50 p-2 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`glass-nav fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl font-bold text-white"
          >
            Services
          </Link>
          <Link
            href="#approach"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl font-bold text-white"
          >
            Approach
          </Link>
          <Link
            href="#work"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl font-bold text-white"
          >
            Work
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 rounded-lg bg-[#00F0FF] px-8 py-3 font-sans text-lg font-bold text-[#0F172A]"
          >
            Book a Strategy Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
