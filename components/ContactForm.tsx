"use client";

import { useState } from "react";
<<<<<<< Updated upstream
import { submitContact } from "@/app/actions";
=======
import Link from "next/link";
>>>>>>> Stashed changes

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    painPoint: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
<<<<<<< Updated upstream
    const sentData = new FormData(e.currentTarget);
    try {
      const result = await submitContact(null, sentData);
      if (result.success) {
=======

    const payload = {
      fullName: formData.fullName,
      workEmail: formData.workEmail,
      painPoint: formData.painPoint,
    };

    const webhookUrl =
      process.env.NEXT_PUBLIC_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxt4HR3CnGlsnSpppdUreoGOa3pVyaa3olLtmltdWyybwfZR8etBo0RdSXxx3AyhIEa/exec";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: new URLSearchParams(payload as Record<string, string>),
      });
      if (response.ok) {
>>>>>>> Stashed changes
        setStatus("success");
        setFormData({ fullName: "", workEmail: "", painPoint: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-[#1E293B] bg-[#0F172A] px-4 py-2.5 text-sm text-white placeholder:text-[#334155] focus:border-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300";

  return (
    <section
      id="contact"
      data-section="contact"
      className="snap-section bg-[#0F172A]"
    >
      {/* Main form area */}
      <div className="container mx-auto flex flex-1 flex-col justify-center px-6 py-8 md:px-12">
        {/* Header */}
        <div className="mb-5">
          <p className="label-mono mb-2">Contact Us</p>
          <h2 className="heading-deep">
            Let&apos;s build the intelligent systems your business needs.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left col */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm leading-relaxed text-[#94A3B8] md:text-base">
              Tell us about your operations and current challenges. We typically
              respond within 24 hours with a tailored assessment.
            </p>
            <div className="space-y-3">
              {[
                "Free initial consultation",
                "No long-term contracts required",
                "24-hour response guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                  <svg
                    className="h-3.5 w-3.5 text-[#00F0FF] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right col — form */}
          <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-5 md:p-6">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="heading-deep mb-2 text-xl">Inquiry Received</h3>
                <p className="text-sm text-[#94A3B8]">
                  Thanks for reaching out. We&apos;ll review your details and respond shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-sans text-sm font-bold text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClasses}
                    aria-label="Full Name"
                  />
                  <input
                    required
                    type="email"
                    name="workEmail"
                    placeholder="Work Email *"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={inputClasses}
                    aria-label="Work Email"
                  />
                </div>
                <textarea
                  required
                  name="painPoint"
                  rows={4}
                  placeholder="Describe your project or challenge *"
                  value={formData.painPoint}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-label="Project Description"
                />
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full rounded-lg bg-[#00F0FF] px-8 py-3 font-sans text-sm font-bold text-[#0F172A] transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Processing..." : "Submit Inquiry"}
                </button>
                {status === "error" && (
                  <p className="text-center text-xs text-red-400" role="alert">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded footer bar */}
      <footer className="border-t border-[#1E293B] px-6 py-4 md:px-12" role="contentinfo">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#94A3B8]">
              © {new Date().getFullYear()} A2S Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5" role="status" aria-live="polite">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
              </span>
              <span
                className="text-xs text-[#94A3B8]"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
              >
                Live Lab <span className="text-white">Active</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/a2s_labs/"
              className="text-xs text-[#94A3B8] transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <Link href="#" className="text-xs text-[#94A3B8] transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-[#94A3B8] transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
