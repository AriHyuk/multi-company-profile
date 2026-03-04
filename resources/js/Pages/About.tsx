import Seo from "@/Components/Seo";
import PublicLayout from "@/Layouts/PublicLayout";

interface AboutContent {
    id: number;
    description: string;
    vision: string;
    mission: string;
    founded_year: number;
    logo: string | null;
}

interface Props {
    content: AboutContent;
}

export default function About({ content }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Tentang Kami"
                description={
                    content?.description ??
                    "Informasi tentang perusahaan, visi, dan misi kami."
                }
            />

            <div className="py-24 bg-white sm:py-32">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Tentang Kami
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {[
                                content?.founded_year
                                    ? `Didirikan pada tahun ${content.founded_year}. `
                                    : "",
                                content?.description ??
                                    "Deskripsi perusahaan belum tersedia.",
                            ].join("")}
                        </p>
                    </div>

                    {/* Vision & Mission */}
                    <div className="mt-20 mx-auto max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                            <div className="flex flex-col items-start p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                                <dt className="text-xl font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    </div>
                                    Visi Kami
                                </dt>
                                <dd className="mt-6 text-base leading-7 text-gray-600">
                                    {content?.vision ??
                                        "Visi perusahaan belum tersedia."}
                                </dd>
                            </div>

                            <div className="flex flex-col items-start p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                                <dt className="text-xl font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.45m0 0a15.01 15.01 0 0 1 2.448-2.45"
                                            />
                                        </svg>
                                    </div>
                                    Misi Kami
                                </dt>
                                <dd className="mt-6 text-base leading-7 text-gray-600">
                                    {content?.mission ??
                                        "Misi perusahaan belum tersedia."}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
