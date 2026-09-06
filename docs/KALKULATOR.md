# Plan: zarzadzanie contentem i konfiguracja kalkulatora przez CMS-in-app

## 1. Cel

Zbudowac wewnetrzne narzedzie administracyjne wewnatrz obecnej aplikacji, ktore pozwala:

- zarzadzac katalogiem produktow,
- definiowac rozne formularze per produkt,
- konfigurowac opcje, cenniki i reguly wyceny,
- publikowac zmiany bez dostepu dla koncowego uzytkownika.

Model docelowy: front publiczny renderuje produkty i kalkulator tylko na podstawie opublikowanej konfiguracji CMS.

## 2. Uzgodniony jezyk domenowy

- Produkt: oferta drukarska prezentowana klientowi, np. wizytowki lub ulotki.
- Konfiguracja Produktu: komplet ustawien produktu (content + formularz + ceny).
- Definicja Formularza: struktura formularza dla danego produktu.
- Pole Formularza: pojedyncze pole (select, number, text, checkbox) wraz z walidacja.
- Opcja Pola: pojedyncza wartosc wyboru dla pola typu select/radio.
- Regula Ceny: skladnik algorytmu wyceny (bazowa cena, mnoznik, doplata, rabat).
- Wariant Ceny: warunkowa galaz cennika dla zestawu parametrow.
- Wersja Konfiguracji: snapshot zmian w trybie draft lub published.
- Publikacja: operacja promujaca wersje draft na publiczna.

## 3. Granice kontekstow

### 3.1 Katalog Publiczny

Odpowiada za odczyt opublikowanych danych:

- lista produktow,
- tresci produktowe,
- formularz per produkt,
- obliczenie ceny po stronie serwera.

### 3.2 Panel Wewnetrzny (CMS-in-app)

Odpowiada za zapis i zarzadzanie:

- CRUD produktow,
- edycja formularzy,
- edycja cennika i regul,
- workflow draft/publish,
- wersjonowanie i rollback.

### 3.3 Kontrola Dostepu

Odpowiada za to, kto moze wejsc do panelu i publikowac.

Role minimalne:

- Admin: pelny dostep, publikacja i rollback.
- Editor: edycja draft, brak publikacji.

## 4. Model danych (poziom domeny)

## 4.1 Encje

- Product
  - id
  - slug
  - status (active, inactive)
  - marketing content (nazwa, opis, cena startowa display)

- ProductConfig
  - productId
  - version
  - state (draft, published, archived)
  - formDefinition
  - pricingDefinition
  - seoDefinition
  - updatedBy, updatedAt

- FormField
  - id
  - key
  - label
  - type
  - required
  - defaultValue
  - validationRules
  - visibilityRules
  - options

- PricingRule
  - id
  - type (base, multiplier, additive, discount)
  - targetKey (np. format, material)
  - condition
  - value
  - priority

## 4.2 Value Objects

- Money (amount, currency)
- Range (min, max)
- OptionValue (value, label, metadata)
- RuleCondition (field, operator, expectedValue)

## 5. Inwarianty domenowe

- Dokladnie jedna konfiguracja published per produkt.
- Konfiguracja published jest niemodyfikowalna; edycja tylko przez nowy draft.
- Pole uzyte w pricingDefinition musi istniec w formDefinition.
- Kazdy select/radio musi miec >= 1 opcje.
- Nie mozna opublikowac konfiguracji z bledami walidacji.

## 6. Konfiguracja formularza per produkt

Kazdy produkt ma wlasny schema-driven formularz.

Przyklad (uproszczony):

```json
{
  "productSlug": "wizytowki",
  "formDefinition": {
    "fields": [
      {
        "key": "format",
        "type": "select",
        "label": "Format",
        "required": true,
        "options": [
          { "value": "85x55", "label": "85x55 mm" },
          { "value": "90x50", "label": "90x50 mm" }
        ]
      },
      {
        "key": "papier",
        "type": "select",
        "label": "Papier",
        "required": true,
        "options": [
          { "value": "standard", "label": "Standard" },
          { "value": "premium", "label": "Premium" }
        ]
      },
      {
        "key": "naklad",
        "type": "number",
        "label": "Naklad",
        "required": true,
        "validationRules": { "min": 100, "max": 10000, "step": 50 }
      }
    ]
  }
}
```

