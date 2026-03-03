import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useState } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/tentang-kami", label: "Tentang Kami" },
        { href: "/layanan", label: "Layanan" },
        { href: "/portofolio", label: "Portofolio" },
        { href: "/artikel", label: "Artikel" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-50 text-gray-900">
            {/* Navbar */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 shadow-md backdrop-blur-lg border-b border-gray-100"
                        : "bg-white border-b border-gray-50"
                }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <ApplicationLogo className="h-12 transition-transform group-hover:scale-105" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-2 md:flex">
                        {navLinks.map((item) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                            />
                        ))}
                        <Link
                            href="/kontak"
                            className="ml-4 rounded-xl bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all duration-200 hover:bg-brand-primary/90 hover:-translate-y-0.5 active:scale-95"
                        >
                            Hubungi Kami
                        </Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="inline-flex items-center justify-center rounded-xl p-2 text-brand-primary transition hover:bg-gray-100 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        mobileOpen
                            ? "max-h-[32rem] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-8 shadow-2xl">
                        {navLinks.map((item) => (
                            <MobileNavItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                onClick={() => setMobileOpen(false)}
                            />
                        ))}
                        <Link
                            href="/kontak"
                            onClick={() => setMobileOpen(false)}
                            className="mt-6 rounded-xl bg-brand-primary px-4 py-4 text-center text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                        >
                            Hubungi Kami
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-brand-primary py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
                        <div className="flex flex-col items-center gap-6 lg:items-start">
                            <ApplicationLogo className="h-10 brightness-0 invert opacity-90" />
                            <p className="max-w-xs text-center text-sm leading-relaxed text-blue-100/60 lg:text-left">
                                Memberikan solusi digital inovatif untuk
                                pertumbuhan bisnis Anda melalui teknologi
                                mutakhir.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-semibold tracking-wide">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="transition hover:text-brand-accent"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/kontak"
                                className="transition hover:text-brand-accent"
                            >
                                Kontak
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <span className="text-xs text-white/30">
                            &copy; {new Date().getFullYear()} DIGIKOVA. All
                            rights reserved.
                        </span>
                        <div className="flex gap-8 text-xs font-medium text-white/30">
                            <Link
                                href="#"
                                className="hover:text-white transition"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition"
                            >
                                Terms
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    const { url } = usePage();
    const isActive = url === href || (href !== "/" && url.startsWith(href));

    return (
        <Link
            href={href}
            className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 ${
                isActive
                    ? "text-brand-primary"
                    : "text-gray-500 hover:text-brand-primary"
            }`}
        >
            {label}
            {isActive && (
                <span className="absolute bottom-[-4px] left-4 right-4 h-1 rounded-full bg-brand-accent shadow-[0_2px_10px_rgba(0,204,204,0.4)]" />
            )}
        </Link>
    );
}

function MobileNavItem({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    const { url } = usePage();
    const isActive = url === href || (href !== "/" && url.startsWith(href));

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-200 ${
                isActive
                    ? "bg-brand-primary/5 text-brand-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
            }`}
        >
            {label}
        </Link>
    );
}
