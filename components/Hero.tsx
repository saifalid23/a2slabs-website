import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-20">
                <div className="h-[500px] w-[500px] rounded-full bg-zinc-800 blur-[120px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-400">
                        <span className="mr-2 flex h-2 w-2 rounded-full bg-zinc-500"></span>
                        Next-Gen Security & Automation
                    </div>

                    <h1 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Smart Automation & <br className="hidden md:block" />
                        <span className="text-zinc-500">Custom Systems for Growing Businesses.</span>
                    </h1>

                    <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                        We help small and mid-sized businesses automate operations, streamline workflows,
                        and build custom internal tools that save time and improve visibility.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#contact"
                            className="w-full rounded-full border border-zinc-700 bg-white px-8 py-4 text-center text-sm font-bold text-black transition-all hover:bg-zinc-200 sm:w-auto"
                        >
                            Book a Consultation
                        </Link>
                        <Link
                            href="#services"
                            className="w-full rounded-full border border-zinc-800 bg-zinc-950 px-8 py-4 text-center text-sm font-bold text-white transition-all hover:bg-zinc-900 sm:w-auto"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>
        </section>
    );
}
