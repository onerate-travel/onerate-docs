---
title: Rapoarte
description: Ce ai vândut, filtrat după data de check-in și stare, defalcat pe furnizor și pe lună, și exportat în CSV.
---

**Rapoarte** este doar pentru citire. Sunt propriile tale rezervări, totalizate. Disponibil
proprietarilor, administratorilor și agenților; nu și clienților.

## Filtre

- **Check-in de la / până la** — un interval pe **sejur**, nu pe momentul în care s-a făcut
  rezervarea. Un raport pentru august este un raport al sejururilor din august.
- **Stare** — o [stare a rezervării](/ro/booking/statuses/) sau toate.

## Tabelul

Un rând pe rezervare: check-in, hotel, destinație, oaspete, furnizor, stare, **net**, **vânzare**.

Deasupra: numărul de rezervări, **Net total** și **Vânzare totală**. Diferența dintre aceste două
totaluri este marja ta pe setul filtrat.

## Defalcări

- **Pe furnizor** — rezervări, net și vânzare pe furnizor. Este cifra de citit alături de
  [preferințele tale de furnizori](/ro/manage/preferences/): îți spune dacă o fixare sau o regulă
  procentuală chiar aduce volumul pentru care ai stabilit-o.
- **Pe luna de check-in** — același lucru, pe lună de sejur.

## Export

**Exportă CSV** descarcă rândurile filtrate. Aceleași coloane ca în tabel, așa că un total dintr-o
foaie de calcul se potrivește cu ce este pe ecran.

Dacă eșuează, încearcă din nou — nimic nu se scrie parțial.

## Două note care schimbă sensul totalurilor

Citește-le pe amândouă înainte să spui cuiva o cifră.

### Moneda

> 3 rezervare/rezervări sunt cotate în USD, GBP și NU sunt incluse în totalurile în EUR de mai sus.
> OneRate nu convertește între monede.

Rezervările într-o monedă diferită de moneda ta de vânzare sunt **lăsate în afara totalurilor** — nu
sunt convertite la un curs inventat. Rămân în tabel; pur și simplu nu sunt însumate într-o cifră de
care nu aparțin.

Dacă această notă apare la fiecare raport, probabil moneda ta de vânzare nu corespunde felului în
care lucrezi de fapt. Vezi [Prețuri](/ro/manage/pricing/).

### Trunchiere

> Sunt afișate doar primele 1000 de rezervări, iar totalurile de mai sus le acoperă doar pe acestea.
> Restrânge intervalul de check-in pentru un raport complet.

Un interval mare este limitat. **Totalurile sunt doar ale rândurilor afișate** — nu sunt o estimare
parțială a unei cifre mai mari. Restrânge intervalul de check-in și rulează din nou; două rapoarte
semestriale sunt exacte acolo unde un an trunchiat nu este.

## Ce nu găsești aici

Nicio contabilitate, niciun sold, niciun scadențar, nicio stare a plăților, nicio facturare. OneRate
nu atinge niciodată banii rezervării, deci nu are ce spune despre ce s-a plătit — doar despre ce s-a
vândut. Vezi [Prețuri](/ro/manage/pricing/).

## O rutină lunară care funcționează

1. Setează intervalul de check-in pe luna trecută, starea **Confirmată**.
2. Citește **Net total** față de **Vânzare totală** — asta ai câștigat.
3. Verifică nota despre monede. Dacă sunt rânduri excluse, tratează-le separat.
4. Citește **Pe furnizor** raportat la contractele și țintele tale de volum.
5. Exportă CSV-ul pentru cine îți ține contabilitatea.

Apoi, separat, filtrează starea pe **Anulată** pentru același interval și citește penalizările de
anulare de pe acele rezervări. Penalizările percepute de furnizor la care nu te așteptai sunt cel mai
ieftin lucru de descoperit devreme și cel mai scump de descoperit la facturare.
