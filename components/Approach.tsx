const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your current workflows and pinpoint high-impact opportunities for intelligent automation.",
    detail: "Audit · Analysis · Mapping",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecting custom platforms and AI integrations tailored to your unique operational DNA.",
    detail: "Architecture · Prototyping · UX",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Seamless implementation of intelligent systems with thorough testing and team enablement.",
    detail: "CI/CD · Testing · Integration",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Continuous refinements powered by data insights — ensuring your systems evolve as your business grows.",
    detail: "Analytics · Iteration · Scale",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      data-section="approach"
      className="snap-section bg-[#0F172A] justify-center"
    >
      <div className="container mx-auto flex h-full flex-col justify-center px-6 py-8 md:px-12">
        {/* Section header */}
        <div className="mb-6 text-center">
          <p className="label-mono mb-2">Our Approach</p>
          <h2 className="heading-deep mx-auto max-w-2xl">
            An intelligence-first framework for real-world execution.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-xl border border-[#1E293B] bg-[#0F172A] p-5 md:p-6 transition-colors hover:border-[#94A3B8]/30"
            >
<<<<<<< Updated upstream
              {/* Step number */}
              <div className="mb-8 text-4xl font-bold tracking-tight text-[#1E293B] transition-colors duration-500 group-hover:text-white"
                   style={{ fontFamily: "var(--font-geist-mono)" }}>
                {step.number}
              </div>
              <h3 className="mb-4 text-lg font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mb-4 text-base font-normal text-[#94A3B8] leading-relaxed">
                {step.description}
              </p>
              <div className="text-base font-bold tracking-widest text-[#94A3B8]"
                   style={{ fontFamily: "var(--font-mono)" }}>
=======
              <div
                className="mb-4 text-3xl font-black tracking-tight text-[#1E293B] transition-colors duration-500 group-hover:text-white"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {step.number}
              </div>
              <h3 className="mb-2 font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mb-3 text-sm font-light leading-relaxed text-[#94A3B8]">
                {step.description}
              </p>
              <div
                className="text-xs font-medium tracking-widest text-[#94A3B8] text-italic uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
>>>>>>> Stashed changes
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
