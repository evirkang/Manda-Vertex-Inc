import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: React.ReactNode;
  topContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  visualVariant?:
    | "services"
    | "solutions"
    | "work"
    | "process"
    | "contact"
    | "about"
    | "chatbots"
    | "integration"
    | "crm"
    | "apps"
    | "support"
    | "legal";
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  topContent,
  children,
  className,
  visualVariant = "services",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-surface relative isolate overflow-hidden border-b border-border/80 py-12 sm:py-16 lg:py-[4.5rem]",
        className,
      )}
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
        <div className="relative z-10 py-1 lg:py-5">
          {topContent ? <div className="mb-7">{topContent}</div> : null}
          {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
          <h1 className="max-w-2xl text-[2.45rem] font-semibold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <figure className={`hero-art hero-${visualVariant} relative min-h-64 overflow-hidden rounded-[1.4rem] border border-white/10 bg-surface-elevated sm:aspect-[16/10] lg:aspect-[1.12/1]`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            quality={85}
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(7,19,28,0.56),transparent_64%),linear-gradient(0deg,rgba(7,19,28,0.48),transparent_50%)]"
          />
          <div className="absolute inset-4 z-10 rounded-[1rem] border border-white/15 sm:inset-5" aria-hidden="true" />
          <div className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-[#07131c]/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/90 shadow-lg backdrop-blur-md sm:left-9 sm:top-9">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(115,232,211,0.9)]" />
            {eyebrow ?? "Manda Vertex · Technology"}
          </div>
          <div className="absolute bottom-7 left-7 z-10 max-w-[16rem] rounded-2xl border border-white/15 bg-[#07131c]/72 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:bottom-9 sm:left-9">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">Built around your business</p>
            <p className="mt-1 text-xs leading-5 text-white/85">Thoughtful technology, made practical.</p>
          </div>
          {imageCaption ? (
            <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#07141d]/90 to-transparent px-4 pb-4 pt-12 text-right text-[10px] leading-4 text-white/75 sm:px-6 sm:pb-5">
              {imageCaption}
            </figcaption>
          ) : null}
        </figure>
      </Container>
    </section>
  );
}
