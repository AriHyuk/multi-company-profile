import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

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
        <div className="group overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:ring-brand-primary/30 shadow-xl dark:bg-midnight-surface dark:ring-white/5 dark:shadow-2xl dark:hover:ring-brand-accent/30">
            {/* Thumbnail */}
            <div
                className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
            >
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                <span className="text-5xl transition-transform duration-500 group-hover:scale-110">🖼️</span>
            </div>
            {/* Body */}
            <div className="p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/80 dark:text-brand-accent/80">
                    {category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-brand-primary group-hover:text-brand-bridge transition-colors dark:text-white dark:group-hover:text-brand-accent">
                    {title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed dark:text-slate-400">{description}</p>
            </div>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function FeaturedProjects() {
    return (
        <section className="py-24 bg-white relative overflow-hidden transition-colors duration-300 dark:bg-midnight-bg">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px] opacity-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl dark:text-white">
                        Proyek Terbaru
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto dark:text-slate-400">
                        Beberapa karya terbaik yang telah kami selesaikan dengan presisi dan inovasi.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>

                {/* Footer link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/portofolio"
                        className="group inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/5 px-8 py-3.5 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary/10 hover:border-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:border-brand-accent dark:hover:text-brand-accent"
                    >
                        Lihat Semua Portofolio
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
