"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-surface relative overflow-hidden border-b border-border/80 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-[4.5rem]">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative grid items-center gap-11 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Eyebrow className="mb-5">AI • SOFTWARE • AUTOMATION</Eyebrow>
            <h1 className="text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.65rem]">
              Intelligent AI and Custom Software Built Around Your Business
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Manda Vertex Inc. is a Calgary-based technology company developing
              advanced AI chatbot solutions, business process automation, custom
              CRM platforms and mobile applications. We help organizations connect
              their tools, streamline operations and create better digital
              experiences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Discuss Your Project
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                Explore Our Solutions
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["AI chatbots", "Integration", "Automations", "Custom CRM", "Applications"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <figure className="hero-art hero-chatbots relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface-elevated">
            <Image
              src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Software developers collaborating at computers in a modern office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              preload
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(7,19,28,0.52),transparent_64%),linear-gradient(0deg,rgba(7,19,28,0.58),transparent_54%)]"
            />
            <div className="absolute inset-4 z-10 rounded-[1.05rem] border border-white/15 sm:inset-5" aria-hidden="true" />
            <div className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-[#07131c]/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/90 shadow-lg backdrop-blur-md sm:left-9 sm:top-9">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(115,232,211,0.9)]" />
              Manda Vertex · Technology
            </div>
            <div className="absolute bottom-7 left-7 z-10 max-w-[16rem] rounded-2xl border border-white/15 bg-[#07131c]/72 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:bottom-9 sm:left-9">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">AI · software · automation</p>
              <p className="mt-1 text-xs leading-5 text-white/85">Connected systems. Clearer workflows.</p>
            </div>
            <figcaption className="absolute bottom-3 right-5 z-10 text-right text-[10px] text-white/70">
              Representative stock photography
            </figcaption>
          </figure>
        </motion.div>
      </Container>
    </section>
  );
}
