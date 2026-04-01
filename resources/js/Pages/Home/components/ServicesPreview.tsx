import { Link } from "@inertiajs/react";
import * as LucideIcons from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string | null;
    slug: string;
}

interface Props {
    services: Service[];
}

// ─── Helper function for Dynamic Icons ──────────────────────────────────────

const DynamicIcon = ({ name }: { name: string }) => {
    // Basic fallback to Box icon if not found
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Box;
    return <IconComponent className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" />;
};

// ─── Sub-component ────────────────────────────────────────────────────────────

function ServiceCard({ icon, title, description, slug }: Service) {
    // If the string contains emoji or is not a valid Lucide name, we handle it
    const isLucideIcon = icon && /^[A-Z][a-zA-Z]+$/.test(icon);

    return (
        <Link 
            href={`/layanan/${slug}`}
            className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 shadow-sm backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50"
        >
            {/* Glow blob behind icon */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-all duration-500 group-hover:bg-blue-500/40"></div>
            
            <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:bg-blue-600/80 transition-all duration-300">
                {isLucideIcon ? (
                    <DynamicIcon name={icon} />
                ) : (
                    <span className="text-3xl">{icon || "💼"}</span>
                )}
            </div>
            
            <h3 className="relative text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                {title}
            </h3>
            
            <p className="relative mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 line-clamp-3">
                {description}
            </p>

            <div className="relative mt-6 flex items-center text-sm font-semibold text-blue-400 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <span>Pelajari lebih lanjut</span>
                <LucideIcons.ArrowRight className="ml-2 h-4 w-4" />
            </div>
        </Link>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ServicesPreview({ services }: Props) {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-24">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px]"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                        Our Services
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Layanan Unggulan
                    </p>
                    <p className="mt-5 text-lg text-slate-400">
                        Kami menyediakan solusi digital end-to-end dengan kualitas premium untuk mendorong pertumbuhan bisnis Anda ke level berikutnya.
                    </p>
                </div>

                {/* Grid */}
                {services && services.length > 0 ? (
                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((s) => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-16 text-center text-slate-500">
                        Layanan belum tersedia.
                    </p>
                )}

                {/* Footer link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/layanan"
                        className="group inline-flex items-center rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/20"
                    >
                        Lihat semua layanan
                        <LucideIcons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
