"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Approach", id: "approach" },
  { label: "Work",     id: "work"     },
];

export default function Header() {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState("hero");

  /* ── Scroll-aware glassmorphism ── */
  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    const onScroll = () => setIsScrolled(container.scrollTop > 20);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver on the snap container ── */
  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) setActiveSection(id);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    const sections = container.querySelectorAll("[data-section]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll into snap section ── */
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const activeCls = "text-white";
  const inactiveCls =
    "text-[#94A3B8] hover:text-white transition-colors duration-300";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo — scrolls back to hero */}
        <button
          onClick={() => scrollTo("hero")}
          className="z-50 cursor-pointer"
          aria-label="A2S Labs — back to top"
        >
          <Logo height={isScrolled ? 32 : 40} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`font-sans text-sm font-bold ${
                activeSection === id ? activeCls : inactiveCls
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-lg bg-[#00F0FF] px-6 py-2.5 font-sans text-sm font-bold text-[#0F172A] transition-colors hover:bg-white"
          >
            Book a Strategy Audit
          </button>
        </nav>

        {/* Mobile toggle */}
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

        {/* Mobile overlay */}
        <div
          className={`glass-nav fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-sans text-xl font-bold text-white"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 rounded-lg bg-[#00F0FF] px-8 py-3 font-sans text-lg font-bold text-[#0F172A]"
          >
            Book a Strategy Audit
          </button>
        </div>
      </div>
    </header>
  );
}
