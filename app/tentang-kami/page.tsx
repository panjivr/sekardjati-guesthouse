import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sekar Djati tumbuh dari keinginan menyediakan tempat menginap yang terasa dekat dengan alam, makanan, dan cara hidup setempat di Ngebel.",
};

const values = [
  ["Tulus", "Menyebutkan kondisi kamar dan aturan secara jujur."],
  ["Hangat", "Menjawab dengan nama, konteks, dan solusi — bukan template kaku."],
  ["Sederhana", "Mengurangi pilihan yang membingungkan; harga dan alur jelas."],
  ["Berakar", "Cerita dan rekomendasi yang benar-benar berasal dari tempat."],
  ["Terawat", "Kebersihan, linen, dan detail kecil menjadi standar harian."],
  ["Bertanggung jawab", "Mengurangi sampah, menghormati warga, menjaga privasi tamu."],
];

export default function TentangPage() {
  return (
    <>
      <PageHero eyebrow="Tentang Kami" title="Dekat dengan alam, makanan, dan cara hidup setempat." />
      <section className="container-x py-16">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink/75">
          <p>
            Sekar Djati tumbuh dari keinginan untuk menyediakan tempat menginap
            yang terasa dekat: dekat dengan alam, dekat dengan makanan, dan dekat
            dengan cara hidup setempat.
          </p>
          <p>
            Kami tidak ingin membuat Ngebel terasa seperti tempat lain. Kami ingin
            membantu tamu mengenal Ngebel dengan lebih pelan dan lebih personal.
          </p>
        </div>

        <h2 className="mt-14 text-2xl text-forest">Nilai yang kami rawat</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="text-xl text-forest">{t}</h3>
              <p className="mt-2 text-sm text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
