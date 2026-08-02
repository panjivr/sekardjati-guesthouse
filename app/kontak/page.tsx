import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Sekar Djati Guest House di Ngebel, Ponorogo. Reservasi via WhatsApp, alamat lengkap, dan petunjuk kedatangan.",
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Kirim tanggal, kami bantu cekkan."
        desc="Cara tercepat menghubungi kami adalah WhatsApp. Kami akan mengirim pin lokasi dan petunjuk kedatangan setelah reservasi."
      />
      <div className="container-x grid gap-10 py-16 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">WhatsApp reservasi</p>
            <a
              href={waLink("Halo Sekar Djati, saya ingin cek ketersediaan kamar.")}
              target="_blank"
              rel="noopener"
              className="mt-1 block font-serif text-2xl text-forest hover:underline"
            >
              {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <p className="eyebrow">Alamat</p>
            <p className="mt-1 text-ink/75">{site.address}</p>
          </div>
          <div>
            <p className="eyebrow">Jam respons</p>
            <p className="mt-1 text-ink/75">
              Kami berusaha membalas dalam waktu singkat pada jam aktif.
            </p>
          </div>
          <a
            href={waLink(
              "Halo Sekar Djati, saya ingin cek ketersediaan kamar.\n\nTanggal check-in: \nTanggal check-out: \nJumlah tamu: "
            )}
            target="_blank"
            rel="noopener"
            className="btn-wa"
          >
            Chat WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-mist">
          <iframe
            title="Peta lokasi Ngebel"
            src="https://www.google.com/maps?q=Ngebel+Ponorogo&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
