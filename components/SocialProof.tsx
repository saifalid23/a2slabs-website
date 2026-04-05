export default function SocialProof() {
  return (
    <section className="bg-[#0F172A] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="label-mono">Trusted Infrastructure</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Stat 1 */}
          <div className="group rounded-xl border border-[#1E293B] bg-[#0F172A] p-8 transition-colors hover:border-[#94A3B8]/30">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-4xl font-bold tracking-tight text-white">
                60%
              </span>
              <div className="rounded bg-[#1E293B] px-2 py-1 text-xs font-semibold text-[#94A3B8]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                INSURANCE
              </div>
            </div>
            <p className="mb-2 text-sm font-semibold text-white">
              Manual Workload Reduction
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Automated onboarding slashed admin overhead for a leading group.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group rounded-xl border border-[#1E293B] bg-[#0F172A] p-8 transition-colors hover:border-[#94A3B8]/30">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-4xl font-bold tracking-tight text-white">
                20hrs
              </span>
              <div className="rounded bg-[#1E293B] px-2 py-1 text-xs font-semibold text-[#94A3B8]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                LOGISTICS
              </div>
            </div>
            <p className="mb-2 text-sm font-semibold text-white">
              Saved Per Week
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Per client on average after workflow automation deployment.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group rounded-xl border border-[#1E293B] bg-[#0F172A] p-8 transition-colors hover:border-[#94A3B8]/30">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-4xl font-bold tracking-tight text-white">
                3+
              </span>
              <div className="rounded bg-[#1E293B] px-2 py-1 text-xs font-semibold text-[#94A3B8]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                SECTORS
              </div>
            </div>
            <p className="mb-2 text-sm font-semibold text-white">
              Industries Transformed
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Proven results in education, real estate, and construction.
            </p>
          </div>
        </div>

        {/* Testimonial Feature */}
        <div className="mt-6 rounded-xl border border-[#1E293B] bg-[#0F172A] p-8 md:p-12">
          <blockquote className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto mb-6 h-8 w-8 text-[#1E293B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="mb-8 text-lg font-medium italic text-[#94A3B8] md:text-xl leading-relaxed">
              &ldquo;A2S Labs digitized our entire student operations — from enrollment to communications — in a way we never thought possible. It transformed how we run every day.&rdquo;
            </p>
            <footer>
              <div className="text-sm font-bold text-white">
                Meezan Educational Institute
              </div>
              <div className="text-sm text-[#64748B]">
                Hyderabad, India
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
