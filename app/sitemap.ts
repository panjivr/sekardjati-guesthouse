import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/kamar",
    "/fasilitas",
    "/wp-wong-puncak",
    "/panduan-ngebel",
    "/galeri",
    "/tentang-kami",
    "/kontak",
    "/faq",
  ];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
  }));
}
