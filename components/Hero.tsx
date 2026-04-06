export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="hero-mesh snap-section relative items-center justify-center pt-16"
    >
      {/* Mesh grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center md:px-12">
        {/* Status badge */}
        <div className="mb-5 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/50 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F0FF]" />
            </span>
            <span
              className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Systems Ready
            </span>
          </div>
        </div>

<<<<<<< Updated upstream
        <h1 className="heading-deep mx-auto mb-6 max-w-5xl tracking-tight text-white drop-shadow-sm">
          Intelligent Infrastructure for Modern Teams
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#94A3B8] leading-relaxed md:text-xl md:leading-relaxed">
          We architect custom AI automations and robust internal tools that connect your scattered data, streamline manual work, and scale with your vision.
=======
        <h1 className="font-black mx-auto mb-4 max-w-3xl tracking-tight text-white drop-shadow-sm">
          Intelligent Infrastructure{" "}
          <span className="text-italic font-black text-[#00F0FF]">for</span>{" "}
          Modern Teams
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-base font-light leading-relaxed text-[#94A3B8] md:text-lg">
          We architect{" "}
          <span className="text-italic font-medium text-white">
            custom AI automations
          </span>{" "}
          and robust internal tools that connect your scattered data, streamline
          manual work, and scale with your vision.
>>>>>>> Stashed changes
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[#00F0FF] px-7 py-3 font-sans text-sm font-bold tracking-wide text-[#0F172A] transition-all hover:bg-white"
          >
            Book a Strategy Audit
          </a>
          <a
            href="#work"
            className="rounded-lg border border-[#1E293B] bg-[#0F172A] px-7 py-3 font-sans text-sm font-bold text-white transition-all hover:bg-[#1E293B]"
          >
            View Our Work
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
          {[
            { stat: "60%", label: "Workload Reduced" },
            { stat: "20hrs", label: "Saved / Week" },
            { stat: "3+", label: "Industries" },
          ].map(({ stat, label }) => (
            <div key={stat} className="text-center">
              <div className="text-xl font-bold tracking-tight text-white md:text-2xl">
                {stat}
              </div>
              <div
                className="mt-0.5 text-xs font-medium uppercase tracking-widest text-[#94A3B8]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-10 h-28 w-full bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />

      {/* Wave SVG — "shoreline" transition into the next section */}
      <div className="hero-wave-overlay">
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="block h-14 w-full"
          aria-hidden="true"
        >
          <path
            d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
            fill="#0F172A"
          />
        </svg>
      </div>
    </section>
  );
}
