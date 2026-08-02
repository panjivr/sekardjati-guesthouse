"use client";

import { useContent } from "@/lib/content";

export default function MenuList() {
  const { menu } = useContent();
  return (
    <div className="mt-10 space-y-12">
      {menu.map((g) => (
        <section key={g.category}>
          <h2 className="border-b border-mist pb-3 text-2xl text-forest">{g.category}</h2>
          <ul className="mt-4 divide-y divide-mist">
            {g.items.map((i) => (
              <li key={i.name} className="flex items-baseline justify-between gap-4 py-3">
                <div>
                  <p className="font-medium text-ink">{i.name}</p>
                  {i.desc && <p className="text-sm text-ink/60">{i.desc}</p>}
                </div>
                <span className="whitespace-nowrap font-serif text-forest">{i.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
