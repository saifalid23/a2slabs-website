"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        companyName: "",
        staffSize: "",
        industry: "",
        annualRevenue: "",
        painPoint: "",
        serviceNeeded: "",
        timeline: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "https://example.com/webhook";

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    fullName: "",
                    workEmail: "",
                    companyName: "",
                    staffSize: "",
                    industry: "",
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
                        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">Contact Us</h2>
                        <h3 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Ready to scale your <br /> secure intelligence?
                        </h3>
                        <p className="mb-12 text-lg text-zinc-400">
                            Submit the form to schedule a technical consultation with our engineering team.
                            We typically respond within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-2 w-2 rounded-full bg-zinc-500"></div>
                                <span className="text-zinc-300">London • San Francisco • Singapore</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="h-2 w-2 rounded-full bg-zinc-500"></div>
                                <span className="text-zinc-300">inquiry@a2slabs.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8 md:p-12">
                        {status === "success" ? (
                            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="mb-4 text-2xl font-bold text-white">Inquiry Received</h4>
                                <p className="text-zinc-500">
                                    Thank you for your interest. One of our engineers will be in touch shortly.
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
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Full Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="workEmail" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Work Email *
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            id="workEmail"
                                            name="workEmail"
                                            value={formData.workEmail}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="staffSize" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Staff Size
                                        </label>
                                        <select
                                            id="staffSize"
                                            name="staffSize"
                                            value={formData.staffSize}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        >
                                            <option value="">Select size</option>
                                            <option value="1-10">1-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="200+">200+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="industry" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Industry
                                        </label>
                                        <input
                                            type="text"
                                            id="industry"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="annualRevenue" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Annual Revenue
                                        </label>
                                        <select
                                            id="annualRevenue"
                                            name="annualRevenue"
                                            value={formData.annualRevenue}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        >
                                            <option value="">Select range</option>
                                            <option value="<$1M">&lt;$1M</option>
                                            <option value="$1M-$10M">$1M-$10M</option>
                                            <option value="$10M-$50M">$10M-$50M</option>
                                            <option value="$50M+">$50M+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="painPoint" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                        Primary Pain Point *
                                    </label>
                                    <textarea
                                        required
                                        id="painPoint"
                                        name="painPoint"
                                        rows={4}
                                        value={formData.painPoint}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="serviceNeeded" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Service Needed
                                        </label>
                                        <select
                                            id="serviceNeeded"
                                            name="serviceNeeded"
                                            value={formData.serviceNeeded}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        >
                                            <option value="">Select service</option>
                                            <option value="AI">AI Automation</option>
                                            <option value="Security">Security Engineering</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                            Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white transition-colors focus:border-zinc-500 focus:outline-none"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="ASAP">ASAP</option>
                                            <option value="1-3 months">1-3 months</option>
                                            <option value="Exploring">Exploring</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 disabled:opacity-50"
                                >
                                    {status === "loading" ? "Processing..." : "Submit Inquiry"}
                                </button>

                                {status === "error" && (
                                    <p className="text-center text-sm text-red-500">
                                        An error occurred. Please try again or email us directly.
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
