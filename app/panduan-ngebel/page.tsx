import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Media from "@/components/Media";
import { destinations } from "@/content/site";

export const metadata: Metadata = {
  title: "Panduan Ngebel",
  description:
    "Panduan menikmati Ngebel dengan pelan: Telaga Ngebel, wisata alam sekitar, dan itinerary santai dari Sekar Djati Guest House.",
};

const itinerary1 = [
  ["Pagi", "Sarapan di WP Wong Puncak, lalu menyusuri Telaga Ngebel."],
  ["Siang", "Pilih satu aktivitas alam yang terverifikasi, kembali istirahat."],
  ["Sore", "Minuman hangat dan waktu santai di guest house."],
  ["Malam", "Makan malam, ngobrol tanpa jadwal padat."],
];

export default function PanduanPage() {
  return (
    <>
      <PageHero
        eyebrow="Panduan Ngebel"
        title="Menginap dekat cerita, bukan sekadar dekat peta."
        desc="Waktu tempuh adalah estimasi dan dapat berubah karena cuaca serta kondisi jalan. Kami bantu memilih rute yang realistis saat kamu menginap."
      />

      <section className="container-x py-16">
        <h2 className="text-2xl text-forest">Tempat di sekitar</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.name} className="card">
              <Media imageKey={d.image} className="aspect-[16/10]" rounded="rounded-xl" />
              <h3 className="mt-5 text-xl text-forest">{d.name}</h3>
              <p className="mt-3 text-sm text-ink/70">{d.summary}</p>
              <p className="mt-4 text-xs text-moss">{d.estimate}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rice">
        <div className="container-x py-16">
          <h2 className="text-2xl text-forest">Itinerary 1 hari</h2>
          <div className="mt-6 space-y-4">
            {itinerary1.map(([t, d]) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-mist bg-white p-5">
                <span className="w-16 shrink-0 font-serif text-forest">{t}</span>
                <span className="text-ink/75">{d}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-moss">
            Untuk perjalanan 2 hari, sisakan waktu cadangan dan siapkan opsi
            cuaca hujan: makan, istirahat, atau aktivitas indoor yang benar-benar
            tersedia.
          </p>
        </div>
      </section>
    </>
  );
}
