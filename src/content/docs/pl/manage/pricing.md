---
title: Ceny i marża
description: Państwa waluta sprzedaży, marża nakładana na każdą stawkę, grupy cenowe dla grup klientów, jak dziedziczone są marże i dlaczego nic nigdy nie jest przeliczane.
---

## Waluta sprzedaży

Twoja agencja sprzedaje w jednej walucie, ustawianej przez właściciela lub administratora w
[Ustawieniach](/pl/manage/settings/), w sekcji **Ceny agencji**.

Każdy agent może sprzedawać też we własnej: **Moje ceny** w menu użytkownika. Pozostawione puste
pole oznacza walutę agencji.

To **nie jest preferencja wyświetlania.** To decyduje:

- które oferty pojawiają się na Twojej głównej liście wyników, oraz
- które oferty trafiają do osobnej sekcji **Inna waluta**, zestawianej tylko wewnętrznie.

### Nic nie jest przeliczane, nigdy

Stawka podana przez dostawcę w USD zostaje w USD. OneRate nie zamieni jej na EUR po jakimś
wymyślonym kursie, bo nie byłby to kurs, który da Ci bank, a wymyślona liczba na rezerwacji jest
gorsza niż uczciwa obca.

Konsekwencje, wszystkie widoczne w portalu:

- Oferty w innej walucie **można rezerwować** i są oznaczone tym, czym naprawdę są.
- **Nie są zestawiane** z ofertami w Twojej walucie sprzedaży. „Taniej” pomiędzy dwiema walutami nie
  jest faktem, który OneRate mógłby stwierdzić.
- W [Raportach](/pl/manage/reports/) otrzymujesz **jedną sumę na każdą walutę**, jako pierwszą tę
  swojej agencji. Dwie waluty nie są dodawane do siebie, ale żaden wiersz nie wypada z raportu.

Jeśli większość Twojego obrotu jest w jednej walucie, ustaw ją jako walutę sprzedaży, a temat rzadko
wróci. Jeśli naprawdę handlujesz w dwóch, spodziewaj się dwóch zestawów liczb, bo tyle ich masz.

## Marża

Twoja marża to różnica między tym, co nalicza Ci dostawca (**netto**), a tym, za ile sprzedajesz
(**sprzedaż**).

Marżę agencji ustawia właściciel lub administrator w [Ustawieniach](/pl/manage/settings/), w sekcji
**Ceny agencji**, jako procent — `12,5` dla dwunastu i pół procenta.

Każdy agent może ustawić własną w **Moje ceny** w menu użytkownika. Puste pole podąża za agencją;
wpisana liczba zastępuje ją dla ofert i rezerwacji tego agenta.

Marża jest **procentem** od netto. Stałej kwoty od rezerwacji OneRate dodać nie może: musiałaby być
wyrażona w jakiejś walucie, a OneRate żadnej nie przelicza.

Od tej chwili każda cena w portalu — lista wyników, strona hotelu, ekran podsumowania, to, co widzą
Twoi klienci — ją zawiera.

### Nieustawiona znaczy netto

Jeśli marża nie jest ustawiona, nic nie jest doliczane i sprzedajesz po cenie dostawcy. Pole tak
mówi:

> Nieustawiona — do ceny dostawcy nic nie jest doliczane. Podaj procent, aby sprzedawać powyżej
> netto.

Jawne **0%** to co innego niż nieustawiona. Zero to decyzja, którą podjąłeś, i jest respektowana
jako decyzja.

### Netto pozostaje widoczne dla Ciebie

Twoi agenci i właściciele zawsze widzą na rezerwacji obie liczby: **Wycenione przy rezerwacji**,
**Potwierdzone przez dostawcę** oraz **Cenę sprzedaży**. Raporty sumują obie.

Twoi **klienci** widzą wyłącznie cenę sprzedaży. Nigdy nie widzą netto dostawcy i nigdy nie widzą,
który to był dostawca.

## Grupy cenowe

Jeśli sprzedają Państwo sieci subagencji, wyceniają ją grupami, nie pojedynczo. **Grupa** to właśnie
to: nazwa i stawka.

1. **Ustawienia → Grupy cenowe.** Proszę dodać grupę i nadać jej nazwę — „A bayileri", „B bayileri".
2. Ustawić jej **marżę** w procentach, we własnym wierszu grupy.
3. Dodać do niej klientów z ekranu [Klienci](/pl/manage/customers/).

Zmiana stawki grupy zmienia ją dla wszystkich w grupie i o to właśnie chodzi: czterdzieści subagencji
na tych samych warunkach powinno być jedną liczbą, a nie czterdziestoma jej kopiami, które się z
czasem rozjeżdżają.

Klient należy **najwyżej do jednej grupy**. Dwie uczyniłyby pytanie „po ile sprzedajemy temu
klientowi?" niejednoznacznym dokładnie w chwili, gdy ktoś je zadaje.

**Grupy nie można usunąć, dopóki są w niej osoby.** Proszę najpierw je przenieść. Usunięcie jej z
klientami w środku po cichu przestawiłoby ich wszystkich na domyślną stawkę biura — zmiana ceny, o
którą nikt nie prosił, odkrywana na fakturze.

## Jak dziedziczy się marża

Marże rozwiązują się od poziomu najbardziej szczegółowego na zewnątrz: **agent, potem klient, potem
grupa cenowa klienta, potem biuro.**

Zasada brzmi: **wygrywa najbliższy poziom, który ma marżę.** Agent z własną marżą wycenia według niej;
agent bez niej spada na marżę klienta, potem jego grupy, potem biura. Wyczyszczenie nadpisania cofa do
poziomu wyżej — nigdy do zera.

Miejsce grupy jest celowe: grupa to stwierdzenie o *zbiorze*, więc wszystko, co powiedziano o
pojedynczym kliencie, ją bije, a ona bije Państwa ogólną stawkę domyślną.

## Sprawdziany warte zrobienia

1. **Uruchom wyszukiwanie i otwórz hotel.** Cena na karcie i cena na ekranie podsumowania powinny
   być Twoim netto plus Twoją marżą. Jeśli nie są, marża jest nieustawiona albo nie została
   nałożona.
2. **Spójrz na sekcję kosztów potwierdzonej rezerwacji.** Jeśli *Potwierdzone przez dostawcę* różni
   się od *Wycenione przy rezerwacji*, Twoja rzeczywista marża na tej rezerwacji nie jest tą, którą
   ustawiłeś — portal sygnalizuje to wprost, zamiast ukrywać.
3. **Sprawdź w raportach notkę o walutach.** Jeśli mówi, że rezerwacje są wyłączone z sum, Twoja
   waluta sprzedaży może nie odpowiadać temu, jak faktycznie handlujesz.

## Czego OneRate nie robi z Twoimi pieniędzmi

Żadnej księgi, żadnego rachunku bieżącego, żadnego salda, żadnego wiekowania, żadnego poboru
płatności, żadnych danych kart. Dostawca fakturuje Cię na Twojej umowie dokładnie jak wcześniej, a
klient płaci Ci tak, jak płacił.

OneRate pobiera własny stały abonament miesięczny i nie dotyka niczego więcej. To cała relacja
finansowa.
