import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FacilitiesList from "@/components/FacilitiesList";

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
      <FacilitiesList />

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
              <p className="eyebrow text-danger">Mungkin kurang cocok</p>
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
