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

## Deploy

1. Import repo ke **Vercel**.
2. Set env dari `.env.example`.
3. Tambahkan domain `sekar.djati.web.id` di Project → Domains, lalu arahkan DNS
   (CNAME `sekar` → `cname.vercel-dns.com`) di pengelola domain `djati.web.id`.
