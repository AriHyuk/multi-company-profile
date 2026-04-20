import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent } from "react";

interface Service {
    id?: number;
    title: string;
    slug: string;
    description: string; // short
    content: string; // long
    icon: string;
    is_active: boolean;
}

interface Props {
    service?: Service;
}

export default function Form({ service }: Props) {
    const isEdit = !!service;
    const { data, setData, post, put, processing, errors } = useForm({
        name: service?.title || "",
        icon: service?.icon || "Activity",
        short_description: service?.description || "",
        description: service?.content || "",
        status: service?.is_active === false ? "inactive" : "active",
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(route("admin.services.update", service.id));
        } else {
            post(route("admin.services.store"));
        }
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.services.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Layanan
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {isEdit ? "Edit Layanan" : "Tambah Layanan Baru"}
                    </h2>
                </div>
            }
        >
            <Head title={(isEdit ? "Edit" : "Tambah") + " Layanan - Admin"} />

            <div className="max-w-4xl">
                <form onSubmit={submit} className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Nama Layanan
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                placeholder="Contoh: Web Development"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Icon (Lucide Name)
                            </label>
                            <input
                                type="text"
                                value={data.icon}
                                onChange={(e) =>
                                    setData("icon", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                placeholder="Activity, Code, Layout, dll"
                            />
                            {errors.icon && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.icon}
                                </p>
                            )}
                        </div>

                        <div className="md:col-span-2 space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Ringkasan Singkat
                            </label>
                            <input
                                type="text"
                                value={data.short_description}
                                onChange={(e) =>
                                    setData("short_description", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                placeholder="Deskripsi pendek untuk kartu layanan..."
                            />
                            {errors.short_description && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.short_description}
                                </p>
                            )}
                        </div>

                        <div className="md:col-span-2 space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Deskripsi Lengkap
                            </label>
                            <textarea
                                rows={6}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                placeholder="Penjelasan detail tentang layanan ini..."
                            />
                            {errors.description && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>

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
                                <option value="active">Aktif</option>
                                <option value="inactive">Nonaktif</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Link
                            href={route("admin.services.index")}
                            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100 transition"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-gray-900 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-black transition disabled:opacity-50 shadow-lg shadow-gray-200"
                        >
                            {processing
                                ? "Menyimpan..."
                                : isEdit
                                  ? "Update Layanan"
                                  : "Simpan Layanan"}
                        </button>
                    </div>
                </form>
            </div>
        </CmsLayout>
    );
}
