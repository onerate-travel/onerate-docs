---
title: Rezervările tale
description: Găsirea unei rezervări, citirea paginii sale de detalii și a cronologiei, defalcarea costurilor, voucherele și ștergerea datelor oaspeților.
---

## Lista

**Rezervări** conține fiecare rezervare făcută de agenția ta, prin orice furnizor.

Filtrează și găsește:

- **Stare** — o stare sau toate
- **Check-in de la / până la** — un interval de date pe sejur, nu pe momentul rezervării
- **Găsește** — text liber pe numele oaspetelui, hotel și referința de confirmare a furnizorului

Coloane: hotel, oaspete, sejur, furnizor, stare, preț de vânzare, creată. Totalul stă deasupra
listei, iar listele lungi se paginează.

O rezervare ale cărei date de oaspete au fost șterse afișează *datele oaspetelui șterse* în locul
numelui. Rezervarea în sine rămâne.

:::note
**Rezervările clienților** este un ecran separat: rezervări făcute de utilizatorii clienților tăi.
Aceleași coloane plus clientul căruia îi aparțin, și un filtru pentru acesta. Clienții înșiși văd
doar propriile rezervări, pe propriul ecran.
:::

## Pagina de detalii

Deschide o rezervare ca să vezi tot ce s-a înregistrat despre ea.

### Rezervarea

Hotel, stare, furnizor, **referință de confirmare**, check-in, check-out, oaspete principal, preț de
vânzare, **sucursala** care a preluat-o și **cine** a preluat-o.

Dacă agenția dvs. are [câmpuri ale agenției](/ro/manage/settings/#câmpurile-agenției), valorile
înregistrate pe această rezervare apar într-o secțiune proprie. Sunt cele înregistrate **atunci**: un
câmp definit ulterior este gol aici, iar unul retras între timp arată în continuare cu ce a fost
codificată.

Referința de confirmare este a furnizorului — este ceea ce identifică rezervarea la el, dacă vreodată
trebuie să suni.

### Costuri și penalizări

Această secțiune nu le este arătată clienților.

| Rând | Ce este |
| --- | --- |
| **Cotat la momentul rezervării** | Prețul net al furnizorului în clipa în care ai confirmat. |
| **Confirmat de furnizor** | Ce a returnat efectiv furnizorul. |
| **Penalizare de anulare estimată** | Cât ar costa anularea acum, conform politicii salvate la rezervare. |
| **Preț de vânzare** | Cu cât ai vândut — netul plus marja ta. |

Dacă primele două diferă, pagina o spune:

> Furnizorul a confirmat o sumă diferită de cea cotată. Ai vândut pe baza cotației.

Acesta este un eveniment real, care merită o reacție, nu un artefact de rotunjire. Marja ta pe acea
rezervare nu este cea la care te așteptai.

### De ce acest furnizor

Aceeași înregistrare pe care o oferă ecranul de rezultate, păstrată împreună cu rezervarea: ce
oferte au fost analizate și ce a decis. Rămâne disponibilă mult după ce sesiunea de căutare s-a
încheiat.

### Cronologie

Fiecare stare prin care a trecut rezervarea, în ordine, cu ore. Este primul loc unde te uiți când o
rezervare a făcut ceva la care nu te așteptai.

## Opțiuni

O **opțiune** este o rezervare pe care o țineți cât timp clientul dvs. se hotărăște.

Este o rezervare reală pe un tarif rambursabil, plus o dată pe care ați stabilit-o dvs. Niciun
furnizor cu care lucrează OneRate nu oferă o rezervare temporară proprie — ceea ce adaugă produsul
este că termenul este vizibil și se acționează asupra lui, în loc să trăiască în agenda cuiva.

O rezervare ținută ca opțiune afișează un panou care spune asta, cu două butoane:

- **Confirmă** — opțiunea rămâne o rezervare obișnuită. La hotel nu se schimbă nimic; a fost
  întotdeauna reală.
- **Eliberează** — rezervarea este anulată. Trece prin aceeași confirmare ca orice altă anulare și
  citează aceeași penalizare, pentru că eliberarea unei opțiuni *este* anularea unei rezervări.

Termenul este limitat de propria fereastră de anulare gratuită a tarifului, minus o zi. Un tarif fără
fereastră gratuită nu poate fi ținut deloc: „a ține” ar însemna „rezervă și plătește penalizarea mai
târziu”, ceea ce este o rezervare — și acest lucru trebuie spus, nu vândut ca vorbă.

În seara dinaintea expirării, cine a preluat rezervarea primește un e-mail. Ce se întâmplă dacă nu
răspunde nimeni este alegerea agenției dvs., în
[Setări](/ro/manage/settings/#configurația-agenției): **amintirea** continuă să avertizeze și nu
anulează niciodată, **eliberarea** dă camera înapoi. O agenție care nu a declarat nimic primește
**amintire**, pentru că o anulare greșită înseamnă bani adevărați.

Voucherul unei opțiuni deschise spune că este una, așa că un client care îl are în mână nu îl poate
confunda cu un sejur stabilit.

## Vouchere

**Descarcă voucherul** îți dă PDF-ul. **Trimite voucherul pe email** îl expediază.

Butonul este înlocuit de o propoziție când nu există voucher, iar propoziția spune de ce:

| Mesaj | De ce |
| --- | --- |
| „Această rezervare nu este confirmată, deci nu a fost emis niciun voucher pentru ea.” | Voucherele există doar pentru rezervările confirmate. |
| „Încă nu se știe dacă această rezervare a ajuns la furnizor…” | Rezervarea este încă în reconciliere. |
| „Această rezervare este anulată și nu există niciun voucher disponibil pentru ea.” | Anulată. |
| „Datele oaspeților acestei rezervări au fost șterse, iar voucherul a fost șters odată cu ele.” | Voucherul purta numele oaspetelui, deci a plecat odată cu ștergerea. |

## Ștergerea datelor oaspeților

Proprietarii și administratorii pot șterge definitiv datele personale de pe o rezervare — numele
oaspetelui și evidențele furnizorului păstrate pentru el — iar voucherul este șters odată cu ele.

**Operațiunea nu poate fi anulată.** Rezervarea în sine rămâne înregistrată: starea, datele și
sumele ei, astfel încât rapoartele și evidențele tale rămân intacte. Doar persoana este eliminată.

Dacă dialogul de confirmare este întrerupt, rulează-l din nou. Ștergerea poate fi repetată în
siguranță și duce treaba la capăt.

Agenția ta are și o **perioadă de păstrare a datelor oaspeților** în [Setări](/ro/manage/settings/),
după care acest lucru se întâmplă automat. Ștergerea manuală este pentru o cerere care sosește
înainte de asta.

## Amintiri de anulare

OneRate urmărește termenele de anulare gratuită de pe rezervările tale confirmate și te avertizează
înainte ca unul să se închidă. Avansul este o setare a agenției tale — 48 de ore dacă nu ai
schimbat-o.

Aceasta este funcția care te scutește să plătești o penalizare pentru un sejur la care oaspetele a
renunțat săptămâna trecută.

## Mai departe

- [Anularea unei rezervări](/ro/booking/cancelling/)
- [Stările rezervării](/ro/booking/statuses/) — inclusiv ce faci cu una aflată în verificare
