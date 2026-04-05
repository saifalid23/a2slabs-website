import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0F172A] py-12 md:py-24" role="contentinfo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="mb-6 inline-block" aria-label="A2S Labs Home">
              <Logo height={48} />
            </Link>
            <p className="max-w-xs text-[#94A3B8] leading-relaxed text-sm">
              Intelligent Infrastructure & AI Automation for
              tomorrow&apos;s leaders. Building systems that scale
              with your vision.
            </p>
          </div>

          <div>
            <h4 className="label-mono mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label-mono mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://linkedin.com" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer compliance bar & Live Lab status */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#1E293B] pt-12 md:mt-24 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-xs text-[#94A3B8]">
              © {new Date().getFullYear()} A2S Labs. All rights reserved.
            </p>
            {/* Live Lab Status Pulse */}
            <div
              className="flex items-center gap-2"
              role="status"
              aria-live="polite"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
              </span>
              <span className="text-xs text-[#94A3B8]" style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.05em" }}>
                Live Lab <span className="text-white">Active</span>
              </span>
            </div>
          </div>
          <div className="mt-6 flex space-x-6 md:mt-0">
            <Link href="#" className="text-xs text-[#94A3B8] transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#94A3B8] transition-colors duration-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-[#94A3B8] transition-colors duration-300 hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
