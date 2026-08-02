export const site = {
  brand: "Sekar Djati Guest House",
  tagline: "Pulang lebih pelan di Ngebel.",
  whatsapp: "6285204183272",
  whatsappDisplay: "+62 852-0418-3272",
  address:
    "Dukuh Nglingi RT 001 RW 001, Desa Ngebel, Kecamatan Ngebel, Kabupaten Ponorogo, Jawa Timur",
  mapsUrl: "https://maps.google.com/?q=Ngebel+Ponorogo",
  url: "https://sekar.djati.web.id",
};

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/kamar", label: "Kamar" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/wp-wong-puncak", label: "WP Wong Puncak" },
  { href: "/panduan-ngebel", label: "Panduan Ngebel" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export type Room = {
  slug: string;
  name: string;
  promise: string;
  capacity: string;
  bed: string;
  priceFrom: string;
  amenities: string[];
  goodFor: string;
  note: string;
};

export const rooms: Room[] = [
  {
    slug: "kamar-djati",
    name: "Kamar Djati",
    promise: "Kamar tenang dengan cahaya pagi untuk berdua.",
    capacity: "2 tamu",
    bed: "1 kasur queen",
    priceFrom: "Rp350.000",
    amenities: ["Kamar mandi dalam", "Air panas", "Wi-Fi", "Kipas/AC", "View kebun"],
    goodFor: "Pasangan, short escape",
    note: "Harga draft peluncuran, dikonfirmasi saat reservasi.",
  },
  {
    slug: "kamar-sekar",
    name: "Kamar Sekar",
    promise: "Ruang lega untuk keluarga kecil yang ingin berkumpul.",
    capacity: "3–4 tamu",
    bed: "1 queen + 1 single",
    priceFrom: "Rp500.000",
    amenities: ["Kamar mandi dalam", "Air panas", "Wi-Fi", "Area duduk", "Parkir dekat"],
    goodFor: "Keluarga kecil, family stay",
    note: "Extra bed tersedia atas permintaan.",
  },
  {
    slug: "kamar-puncak",
    name: "Kamar Puncak",
    promise: "Kamar hangat dekat WP Wong Puncak untuk perjalanan singkat.",
    capacity: "2 tamu",
    bed: "2 single / 1 queen",
    priceFrom: "Rp300.000",
    amenities: ["Kamar mandi dalam", "Wi-Fi", "Sarapan mudah", "Akses warung"],
    goodFor: "Pengunjung Telaga Ngebel, teman perjalanan",
    note: "Cocok untuk tamu yang butuh early breakfast.",
  },
];

export const facilities = [
  {
    title: "Kenyamanan",
    items: [
      "Tempat tidur & linen bersih",
      "Kamar mandi terawat, air panas",
      "Pencahayaan cukup & area menaruh barang",
      "Air minum di kamar",
    ],
  },
  {
    title: "Konektivitas",
    items: ["Wi-Fi di area utama", "Informasi sinyal seluler", "Bantuan bila jaringan bermasalah"],
  },
  {
    title: "Kedatangan",
    items: ["Parkir kendaraan", "Signage & titik check-in", "Bantuan bawa barang", "Petunjuk kedatangan"],
  },
  {
    title: "Makan",
    items: ["WP Wong Puncak", "Pilihan sarapan", "Pemesanan di muka", "Opsi makan kelompok"],
  },
  {
    title: "Keselamatan",
    items: ["Nomor darurat", "Alat pemadam", "Pencahayaan area luar", "Lantai anti-slip area basah"],
  },
];

export type MenuGroup = { category: string; items: { name: string; desc?: string; price: string }[] };

export const menu: MenuGroup[] = [
  {
    category: "Nasi & Hidangan Utama",
    items: [
      { name: "Nasi Goreng Wong Puncak ★", desc: "Nasi goreng rumahan, telur, ayam suwir, acar", price: "Rp25.000" },
      { name: "Nasi Goreng Ijo 🌶", desc: "Sambal hijau, telur, ayam suwir", price: "Rp27.000" },
      { name: "Nasi Ayam Sambal Bawang 🌶 ★", desc: "Ayam goreng, sambal bawang, lalapan", price: "Rp30.000" },
      { name: "Nasi Ayam Geprek 🌶", desc: "Ayam crispy, sambal, nasi", price: "Rp28.000" },
      { name: "Nasi Ayam Bakar", desc: "Ayam bakar bumbu manis-gurih, lalapan", price: "Rp32.000" },
      { name: "Nasi Lele Goreng", desc: "Lele goreng, sambal, lalapan", price: "Rp25.000" },
      { name: "Nasi Pecel Ngebel 🌿", desc: "Sayur, bumbu pecel, rempeyek", price: "Rp20.000" },
      { name: "Mie Goreng Jawa ★", desc: "Mie, telur, sayur, ayam/bakso", price: "Rp25.000" },
      { name: "Magelangan", desc: "Nasi, mie, telur, ayam, sayur", price: "Rp27.000" },
    ],
  },
  {
    category: "Lauk & Sharing",
    items: [
      { name: "Ayam Goreng", desc: "1 potong + sambal", price: "Rp18.000" },
      { name: "Ayam Bakar", desc: "1 potong + sambal", price: "Rp20.000" },
      { name: "Tahu Tempe", desc: "Paket tahu & tempe goreng", price: "Rp12.000" },
      { name: "Tumis Kangkung 🌿", desc: "Tumis bawang, opsi pedas", price: "Rp16.000" },
      { name: "Pisang Goreng ★", desc: "4 buah, gula/keju opsional", price: "Rp18.000" },
      { name: "Cireng Sambal", desc: "6 buah", price: "Rp18.000" },
    ],
  },
  {
    category: "Sup & Menu Hangat",
    items: [
      { name: "Sup Ayam Kampung", desc: "Kuah bening, ayam, sayur", price: "Rp28.000" },
      { name: "Soto Ayam", desc: "Soto rumahan, nasi/lontong", price: "Rp25.000" },
      { name: "Bakso Kuah", desc: "Bakso, tahu, mie/soun, sayur", price: "Rp25.000" },
      { name: "Seblak Kuah 🌶", desc: "Kerupuk, telur, sayur, topping", price: "Rp25.000" },
    ],
  },
  {
    category: "Sarapan",
    items: [
      { name: "Sarapan Nasi Pecel", desc: "Pecel, telur, rempeyek, teh", price: "Rp28.000" },
      { name: "Bubur Ayam", desc: "Bubur, ayam, cakwe, kerupuk", price: "Rp22.000" },
      { name: "Paket Sarapan Tamu", desc: "Menu harian + minuman hangat", price: "Rp35.000" },
    ],
  },
  {
    category: "Minuman Hangat",
    items: [
      { name: "Kopi Tubruk", price: "Rp12.000" },
      { name: "Kopi Susu Gula Aren", price: "Rp20.000" },
      { name: "Teh Manis Panas", price: "Rp8.000" },
      { name: "Wedang Jahe", price: "Rp15.000" },
      { name: "Cokelat Panas", price: "Rp18.000" },
    ],
  },
  {
    category: "Minuman Dingin",
    items: [
      { name: "Es Teh Manis", price: "Rp8.000" },
      { name: "Es Jeruk", price: "Rp12.000" },
      { name: "Es Kopi Susu", price: "Rp20.000" },
      { name: "Es Campur", price: "Rp20.000" },
      { name: "Air Mineral", price: "Rp6.000" },
    ],
  },
];

export const destinations = [
  {
    name: "Telaga Ngebel",
    summary:
      "Danau alam yang menjadi jantung kawasan Ngebel. Udara sejuk, jalan mengelilingi telaga, dan spot menikmati pagi.",
    estimate: "± 10 menit dari Sekar Djati (estimasi, tergantung cuaca & rute)",
  },
  {
    name: "Air Terjun sekitar Ngebel",
    summary:
      "Opsi wisata alam yang bisa dipasangkan dengan rute Telaga Ngebel. Akses dan durasi menyesuaikan musim.",
    estimate: "Verifikasi kondisi jalan sebelum berangkat",
  },
  {
    name: "Desa & lanskap ketinggian",
    summary:
      "Pemandangan ketinggian, kopi, dan kuliner lokal. Nikmati dengan pelan dan hormati warga sekitar.",
    estimate: "Rekomendasi rute kami bantu saat menginap",
  },
];

export const faqs = [
  {
    q: "Apakah harus reservasi terlebih dahulu?",
    a: "Sangat disarankan, terutama untuk akhir pekan dan hari libur. Kirim tanggal serta jumlah tamu melalui WhatsApp agar kami dapat mengecek ketersediaan.",
  },
  {
    q: "Bagaimana cara menuju Sekar Djati?",
    a: "Kami akan mengirimkan pin lokasi dan petunjuk kedatangan setelah reservasi. Kondisi jalan dan durasi perjalanan dapat berubah karena cuaca atau lalu lintas.",
  },
  {
    q: "Apakah bisa untuk keluarga atau kelompok?",
    a: "Bisa, selama kapasitas kamar dan aturan properti sesuai. Untuk kebutuhan beberapa kamar atau konsumsi kelompok, hubungi kami lebih awal.",
  },
  {
    q: "Apakah WP Wong Puncak terbuka untuk umum?",
    a: "WP Wong Puncak melayani tamu menginap maupun warga sekitar. Jam buka dan status layanan harian dapat dikonfirmasi melalui WhatsApp.",
  },
];
