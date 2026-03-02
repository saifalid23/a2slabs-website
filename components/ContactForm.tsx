"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        companyName: "",
        staffSize: "",
        annualRevenue: "",
        painPoint: "",
        serviceNeeded: "",
        timeline: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const webhookUrl =
            process.env.NEXT_PUBLIC_WEBHOOK_URL ||
            "https://script.google.com/macros/s/AKfycbxt4HR3CnGlsnSpppdUreoGOa3pVyaa3olLtmltdWyybwfZR8etBo0RdSXxx3AyhIEa/exec";

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                body: new URLSearchParams({
                    fullName: formData.fullName,
                    workEmail: formData.workEmail,
                    companyName: formData.companyName,
                    staffSize: formData.staffSize,
                    annualRevenue: formData.annualRevenue,
                    painPoint: formData.painPoint,
                    serviceNeeded: formData.serviceNeeded,
                    timeline: formData.timeline,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    fullName: "",
                    workEmail: "",
                    companyName: "",
                    staffSize: "",
                    annualRevenue: "",
                    painPoint: "",
                    serviceNeeded: "",
                    timeline: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-24 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
                            Contact Us
                        </h2>
                        <h3 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Let’s build systems that save you time.
                        </h3>
                        <p className="mb-12 text-lg text-zinc-400">
                            Tell us about your operations and current challenges.
                            We typically respond within 24 hours.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8 md:p-12">
                        {status === "success" ? (
                            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                                <h4 className="mb-4 text-2xl font-bold text-white">
                                    Inquiry Received
                                </h4>
                                <p className="text-zinc-500">
                                    Thanks for reaching out. We’ll review your
                                    details and respond shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-sm font-semibold text-white underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                    />

                                    <input
                                        required
                                        type="email"
                                        name="workEmail"
                                        placeholder="Work Email *"
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                    />

                                    <select
                                        name="staffSize"
                                        value={formData.staffSize}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                    >
                                        <option value="">Staff Size</option>
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="200+">200+</option>
                                    </select>
                                </div>

                                <select
                                    name="annualRevenue"
                                    value={formData.annualRevenue}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                >
                                    <option value="">Annual Revenue</option>
                                    <option value="<$1M">&lt;$1M</option>
                                    <option value="$1M-$10M">$1M-$10M</option>
                                    <option value="$10M+">$10M+</option>
                                </select>

                                <textarea
                                    required
                                    name="painPoint"
                                    rows={4}
                                    placeholder="Describe your operational challenge *"
                                    value={formData.painPoint}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                />

                                {/* ✅ Timeline Field Restored */}
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-zinc-500 focus:outline-none"
                                >
                                    <option value="">Project Timeline</option>
                                    <option value="ASAP">ASAP</option>
                                    <option value="1-3 months">1-3 months</option>
                                    <option value="Exploring options">Exploring options</option>
                                </select>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 disabled:opacity-50"
                                >
                                    {status === "loading"
                                        ? "Processing..."
                                        : "Submit Inquiry"}
                                </button>

                                {status === "error" && (
                                    <p className="text-center text-sm text-red-500">
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