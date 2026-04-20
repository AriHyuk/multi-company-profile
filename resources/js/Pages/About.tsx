import Seo from "@/Components/Seo";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Target,
    Rocket,
    History,
    Award,
    Users,
    Globe,
    Quote,
} from "lucide-react";

import ContactSection from "@/Components/Sections/ContactSection";

interface AboutContent {
    id: number;
    description: string;
    vision: string;
    mission: string;
    founded_year: number;
    logo: string | null;
}

interface Props {
    content: AboutContent;
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function About({ content, contact }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Tentang Kami"
                description={
                    content?.description ??
                    "Informasi tentang perusahaan, visi, dan misi kami."
                }
            />

            <div className="relative overflow-hidden bg-white py-24 sm:py-32">
                {/* Background Decorations */}
                <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:top-[-200px]">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle
                            cx="512"
                            cy="512"
                            r="512"
                            fill="url(#brand-gradient)"
                            fillOpacity="0.1"
                        />
                        <defs>
                            <radialGradient id="brand-gradient">
                                <stop stopColor="#00cccc" />
                                <stop offset={1} stopColor="#003366" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Hero Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary ring-1 ring-inset ring-brand-primary/20 mb-6 animate-pulse">
                            {new Date().getFullYear() -
                                (content?.founded_year ?? 2015)}{" "}
                            Tahun Berkarya
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl gradient-text bg-gradient-to-r from-brand-primary to-brand-bridge bg-clip-text text-transparent">
                            Digitalizing Innovation
                        </h1>
                        <p className="mt-8 text-lg leading-8 text-gray-600">
                            {content?.description ??
                                "Kami adalah mitra strategis untuk transformasi digital bisnis Anda."}
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 lg:grid-cols-3 lg:grid-rows-2 h-auto lg:h-[600px]">
                        {/* Visi - Large Card */}
                        <div className="relative flex flex-col group overflow-hidden rounded-3xl bg-brand-primary p-8 lg:row-span-2 shadow-xl ring-1 ring-white/10">
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-accent transition-transform duration-500 group-hover:scale-110">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Visi Kami
                                </h3>
                                <p className="text-lg leading-relaxed text-blue-100">
                                    {content?.vision}
                                </p>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -right-8 -bottom-8 opacity-10 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12">
                                <Target className="h-64 w-64 text-white" />
                            </div>
                        </div>

                        {/* Misi - Wide Card */}
                        <div className="lg:col-span-2 relative flex flex-col group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 shadow-sm transition-all hover:shadow-md">
                            <div className="relative z-10">
                                <div className="flex items-center gap-x-3 mb-4">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent text-white">
                                        <Rocket className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-primary">
                                        Misi Perusahaan
                                    </h3>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    {content?.mission
                                        ?.split("\n")
                                        .map((point, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 text-gray-600"
                                            >
                                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                                                </div>
                                                <span className="text-base leading-relaxed">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.05]">
                                <Rocket className="h-32 w-32 text-brand-primary" />
                            </div>
                        </div>

                        {/* Stat 1 - Small Card */}
                        <div className="relative flex flex-col items-center justify-center group overflow-hidden rounded-3xl bg-brand-accent/5 border border-brand-accent/20 p-8 transition-all hover:bg-brand-accent/10">
                            <History className="h-8 w-8 text-brand-accent mb-3" />
                            <div className="text-3xl font-bold text-brand-primary">
                                IT Support
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Profesional & Cepat
                            </div>
                        </div>

                        {/* Stat 2 - Small Card */}
                        <div className="relative flex flex-col items-center justify-center group overflow-hidden rounded-3xl bg-brand-bridge/5 border border-brand-bridge/20 p-8 transition-all hover:bg-brand-bridge/10">
                            <Award className="h-8 w-8 text-brand-bridge mb-3" />
                            <div className="text-3xl font-bold text-brand-primary">
                                100%
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Kepuasan Klien
                            </div>
                        </div>
                    </div>

                    {/* Additional Core Values or Culture */}
                    <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex gap-x-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Global Mindset
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Berfikir secara global untuk menghadirkan
                                    solusi berskala internasional.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Sustainable Solutions
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Solusi teknologi yang tidak hanya canggih,
                                    tapi juga berkelanjutan.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary">
                                <Quote className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Integrity First
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Kepercayaan adalah pondasi utama dalam
                                    setiap kerjasama kami.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
