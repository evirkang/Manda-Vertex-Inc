"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-muted-foreground">
          We couldn&apos;t load this page. Please try again.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
