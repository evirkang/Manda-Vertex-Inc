// "use client";

// import Link from "next/link";
// import { cn } from "@/lib/utils";

// type ButtonVariant = "primary" | "secondary" | "ghost";
// type ButtonSize = "md" | "lg";

// const variantClasses: Record<ButtonVariant, string> = {
//   primary:
//     "border border-primary/40 bg-[linear-gradient(135deg,#8af0dc,#5dd7c1)] text-primary-foreground shadow-[0_10px_30px_rgba(65,210,182,0.2)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_15px_34px_rgba(65,210,182,0.25)] active:brightness-95",
//   secondary:
//     "border border-white/15 bg-white/[0.035] text-foreground shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white/[0.075] hover:text-foreground active:bg-muted",
//   ghost:
//     "border border-transparent bg-transparent text-foreground hover:-translate-y-0.5 hover:text-primary",
// };

// const sizeClasses: Record<ButtonSize, string> = {
//   md: "h-11 px-5 text-sm",
//   lg: "h-12 px-6 text-sm sm:text-base",
// };

// type ButtonBase = {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   className?: string;
//   children: React.ReactNode;
// };

// type ButtonAsButton = ButtonBase & {
//   href?: undefined;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
//   onClick?: () => void;
// };

// type ButtonAsLink = ButtonBase & {
//   href: string;
//   external?: boolean;
// };

// export type ButtonProps = ButtonAsButton | ButtonAsLink;

// export function Button(props: ButtonProps) {
//   const {
//     variant = "primary",
//     size = "md",
//     className,
//     children,
//   } = props;

//   const classes = cn(
//     "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
//     variantClasses[variant],
//     sizeClasses[size],
//     className,
//   );

//   if ("href" in props && props.href) {
//     if (props.external) {
//       return (
//         <a
//           href={props.href}
//           className={classes}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {children}
//         </a>
//       );
//     }
//     return (
//       <Link href={props.href} className={classes}>
//         {children}
//       </Link>
//     );
//   }

//   const { type = "button", disabled, onClick } = props;
//   return (
//     <button
//       type={type}
//       className={classes}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }



// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// type ButtonVariant = "primary" | "secondary" | "ghost";
// type ButtonSize = "md" | "lg";

// const variantClasses: Record<ButtonVariant, string> = {
//   primary:
//     "border border-primary/40 bg-[linear-gradient(135deg,#8af0dc,#5dd7c1)] text-primary-foreground shadow-[0_10px_30px_rgba(65,210,182,0.2)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_15px_34px_rgba(65,210,182,0.25)] active:brightness-95",
//   secondary:
//     "border border-white/15 bg-white/[0.035] text-foreground shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white/[0.075] hover:text-foreground active:bg-muted",
//   ghost:
//     "border border-transparent bg-transparent text-foreground hover:-translate-y-0.5 hover:text-primary",
// };

// const sizeClasses: Record<ButtonSize, string> = {
//   md: "h-11 px-5 text-sm",
//   lg: "h-12 px-6 text-sm sm:text-base",
// };

// type ButtonBase = {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   className?: string;
//   children?: React.ReactNode;
// };

// type ButtonAsButton = ButtonBase &
//   Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBase> & {
//     href?: undefined;
//   };

// type ButtonAsLink = ButtonBase &
//   Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBase> & {
//     href: string;
//     external?: boolean;
//   };

// export type ButtonProps = ButtonAsButton | ButtonAsLink;

// export function Button(props: ButtonProps) {
//   const {
//     variant = "primary",
//     size = "md",
//     className,
//     children,
//   } = props;

//   const classes = cn(
//     "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
//     variantClasses[variant],
//     sizeClasses[size],
//     className
//   );

//   // Link rendering branch
//   if (props.href !== undefined) {
//     const { href, external, ...rest } = props;

//     if (external) {
//       return (
//         <a
//           href={href}
//           className={classes}
//           target="_blank"
//           rel="noopener noreferrer"
//           {...rest}
//         >
//           {children}
//         </a>
//       );
//     }

//     return (
//       <Link href={href} className={classes} {...rest}>
//         {children}
//       </Link>
//     );
//   }

//   // Button rendering branch
//   const { type = "button", disabled, onClick, ...rest } = props;

//   return (
//     <button
//       type={type}
//       className={classes}
//       disabled={disabled}
//       onClick={onClick}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-primary/40 bg-[linear-gradient(135deg,#8af0dc,#5dd7c1)] text-primary-foreground shadow-[0_10px_30px_rgba(65,210,182,0.2)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_15px_34px_rgba(65,210,182,0.25)] active:brightness-95",
  secondary:
    "border border-white/15 bg-white/[0.035] text-foreground shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white/[0.075] hover:text-foreground active:bg-muted",
  ghost:
    "border border-transparent bg-transparent text-foreground hover:-translate-y-0.5 hover:text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

type ButtonBase = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBase & {
  href?: undefined;
};

type ButtonAsLink = ButtonBase & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props;
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
