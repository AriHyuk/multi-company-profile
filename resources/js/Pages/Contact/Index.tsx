import Seo from "@/Components/Seo";
import PublicLayout from "@/Layouts/PublicLayout";
import ContactSection from "@/Components/Sections/ContactSection";

interface Props {
    contact: {
        email: string;
        phone: string;
        address: string;
    };
}

export default function Contact({ contact }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Hubungi Kami"
                description="Punya pertanyaan atau butuh konsultasi untuk bisnis Anda? Jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda."
            />
            
            <div className="min-h-screen bg-slate-50 dark:bg-midnight-surface">
                {/* 
                  We use the exact same ContactSection from the landing page 
                  so the UI stays in sync 100%.
                */}
                <div className="pt-8 sm:pt-16">
                    <ContactSection contact={contact} />
                </div>
            </div>
        </PublicLayout>
    );
}

