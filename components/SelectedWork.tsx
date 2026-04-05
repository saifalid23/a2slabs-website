const works = [
  {
    category: "INSURANCE",
    title: "Automated Lead Capture & Onboarding",
    description:
      "Intelligent lead capture and onboarding workflow for a US-based insurance firm. AI-powered routing and follow-ups resulted in a 60% reduction in manual workload.",
    result: "60% workload reduction",
    tech: "Python · Next.js · Gemini API",
  },
  {
    category: "CONSTRUCTION",
    title: "Custom Operations Management Platform",
    description:
      "Built a custom platform for a regional contractor to track projects, staff expenses, and financial overview with automated quotation generation and WhatsApp integration.",
    result: "Full ops digitization",
    tech: "Supabase · React · WhatsApp API",
  },
  {
    category: "EDUCATION",
    title: "End-to-End Digital Systems for Meezan Educational Institute",
    description:
      "Designed and implemented a complete intelligent infrastructure — covering student enrollment flows, automated communications, and an internal management dashboard.",
    result: "Complete digital transformation",
    tech: "Next.js · TypeScript · Supabase",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-[#0F172A] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <p className="label-mono mb-4">Selected Work</p>
            <h2 className="heading-deep">
              Proven results for innovation-driven businesses.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <div key={index} className="group flex flex-col rounded-xl border border-[#1E293B] bg-[#0F172A] p-6 transition-colors hover:border-[#94A3B8]/30">
              {/* Abstract data-flow diagram visual */}
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-[#1E293B]/20 flex items-center justify-center relative">
                {/* SVG data-flow schematic */}
                <svg className="w-full h-full absolute inset-0 opacity-20" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="56" x2="400" y2="56" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="0" y1="112" x2="400" y2="112" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="0" y1="168" x2="400" y2="168" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="225" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="200" y1="0" x2="200" y2="225" stroke="#94A3B8" strokeWidth="0.5" />
                  <line x1="300" y1="0" x2="300" y2="225" stroke="#94A3B8" strokeWidth="0.5" />
                  {/* Flow connections */}
                  <circle cx="100" cy="56" r="4" fill="#FFFFFF" />
                  <circle cx="200" cy="112" r="6" fill="#FFFFFF" fillOpacity="0.8" />
                  <circle cx="300" cy="168" r="3" fill="#FFFFFF" />
                  <line x1="100" y1="56" x2="200" y2="112" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="200" y1="112" x2="300" y2="168" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>

              <span className="label-mono mb-2">{work.category}</span>
              <h3 className="mb-4 font-sans text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#94A3B8]">
                {work.title}
              </h3>
              <p className="mb-4 text-base font-normal text-[#94A3B8] leading-relaxed flex-1">
                {work.description}
              </p>
              {/* Tech stack — mono */}
              <div className="mb-4 text-base font-bold tracking-widest text-[#94A3B8]"
                   style={{ fontFamily: "var(--font-mono)" }}>
                {work.tech}
              </div>
              <div className="inline-flex items-center gap-2 font-sans text-base font-bold text-white">
                <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {work.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
