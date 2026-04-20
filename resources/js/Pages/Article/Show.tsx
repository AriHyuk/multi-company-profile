import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import ContactSection from "@/Components/Sections/ContactSection";

interface Article {
    id: number;
    title: string;
    slug: string;
    body: string;
    excerpt: string | null;
    thumbnail: string | null;
    category: string;
    published_at: string;
    author: {
        id: number;
        name: string;
    };
}

interface Props {
    article: Article;
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function ArticleShow({ article, contact }: Props) {
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
                title={`${article.title} — Artikel`}
                description={article.excerpt || ""}
                image={article.thumbnail ?? undefined}
            />

            {/* Article Header */}
            <article className="bg-white dark:bg-midnight-bg">
                <header className="mx-auto max-w-4xl px-6 py-20 text-center">
                    <div className="mb-6">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold uppercase tracking-wider text-blue-700">
                            {article.category}
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                        {article.title}
                    </h1>
                    <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-sm text-slate-700 dark:text-gray-300 font-bold uppercase">
                                {article.author.name.charAt(0)}
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">
                                {article.author.name}
                            </span>
                        </div>
                        <span className="text-slate-300">|</span>
                        <time dateTime={article.published_at}>
                            {formatDate(article.published_at)}
                        </time>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mx-auto max-w-6xl px-6">
                    <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100 dark:ring-white/5">
                        <img
                            src={
                                article.thumbnail ||
                                `https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070`
                            }
                            alt={article.title}
                            className="h-full w-full object-cover aspect-[21/9]"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-3xl px-6 py-20">
                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                        prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-gray-400
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-blockquote:border-blue-500"
                        dangerouslySetInnerHTML={{ __html: article.body }}
                    />

                    {/* Footer / Share */}
                    <footer className="mt-16 border-t border-slate-100 dark:border-white/5 pt-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                                    Bagikan
                                </h4>
                                <div className="mt-4 flex gap-4">
                                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                        <svg
                                            className="h-5 w-5 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </button>
                                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                        <svg
                                            className="h-5 w-5 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href="/artikel"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-700 dark:text-gray-300 transition-all hover:bg-slate-50 dark:hover:bg-white/10"
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
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        />
                                    </svg>
                                    Kembali ke Blog
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </article>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
