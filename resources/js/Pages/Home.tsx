import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaUrl: string;
}

interface MetaProps {
    description: string;
    ogImage: string;
}

interface CompanyProps {
    name: string;
    tagline: string;
}

interface Props {
    hero: HeroProps;
    meta: MetaProps;
    company: CompanyProps;
}

export default function Home({ hero, meta, company }: Props) {
    return (
        <PublicLayout>
            <Head>
                <title>
                    {company.name} — {company.tagline}
                </title>
                <meta name="description" content={meta.description} />
                <meta
                    property="og:title"
                    content={`${company.name} — ${company.tagline}`}
                />
                <meta property="og:description" content={meta.description} />
                {meta.ogImage && (
                    <meta property="og:image" content={meta.ogImage} />
                )}
            </Head>

            <HeroSection {...hero} />
            <ServicesPreview />
            <FeaturedProjects />
            <CtaBanner ctaUrl={hero.ctaUrl} />
        </PublicLayout>
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ title, subtitle, ctaLabel, ctaUrl }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-4 inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-semibold text-indigo-300 ring-1 ring-indigo-400/30">
                        Digital Agency
                    </span>
                    <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg text-indigo-200 sm:text-xl">
                        {subtitle}
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href={ctaUrl}
                            className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-indigo-900 shadow-lg transition hover:bg-indigo-50 hover:shadow-xl"
                        >
                            {ctaLabel}
                        </Link>
                        <Link
                            href="/portofolio"
                            className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Lihat Portofolio →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Services Preview ─────────────────────────────────────────────────────────

const services = [
    {
        icon: "💻",
        title: "Web Development",
        description:
            "Membangun website modern, cepat, dan scalable menggunakan teknologi terkini.",
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        description:
            "Merancang antarmuka yang intuitif dan berpusat pada pengalaman pengguna.",
    },
    {
        icon: "📱",
        title: "Mobile App",
        description:
            "Mengembangkan aplikasi mobile iOS & Android yang berkualitas tinggi.",
    },
    {
        icon: "📊",
        title: "Digital Marketing",
        description:
            "Strategi pemasaran digital untuk meningkatkan visibilitas dan konversi bisnis.",
    },
];

function ServicesPreview() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Layanan Unggulan
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Kami menyediakan solusi digital end-to-end untuk bisnis
                        Anda.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <span className="text-3xl">{service.icon}</span>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/layanan"
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        Lihat semua layanan →
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── Featured Projects ─────────────────────────────────────────────────────────

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description:
            "Platform belanja online dengan fitur lengkap dan performa tinggi.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        title: "Mobile Banking App",
        category: "Mobile App",
        description:
            "Aplikasi perbankan digital yang aman dan mudah digunakan.",
        color: "from-purple-500 to-pink-600",
    },
    {
        title: "SaaS Dashboard",
        category: "UI/UX Design",
        description:
            "Dashboard analitik dengan visualisasi data yang komprehensif.",
        color: "from-orange-400 to-red-500",
    },
];

function FeaturedProjects() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Proyek Terbaru
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Beberapa karya terbaik yang telah kami selesaikan.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg"
                        >
                            {/* Placeholder thumbnail */}
                            <div
                                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                            >
                                <span className="text-5xl opacity-50">🖼️</span>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                    {project.category}
                                </span>
                                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/portofolio"
                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600"
                    >
                        Lihat Semua Portofolio
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CtaBanner({ ctaUrl }: { ctaUrl: string }) {
    return (
        <section className="bg-indigo-700 py-16">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Siap memulai proyek Anda?
                </h2>
                <p className="mt-4 text-lg text-indigo-200">
                    Hubungi kami sekarang dan dapatkan konsultasi gratis bersama
                    tim ahli kami.
                </p>
                <Link
                    href={ctaUrl}
                    className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
                >
                    Mulai Konsultasi Gratis
                </Link>
            </div>
        </section>
    );
}
