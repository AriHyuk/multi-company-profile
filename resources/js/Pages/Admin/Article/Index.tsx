import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";

interface Article {
    id: number;
    title: string;
    category: string;
    status: "draft" | "published";
    thumbnail: string;
    published_at: string | null;
    author: { name: string };
}

interface Props {
    articles: {
        data: Article[];
        links: any[];
    };
}

export default function Index({ articles }: Props) {
    const { delete: destroy } = useForm();

    const deleteArticle = (id: number) => {
        if (confirm("Yakin ingin menghapus artikel ini?")) {
            destroy(route("admin.articles.destroy", id));
        }
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Manajemen Artikel
                    </h2>
                    <Link
                        href={route("admin.articles.create")}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition"
                    >
                        + Tulis Artikel
                    </Link>
                </div>
            }
        >
            <Head title="Artikel - Admin" />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-6 py-4">Artikel</th>
                            <th className="px-6 py-4">Kategori</th>
                            <th className="px-6 py-4">Penulis</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {articles.data.length > 0 ? (
                            articles.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50/50 transition"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`/storage/${item.thumbnail}`}
                                                alt={item.title}
                                                className="h-10 w-10 rounded-lg object-cover bg-gray-100"
                                            />
                                            <div className="min-w-0">
                                                <p className="font-semibold text-gray-900 truncate max-w-[200px]">
                                                    {item.title}
                                                </p>
                                                <p className="text-[10px] text-gray-400">
                                                    {item.published_at
                                                        ? new Date(
                                                              item.published_at,
                                                          ).toLocaleDateString()
                                                        : "Belum Terbit"}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {item.author.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                item.status === "published"
                                                    ? "bg-green-50 text-green-700 ring-green-600/20"
                                                    : "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
                                            }`}
                                        >
                                            {item.status
                                                .charAt(0)
                                                .toUpperCase() +
                                                item.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={route(
                                                    "admin.articles.edit",
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
                                                    deleteArticle(item.id)
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
                                    Belum ada artikel.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {articles.links.length > 3 && (
                <div className="mt-6 flex justify-center gap-1">
                    {articles.links.map((link, i) => (
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
