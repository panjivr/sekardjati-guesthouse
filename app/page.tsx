import Link from "next/link";
import { destinations, faqs, site, waLink } from "@/content/site";
import RoomsList from "@/components/RoomsList";
import Media from "@/components/Media";

const checkCta = waLink(
  "Halo Sekar Djati, saya ingin cek ketersediaan kamar.\n\nTanggal check-in: \nTanggal check-out: \nJumlah tamu: \nTipe kamar yang diminati: "
);

export default function Home() {
  return (
    <>
      {/* Announcement */}
      <div className="bg-forest text-cream">
        <div className="container-x py-2 text-center text-xs sm:text-sm">
          Respons WhatsApp cepat pada jam aktif · Reservasi langsung tanpa perantara
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cream">
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Ngebel · Ponorogo, Jawa Timur</p>
            <h1 className="mt-4 text-5xl leading-[1.05] text-forest sm:text-6xl">
              Pulang lebih pelan di Ngebel.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Sekar Djati Guest House adalah tempat singgah yang hangat untuk
              menikmati udara, lanskap, makanan, dan cerita lokal Ponorogo —
              dengan WP Wong Puncak di dalam pengalaman yang sama.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={checkCta} target="_blank" rel="noopener" className="btn-primary">
                Cek ketersediaan
              </a>
              <Link href="/kamar" className="btn-secondary">
                Jelajahi Sekar Djati
              </Link>
            </div>
            <p className="mt-6 text-sm text-moss">
              {site.address.split(",").slice(0, 2).join(", ")} · Reservasi via WhatsApp
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Media imageKey="hero" className="absolute inset-0" rounded="rounded-3xl" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum-900/75 via-plum-900/10 to-transparent p-8">
              <p className="font-serif text-2xl text-cream">
                Bangun pelan. Sarapan hangat. Lalu pilih jalanmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-mist bg-white">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-4">
          {[
            ["Lokasi", "Dekat Telaga Ngebel"],
            ["Pengalaman", "Tenang & personal"],
            ["Kuliner", "WP Wong Puncak"],
            ["Reservasi", "Langsung via WhatsApp"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="eyebrow">{k}</p>
              <p className="mt-1 font-serif text-lg text-forest">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-x py-20">
        <p className="eyebrow">Mengapa Sekar Djati</p>
        <h2 className="mt-3 max-w-2xl text-3xl text-forest sm:text-4xl">
          Tempat untuk bernapas, bukan sekadar tempat tidur.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Calm before clever", "Kejelasan dan rasa tenang mengalahkan efek visual yang ramai."],
            ["Local, not folkloric", "Ngebel diceritakan dengan hormat, konkret, tanpa dekorasi kosong."],
            ["Warmly specific", "Detail yang membantu: kapasitas, jam makan, akses, dan apa yang dibawa."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="text-xl text-forest">{t}</h3>
              <p className="mt-3 text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-rice">
        <div className="container-x py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Kamar</p>
              <h2 className="mt-3 text-3xl text-forest sm:text-4xl">
                Pilih ruang untuk istirahatmu.
              </h2>
            </div>
            <Link href="/kamar" className="hidden text-forest hover:underline sm:block">
              Lihat semua kamar →
            </Link>
          </div>
          <RoomsList variant="featured" />
        </div>
      </section>

      {/* WP Wong Puncak */}
      <section className="container-x py-20">
        <div className="grid gap-10 rounded-3xl bg-forest p-10 text-cream lg:grid-cols-2 lg:items-center sm:p-14">
          <div>
            <p className="eyebrow text-clay">WP Wong Puncak</p>
            <h2 className="mt-3 text-3xl text-cream sm:text-4xl">
              Makan hangat, cerita dekat.
            </h2>
            <p className="mt-5 max-w-lg text-cream/80">
              Warung untuk mengisi tenaga, menunggu hujan reda, atau
              memperpanjang obrolan. Menunya akrab, porsinya jujur, rasanya
              dijaga dekat dengan dapur rumah.
            </p>
            <Link href="/wp-wong-puncak" className="btn-wa mt-7">
              Lihat menu
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["wp-1", "wp-2", "wp-3", "wp-4"].map((k) => (
              <Media key={k} imageKey={k} className="aspect-square" />
            ))}
          </div>
        </div>
      </section>

      {/* Ngebel guide */}
      <section className="bg-rice">
        <div className="container-x py-20">
          <p className="eyebrow">Panduan Ngebel</p>
          <h2 className="mt-3 text-3xl text-forest sm:text-4xl">
            Alasan untuk keluar dan menjelajah.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((d) => (
              <div key={d.name} className="card">
                <h3 className="text-xl text-forest">{d.name}</h3>
                <p className="mt-3 text-sm text-ink/70">{d.summary}</p>
                <p className="mt-4 text-xs text-moss">{d.estimate}</p>
              </div>
            ))}
          </div>
          <Link href="/panduan-ngebel" className="mt-8 inline-block text-forest hover:underline">
            Baca panduan lengkap →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <p className="eyebrow">Pertanyaan umum</p>
        <h2 className="mt-3 text-3xl text-forest sm:text-4xl">Sebelum kamu bertanya.</h2>
        <div className="mt-8 divide-y divide-mist border-y border-mist">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink">
                {f.q}
                <span className="text-moss transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest">
        <div className="container-x py-20 text-center text-cream">
          <h2 className="text-3xl text-cream sm:text-4xl">Tanggal perjalananmu sudah ada?</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Kirim tanggal dan jumlah tamu. Kami bantu cek kamar yang tersedia
            dan menjelaskan langkah berikutnya.
          </p>
          <a href={checkCta} target="_blank" rel="noopener" className="btn-wa mt-8">
            Chat WhatsApp reservasi
          </a>
        </div>
      </section>
    </>
  );
}
