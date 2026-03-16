"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
            {/* Multi-layer background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-zinc-800/30 blur-[140px]" />
                <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-zinc-700/10 blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-zinc-800/20 blur-[100px]" />
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            <div
                className={`container relative z-10 mx-auto px-6 text-center md:px-12 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <div className="mx-auto max-w-5xl">
                    {/* Top badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
                        Trusted by Growing Businesses Across Pakistan
                    </div>

                    {/* Main headline */}
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Smart Automation{" "}
                        <span className="text-zinc-500">&</span>
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                            Custom Systems
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                        We help small and mid-sized businesses eliminate manual bottlenecks,
                        automate workflows, and build custom internal tools that{" "}
                        <span className="text-zinc-200 font-medium">save hours every week</span>.
                    </p>

                    {/* Social Proof pill */}
                    <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/80 px-5 py-2 text-sm text-zinc-400">
                        <svg className="h-4 w-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                            Powering{" "}
                            <span className="text-white font-semibold">Meezan Educational Institute</span>,
                            Insurance & Construction firms
                        </span>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#contact"
                            className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-black transition-all hover:bg-zinc-100 sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                        >
                            <span className="relative z-10">Book a Free Consultation</span>
                        </Link>
                        <Link
                            href="#work"
                            className="w-full rounded-full border border-zinc-700 bg-zinc-950 px-8 py-4 text-center text-sm font-bold text-white transition-all hover:bg-zinc-900 hover:border-zinc-600 sm:w-auto"
                        >
                            See Our Work →
                        </Link>
                    </div>

                    {/* Trust stats row */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-zinc-900 pt-10">
                        {[
                            { value: "60%", label: "Workflow Reduction" },
                            { value: "20+", label: "Hours Saved / Week" },
                            { value: "3+", label: "Industries Served" },
                            { value: "24h", label: "Response Time" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>
        </section>
    );
}
