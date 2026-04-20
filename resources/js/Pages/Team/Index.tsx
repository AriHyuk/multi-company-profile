import PublicLayout from "@/Layouts/PublicLayout";
import Seo from "@/Components/Seo";
import ContactSection from "@/Components/Sections/ContactSection";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string | null;
}

interface Props {
    team: TeamMember[];
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function Index({ team, contact }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Tim Kami"
                description="Kenali tim ahli di balik kesuksesan project-project DIGIKOVA."
            />

            {/* Header Section */}
            <section className="bg-brand-primary py-24 sm:py-32 relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    {/* Eyebrow */}
                    <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-white/20 mb-6 tracking-wider uppercase">
                        People Behind DIGIKOVA
                    </span>
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                        Bukan Sekadar Tim —{" "}
                        <span className="text-brand-accent">
                            Ini Keluarga Inovator
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-blue-100/80 sm:text-xl">
                        Di balik setiap solusi digital yang kami bangun, ada
                        individu-individu luar biasa yang berkolaborasi tanpa
                        henti. Kenali mereka — para arsitek masa depan digital
                        bisnis Anda.
                    </p>
                </div>
            </section>


            {/* Team Grid */}
            <section className="bg-slate-50 py-20 dark:bg-midnight-surface">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {team.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {team.map((member) => (
                                <div
                                    key={member.id}
                                    className="group relative flex flex-col items-center bg-white rounded-3xl p-8 ring-1 ring-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-brand-primary/20"
                                >
                                    {/* Circular Photo */}
                                    <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full ring-4 ring-gray-50 shadow-lg group-hover:ring-brand-primary/20 transition-all duration-500">
                                        {member.photo ? (
                                            <img
                                                src={`/storage/${member.photo}`}
                                                alt={member.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="h-full w-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-4xl font-bold uppercase">
                                                {member.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>

                                    {/* Detail */}
                                    <div className="mt-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                                            {member.role}
                                        </p>
                                        {member.bio && (
                                            <p className="mt-4 text-sm text-gray-500 line-clamp-3 leading-relaxed">
                                                {member.bio}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl ring-1 ring-gray-100">
                            <p className="text-gray-500">
                                Belum ada tim yang ditambahkan.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}
