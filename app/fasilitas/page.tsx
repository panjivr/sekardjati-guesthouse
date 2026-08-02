import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { facilities } from "@/content/site";

export const metadata: Metadata = {
  title: "Fasilitas",
  description:
    "Fasilitas Sekar Djati Guest House: kenyamanan kamar, konektivitas, kedatangan, makan, dan keselamatan.",
};

export default function FasilitasPage() {
  return (
    <>
      <PageHero
        eyebrow="Fasilitas"
        title="Yang perlu ada, kami rawat baik-baik."
        desc="Fasilitas kami dirancang untuk membuat perjalanan lebih mudah, bukan lebih ramai. Lihat apa yang tersedia dan apa yang perlu dibawa."
      />
      <div className="container-x grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((f) => (
          <div key={f.title} className="card">
            <h2 className="text-xl text-forest">{f.title}</h2>
            <ul className="mt-4 space-y-2">
              {f.items.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-ink/75">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-x pb-16">
        <div className="rounded-2xl border border-mist bg-rice p-8">
          <h2 className="text-2xl text-forest">Cocok untuk / mungkin kurang cocok</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-forest">Cocok untuk</p>
              <p className="mt-2 text-ink/75">
                Pasangan, keluarga kecil, perjalanan santai, dan tamu yang ingin
                menjelajah Ngebel dengan ritme lebih tenang.
              </p>
            </div>
            <div>
              <p className="eyebrow text-clay">Mungkin kurang cocok</p>
              <p className="mt-2 text-ink/75">
                Tamu yang mengharapkan layanan hotel 24 jam, lift, atau suasana
                kota yang ramai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
