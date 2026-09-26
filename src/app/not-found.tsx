import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
