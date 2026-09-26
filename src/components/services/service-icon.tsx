import {
  LifeBuoy,
  MessageSquare,
  Plug,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Plug,
  Users,
  Smartphone,
  LifeBuoy,
};

type ServiceIconProps = {
  name: string;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Plug;
  return (
    <Icon
      className={cn("size-6 text-primary", className)}
      aria-hidden
    />
  );
}
