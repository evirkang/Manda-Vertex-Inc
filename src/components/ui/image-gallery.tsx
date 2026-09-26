import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  items: GalleryImageItem[];
  className?: string;
};

export function ImageGallery({ items, className }: ImageGalleryProps) {
  if (!items.length) return null;

  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {items.map((item) => (
        <figure key={`${item.src}-${item.alt}`} className="overflow-hidden rounded-2xl border border-border bg-surface/80">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {item.caption ? (
            <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
