import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Network, HeartPulse, GraduationCap, BadgeCheck, Monitor, Palette, TrendingUp } from "lucide-react";

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
                        {navLinks.map((item) => {
                            if (item.subItems && item.subItems.length > 0) {
                                return <DropdownNavItem key={item.label} item={item} />;
                            }
                            return (
                                <NavItem
                                    key={item.label}
                                    href={item.href}
                                    label={item.label}
                                />
                            );
                        })}
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
                        </div>

                        <div className="flex flex-col items-center gap-6 text-sm text-blue-100/80 lg:items-end">
                            <h3 className="font-bold text-white uppercase tracking-widest text-xs">Hubungi Kami</h3>
                            <div className="flex flex-col items-center gap-4 lg:items-end">
                                <a 
                                    href={`mailto:${(usePage().props.contact as any).email}`} 
                                    className="group flex items-center gap-3 transition-all hover:text-brand-accent"
                                >
                                    <span>{(usePage().props.contact as any).email}</span>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-brand-accent/20 group-hover:text-brand-accent">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </a>
                                <a 
                                    href={`tel:${(usePage().props.contact as any).phone}`}
                                    className="group flex items-center gap-3 transition-all hover:text-brand-accent"
                                >
                                    <span>{(usePage().props.contact as any).phone}</span>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-brand-accent/20 group-hover:text-brand-accent">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </a>
                                <div className="flex max-w-[240px] items-start gap-3 text-right text-xs leading-relaxed text-blue-100/60 transition-colors hover:text-blue-100">
                                    <span>{(usePage().props.contact as any).address}</span>
                                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
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
                        ? "text-brand-primary"
                        : "text-gray-500 hover:text-brand-primary"
                }`}
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown
                    className={`h-4 w-4 text-brand-primary/60 transition-transform duration-300 ${
                        open ? "rotate-180 text-brand-primary" : ""
                    }`}
                />
                {isActive && (
                    <span className="absolute bottom-[-4px] left-4 right-4 h-1 rounded-full bg-brand-accent shadow-[0_2px_10px_rgba(0,204,204,0.4)]" />
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
                <div className="rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 ring-1 ring-black/5">
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
                                            ? "bg-brand-primary/10 text-brand-primary"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                                    }`}
                                >
                                    {sub.icon && (
                                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                                            {sub.icon}
                                        </span>
                                    )}
                                    <span className="flex-1">{sub.label}</span>
                                    {sub.children && (
                                        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                                    )}
                                </Link>

                                {/* Nested flyout */}
                                {sub.children && flyoutIndex === idx && (
                                    <div className="absolute left-full top-0 z-50 ml-1 w-52">
                                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 ring-1 ring-black/5">
                                            <div className="p-2">
                                                {sub.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                                                            url.startsWith(child.href)
                                                                ? "bg-brand-primary/10 text-brand-primary"
                                                                : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
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
                    ? "bg-brand-primary/5 text-brand-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
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
                        ? "bg-brand-primary/5 text-brand-primary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
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
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary"
                                    >
                                        <span className="flex items-center gap-2">
                                            {sub.icon && (
                                                <span className="text-brand-primary">
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
                                        <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-brand-accent/20 pl-3 pb-1">
                                            {sub.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={onClose}
                                                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand-primary"
                                                >
                                                    {child.icon && (
                                                        <span className="text-brand-accent">
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
                                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary"
                                >
                                    {sub.icon && (
                                        <span className="text-brand-primary">
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
