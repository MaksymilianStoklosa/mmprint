import type { Metadata } from "next";
import { Geist_Mono, PT_Serif } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMPRINT | Druk na miarę Twoich potrzeb.",
  description:
    "Profesjonalne usługi, które wyróżnią Twoją markę. Od wizytówek po wielkoformatowe banery – realizujemy każdy projekt z najwyższą starannością.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${ptSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <section className="bg-muted/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-12 text-center">
            <h2 className="text-balance text-2xl font-bold leading-tight text-foreground md:text-4xl">
              Nie znalazłeś tego, czego szukasz?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Opisz nam, czego potrzebujesz, a przygotujemy dla Ciebie
              indywidualną propozycję.
            </p>
            <Link
              href="/kontakt#formularz"
              className={buttonVariants({ size: "lg" }) + " mt-7"}
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </section>
        <SiteFooter />
      </body>
    </html>
  );
}
