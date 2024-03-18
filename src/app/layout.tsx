import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterV2 from "@/Components/footer/FooterV2";
import FloatingButton from "@/Components/WhatsAppLogo/WhatsAppButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alfonso Lozita",
    description: "Paguina web de Alfonso Lozita desarrollador inmobiliario",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smoth">
            <body className={inter.className}>
                
                {children}
                <FloatingButton></FloatingButton>
                <FooterV2></FooterV2>
            </body>
        </html>
    );
}
