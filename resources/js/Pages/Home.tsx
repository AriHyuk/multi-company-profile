import Seo from "@/Components/Seo";
import PublicLayout from "@/Layouts/PublicLayout";
import HeroSection from "./Home/components/HeroSection";
import AboutPreview from "./Home/components/AboutPreview";
import ServicesPreview from "./Home/components/ServicesPreview";
import FeaturedProjects from "./Home/components/FeaturedProjects";
import TeamPreview from "./Home/components/TeamPreview";
import ContactSection from "@/Components/Sections/ContactSection";
import SectionDivider from "@/Components/Sections/SectionDivider";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string | null;
}

interface ServicePreview {
    id: number;
    title: string;
    description: string;
    icon: string | null;
    slug: string;
}

interface Props {
    hero: {
        title: string;
        subtitle: string;
        ctaLabel: string;
        ctaUrl: string;
    };
    meta: {
        description: string;
        ogImage: string;
    };
    company: {
        name: string;
        tagline: string;
    };
    aboutContent: {
        description: string;
        vision: string | null;
        mission: string | null;
        founded_year: number | null;
    } | null;
    teamPreview: TeamMember[];
    servicesPreview: ServicePreview[];
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home({
    hero,
    meta,
    company,
    aboutContent,
    teamPreview,
    servicesPreview,
    contact,
}: Props) {
    return (
        <PublicLayout>
            <Seo
                title={`${company.name ?? "MultiCo"} — ${company.tagline ?? ""}`}
                description={meta.description}
                image={meta.ogImage}
            />
            <HeroSection
                title={hero.title}
                subtitle={hero.subtitle}
                ctaLabel={hero.ctaLabel}
                ctaUrl={hero.ctaUrl}
                imageUrl="/images/hero-poster.png"
            />

            <SectionDivider fromColor="bg-slate-50 dark:bg-midnight-bg" toColor="text-white dark:text-midnight-surface" direction="down" />

            <AboutPreview about={aboutContent} />
            
            <SectionDivider fromColor="bg-slate-50 dark:bg-midnight-surface" toColor="text-white dark:text-midnight-bg" direction="up" />

            <ServicesPreview services={servicesPreview} />

            <SectionDivider fromColor="bg-white dark:bg-midnight-bg" toColor="text-slate-50 dark:text-midnight-surface" direction="down" />

            <TeamPreview members={teamPreview} />

            <SectionDivider fromColor="bg-slate-50 dark:bg-midnight-surface" toColor="text-white dark:text-midnight-bg" direction="up" />

            <FeaturedProjects />

            <SectionDivider fromColor="bg-white dark:bg-midnight-bg" toColor="text-slate-50 dark:text-midnight-surface" direction="down" />

            <ContactSection />
        </PublicLayout>
    );
}
