const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We audit your manual workflows and identify clear opportunities for high-impact automation.",
    },
    {
        number: "02",
        title: "Design",
        description: "Architecting custom tools and integrations that solve your specific operational bottlenecks.",
    },
    {
        number: "03",
        title: "Deploy",
        description: "Seamless implementation of automated systems with thorough testing and team training.",
    },
    {
        number: "04",
        title: "Optimize",
        description: "Ongoing refinements to ensure your systems evolve with your business and maximize efficiency.",
    },
];

export default function Approach() {
    return (
        <section id="approach" className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">Our Approach</h2>
                    <h3 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        A practical framework for real-world execution.
                    </h3>
                </div>

                <div className="grid gap-1 px-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative border-zinc-900 p-8 md:p-12 ${index < steps.length - 1 ? "lg:border-r" : ""
                                } ${index < 2 ? "border-b" : "md:border-b-0"} ${index === 1 ? "md:border-r-0 lg:border-r" : ""
                                }`}
                        >
                            <div className="mb-8 text-4xl font-black tracking-tighter text-zinc-800">
                                {step.number}
                            </div>
                            <h4 className="mb-4 text-xl font-bold text-white">{step.title}</h4>
                            <p className="text-zinc-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
