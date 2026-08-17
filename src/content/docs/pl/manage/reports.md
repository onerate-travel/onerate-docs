---
title: Raporty
description: Co Państwo sprzedali, filtrowane po dacie zameldowania i statusie, w rozbiciu na dostawców, miesiące, osoby, oddziały i klientów, z eksportem do CSV.
---

**Raporty** są tylko do odczytu. To Twoje własne rezerwacje, zsumowane. Dostępne dla właścicieli,
administratorów i agentów; nie dla klientów.

## Filtry

- **Zameldowanie od / do** — zakres na **pobycie**, a nie na momencie złożenia rezerwacji. Raport za
  sierpień to raport pobytów sierpniowych.
- **Status** — jeden [status rezerwacji](/pl/booking/statuses/) albo wszystkie.

## Tabela

Jeden wiersz na rezerwację: zameldowanie, hotel, cel, gość, Państwa **numer teczki**, **oddział**, kto
**przyjął rezerwację**, dostawca, status, **netto**, **sprzedaż** oraz **warunki anulowania** w
brzmieniu z chwili rezerwacji.

Powyżej: liczba rezerwacji, **Razem netto** i **Razem sprzedaż** — jedna para na walutę. Różnica
między nimi to Państwa marża dla przefiltrowanego zbioru.

## Rozbicia

Dwa dotyczą Państwa oferty:

- **Według dostawcy** — rezerwacje, netto i sprzedaż na dostawcę. To liczba, którą warto czytać obok
  [preferencji dostawców](/pl/manage/preferences/): mówi, czy przypięcie albo reguła procentowa
  rzeczywiście dowozi wolumen, dla którego ją Państwo ustawili.
- **Według miesiąca zameldowania** — to samo, według miesiąca pobytu.

Trzy dotyczą Państwa własnego kształtu:

- **Według osoby** — kto co sprzedał. Nazwane adresem e-mail, bo imię nie jest unikalne, a wewnętrzny
  identyfikator nie jest czytelny.
- **Według oddziału** — które biuro co sprzedało.
- **Według klienta** — od którego klienta korporacyjnego pochodzi wolumen.

Wiersze, które do nikogo nie należą, dostają **własny segment**, zamiast zostać pominięte: rezerwacja
sprzed istnienia oddziałów albo złożona przez usunięte już konto wciąż jest rezerwacją, a pominięcie
jej sprawiłoby, że liczby na osobę nie sumują się do Państwa całości.

Każdy segment jest **na walutę**, z tego samego powodu co sumy: OneRate niczego nie przelicza, więc
oddział handlujący w dwóch walutach to dwa segmenty — arytmetycznie poprawnie, zamiast jednej liczby,
która nic nie znaczy.

## Eksport

**Eksportuj CSV** pobiera przefiltrowane wiersze. Te same kolumny co w tabeli, więc suma w arkuszu
zgadza się z tym, co jest na ekranie.

Jeśli się nie uda, spróbuj ponownie — nic nie zapisuje się częściowo.

## Dwie notki, które zmieniają znaczenie sum

Przeczytaj obie, zanim podasz komukolwiek liczbę.

### Waluta

> 3 rezerwacji jest wycenionych w USD, GBP i NIE są ujęte w sumach w EUR powyżej. OneRate nie
> przelicza walut.

Rezerwacje w walucie innej niż Twoja waluta sprzedaży są **pomijane w sumach** — nie są przeliczane
po wymyślonym kursie. Nadal są w tabeli; po prostu nie są sumowane do liczby, do której nie należą.

Jeśli ta notka pojawia się przy każdym raporcie, Twoja waluta sprzedaży prawdopodobnie nie odpowiada
temu, jak faktycznie handlujesz. Zobacz [Ceny](/pl/manage/pricing/).

### Obcięcie

> Pokazano tylko pierwsze 1000 rezerwacji, a sumy powyżej obejmują wyłącznie je. Zawęź zakres
> zameldowania, aby zobaczyć pełny raport.

Duży zakres jest ograniczany. **Sumy dotyczą tylko pokazanych wierszy** — nie są częściowym
oszacowaniem większej liczby. Zawęź zakres zameldowania i uruchom ponownie; dwa raporty półroczne są
dokładne tam, gdzie jeden obcięty rok nie jest.

## Czego tu nie ma

Żadnej księgi, żadnych sald, żadnego wiekowania, żadnego stanu płatności, żadnego fakturowania.
OneRate nigdy nie dotyka pieniędzy z rezerwacji, więc nie ma nic do powiedzenia o tym, co zostało
zapłacone — tylko o tym, co zostało sprzedane. Zobacz [Ceny](/pl/manage/pricing/).

## Miesięczna rutyna, która działa

1. Ustaw zakres zameldowania na zeszły miesiąc, status **Potwierdzona**.
2. Przeczytaj **Netto łącznie** wobec **Sprzedaży łącznie** — tyle zarobiłeś.
3. Sprawdź notkę o walutach. Jeśli wiersze są wyłączone, zajmij się nimi osobno.
4. Przeczytaj **Wg dostawcy** wobec swoich umów i celów wolumenowych.
5. Wyeksportuj CSV dla osoby prowadzącej Twoją księgowość.

Potem, osobno, ustaw status na **Anulowana** dla tego samego zakresu i przeczytaj opłaty za
anulowanie na tych rezerwacjach. Opłaty naliczone przez dostawcę, których się nie spodziewałeś, są
najtańszą rzeczą do wykrycia wcześnie i najdroższą do wykrycia przy fakturze.
