import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string;
    is_active: boolean;
}

interface Props {
    team_members: {
        data: TeamMember[];
        links: any[];
    };
}

export default function Index({ team_members }: Props) {
    const { delete: destroy } = useForm();

    const deleteMember = (id: number) => {
        if (confirm("Yakin ingin menghapus anggota tim ini?")) {
            destroy(route("admin.team-members.destroy", id));
        }
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Manajemen Tim
                    </h2>
                    <Link
                        href={route("admin.team-members.create")}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition"
                    >
                        + Tambah Anggota
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Tim - Admin" />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-6 py-4">Nama</th>
                            <th className="px-6 py-4">Jabatan</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {team_members.data.length > 0 ? (
                            team_members.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50/50 transition"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`/storage/${item.photo}`}
                                                alt={item.name}
                                                className="h-10 w-10 rounded-full object-cover bg-gray-100"
                                            />
                                            <span className="font-semibold text-gray-900">
                                                {item.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {item.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                item.is_active
                                                    ? "bg-green-50 text-green-700 ring-green-600/20"
                                                    : "bg-red-50 text-red-700 ring-red-600/20"
                                            }`}
                                        >
                                            {item.is_active
                                                ? "Aktif"
                                                : "Nonaktif"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={route(
                                                    "admin.team-members.edit",
                                                    item.id,
                                                )}
                                                className="p-2 text-gray-400 hover:text-blue-600 transition"
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
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteMember(item.id)
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
                                    colSpan={4}
                                    className="px-6 py-10 text-center text-gray-500"
                                >
                                    Belum ada anggota tim.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {team_members.links.length > 3 && (
                <div className="mt-6 flex justify-center gap-1">
                    {team_members.links.map((link, i) => (
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
