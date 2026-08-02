import { waLink } from "@/content/site";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Halo Sekar Djati, saya ingin cek ketersediaan kamar.")}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-[#25D366] shadow-lg ring-1 ring-gold/40 transition hover:scale-105 hover:bg-plum-900"
      aria-label="Reservasi via WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.42 1.31-1.96 1.35-.5.05-.98.24-3.3-.7-2.78-1.1-4.56-3.94-4.7-4.13-.14-.19-1.12-1.49-1.12-2.84s.71-2.02.96-2.29c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.57.81 1.96.88 2.1.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.22 1.36.28.14.44.12.6-.07.16-.19.69-.81.87-1.09.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z" />
      </svg>
    </a>
  );
}
