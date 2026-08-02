"use client";

import { useImage } from "@/lib/content";

const gradients = [
  "from-plum-700 to-plum-900",
  "from-plum-600 to-plum-800",
  "from-cherry to-plum-700",
  "from-gold-400 to-plum-700",
  "from-peach to-cherry",
];

function pick(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return gradients[h % gradients.length];
}

export default function Media({
  imageKey,
  className = "",
  rounded = "rounded-2xl",
}: {
  imageKey: string;
  className?: string;
  rounded?: string;
}) {
  const img = useImage(imageKey);

  if (img.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={img.src}
        alt={img.alt}
        className={`h-full w-full object-cover ${rounded} ${className}`}
      />
    );
  }

  return (
    <div
      title={`Prompt: ${img.prompt}`}
      className={`flex items-end bg-gradient-to-br ${pick(imageKey)} p-4 ${rounded} ${className}`}
    >
      <span className="text-sm font-medium text-white/90">{img.alt || "Foto"}</span>
    </div>
  );
}
