import { Link } from "@inertiajs/react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string | null;
}

export default function TeamPreview({ members }: { members: TeamMember[] }) {
    if (!members || members.length === 0) {
        return null;
    }

    return (
        <section className="bg-white py-20 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                        Tim Ahli Kami
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Di balik setiap project sukses, ada tim yang berdedikasi
                        tinggi. Kenali orang-orang hebat di balik DIGIKOVA.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className="group relative flex flex-col items-center bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10"
                        >
                            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-brand-secondary">
                                {member.photo ? (
                                    <img
                                        src={`/storage/${member.photo}`}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-2xl font-bold uppercase">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-accent">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/tim"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-brand-primary hover:bg-gray-50 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                        Lihat Tim Lengkap
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
