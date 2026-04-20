import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    ArrowRight,
    Search,
    Sun,
    Moon,
    Laptop,
    Network,
    HeartPulse,
    GraduationCap,
    BadgeCheck,
    Monitor,
    Palette,
    TrendingUp,
} from "lucide-react";

interface SubItem {
    href: string;
    label: string;
    icon?: React.ReactNode;
    children?: SubItem[];
}
interface NavLink {
    href: string;
    label: string;
    subItems?: SubItem[];
}

export default function PublicLayout({ children }: PropsWithChildren) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "light" || savedTheme === "dark")
                return savedTheme;
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks: NavLink[] = [
        { href: "/", label: "Beranda" },
        { href: "/tentang-kami", label: "Tentang Kami" },
        {
            href: "/layanan",
            label: "Layanan",
            subItems: [
                {
                    href: "/layanan/network-application",
                    label: "Network & Application",
                    icon: <Network className="h-4 w-4" />,
                },
                {
                    href: "/layanan/it-care",
                    label: "IT Care",
                    icon: <HeartPulse className="h-4 w-4" />,
                    children: [
                        {
                            href: "/layanan/pelatihan-bidang-it",
                            label: "Pelatihan Bidang IT",
                            icon: <GraduationCap className="h-3.5 w-3.5" />,
                        },
                        {
                            href: "/layanan/sertifikasi-keahlian",
                            label: "Sertifikasi Keahlian",
                            icon: <BadgeCheck className="h-3.5 w-3.5" />,
                        },
                    ],
                },
            ],
        },
        { href: "/portofolio", label: "Portofolio" },
        { href: "/artikel", label: "Artikel" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-50 text-gray-900 transition-colors duration-300 dark:bg-midnight-bg dark:text-gray-100">
            {/* Navbar */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/95 border-b border-gray-200 shadow-md backdrop-blur-lg dark:bg-midnight-bg/80 dark:border-white/5 dark:shadow-2xl dark:shadow-black/20 dark:backdrop-blur-xl"
                        : "bg-white/90 border-b border-gray-100 backdrop-blur-md dark:bg-midnight-bg dark:border-white/5"
                }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <ApplicationLogo className="h-12 transition-transform group-hover:scale-105" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-2 md:flex">
                        {navLinks.map((item) => {
                            if (item.subItems && item.subItems.length > 0) {
                                return (
                                    <DropdownNavItem key={item.label} item={item} />
                                );
                            }
                            return (
                                <NavItem
                                    key={item.label}
                                    href={item.href}
                                    label={item.label}
                                />
                            );
                        })}

                        {/* Theme Toggle */}
                        <div className="ml-4 flex h-8 items-center border-l border-gray-300 pl-4 dark:border-white/10">
                            <button
                                onClick={() =>
                                    setTheme(theme === "dark" ? "light" : "dark")
                                }
                                className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-200 hover:text-brand-primary dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-brand-accent active:scale-95"
                                title={`Switch to ${
                                    theme === "dark" ? "light" : "dark"
                                } mode`}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        <Link
                            href="/kontak"
                            className="ml-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-bridge px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all duration-200 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:scale-95"
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
                    <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-8 shadow-2xl dark:border-white/5 dark:bg-midnight-surface">
                        {/* Theme Toggle Mobile */}
                        <div className="flex items-center justify-between px-4 pb-6 mb-6 border-b border-gray-100 dark:border-white/5">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tampilan</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                                        theme === "light"
                                            ? "border-brand-primary bg-brand-primary/10 text-brand-primary dark:border-brand-accent dark:bg-brand-accent/10 dark:text-brand-accent"
                                            : "border-gray-100 bg-gray-50 text-gray-400 dark:border-white/5 dark:bg-white/5 dark:text-gray-400"
                                    }`}
                                >
                                    <Sun className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                                        theme === "dark"
                                            ? "border-brand-primary bg-brand-primary/10 text-brand-primary dark:border-brand-accent dark:bg-brand-accent/10 dark:text-brand-accent"
                                            : "border-gray-100 bg-gray-50 text-gray-400 dark:border-white/5 dark:bg-white/5 dark:text-gray-400"
                                    }`}
                                >
                                    <Moon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        
                        {navLinks.map((item) =>
                            item.subItems ? (
                                <MobileDropdownNavItem
                                    key={item.href}
                                    item={item}
                                    onClose={() => setMobileOpen(false)}
                                />
                            ) : (
                                <MobileNavItem
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    onClick={() => setMobileOpen(false)}
                                />
                            )
                        )}
                        <Link
                            href="/kontak"
                            onClick={() => setMobileOpen(false)}
                            className="mt-6 rounded-xl bg-gradient-to-r from-brand-primary to-brand-bridge px-4 py-4 text-center text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                        >
                            Hubungi Kami
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="relative overflow-hidden bg-brand-primary text-white">
                {/* Subtle background texture */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-100" />
                {/* Accent glow top-right */}
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
                {/* Accent glow bottom-left */}
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-bridge/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* CTA Banner */}
                    <div className="border-b border-white/10 py-12">
                        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 px-8 py-8 ring-1 ring-white/10 backdrop-blur-sm sm:flex-row">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-1">Mari Berkolaborasi</p>
                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    Punya proyek yang ingin diwujudkan?
                                </h3>
                                <p className="mt-1 text-sm text-white/60">
                                    Tim kami siap membantu menghadirkan solusi digital terbaik untuk bisnis Anda.
                                </p>
                            </div>
                            <Link
                                href="/kontak"
                                className="shrink-0 flex items-center gap-2 rounded-xl bg-brand-accent px-7 py-3.5 text-sm font-bold text-brand-primary shadow-lg shadow-brand-accent/20 transition-all duration-200 hover:bg-white hover:shadow-white/20 hover:-translate-y-0.5 active:scale-95"
                            >
                                Hubungi Kami
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-6 lg:col-span-1">
                            <ApplicationLogo className="h-10 brightness-0 invert opacity-90 transition-all" />
                            <p className="text-sm leading-relaxed text-white/60">
                                Memberikan solusi digital inovatif untuk pertumbuhan bisnis Anda melalui teknologi mutakhir yang terukur dan andal.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 ring-1 ring-white/10 transition-all hover:bg-brand-accent hover:text-brand-primary hover:ring-brand-accent hover:-translate-y-0.5"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 ring-1 ring-white/10 transition-all hover:bg-brand-accent hover:text-brand-primary hover:ring-brand-accent hover:-translate-y-0.5"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                </a>
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 ring-1 ring-white/10 transition-all hover:bg-brand-accent hover:text-brand-primary hover:ring-brand-accent hover:-translate-y-0.5"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Perusahaan Column */}
                        <div>
                            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-accent">Perusahaan</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { href: "/", label: "Beranda" },
                                    { href: "/tentang-kami", label: "Tentang Kami" },
                                    { href: "/portofolio", label: "Portofolio" },
                                    { href: "/artikel", label: "Artikel" },
                                    { href: "/kontak", label: "Kontak" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white"
                                        >
                                            <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-brand-accent" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Layanan Column */}
                        <div>
                            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-accent">Layanan</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { href: "/layanan/network-application", label: "Network & Application" },
                                    { href: "/layanan/it-care", label: "IT Care" },
                                    { href: "/layanan/pelatihan-bidang-it", label: "Pelatihan Bidang IT" },
                                    { href: "/layanan/sertifikasi-keahlian", label: "Sertifikasi Keahlian" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white"
                                        >
                                            <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-brand-accent" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak Column */}
                        <div>
                            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-accent">Hubungi Kami</h4>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a
                                        href={`mailto:${(usePage().props.contact as any).email}`}
                                        className="group flex items-start gap-3 text-sm text-white/60 transition-all hover:text-white"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/50 ring-1 ring-white/10 transition-colors group-hover:bg-brand-accent/20 group-hover:text-brand-accent">
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </span>
                                        <span className="break-all leading-relaxed">{(usePage().props.contact as any).email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${(usePage().props.contact as any).phone}`}
                                        className="group flex items-start gap-3 text-sm text-white/60 transition-all hover:text-white"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/50 ring-1 ring-white/10 transition-colors group-hover:bg-brand-accent/20 group-hover:text-brand-accent">
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </span>
                                        <span className="leading-relaxed">{(usePage().props.contact as any).phone}</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="group flex items-start gap-3 text-sm text-white/60">
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/50 ring-1 ring-white/10">
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </span>
                                        <span className="leading-relaxed">{(usePage().props.contact as any).address}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Bar */}
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
                        <span className="text-xs text-white/30">
                            &copy; {new Date().getFullYear()} DIGIKOVA. All rights reserved.
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-white/30">
                            <Link href="#" className="px-3 py-1 rounded-lg transition-colors hover:bg-white/5 hover:text-white/60">Privacy</Link>
                            <span className="text-white/10">|</span>
                            <Link href="#" className="px-3 py-1 rounded-lg transition-colors hover:bg-white/5 hover:text-white/60">Terms</Link>
                            <span className="text-white/10">|</span>
                            <Link href="#" className="px-3 py-1 rounded-lg transition-colors hover:bg-white/5 hover:text-white/60">Cookies</Link>
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
                    ? "text-brand-primary dark:text-brand-accent"
                    : "text-gray-700 hover:text-brand-primary dark:text-gray-400 dark:hover:text-white"
            }`}
        >
            {label}
            {isActive && (
                <span className="absolute bottom-[-4px] left-4 right-4 h-1 rounded-full bg-brand-primary shadow-[0_2px_10px_rgba(0,51,102,0.4)] dark:bg-brand-accent dark:shadow-[0_2px_10px_rgba(0,255,157,0.4)]" />
            )}
        </Link>
    );
}

