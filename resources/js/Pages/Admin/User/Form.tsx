import { Head, Link, useForm } from "@inertiajs/react";
import CmsLayout from "@/Layouts/CmsLayout";
import { FormEvent } from "react";

interface User {
    id?: number;
    name: string;
    email: string;
    role: "admin" | "editor";
}

interface Props {
    user?: User;
}

export default function Form({ user }: Props) {
    const isEdit = !!user;
    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name || "",
        email: user?.email || "",
        password: "",
        password_confirmation: "",
        role: user?.role || "editor",
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(route("admin.users.update", user.id));
        } else {
            post(route("admin.users.store"));
        }
    };

    return (
        <CmsLayout
            header={
                <div className="flex items-center gap-2">
                    <Link
                        href={route("admin.users.index")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        Manajemen User
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {isEdit ? "Edit User" : "Tambah User Baru"}
                    </h2>
                </div>
            }
        >
            <Head title={(isEdit ? "Edit" : "Tambah") + " User - Admin"} />

            <div className="max-w-2xl">
                <form onSubmit={submit} className="space-y-6">
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
                                placeholder="Masukkan nama user..."
                            />
                            {errors.name && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                placeholder="email@contoh.com"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Role
                            </label>
                            <select
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value as any)
                                }
                                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                            >
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                            </select>
                            {errors.role && (
                                <p className="text-xs text-red-600 mt-1">
                                    {errors.role}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    {isEdit
                                        ? "Password Baru (Kosongkan jika tidak diubah)"
                                        : "Password"}
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                />
                                {errors.password && (
                                    <p className="text-xs text-red-600 mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2.5"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Link
                            href={route("admin.users.index")}
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
                                  ? "Update User"
                                  : "Tambah User"}
                        </button>
                    </div>
                </form>
            </div>
        </CmsLayout>
    );
}
