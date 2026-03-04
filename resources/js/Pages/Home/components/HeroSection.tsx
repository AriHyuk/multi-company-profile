import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroProps {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaUrl: string;
}

// ─── Animation Keyframes ──────────────────────────────────────────────────────

/**
 * Injected inline to keep the component self-contained without touching
 * app.css or requiring an animation library.
 *
 * - fadeInUp  → staggered entrance for copywriting elements (left col)
 * - float     → looping breathing/float for the visual placeholder (right col)
 * - pulse-glow → ambient orb undulation
 * - spin-slow  → very slow ring rotation
 * - drift      → geometric blob drift inside the glass card
 */
const heroAnimationStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33%       { transform: translateY(-12px) rotate(1.5deg); }
    66%       { transform: translateY(-6px) rotate(-1deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.12; transform: scale(1); }
    50%       { opacity: 0.22; transform: scale(1.08); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%       { transform: translate(8px, -10px) scale(1.04); }
  }
  .hero-animate-1 { animation: fadeInUp 0.7s ease both; animation-delay: 0.1s; }
  .hero-animate-2 { animation: fadeInUp 0.7s ease both; animation-delay: 0.3s; }
  .hero-animate-3 { animation: fadeInUp 0.7s ease both; animation-delay: 0.5s; }
  .hero-animate-4 { animation: fadeInUp 0.7s ease both; animation-delay: 0.7s; }
  .hero-animate-5 { animation: fadeInUp 0.6s ease both; animation-delay: 0.9s; }
  .hero-visual-float { animation: float 6s ease-in-out infinite; }
  .hero-orb-pulse    { animation: pulse-glow 4s ease-in-out infinite; }
  .hero-ring-spin    { animation: spin-slow 20s linear infinite; }
  .hero-drift        { animation: drift 8s ease-in-out infinite; }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated live-dot badge in the top-left of the hero */
function HeroBadge() {
    return (
        <div className="hero-animate-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/8 px-4 py-1.5 text-sm font-semibold text-brand-primary ring-1 ring-brand-primary/15">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                DIGIKOVA Digital Agency
            </span>
        </div>
    );
}

/** Split gradient heading — highlights "digital" and "bisnis" words */
function HeroHeading({ title }: { title: string }) {
    return (
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
    );
}

/** CTA buttons row */
function HeroCTAs({
    ctaLabel,
    ctaUrl,
}: Pick<HeroProps, "ctaLabel" | "ctaUrl">) {
    return (
        <div className="hero-animate-4 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={ctaUrl}>
                <PrimaryButton className="px-8 py-3.5 text-base capitalize shadow-xl shadow-brand-primary/25 transition-all hover:scale-105 hover:shadow-brand-primary/40">
                    {ctaLabel}
                </PrimaryButton>
            </Link>
            <Link href="/portfolio">
                <SecondaryButton className="px-8 py-3.5 text-base capitalize border-brand-primary/15 text-brand-primary hover:bg-brand-primary/5 transition-all hover:scale-105">
                    Lihat Portofolio
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
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
    );
}

/** Stat counters below the CTA */
const STATS = [
    { value: "50+", label: "Proyek Selesai" },
    { value: "20+", label: "Klien Puas" },
    { value: "5★", label: "Rating" },
] as const;

function HeroStats() {
    return (
        <div className="hero-animate-5 mt-12 flex items-center gap-8">
            {STATS.map((stat, i) => (
                <>
                    {i > 0 && (
                        <div
                            key={`sep-${i}`}
                            className="h-10 w-px bg-gray-200"
                        />
                    )}
                    <div key={stat.label} className="flex flex-col">
                        <span className="text-3xl font-black text-brand-primary leading-none">
                            {stat.value}
                        </span>
                        <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                            {stat.label}
                        </span>
                    </div>
                </>
            ))}
        </div>
    );
}

/** Glassmorphism visual placeholder (right column) */
const VISUAL_TAGS = ["Design", "Code", "Launch"] as const;

function HeroVisual() {
    return (
        <div className="hero-animate-2 flex items-center justify-center lg:justify-end">
            <div className="hero-visual-float relative w-full max-w-[480px] aspect-square">
                {/* Slow-spinning outer rings */}
                <div className="hero-ring-spin absolute inset-0 rounded-full border border-brand-accent/20" />
                <div
                    className="hero-ring-spin absolute inset-4 rounded-full border border-brand-primary/10"
                    style={{
                        animationDirection: "reverse",
                        animationDuration: "30s",
                    }}
                />

                {/* Glassmorphism card */}
                <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-white/70 via-white/50 to-brand-accent/10 backdrop-blur-xl shadow-2xl shadow-brand-primary/15 ring-1 ring-white/60 flex items-center justify-center overflow-hidden">
                    {/* Gradient mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-accent/15" />

                    {/* Drifting blobs */}
                    <div className="hero-drift absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-primary/20 blur-2xl" />
                    <div
                        className="hero-drift absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-brand-primary/25 to-brand-accent/15 blur-xl"
                        style={{ animationDelay: "4s" }}
                    />

                    {/* Inner placeholder content */}
                    <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent shadow-lg shadow-brand-primary/30">
                            <svg
                                className="h-10 w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                                />
                            </svg>
                        </div>

                        <p className="text-sm font-semibold tracking-widest text-brand-primary/50 uppercase">
                            Hero Visual
                        </p>
                        <p className="text-xs text-gray-400 max-w-[160px] leading-relaxed">
                            Tempatkan aset gambar hero Anda di sini
                        </p>

                        {/* Tag pills */}
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                            {VISUAL_TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-brand-primary/8 px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/15"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Corner accent dots */}
                    <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-brand-accent/60" />
                    <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-brand-primary/40" />
                    <div className="absolute top-1/2 left-4 h-1.5 w-8 rounded-full bg-brand-accent/30" />
                </div>

                {/* Floating badge chips */}
                <div className="absolute -top-2 left-1/4 rounded-xl bg-white px-3 py-1.5 shadow-lg shadow-brand-primary/10 ring-1 ring-gray-100">
                    <span className="text-xs font-bold text-brand-primary">
                        ⚡ Fast Delivery
                    </span>
                </div>
                <div className="absolute -bottom-2 right-1/4 rounded-xl bg-white px-3 py-1.5 shadow-lg shadow-brand-primary/10 ring-1 ring-gray-100">
                    <span className="text-xs font-bold text-brand-accent">
                        ✦ Premium Quality
                    </span>
                </div>
            </div>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function HeroSection({
    title,
    subtitle,
    ctaLabel,
    ctaUrl,
}: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-brand-secondary min-h-[90vh] flex items-center">
            {/* Self-contained animation keyframes */}
            <style dangerouslySetInnerHTML={{ __html: heroAnimationStyles }} />

            {/* Ambient background orbs */}
            <div className="hero-orb-pulse pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-brand-accent opacity-10 blur-[140px]" />
            <div
                className="hero-orb-pulse pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-brand-primary opacity-5 blur-[120px]"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                {/* Split-Screen Grid */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left column — copywriting */}
                    <div className="flex flex-col items-start text-left">
                        <HeroBadge />
                        <HeroHeading title={title} />
                        <p className="hero-animate-3 mt-6 max-w-lg text-lg leading-relaxed text-gray-500 sm:text-xl">
                            {subtitle}
                        </p>
                        <HeroCTAs ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
                        <HeroStats />
                    </div>

                    {/* Right column — visual */}
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}
