---
title: Role i uprawnienia
description: Każda rola w agencji i wewnątrz klienta firmowego, co dokładnie może każda z nich i dlaczego niektóre możliwości są świadomie odebrane.
---

Każde konto ma dokładnie jedną rolę w agencji. Rola decyduje, które ekrany się pojawiają i które
działania są dozwolone. Domyślnie nic nie jest dozwolone — możliwości, której nie widzisz poniżej,
Twoja rola nie ma.

## Własne role Państwa agencji

| Rola | Dla kogo jest |
| --- | --- |
| **Właściciel agencji** | Osoba, która jest stroną relacji z OneRate. Wszystko, łącznie z subskrypcją. |
| **Administrator** | Prowadzi agencję na co dzień. Wszystko poza subskrypcją. |
| **Agent** | Sprzedaje. Wyszukuje, rezerwuje i przegląda rezerwacje. |
| **Platforma** | Pracownicy OneRate. Zakładają agencje i definicje dostawców — i świadomie nie mogą dotknąć rezerwacji żadnej agencji. |

## Co może każda rola

| Działanie | Właściciel | Administrator | Agent |
| --- | :---: | :---: | :---: |
| Uruchomić wyszukiwanie | ✅ | ✅ | ✅ |
| Utworzyć rezerwację | ✅ | ✅ | ✅ |
| Przeglądać rezerwacje | ✅ | ✅ | ✅ |
| Wpisać numer teczki i notatkę wewnętrzną | ✅ | ✅ | ✅ |
| Ustawić własną marżę | ✅ | ✅ | ✅ |
| Przeglądać raporty | ✅ | ✅ | ✅ |
| Anulować rezerwację | ✅ | ✅ | — |
| Zamknąć rezerwację w weryfikacji ręcznej | ✅ | ✅ | — |
| Usunąć dane gości z rezerwacji | ✅ | ✅ | — |
| Zarządzać danymi dostępowymi dostawców | ✅ | ✅ | — |
| Zarządzać zespołem i zaproszeniami | ✅ | ✅ | — |
| Zarządzać ustawieniami agencji | ✅ | ✅ | — |
| Zarządzać subskrypcją | ✅ | — | — |

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

## Zawężenie roli do jednego oddziału

Jeśli Państwa biuro ma [oddziały](/pl/manage/team/#oddziały), każdy członek zespołu może zostać
**ograniczony do własnego oddziału**. To znacznik obok jego roli, a nie osobna rola.

Ograniczona osoba widzi tylko rezerwacje swojego oddziału i tylko współpracowników ze swojego
oddziału. Pozostałe uprawnienia jej roli nie zmieniają się: administrator ograniczony do Krakowa
nadal administruje, ale wszystko, czym administruje, należy do Krakowa.

Nic, co wpisze, tego nie poszerzy. Poproszenie listy rezerwacji o inny oddział kończy się jej
własnym, bo ograniczenie należy do tego, kto pyta, a nie do tego, o co zapytano.

## Role wewnątrz klienta firmowego

**Klient** to jeden z Państwa klientów korporacyjnych, którego pracownicy rezerwują na *Państwa*
umowach z dostawcami. Jego firma ma trzy własne role, a Państwo wybierają, którą dostaje każda
osoba przy zapraszaniu.

| Rola | Widzi | Może też |
| --- | --- | --- |
| **Organizator** | Rezerwacje firmy | Rezerwować dla każdego w swojej firmie |
| **Podróżny** | **Tylko rezerwacje, które sam złożył** | — |
| **Administrator klienta** | Rezerwacje firmy | Zapraszać własnych współpracowników i zarządzać ustawieniami własnej firmy |

Podróżny to rola wąska i to właśnie ją klient korporacyjny nadaje większości swoich pracowników:
wyjazd współpracownika nie pojawia się na jego liście, a otwarcie go z linku mówi mu, że nie
istnieje, a nie że nie wolno mu go zobaczyć.

Administrator klienta zarządza **własną** firmą — jej ludźmi, jej polami, jej marżą. Nie sięga
niczego z Państwa agencji: granicą jest firma, a nie rola.

Żadna z tych trzech ról nie może anulować i żadna nigdy nie widzi nazwy dostawcy ani Państwa stawki
netto. Zobacz poniżej sekcję „Co klient widzi, a czego nie”.

## Co klient widzi, a czego nie

Role klienta istnieją po to, by Państwa klienci firmowi mogli rezerwować własne wyjazdy na *Państwa*
umowach z dostawcami. To, co widzą, jest świadomie węższe:

- Widzą hotele i ceny **z już naliczoną Państwa marżą**.
- **Nigdy nie widzą nazw dostawców** ani **Państwa stawki netto**. Klient nie jest w stanie ustalić,
  ile Państwo zapłacili.
- Widzą rezerwacje **własnej firmy**, nigdy Państwa agencji — a podróżny tylko własne.
- **Nie mogą anulować.** Ich ekran rezerwacji każe skontaktować się z Państwa agencją i ostrzega, by
  nie dzwonić bezpośrednio do hotelu — zmiana dokonana tam nigdy nie trafiłaby do rekordu.

Zobacz [Klienci](/pl/manage/customers/), jak ich skonfigurować.

## Weryfikacja dwuetapowa

Weryfikacja dwuetapowa jest **wymagana** dla właścicieli agencji (oraz dla pracowników platformy
OneRate). Każda inna rola może ją włączyć dobrowolnie w [Moim koncie](/pl/account/security/) — i
powinna.

Państwa biuro może wymagać więcej: zobacz
[ustawienia bezpieczeństwa](/pl/manage/settings/#ustawienia-bezpieczeństwa). Biuro może rozszerzyć
ten wymóg na swoich administratorów albo na wszystkich, którzy się logują — nigdy nie może go zawęzić
poniżej progu samego OneRate.

## Zmiana czyjejś roli

Zmienia się ją na miejscu w [Zespole](/pl/manage/team/) — rola to lista rozwijana w wierszu danej
osoby, a zmiana działa od jej następnego żądania. W jej dotychczasowych rezerwacjach nic się nie
zmienia: rezerwacja należy do agencji, a nie do konta, które ją złożyło.

Jedyna reguła, którą portal egzekwuje: **agencja zawsze ma co najmniej jednego aktywnego
właściciela.** Zmiana roli ostatniego właściciela albo zawieszenie go zostaje odrzucone, a nie
wykonane — w agencji bez właściciela nie ma nikogo, kto mógłby go z powrotem ustanowić.
