"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions";

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
    const sentData = new FormData(e.currentTarget);
    try {
      const result = await submitContact(null, sentData);
      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          workEmail: "",
          painPoint: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-[#1E293B] bg-[#0F172A] px-4 py-3.5 text-white placeholder:text-[#1E293B] focus:border-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300";

  return (
    <section id="contact" className="bg-[#0F172A] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="label-mono mb-4">Contact Us</p>
            <h2 className="heading-deep mb-8">
              Let&apos;s build the intelligent systems your business needs.
            </h2>
            <p className="mb-12 text-lg text-[#94A3B8] leading-relaxed">
              Tell us about your operations and current challenges.
              We typically respond within 24 hours with a tailored assessment.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                "Free initial consultation",
                "No long-term contracts required",
                "24-hour response guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <svg className="h-4 w-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-8 md:p-12">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="heading-deep mb-4 text-2xl">
                  Inquiry Received
                </h3>
                <p className="text-[#94A3B8]">
                  Thanks for reaching out. We&apos;ll review your
                  details and respond shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-sans text-base font-bold text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <input required type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className={inputClasses} aria-label="Full Name" />
                  <input required type="email" name="workEmail" placeholder="Work Email *" value={formData.workEmail} onChange={handleChange} className={inputClasses} aria-label="Work Email" />
                </div>
                <textarea required name="painPoint" rows={6} placeholder="Describe your project or challenge *" value={formData.painPoint} onChange={handleChange} className={inputClasses} aria-label="Project Description" />
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full rounded-lg bg-[#00F0FF] px-8 py-4 font-sans text-base font-bold text-[#0F172A] transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Processing..." : "Submit Inquiry"}
                </button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-400" role="alert">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}