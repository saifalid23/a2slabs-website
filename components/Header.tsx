"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "border-b border-zinc-800 bg-black/80 backdrop-blur-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center">
          <Logo height={24} />
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#approach"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Approach
          </Link>
          <Link
            href="#work"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-white px-6 py-2 text-sm font-bold text-black transition-all duration-300 hover:bg-zinc-200"
          >
            Book a Consultation
          </Link>
        </nav>

        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
