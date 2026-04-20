import Seo from "@/Components/Seo";
import PublicLayout from "@/Layouts/PublicLayout";
import HeroSection from "./Home/components/HeroSection";
import AboutPreview from "./Home/components/AboutPreview";
import ServicesPreview from "./Home/components/ServicesPreview";
import FeaturedProjects from "./Home/components/FeaturedProjects";
import TeamPreview from "./Home/components/TeamPreview";
import CtaBanner from "./Home/components/CtaBanner";
import ContactSection from "./Home/components/ContactSection";

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
            <AboutPreview about={aboutContent} />
            <ServicesPreview services={servicesPreview} />
            <TeamPreview members={teamPreview} />
            <FeaturedProjects />
            <CtaBanner ctaUrl={hero.ctaUrl} />
            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
