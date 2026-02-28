import Image from "next/image";

type FitMode = "cover" | "contain";

export function GalleryGrid({
  items,
  itemAltPrefix,
  aspect = "4/3",
  fit = "cover"
}: {
  items: string[];
  itemAltPrefix: string;
  aspect?: "4/3" | "3/4" | "16/10" | "1/1";
  fit?: FitMode;
}) {
  const aspectClass =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "3/4"
      ? "aspect-[3/4]"
      : aspect === "16/10"
      ? "aspect-[16/10]"
      : "aspect-square";

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((src, i) => (
        <div
          key={src}
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <div className={`relative ${aspectClass} bg-neutral-50`}>
            <Image
              src={src}
              alt={`${itemAltPrefix} ${i + 1}`}
              fill
              className={fitClass}
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}