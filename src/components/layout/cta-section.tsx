import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { getDiscoveryCallHref } from "@/data/company";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  title,
  description,
  primaryLabel = "Book a Discovery Call",
  secondaryLabel = "Contact Amanda Vertex",
  secondaryHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-border/70 py-16 sm:py-24">
      <Container>
        <MotionReveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-[radial-gradient(ellipse_at_90%_0%,rgba(91,213,190,0.16),transparent_36%),linear-gradient(135deg,#102a35,#0b1b25_66%,#0b1a23)] px-6 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.23)] sm:px-10 sm:py-14">
            <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">A thoughtful next step</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={getDiscoveryCallHref()} size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
