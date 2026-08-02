import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sekar Djati Guest House | Penginapan di Ngebel, Ponorogo",
    template: "%s | Sekar Djati Guest House",
  },
  description:
    "Guest house hangat di Ngebel, Ponorogo, dekat pengalaman Telaga Ngebel dan WP Wong Puncak. Cek kamar dan reservasi via WhatsApp.",
  openGraph: {
    title: "Sekar Djati Guest House",
    description:
      "Penginapan tenang di Ngebel, Ponorogo. Dekat Telaga Ngebel, ditemani WP Wong Puncak.",
    url: site.url,
    siteName: site.brand,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
