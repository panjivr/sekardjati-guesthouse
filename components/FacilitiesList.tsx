"use client";

import { useContent } from "@/lib/content";

export default function FacilitiesList() {
  const { facilities } = useContent();
  return (
    <div className="container-x grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
      {facilities.map((f) => (
        <div key={f.title} className="card">
          <h2 className="text-xl text-forest">{f.title}</h2>
          <ul className="mt-4 space-y-2">
            {f.items.map((i) => (
              <li key={i} className="flex gap-2 text-sm text-ink/75">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
