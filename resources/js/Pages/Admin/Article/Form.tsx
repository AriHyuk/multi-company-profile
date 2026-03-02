import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent, useState } from "react";
import TiptapEditor from "@/Components/TiptapEditor";

interface Article {
    id?: number;
    title: string;
    body: string;
    excerpt: string;
    category: string;
    status: "draft" | "published";
    thumbnail: string;
}

interface Props {
    article?: Article;
}

export default function Form({ article }: Props) {
    const isEdit = !!article;
    const { data, setData, post, processing, errors } = useForm({
        _method: isEdit ? "put" : "post",
        title: article?.title || "",
        body: article?.body || "",
        excerpt: article?.excerpt || "",
        category: article?.category || "",
        status: article?.status || "draft",
        thumbnail: null as File | null,
    });

    const [preview, setPreview] = useState<string | null>(
        article?.thumbnail ? `/storage/${article.thumbnail}` : null,
    );

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("thumbnail", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const url = isEdit
            ? route("admin.articles.update", article.id)
            : route("admin.articles.store");

        post(url);
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.articles.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Artikel
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {isEdit ? "Edit Artikel" : "Tulis Artikel Baru"}
                    </h2>
                </div>
            }
        >
            <Head title={(isEdit ? "Edit" : "Tulis") + " Artikel - Admin"} />

            <div className="max-w-6xl">
                <form
                    onSubmit={submit}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                >
                    {/* Left: Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Judul Artikel
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-lg font-bold py-3"
                                    placeholder="Masukkan judul yang menarik..."
                                />
                                {errors.title && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Konten Utama
                                </label>
                                <TiptapEditor
                                    content={data.body}
                                    onChange={(content) =>
                                        setData("body", content)
                                    }
                                />
                                {errors.body && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.body}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 mb-4">
                                Ringkasan (Excerpt)
                            </h3>
                            <textarea
                                rows={3}
                                value={data.excerpt}
                                onChange={(e) =>
                                    setData("excerpt", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                placeholder="Potongan teks singkat untuk kartu artikel..."
                            />
                            <p className="mt-2 text-[10px] text-gray-400">
                                Jika dikosongkan, ringkasan akan diambil
                                otomatis dari konten utama.
                            </p>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Status
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value as any)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Kategori
                                </label>
                                <input
                                    type="text"
                                    value={data.category}
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Tech, Insight, Case Study"
                                />
                                {errors.category && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.category}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700">
                                    Thumbnail
                                </label>
                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full aspect-square object-cover rounded-xl border border-gray-100"
                                    />
                                )}
                                <input
                                    type="file"
                                    onChange={handleThumbnailChange}
                                    className="hidden"
                                    id="thumbnail-upload"
                                />
                                <label
                                    htmlFor="thumbnail-upload"
                                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-dashed border-gray-200 rounded-xl text-xs font-semibold text-gray-500 hover:border-indigo-400 hover:text-indigo-600 cursor-pointer transition"
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
                                            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>
                                    Ganti Thumbnail
                                </label>
                                {errors.thumbnail && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.thumbnail}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition shadow-lg shadow-gray-200 disabled:opacity-50"
                        >
                            {processing
                                ? "Menyimpan..."
                                : isEdit
                                  ? "Update Artikel"
                                  : "Terbitkan"}
                        </button>

                        <Link
                            href={route("admin.articles.index")}
                            className="block text-center py-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition"
                        >
                            Batalkan
                        </Link>
                    </div>
                </form>
            </div>
        </CmsLayout>
    );
}
