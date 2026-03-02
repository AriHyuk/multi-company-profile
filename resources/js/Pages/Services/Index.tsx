import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    icon: string | null;
    price_estimate: string | null;
    order: number;
    is_active: boolean;
}

interface Props {
    services: Service[];
}

export default function ServicesIndex({ services }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Layanan Kami"
                description="Temukan berbagai layanan digital terbaik dari kami untuk membantu pertumbuhan bisnis Anda."
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Layanan Kami
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Solusi digital terpadu untuk mendorong pertumbuhan
                        bisnis Anda
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-6">
                    {services.length === 0 ? (
                        <p className="text-center text-slate-500">
                            Belum ada layanan tersedia.
                        </p>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`/layanan/${service.slug}`}
                                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {service.icon && (
                                        <span className="mb-4 text-4xl">
                                            {service.icon}
                                        </span>
                                    )}
                                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
                                        {service.title}
                                    </h2>
                                    <p className="mt-3 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-600">
                                        {service.description}
                                    </p>
                                    {service.price_estimate && (
                                        <p className="mt-4 text-sm font-medium text-blue-600">
                                            {service.price_estimate}
                                        </p>
                                    )}
                                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                                        Selengkapnya
                                        <svg
                                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h2 className="text-3xl font-bold">
                        Tidak yakin layanan mana yang tepat?
                    </h2>
                    <p className="mt-3 text-blue-100">
                        Konsultasikan kebutuhan Anda dengan tim kami — gratis!
                    </p>
                    <Link
                        href="/kontak"
                        className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
                    >
                        Konsultasi Gratis
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
}
