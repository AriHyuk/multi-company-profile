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
    content: string | null;
    features: string[] | null;
    icon: string | null;
    price_estimate: string | null;
    order: number;
    is_active: boolean;
}

interface Props {
    service: Service;
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

const DynamicIcon = ({ name }: { name: string }) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Box;
    return <IconComponent className="h-16 w-16 text-blue-400" />;
};

export default function ServicesShow({ service, contact }: Props) {
    const pageTitle = service.title;
    const metaDescription = service.description.slice(0, 160);
    const isLucideIcon = service.icon && /^[A-Z][a-zA-Z]+$/.test(service.icon);

    return (
        <PublicLayout>
            <Seo title={pageTitle} description={metaDescription} />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                    <div className="h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"></div>
                </div>
                
                <div className="relative mx-auto max-w-5xl px-6 text-center">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md">
                        {isLucideIcon ? (
                            <DynamicIcon name={service.icon as string} />
                        ) : (
                            <span className="text-5xl">{service.icon || "💼"}</span>
                        )}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                        {service.title}
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-xl text-slate-300">
                        {service.description}
                    </p>
                    
                    {service.price_estimate && (
                        <div className="mt-8 inline-flex items-center rounded-full bg-blue-500/10 px-6 py-2 border border-blue-500/20 text-blue-300">
                            <LucideIcons.Tag className="mr-2 h-5 w-5" />
                            <span className="font-semibold">Estimasi: {service.price_estimate}</span>
                        </div>
                    )}
                </div>
            </section>

            {/* Main Content Area */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        
                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-10">
                            
                            {/* Features Array Rendering */}
                            {service.features && service.features.length > 0 && (
                                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                        <LucideIcons.Sparkles className="mr-3 h-6 w-6 text-blue-500" />
                                        Keunggulan Layanan
                                    </h2>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                                        <LucideIcons.Check className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                <p className="ml-3 text-slate-700 leading-relaxed font-medium">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Detailed Content / Markdown Rendering */}
                            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
                                <h2>Detail Layanan</h2>
                                {service.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                                ) : (
                                    <p className="text-slate-600 italic">Detail lebih lanjut sedang dipersiapkan oleh tim kami.</p>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar / CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100 border-t-4 border-blue-600">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Mulai Proyek Anda
                                </h3>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    Tertarik untuk menggunakan layanan <span className="font-semibold text-slate-800">{service.title}</span>? 
                                    Tim kami siap membantu mewujudkan visi Anda.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <Link
                                        href="/kontak"
                                        className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 hover:shadow-lg shadow-blue-500/30"
                                    >
                                        <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
                                        Konsultasi Gratis
                                    </Link>
                                    <Link
                                        href="/layanan"
                                        className="flex w-full items-center justify-center rounded-xl bg-slate-50 border border-slate-200 px-6 py-4 font-bold text-slate-700 transition hover:bg-slate-100"
                                    >
                                        Kembali ke Layanan
                                    </Link>
                                </div>

                                {/* Trust Badges/Info */}
                                <div className="mt-8 border-t border-slate-100 pt-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-sm text-slate-600">
                                            <LucideIcons.Clock className="mr-3 h-5 w-5 text-emerald-500" />
                                            Respon cepat dalam 24 jam
                                        </li>
                                        <li className="flex items-center text-sm text-slate-600">
                                            <LucideIcons.ShieldCheck className="mr-3 h-5 w-5 text-emerald-500" />
                                            Jaminan kepuasan 100%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
