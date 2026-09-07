---
title: Anulowanie rezerwacji
description: Kto może anulować, co mówi potwierdzenie opłaty, co się dzieje, gdy dostawca naliczy co innego, i dlaczego klienci nie mogą anulować.
---

## Kto może anulować

Właściciele i administratorzy. **Agenci nie mogą** — opłaty za anulowanie to prawdziwe pieniądze
wynikające z umowy, której agent nie podpisywał. Klienci również nie mogą.

Jeśli jesteś agentem, a rezerwację trzeba anulować, poproś właściciela lub administratora.

## Anulowanie

Otwórz rezerwację z listy **Rezerwacje** — cały wiersz jest odnośnikiem — i naciśnij tam **Anuluj
rezerwację**. Na samej liście tego przycisku nie ma: anulowanie to jedyna czynność, której nie da
się cofnąć, a na liście wskaźnik i tak przesuwa się w dół kolumny. Poprosimy o potwierdzenie, a
potwierdzenie mówi, ile to będzie kosztować:

> Anulować tę rezerwację? Spodziewana opłata za anulowanie to 120,00 €.

albo, gdy dostawca nie podał kwoty:

> Anulować tę rezerwację? Opłata za anulowanie nie jest jeszcze znana — decydują o niej warunki
> Twojego dostawcy.

Oba są uczciwymi stwierdzeniami o tym, co OneRate wie. To drugie nie jest usterką systemu; znaczy,
że odpowiedź dostawcy przyjdzie dopiero razem z anulowaniem.

## Po anulowaniu

Rezerwacja przechodzi na **Anulowana**, a Ty dowiadujesz się, co faktycznie się stało:

| Komunikat | Znaczenie |
| --- | --- |
| „Rezerwacja anulowana. Nie naliczono opłaty za anulowanie.” | Bezpłatnie, zgodnie z oczekiwaniem. |
| „Rezerwacja anulowana. Dostawca naliczył opłatę za anulowanie w wysokości 120,00 €.” | Dostawca naliczył. Tej kwoty spodziewaj się na jego fakturze. |
| „Rezerwacja anulowana. Opłata za anulowanie nie jest jeszcze znana…” | Anulowana, opłata wciąż otwarta. Decydują warunki Twojego dostawcy. |

Opłata zwrócona przez dostawcę jest zapisywana na rezerwacji i zestawiana z warunkami zapisanymi w
chwili rezerwacji. **Jeśli się różnią, to sprawa do Twojego dostawcy** — zapis obu jest na
rezerwacji, w sekcji kosztów i w historii zdarzeń.

## Zanim zamknie się termin

Bezpłatne anulowanie ma termin, a OneRate przypomina, zanim się zamknie — domyślnie 48 godzin
wcześniej, regulowane per agencja w [Ustawieniach](/pl/manage/settings/).

Gdy dostawca podaje termin bez strefy czasowej, OneRate rozwiązuje go w strefie czasowej hotelu i
oznacza jako **Szacunek — ten dostawca nie podaje strefy czasowej, więc jest to najwcześniejszy
moment, w którym termin może upłynąć.** Traktuj to jako ostatnią bezpieczną chwilę, a nie obietnicę.
Anuluj przed szacowanym terminem, nigdy dokładnie w nim.

Bardzo stare rezerwacje mogą pokazywać **Niepotwierdzone** — zapisane, zanim OneRate zaczął
przechowywać, czy termin pochodził od dostawcy, czy był szacunkiem. Sprawdź u dostawcy, zanim się na
nim oprzesz.

## Zmiany

W portalu nie ma ścieżki zmiany rezerwacji. Aby zmienić daty, obłożenie albo nazwisko gościa,
skontaktuj się bezpośrednio z dostawcą na swojej umowie; rezerwacja tutaj pokaże **Zmieniona**,
jeśli dostawca zgłosi zmianę.

## Dlaczego klienci nie mogą anulować

Ekran rezerwacji klienta mówi:

> Aby anulować lub zmienić tę rezerwację, skontaktuj się ze swoją agencją — to ona ma umowę z
> dostawcą i tylko ona może ją zmienić. Nie dzwoń bezpośrednio do hotelu: zmiana dokonana tam nie
> trafiłaby do tego rekordu.

Drugie zdanie jest tym istotnym. Zmiana uzgodniona w recepcji hotelu nigdy nie dociera do Twojego
dostawcy ani do tego rekordu, więc Twoja lista rezerwacji i oczekiwania klienta się rozjeżdżają — a
dowiadujesz się o tym przy zameldowaniu.

## Jeśli anulowanie się nie powiedzie

Trzy różne rzeczy mogą pójść źle, a ekran mówi która. Różnica decyduje o tym, co zrobisz dalej,
więc czytaj treść, a nie to, że coś zrobiło się czerwone.

| Co widzisz | Co się stało | Co zrobić |
| --- | --- | --- |
| „Nie udało się anulować rezerwacji.” | Żądanie nie przeszło. | Spróbuj ponownie. |
| „Rezerwacja nie została anulowana: dostawca odrzucił żądanie (…).” | Dotarło do dostawcy i on odmówił. Kod w nawiasie jest jego. | Zobacz kody poniżej. |
| „Dostawca nie odpowiedział, więc nie możemy stwierdzić, czy ta rezerwacja została anulowana.” | Nikt jeszcze nie wie. Mogło przejść albo nie. | **Nie próbuj ponownie.** Poczekaj. |

Trzeci przypadek wymaga ostrożności. U większości dostawców anulowanie nie jest idempotentne, więc
drugie anulowanie może zostać naliczone drugi raz. OneRate sam wyjaśnia to z dostawcą, a status tutaj
zmienia się, gdy przyjdzie odpowiedź; historia zdarzeń to zapisuje.

W każdym z tych trzech przypadków rezerwacja **nie** została anulowana, chyba że ekran mówi, że tak.

### Kody odmowy

Kod jest pokazany dokładnie tak, jak powstał, żebyś mógł zacytować go dostawcy.

| Kod | Znaczenie |
| --- | --- |
| `not_cancellable_CANCELLED` | Już anulowana. Nie ma nic do zrobienia. |
| `not_cancellable_…` (dowolny inny status) | Rezerwacja nie jest w stanie, który można anulować — na przykład pobyt, którego dostawca nigdy nie potwierdził. Sprawdź jej status. |
| `transition_conflict_…` | Ktoś inny zmienił tę rezerwację w trakcie Twojego anulowania. Przeładuj ją i przeczytaj status, zanim zrobisz cokolwiek innego. |
| `AUTH` | Dostawca odrzucił poświadczenie. Sprawdź je w sekcji **Dostawcy**. |
| `VALIDATION` | Dostawca nie rozpoznaje tej rezerwacji jako możliwej do anulowania. Skontaktuj się z nim, podając referencję dostawcy. |
| Cokolwiek innego | Własna odmowa dostawcy. Zacytuj mu kod. |
