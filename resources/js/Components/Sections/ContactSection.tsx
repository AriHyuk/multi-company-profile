import { useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";

export default function ContactSection() {
    const { contact } = usePage().props as any;
    
    const { data, setData, post, processing, errors, reset, wasSuccessful } =
        useForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route("contact.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <section className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 sm:py-32 dark:bg-midnight-surface">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[120px] opacity-30" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-accent/5 blur-[100px] opacity-20" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
                    <h2 className="text-base font-bold uppercase tracking-[0.2em] text-brand-primary dark:text-brand-accent">HUBUNGI KAMI</h2>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl dark:text-white">
                        Siap Memulai <span className="bg-gradient-to-r from-brand-primary to-brand-bridge bg-clip-text text-transparent dark:from-brand-accent dark:to-blue-400">Proyek Anda?</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-slate-400 transition-colors duration-300">
                        Punya pertanyaan atau butuh konsultasi? Tim kami siap membantu mewujudkan ide-ide brilian Anda dengan teknologi terkini.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-12">
                            {/* Phone */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-lg ring-1 ring-gray-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary dark:bg-midnight-bg dark:text-brand-accent dark:shadow-2xl dark:ring-white/10 dark:group-hover:bg-brand-accent dark:group-hover:ring-brand-accent">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="transition-colors duration-300">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest dark:text-slate-500">Telepon</p>
                                    <p className="mt-1 text-xl font-bold text-brand-primary tracking-tight dark:text-white">{contact.phone}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-lg ring-1 ring-gray-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary dark:bg-midnight-bg dark:text-brand-accent dark:shadow-2xl dark:ring-white/10 dark:group-hover:bg-brand-accent dark:group-hover:ring-brand-accent">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="transition-colors duration-300">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest dark:text-slate-500">Email</p>
                                    <a href={`mailto:${contact.email}`} className="mt-1 block text-xl font-bold text-brand-primary hover:text-brand-bridge transition-colors tracking-tight dark:text-white dark:hover:text-brand-accent">
                                        {contact.email}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-lg ring-1 ring-gray-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary dark:bg-midnight-bg dark:text-brand-accent dark:shadow-2xl dark:ring-white/10 dark:group-hover:bg-brand-accent dark:group-hover:ring-brand-accent">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="transition-colors duration-300">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest dark:text-slate-500">Alamat</p>
                                    <p className="mt-1 text-lg font-semibold text-gray-600 leading-relaxed max-w-sm dark:text-slate-300">
                                        {contact.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 transition-colors duration-300 sm:p-10 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100 dark:bg-midnight-bg dark:shadow-2xl dark:ring-white/5">
                        {wasSuccessful && (
                            <div className="mb-8 p-4 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-white">
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-sm">Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 ml-1 dark:text-slate-300">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        placeholder="Ketik nama lengkap..."
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-gray-50 px-4 py-3 text-brand-primary shadow-sm ring-1 ring-inset ${errors.name ? "ring-red-400" : "ring-gray-200"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm dark:bg-midnight-surface dark:text-white dark:ring-white/10 dark:placeholder:text-slate-500 dark:focus:ring-brand-accent`}
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500 ml-1 dark:text-red-400">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 ml-1 dark:text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        placeholder="email@perusahaan.com"
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-gray-50 px-4 py-3 text-brand-primary shadow-sm ring-1 ring-inset ${errors.email ? "ring-red-400" : "ring-gray-200"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm dark:bg-midnight-surface dark:text-white dark:ring-white/10 dark:placeholder:text-slate-500 dark:focus:ring-brand-accent`}
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-500 ml-1 dark:text-red-400">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 ml-1 dark:text-slate-300">
                                        No. Telepon (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData("phone", e.target.value)}
                                        placeholder="Contoh: 0812..."
                                        className="mt-2 block w-full rounded-2xl border-0 bg-gray-50 px-4 py-3 text-brand-primary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm dark:bg-midnight-surface dark:text-white dark:ring-white/10 dark:placeholder:text-slate-500 dark:focus:ring-brand-accent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 ml-1 dark:text-slate-300">
                                        Perusahaan (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData("company", e.target.value)}
                                        placeholder="Nama perusahaan Anda"
                                        className="mt-2 block w-full rounded-2xl border-0 bg-gray-50 px-4 py-3 text-brand-primary shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm dark:bg-midnight-surface dark:text-white dark:ring-white/10 dark:placeholder:text-slate-500 dark:focus:ring-brand-accent"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 ml-1 dark:text-slate-300">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        placeholder="Bagaimana kami bisa membantu Anda?"
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-gray-50 px-4 py-3 text-brand-primary shadow-sm ring-1 ring-inset ${errors.message ? "ring-red-400" : "ring-gray-200"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm resize-none dark:bg-midnight-surface dark:text-white dark:ring-white/10 dark:placeholder:text-slate-500 dark:focus:ring-brand-accent`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-xs text-red-500 ml-1 dark:text-red-400">{errors.message}</p>}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-2xl bg-brand-primary px-8 py-4 text-center text-sm font-bold text-white shadow-2xl shadow-brand-primary/20 transition-all duration-300 hover:bg-brand-bridge hover:shadow-brand-bridge/30 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {processing ? (
                                            <>
                                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                Kirim Pesan Strategis
                                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
