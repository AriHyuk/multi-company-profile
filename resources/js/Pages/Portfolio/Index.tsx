import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail: string | null;
    category: string | null;
    client: string | null;
    year: number | null;
}

interface Props {
    portfolios: Portfolio[];
}

export default function PortfolioIndex({ portfolios }: Props) {
    return (
        <PublicLayout>
            <Head title="Portofolio Kami" />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Portofolio Kami
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Kumpulan karya dan proyek terbaik yang telah kami
                        selesaikan dengan penuh dedikasi
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-6xl px-6">
                    {portfolios.length === 0 ? (
                        <p className="text-center text-slate-500">
                            Belum ada proyek tersedia saat ini.
                        </p>
                    ) : (
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {portfolios.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/portofolio/${item.slug}`}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={
                                                item.thumbnail ||
                                                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                                            }
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {item.category && (
                                            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-sm">
                                                {item.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <span>{item.client}</span>
                                            <span>•</span>
                                            <span>{item.year}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
                                            {item.title}
                                        </h2>
                                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                                            Lihat Proyek
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Punya proyek impian?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Mari wujudkan bersama tim ahli kami. Kami siap
                        mendengarkan ide-ide hebat Anda.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/kontak"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
