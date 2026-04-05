export default function Hero() {
  return (
    <section className="hero-mesh relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      
      {/* Mesh Grid overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
        
        {/* Status Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/50 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F0FF]" />
            </span>
            <span className="text-xs text-[#94A3B8]" style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.05em" }}>
              Systems Ready
            </span>
          </div>
        </div>

        <h1 className="heading-deep mx-auto mb-6 max-w-5xl tracking-tight text-white drop-shadow-sm">
          Intelligent Infrastructure for Modern Teams
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#94A3B8] leading-relaxed md:text-xl md:leading-relaxed">
          We architect custom AI automations and robust internal tools that connect your scattered data, streamline manual work, and scale with your vision.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[#00F0FF] px-8 py-4 text-base font-semibold text-[#0F172A] transition-all hover:bg-white"
          >
            Book a Strategy Audit
          </a>
          <a
            href="#work"
            className="rounded-lg border border-[#1E293B] bg-[#0F172A] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#1E293B]"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
