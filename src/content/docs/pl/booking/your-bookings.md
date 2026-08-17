---
title: Twoje rezerwacje
description: Znalezienie rezerwacji, co zapisuje strona szczegółów, zatwierdzanie, opcje, vouchery, przypomnienia o anulowaniu i usuwanie danych gości.
---

## Lista

**Rezerwacje** zawiera każdą rezerwację złożoną przez Twoją agencję, u dowolnego dostawcy.

Filtruj i szukaj:

- **Status** — jeden status albo wszystkie
- **Zameldowanie od / do** — zakres dat pobytu, a nie momentu rezerwacji
- **Znajdź** — dowolny tekst po nazwisku gościa, hotelu i numerze potwierdzenia u dostawcy

Kolumny: hotel, gość, pobyt, dostawca, status, cena sprzedaży, utworzona. Suma stoi nad listą, a
długie listy są stronicowane.

Rezerwacja, której dane gościa usunięto, pokazuje *dane gościa usunięte* zamiast nazwiska. Sama
rezerwacja pozostaje.

:::note
**Rezerwacje klientów** to osobny ekran: rezerwacje złożone przez użytkowników Twoich klientów. Te
same kolumny plus klient, do którego należą, oraz filtr po nim. Sami klienci widzą tylko własne
rezerwacje, na własnym ekranie.
:::

## Strona szczegółów

Otwórz rezerwację, aby zobaczyć wszystko, co o niej zapisano.

### Rezerwacja

Hotel, status, dostawca, **numer potwierdzenia**, zameldowanie, wymeldowanie, gość główny, cena
sprzedaży, **oddział**, który ją przyjął, i **kto** ją przyjął.

