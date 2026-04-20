import Seo from "@/Components/Seo";
import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import * as LucideIcons from "lucide-react";
import ContactSection from "@/Components/Sections/ContactSection";
import SectionDivider from "@/Components/Sections/SectionDivider";

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
    return <IconComponent className="h-16 w-16 text-brand-primary dark:text-blue-400" />;
};

export default function ServicesShow({ service, contact }: Props) {
    const pageTitle = service.title;
    const metaDescription = service.description.slice(0, 160);
    const isLucideIcon = service.icon && /^[A-Z][a-zA-Z]+$/.test(service.icon);

    return (
        <PublicLayout>
            <Seo title={pageTitle} description={metaDescription} />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white transition-colors duration-300 dark:bg-midnight-bg pt-32 pb-20 lg:pt-40 lg:pb-28">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                    <div className="h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"></div>
                </div>
                
                <div className="relative mx-auto max-w-5xl px-6 text-center">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-primary/5 border border-brand-primary/10 shadow-xl backdrop-blur-md dark:bg-white/5 dark:border-white/10 text-brand-primary dark:text-white">
                        {isLucideIcon ? (
                            <DynamicIcon name={service.icon as string} />
                        ) : (
                            <span className="text-5xl">{service.icon || "💼"}</span>
                        )}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-6xl dark:text-white">
                        {service.title}
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-xl text-gray-600 dark:text-slate-300">
                        {service.description}
                    </p>
                    
                    {service.price_estimate && (
                        <div className="mt-8 inline-flex items-center rounded-full bg-brand-primary/5 px-6 py-2 border border-brand-primary/10 text-brand-primary dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-300">
                            <LucideIcons.Tag className="mr-2 h-5 w-5" />
                            <span className="font-semibold">Estimasi: {service.price_estimate}</span>
                        </div>
                    )}
                </div>
            </section>

            <SectionDivider fromColor="bg-white dark:bg-midnight-bg" toColor="text-slate-50 dark:text-midnight-surface" direction="down" />

            {/* Main Content Area */}
            <section className="bg-slate-50 transition-colors duration-300 dark:bg-midnight-surface py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        
                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-10">
                            
                            {/* Features Array Rendering */}
                            {service.features && service.features.length > 0 && (
                                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 dark:bg-midnight-bg dark:ring-white/5">
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center dark:text-white">
                                        <LucideIcons.Sparkles className="mr-3 h-6 w-6 text-brand-primary dark:text-blue-400" />
                                        Keunggulan Layanan
                                    </h2>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary dark:bg-blue-500/10 dark:text-blue-400">
                                                        <LucideIcons.Check className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                <p className="ml-3 text-gray-600 leading-relaxed font-medium dark:text-slate-300">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Detailed Content / Markdown Rendering */}
                            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 dark:bg-midnight-bg dark:ring-white/5 prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-slate-300 prose-a:text-brand-primary dark:prose-a:text-blue-400">
                                <h2>Detail Layanan</h2>
                                {service.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                                ) : (
                                    <p className="text-gray-500 italic dark:text-slate-500">Detail lebih lanjut sedang dipersiapkan oleh tim kami.</p>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar / CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 border-t-4 border-brand-primary dark:bg-midnight-bg dark:ring-white/5 dark:border-blue-500">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Mulai Proyek Anda
                                </h3>
                                <p className="mt-4 text-gray-600 leading-relaxed dark:text-slate-400">
                                    Tertarik untuk menggunakan layanan <span className="font-semibold text-gray-900 dark:text-white">{service.title}</span>? 
                                    Tim kami siap membantu mewujudkan visi Anda.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <Link
                                        href="/kontak"
                                        className="flex w-full items-center justify-center rounded-xl bg-brand-primary px-6 py-4 font-bold text-white transition hover:bg-brand-primary/90 hover:shadow-lg shadow-brand-primary/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:shadow-blue-500/30"
                                    >
                                        <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
                                        Konsultasi Gratis
                                    </Link>
                                    <Link
                                        href="/layanan"
                                        className="flex w-full items-center justify-center rounded-xl bg-slate-50 border border-slate-200 px-6 py-4 font-bold text-gray-700 transition hover:bg-slate-100 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                                    >
                                        Kembali ke Layanan
                                    </Link>
                                </div>

                                {/* Trust Badges/Info */}
                                <div className="mt-8 border-t border-gray-100 pt-6 dark:border-white/10">
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-sm text-gray-600 dark:text-slate-400">
                                            <LucideIcons.Clock className="mr-3 h-5 w-5 text-emerald-500" />
                                            Respon cepat dalam 24 jam
                                        </li>
                                        <li className="flex items-center text-sm text-gray-600 dark:text-slate-400">
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

            <SectionDivider fromColor="bg-slate-50 dark:bg-midnight-surface" toColor="text-white dark:text-midnight-bg" direction="up" />

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
