"use client";

import Link from "next/link";
import { useContent } from "@/lib/content";
import { waLink } from "@/content/site";
import Media from "@/components/Media";

export default function RoomsList({ variant = "full" }: { variant?: "featured" | "full" }) {
  const { rooms } = useContent();

  if (variant === "featured") {
    return (
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {rooms.map((r) => (
          <div key={r.slug} className="card flex flex-col">
            <Media imageKey={`room-${r.slug}`} className="aspect-[4/3]" rounded="rounded-xl" />
            <h3 className="mt-5 text-xl text-forest">{r.name}</h3>
            <p className="mt-2 text-sm text-ink/70">{r.promise}</p>
            <p className="mt-3 text-sm text-moss">
              {r.capacity} · {r.bed}
            </p>
            <p className="mt-4 text-sm">
              Mulai dari{" "}
              <span className="font-serif text-lg text-forest">{r.priceFrom}</span>/malam
            </p>
            <Link href="/kamar" className="btn-secondary mt-5 self-start">
              Lihat detail
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container-x space-y-12 py-16">
      {rooms.map((r) => (
        <article
          key={r.slug}
          className="grid gap-8 rounded-3xl border border-mist bg-white p-6 md:grid-cols-2 sm:p-8"
        >
          <Media imageKey={`room-${r.slug}`} className="aspect-[4/3]" rounded="rounded-2xl" />
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
                <dd className="mt-1 font-serif text-lg text-forest">{r.priceFrom}/malam</dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="eyebrow">Yang kamu dapatkan</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {r.amenities.map((a) => (
                  <li key={a} className="rounded-full bg-mist px-3 py-1 text-xs text-ink/80">
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
  );
}
