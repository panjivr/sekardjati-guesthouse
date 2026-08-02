import Link from "next/link";
import { waLink } from "@/content/site";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl text-forest">Halaman ini sedang mengambil jalan lain.</h1>
      <p className="mt-4 text-ink/70">
        Kembali ke halaman utama, lihat kamar, atau tanyakan arah melalui WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Beranda
        </Link>
        <Link href="/kamar" className="btn-secondary">
          Lihat kamar
        </Link>
        <a
          href={waLink("Halo Sekar Djati, saya ingin bertanya.")}
          target="_blank"
          rel="noopener"
          className="btn-wa"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
