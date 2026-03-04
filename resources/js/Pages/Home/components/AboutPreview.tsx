import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

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
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <div>
                        <div className="mb-4">
                            <span className="inline-flex items-center rounded-full bg-brand-primary/8 px-3 py-1 text-sm font-semibold text-brand-primary ring-1 ring-brand-primary/15">
                                Tentang Kami
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                            Mengenal Lebih Dekat
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-500 line-clamp-4">
                            {about.description}
                        </p>
                        <div className="mt-8">
                            <Link href="/tentang-kami">
                                <PrimaryButton>Selengkapnya</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                    {/* Visual Placeholder / Additional Info */}
                    <div className="relative overflow-hidden rounded-3xl bg-brand-secondary p-8 shadow-inner ring-1 ring-gray-100 lg:p-12">
                        <div className="relative z-10">
                            {about.vision && (
                                <div className="mb-8">
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-brand-primary">
                                        <svg
                                            className="h-6 w-6 text-brand-accent"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                        Visi
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-gray-500 line-clamp-3">
                                        {about.vision}
                                    </p>
                                </div>
                            )}
                            {about.mission && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-brand-primary">
                                        <svg
                                            className="h-6 w-6 text-brand-accent"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        Misi
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-gray-500 line-clamp-3">
                                        {about.mission}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Decorative background meshes */}
                        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-accent/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-primary/5 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
