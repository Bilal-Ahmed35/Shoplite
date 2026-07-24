import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="border-t bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Bilal.dev</h2>
                        <p className="mt-4 text-sm leading-6">
                            Building modern, fast, and scalable web applications with
                            Next.js, React, and TypeScript.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/projects" className="hover:text-white transition">
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Technologies
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>Next.js</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Get in Touch
                        </h3>

                        <p className="text-sm">
                            📧 bilal@example.com
                        </p>

                        <p className="mt-2 text-sm">
                            📍 Karachi, Pakistan
                        </p>

                        <div className="mt-5 flex gap-4">
                            <Link
                                href="https://github.com/"
                                target="_blank"
                                className="hover:text-white transition"
                            >
                                GitHub
                            </Link>

                            <Link
                                href="https://linkedin.com/"
                                target="_blank"
                                className="hover:text-white transition"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    © {currentYear} Bilal Ahmed. All rights reserved.
                </div>
            </div>
        </footer>
    );
}