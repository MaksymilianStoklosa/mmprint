# Kontext projektu: strona internetowa drukarni online

## 1. Cel projektu

Stworzenie strony internetowej dla drukarni online w Next.js z TypeScript, która będzie pełnić rolę profesjonalnej strony firmowej oraz głównego punktu sprzedaży dla klientów B2C i B2B. Główną funkcją strony będzie kalkulator szacunkowej ceny produkcji, który pozwala klientowi od razu sprawdzić orientacyjny koszt zamówienia.

Dodatkowo strona ma zawierać:

- sekcje firmowe i informacyjne,
- opinie klientów,
- dane kontaktowe,
- formularz kontaktowy,
- podstawowe elementy SEO,
- CTA prowadzące do zapytania ofertowego lub kontaktu.

## 2. Klient i odbiorcy

### Klient

mmprint świadcząca usługi poligraficzne dla:

- klientów indywidualnych (B2C),
- firm i instytucji (B2B).

### Główne grupy odbiorców

- klienci potrzebujący wizytówek, ulotek, plakatów, nadruków,
- firmy szukające materiałów reklamowych,
- osoby poszukujące szybkiej, prostej wyceny.

## 3. Główne założenia produktu

### Funkcjonalności MVP

- landing page / strona wizytówka drukarni,
- sekcje z ofertą usług,
- kalkulator cen z orientacyjnym kosztem,
- opinie klientów,
- formularz kontaktowy,
- dane kontaktowe i lokalizacja,
- SEO (title, meta description, Open Graph, nagłówki, struktura treści),
- responsywność mobile/desktop.

### Założenia UX

- maksymalnie prosty i szybki flow konwersji,
- kalkulator widoczny na stronie głównej lub tuż pod hero,
- przejrzysty język i krótki opis usług,
- CTA: „Policz cenę”, „Zapytaj o wycenę”, „Zadzwoń”.

## 4. Inspiracje i kierunek projektowy

Projekt ma być zbliżony stylistycznie i funkcjonalnie do rozwiązań oferowanych przez:

- drukomat.pl,
- drukujdobrzepl.

### Priorytety wizualne

- nowoczesny, czytelny layout,
- mocne CTA,
- przejrzysty układ sekcji,
- duży nacisk na konwersję i prostotę,
- profesjonalny, „produkcyjny” charakter marki.

## 5. Zakres funkcjonalny

### 5.1 Strona główna

- hero z głównym przekazem,
- sekcja z usługami,
- kalkulator ceny,
- sekcja „Jak działamy”,
- opinie klientów,
- FAQ,
- formularz kontaktowy,
- stopka z danymi firmy.

### 5.2 Mock usług do MVP

Na tym etapie nie ma priorytetu na pełną ofertę drukarską. Wystarczy zamockować kilka usług, które pokażą funkcjonalność strony i pozwolą sprawdzić UX kalkulatora.

Proponowane usługi w MVP:

- Wizytówki
- Ulotki
- Plakaty
- Kalendarze firmowe
- Teczki ofertowe
- Płyty PVC / Dibond (opcjonalnie jako usługa premium)

Każda usługa powinna mieć:

- krótki opis,
- ikonkę lub miniaturę,
- CTA „Policz cenę”,
- podstawowe parametry do kalkulacji,
- opcję „Zamów z wyceną”.

### 5.3 Układ strony i CTA

Układ strony powinien być prosty i zbliżony do schematu spotykanego na drukomat.pl i drukujdobrze.pl:

1. Hero z mocnym przekazem i CTA
   - „Policz cenę zamówienia”
   - „Poproś o wycenę”
   - „Zadzwoń do nas”

2. Sekcja głównych usług / produktów
   - karty z usługami,
   - każda karta zawiera nazwę, krótki opis i przycisk CTA,
   - układ typu „katalog usług” z mocnym naciskiem na konwersję.

3. Kalkulator ceny widoczny od razu po hero
   - lewa kolumna: wybór usługi i parametry,
   - prawa kolumna: podsumowanie i szacunkowa cena,
   - przycisk „Wyceń teraz” i „Zapytaj o realizację”.

