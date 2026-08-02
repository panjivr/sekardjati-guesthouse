# Sekar Djati Guest House

Website resmi Sekar Djati Guest House — penginapan tenang di Ngebel, Ponorogo, ditemani warung **WP Wong Puncak**. Dibangun dari blueprint brand & PRD.

Rencana deploy: **https://sekar.djati.web.id**

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS
- Reservasi via WhatsApp (link prefilled, tanpa backend)

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksi
```

## Struktur

- `app/` — halaman: beranda, kamar, fasilitas, WP Wong Puncak, panduan Ngebel, galeri, tentang, kontak, FAQ.
- `components/` — Header, Footer, tombol WhatsApp, PageHero.
- `content/site.ts` — sumber konten tunggal: brand, kamar, menu, destinasi, FAQ, nomor WhatsApp.

## Konten yang perlu diperbarui sebelum tayang

- **Foto**: semua gambar masih placeholder gradien → ganti dengan foto aktual lokasi.
- **Harga kamar & menu**: masih harga draft peluncuran → konfirmasi & set harga final.
- **Estimasi jarak/waktu** ke destinasi → verifikasi lapangan.
- **Koordinat maps** → sesuaikan pin lokasi yang tepat.

Nomor WhatsApp aktif: **+62 852-0418-3272**.

## Panel admin tersembunyi (`/admin`)

Buka `https://sekar.djati.web.id/admin` (di-`noindex`, tidak muncul di menu). Sandi default
`sekar-admin` — ubah lewat env `NEXT_PUBLIC_ADMIN_PASS`. Di sana bisa edit **harga kamar,
fasilitas, harga menu, dan URL gambar**.

- **Simpan (pratinjau):** perubahan tersimpan di browser itu saja (localStorage) — instan, untuk cek.
- **Unduh JSON → `content/overrides.json`:** commit file ini agar perubahan tampil untuk **semua**
  pengunjung setelah deploy. Urutan: default (`content/site.ts`) → `overrides.json` → localStorage.

> Catatan: gate sandi bersifat menyembunyikan, bukan keamanan penuh (situs statis tanpa backend).

## Gambar (tinggal ganti)

Semua gambar masih placeholder gradien + **prompt** (arahkan kursor untuk melihat). Definisi di
`content/site.ts` (`images`). Untuk memasang foto: taruh file di `public/images/…`, lalu isi `src`
di `content/site.ts` atau via `/admin`.

## Deploy

1. Import repo ke **Vercel**.
2. Set env dari `.env.example`.
3. Tambahkan domain `sekar.djati.web.id` di Project → Domains, lalu arahkan DNS
   (CNAME `sekar` → `cname.vercel-dns.com`) di pengelola domain `djati.web.id`.
