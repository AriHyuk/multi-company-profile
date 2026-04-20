import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Target, Rocket, ArrowRight } from "lucide-react";

interface AboutProps {
    about: {
        description: string;
        vision: string | null;
        mission: string | null;
        founded_year: number | null;
    } | null;
}

export default function AboutPreview({ about }: AboutProps) {
    if (!about || !about.description) return null;

    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 transition-colors duration-300 dark:bg-midnight-surface">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-[120px] opacity-50 dark:bg-brand-accent/10" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-primary/10 blur-[100px] opacity-30 dark:bg-brand-primary/20" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Colon Kiri: Text Content */}
                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 transition-all hover:bg-brand-accent/15">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                                Tentang Kami
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-brand-primary dark:text-white sm:text-5xl leading-tight">
                            Membangun Masa Depan <br />
                            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent italic dark:from-brand-accent dark:to-blue-400">
                                Digital
                            </span>{" "}
                            Bersama Kami
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-slate-300 line-clamp-4">
                            {about.description}
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/tentang-kami">
                                <PrimaryButton className="group flex items-center gap-2 px-8 py-4 text-base shadow-lg shadow-brand-primary/10 transition-all hover:translate-y-[-2px] dark:shadow-brand-accent/10">
                                    Kenali Kami Lebih Jauh
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    {/* Kolom Kanan: Visual Bento Preview */}
                    <div className="flex flex-col gap-4 justify-center">
                        {/* Vision Card */}
                        {about.vision && (
                            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200 transition-all hover:scale-[1.01] hover:ring-brand-primary/30 duration-300 dark:bg-midnight-bg dark:shadow-2xl dark:shadow-black/40 dark:ring-white/5 dark:hover:ring-brand-accent/30">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.04] dark:opacity-[0.06]">
                                    <Target className="h-20 w-20 text-brand-primary dark:text-brand-accent" />
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent">
                                        <Target className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-base font-bold text-brand-primary mb-1.5 dark:text-white">
                                        Visi Kami
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed dark:text-slate-400" style={{whiteSpace: 'pre-line'}}>
                                        {about.vision}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Mission Card */}
                        {about.mission && (
                            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200 transition-all hover:scale-[1.01] hover:ring-brand-primary/30 duration-300 dark:bg-midnight-bg dark:shadow-2xl dark:shadow-black/40 dark:ring-white/5 dark:hover:ring-brand-accent/30">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.04] dark:opacity-[0.06]">
                                    <Rocket className="h-20 w-20 text-brand-primary dark:text-brand-accent" />
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white dark:bg-brand-accent/20 dark:text-brand-accent">
                                        <Rocket className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-base font-bold text-brand-primary mb-1.5 dark:text-white">
                                        Misi Kami
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed dark:text-slate-400">
                                        {about.mission}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
