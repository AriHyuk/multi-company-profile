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
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -z-10 h-72 w-72 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-3xl opacity-50" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Colon Kiri: Text Content */}
                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-semibold text-brand-primary ring-1 ring-inset ring-brand-primary/20 transition-all hover:bg-brand-primary/15">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                                Tentang Kami
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-5xl leading-tight">
                            Membangun Masa Depan <br />
                            <span className="text-brand-accent italic">
                                Digital
                            </span>{" "}
                            Bersama Kami
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-gray-600 line-clamp-4">
                            {about.description}
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/tentang-kami">
                                <PrimaryButton className="group flex items-center gap-2 px-8 py-4 text-base shadow-lg shadow-brand-primary/20 transition-all hover:translate-y-[-2px]">
                                    Kenali Kami Lebih Jauh
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    {/* Kolom Kanan: Visual Bento Preview */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Vision Card */}
                        {about.vision && (
                            <div className="col-span-2 relative overflow-hidden rounded-3xl bg-brand-primary p-8 shadow-xl transition-all hover:scale-[1.02] duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Target className="h-24 w-24 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-accent">
                                        <Target className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Visi Kami
                                    </h3>
                                    <p className="text-blue-100 text-sm leading-relaxed line-clamp-3">
                                        {about.vision}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Mission Card */}
                        {about.mission && (
                            <div className="col-span-2 sm:col-span-1 relative overflow-hidden rounded-3xl bg-slate-50 p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent text-white">
                                    <Rocket className="h-4 w-4" />
                                </div>
                                <h3 className="text-lg font-bold text-brand-primary mb-1">
                                    Misi
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 italic">
                                    "{about.mission}"
                                </p>
                            </div>
                        )}

                        {/* Experience Card (Static/Calculated) */}
                        <div className="col-span-2 sm:col-span-1 relative overflow-hidden rounded-3xl bg-brand-accent/5 p-6 border border-brand-accent/20 flex flex-col items-center justify-center text-center">
                            <div className="text-4xl font-bold text-brand-primary mb-1">
                                {about.founded_year
                                    ? new Date().getFullYear() -
                                      about.founded_year
                                    : "10"}
                                +
                            </div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                                Tahun <br /> Berkarya
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
