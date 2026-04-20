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
    ChevronRight,
} from "lucide-react";
import ContactSection from "@/Components/Sections/ContactSection";
import SectionDivider from "@/Components/Sections/SectionDivider";

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

            <div className="relative bg-white transition-colors duration-300 dark:bg-midnight-bg pt-16">
                {/* Visual Enhancements: Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none dark:opacity-[0.05]">
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
                    
                    <SectionDivider 
                        fromColor="bg-white dark:bg-midnight-bg" 
                        toColor="text-slate-50 dark:text-midnight-surface" 
                        direction="down" 
                    />
                    
                    <StatsGrid content={content} />
                    
                    <SectionDivider 
                        fromColor="bg-slate-50 dark:bg-midnight-surface" 
                        toColor="text-white dark:text-midnight-bg" 
                        direction="up" 
                    />
                    
                    <VisionMission content={content} />
                    
                    <SectionDivider 
                        fromColor="bg-white dark:bg-midnight-bg" 
                        toColor="text-slate-50 dark:text-midnight-surface" 
                        direction="down" 
                    />
                    
                    <TeamSection members={teamMembers} />
                    
                    <SectionDivider 
                        fromColor="bg-slate-50 dark:bg-midnight-surface" 
                        toColor="text-white dark:text-midnight-bg" 
                        direction="up" 
                    />
                    
                    <CoreValues />

                    <SectionDivider 
                        fromColor="bg-white dark:bg-midnight-bg" 
                        toColor="text-slate-50 dark:text-midnight-surface" 
                        direction="down" 
                    />
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
                        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary ring-1 ring-inset ring-brand-primary/20 mb-6 animate-pulse dark:bg-brand-accent/10 dark:text-brand-accent dark:ring-brand-accent/20">
                            {new Date().getFullYear() -
                                (content?.founded_year ?? 2015)}{" "}
                            Tahun Berkarya
                        </span>
                        <h1 className="text-5xl font-extrabold tracking-tight text-brand-primary sm:text-7xl leading-[1.1] dark:text-white">
                            Digitalizing <br />
                            <span className="gradient-text bg-gradient-to-r from-brand-primary to-brand-bridge bg-clip-text text-transparent dark:from-brand-accent dark:to-brand-bridge">
                                Innovation
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-xl dark:text-slate-300">
                            {content?.description ??
                                "Kami adalah mitra strategis untuk transformasi digital bisnis Anda."}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button className="rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-brand-primary/90 transition-all hover:scale-105 active:scale-95 dark:bg-brand-accent dark:text-midnight-bg dark:hover:bg-brand-accent/90">
                                Pelajari Selengkapnya
                            </button>
                            <a
                                href="#vision"
                                className="text-sm font-semibold leading-6 text-brand-primary flex items-center gap-1 group dark:text-brand-accent"
                            >
                                Lihat Visi Misi{" "}
                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    <div className="relative lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-primary/10 aspect-[4/3] group dark:ring-white/10">
                            <img
                                src="/images/about-hero.png"
                                alt="Innovation Hub"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-60 dark:from-brand-accent/20" />
                            
                            {/* Floating Decorative Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white dark:bg-midnight-bg/40">
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
        <section className="py-12 bg-gray-50/50 transition-colors duration-300 dark:bg-midnight-surface/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 transition-all hover:-translate-y-1 hover:shadow-md h-32 dark:bg-midnight-surface dark:border-white/5 dark:shadow-2xl"
                        >
                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent whitespace-nowrap dark:bg-brand-accent/20`}>
                                <stat.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-primary dark:text-brand-accent">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest dark:text-slate-400">
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
                    <div className="lg:col-span-5 relative flex flex-col group overflow-hidden rounded-[2.5rem] bg-brand-primary p-12 shadow-2xl ring-1 ring-white/10 dark:bg-midnight-bg dark:ring-brand-accent/20">
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
                    <div className="lg:col-span-7 relative flex flex-col group overflow-hidden rounded-[2.5rem] bg-white border border-gray-200 p-12 shadow-sm transition-all hover:border-brand-primary/20 dark:bg-midnight-surface dark:border-white/10 dark:shadow-2xl dark:hover:border-brand-accent/40">
                        <div className="relative z-10">
                            <div className="flex items-center gap-x-4 mb-8">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-white">
                                    <Rocket className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-primary dark:text-brand-accent">
                                    Misi Perusahaan
                                </h3>
                            </div>
                            <ul className="grid grid-cols-1 gap-6">
                                {content?.mission
                                    ?.split("\n")
                                    .map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 text-gray-700 dark:text-slate-300"
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
        <section className="py-24 sm:py-32 bg-slate-50 transition-colors duration-300 dark:bg-midnight-surface relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none opacity-40 dark:bg-brand-accent/5" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none opacity-30 dark:bg-brand-primary/10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl dark:text-white">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-slate-400">
                        Talenta terbaik yang berdedikasi menciptakan inovasi digital setiap hari.
                    </p>
                </div>

                <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {members.map((person) => (
                        <div
                            key={person.id}
                            className="group relative flex flex-col items-center bg-white rounded-3xl p-8 ring-1 ring-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:ring-brand-primary/30 dark:bg-midnight-bg dark:ring-white/5 dark:shadow-2xl dark:hover:ring-brand-accent/30"
                        >
                            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-gray-50 shadow-xl dark:ring-midnight-surface dark:shadow-2xl">
                                {person.photo ? (
                                    <img
                                        src={`/storage/${person.photo}`}
                                        alt={person.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-2xl font-bold uppercase">
                                        {person.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-bridge transition-colors dark:text-white dark:group-hover:text-brand-accent">
                                    {person.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-primary/70 dark:text-brand-accent/70">
                                    {person.role}
                                </p>
                                {person.bio && (
                                    <p className="mt-3 text-sm text-gray-500 line-clamp-2 dark:text-slate-400">
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
                        <div key={i} className="flex flex-col group p-6 rounded-3xl hover:bg-slate-50 transition-colors dark:hover:bg-midnight-surface">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white mb-6 group-hover:scale-110 transition-transform dark:bg-brand-accent dark:text-midnight-bg">
                                <v.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {v.title}
                                </h3>
                                <p className="mt-4 text-lg text-gray-600 leading-relaxed dark:text-slate-400">
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
