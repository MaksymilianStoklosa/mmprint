import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Dane firmowe
            </h3>
            <div className="mt-4 grid gap-6 text-sm text-muted-foreground md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">
                      MM PRINT Mariusz Stokłosa
                    </p>
                    <p>ul. Jerzego Bajana 13/28</p>
                    <p>54-129 Wrocław</p>
                    <p>NIP: 547-192-25-98</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="tel:+48504551354"
                    className="font-medium text-foreground hover:text-primary"
                  >
                    +48 504 551 354
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:mariusz.stoklosa@mmprint.pl"
                    className="font-medium text-foreground hover:text-primary"
                  >
                    mariusz.stoklosa@mmprint.pl
                  </a>
                </div>
              </div>

              <div className="md:pl-4">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Godziny pracy</p>
                    <p>poniedziałek - piątek</p>
                    <p>8:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 md:flex md:justify-end md:pt-0">
            <div className="text-left">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                INFORMACJE
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <Link
                  href="/produkty"
                  className="font-medium text-foreground hover:text-primary"
                >
                  Produkty
                </Link>
                <Link
                  href="/o-nas"
                  className="font-medium text-foreground hover:text-primary"
                >
                  O nas
                </Link>
                <Link
                  href="/kontakt"
                  className="font-medium text-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
                <Link
                  href="/polityka-prywatnosci"
                  className="font-medium text-foreground hover:text-primary"
                >
                  Polityka prywatności
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 text-center text-sm text-muted-foreground">
          © 2026 MMRPINT. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
