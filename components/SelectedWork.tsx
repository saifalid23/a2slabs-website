const works = [
  {
    category: "INSURANCE",
    title: "Automated Lead Capture & Onboarding",
    description:
      "Intelligent lead capture and onboarding workflow for a US-based insurance firm. AI-powered routing cut manual workload by 60%.",
    result: "60% workload reduction",
  },
  {
    category: "CONSTRUCTION",
    title: "Custom Operations Management Platform",
    description:
      "Project tracking, staff expenses, and financial overview for a regional contractor with automated quotation and WhatsApp integration.",
    result: "Full ops digitization",
  },
  {
    category: "EDUCATION",
    title: "End-to-End Digital Systems for Meezan Institute",
    description:
      "Complete intelligent infrastructure — student enrollment flows, automated communications, and an internal management dashboard.",
    result: "Complete digital transformation",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      data-section="work"
      className="snap-section bg-[#0F172A] justify-center"
    >
      <div className="container mx-auto flex h-full flex-col justify-center px-6 py-8 md:px-12">
        {/* Section header */}
        <div className="mb-5">
          <p className="label-mono mb-2">Selected Work</p>
          <h2 className="heading-deep">
            Proven results for innovation-driven businesses.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl border border-[#1E293B] bg-[#0F172A] p-4 transition-colors hover:border-[#94A3B8]/30"
            >
              {/* Terminal mockup */}
              <div className="mb-3 w-full overflow-hidden rounded border border-[#1E293B] bg-[#111] p-3 flex flex-col justify-start">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                  <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                  <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                </div>
                <pre
                  className="text-xs text-[#94A3B8] leading-relaxed tracking-wider overflow-hidden"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <code className="block text-[#00F0FF] mb-1">
                    {">"} run audit.sh --target={work.category.toLowerCase()}
                  </code>
                  <code className="block">
                    Deploying: {work.title.substring(0, 18)}...
                  </code>
                  <code className="block text-white opacity-90 mt-0.5">
                    [✓] Architecture compiled
                  </code>
                  <code className="block opacity-50 mt-0.5">
                    Output: {work.result}
                  </code>
                </pre>
              </div>

              <span className="label-mono mb-1.5 font-medium text-italic text-[#00F0FF]">
                {work.category}
              </span>
              <h3 className="mb-2 font-extrabold tracking-tight text-white transition-colors group-hover:text-[#00F0FF]">
                {work.title}
              </h3>
              <p className="mb-3 text-sm font-light leading-relaxed text-[#94A3B8] flex-1">
                {work.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-sm font-bold text-white text-italic">
                <svg className="h-3 w-3 text-[#00F0FF]" fill="currentColor" viewBox="0 0 24 24">
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
