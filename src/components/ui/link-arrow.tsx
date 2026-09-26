import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkArrow({ href, children, className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
