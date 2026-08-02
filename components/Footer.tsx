import Link from "next/link";
import { nav, site, waLink } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-cream">Sekar Djati Guest House</p>
          <p className="mt-3 text-sm leading-relaxed">{site.address}</p>
          <p className="mt-3 text-sm">
            WhatsApp:{" "}
            <a
              href={waLink("Halo Sekar Djati, saya ingin bertanya.")}
              className="text-clay hover:underline"
              target="_blank"
              rel="noopener"
            >
              {site.whatsappDisplay}
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow text-moss">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-cream">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="hover:text-cream">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-moss">Reservasi</p>
          <p className="mt-3 text-sm leading-relaxed">
            Kirim tanggal dan jumlah tamu. Kami bantu cek kamar yang tersedia
            dan menjelaskan langkah berikutnya.
          </p>
          <a
            href={waLink(
              "Halo Sekar Djati, saya ingin cek ketersediaan kamar.\n\nTanggal check-in: \nTanggal check-out: \nJumlah tamu: "
            )}
            target="_blank"
            rel="noopener"
            className="btn-wa mt-4"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-1 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sekar Djati Guest House · Ngebel, Ponorogo</p>
          <p>Pulang lebih pelan.</p>
        </div>
      </div>
    </footer>
  );
}
