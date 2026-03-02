import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";

interface Lead {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

interface Props {
    lead: Lead;
}

export default function Show({ lead }: Props) {
    const { delete: destroy } = useForm();

    const deleteLead = () => {
        if (confirm("Yakin ingin menghapus pesan ini?")) {
            destroy(route("admin.leads.destroy", lead.id));
        }
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.leads.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Leads
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Detail Pesan
                    </h2>
                </div>
            }
        >
            <Head title={`Pesan dari ${lead.name} - Admin`} />

            <div className="max-w-4xl space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg">
                                {lead.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {lead.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {lead.email}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                                Diterima
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                                {new Date(lead.created_at).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div>
                            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                                Subject
                            </h4>
                            <p className="text-lg font-semibold text-gray-800">
                                {lead.subject}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                                Pesan
                            </h4>
                            <div className="bg-gray-50 rounded-2xl p-6 text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {lead.message}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <Link
                        href={route("admin.leads.index")}
                        className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition flex items-center gap-2"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Kembali ke Inbox
                    </Link>

                    <button
                        onClick={deleteLead}
                        className="bg-red-50 text-red-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-red-100 transition"
                    >
                        Hapus Pesan Ini
                    </button>
                </div>
            </div>
        </CmsLayout>
    );
}
