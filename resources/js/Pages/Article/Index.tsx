import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    thumbnail: string | null;
    category: string;
    published_at: string;
    author: {
        id: number;
        name: string;
    };
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    articles: {
        data: Article[];
        links: PaginationLink[];
    };
}

export default function ArticleIndex({ articles }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <PublicLayout>
            <Seo
                title="Artikel & Berita"
                description="Temukan wawasan, cerita, dan update terbaru dari Multi Company Profiles."
            />

            {/* Hero Section */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
                        Wawasan & <span className="text-blue-400">Cerita</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
                        Temukan artikel terbaru, panduan teknologi, dan update
                        bisnis dari tim ahli kami.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-6xl px-6">
                    {articles.data.length === 0 ? (
                        <div className="py-20 text-center">
                            <p className="text-xl text-slate-500">
                                Belum ada artikel yang dipublikasikan.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {articles.data.map((article) => (
                                    <article
                                        key={article.id}
                                        className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                                    >
                                        <Link
                                            href={`/artikel/${article.slug}`}
                                            className="block relative aspect-[16/9] overflow-hidden"
                                        >
                                            <img
                                                src={
                                                    article.thumbnail ||
                                                    `https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070`
                                                }
                                                alt={article.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-3 flex items-center justify-between text-xs font-medium text-slate-500">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold uppercase">
                                                        {article.author.name.charAt(
                                                            0,
                                                        )}
                                                    </div>
                                                    <span>
                                                        {article.author.name}
                                                    </span>
                                                </div>
                                                <span>
                                                    {formatDate(
                                                        article.published_at,
                                                    )}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                                                <Link
                                                    href={`/artikel/${article.slug}`}
                                                >
                                                    {article.title}
                                                </Link>
                                            </h2>

                                            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6">
                                                <Link
                                                    href={`/artikel/${article.slug}`}
                                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                                                >
                                                    Baca Selengkapnya
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
                                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {articles.links.length > 3 && (
                                <div className="mt-16 flex justify-center">
                                    <nav className="flex items-center gap-1">
                                        {articles.links.map((link, i) => (
                                            <Link
                                                key={i}
                                                href={link.url || "#"}
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                                className={`
                                                    inline-flex h-10 min-w-[40px] items-center justify-center rounded-lg px-3 text-sm font-medium transition-all
                                                    ${
                                                        link.active
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                                                    }
                                                    ${!link.url ? "opacity-50 cursor-not-allowed" : ""}
                                                `}
                                            />
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