4. Sekcja z zaletami / zaufaniem
   - termin realizacji,
   - jakość druku,
   - obsługa B2B/B2C,
   - opinie i recenzje,
   - gwarancja / szczegóły realizacji.

5. Sekcja opinii klientów
   - krótkie, konkretne opinie,
   - ocena 4.8/5,
   - social proof.

6. Formularz kontaktowy
   - wysyłka po kliknięciu w CTA z kalkulatora,
   - polite wypełniania z wybranymi parametrami,
   - komunikat „Dziękujemy, skontaktujemy się niezwłocznie”.

7. Stopka z danymi firmy
   - telefon,
   - e-mail,
   - lokalizacja,
   - linki do polityki prywatności i regulaminu.

### 5.4 Kalkulator cen

Kalkulator ma pozwalać klientowi na wybranie:

- typu usługi,
- formatu / rozmiaru,
- nakładu,
- materiału / papieru,
- wykończenia,
- koloru druku,
- terminu realizacji,
- dostawy lub odbioru.

Na podstawie tych parametrów ma się wyświetlać:

- orientacyjna cena,
- cena za sztukę,
- informacja o tym, że jest to wycena orientacyjna,
- przycisk do zapytania lub kontaktu.

### 5.5 Flow kalkulatora i CTA

Flow powinno być zgodne z typowym wzorcem ofert drukarskich:

1. Użytkownik wybiera usługę z mock listy (wizytówki, ulotki, plakaty, kalendarze, teczki ofertowe).
2. Wybiera parametry produktu: rozmiar, nakład, papier, wykończenie, kolor, termin.
3. Widzimy cenę aktualizowaną na żywo.
4. Klikamy „Zapytaj o realizację” lub „Policz cenę”.
5. Przechodzimy do formularza, który ma wcześniej uzupełnione dane z kalkulatora.
6. Po wysłaniu formularza użytkownik dostaje komunikat potwierdzający.

### 5.6 Formularz kontaktowy

- imię i nazwisko,
- firma (opcjonalnie),
- email,
- telefon,
- rodzaj zapytania,
- opis / wymagania,
- załącznik (opcjonalnie),
- walidacja pól,
- potwierdzenie wysłania.

### 5.7 SEO

- title i meta description na stronie głównej i podstronach,
- nagłówki H1/H2/H3,
- Open Graph,
- struktura treści z fokus na usługi drukarskie,
- alt texty przy grafikach,
- słowa kluczowe i landing pages dla głównych usług.

## 6. Technologia

### Stack techniczny

- Next.js,
- TypeScript,
- React,
- Tailwind CSS,
- formularze i walidacja,
- komponenty modularne,
- możliwa integracja z API do wysyłki formularza.

### Architektura

- app router w Next.js,
- modularne komponenty UI,
- logika cen rozdzielona do osobnego modułu,
- dane strony w dedykowanych plikach lub konfiguracji,
- prosty i czytelny układ projektowy do dalszego rozwoju.

## 7. Założenia MVP vs późniejsze rozszerzenia

### MVP

- jedna główna strona z sekcjami firmowymi,
- kalkulator cen,
- formularz kontaktowy,
- SEO podstawowe,
- responsywność,
- statyczne dane o usługach i opiniach.

### Rozszerzenia po wdrożeniu

- logowanie / panel admina,
- baza cen / dynamiczne stawki,
- integracja z CRM,
- CMS do zarządzania treścią,
- powiązanie z systemem zamówień,
- wielojęzyczność.

## 8. Kryteria sukcesu

Projekt uznajemy za udany, jeżeli:

- użytkownik może szybko policzyć orientacyjną cenę,
- formularz zachęca do kontaktu i działa poprawnie,
- strona jest profesjonalna i spójna wizualnie,
- sekcje informacyjne są wystarczające do budowy zaufania,
- strona spełnia podstawowe wymagania SEO,
- strona jest łatwa do utrzymania i rozwijania.

## 9. Plan realizacji

### Faza 1 - Discovery i przygotowanie kontekstu

