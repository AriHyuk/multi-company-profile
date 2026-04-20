import Seo from "@/Components/Seo";
import { useForm } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { FormEvent } from "react";

interface Props {
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function Contact({ contact }: Props) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } =
        useForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route("contact.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout>
            <Seo
                title="Hubungi Kami"
                description="Punya pertanyaan atau butuh konsultasi untuk bisnis Anda? Jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda."
            />

            <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                {/* Background decoration elements */}
                <div
                    className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        {/* Information Section */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Hubungi Kami
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Punya pertanyaan atau butuh konsultasi untuk
                                bisnis Anda? Jangan ragu untuk menghubungi tim
                                kami. Kami siap membantu Anda.
                            </p>

                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Telephone
                                        </span>
                                        <svg
                                            className="h-7 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>{contact.phone}</dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <svg
                                            className="h-7 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>
                                        <a
                                            className="hover:text-brand-primary"
                                            href={`mailto:${contact.email}`}
                                        >
                                            {contact.email}
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <svg
                                            className="h-7 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>
                                        {contact.address}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Form Section */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm lg:p-10">
                            {wasSuccessful && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                                    <svg
                                        className="h-5 w-5 text-green-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Pesan Anda telah terkirim!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Nama Lengkap
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.name ? "ring-red-300 focus:ring-red-600" : "ring-gray-300 focus:ring-brand-primary"} placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset`}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-600">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                id="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? "ring-red-300 focus:ring-red-600" : "ring-gray-300 focus:ring-brand-primary"} placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-600">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            No. Telepon (Opsional)
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                id="phone"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Perusahaan (Opsional)
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                id="company"
                                                value={data.company}
                                                onChange={(e) =>
                                                    setData(
                                                        "company",
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Pesan
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                id="message"
                                                rows={4}
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.message ? "ring-red-300 focus:ring-red-600" : "ring-gray-300 focus:ring-brand-primary"} placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset`}
                                            ></textarea>
                                            {errors.message && (
                                                <p className="mt-1 text-xs text-red-600">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="block w-full rounded-xl bg-brand-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-bridge focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing
                                            ? "Mengirim..."
                                            : "Kirim Pesan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom decoration element */}
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
            </div>
        </PublicLayout>
    );
}
