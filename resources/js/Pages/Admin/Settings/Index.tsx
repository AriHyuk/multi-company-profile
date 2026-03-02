import { Head, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent } from "react";

interface Props {
    settings: {
        [key: string]: string;
    };
}

export default function Index({ settings }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        settings: {
            company_name: settings.company_name || "",
            company_tagline: settings.company_tagline || "",
            hero_title: settings.hero_title || "",
            hero_description: settings.hero_description || "",
            contact_email: settings.contact_email || "",
            contact_phone: settings.contact_phone || "",
            contact_address: settings.contact_address || "",
            google_maps_iframe: settings.google_maps_iframe || "",
        },
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(route("admin.settings.store"));
    };

    return (
        <CmsLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pengaturan Situs
                </h2>
            }
        >
            <Head title="Pengaturan Situs - Multi Company Profiles" />

            <div className="max-w-4xl mx-auto">
                <form onSubmit={submit} className="space-y-8">
                    {/* General Settings */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="h-6 w-1 bg-indigo-600 rounded-full"></span>
                            Identitas & Hero
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Nama Perusahaan
                                </label>
                                <input
                                    type="text"
                                    value={data.settings.company_name}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            company_name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Contoh: MultiCo Digital"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Tagline
                                </label>
                                <input
                                    type="text"
                                    value={data.settings.company_tagline}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            company_tagline: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Contoh: Solusi Digital Terpercaya"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Hero Title
                                </label>
                                <input
                                    type="text"
                                    value={data.settings.hero_title}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            hero_title: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Headline besar di beranda"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Hero Description
                                </label>
                                <textarea
                                    rows={3}
                                    value={data.settings.hero_description}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            hero_description: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                    placeholder="Penjelasan singkat di bawah headline"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Settings */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="h-6 w-1 bg-blue-600 rounded-full"></span>
                            Kontak & Lokasi
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Email Publik
                                </label>
                                <input
                                    type="email"
                                    value={data.settings.contact_email}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            contact_email: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Nomor Telepon/WA
                                </label>
                                <input
                                    type="text"
                                    value={data.settings.contact_phone}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            contact_phone: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Alamat Lengkap
                                </label>
                                <textarea
                                    rows={2}
                                    value={data.settings.contact_address}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            contact_address: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Google Maps Embed URL (src)
                                </label>
                                <input
                                    type="text"
                                    value={data.settings.google_maps_iframe}
                                    onChange={(e) =>
                                        setData("settings", {
                                            ...data.settings,
                                            google_maps_iframe: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="https://www.google.com/maps/embed?..."
                                />
                                <p className="text-[10px] text-gray-400">
                                    Hanya paste link dari atribut 'src' pada
                                    iframe Google Maps.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-gray-200"
                        >
                            {processing ? (
                                "Menyimpan..."
                            ) : (
                                <>
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
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Simpan Perubahan
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </CmsLayout>
    );
}
