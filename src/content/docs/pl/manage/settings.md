---
title: Ustawienia
description: Firmowy kontakt do rezerwacji, tożsamość i marka agencji, status subskrypcji, konfiguracja agencji oraz dostawca map.
---

Właściciele i administratorzy. Opuszczenie tego ekranu z niezapisanymi zmianami najpierw pyta.

## Firmowy kontakt do rezerwacji

**Ustawienie do zrobienia przed wszystkim innym.** Oba pola są wymagane:

- **Firmowy e-mail kontaktowy do rezerwacji**
- **Firmowy telefon kontaktowy do rezerwacji** — format międzynarodowy, np. `+902121112233`

Dostawcy wymagają kontaktu do strony rezerwującej. Dopóki nie ma obu, **każda rezerwacja jest
odrzucana**, dla każdego użytkownika, łącznie z Twoimi klientami. Ekran ostrzega, gdy ich brakuje:

> Rezerwacje są odrzucane, dopóki nie dodasz firmowego kontaktu — wymagane są zarówno e-mail, jak i
> telefon.

Trzeba je wypełnić razem albo wyczyścić razem. Nie zapiszesz jednego bez drugiego, bo pół kontaktu
to nie kontakt.

## Tożsamość agencji

- **Nazwa agencji**
- **Marka pod tym adresem** — albo domyślna OneRate, albo Twoja własna marka white-label

Obie ustawia OneRate; tutaj nie da się ich edytować. Aby zmienić którąkolwiek, skontaktuj się ze
wsparciem OneRate. Ekran tak mówi, zamiast pokazywać pole, które i tak się nie zapisze.

## Subskrypcja

Status Twojej subskrypcji: **Aktywna**, **Okres próbny**, **Płatność zaległa** albo **Anulowana**.
Tylko właściciele.

Jeśli nie jest widoczny, portal mówi to wprost i kieruje Cię do OneRate, zamiast zgadywać.

Status subskrypcji warunkuje **logowanie**, nigdy rezerwację, która już trwa. Rezerwacja w toku, gdy
subskrypcja wygaśnie, nie zostaje porzucona w połowie.

## Waluta sprzedaży

Waluta, w której sprzedaje Twoja agencja — trzyliterowy kod ISO-4217: `EUR`, `TRY`, `USD`.

Jej zmiana zmienia to, w czym Twoja agencja sprzedaje, a nie tylko sposób wyświetlania cen, i **nic
nie jest przeliczane**. Przeczytaj [Ceny i marża](/pl/manage/pricing/), zanim ją zmienisz.

## Mapa

Wyniki wyszukiwania można rysować na mapie. Domyślnie jest to **OpenStreetMap**, która nic Cię nie
kosztuje i nie wymaga konfiguracji.

Jeśli Twoja agencja ma własny **klucz API Google Maps**, możesz użyć mapy Google. Kafelki są
rozliczane na Twoim koncie Google, na Twojej umowie — OneRate nie nakłada własnego limitu, więc ustaw
limity i alerty budżetowe dla klucza w konsoli Google Cloud.

Aby jej użyć:

1. Wpisz klucz. Jest sprawdzany w Google przed zapisaniem, szyfrowany w spoczynku i nigdy nie trafia
   do Twojej przeglądarki.
2. Jeśli Google go odrzuci, nie zostaje zapisany — sprawdź, czy dla tego klucza włączono **Map Tiles
   API**.
3. Przełączaj się między **OpenStreetMap** a **Google Maps** w dowolnej chwili; **Usuń klucz**, aby
   wrócić na stałe.

Jeśli Google później odrzuci klucz, który wcześniej działał, portal wraca do OpenStreetMap i mówi Ci
o tym, zamiast pokazywać pustą mapę.

## Konfiguracja agencji

Lista wartości rozwiązanych dla Twojej agencji. Każda pokazuje, skąd pochodzi jej bieżąca wartość:

| Pochodzenie | Znaczenie |
| --- | --- |
| **Ustawienie Twojej agencji** | Ustawiłeś je Ty. |
| **Odziedziczone z {org}** | Pochodzi z Twojej agencji nadrzędnej. |
| **Domyślna wartość platformy OneRate** | Wartość OneRate, używana, dopóki nie ustawisz własnej. |
| **Nieustawione — OneRate nie ma dla tego wartości** | Nic nie działa na tej wartości. |
| **Nieustawione — wymagane, zanim {capability}** | Coś jest zablokowane, dopóki tego nie ustawisz. Komunikat mówi, co. |

Reguła rozwiązywania: **wygrywa Twoje ustawienie, potem ustawienie jednostki nadrzędnej, potem
domyślna wartość OneRate.** Wyczyszczenie Twojego nadpisania wraca do wartości jednostki nadrzędnej,
a nie do wartości OneRate.

Wśród wartości, które tu zobaczysz: domyślny język portalu, e-mail wsparcia dla podróżnych, kontakt
firmowy, przydziały zapytań do dostawców, budżet czasu wyszukiwania, wyprzedzenie przypomnienia o
anulowaniu, ważność zaproszeń, czas życia bufora stawek, przechowywanie danych gości, domyślna marża
i waluta sprzedaży.

Nie wszystkie da się tu edytować. Ustawienia stają się edytowalne wraz z pojawianiem się funkcji,
które ich używają; ekran mówi, które są które, zamiast pokazywać martwe pola.

:::caution
Jeśli widzisz *„zapisane ustawienie jest nieznane lub nieprawidłowe”*, skontaktuj się ze wsparciem
OneRate. **Żadna wartość domyślna nie została podstawiona** — portal odmawia zgadywania wartości,
której nie umie odczytać, zamiast działać na liczbie, której nikt nie wybrał.
:::

### Dwie warte poznania

- **Przechowywanie danych gości (dni)** — jak długo nazwiska gości i zapisy dostawcy pozostają na
  rezerwacji, zanim zostaną automatycznie usunięte. Usunięcie kasuje osobę; status, daty i kwoty
  rezerwacji zostają dla Twoich raportów. Pojedynczą rezerwację możesz też wyczyścić ręcznie —
  zobacz [Twoje rezerwacje](/pl/booking/your-bookings/).
- **Wyprzedzenie przypomnienia o anulowaniu (godziny)** — z jakim wyprzedzeniem przed zamknięciem
  okna bezpłatnego anulowania dostajesz ostrzeżenie. 48 godzin, jeśli tego nie zmienisz.

## Wartości, które zna wyłącznie Twoja agencja

Niektóre ustawienia **nie mają** domyślnej wartości OneRate i nigdy mieć nie będą — przydział
zapytań z Twojej umowy z dostawcą, Twoja waluta sprzedaży, Twój kontakt do rezerwacji.

OneRate ich nie wymyśla, choćby wymyślona wartość wyglądała najostrożniej, bo błędny kontakt nie jest
ostrożnym kontaktem, tylko błędnym. Tam, gdzie takiej wartości brakuje, funkcja, która jej potrzebuje,
pozostaje wyłączona, a portal nazywa i wartość, i miejsce jej ustawienia. Dlatego dostawcy nie da się
włączyć, zanim nie istnieje jego przydział.
