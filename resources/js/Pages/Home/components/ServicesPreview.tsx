import { Link } from "@inertiajs/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
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
] as const;

// ─── Sub-component ────────────────────────────────────────────────────────────

function ServiceCard({ icon, title, description }: (typeof SERVICES)[number]) {
    return (
        <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md">
            <span className="text-3xl">{icon}</span>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
                {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {description}
            </p>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ServicesPreview() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Layanan Unggulan
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Kami menyediakan solusi digital end-to-end untuk bisnis
                        Anda.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </div>

                {/* Footer link */}
                <div className="mt-10 text-center">
                    <Link
                        href="/layanan"
                        className="text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                    >
                        Lihat semua layanan →
                    </Link>
                </div>
            </div>
        </section>
    );
}
