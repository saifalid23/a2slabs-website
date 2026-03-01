import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-black py-12 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="mb-6 inline-block">
                            <Logo height={48} />
                        </Link>
                        <p className="max-w-xs text-zinc-500">
                            Smart Automation & Custom Systems for Growing Businesses.
                            Helping you streamline workflows and improve visibility.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">Agency</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#services" className="text-zinc-500 transition-colors hover:text-white">Services</Link>
                            </li>
                            <li>
                                <Link href="#approach" className="text-zinc-500 transition-colors hover:text-white">Approach</Link>
                            </li>
                            <li>
                                <Link href="#work" className="text-zinc-500 transition-colors hover:text-white">Case Studies</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">Connect</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#contact" className="text-zinc-500 transition-colors hover:text-white">Contact</Link>
                            </li>
                            <li>
                                <a href="https://linkedin.com" className="text-zinc-500 transition-colors hover:text-white">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://twitter.com" className="text-zinc-500 transition-colors hover:text-white">Twitter / X</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-900 pt-12 md:mt-24 md:flex-row">
                    <p className="text-sm text-zinc-600">
                        © {new Date().getFullYear()} A2S Labs. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-6 md:mt-0">
                        <Link href="#" className="text-xs text-zinc-600 transition-colors hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-zinc-600 transition-colors hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
