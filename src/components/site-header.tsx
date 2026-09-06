"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

const navLinkClassName =
  "relative inline-flex pb-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl px-3 py-3 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="flex min-w-0 shrink-0 items-center">
            <div className="flex h-12 items-center justify-start overflow-hidden rounded-xl bg-transparent sm:h-14">
              <Image
                src="/mmprint/mm-print-transparent.webp"
                alt="MM Print"
                width={136}
                height={56}
                className="h-9 w-auto object-contain object-left sm:h-12"
                priority
              />
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-6">
            <nav className="hidden items-center gap-8 md:flex">
              <Link href="/produkty" className={navLinkClassName}>
                Produkty
              </Link>
              <Link href="/o-nas" className={navLinkClassName}>
                O nas
              </Link>
              <Link href="/#opinie" className={navLinkClassName}>
                Opinie
              </Link>
              <Link href="/kontakt" className={navLinkClassName}>
                Kontakt
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={isMenuOpen}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground md:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="absolute inset-x-3 top-full z-40 mt-2 overflow-hidden rounded-xl bg-background shadow-lg md:hidden sm:inset-x-6">
            <div className="space-y-1 p-2">
              <Link
                href="/produkty"
                className="block rounded-md px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Produkty
              </Link>
              <Link
                href="/o-nas"
                className="block rounded-md px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                O nas
              </Link>
              <Link
                href="/#opinie"
                className="block rounded-md px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Opinie
              </Link>

              <Link
                href="/kontakt"
                className="block rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
