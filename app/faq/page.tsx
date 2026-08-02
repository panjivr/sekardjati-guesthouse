import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering diajukan tentang menginap di Sekar Djati Guest House, Ngebel.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Pertanyaan yang sering diajukan." />
      <div className="container-x py-16">
        <div className="max-w-3xl divide-y divide-mist border-y border-mist">
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
      </div>
    </>
  );
}
