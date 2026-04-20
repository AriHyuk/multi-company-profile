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
    Mail,
    Linkedin,
    Twitter,
    ChevronRight,
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

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string | null;
}

interface Props {
    content: AboutContent;
    teamMembers: TeamMember[];
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function About({ content, teamMembers, contact }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Tentang Kami"
                description={
                    content?.description ??
                    "Informasi tentang perusahaan, visi, dan misi kami."
                }
            />

            <div className="relative bg-white pt-16">
                {/* Visual Enhancements: Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg className="h-full w-full" fill="none">
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <AboutHero content={content} />
                    <StatsGrid content={content} />
                    <VisionMission content={content} />
                    <TeamSection members={teamMembers} />
                    <CoreValues />
                </div>
            </div>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}

/**
 * --- SUB-COMPONENTS ---
 * Organized for better maintainability
 */

function AboutHero({ content }: { content: AboutContent }) {
    return (
        <section className="relative overflow-hidden py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary ring-1 ring-inset ring-brand-primary/20 mb-6 animate-pulse">
                            {new Date().getFullYear() -
                                (content?.founded_year ?? 2015)}{" "}
                            Tahun Berkarya
                        </span>
                        <h1 className="text-5xl font-extrabold tracking-tight text-brand-primary sm:text-7xl leading-[1.1]">
                            Digitalizing <br />
                            <span className="gradient-text bg-gradient-to-r from-brand-primary to-brand-bridge bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-xl">
                            {content?.description ??
                                "Kami adalah mitra strategis untuk transformasi digital bisnis Anda."}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button className="rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-brand-primary/90 transition-all hover:scale-105 active:scale-95">
                                Pelajari Selengkapnya
                            </button>
                            <a
                                href="#vision"
                                className="text-sm font-semibold leading-6 text-brand-primary flex items-center gap-1 group"
                            >
                                Lihat Visi Misi{" "}
                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    <div className="relative lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-primary/10 aspect-[4/3] group">
                            <img
                                src="/images/about-hero.png"
                                alt="Innovation Hub"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-60" />
                            
                            {/* Floating Decorative Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                <p className="text-sm font-medium">"Teknologi bukan sekadar alat, tapi jembatan menuju masa depan."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatsGrid({ content }: { content: AboutContent }) {
    const stats = [
        { label: "IT Support", value: "Profesional", icon: History, color: "brand-accent" },
        { label: "Kepuasan Klien", value: "100%", icon: Award, color: "brand-bridge" },
        { label: "Talenta Digital", value: "Expert", icon: Users, color: "brand-primary" },
    ];

    return (
        <section className="py-12 bg-gray-50/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 transition-all hover:-translate-y-1 hover:shadow-md h-32"
                        >
                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent whitespace-nowrap`}>
                                <stat.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-primary">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function VisionMission({ content }: { content: AboutContent }) {
    return (
        <section id="vision" className="py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Visi - Large Card */}
                    <div className="lg:col-span-5 relative flex flex-col group overflow-hidden rounded-[2.5rem] bg-brand-primary p-12 shadow-2xl ring-1 ring-white/10">
                        <div className="relative z-10">
                            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent/20 text-brand-accent transition-transform duration-500 group-hover:rotate-12">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Visi Kami
                            </h3>
                            <p className="text-xl leading-[1.8] text-blue-100/90 font-medium italic">
                                "{content?.vision}"
                            </p>
                        </div>
                        <div className="absolute -right-12 -bottom-12 opacity-5 transition-transform duration-1000 group-hover:scale-150 group-hover:-rotate-45">
                            <Target className="h-80 w-80 text-white" />
                        </div>
                    </div>

                    {/* Misi - Wide Card */}
                    <div className="lg:col-span-7 relative flex flex-col group overflow-hidden rounded-[2.5rem] bg-white border border-gray-200 p-12 shadow-sm transition-all hover:border-brand-primary/20">
                        <div className="relative z-10">
                            <div className="flex items-center gap-x-4 mb-8">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-white">
                                    <Rocket className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-primary">
                                    Misi Perusahaan
                                </h3>
                            </div>
                            <ul className="grid grid-cols-1 gap-6">
                                {content?.mission
                                    ?.split("\n")
                                    .map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 text-gray-700"
                                        >
                                            <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                                                <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                                            </div>
                                            <span className="text-lg leading-relaxed">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamSection({ members }: { members: TeamMember[] }) {
    if (!members || members.length === 0) return null;

    return (
        <section className="py-24 sm:py-32 bg-brand-primary/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Talenta terbaik yang berdedikasi menciptakan inovasi digital setiap hari.
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {members.map((person) => (
                        <div key={person.name} className="group relative">
                            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gray-200">
                                <img
                                    src={person.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=003366&color=fff&size=512`}
                                    alt={person.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
                                
                                {/* Social Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                        <Twitter className="h-5 w-5" />
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                    {person.name}
                                </h3>
                                <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mt-1">
                                    {person.role}
                                </p>
                                {person.bio && (
                                    <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                                        {person.bio}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CoreValues() {
    const values = [
        {
            title: "Global Mindset",
            desc: "Berfikir secara global untuk menghadirkan solusi berskala internasional.",
            icon: Users,
        },
        {
            title: "Sustainable Solutions",
            desc: "Solusi teknologi yang tidak hanya canggih, tapi juga berkelanjutan.",
            icon: Globe,
        },
        {
            title: "Integrity First",
            desc: "Kepercayaan adalah pondasi utama dalam setiap kerjasama kami.",
            icon: Quote,
        },
    ];

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                    {values.map((v, i) => (
                        <div key={i} className="flex flex-col group p-6 rounded-3xl hover:bg-gray-50 transition-colors">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white mb-6 group-hover:scale-110 transition-transform">
                                <v.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {v.title}
                                </h3>
                                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