Jeśli Państwa biuro ma [pola biura](/pl/manage/settings/#pola-biura), wartości zapisane przy tej
rezerwacji pojawiają się we własnej sekcji. Są takie, jakie były **wtedy**: pole zdefiniowane
później jest tu puste, a wycofane wciąż pokazuje, czym rezerwację oznaczono.

Numer potwierdzenia należy do dostawcy — to on identyfikuje u niego rezerwację, gdybyś musiał
zadzwonić.

### Koszty i opłaty

Ta sekcja nie jest pokazywana klientom.

| Wiersz | Czym jest |
| --- | --- |
| **Wycenione przy rezerwacji** | Cena netto dostawcy w chwili, gdy potwierdziłeś. |
| **Potwierdzone przez dostawcę** | To, z czym dostawca faktycznie wrócił. |
| **Spodziewana opłata za anulowanie** | Ile kosztowałoby anulowanie teraz, według warunków zapisanych przy rezerwacji. |
| **Cena sprzedaży** | Za ile to sprzedałeś — netto plus Twoja marża. |

Jeśli dwie pierwsze się różnią, strona to powie:

> Dostawca potwierdził inną kwotę niż wycenił. Sprzedałeś według wyceny.

To realne zdarzenie, na które warto zareagować, a nie artefakt zaokrąglenia. Twoja marża na tej
rezerwacji nie jest tą, którą zakładałeś.

### Dlaczego ten dostawca

Ten sam zapis, który oferuje ekran wyników, przechowywany razem z rezerwacją: które oferty
rozważono i co przesądziło. Pozostaje dostępny długo po zakończeniu sesji wyszukiwania.

### Historia zdarzeń

Każdy stan, przez który przeszła rezerwacja, po kolei, z godzinami. To pierwsze miejsce, w które
warto zajrzeć, gdy rezerwacja zrobiła coś, czego się nie spodziewałeś.

## Zatwierdzenie

Państwa biuro może ustalić pułap tego, co każdy współpracownik może zobowiązać
[samodzielnie](/pl/manage/team/#co-każdy-współpracownik-może-zobowiązać-samodzielnie). Rezerwacja
powyżej tego pułapu zostaje **wstrzymana**: na liście widnieje jako **Czeka na zatwierdzenie**, a do
dostawcy nic nie zostało wysłane — żaden pokój nie jest zajęty, żadna stawka nie jest zablokowana i
nie ma czego anulować, bo jeszcze nic nie istnieje.

Strona rezerwacji mówi to każdemu, kto ją widzi. Jeśli mogą Państwo zatwierdzać rezerwacje, nosi też
dwa przyciski:

- **Zatwierdź i rezerwuj** — rezerwacja powstaje *teraz*, po stawce z tej chwili. Przechodzi zwykłe
  kontrole, więc jeśli cena ruszyła w czasie oczekiwania, dostają Państwo pytanie o zmienioną cenę, a
  nie cichą rezerwację po nowej kwocie.
- **Odmów** — wniosek się kończy. Notatka trafia do historii zdarzeń rezerwacji, gdzie przeczyta ją
  współpracownik, który prosił.

Gdy rezerwacja powstaje, osoby mogące ją zatwierdzić dostają e-mail: kwota, hotel i kto prosił — tyle,
by odpowiedzieć bez otwierania portalu.

**Oferta nie czeka wiecznie.** Jeśli nikt nie odpowie, zanim stawka wygaśnie, rezerwacja upada sama, a
jej historia mówi, że oferta wygasła, a nie że ktoś odmówił. Zatwierdzenie po tym momencie nie
przywraca starej stawki — dostawca jest pytany od nowa i od nowa odpowiada.

## Opcje

**Opcja** to rezerwacja, którą trzymają Państwo, gdy klient się zastanawia.

To prawdziwa rezerwacja na stawce zwrotnej plus data, którą Państwo wyznaczyli. Żaden dostawca, z
którym pracuje OneRate, nie oferuje własnej blokady — produkt dodaje to, że termin jest widoczny i
obsługiwany, zamiast żyć w czyimś kalendarzu.

Rezerwacja utrzymywana jako opcja pokazuje panel, który to mówi, z dwoma przyciskami:

- **Potwierdź** — opcja zostaje zwykłą rezerwacją. W hotelu nic się nie zmienia; zawsze była
  prawdziwa.
- **Zwolnij** — rezerwacja zostaje anulowana. Przechodzi przez to samo potwierdzenie co każde inne
  anulowanie i podaje tę samą opłatę, bo zwolnienie opcji *jest* anulowaniem rezerwacji.

Termin jest ograniczony własnym oknem bezpłatnego anulowania stawki, pomniejszonym o dzień. Stawki
bez bezpłatnego okna nie da się utrzymać wcale: „utrzymanie” znaczyłoby „zarezerwuj i zapłać karę
później”, a to jest rezerwacja — i należy to powiedzieć, a nie sprzedać samo słowo.

Wieczorem przed upływem terminu osoba, która przyjęła rezerwację, dostaje e-mail. Co się stanie, gdy
nikt nie odpowie, jest wyborem Państwa biura, w
[Ustawieniach](/pl/manage/settings/#konfiguracja-agencji): **przypomnienie** ostrzega dalej i nigdy
nie anuluje, **zwolnienie** oddaje pokój. Biuro, które nic nie zadeklarowało, dostaje
**przypomnienie**, bo błędne anulowanie to prawdziwe pieniądze.

Voucher otwartej opcji mówi, że nią jest, więc klient trzymający go w ręku nie pomyli go z
przesądzonym pobytem.

## Vouchery

**Pobierz voucher** daje Ci PDF. **Wyślij voucher e-mailem** go wysyła.

Gdy vouchera nie ma, przycisk zastępuje zdanie — i to zdanie mówi dlaczego:

| Komunikat | Dlaczego |
| --- | --- |
| „Ta rezerwacja nie jest potwierdzona, więc nie wystawiono dla niej vouchera.” | Vouchery istnieją tylko dla potwierdzonych rezerwacji. |
| „Nie wiadomo jeszcze, czy ta rezerwacja dotarła do dostawcy…” | Rezerwacja jest wciąż w wyjaśnianiu. |
| „Ta rezerwacja jest anulowana i nie ma dla niej vouchera.” | Anulowana. |
| „Dane gości tej rezerwacji zostały usunięte, a wraz z nimi voucher.” | Voucher zawierał nazwisko gościa, więc zniknął razem z usunięciem. |

## Usuwanie danych gości

Właściciele i administratorzy mogą trwale usunąć dane osobowe z rezerwacji — nazwisko gościa i
powiązane z nim zapisy dostawcy — a voucher jest usuwany razem z nimi.

**Tego nie da się cofnąć.** Sama rezerwacja pozostaje w rejestrze: jej status, daty i kwoty, więc
Twoje raporty i rozliczenia pozostają nienaruszone. Usuwana jest tylko osoba.

Jeśli okno potwierdzenia zostanie przerwane, uruchom je ponownie. Usuwanie można bezpiecznie
powtórzyć i dokańcza ono zadanie.

Twoja agencja ma też **okres przechowywania danych gości** w [Ustawieniach](/pl/manage/settings/),
po którym dzieje się to automatycznie. Usuwanie ręczne jest dla żądania, które przyjdzie wcześniej.

## Przypomnienia o anulowaniu

OneRate pilnuje terminów bezpłatnego anulowania na Twoich potwierdzonych rezerwacjach i ostrzega,
zanim któryś się zamknie. Wyprzedzenie jest ustawieniem Twojej agencji — 48 godzin, jeśli go nie
zmieniłeś.

To ta funkcja, dzięki której nie płacisz opłaty za anulowanie pobytu, z którego gość zrezygnował w
zeszłym tygodniu.

## Dalej

- [Anulowanie rezerwacji](/pl/booking/cancelling/)
- [Statusy rezerwacji](/pl/booking/statuses/) — w tym co zrobić z jedną w weryfikacji
