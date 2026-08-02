"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  apply,
  baseContent,
  readLocal,
  LS_KEY,
  type Content,
  type Overrides,
} from "@/lib/content";

// Obscurity gate (client-side, bukan keamanan sungguhan). Ganti via NEXT_PUBLIC_ADMIN_PASS.
const PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || "sekar-admin";

type Form = {
  rooms: { slug: string; name: string; priceFrom: string }[];
  menu: { category: string; name: string; price: string }[];
  facilities: { title: string; itemsText: string }[];
  images: { key: string; alt: string; prompt: string; src: string }[];
};

function toForm(c: Content): Form {
  return {
    rooms: c.rooms.map((r) => ({ slug: r.slug, name: r.name, priceFrom: r.priceFrom })),
    menu: c.menu.flatMap((g) =>
      g.items.map((i) => ({ category: g.category, name: i.name, price: i.price }))
    ),
    facilities: c.facilities.map((f) => ({ title: f.title, itemsText: f.items.join("\n") })),
    images: Object.entries(c.images).map(([key, v]) => ({
      key,
      alt: v.alt,
      prompt: v.prompt,
      src: v.src || "",
    })),
  };
}

function toOverrides(f: Form): Overrides {
  const rooms: Overrides["rooms"] = {};
  f.rooms.forEach((r) => (rooms![r.slug] = { name: r.name, priceFrom: r.priceFrom }));
  const menu: Overrides["menu"] = {};
  f.menu.forEach((m) => (menu![m.name] = { price: m.price }));
  const facilities: Overrides["facilities"] = {};
  f.facilities.forEach(
    (x) =>
      (facilities![x.title] = x.itemsText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean))
  );
  const images: Overrides["images"] = {};
  f.images.forEach((i) => {
    if (i.src.trim()) images![i.key] = i.src.trim();
  });
  return { rooms, menu, facilities, images };
}

export default function AdminPage() {
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState("");
  const [form, setForm] = useState<Form>(() => toForm(baseContent));
  const [saved, setSaved] = useState("");

  useEffect(() => {
    const local = readLocal();
    if (Object.keys(local).length) setForm(toForm(apply(baseContent, local)));
  }, []);

  const overrides = useMemo(() => toOverrides(form), [form]);

  if (!ok) {
    return (
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center">
        <div className="card w-full max-w-sm">
          <h1 className="text-2xl text-forest">Panel Admin</h1>
          <p className="mt-2 text-sm text-ink/60">Masukkan kata sandi untuk mengedit konten.</p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setOk(pw === PASS)}
            placeholder="Kata sandi"
            className="field mt-4"
          />
          <button onClick={() => setOk(pw === PASS)} className="btn-primary mt-4 w-full">
            Masuk
          </button>
          {pw && pw !== PASS && <p className="mt-2 text-xs text-danger">Sandi salah.</p>}
        </div>
      </div>
    );
  }

  function save() {
    localStorage.setItem(LS_KEY, JSON.stringify(overrides));
    setSaved("Tersimpan di browser ini. Muat ulang halaman publik untuk melihat perubahan.");
  }
  function reset() {
    localStorage.removeItem(LS_KEY);
    setForm(toForm(baseContent));
    setSaved("Override lokal dihapus (kembali ke nilai bawaan).");
  }
  function download() {
    const blob = new Blob([JSON.stringify(overrides, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "overrides.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const set = (fn: (f: Form) => void) =>
    setForm((prev) => {
      const next = structuredClone(prev);
      fn(next);
      return next;
    });

  return (
    <div className="container-x py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Panel Admin</p>
          <h1 className="text-3xl text-forest">Kelola harga, fasilitas & gambar</h1>
        </div>
        <Link href="/" className="btn-secondary">
          Lihat situs
        </Link>
      </div>

      <div className="mt-4 rounded-xl border border-gold/40 bg-rice p-4 text-sm text-ink/75">
        Perubahan disimpan di <b>browser ini</b> (localStorage) untuk pratinjau instan. Agar tampil
        untuk semua pengunjung: klik <b>Unduh JSON</b>, simpan sebagai{" "}
        <code>content/overrides.json</code> di repo, lalu commit &amp; deploy.
      </div>

      {/* Kamar */}
      <section className="mt-10">
        <h2 className="text-2xl text-forest">Kamar &amp; harga</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {form.rooms.map((r, i) => (
            <div key={r.slug} className="card">
              <label className="eyebrow">Nama</label>
              <input
                className="field mt-1"
                value={r.name}
                onChange={(e) => set((f) => (f.rooms[i].name = e.target.value))}
              />
              <label className="eyebrow mt-3 block">Harga mulai</label>
              <input
                className="field mt-1"
                value={r.priceFrom}
                onChange={(e) => set((f) => (f.rooms[i].priceFrom = e.target.value))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fasilitas */}
      <section className="mt-10">
        <h2 className="text-2xl text-forest">Fasilitas</h2>
        <p className="text-sm text-ink/60">Satu item per baris.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {form.facilities.map((f, i) => (
            <div key={f.title} className="card">
              <label className="eyebrow">{f.title}</label>
              <textarea
                rows={5}
                className="field mt-1"
                value={f.itemsText}
                onChange={(e) => set((x) => (x.facilities[i].itemsText = e.target.value))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="mt-10">
        <h2 className="text-2xl text-forest">Menu WP Wong Puncak</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <tbody>
              {form.menu.map((m, i) => (
                <tr key={m.name} className="border-b border-mist">
                  <td className="py-2 pr-4">
                    <span className="text-ink">{m.name}</span>
                    <span className="ml-2 text-xs text-moss">{m.category}</span>
                  </td>
                  <td className="w-32 py-2">
                    <input
                      className="field"
                      value={m.price}
                      onChange={(e) => set((f) => (f.menu[i].price = e.target.value))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gambar */}
      <section className="mt-10">
        <h2 className="text-2xl text-forest">Gambar</h2>
        <p className="text-sm text-ink/60">
          Isi URL/path (mis. <code>/images/hero.jpg</code>). Kosong = placeholder. Prompt tersedia
          untuk generate foto.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {form.images.map((im, i) => (
            <div key={im.key} className="card">
              <div className="flex items-center justify-between">
                <label className="eyebrow">{im.key}</label>
                {im.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={im.src} alt="" className="h-10 w-14 rounded object-cover" />
                ) : (
                  <span className="h-10 w-14 rounded bg-mist" />
                )}
              </div>
              <input
                className="field mt-2"
                placeholder="/images/…"
                value={im.src}
                onChange={(e) => set((f) => (f.images[i].src = e.target.value))}
              />
              <p className="mt-2 text-xs text-ink/50">Prompt: {im.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {saved && (
        <p className="mt-8 rounded-lg bg-forest px-4 py-3 text-sm text-cream">{saved}</p>
      )}

      <div className="sticky bottom-0 mt-8 flex flex-wrap gap-3 border-t border-mist bg-cream/95 py-4 backdrop-blur">
        <button onClick={save} className="btn-primary">
          Simpan (pratinjau)
        </button>
        <button onClick={download} className="btn-secondary">
          Unduh JSON
        </button>
        <button onClick={reset} className="btn-secondary">
          Reset
        </button>
      </div>
    </div>
  );
}