/** Desktop: hover dropdown dengan nested flyout untuk sub-children */
function DropdownNavItem({ item }: { item: NavLink }) {
    const { url } = usePage();
    const isActive =
        url === item.href || (item.href !== "/" && url.startsWith(item.href));
    const [open, setOpen] = useState(false);
    const [flyoutIndex, setFlyoutIndex] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    // Tutup dropdown kalau klik di luar
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
                setFlyoutIndex(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => { setOpen(false); setFlyoutIndex(null); }}
        >
            {/* Trigger button */}
            <button
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                        ? "text-brand-primary dark:text-brand-accent"
                        : "text-gray-700 hover:text-brand-primary dark:text-gray-400 dark:hover:text-white"
                }`}
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                        open ? "rotate-180 text-brand-primary dark:text-brand-accent" : "text-gray-400"
                    }`}
                />
                {isActive && (
                    <span className="absolute bottom-[-4px] left-4 right-4 h-1 rounded-full bg-brand-primary shadow-[0_2px_10px_rgba(0,51,102,0.4)] dark:bg-brand-accent dark:shadow-[0_2px_10px_rgba(0,255,157,0.4)]" />
                )}
            </button>

            {/* Dropdown panel */}
            <div
                className={`absolute left-0 top-full z-50 mt-2 w-56 origin-top-left transition-all duration-300 ${
                    open
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 ring-1 ring-black/5 dark:border-white/5 dark:bg-midnight-surface dark:shadow-2xl dark:shadow-black/40">
                    <div className="p-2">
                        {item.subItems?.map((sub, idx) => (
                            <div
                                key={sub.href}
                                className="relative"
                                onMouseEnter={() =>
                                    sub.children ? setFlyoutIndex(idx) : setFlyoutIndex(null)
                                }
                            >
                                <Link
                                    href={sub.href}
                                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                                        url.startsWith(sub.href)
                                            ? "bg-brand-primary/10 text-brand-primary dark:text-brand-accent"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                                    }`}
                                >
                                    {sub.icon && (
                                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                                            {sub.icon}
                                        </span>
                                    )}
                                    <span className="flex-1">{sub.label}</span>
                                    {sub.children && (
                                        <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                                    )}
                                </Link>

                                {/* Nested flyout */}
                                {sub.children && flyoutIndex === idx && (
                                    <div className="absolute left-full top-0 z-50 ml-1 w-52">
                                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 ring-1 ring-black/5 dark:border-white/5 dark:bg-midnight-surface dark:shadow-2xl dark:shadow-black/40">
                                            <div className="p-2">
                                                {sub.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                                                            url.startsWith(child.href)
                                                                ? "bg-brand-primary/10 text-brand-primary dark:text-brand-accent dark:bg-brand-accent/10"
                                                                : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                                                        }`}
                                                    >
                                                        {child.icon && (
                                                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                                                                {child.icon}
                                                            </span>
                                                        )}
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
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
                    ? "bg-brand-primary/10 text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
            }`}
        >
            {label}
        </Link>
    );
}

