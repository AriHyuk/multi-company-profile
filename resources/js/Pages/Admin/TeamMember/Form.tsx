import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent, useState } from "react";

interface TeamMember {
    id?: number;
    name: string;
    role: string;
    bio: string;
    photo: string;
    is_active: boolean;
    order: number;
}

interface Props {
    teamMember?: TeamMember;
}

export default function Form({ teamMember }: Props) {
    const isEdit = !!teamMember;
    const { data, setData, post, processing, errors } = useForm({
        _method: isEdit ? "put" : "post",
        name: teamMember?.name || "",
        role: teamMember?.role || "",
        bio: teamMember?.bio || "",
        is_active: teamMember?.is_active ?? true,
        photo: null as File | null,
        order: teamMember?.order || 0,
    });

    const [preview, setPreview] = useState<string | null>(
        teamMember?.photo ? `/storage/${teamMember.photo}` : null,
    );

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("photo", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const url = isEdit
            ? route("admin.team-members.update", teamMember.id)
            : route("admin.team-members.store");

        post(url);
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.team-members.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Manajemen Tim
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {isEdit ? "Edit Profile" : "Tambah Anggota Tim"}
                    </h2>
                </div>
            }
        >
            <Head
                title={(isEdit ? "Edit" : "Tambah") + " Anggota Tim - Admin"}
            />

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
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Contoh: John Doe"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Jabatan / Role
                                </label>
                                <input
                                    type="text"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                    placeholder="Contoh: Senior Developer"
                                />
                                {errors.role && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.role}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Bio Singkat
                                </label>
                                <textarea
                                    rows={5}
                                    value={data.bio}
                                    onChange={(e) =>
                                        setData("bio", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                    placeholder="Ceritakan sedikit tentang latar belakang..."
                                />
                                {errors.bio && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.bio}
                                    </p>
                                )}
                            </div>
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
                                    value={data.is_active ? "1" : "0"}
                                    onChange={(e) =>
                                        setData(
                                            "is_active",
                                            e.target.value === "1",
                                        )
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                >
                                    <option value="1">Aktif</option>
                                    <option value="0">Nonaktif</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Urutan Tampil (Order)
                                </label>
                                <input
                                    type="number"
                                    value={data.order}
                                    onChange={(e) =>
                                        setData(
                                            "order",
                                            parseInt(e.target.value),
                                        )
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700">
                                    Foto Profile
                                </label>
                                {preview && (
                                    <div className="flex justify-center">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover rounded-full border border-gray-100 shadow-sm"
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="photo-upload"
                                />
                                <label
                                    htmlFor="photo-upload"
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
                                    Pilih Foto
                                </label>
                                {errors.photo && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.photo}
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
                                  ? "Update Profile"
                                  : "Tambah Anggota"}
                        </button>

                        <Link
                            href={route("admin.team-members.index")}
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
