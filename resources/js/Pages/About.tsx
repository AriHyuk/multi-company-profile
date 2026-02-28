import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

interface AboutContent {
    id: number;
    description: string;
    vision: string;
    mission: string;
    founded_year: number;
    logo: string | null;
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string;
    order: number;
    is_active: boolean;
}

interface Props {
    content: AboutContent;
    teams: TeamMember[];
}

export default function About({ content, teams }: Props) {
    return (
        <PublicLayout>
            <Head title="Tentang Kami - Multi Company Profiles" />

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

                    {/* Team Section */}
                    {teams && teams.length > 0 && (
                        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Tim Kami
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Orang-orang dibalik layar yang terus
                                    berinovasi dan berkarya membangun layanan
                                    terbaik untuk Anda.
                                </p>
                            </div>
                            <ul
                                role="list"
                                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                            >
                                {teams.map((person) => (
                                    <li
                                        key={person.id}
                                        className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="h-48 w-full bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                                            {person.photo ? (
                                                <img
                                                    className="object-cover h-full w-full"
                                                    src={person.photo}
                                                    alt={person.name}
                                                />
                                            ) : (
                                                <svg
                                                    className="h-24 w-24 text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm font-semibold leading-6 text-blue-600">
                                                {person.role}
                                            </p>
                                        </div>
                                        <p className="text-base leading-7 text-gray-600 flex-grow">
                                            {person.bio}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
