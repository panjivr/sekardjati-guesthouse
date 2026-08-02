"use client";

import { useEffect, useState } from "react";
import {
  rooms as defaultRooms,
  facilities as defaultFacilities,
  menu as defaultMenu,
  images as defaultImages,
  type Room,
  type MenuGroup,
  type ImageAsset,
} from "@/content/site";
import committed from "@/content/overrides.json";

export const LS_KEY = "sekar:overrides";

export type Overrides = {
  rooms?: Record<string, { name?: string; priceFrom?: string }>;
  menu?: Record<string, { price?: string }>;
  facilities?: Record<string, string[]>;
  images?: Record<string, string>; // imageKey -> src
};

export type Content = {
  rooms: Room[];
  facilities: typeof defaultFacilities;
  menu: MenuGroup[];
  images: Record<string, ImageAsset>;
};

export function apply(base: Content, o: Overrides): Content {
  const rooms = base.rooms.map((r) => ({ ...r, ...(o.rooms?.[r.slug] ?? {}) }));
  const facilities = base.facilities.map((f) => ({
    ...f,
    items: o.facilities?.[f.title] ?? f.items,
  }));
  const menu = base.menu.map((g) => ({
    ...g,
    items: g.items.map((i) => ({ ...i, ...(o.menu?.[i.name] ?? {}) })),
  }));
  const images = { ...base.images };
  for (const [k, src] of Object.entries(o.images ?? {})) {
    if (images[k]) images[k] = { ...images[k], src: src || undefined };
  }
  return { rooms, facilities, menu, images };
}

const defaults: Content = {
  rooms: defaultRooms,
  facilities: defaultFacilities,
  menu: defaultMenu,
  images: defaultImages,
};

// Base = defaults + committed overrides.json (same on server & client -> no hydration mismatch)
export const baseContent: Content = apply(defaults, committed as Overrides);

export function readLocal(): Overrides {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "{}") as Overrides;
  } catch {
    return {};
  }
}

/** Merged content: base on first paint, then localStorage overrides applied after mount. */
export function useContent(): Content {
  const [content, setContent] = useState<Content>(baseContent);
  useEffect(() => {
    const local = readLocal();
    if (Object.keys(local).length) setContent(apply(baseContent, local));
  }, []);
  return content;
}

export function useImage(key: string): ImageAsset {
  const c = useContent();
  return c.images[key] ?? { alt: "", prompt: "" };
}
