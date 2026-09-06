import Link from "next/link";
import Image from "next/image";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Skontaktuj się z nami i zapytaj o wycenę
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-border/80 bg-card p-5 lg:flex lg:flex-col">
          <CardHeader>
            <CardTitle>Kontakt</CardTitle>
            <CardDescription>
              Jesteśmy gotowi pomóc Ci dobrać odpowiedni produkt i cenę.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col text-sm text-muted-foreground">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:mariusz.stoklosa@mmprint.pl"
                  className="font-medium text-foreground hover:text-primary"
                >
                  mariusz.stoklosa@mmprint.pl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+48504551354"
                  className="font-medium text-foreground hover:text-primary"
                >
                  +48 504 551 354
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div className="space-y-1">
                  <p>MM PRINT Mariusz Stokłosa</p>
                  <p>ul. Jerzego Bajana 13/28</p>
                  <p>54-129 Wrocław</p>
                  <p>NIP: 547-192-25-98</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Godziny pracy</p>
                  <p>poniedziałek - piątek</p>
                  <p>8:00 - 16:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex min-h-28 items-center justify-center border-t border-border/70 py-6">
              <Image
                src="/mmprint/mm-print-transparent.webp"
                alt="Logo firmy MM Print"
                width={260}
                height={72}
                className="h-auto w-full max-w-[260px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card id="formularz" className="border-border/80 bg-card p-5">
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input id="name" placeholder="Jan Kowalski" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Firma</Label>
              <Input id="company" placeholder="Nazwa firmy" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jan@firma.pl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Opis zamówienia</Label>
              <Textarea
                id="message"
                placeholder="Napisz, czego potrzebujesz..."
                className="min-h-28"
              />
            </div>

            <div className="flex items-start gap-3 rounded-md border border-border/70 p-3 text-sm text-muted-foreground">
              <input
                id="privacy"
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                required
              />
              <Label
                htmlFor="privacy"
                className="leading-6 font-normal text-left"
              >
                <span className="inline-block">
                  Zapoznałem(-am) się z treścią{" "}
                </span>
                <Link
                  href="/polityka-prywatnosci"
                  className="font-semibold text-foreground underline underline-offset-4 hover:text-primary"
                >
                  polityki prywatności.
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Wyślij zapytanie
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
