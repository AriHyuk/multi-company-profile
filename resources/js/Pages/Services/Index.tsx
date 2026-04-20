import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import * as LucideIcons from "lucide-react";
import ContactSection from "@/Components/Sections/ContactSection";

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
    services: Service[];
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

// ─── Helper function for Dynamic Icons ──────────────────────────────────────
const DynamicIcon = ({ name }: { name: string }) => {
    // Basic fallback to Box icon if not found
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Box;
    return <IconComponent className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />;
};

export default function ServicesIndex({ services }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Layanan Kami"
                description="Temukan berbagai layanan digital terbaik dari kami untuk membantu pertumbuhan bisnis Anda."
            />

            {/* Hero / Header */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                    <div className="h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                    <div className="h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                        Layanan Kami
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-400">
                        Solusi digital terpadu berkualitas premium untuk mendorong pertumbuhan
                        bisnis Anda ke level tertinggi.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-slate-900 pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    {services.length === 0 ? (
                        <p className="text-center text-slate-500 py-20">
                            Belum ada layanan tersedia saat ini.
                        </p>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => {
                                const isLucideIcon = service.icon && /^[A-Z][a-zA-Z]+$/.test(service.icon);

                                return (
                                    <Link
                                        key={service.id}
                                        href={`/layanan/${service.slug}`}
                                        className="group relative flex flex-col rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
                                    >
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:bg-blue-600/20 transition-all duration-300">
                                            {isLucideIcon ? (
                                                <DynamicIcon name={service.icon as string} />
                                            ) : (
                                                <span className="text-4xl">{service.icon || "💼"}</span>
                                            )}
                                        </div>

                                        <h2 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="mt-4 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-400">
                                            {service.description}
                                        </p>

                                        {service.price_estimate && (
                                            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                                                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Mulai dari</span>
                                                <span className="font-semibold text-blue-400">{service.price_estimate}</span>
                                            </div>
                                        )}

                                        <div className="mt-8 flex items-center text-sm font-semibold text-white opacity-80 transition-all group-hover:opacity-100 group-hover:text-blue-300">
                                            Selengkapnya
                                            <LucideIcons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
