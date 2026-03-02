const InsuranceIllustration = () => (
    <svg viewBox="0 0 80 80" className="w-24 h-24 text-zinc-500 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10L15 20V45C15 58.8 25.5 71.5 40 75C54.5 71.5 65 58.8 65 45V20L40 10Z" stroke="currentColor" strokeWidth="1" className="animate-shield-pulse" />
        <path d="M25 35H55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="animate-line-flow" style={{ animationDelay: '0s' }} />
        <path d="M25 45H55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="animate-line-flow" style={{ animationDelay: '2s' }} />
        <path d="M25 55H55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="animate-line-flow" style={{ animationDelay: '4s' }} />
    </svg>
);

const ConstructionIllustration = () => (
    <svg viewBox="0 0 80 80" className="w-24 h-24 text-zinc-500 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crane Tower */}
        <path d="M35 75V25" stroke="currentColor" strokeWidth="1" />
        <path d="M45 75V25" stroke="currentColor" strokeWidth="1" />
        <path d="M35 75L45 65M35 65L45 75M35 65V55M45 65V55M35 55L45 45M35 45L45 55" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

        {/* Rotating Crane Arm */}
        <g className="animate-crane-swing">
            <path d="M10 25H70" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 25L15 20H40L45 25" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            {/* Load hook */}
            <g className="animate-block-lift">
                <path d="M60 25V45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <rect x="56" y="45" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            </g>
        </g>
    </svg>
);

const works = [
    {
        category: "INSURANCE",
        title: "Automated Lead Capture & Onboarding",
        description: "Automated lead capture and onboarding workflow for a US-based insurance firm. Resulted in a 60% reduction in manual workload and saved ~20 hours per week.",
        Illustration: InsuranceIllustration
    },
    {
        category: "CONSTRUCTION",
        title: "Custom Operations Management Platform",
        description: "Built a custom platform for a regional contractor to track projects, staff expenses, and financial overview with automated quotation generation and WhatsApp integration.",
        Illustration: ConstructionIllustration
    },
];

export default function SelectedWork() {
    return (
        <section id="work" className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
                    <div className="max-w-xl">
                        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">Selected Work</h2>
                        <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Proven results for execution-focused businesses.
                        </h3>
                    </div>
                    <div className="text-zinc-500 underline underline-offset-8 transition-colors hover:text-white cursor-pointer">
                        View all case studies
                    </div>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {works.map((work, index) => (
                        <div key={index} className="group flex flex-col">
                            <div className="mb-8 aspect-video w-full rounded-2xl border border-zinc-900 bg-zinc-950 transition-colors group-hover:bg-zinc-900/40 flex items-center justify-center p-12">
                                <work.Illustration />
                            </div>
                            <span className="mb-4 text-xs font-semibold tracking-widest text-zinc-600">{work.category}</span>
                            <h4 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-zinc-300">
                                {work.title}
                            </h4>
                            <p className="text-zinc-500 leading-relaxed">
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
