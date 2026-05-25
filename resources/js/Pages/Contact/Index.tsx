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

import SectionDivider from "@/Components/Sections/SectionDivider";

export default function Contact({ contact }: Props) {
    return (
        <PublicLayout>
            <Seo
                title="Hubungi Kami"
                description="Punya pertanyaan atau butuh konsultasi untuk bisnis Anda? Jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda."
            />
            
            {/* 
              Match the landing page's smooth curve transition exactly 
            */}
            <SectionDivider 
                fromColor="bg-white dark:bg-midnight-bg" 
                toColor="text-slate-50 dark:text-midnight-surface" 
                direction="down" 
            />

            <ContactSection contact={contact} />
        </PublicLayout>
    );
}

