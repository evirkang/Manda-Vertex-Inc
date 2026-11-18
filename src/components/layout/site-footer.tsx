// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import {
//   footerLegalLinks,
//   footerServiceLinks,
//   mainNav,
// } from "@/data/navigation";
// import { company, getLocationLine } from "@/data/company";
// import { Container } from "@/components/ui/container";

// export function SiteFooter() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="mt-auto border-t border-border bg-surface/80">
//       <div className="border-b border-border bg-surface-elevated/50">
//         <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
//               Start a conversation
//             </p>
//             <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
//               Technology shaped around your business.
//             </h2>
//           </div>
//           <Link
//             href="/contact"
//             className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors hover:text-primary sm:self-auto"
//           >
//             Contact Amanda Vertex
//             <ArrowUpRight aria-hidden="true" className="size-4" />
//           </Link>
//         </Container>
//       </div>

//       <Container className="py-12 lg:py-14">
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <span className="grid size-10 place-items-center rounded-md border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
//                 AV
//               </span>
//               <span className="text-base font-semibold text-foreground">
//                  {company.displayName} 
//               </span>
//             </Link>
//             <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
//               AI, software integration and digital product development for
//               practical business needs.
//             </p>
//             <p className="mt-3 text-sm text-muted-foreground">
//               {getLocationLine()}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
//               Explore
//             </p>
//             <ul className="mt-4 space-y-3">
//               {mainNav.filter((item) => item.label !== "Home").map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
//               Services
//             </p>
//             <ul className="mt-4 space-y-3">
//               {footerServiceLinks.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
//               Contact
//             </p>
//             <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
//               {company.email ? (
//                 <li>
//                   <a href={`mailto:${company.email}`} className="hover:text-primary">
//                     info@amandavertexinc.com
//                   </a>
//                 </li>
//               ) : null}
//               {company.phone ? (
//                 <li>
//                   <a href={`tel:${company.phone}`} className="hover:text-primary">
//                     {company.phone}
//                   </a>
//                 </li>
//               ) : null}
//               <li>
//                 <Link href="/contact" className="hover:text-primary">
//                   Send an inquiry
//                 </Link>
//               </li>
//             </ul>
//             {company.socialLinks.length > 0 ? (
//               <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
//                 {company.socialLinks.map((link) => (
//                   <li key={link.url}>
//                     <a
//                       href={link.url}
//                       className="text-sm text-muted-foreground hover:text-primary"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : null}
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
//           <p>© {year} Amanda Vertex Inc · All rights reserved.</p>
//           <ul className="flex flex-wrap gap-x-5 gap-y-2">
//             {footerLegalLinks.map((item) => (
//               <li key={item.href}>
//                 <Link href={item.href} className="hover:text-primary">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </Container>
//     </footer>
//   );
// }

import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import {
  footerLegalLinks,
  footerServiceLinks,
  mainNav,
} from "@/data/navigation";
import { company, getLocationLine } from "@/data/company";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface/80">
      <div className="border-b border-border bg-surface-elevated/50">
        <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Start a conversation
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
              Technology shaped around your business.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors hover:text-primary sm:self-auto"
          >
            Contact Amanda Vertex
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </Container>
      </div>

      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Company Information */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                AV
              </span>
              <span className="text-base font-semibold text-foreground">
                {company.displayName}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              AI, software integration and digital product development for
              practical business needs.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Calgary, Alberta, Canada
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {mainNav.filter((item) => item.label !== "Home").map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Contact
            </p>

            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span className="leading-6">
                  234 Saddlebrook Circle NE,
                  <br />
                  Calgary, AB, T3J 0K2,
                  <br />
                  Canada
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <a
                  href="tel:+14034620611"
                  className="transition-colors hover:text-primary"
                >
                  +1 403-462-0611
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <a
                  href="mailto:info@amandavertex.ca"
                  className="break-all transition-colors hover:text-primary"
                >
                  info@amandavertex.ca
                </a>
              </li>

              <li className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
                >
                  Send an inquiry
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </li>
            </ul>

            {company.socialLinks.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {company.socialLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Amanda Vertex Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLegalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
