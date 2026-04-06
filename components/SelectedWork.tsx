const works = [
  {
    category: "INSURANCE",
    title: "Automated Lead Capture & Onboarding",
    description:
      "Intelligent lead capture and onboarding workflow for a US-based insurance firm. AI-powered routing and follow-ups resulted in a 60% reduction in manual workload.",
    result: "60% workload reduction",
  },
  {
    category: "CONSTRUCTION",
    title: "Custom Operations Management Platform",
    description:
      "Built a custom platform for a regional contractor to track projects, staff expenses, and financial overview with automated quotation generation and WhatsApp integration.",
    result: "Full ops digitization",
  },
  {
    category: "EDUCATION",
    title: "End-to-End Digital Systems for Meezan Educational Institute",
    description:
      "Designed and implemented a complete intelligent infrastructure — covering student enrollment flows, automated communications, and an internal management dashboard.",
    result: "Complete digital transformation",
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
              {/* Brutalist Terminal Visual */}
              <div className="mb-6 aspect-video w-full overflow-hidden rounded border border-[#1E293B] bg-[#111] p-4 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]" />
                </div>
                <pre className="text-xs text-[#94A3B8] leading-relaxed tracking-wider overflow-hidden" style={{ fontFamily: "var(--font-mono)" }}>
                  <code className="block text-[#00F0FF] mb-2">{">"} run system_audit.sh --target={work.category.toLowerCase()}</code>
                  <code className="block">Deploying module: {work.title.substring(0, 16)}...</code>
                  <code className="block text-white opacity-90 mt-1">[✓] Architecture compiled</code>
                  <code className="block opacity-50 mt-1">Output: {work.result}</code>
                </pre>
              </div>

              <span className="label-mono mb-2 font-medium text-italic text-[#00F0FF]">{work.category}</span>
              <h3 className="mb-4 font-extrabold text-xl tracking-tight text-white transition-colors group-hover:text-[#00F0FF]">
                {work.title}
              </h3>
              <p className="mb-8 text-base font-light text-[#94A3B8] leading-relaxed flex-1">
                {work.description}
              </p>
              <div className="inline-flex items-center gap-2 font-bold text-white text-italic">
                <svg className="h-3.5 w-3.5 text-[#00F0FF]" fill="currentColor" viewBox="0 0 24 24">
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
