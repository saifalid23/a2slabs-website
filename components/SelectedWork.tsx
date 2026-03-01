const works = [
    {
        category: "INSURANCE",
        title: "Automated Lead Capture & Onboarding",
        description: "Automated lead capture and onboarding workflow for a US-based insurance firm. Resulted in a 60% reduction in manual workload and saved ~25 hours per week.",
    },
    {
        category: "CONSTRUCTION",
        title: "Custom Operations Management Platform",
        description: "Built a custom platform for a regional contractor to track projects, staff expenses, and financial overview with automated quotation generation and WhatsApp integration.",
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
                                <div className="w-full h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
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
