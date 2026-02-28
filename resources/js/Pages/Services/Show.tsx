import { Head, Link } from "@inertiajs/react";
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
    service: Service;
}

export default function ServicesShow({ service }: Props) {
    const pageTitle = service.title;
    const metaDescription = service.description.slice(0, 160);

    return (
        <PublicLayout>
            <Head title={pageTitle}>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    {service.icon && (
                        <span className="mb-6 block text-5xl">
                            {service.icon}
                        </span>
                    )}
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        {service.title}
                    </h1>
                    {service.price_estimate && (
                        <p className="mt-4 text-lg font-medium text-blue-300">
                            {service.price_estimate}
                        </p>
                    )}
                </div>
            </section>

            {/* Detail */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            Tentang Layanan Ini
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            {service.description}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 rounded-2xl bg-blue-50 p-10 text-center">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Tertarik dengan layanan ini?
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Hubungi kami sekarang dan dapatkan konsultasi gratis
                            dari tim ahli kami.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/kontak"
                                className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Konsultasi Gratis
                            </Link>
                            <Link
                                href="/layanan"
                                className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                                ← Lihat Layanan Lain
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
