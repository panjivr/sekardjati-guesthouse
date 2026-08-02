import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoomsList from "@/components/RoomsList";

export const metadata: Metadata = {
  title: "Kamar",
  description:
    "Lihat pilihan kamar Sekar Djati Guest House: kapasitas, konfigurasi tempat tidur, fasilitas, dan cara cek ketersediaan via WhatsApp.",
};

export default function KamarPage() {
  return (
    <>
      <PageHero
        eyebrow="Kamar"
        title="Pilih ruang untuk istirahatmu."
        desc="Setiap kamar memiliki karakter dan kapasitas berbeda. Baca detailnya agar pilihanmu sesuai dengan kebutuhan perjalanan."
      />
      <RoomsList variant="full" />
    </>
  );
}