/** Mobile: accordion dropdown */
function MobileDropdownNavItem({
    item,
    onClose,
}: {
    item: NavLink;
    onClose: () => void;
}) {
    const { url } = usePage();
    const isActive =
        url === item.href || (item.href !== "/" && url.startsWith(item.href));
    const [open, setOpen] = useState(isActive);
    const [openChild, setOpenChild] = useState<string | null>(null);

    return (
        <div className="rounded-xl overflow-hidden">
            {/* Main trigger */}
            <button
                onClick={() => setOpen((v) => !v)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-200 ${
                    isActive
                        ? "bg-brand-primary/10 text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent"
                        : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
            >
                {item.label}
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Sub items */}
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-primary/20 pl-3">
                    {item.subItems?.map((sub) => (
                        <div key={sub.href}>
                            {sub.children ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenChild(
                                                openChild === sub.href
                                                    ? null
                                                    : sub.href
                                            )
                                        }
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                                    >
                                        <span className="flex items-center gap-2">
                                            {sub.icon && (
                                                <span className="text-brand-primary dark:text-brand-accent">
                                                    {sub.icon}
                                                </span>
                                            )}
                                            {sub.label}
                                        </span>
                                        <ChevronDown
                                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                                openChild === sub.href
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-200 ${
                                            openChild === sub.href
                                                ? "max-h-40 opacity-100"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                                <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-brand-primary/20 pl-3 pb-1 dark:border-brand-accent/20">
                                            {sub.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={onClose}
                                                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                                                        url.startsWith(child.href)
                                                            ? "text-brand-primary dark:text-brand-accent"
                                                            : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                                                    }`}
                                                >
                                                    {child.icon && (
                                                        <span className="text-brand-primary dark:text-brand-accent">
                                                            {child.icon}
                                                        </span>
                                                    )}
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
                                        url.startsWith(sub.href)
                                            ? "text-brand-primary dark:text-brand-accent"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                                    }`}
                                >
                                    {sub.icon && (
                                        <span className="text-brand-primary dark:text-brand-accent">
                                            {sub.icon}
                                        </span>
                                    )}
                                    {sub.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
