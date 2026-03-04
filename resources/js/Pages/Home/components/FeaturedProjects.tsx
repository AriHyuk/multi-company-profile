import { Link } from "@inertiajs/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description:
            "Platform belanja online dengan fitur lengkap dan performa tinggi.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        title: "Mobile Banking App",
        category: "Mobile App",
        description:
            "Aplikasi perbankan digital yang aman dan mudah digunakan.",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        title: "SaaS Dashboard",
        category: "UI/UX Design",
        description:
            "Dashboard analitik dengan visualisasi data yang komprehensif.",
        gradient: "from-orange-400 to-red-500",
    },
] as const;

// ─── Sub-component ────────────────────────────────────────────────────────────

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    gradient: string;
}

function ProjectCard({
    title,
    category,
    description,
    gradient,
}: ProjectCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
            {/* Thumbnail */}
            <div
                className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
            >
                <span className="text-5xl opacity-50">🖼️</span>
            </div>
            {/* Body */}
            <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                    {category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function FeaturedProjects() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Proyek Terbaru
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Beberapa karya terbaik yang telah kami selesaikan.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>

                {/* Footer link */}
                <div className="mt-10 text-center">
                    <Link
                        href="/portofolio"
                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-brand-primary hover:text-brand-primary"
                    >
                        Lihat Semua Portofolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
