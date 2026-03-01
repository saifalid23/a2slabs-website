const services = [
    {
        title: "Business Process Automation",
        description: "Lead capture, onboarding workflows, and operational efficiency systems designed to eliminate manual bottlenecks.",
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Custom Web Applications",
        description: "Internal dashboards, project tracking tools, and financial visibility systems tailored to your specific business logic.",
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Workflow & Communication Integrations",
        description: "WhatsApp automation, email triggers, and automated quotation systems that keep your team and clients in sync.",
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        title: "Systems Advisory",
        description: "Helping founders design scalable digital workflows and select the right technology stack for long-term growth.",
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">Our Services</h2>
                    <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Streamlined systems for the modern business.
                    </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-zinc-900 bg-zinc-950 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-colors group-hover:text-white">
                                {service.icon}
                            </div>
                            <h4 className="mb-4 text-xl font-bold text-white">{service.title}</h4>
                            <p className="text-zinc-500 leading-relaxed transition-colors group-hover:text-zinc-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
