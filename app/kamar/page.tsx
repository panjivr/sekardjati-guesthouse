import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { rooms, waLink } from "@/content/site";

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
      <div className="container-x space-y-12 py-16">
        {rooms.map((r) => (
          <article
            key={r.slug}
            className="grid gap-8 rounded-3xl border border-mist bg-white p-6 md:grid-cols-2 sm:p-8"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-moss/70 to-forest" />
            <div>
              <h2 className="text-2xl text-forest">{r.name}</h2>
              <p className="mt-2 text-ink/70">{r.promise}</p>

              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="eyebrow">Kapasitas</dt>
                  <dd className="mt-1">{r.capacity}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Tempat tidur</dt>
                  <dd className="mt-1">{r.bed}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Cocok untuk</dt>
                  <dd className="mt-1">{r.goodFor}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Mulai dari</dt>
                  <dd className="mt-1 font-serif text-lg text-forest">
                    {r.priceFrom}/malam
                  </dd>
                </div>
              </dl>

              <div className="mt-5">
                <p className="eyebrow">Yang kamu dapatkan</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {r.amenities.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-mist px-3 py-1 text-xs text-ink/80"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-moss">Perlu diketahui: {r.note}</p>

              <a
                href={waLink(
                  `Halo Sekar Djati, saya ingin cek ketersediaan ${r.name}.\n\nTanggal check-in: \nTanggal check-out: \nJumlah tamu: `
                )}
                target="_blank"
                rel="noopener"
                className="btn-primary mt-6"
              >
                Cek ketersediaan {r.name}
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
