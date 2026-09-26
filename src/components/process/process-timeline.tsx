"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/data/site";

type ProcessTimelineProps = {
  detailed?: boolean;
};

export function ProcessTimeline({ detailed = false }: ProcessTimelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="relative space-y-6">
      <div
        className="absolute left-[1.125rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
        aria-hidden
      />
      {processSteps.map((step, index) => (
        <li key={step.number} className="relative sm:pl-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <span
              className="absolute left-0 top-1 hidden size-9 items-center justify-center rounded-full border border-primary/40 bg-surface text-xs font-semibold text-primary sm:flex"
              aria-hidden
            >
              {step.number}
            </span>
            <Card>
              <p className="text-xs font-semibold text-primary sm:hidden">
                {step.number}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {detailed ? step.description : step.shortDescription}
              </p>
            </Card>
          </motion.div>
        </li>
      ))}
    </ol>
  );
}
