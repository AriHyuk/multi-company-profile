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
        <section className="bg-slate-50 py-24 relative overflow-hidden transition-colors duration-300 dark:bg-midnight-surface">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none opacity-40 dark:bg-brand-accent/5" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none opacity-30 dark:bg-brand-primary/10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl dark:text-white">
                        Tim Ahli Kami
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto dark:text-slate-400">
                        Di balik setiap project sukses, ada tim yang berdedikasi
                        tinggi. Kenali orang-orang hebat di balik DIGIKOVA.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className="group relative flex flex-col items-center bg-white rounded-3xl p-8 ring-1 ring-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:ring-brand-primary/30 dark:bg-midnight-bg dark:ring-white/5 dark:shadow-2xl dark:hover:ring-brand-accent/30"
                        >
                            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-gray-50 shadow-xl dark:ring-midnight-surface dark:shadow-2xl">
                                {member.photo ? (
                                    <img
                                        src={`/storage/${member.photo}`}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-2xl font-bold uppercase">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-bridge transition-colors dark:text-white dark:group-hover:text-brand-accent">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-primary/70 dark:text-brand-accent/70">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/tim"
                        className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/5 px-8 py-3.5 text-sm font-semibold text-brand-primary shadow-sm transition-all hover:bg-brand-primary/10 hover:border-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:border-brand-accent dark:hover:text-brand-accent"
                    >
                        Lihat Tim Lengkap
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
