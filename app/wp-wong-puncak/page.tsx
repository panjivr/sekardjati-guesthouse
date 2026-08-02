import type { Metadata } from "next";
import { menu, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "WP Wong Puncak",
  description:
    "Menu WP Wong Puncak: nasi, lauk sharing, sup hangat, sarapan, dan aneka minuman. Makan hangat, cerita dekat di Ngebel.",
};

export default function WpPage() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="container-x py-16 sm:py-20">
          <p className="eyebrow text-clay">WP Wong Puncak</p>
          <h1 className="mt-3 text-4xl text-cream sm:text-5xl">
            Makan hangat, cerita dekat.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            Warung kasual dengan rasa rumahan dan suasana puncak. Terbuka untuk
            tamu menginap maupun warga sekitar.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={waLink("Halo WP Wong Puncak, saya ingin memesan makanan.")}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              Pesan via WhatsApp
            </a>
            <a
              href={waLink(
                "Halo WP Wong Puncak, saya ingin memesan paket untuk kelompok.\n\nJumlah orang: \nTanggal: \nKebutuhan: "
              )}
              target="_blank"
              rel="noopener"
              className="btn-secondary border-cream/40 text-cream hover:bg-white/10"
            >
              Pesan untuk kelompok
            </a>
          </div>
        </div>
      </section>

      <div className="container-x py-16">
        <p className="text-sm text-moss">
          Legenda: 🌶 pedas · ★ favorit · 🌿 vegetarian. Seluruh harga adalah
          harga draft peluncuran dan dapat berubah — konfirmasi ketersediaan
          harian via WhatsApp.
        </p>

        <div className="mt-10 space-y-12">
          {menu.map((g) => (
            <section key={g.category}>
              <h2 className="border-b border-mist pb-3 text-2xl text-forest">
                {g.category}
              </h2>
              <ul className="mt-4 divide-y divide-mist">
                {g.items.map((i) => (
                  <li key={i.name} className="flex items-baseline justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium text-ink">{i.name}</p>
                      {i.desc && <p className="text-sm text-ink/60">{i.desc}</p>}
                    </div>
                    <span className="whitespace-nowrap font-serif text-forest">
                      {i.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
