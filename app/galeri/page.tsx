import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri Sekar Djati Guest House: kamar, fasilitas, WP Wong Puncak, dan suasana sekitar Ngebel.",
};

const tiles = [
  { label: "Eksterior pagi", span: "sm:col-span-2 sm:row-span-2", from: "from-forest", to: "to-moss" },
  { label: "Kamar Djati", span: "", from: "from-moss", to: "to-forest" },
  { label: "WP Wong Puncak", span: "", from: "from-clay", to: "to-forest" },
  { label: "Telaga Ngebel", span: "sm:col-span-2", from: "from-forest", to: "to-clay" },
  { label: "Detail sarapan", span: "", from: "from-moss", to: "to-clay" },
  { label: "Jalan setapak", span: "", from: "from-forest", to: "to-moss" },
  { label: "Suasana sore", span: "sm:col-span-2", from: "from-clay", to: "to-moss" },
];

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Bukti, bukan dekorasi."
        desc="Foto placeholder untuk sementara. Ganti dengan foto aktual lokasi sebelum tayang: kamar, fasilitas, WP Wong Puncak, dan sekitar Ngebel."
      />
      <div className="container-x py-16">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t, idx) => (
            <div
              key={idx}
              className={`flex items-end rounded-2xl bg-gradient-to-br ${t.from} ${t.to} p-4 ${t.span}`}
            >
              <span className="text-sm font-medium text-cream/90">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
