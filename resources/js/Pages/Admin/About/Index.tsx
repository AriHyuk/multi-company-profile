import { Head, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent, useRef, useState } from "react";
import { Save, Upload, X } from "lucide-react";
import { toast } from "sonner";

interface AboutContent {
    id: number;
    description: string;
    vision: string;
    mission: string;
    founded_year: number;
    logo: string | null;
}

interface Props {
    content: AboutContent;
}

export default function AboutContentIndex({ content }: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(
        content.logo ? `/storage/${content.logo}` : null
    );

    const { data, setData, post, processing, errors } = useForm({
        description: content.description || "",
        vision: content.vision || "",
        mission: content.mission || "",
        founded_year: content.founded_year || new Date().getFullYear(),
        logo: null as File | null,
    });

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("logo", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        setData("logo", null);
        setLogoPreview(content.logo ? `/storage/${content.logo}` : null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        
        post(route("admin.about-content.update"), {
            preserveScroll: true,
            onSuccess: () => {
                // Notifikasi sukses sudah ditangani di CmsLayout via flash props
            },
        });
    };

    return (
        <CmsLayout>
            <Head title="Konten Tentang Kami" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Konten Tentang Kami
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Kelola teks utama, visi, misi, dan informasi perusahaan yang ditampilkan di halaman Tentang Kami.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <form onSubmit={submit} className="p-6 sm:p-8 space-y-8">
                    {/* Tahun Berdiri */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Tahun Berdiri
                        </label>
                        <input
                            type="number"
                            min="1900"
                            max={new Date().getFullYear()}
                            className={`w-full max-w-xs rounded-xl border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                                errors.founded_year ? "ring-red-400" : "ring-gray-200"
                            } focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all`}
                            value={data.founded_year}
                            onChange={(e) => setData("founded_year", parseInt(e.target.value))}
                        />
                        {errors.founded_year && (
                            <p className="mt-1.5 text-sm text-red-500">{errors.founded_year}</p>
                        )}
                        <p className="mt-2 text-xs text-gray-500">
                            Digunakan untuk menghitung "(Tahun Sekarang - Tahun Berdiri) Tahun Berkarya".
                        </p>
                    </div>

                    {/* Deskripsi Singkat */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Deskripsi Perusahaan (Hero Text)
                        </label>
                        <textarea
                            rows={3}
                            className={`w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                                errors.description ? "ring-red-400" : "ring-gray-200"
                            } focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all`}
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            placeholder="Kami adalah mitra strategis untuk transformasi digital bisnis Anda..."
                        />
                        {errors.description && (
                            <p className="mt-1.5 text-sm text-red-500">{errors.description}</p>
                        )}
                    </div>

                    {/* Visi & Misi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Visi
                            </label>
                            <textarea
                                rows={6}
                                className={`w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                                    errors.vision ? "ring-red-400" : "ring-gray-200"
                                } focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all`}
                                value={data.vision}
                                onChange={(e) => setData("vision", e.target.value)}
                            />
                            {errors.vision && (
                                <p className="mt-1.5 text-sm text-red-500">{errors.vision}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Misi (Pisahkan dengan baris baru / Enter)
                            </label>
                            <textarea
                                rows={6}
                                className={`w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                                    errors.mission ? "ring-red-400" : "ring-gray-200"
                                } focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all`}
                                value={data.mission}
                                onChange={(e) => setData("mission", e.target.value)}
                            />
                            {errors.mission && (
                                <p className="mt-1.5 text-sm text-red-500">{errors.mission}</p>
                            )}
                            <p className="mt-2 text-xs text-gray-500">
                                Setiap baris baru akan diubah menjadi poin (bullet point) di frontend.
                            </p>
                        </div>
                    </div>

                    {/* Logo Tambahan (Opsional) */}
                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Logo Tambahan (Opsional)
                        </label>
                        <div className="flex items-start gap-6">
                            <div className="shrink-0">
                                {logoPreview ? (
                                    <div className="relative group rounded-xl overflow-hidden border border-gray-200 w-32 h-32 flex items-center justify-center bg-gray-50">
                                        <img src={logoPreview} alt="Logo" className="max-w-full max-h-full object-contain p-2" />
                                        {data.logo && (
                                            <button
                                                type="button"
                                                onClick={removeLogo}
                                                className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="h-6 w-6" />
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div className="rounded-xl border border-dashed border-gray-300 w-32 h-32 flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                                        <Upload className="h-6 w-6 mb-2" />
                                        <span className="text-xs">No image</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex-1">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20 transition-all cursor-pointer"
                                />
                                <p className="mt-2 text-xs text-gray-500">
                                    Format JPG, PNG, atau WEBP. Maksimal 2MB. Logo ini akan menggantikan logo bawaan di header halaman Tentang Kami (jika template mendukung).
                                </p>
                                {errors.logo && (
                                    <p className="mt-1.5 text-sm text-red-500">{errors.logo}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end pt-6 border-t border-gray-100">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-brand-primary/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? (
                                <>
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Menyimpan...
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
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
