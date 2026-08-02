import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Media from "@/components/Media";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri Sekar Djati Guest House: kamar, fasilitas, WP Wong Puncak, dan suasana sekitar Ngebel.",
};

const tiles = [
  { key: "gallery-1", span: "sm:col-span-2 sm:row-span-2" },
  { key: "gallery-2", span: "" },
  { key: "gallery-3", span: "" },
  { key: "gallery-4", span: "sm:col-span-2" },
  { key: "gallery-5", span: "" },
  { key: "gallery-6", span: "" },
  { key: "gallery-7", span: "sm:col-span-2" },
];

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Bukti, bukan dekorasi."
        desc="Gambar masih placeholder — arahkan kursor untuk melihat prompt fotonya. Ganti lewat /admin atau taruh file di /public/images."
      />
      <div className="container-x py-16">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t) => (
            <Media key={t.key} imageKey={t.key} className={t.span} />
          ))}
        </div>
      </div>
    </>
  );
}
