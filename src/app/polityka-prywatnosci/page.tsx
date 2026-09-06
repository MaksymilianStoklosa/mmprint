import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Badge variant="outline" className="mb-4">
        Polityka prywatności
      </Badge>
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
        Polityka prywatności
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Informacje ogólne
          </h2>
          <p className="mt-3">
            Administratorem danych osobowych jest MM PRINT Mariusz Stokłosa, ul.
            Jerzego Bajana 13/28, 54-129 Wrocław, NIP: 547-192-25-98, e-mail:{" "}
            <a
              href="mailto:mariusz.stoklosa@mmprint.pl"
              className="font-medium text-foreground hover:text-primary"
            >
              mariusz.stoklosa@mmprint.pl
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Rodzaje danych
          </h2>
          <p className="mt-3">
            W ramach obsługi zapytań, formularza kontaktowego i wyceny możemy
            zbierać dane identyfikacyjne, takie jak imię, nazwisko, adres
            e-mail, informacje dotyczące zamówienia oraz dane wymagane do
            realizacji usługi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Cel przetwarzania
          </h2>
          <p className="mt-3">
            Dane przetwarzamy w celu obsługi zapytań, przygotowania oferty,
            realizacji zamówień, kontaktu z klientem oraz rozwoju i ulepszania
            naszych usług.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Podstawy prawne
          </h2>
          <p className="mt-3">
            Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 lit. b
            RODO w zakresie realizacji umowy lub działań przedumownych oraz art.
            6 ust. 1 lit. f RODO w zakresie uzasadnionego interesu
            administratora.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Odbiorcy danych
          </h2>
          <p className="mt-3">
            Dane mogą być przekazywane wyłącznie podmiotom obsługującym nasze
            usługi, w tym dostawcom technologicznym, operatorom poczty
            elektronicznej i narzędzi komunikacyjnych, a także organom
            publicznym, jeśli wymagają tego przepisy prawa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Okres przechowywania
          </h2>
          <p className="mt-3">
            Dane przechowujemy tak długo, jak jest to niezbędne do realizacji
            celu, w którym zostały zebrane, oraz przez okres wymagany przepisami
            prawa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Prawa użytkownika
          </h2>
          <p className="mt-3">
            Osoba, której dane dotyczą, ma prawo dostępu do swoich danych, ich
            sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
            danych oraz wniesienia sprzeciwu wobec przetwarzania. W przypadku
            pytań dotyczących ochrony danych można skontaktować się z nami pod
            adresem e-mail{" "}
            <a
              href="mailto:mariusz.stoklosa@mmprint.pl"
              className="font-medium text-foreground hover:text-primary"
            >
              mariusz.stoklosa@mmprint.pl
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            8. Pliki cookies
          </h2>
          <p className="mt-3">
            Strona może wykorzystywać pliki cookies w celu zapewnienia
            prawidłowego działania witryny oraz analizy ruchu. Użytkownik może
            zmienić ustawienia przeglądarki dotyczące cookies.
          </p>
        </section>

        <div className="pt-6">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Powrót do strony głównej
          </Link>
        </div>
      </div>
    </main>
  );
}
