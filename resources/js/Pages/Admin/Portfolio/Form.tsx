import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent, useState } from "react";

interface Portfolio {
    id?: number;
    title: string;
    description: string;
    category: string;
    client: string;
    year: string;
    status: "draft" | "published";
    thumbnail: string;
    images: string[];
}

interface Props {
    portfolio?: Portfolio;
}

export default function Form({ portfolio }: Props) {
    const isEdit = !!portfolio;
    const { data, setData, post, processing, errors } = useForm({
        _method: isEdit ? "put" : "post",
        title: portfolio?.title || "",
        description: portfolio?.description || "",
        category: portfolio?.category || "",
        client: portfolio?.client || "",
        year: portfolio?.year || "",
        status: portfolio?.status || "draft",
        thumbnail: null as File | null,
        images: [] as File[],
    });

    const [preview, setPreview] = useState<string | null>(
        portfolio?.thumbnail ? `/storage/${portfolio.thumbnail}` : null,
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
            ? route("admin.portfolios.update", portfolio.id)
            : route("admin.portfolios.store");

        post(url);
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.portfolios.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Portofolio
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {isEdit ? "Edit Project" : "Tambah Project"}
                    </h2>
                </div>
            }
        >
            <Head title={(isEdit ? "Edit" : "Tambah") + " Project - Admin"} />

            <div className="max-w-5xl">
                <form
                    onSubmit={submit}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Left: Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Judul Project
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Contoh: Website E-commerce Baju"
                                />
                                {errors.title && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Deskripsi
                                </label>
                                <textarea
                                    rows={8}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                    placeholder="Jelaskan detail project, tantangan, dan solusi..."
                                />
                                {errors.description && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Client
                                    </label>
                                    <input
                                        type="text"
                                        value={data.client}
                                        onChange={(e) =>
                                            setData("client", e.target.value)
                                        }
                                        className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Tahun
                                    </label>
                                    <input
                                        type="text"
                                        value={data.year}
                                        onChange={(e) =>
                                            setData("year", e.target.value)
                                        }
                                        className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                        placeholder="2024"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 mb-4">
                                Galeri Gambar (Opsional)
                            </h3>
                            <input
                                type="file"
                                multiple
                                onChange={(e) =>
                                    setData(
                                        "images",
                                        Array.from(e.target.files || []),
                                    )
                                }
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition"
                            />
                            <p className="mt-2 text-[10px] text-gray-400">
                                Pilih beberapa gambar untuk galeri di halaman
                                detail.
                            </p>
                            {errors.images && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.images}
                                </p>
                            )}
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
                                    placeholder="Web Design, Branding, dll"
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
                                        className="w-full aspect-video object-cover rounded-xl border border-gray-100"
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
                                  ? "Update Project"
                                  : "Publikasikan"}
                        </button>

                        <Link
                            href={route("admin.portfolios.index")}
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
