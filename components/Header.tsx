"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, waLink } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const cta = waLink(
    "Halo Sekar Djati, saya ingin cek ketersediaan kamar.\n\nTanggal check-in: \nTanggal check-out: \nJumlah tamu: "
  );

  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-forest/95 text-cream backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg text-cream">Sekar Djati</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">
            Guest House · Ngebel
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-cream/80 transition hover:text-gold-400"
            >
              {n.label}
            </Link>
          ))}
          <a href={cta} target="_blank" rel="noopener" className="btn-primary">
            Cek Ketersediaan
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-md p-2 text-cream"
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-forest lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-cream/80"
              >
                {n.label}
              </Link>
            ))}
            <a href={cta} target="_blank" rel="noopener" className="btn-primary mt-3">
              WhatsApp Reservasi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
