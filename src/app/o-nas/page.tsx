const differentiators = [
  {
    title: "Budujemy relacje",
    text: "Nasi klienci zostają z nami na lata, bo wiedzą, że mogą na nas polegać. Ich sukcesy to nasze referencje.",
  },
  {
    title: "Działamy szybko i skutecznie",
    text: "Jeden telefon, jedna wycena, jeden kontakt. Oszczędzamy Twój najcenniejszy zasób – czas.",
  },
  {
    title: "Wieloletnie doświadczenie",
    text: "Znamy poligrafię od podszewki. Ta wiedza przekłada się na optymalne rozwiązania dla Twoich projektów.",
  },
  {
    title: "Gwarantujemy najwyższą jakość",
    text: "Współpracujemy tylko z drukarniami, które spełniają nasze rygorystyczne standardy. Twoja marka zasługuje na najlepsze.",
  },
  {
    title: "Myślimy jak przedsiębiorca",
    text: "Rozumiemy, że każda złotówka ma znaczenie. Dlatego znajdziemy rozwiązanie, które da Ci najlepszy efekt przy optymalnym koszcie.",
  },
  {
    title: "Jeden kontakt do wszystkiego",
    text: "Jeden numer telefonu, jedna osoba kontaktowa, jedna faktura. Wszystko uporządkowane i pod kontrolą – Twoja wygoda to nasz priorytet.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-4xl space-y-5">
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">
              O nas
            </h1>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-foreground/90 md:text-lg">
            <p>
              Jestem <strong>Mariusz</strong> – ekspert w branży poligraficznej
              z kilkudziesięcioletnim doświadczeniem, który postanowił
              wykorzystać swoją wiedzę i kontakty, aby pomóc firmom oszczędzać
              na druku bez kompromisów w jakości.
            </p>

            <p>
              Moja droga w branży rozpoczęła się lata temu w drukarniach
              offsetowych B1 we Wrocławiu. Przechodząc wszystkie szczeble
              kariery – od przedstawiciela handlowego po dyrektora handlowego
              zarządzającego zespołem managerów – poznałem branżę poligraficzną
              od każdej strony.
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Dlaczego założyłem MM PRINT?
            </h2>

            <p>
              Przez lata pracy zauważyłem, że firmy często przepłacają za druk –
              nie dlatego, że chcą, ale dlatego, że nie wiedzą, gdzie szukać
              najlepszych rozwiązań. Postanowiłem to zmienić.
            </p>

            <p>
              MM PRINT to nie drukarnia – to usługa doradcza, która łączy
              klientów z najlepszymi drukarniami offsetowymi i cyfrowymi w
              Polsce. Dzięki mojej sieci kontaktów B2B potrafię wynegocjować
              warunki, których indywidualny klient nie uzyska samodzielnie.
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Moje doświadczenie to Twoja korzyść
            </h2>

            <p>
              Kilkadziesiąt lat w branży dało mi coś bezcennego – umiejętność
              szybkiego dostosowania rozwiązania do konkretnych potrzeb i
              budżetu. Wiem, kiedy warto wybrać druk offsetowy, a kiedy cyfrowy.
              Znam wszystkie sposoby na optymalizację kosztów bez utraty
              jakości.
            </p>

            <p>
              Najważniejsze dla mnie jest zaufanie klientów – wielu z nich
              współpracuje ze mną od lat, zlecając mi kolejne projekty. To dla
              mnie najlepsza rekomendacja.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-200/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Co nas wyróżnia
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-card/95 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
