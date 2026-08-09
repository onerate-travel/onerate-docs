---
title: Role i uprawnienia
description: Pięć ról, co dokładnie może każda z nich i dlaczego niektóre możliwości są świadomie odebrane.
---

Każde konto ma dokładnie jedną rolę w agencji. Rola decyduje, które ekrany się pojawiają i które
działania są dozwolone. Domyślnie nic nie jest dozwolone — możliwości, której nie widzisz poniżej,
Twoja rola nie ma.

## Pięć ról

| Rola | Dla kogo jest |
| --- | --- |
| **Właściciel agencji** | Osoba, która jest stroną relacji z OneRate. Wszystko, łącznie z subskrypcją. |
| **Administrator** | Prowadzi agencję na co dzień. Wszystko poza subskrypcją. |
| **Agent** | Sprzedaje. Wyszukuje, rezerwuje i przegląda rezerwacje. |
| **Klient** | Osoba u jednego z *Twoich* klientów firmowych, rezerwująca własne wyjazdy na Twoich umowach. |
| **Platforma** | Pracownicy OneRate. Zakładają agencje i definicje dostawców — i świadomie nie mogą dotknąć rezerwacji żadnej agencji. |

## Co może każda rola

| Działanie | Właściciel | Administrator | Agent | Klient |
| --- | :---: | :---: | :---: | :---: |
| Uruchomić wyszukiwanie | ✅ | ✅ | ✅ | ✅ |
| Utworzyć rezerwację | ✅ | ✅ | ✅ | ✅ |
| Przeglądać rezerwacje | ✅ | ✅ | ✅ | tylko własne |
| Przeglądać raporty | ✅ | ✅ | ✅ | — |
| Anulować rezerwację | ✅ | ✅ | — | — |
| Zamknąć rezerwację w weryfikacji ręcznej | ✅ | ✅ | — | — |
| Usunąć dane gości z rezerwacji | ✅ | ✅ | — | — |
| Zarządzać danymi dostępowymi dostawców | ✅ | ✅ | — | — |
| Zarządzać zespołem i zaproszeniami | ✅ | ✅ | — | — |
| Zarządzać ustawieniami agencji | ✅ | ✅ | — | — |
| Zarządzać subskrypcją | ✅ | — | — | — |

## Dlaczego agent nie może anulować

To zaskakuje, więc warto powiedzieć wprost: **opłaty za anulowanie to prawdziwe pieniądze.** Agent
może utworzyć rezerwację, bo na tym polega jego praca; anulowanie jej może kosztować agencję opłatę
wynikającą z umowy, której agent nie podpisywał. Dlatego anulowanie należy do właściciela i
administratora.

To samo rozumowanie umieszcza tam dwa inne działania:

- **Zamknięcie rezerwacji w weryfikacji ręcznej** to trwałe oświadczenie, że rezerwacja istnieje
  albo nie istnieje u dostawcy. To nie jest codzienne zadanie, a pomyłki nie da się cofnąć.
- **Usunięcia danych gości** nie można cofnąć.

Jeśli Twoja agencja chce, by agenci mogli anulować, to zmiana w produkcie, a nie ustawienie —
powiedz o tym OneRate.

## Co Klient widzi, a czego nie

Rola Klienta istnieje po to, by Twoi klienci firmowi mogli rezerwować własne wyjazdy na *Twoich*
umowach z dostawcami. To, co widzą, jest świadomie węższe:

- Widzą hotele i ceny **z już naliczoną Twoją marżą**.
- **Nigdy nie widzą nazw dostawców** ani **Twojej stawki netto**. Klient nie jest w stanie ustalić,
  ile zapłaciłeś.
- Widzą **tylko własne rezerwacje**, nigdy rezerwacji agencji.
- **Nie mogą anulować.** Ich ekran rezerwacji każe skontaktować się z Twoją agencją i ostrzega, by
  nie dzwonić bezpośrednio do hotelu — zmiana dokonana tam nigdy nie trafiłaby do rekordu.

Zobacz [Klienci](/pl/manage/customers/), jak ich skonfigurować.

## Weryfikacja dwuetapowa

Weryfikacja dwuetapowa jest **wymagana** dla właścicieli agencji (oraz dla pracowników platformy
OneRate). Każda inna rola może ją włączyć dobrowolnie w [Moim koncie](/pl/account/security/) — i
powinna.

## Zmiana czyjejś roli

Nie ma edytora ról. Aby zmienić to, co może współpracownik, usuń go z zespołu i zaproś ponownie z
rolą, której chcesz. Zobacz [Zespół](/pl/manage/team/).
