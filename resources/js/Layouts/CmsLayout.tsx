import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

interface Props extends PropsWithChildren {
    header?: ReactNode;
}

const navItems = [
    { label: "Dashboard", href: "/cms/dashboard", icon: "🏠" },
    { label: "Artikel", href: "/cms/articles", icon: "📝" },
    { label: "Portofolio", href: "/cms/portfolios", icon: "🖼️" },
    { label: "Layanan", href: "/cms/services", icon: "⚡" },
    { label: "Tim", href: "/cms/team-members", icon: "👥" },
    { label: "Lead Inbox", href: "/cms/leads", icon: "📬" },
];

const adminOnlyItems = [
    { label: "Pengaturan Situs", href: "/cms/settings", icon: "⚙️" },
    { label: "Manajemen User", href: "/cms/users", icon: "🔑" },
];

export default function CmsLayout({ header, children }: Props) {
    const { auth } = usePage<{
        auth: { user: { name: string; email: string; role: string } };
    }>().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
            {/* Sidebar Overlay (mobile) */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-gray-900 text-white transition-transform duration-300 md:static md:translate-x-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex h-16 items-center gap-2 border-b border-gray-700 px-6">
                    <span className="text-lg font-bold text-indigo-400">
                        MultiCo
                    </span>
                    <span className="text-sm text-gray-400">CMS</span>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-0.5 px-3">
                        {navItems.map((item) => (
                            <SidebarLink key={item.href} {...item} />
                        ))}
                    </div>

                    {/* Admin-only section */}
                    {auth.user.role === "admin" && (
                        <div className="mt-6 border-t border-gray-700 px-3 pt-4">
                            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Admin
                            </p>
                            <div className="space-y-0.5">
                                {adminOnlyItems.map((item) => (
                                    <SidebarLink key={item.href} {...item} />
                                ))}
                            </div>
                        </div>
                    )}
                </nav>

                {/* User Profile */}
                <div className="border-t border-gray-700 p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold uppercase">
                            {auth.user.name.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-white">
                                {auth.user.name}
                            </p>
                            <p className="truncate text-xs capitalize text-indigo-400">
                                {auth.user.role}
                            </p>
                        </div>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-gray-400 hover:text-white"
                            title="Logout"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top Header Bar */}
                <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
                    {/* Hamburger (mobile) */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
                    >
                        <svg
                            className="h-5 w-5"
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

                    {/* Optional Header (breadcrumb, title) */}
                    <div className="flex-1 md:ml-0">{header}</div>

                    {/* Right side: link to public site */}
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        Lihat Situs
                    </Link>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}

function SidebarLink({
    href,
    label,
    icon,
}: {
    href: string;
    label: string;
    icon: string;
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-white"
        >
            <span className="text-base">{icon}</span>
            {label}
        </Link>
    );
}
