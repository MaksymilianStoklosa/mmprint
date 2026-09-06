import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Clock3,
  Handshake,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { getPublishedProductConfigs } from "@/lib/products";
import { toProductCatalog } from "@/lib/products";

const reviewItems = [
  {
    name: "Rafał Ż.",
    text: "Proces jest intuicyjny, szybki i przejrzysty. Cena była jasna od początku, a realizacja bezproblemowa.",
  },
  {
    name: "Anna K.",
    text: "Doskonała jakość druku i bardzo dobre doradztwo. Zdecydowaliśmy się na kolejne zamówienie.",
  },
  {
    name: "Michał P.",
    text: "Najważniejsze było szybkie zamówienie i profesjonalna obsługa. Wykonanie było zgodne z oczekiwaniami.",
  },
  {
    name: "Katarzyna L.",
    text: "Doceniam świetny kontakt i konkretne podejście. Otrzymaliśmy materiały reklamowe dokładnie takie, jakich potrzebowaliśmy.",
  },
  {
    name: "Tomasz W.",
    text: "Duży plus za terminowość i jakość wydruku. Cały proces przebiegł sprawnie, a efekt końcowy zrobił bardzo dobre wrażenie.",
  },
  {
    name: "Monika S.",
    text: "Zamówienie zostało dobrze przygotowane i dostarczone na czas. Na pewno wrócimy przy kolejnych kampaniach.",
  },
];

export default async function Home() {
  const productCatalog = toProductCatalog(getPublishedProductConfigs());
  const featuredProducts = productCatalog.slice(0, 8);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="mx-auto max-w-7xl rounded-3xl bg-zinc-100 px-5 pb-10 pt-10 md:px-6 md:pb-10 md:pt-12 lg:flex lg:h-[60vh] lg:max-h-[60vh] lg:items-center lg:px-6">
          <div className="grid w-full items-center gap-8 md:gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <h1 className="max-w-xl text-3xl font-black tracking-[-0.06em] text-foreground md:text-5xl lg:text-6xl">
                Druk na miarę Twoich potrzeb.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">
                Profesjonalne usługi, które wyróżnią Twoją markę. Od wizytówek
                po wielkoformatowe banery – realizujemy każdy projekt z
                najwyższą starannością.
              </p>

              <div className="mt-10 flex flex-col gap-4 md:mt-8 sm:flex-row">
                <a
                  href="#oferta"
                  className={
                    buttonVariants({ size: "lg" }) +
                    " inline-flex items-center gap-2 shadow-lg shadow-zinc-400/20"
                  }
                >
                  Zobacz ofertę <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-88 sm:max-w-[24rem] lg:max-w-80">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-zinc-300/35 blur-2xl" />
              <div className="aspect-5/4 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_25px_80px_-30px_rgba(24,24,27,0.25)] sm:aspect-4/5 lg:aspect-3/4">
                <Image
                  src="/mmprint/main.jpg"
                  alt="Materiały drukowane prezentujące ofertę drukarni"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="mt-10 bg-zinc-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Wybierz produkt, który odpowiada Twoim potrzebom
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((item) => (
                <Card
                  key={item.value}
                  className="h-full border-zinc-200 bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{item.label}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="/produkty" className={buttonVariants({ size: "lg" })}>
                Zobacz wszystko
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-7xl rounded-3xl bg-zinc-100 px-6 py-16">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              6 powodów, dla których warto skorzystać z naszych usług
            </h2>
            <p className="mt-3 text-muted-foreground">
              Łączymy jakość druku, przewidywalne terminy i realne wsparcie,
              żeby Twoje zamówienie było proste, szybkie i skuteczne.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Szybka realizacja</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dostosowujemy terminy do potrzeb klientów indywidualnych i
                    firmowych.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Profesjonalna jakość</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nowoczesny druk, kontrola jakości i dbałość o detale.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Obsługa na każdym etapie</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pomagamy dobrać materiał, format i wykończenie do
                    zamówienia.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <PackageCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Szeroka oferta produktów</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Wizytówki, ulotki, katalogi, plakaty i rozwiązania
                    dopasowane do różnych branż i budżetów.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">
                    Nowoczesne technologie druku
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Korzystamy ze sprawdzonych rozwiązań, które zapewniają
                    powtarzalny efekt i estetyczne wykonanie.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Partnerskie podejście</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Doradzamy praktycznie i uczciwie, aby pomóc wybrać najlepsze
                    rozwiązanie do celu kampanii.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="opinie" className="mt-10 bg-zinc-200/60 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Zaufali nam klienci
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">4.8 / 5</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {reviewItems.map((item) => (
                <Card
                  key={item.name}
                  className="border-border/80 bg-card/95 shadow-sm"
                >
                  <CardContent className="space-y-3 p-4">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-3.5 w-3.5 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-5 text-muted-foreground">
                      “{item.text}”
                    </p>
                    <div className="text-sm font-semibold">{item.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
