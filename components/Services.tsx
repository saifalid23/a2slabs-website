"use client";

import { useRef, useState, useEffect } from "react";

const services = [
  {
    title: "AI Automation",
    description:
      "Intelligent workflow automation powered by AI — from lead capture to onboarding, we build systems that think and adapt.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.047 2.232a2.25 2.25 0 01-1.32.731l-2.683.46a2.25 2.25 0 01-2.5-1.164l-.563-1.049a2.25 2.25 0 00-1.2-1.048L7.5 13.5" />
      </svg>
    ),
    span: "md:col-span-2",
    detail: "WhatsApp API · Email Triggers · AI Routing",
  },
  {
    title: "Custom Web Platforms",
    description:
      "Dashboards, project tracking, and financial systems built on modern stacks, tailored to your logic.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    span: "md:col-span-1",
    detail: "Next.js · Supabase · TypeScript",
  },
  {
    title: "Workflow Integration",
    description:
      "WhatsApp automation, email triggers, and real-time notifications that keep your entire team in sync.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    span: "md:col-span-1",
    detail: "Webhooks · Zapier · APIs",
  },
  {
    title: "Systems Advisory",
    description:
      "Helping founders design scalable digital architectures and select the right stack for long-term growth.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    span: "md:col-span-1",
    detail: "Architecture · Stack Selection · Scale",
  },
  {
    title: "Intelligence at Scale",
    description:
      "AI, automation, and custom platforms combined into complete intelligent ecosystems that grow with your business.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    span: "md:col-span-2",
    detail: "Full-Stack · AI Integration · Security",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { root: document.getElementById("snap-container"), threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      data-section="services"
      className="snap-section bg-[#0F172A] justify-center"
    >
      <div className="container mx-auto flex h-full flex-col justify-center px-6 py-8 md:px-12">
        {/* Section header */}
        <div className="mb-5">
          <p className="label-mono mb-2">Our Services</p>
          <h2 className="heading-deep">
            Intelligent systems for the modern enterprise.
          </h2>
        </div>

        {/* Bento Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`reveal-hidden ${isInView ? "reveal-visible" : ""} rounded-xl border border-[#1E293B] bg-white/[0.03] backdrop-blur-[12px] p-4 ${service.span}`}
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E293B] bg-[#1E293B]/30 text-white">
                {service.icon}
              </div>
              <h3 className="mb-1.5 font-bold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mb-3 text-sm font-normal leading-relaxed text-[#94A3B8]">
                {service.description}
              </p>
              <div
                className="inline-flex items-center gap-2 rounded-md bg-[#1E293B]/50 px-2.5 py-1 text-xs font-bold tracking-widest text-[#94A3B8]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {service.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
