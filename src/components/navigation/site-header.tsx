// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useId, useRef, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { mainNav } from "@/data/navigation";
// import { company, getDiscoveryCallHref } from "@/data/company";
// import { Button } from "@/components/ui/button";
// import { Container } from "@/components/ui/container";
// import { cn } from "@/lib/utils";

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const menuId = useId();
//   const closeRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     closeRef.current?.focus();
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const discoveryHref = getDiscoveryCallHref();

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
//         scrolled
//           ? "border-b border-border bg-background/85 shadow-[0_20px_40px_rgba(2,6,23,0.18)] backdrop-blur-md"
//           : "border-b border-transparent bg-transparent",
//       )}
//     >
//       <Container as="div" className="flex h-16 items-center justify-between gap-4 lg:h-[4.3rem]">
//         <Link
//           href="/"
//           className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground sm:text-base"
//         >
//           <span className="grid size-9 place-items-center rounded-xl border border-primary/25 bg-primary/[0.08] text-xs font-bold text-primary shadow-[inset_0_1px_rgba(255,255,255,0.08)] transition group-hover:border-primary/50 group-hover:bg-primary/[0.13]">AV</span>
//           <span>{company.displayName}</span>
//         </Link>

//         <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
//           {mainNav.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               aria-current={pathname === item.href ? "page" : undefined}
//               className={cn(
//                 "relative py-2 text-sm transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-[0.9rem] after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
//                 pathname === item.href ? "font-medium text-foreground after:scale-x-100" : "text-muted-foreground",
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden lg:block">
//           <Button href={discoveryHref} size="md" className="shadow-[0_10px_30px_rgba(94,234,212,0.16)]">
//             Book a Discovery Call
//           </Button>
//         </div>

//         <button
//           type="button"
//           className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-white/[0.025] text-foreground transition hover:border-primary/35 hover:bg-white/[0.06] lg:hidden"
//           aria-expanded={open}
//           aria-controls={menuId}
//           aria-label={open ? "Close menu" : "Open menu"}
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? <X className="size-5" /> : <Menu className="size-5" />}
//         </button>
//       </Container>

//       {open ? (
//         <div
//           id={menuId}
//           className="fixed inset-0 top-16 z-40 border-t border-border/80 bg-[#07131c]/[0.98] backdrop-blur-2xl lg:hidden"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Mobile navigation"
//         >
//           <Container className="flex h-[calc(100vh-4rem)] flex-col py-8">
//             <nav className="flex flex-col gap-1" aria-label="Mobile">
//               {mainNav.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   aria-current={pathname === item.href ? "page" : undefined}
//                   className={cn(
//                     "rounded-xl border border-transparent px-4 py-3 text-lg transition-colors hover:border-border hover:bg-surface",
//                     pathname === item.href && "border-primary/20 bg-primary/[0.06] text-primary",
//                   )}
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//             <div className="mt-auto flex flex-col gap-3 pt-8">
//               <Button href={discoveryHref} size="lg" className="w-full">
//                 Book a Discovery Call
//               </Button>
//               <button
//                 ref={closeRef}
//                 type="button"
//                 className="text-sm text-muted-foreground underline-offset-4 hover:underline"
//                 onClick={() => setOpen(false)}
//               >
//                 Close menu
//               </button>
//             </div>
//           </Container>
//         </div>
//       ) : null}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { mainNav } from "@/data/navigation";
import { company, getDiscoveryCallHref } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const menuId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);

    // Prevent the page behind the mobile menu from scrolling.
    document.body.style.overflow = "hidden";

    // Move keyboard focus into the menu.
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);

      // Restore normal page scrolling.
      document.body.style.overflow = "";
    };
  }, [open]);

  const discoveryHref = getDiscoveryCallHref();

  return (
    <>
      {/* ================================================================
          DESKTOP / MAIN HEADER
          ================================================================ */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-border bg-background/85 shadow-[0_20px_40px_rgba(2,6,23,0.18)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Container
          as="div"
          className="flex h-16 items-center justify-between gap-4 lg:h-[4.3rem]"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground sm:text-base"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-primary/25 bg-primary/[0.08] text-xs font-bold text-primary shadow-[inset_0_1px_rgba(255,255,255,0.08)] transition group-hover:border-primary/50 group-hover:bg-primary/[0.13]">
              AV
            </span>

            <span>{company.displayName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href ? "page" : undefined
                }
                className={cn(
                  "relative py-2 text-sm transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-[0.9rem] after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                  pathname === item.href
                    ? "font-medium text-foreground after:scale-x-100"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href={discoveryHref}
              size="md"
              className="shadow-[0_10px_30px_rgba(94,234,212,0.16)]"
            >
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-white/[0.025] text-foreground transition hover:border-primary/35 hover:bg-white/[0.06] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </Container>
      </header>

      {/* ================================================================
          MOBILE MENU

          IMPORTANT:
          This is intentionally OUTSIDE the sticky header.

          Keeping the fixed menu outside the backdrop-filter header
          prevents the mobile menu from becoming transparent/hidden
          after scrolling.
          ================================================================ */}
      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 top-16 bottom-0 z-[60] border-t border-border/80 bg-[#07131c] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Separate backdrop layer */}
          <div className="absolute inset-0 -z-10 bg-[#07131c]/[0.98] backdrop-blur-2xl" />

          <Container className="relative flex h-full min-h-0 flex-col overflow-y-auto py-8">
            {/* Mobile Navigation */}
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    pathname === item.href ? "page" : undefined
                  }
                  className={cn(
                    "rounded-xl border border-transparent px-4 py-3 text-lg text-foreground transition-colors hover:border-border hover:bg-surface",
                    pathname === item.href &&
                      "border-primary/20 bg-primary/[0.06] text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button
                href={discoveryHref}
                size="lg"
                className="w-full"
              >
                Book a Discovery Call
              </Button>

              <button
                ref={closeRef}
                type="button"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                onClick={() => setOpen(false)}
              >
                Close menu
              </button>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
