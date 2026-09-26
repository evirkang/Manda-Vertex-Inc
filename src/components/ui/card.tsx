import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  id?: string;
};

export function Card({ children, className, as: Component = "div", id }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-[1.35rem] border border-border/80 bg-[linear-gradient(145deg,rgba(16,36,49,0.84),rgba(10,26,36,0.76))] p-6 shadow-[0_16px_42px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-primary/25 motion-safe:hover:shadow-[0_24px_58px_rgba(0,0,0,0.24)]",
        className,
      )}
      id={id}
    >
      {children}
    </Component>
  );
}
