import { Link } from "@inertiajs/react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CtaBannerProps {
    ctaUrl: string;
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function CtaBanner({ ctaUrl }: CtaBannerProps) {
    return (
        <section className="bg-brand-primary py-16">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Siap memulai proyek Anda?
                </h2>
                <p className="mt-4 text-lg text-white/70">
                    Hubungi kami sekarang dan dapatkan konsultasi gratis bersama
                    tim ahli kami.
                </p>
                <Link
                    href={ctaUrl}
                    className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-brand-primary shadow-lg transition hover:bg-brand-secondary"
                >
                    Mulai Konsultasi Gratis
                </Link>
            </div>
        </section>
    );
}
