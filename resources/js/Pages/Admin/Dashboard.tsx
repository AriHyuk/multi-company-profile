import { Head } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";

interface Stat {
    label: string;
    value: number | string;
    icon: React.ReactNode;
    color: string;
}

interface Props {
    stats: {
        total_leads: number;
        total_articles: number;
        total_portfolios: number;
        recent_leads: any[];
    };
}

export default function Dashboard({ stats }: Props) {
    const statCards: Stat[] = [
        {
            label: "Total Leads",
            value: stats.total_leads,
            color: "bg-blue-500",
            icon: (
                <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            label: "Artikel",
            value: stats.total_articles,
            color: "bg-green-500",
            icon: (
                <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v12a2 2 0 01-2 2z"
                    />
                </svg>
            ),
        },
        {
            label: "Portofolio",
            value: stats.total_portfolios,
            color: "bg-purple-500",
            icon: (
                <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <CmsLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard - Multi Company Profiles" />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {statCards.map((stat) => (
                    <div
                        key={stat.label}
                        className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex items-center gap-4"
                    >
                        <div
                            className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${stat.color}`}
                        >
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                {stat.label}
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                                {stat.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Leads Section */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        Lead Terbaru
                    </h3>
                    <a
                        href="/admin/leads"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                    >
                        Lihat Semua
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 text-gray-400 font-medium">
                            <tr>
                                <th className="pb-3 pr-4">Nama</th>
                                <th className="pb-3 pr-4">Email</th>
                                <th className="pb-3 pr-4">Tanggal</th>
                                <th className="pb-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {stats.recent_leads.length > 0 ? (
                                stats.recent_leads.map((lead) => (
                                    <tr key={lead.id} className="group">
                                        <td className="py-4 pr-4 font-medium text-gray-900">
                                            {lead.name}
                                        </td>
                                        <td className="py-4 pr-4 text-gray-600">
                                            {lead.email}
                                        </td>
                                        <td className="py-4 pr-4 text-gray-500">
                                            {new Date(
                                                lead.created_at,
                                            ).toLocaleDateString("id-ID")}
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                    lead.status === "new"
                                                        ? "bg-blue-50 text-blue-700 ring-blue-600/20"
                                                        : "bg-gray-50 text-gray-600 ring-gray-500/10"
                                                }`}
                                            >
                                                {lead.status === "new"
                                                    ? "Baru"
                                                    : "Dibaca"}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="py-8 text-center text-gray-500"
                                    >
                                        Belum ada lead masuk.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </CmsLayout>
    );
}
