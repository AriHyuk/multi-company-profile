import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";

interface Lead {
    id: number;
    name: string;
    email: string;
    subject: string;
    status: "new" | "read";
    created_at: string;
}

interface Props {
    leads: {
        data: Lead[];
        links: any[];
    };
}

export default function Index({ leads }: Props) {
    const { delete: destroy } = useForm();

    const deleteLead = (id: number) => {
        if (confirm("Yakin ingin menghapus pesan ini?")) {
            destroy(route("admin.leads.destroy", id));
        }
    };

    return (
        <CmsLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pesan Masuk (Leads)
                </h2>
            }
        >
            <Head title="Leads - Admin" />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-6 py-4">Pengirim</th>
                            <th className="px-6 py-4">Subject</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Tanggal</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {leads.data.length > 0 ? (
                            leads.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className={`hover:bg-gray-50/50 transition ${item.status === "new" ? "bg-indigo-50/30" : ""}`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span
                                                className={`font-semibold ${item.status === "new" ? "text-gray-900" : "text-gray-600"}`}
                                            >
                                                {item.name}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {item.email}
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        className={`px-6 py-4 ${item.status === "new" ? "font-bold text-gray-800" : "text-gray-500"}`}
                                    >
                                        {item.subject}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                item.status === "new"
                                                    ? "bg-indigo-50 text-indigo-700 ring-indigo-600/20"
                                                    : "bg-gray-50 text-gray-700 ring-gray-600/20"
                                            }`}
                                        >
                                            {item.status === "new"
                                                ? "Baru"
                                                : "Dibaca"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {new Date(
                                            item.created_at,
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={route(
                                                    "admin.leads.show",
                                                    item.id,
                                                )}
                                                className="p-2 text-gray-400 hover:text-indigo-600 transition"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteLead(item.id)
                                                }
                                                className="p-2 text-gray-400 hover:text-red-600 transition"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-10 text-center text-gray-500"
                                >
                                    Belum ada pesan masuk.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {leads.links.length > 3 && (
                <div className="mt-6 flex justify-center gap-1">
                    {leads.links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-3 py-1 text-sm rounded-md transition ${
                                link.active
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-600 hover:bg-gray-50"
                            } ${!link.url ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                    ))}
                </div>
            )}
        </CmsLayout>
    );
}
