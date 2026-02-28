import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900">
            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-indigo-600">
                            MultiCo
                        </span>
                        <span className="text-xl font-light text-gray-700">
                            Profiles
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-6 md:flex">
                        <NavItem href="/" label="Beranda" />
                        <NavItem href="/tentang-kami" label="Tentang Kami" />
                        <NavItem href="/layanan" label="Layanan" />
                        <NavItem href="/portofolio" label="Portofolio" />
                        <NavItem href="/artikel" label="Artikel" />
                        <Link
                            href="/kontak"
                            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                        >
                            Hubungi Kami
                        </Link>
                    </nav>

                    {/* Mobile Hamburger — TODO: tambahkan state toggle */}
                    <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t border-gray-100 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} MultiCo Profiles.
                            All rights reserved.
                        </p>
                        <nav className="flex gap-4 text-sm text-gray-400">
                            <Link href="/" className="hover:text-gray-700">
                                Beranda
                            </Link>
                            <Link
                                href="/tentang-kami"
                                className="hover:text-gray-700"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/kontak"
                                className="hover:text-gray-700"
                            >
                                Kontak
                            </Link>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
        >
            {label}
        </Link>
    );
}
