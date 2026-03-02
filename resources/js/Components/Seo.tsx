import { Head, usePage } from "@inertiajs/react";

interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export default function Seo({ title, description, image, url }: SeoProps) {
    const { props } = usePage();
    const appName = "Multi Company Profiles"; // Fallback atau ambil dari props global jika ada

    const pageTitle = title ? `${title} | ${appName}` : appName;
    const currentUrl = url || window.location.href;
    const defaultDescription =
        "Layanan terbaik untuk kebutuhan perusahaan Anda.";
    const pageDescription = description || defaultDescription;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            {image && <meta property="twitter:image" content={image} />}
        </Head>
    );
}
