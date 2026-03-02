import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail: string | null;
    images: string[] | null;
    category: string | null;
    client: string | null;
    year: number | null;
}

interface Props {
    portfolio: Portfolio;
}

export default function PortfolioShow({ portfolio }: Props) {
    const pageTitle = `${portfolio.title} — Portofolio`;
    const metaDescription = portfolio.description?.slice(0, 160);

    return (
        <PublicLayout>
            <Seo
                title={pageTitle}
                description={metaDescription}
                image={portfolio.thumbnail ?? undefined}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src={portfolio.thumbnail || ""}
                        alt=""
                        className="h-full w-full object-cover blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="relative mx-auto max-w-5xl px-6">
                    <Link
                        href="/portofolio"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Kembali ke Portofolio
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {portfolio.category && (
                            <span className="rounded-full bg-blue-600/20 px-4 py-1.2 text-xs font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/30">
                                {portfolio.category}
                            </span>
                        )}
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300 font-medium">
                            {portfolio.year}
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                        {portfolio.title}
                    </h1>

                    <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                                Klien
                            </p>
                            <p className="text-lg font-semibold text-white">
                                {portfolio.client || "Internal Project"}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                                Tahun
                            </p>
                            <p className="text-lg font-semibold text-white">
                                {portfolio.year}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                                Kategori
                            </p>
                            <p className="text-lg font-semibold text-white">
                                {portfolio.category}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                                Status
                            </p>
                            <p className="text-lg font-semibold text-emerald-400">
                                Completed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-16 lg:grid-cols-12">
                        {/* Description */}
                        <div className="lg:col-span-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Tentang Proyek
                            </h2>
                            <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed">
                                {portfolio.description}
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    {portfolio.images && portfolio.images.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10">
                                Galeri Proyek
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {portfolio.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-md"
                                    >
                                        <img
                                            src={img}
                                            alt={`${portfolio.title} - Galllery ${index + 1}`}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Tertarik membangun sesuatu yang serupa?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Kami siap membantu mewujudkan visi digital Anda dengan
                        teknologi terkini.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/kontak"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                        >
                            Mulai Konsultasi
                        </Link>
                        <Link
                            href="/portofolio"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
                        >
                            Lihat Proyek Lainnya
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
