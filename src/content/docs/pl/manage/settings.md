---
title: Ustawienia
description: Firmowy kontakt do rezerwacji, Państwa własna tożsamość i marka, pola biura, ustawienia bezpieczeństwa, status subskrypcji, konfiguracja agencji oraz dostawca map.
---

Właściciele i administratorzy. Opuszczenie tego ekranu z niezapisanymi zmianami najpierw pyta.

Ustawienia to cztery sekcje, wybierane z kolumny po lewej: **Tożsamość i marka**, **Ceny**,
**Integracje** i **Kontakt**. To, w której jesteś, jest częścią adresu, więc link do ustawienia
otwiera się na tym ustawieniu, a nie na górze strony.

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

## Państwa własna tożsamość na Państwa dokumentach

Wszystko w tej sekcji należy do Państwa i pojawia się na dokumentach, które zachowują Państwa
klienci.

### Dane biura

- **Nazwa rejestrowa** — firma tak, jak jest zarejestrowana, jeśli różni się od nazwy handlowej
- **Adres**
- **NIP** — VKN w Turcji, CUI, NIP lub partita IVA gdzie indziej. Jest drukowany, nigdy nie służy do
  obliczeń, więc każdy z nich jest przyjmowany
- **Numer licencji biura** — w Turcji numer TÜRSAB

Pozostawione puste pole **nie drukuje żadnego wiersza** na voucherze — nie pustego. Pusty wiersz
„NIP:" czyta się jako *brak*, co jest innym twierdzeniem niż *nie podano* — i tym fałszywym.

Dane te spływają do Państwa klientów: rezerwacja złożona przez klienta korporacyjnego niesie
**Państwa** licencję, bo na tym dokumencie stroną licencjonowaną jest Państwa biuro.

### Logo biura

**PNG lub JPEG, do 256 KB.** Pojawia się na voucherach i na stronie logowania pod Państwa własnym
adresem.

Tylko te dwa formaty, ponieważ tyle może unieść voucher. Format, który wyświetla się w portalu i po
cichu znika z dokumentu, byłby gorszy niż odmowa — nikt by się nie zorientował, dopóki klient nie
zapyta.

Aby zmienić, proszę wgrać inne; **Usuń logo** przywraca znak OneRate.

### Kolor marki

Jeden kolor, wartość szesnastkowa w rodzaju `#0e6b5c`. Ciemniejsze i jaśniejsze odcienie są z niego
wyliczane, więc nie ma nic więcej do wyboru.

Kolor **nieczytelny** zostaje odrzucony, a komunikat to mówi:

> Ten kolor jest nieczytelny: biały tekst na nim oraz on na jasnym tle wymagają co najmniej 4.5:1.

To nie jest przesada. Ten sam kolor maluje przycisk z białym tekstem i wyróżnione słowa na jasnym
tle — firmowa żółć przechodzi drugi test i oblewa pierwszy, a wynikiem jest portal, którego
przycisków Państwa własny personel nie potrafi odczytać.

### Adres internetowy

Własny adres logowania biura: `panstwanazwa.onerate.travel`.

Małe litery, cyfry i myślniki, 3–40 znaków. Niektóre nazwy należą do OneRate i są odrzucane; tak
samo nazwa, którą ma już inne biuro — komunikat mówi, o którą z dwóch chodzi.

:::caution
Zmiana **natychmiast wyłącza stary adres**, także na wszystkim, co już wydrukowano lub wysłano
mailem. Proszę uprzedzić klientów przed zmianą, nie po niej.
:::

## Pola biura

Państwa własne pola przy rezerwacji: **centrum kosztów**, **kod projektu**, **numer zamówienia** —
cokolwiek księgowość potrzebuje, by rozliczyć pobyt.

Każde pole ma:

- **klucz**, pod którym przechowywana jest wartość i do którego przypięta jest kolumna raportu. Nie
  można go później zmienić, bo każda już zapisana wartość stoi pod nim
- **etykietę**, którą agenci czytają na formularzu — i tę *można* zmienić
- **typ**: tekst, stała lista albo data
- to, czy jest **wymagane**

Pole **wymagane** odrzuca rezerwację wprost, zanim dostawca zostanie wywołany. O to właśnie chodzi:
pobyt bez kodu to pobyt, za którym ktoś biega dwa tygodnie później, a wtedy agent nie pamięta już,
która to była z czterdziestu rezerwacji.

Państwa pola pojawiają się na ekranie podsumowania, na stronie rezerwacji oraz jako **kolumny w
eksporcie raportu** — po jednej kolumnie na każde zdefiniowane pole, niezależnie od tego, czy coś w
nim zapisano, dzięki czemu dwa eksporty tego samego okresu mają ten sam kształt.

Klienci korporacyjni również mogą zdefiniować własne; Państwa pola obowiązują także w ich
rezerwacjach, a pole oznaczone jako wymagane pozostaje wymagane i dla nich. Zobacz
[Klienci](/pl/manage/customers/).

## Ustawienia bezpieczeństwa

Trzy ustawienia i każde z nich może jedynie **zaostrzyć** to, czego OneRate już wymaga.

- **Kto musi używać weryfikacji dwuetapowej** — właściciele (próg OneRate), Państwa administratorzy
  albo wszyscy logujący się. Poniżej progu zejść nie można.
- **Czas trwania sesji (godziny)** — jak długo zalogowana sesja może działać bez ponownego
  logowania. Od 1 godziny do 14 dni.
- **Dozwolone adresy IP** — adresy IPv4 i zakresy CIDR, oddzielone przecinkami. Żądanie skądkolwiek
  indziej jest odrzucane, **także od Państwa własnego personelu**.

IPv6 jest odrzucany, zamiast być przyjmowanym i ignorowanym: lista, która po cichu nie pasuje do
połowy internetu, pozostawiłaby Państwa w przekonaniu, że mają kontrolę, której nie mają.

Obowiązują także dla kluczy API — klucz to również ruch Państwa biura. Zobacz
[Integracje](/pl/manage/integrations/).

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

Wyniki wyszukiwania można rysować na mapie. Domyślnie jest to **Google Maps**, rysowana z użyciem
klucza OneRate: nic do skonfigurowania i nic nie jest fakturowane Twojej agencji.

**Dostawca mapy** pozwala agencji wybrać zamiast tego **OpenStreetMap**. Wybór dotyczy każdego agenta
w agencji oraz portali Twoich klientów.

**Dostawca mapy** pozwala Twojej agencji wybrać między **Mapami Google** a **OpenStreetMap**. Wybór
dotyczy każdego agenta w agencji i portali Twoich klientów, a działa od chwili, w której go
dokonasz — to jedyna karta na tym ekranie bez przycisku Zapisz, i mówi o tym wprost.

Jeśli wybrano Google, a OneRate nie może jej teraz narysować, karta Ci to powie: portal korzysta z
OpenStreetMap, dopóki nie będzie mógł. Nie ma nic do naprawienia; Twój wybór jest zachowany.

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