- zebranie wymagań klienta,
- analiza konkurencji,
- określenie funkcji MVP,
- zapisanie priorytetów biznesowych.

### Faza 2 - UX i prototyp

- układ strony i sekcji,
- prototyp kalkulatora,
- sprawdzenie flow konwersji,
- zatwierdzenie struktury strony.

### Faza 3 - Implementacja

- inicjalizacja projektu Next.js + TypeScript,
- tworzenie layoutu i sekcji,
- implementacja kalkulatora,
- formularz kontaktowy,
- responsywność.

### Faza 4 - SEO i optymalizacja

- meta tagi,
- poprawa semantyki i treści,
- optymalizacja obrazów i wydajności,
- testy SEO i dostępności.

### Faza 5 - QA i launch

- testy funkcjonalne,
- testy responsywności,
- poprawki UX,
- finalna publikacja.

## 10. Zadania do realizacji

### Priorytet 1 - Założenia i planowanie

- [ ] Zdefiniowanie odbiorców i celów strony
- [ ] Określenie głównych usług drukarskich do prezentacji
- [ ] Przygotowanie listy sekcji i wymaganych funkcji
- [ ] Wybór technologii: Next.js + TypeScript
- [ ] Przygotowanie dokumentu kontekstowego projektu

### Priorytet 2 - UX i prototyp

- [ ] Opracowanie układu strony głównej
- [ ] Zaprojektowanie sekcji hero i CTA
- [ ] Opracowanie układu kalkulatora cen
- [ ] Przygotowanie flow: kalkulator → zapytanie → kontakt
- [ ] Przygotowanie prototypu strony wizytówki firmy

### Priorytet 3 - Implementacja

- [ ] Inicjalizacja projektu Next.js
- [ ] Konfiguracja TypeScript i podstawowych bibliotek
- [ ] Budowa layoutu strony
- [ ] Implementacja sekcji usług i firmowych
- [ ] Implementacja kalkulatora cen
- [ ] Implementacja formularza kontaktowego
- [ ] Dodanie opinii klientów i FAQ
- [ ] Responsywność i poprawki wizualne

### Priorytet 4 - SEO i optymalizacja

- [ ] Ustawienie meta tagów na stronie głównej i podstronach
- [ ] Dodanie struktury nagłówków i treści SEO
- [ ] Optymalizacja zdjęć i wydajności strony
- [ ] Dodanie Open Graph i social metadata
- [ ] Weryfikacja dostępności i semantyki

### Priorytet 5 - Testowanie i wdrożenie

- [ ] Testy funkcjonalne kalkulatora
- [ ] Testy formularza kontaktowego
- [ ] Testy responsywności i cross-browser
- [ ] Poprawki po QA
- [ ] Finalna publikacja i monitorowanie

## 11. Notatka projektowa

Najważniejszym elementem projektu jest przejście od „strony wizytówki” do „strony sprzedażowej”. Kalkulator cen ma być głównym narzędziem konwersji i wizerunkiem profesjonalnej drukarni. Warto dążyć do tego, aby klient już na stronie głównej mógł zrozumieć ofertę, sprawdzić cenę i szybko przejść do kontaktu.

To dokument kontekstowy dla dalszej pracy projektowej i implementacyjnej.

## 12. Slownik domeny (CMS produktow i kalkulatora)

- Produkt: usluga drukarska dostepna w ofercie publicznej.
- Konfiguracja Produktu: zestaw ustawien produktu (content, formularz, ceny, SEO).
- Definicja Formularza: schema pol i walidacji dla konkretnego produktu.
- Pole Formularza: pojedynczy element wejscia danych (np. select, number).
- Opcja Pola: wartosc mozliwa do wyboru dla pola.
- Regula Ceny: element logiki wyceny (cena bazowa, mnoznik, doplata, rabat).
- Wariant Ceny: warunkowa regula ceny aktywowana przez zestaw parametrow.
- Wersja Konfiguracji: snapshot zmian produktu (draft albo published).
- Publikacja: operacja promujaca wersje draft na produkcyjny odczyt publiczny.
