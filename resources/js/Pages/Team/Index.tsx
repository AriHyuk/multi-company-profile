import PublicLayout from "@/Layouts/PublicLayout";
import Seo from "@/Components/Seo";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string | null;
    bio: string | null;
}

export default function Index({ team }: { team: TeamMember[] }) {
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
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Orang di Balik Layar
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 sm:text-xl">
                        Kami adalah kumpulan profesional yang memiliki passion
                        tinggi pada teknologi dan desain. Berkomitmen memberikan
                        hasil terbaik untuk setiap partner.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="bg-brand-secondary py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {team.length > 0 ? (
                        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {team.map((member) => (
                                <div
                                    key={member.id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                >
                                    {/* Photo Container */}
                                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                                        {member.photo ? (
                                            <img
                                                src={`/storage/${member.photo}`}
                                                alt={member.name}
                                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="h-full w-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-5xl font-bold uppercase">
                                                {member.name.charAt(0)}
                                            </div>
                                        )}
                                        {/* Gradient Overlay bottom to top */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Detail */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {member.name}
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-accent">
                                            {member.role}
                                        </p>

                                        {member.bio && (
                                            <p className="mt-4 text-sm text-gray-500 line-clamp-3">
                                                {member.bio}
                                            </p>
                                        )}

                                        <div className="mt-auto pt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="h-1 w-12 bg-brand-primary rounded-full group-hover:w-full transition-all duration-500" />
                                        </div>
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
        </PublicLayout>
    );
}
