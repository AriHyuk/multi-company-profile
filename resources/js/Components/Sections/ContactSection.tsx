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
        <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
            {/* Soft decorative background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-brand-accent/5 blur-3xl"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-12">
                            {/* Phone */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-md group-hover:ring-brand-primary">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Telepon</p>
                                    <p className="mt-1 text-lg font-semibold text-slate-900">{contact.phone}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-md group-hover:ring-brand-primary">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email</p>
                                    <a href={`mailto:${contact.email}`} className="mt-1 block text-lg font-semibold text-slate-900 hover:text-brand-primary transition">
                                        {contact.email}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-6 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-md group-hover:ring-brand-primary">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Alamat</p>
                                    <p className="mt-1 text-lg font-semibold text-slate-900 leading-relaxed max-w-sm">
                                        {contact.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                        {wasSuccessful && (
                            <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-700 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 ml-1">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        placeholder="Ketik nama lengkap..."
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ${errors.name ? "ring-red-300" : "ring-slate-200"} placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm`}
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-600 ml-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        placeholder="email@perusahaan.com"
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ${errors.email ? "ring-red-300" : "ring-slate-200"} placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm`}
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-600 ml-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 ml-1">
                                        No. Telepon (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData("phone", e.target.value)}
                                        placeholder="Contoh: 0812..."
                                        className="mt-2 block w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-slate-700 ml-1">
                                        Perusahaan (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData("company", e.target.value)}
                                        placeholder="Nama perusahaan Anda"
                                        className="mt-2 block w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 ml-1">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        placeholder="Bagaimana kami bisa membantu Anda?"
                                        className={`mt-2 block w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ${errors.message ? "ring-red-300" : "ring-slate-200"} placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-all duration-200 text-sm resize-none`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-xs text-red-600 ml-1">{errors.message}</p>}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-2xl bg-brand-primary px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all duration-200 hover:bg-brand-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
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
                                                Kirim Pesan
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