## 7. Konfiguracja cen per produkt

Podejscie: composable rules engine.

- base: cena bazowa produktu,
- multiplier: mnozniki dla opcji (papier premium, kolor, format),
- additive: doplaty stale (np. dostawa),
- conditional: reguly aktywowane warunkiem (np. rabat od progu nakladu).

Kolejnosc liczenia:

1. base
2. iloczyn mnoznikow
3. suma doplat/rabatow
4. zaokraglenie i format waluty

## 8. Architektura w obecnej aplikacji

## 8.1 Publiczna czesc

- [src/app/produkty/page.tsx](src/app/produkty/page.tsx): odczyt opublikowanego katalogu z backendu.
- [src/app/kalkulator/page.tsx](src/app/kalkulator/page.tsx): dynamiczny formularz renderowany z formDefinition.
- [src/lib/pricing.ts](src/lib/pricing.ts): przejscie z twardych map na silnik regul oparty o pricingDefinition.

## 8.2 Wewnetrzny panel

Nowe obszary (proponowane):

- src/app/admin/login
- src/app/admin/products
- src/app/admin/products/[slug]/content
- src/app/admin/products/[slug]/form
- src/app/admin/products/[slug]/pricing
- src/app/admin/products/[slug]/versions

## 8.3 Dostep

- middleware dla /admin/\*,
- sesja + role,
- brak linkow do panelu w publicznej nawigacji,
- opcjonalnie allowlist IP dla panelu.

## 9. Plan wdrozenia (iteracyjny)

## Faza 1: Fundament danych

- zaprojektowac schemat encji Product i ProductConfig,
- dodac wersjonowanie draft/published,
- przygotowac API odczytu opublikowanej konfiguracji.

## Faza 2: Dynamiczny formularz

- renderer pol po typie (select, number, text, checkbox),
- runtime walidacji na podstawie validationRules,
- obsluga visibilityRules.

## Faza 3: Silnik cen

- zbudowac evaluator pricingDefinition,
- zastapic stale mapy cenowe,
- testy scenariuszy (per produkt).

## Faza 4: Panel CMS-in-app

- CRUD produktow,
- edytor formularza,
- edytor regul cenowych,
- walidacja przed publikacja,
- podglad draft.

## Faza 5: Publikacja i bezpieczenstwo

- publish/rollback,
- audit log zmian,
- twarda kontrola roli Admin vs Editor,
- monitoring bledow konfiguracji.

## 10. Kryteria akceptacji

- Kazdy produkt moze miec inny formularz bez zmian w kodzie UI.
- Admin moze zmienic pola/opcje/ceny z panelu i opublikowac.
- Publiczny kalkulator korzysta tylko z wersji published.
- Edytor nie ma uprawnien do publikacji.
- Bledna konfiguracja nie przechodzi publikacji.

## 11. Ryzyka i decyzje

- Ryzyko: zbyt elastyczny model regul utrudni utrzymanie.
  - Mitigacja: ograniczyc operatorzy i typy regul w MVP.
- Ryzyko: blad konfiguracji zatrzyma kalkulacje.
  - Mitigacja: walidacja pre-publish + fallback na poprzednia wersje.
- Ryzyko: dostep do panelu przez osoby niepowolane.
  - Mitigacja: middleware, role, logowanie, opcjonalny VPN/IP allowlist.

## 12. Zakres MVP CMS

Na start wystarczy:

- 3 produkty,
- 3-6 pol na produkt,
- 3 typy regul cenowych (base, multiplier, additive),
- workflow draft/publish,
- podstawowy audit log.

To daje szybkie wdrozenie i od razu spelnia cel: kazdy produkt ma inny formularz i cene konfigurowana z poziomu ukrytego panelu administracyjnego.
