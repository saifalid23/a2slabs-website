const clients = [
    {
        name: "Meezan Educational Institute",
        industry: "Education",
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
    },
    {
        name: "US-Based Insurance Group",
        industry: "Insurance",
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        name: "Regional Construction Firm",
        industry: "Construction",
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
];

const results = [
    {
        metric: "60%",
        label: "Manual Workload Reduction",
        description: "Automated onboarding slashed admin overhead",
    },
    {
        metric: "20hrs",
        label: "Saved Per Week",
        description: "Per client on average after automation",
    },
    {
        metric: "3+",
        label: "Industries Transformed",
        description: "Education, insurance, and construction",
    },
];

export default function SocialProof() {
    return (
        <section className="relative bg-black py-16 border-t border-b border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section label */}
                <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Businesses That Trust A2S Labs
                </p>

                {/* Client logos / names */}
                <div className="mb-14 flex flex-wrap items-center justify-center gap-6">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950 px-5 py-2.5 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
                        >
                            <span className="text-zinc-500">{client.icon}</span>
                            <span className="font-medium">{client.name}</span>
                            <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-zinc-600">
                                {client.industry}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Result metrics */}
                <div className="grid gap-6 sm:grid-cols-3">
                    {results.map((result) => (
                        <div
                            key={result.metric}
                            className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6 text-center"
                        >
                            <div className="mb-1 text-4xl font-bold tracking-tight text-white">
                                {result.metric}
                            </div>
                            <div className="mb-2 text-sm font-semibold text-zinc-300">
                                {result.label}
                            </div>
                            <div className="text-xs text-zinc-600">{result.description}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonial quote */}
                <blockquote className="mt-12 mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
                    <p className="mb-4 text-zinc-300 leading-relaxed italic">
                        &ldquo;A2S Labs digitized our entire student operations — from enrollment to
                        communications — in a way we never thought possible. It transformed how
                        we run every day.&rdquo;
                    </p>
                    <footer className="text-sm">
                        <span className="font-semibold text-white">Meezan Educational Institute</span>
                        <span className="mx-2 text-zinc-600">·</span>
                        <span className="text-zinc-500">Karachi, Pakistan</span>
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
