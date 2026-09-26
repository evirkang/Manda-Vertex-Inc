"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type NodeProps = {
  label: string;
  className?: string;
  delay?: number;
};

function FlowNode({ label, className, delay = 0 }: NodeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-md border border-border bg-surface-elevated px-3 py-2 text-center text-xs font-medium text-foreground sm:text-sm",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      {label}
    </motion.div>
  );
}

function Connector({ className }: { className?: string }) {
  return (
    <div
      className={cn("mx-auto h-6 w-px bg-border sm:h-8", className)}
      aria-hidden
    />
  );
}

type TechnologyVisualProps = {
  variant?: "hero" | "flow" | "compact";
  className?: string;
};

export function TechnologyVisual({
  variant = "hero",
  className,
}: TechnologyVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface/80 p-6 sm:p-8",
        variant === "hero" && "min-h-[320px]",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-primary/10 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      {variant === "hero" ? (
        <div className="relative flex flex-col items-center">
          <FlowNode label="User" delay={0.1} />
          <Connector />
          <FlowNode label="Interface" delay={0.2} />
          <Connector />
          <FlowNode label="AI / Logic" delay={0.3} className="border-primary/40" />
          <Connector />
          <p className="my-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            Integration layer
          </p>
          <div className="grid w-full max-w-md grid-cols-3 gap-2">
            <FlowNode label="CRM" delay={0.35} />
            <FlowNode label="API" delay={0.4} />
            <FlowNode label="Workflow" delay={0.45} />
          </div>
          <Connector />
          <FlowNode label="Business outcome" delay={0.5} className="border-accent/30" />
        </div>
      ) : (
        <div className="relative space-y-3 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2">
            {["Websites", "CRMs", "APIs", "Internal tools", "AI services"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface-elevated px-2 py-1 text-xs text-foreground"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <div className="flex flex-col items-start gap-1 pt-2">
            <FlowNode label="User" className="text-left" />
            <Connector className="ml-6" />
            <FlowNode label="Interface" />
            <Connector />
            <FlowNode label="AI / Logic" />
            <Connector />
            <FlowNode label="Business systems" />
            <Connector />
            <FlowNode label="Workflow" />
            <Connector />
            <FlowNode label="Outcome" />
          </div>
        </div>
      )}

      <p className="relative mt-6 text-center text-[11px] text-muted-foreground">
        Conceptual architecture — not a specific customer system
      </p>
    </div>
  );
}
