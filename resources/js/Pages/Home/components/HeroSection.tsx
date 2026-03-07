import { Link } from "@inertiajs/react";
import React, { memo } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { HERO_ANIMATIONS } from "./HeroAnimations";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroProps {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaUrl: string;
    imageUrl?: string; // New prop for company image/poster
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const HeroBadge = memo(() => (
    <div className="hero-animate-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/8 px-4 py-1.5 text-sm font-semibold text-brand-primary ring-1 ring-brand-primary/15">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
            </span>
            DIGIKOVA Digital Agency
        </span>
    </div>
));

const HeroHeading = memo(({ title }: { title: string }) => (
    <h1 className="hero-animate-2 mt-6 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-brand-primary sm:text-5xl xl:text-6xl">
        {title.split(" ").map((word, i) =>
            word.toLowerCase() === "digital" ||
            word.toLowerCase() === "bisnis" ? (
                <span
                    key={i}
                    className="bg-gradient-to-r from-brand-primary via-brand-bridge to-brand-accent bg-clip-text text-transparent"
                >
                    {word}{" "}
                </span>
            ) : (
                <span key={i}>{word} </span>
            ),
        )}
    </h1>
));

const HeroCTAs = memo(
    ({ ctaLabel, ctaUrl }: Pick<HeroProps, "ctaLabel" | "ctaUrl">) => (
        <div className="hero-animate-4 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={ctaUrl}>
                <PrimaryButton className="px-8 py-3.5 text-base capitalize shadow-xl shadow-brand-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/50 hover:ring-2 hover:ring-brand-accent/50">
                    {ctaLabel}
                </PrimaryButton>
            </Link>
            <Link href="/portfolio">
                <SecondaryButton className="group px-8 py-3.5 text-base capitalize border-brand-primary/15 text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover:-translate-y-1">
                    Lihat Portofolio
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </SecondaryButton>
            </Link>
        </div>
    ),
);

const STATS = [
    { value: "50+", label: "Proyek Selesai" },
    { value: "20+", label: "Klien Puas" },
    { value: "5★", label: "Rating" },
] as const;

const HeroStats = memo(() => (
    <div className="hero-animate-5 mt-10 flex items-center gap-8">
        {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
                {i > 0 && <div className="h-10 w-px bg-gray-200" />}
                <div className="flex flex-col">
                    <span className="text-3xl font-black text-brand-primary leading-none">
                        {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {stat.label}
                    </span>
                </div>
            </React.Fragment>
        ))}
    </div>
));

// ─── Visual Component (The Image Showcase) ───────────────────────────────────

const HeroVisual = memo(({ imageUrl }: { imageUrl?: string }) => {
    const fallbackImage =
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"; // High-end office/architecture

    return (
        <div className="hero-animate-2 relative w-full h-full flex items-center justify-center lg:justify-end">
            <div className="image-parallax shadow-float relative w-full aspect-[4/3] max-w-[640px] rounded-[2.5rem] overflow-hidden group">
                {/* Image Wrapper with Glass Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-brand-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                <img
                    src={imageUrl || fallbackImage}
                    alt="DIGIKOVA Company Showcase"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Decorative Frame Elements */}
                <div className="absolute inset-4 rounded-[2rem] border border-white/20 z-20 pointer-events-none" />
                <div className="absolute inset-0 z-20 ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />

                {/* Floating Glass Label */}
                <div className="absolute bottom-8 left-8 z-30 flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-5 py-3 border border-white/20 shadow-2xl">
                    <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-sm font-bold text-white tracking-wide uppercase">
                        Company Profile
                    </span>
                </div>

                {/* Holographic Beam Effect */}
                <div className="glow-beam absolute inset-y-0 w-1/4 bg-white/20 -skew-x-12 z-20 pointer-events-none" />
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
        </div>
    );
});

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function HeroSection({
    title,
    subtitle,
    ctaLabel,
    ctaUrl,
    imageUrl,
}: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-brand-secondary selection:bg-brand-accent/30 py-8 lg:py-0">
            {/* Modular animations injection */}
            <style dangerouslySetInnerHTML={{ __html: HERO_ANIMATIONS }} />

            {/* Background light orbs */}
            <div className="hero-orb-pulse pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-brand-accent opacity-10 blur-[140px]" />
            <div
                className="hero-orb-pulse pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-brand-primary opacity-5 blur-[120px]"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8">
                {/* 40/60 Split Layout - Adjusted negative margin to lower it slightly */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[4fr_6fr] lg:min-h-[90vh] lg:-mt-8">
                    {/* Left column (4fr) */}
                    <div className="flex flex-col items-start text-left lg:py-12 z-10">
                        <HeroBadge />
                        <HeroHeading title={title} />
                        <p className="hero-animate-3 mt-8 max-w-lg text-lg leading-relaxed text-gray-500 sm:text-xl font-medium">
                            {subtitle}
                        </p>
                        <HeroCTAs ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
                        <HeroStats />
                    </div>

                    {/* Right column (6fr) */}
                    <HeroVisual imageUrl={imageUrl} />
                </div>
            </div>
        </section>
    );
}
