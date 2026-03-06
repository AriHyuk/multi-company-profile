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
        <div className="hero-animate-5 mt-10 flex items-center gap-8">
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
function HeroVisual() {
    return (
        <div className="hero-animate-2 flex items-center justify-center lg:justify-end w-full lg:-mt-28">
            <div className="hero-visual-float relative w-full h-[480px] sm:h-[550px] max-w-[500px] lg:max-w-[540px]">
                {/* Background glow */}
                <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 blur-3xl z-0" />

                {/* Bento Grid layout */}
                <div className="relative h-full w-full z-10">
                    {/* Main big card: Performance Chart */}
                    <div className="absolute top-0 left-4 right-12 sm:right-16 bottom-[52%] rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-brand-primary/10 ring-1 ring-black/5 p-5 sm:p-6 flex flex-col justify-between overflow-hidden group">
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900">
                                    Traffic Growth
                                </h3>
                                <p className="text-[10px] sm:text-xs text-brand-primary font-medium">
                                    +142% this month
                                </p>
                            </div>
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Abstract Chart Bars */}
                        <div className="relative z-10 mt-6 flex items-end gap-2 h-24 sm:h-28">
                            {[40, 60, 30, 80, 50, 90, 100].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-full bg-brand-primary/10 rounded-t-md relative overflow-hidden group-hover:bg-brand-primary/20 transition-colors duration-500"
                                    style={{ height: `${h}%` }}
                                >
                                    <div
                                        className="absolute bottom-0 w-full bg-brand-primary transition-all duration-700 delay-100"
                                        style={{
                                            height: h > 70 ? "100%" : "0%",
                                        }}
                                    />
                                    {h > 70 && (
                                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-brand-primary to-brand-accent opacity-80" />
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Decorative mesh */}
                        <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-brand-accent/20 blur-2xl rounded-full pointer-events-none" />
                    </div>

                    {/* Small Card: Code Snippet */}
                    <div className="absolute top-[52%] left-4 right-[35%] sm:right-[40%] bottom-0 rounded-3xl bg-gray-950 shadow-2xl shadow-gray-900/40 ring-1 ring-white/10 p-5 overflow-hidden flex flex-col">
                        <div className="flex items-center gap-1.5 mb-4">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="font-mono text-[10px] sm:text-xs text-brand-accent space-y-2 lg:space-y-2.5 opacity-90 overflow-hidden">
                            <p>
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-blue-400">App</span> = (){" "}
                                {"=>"} {"{"}
                            </p>
                            <p className="pl-4">
                                <span className="text-purple-400">return</span>{" "}
                                (
                            </p>
                            <p className="pl-6 sm:pl-8 text-gray-300">
                                {"<Digikova"}
                            </p>
                            <p className="pl-10 sm:pl-12 text-teal-300">
                                quality<span className="text-white">=</span>
                                <span className="text-green-300">
                                    "premium"
                                </span>
                            </p>
                            <p className="pl-10 sm:pl-12 text-teal-300">
                                speed<span className="text-white">=</span>
                                <span className="text-purple-400">{"{"}</span>
                                <span className="text-orange-300">100</span>
                                <span className="text-purple-400">{"}"}</span>
                            </p>
                            <p className="pl-6 sm:pl-8 text-gray-300">{"/>"}</p>
                            <p className="pl-4">);</p>
                            <p>{"}"};</p>
                        </div>
                    </div>

                    {/* Small Card: UI/Design Elements */}
                    <div className="absolute top-[15%] right-0 sm:-right-4 h-20 rounded-3xl bg-white shadow-2xl shadow-brand-primary/10 ring-1 ring-black/5 flex items-center p-3 gap-3 z-20">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary p-2.5 text-white shadow-inner flex-shrink-0">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                        </div>
                        <div className="pr-4 whitespace-nowrap hidden sm:block">
                            <h4 className="text-sm font-bold text-gray-800">
                                Pixel Perfect
                            </h4>
                            <p className="text-[10px] text-gray-500">
                                Design Systems
                            </p>
                        </div>
                    </div>

                    {/* Floating Notifications */}
                    <div
                        className="absolute -bottom-4 left-10 sm:left-12 rounded-2xl bg-gray-950/90 backdrop-blur-md shadow-2xl ring-1 ring-white/10 px-4 py-3 flex items-center gap-3 z-30 animate-bounce"
                        style={{ animationDuration: "3s" }}
                    >
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-xs font-medium text-white">
                            Deploy{" "}
                            <span className="text-green-400">Success</span>
                        </p>
                    </div>
                    {/* Decorative blobs */}
                    <div className="hero-drift absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-accent/30 blur-2xl -z-10" />
                    <div
                        className="hero-drift absolute -bottom-10 left-[40%] h-40 w-40 rounded-full bg-brand-primary/30 blur-3xl -z-10"
                        style={{ animationDelay: "2s" }}
                    />
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
        <section className="relative overflow-hidden bg-brand-secondary">
            {/* Self-contained animation keyframes */}
            <style dangerouslySetInnerHTML={{ __html: heroAnimationStyles }} />

            {/* Ambient background orbs */}
            <div className="hero-orb-pulse pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-brand-accent opacity-10 blur-[140px]" />
            <div
                className="hero-orb-pulse pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-brand-primary opacity-5 blur-[120px]"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative mx-auto max-w-7xl w-full px-4 pt-4 pb-20 sm:px-6 sm:pt-6 sm:pb-24 lg:px-8">
                {/* Split-Screen Grid */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left column — copywriting */}
                    <div className="flex flex-col items-start text-left lg:-mt-28">
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
