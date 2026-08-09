---
title: Ce este OneRate
description: Ce face produsul, ce nu face în mod deliberat și singura idee — grupurile comparabile — pe care este construit tot restul portalului.
sidebar:
  order: 1
---

OneRate este un portal B2B de rezervări hoteliere pentru agenții de turism. Tu aduci propriile
contracte cu furnizorii; OneRate le caută pe toate deodată, normalizează ce vine înapoi, clasează
cea mai ieftină ofertă din fiecare grup de camere cu adevărat comparabile și rezervă.

Se vinde ca abonament lunar fix.

## Ce face

- **O căutare, toate contractele.** În loc să deschizi patru extraneturi de furnizori și să compari
  manual, introduci sejurul o singură dată. OneRate întreabă în paralel fiecare furnizor pe care
  l-ai activat.
- **Prețuri comparabile și justificabile.** Cea mai ieftină ofertă este aleasă *în interiorul* unui
  grup de oferte cu adevărat asemănătoare — același hotel, aceeași masă, aceeași rambursabilitate,
  același termen de anulare, aceeași ocupare, aceeași monedă. Ofertele care nu sunt asemănătoare
  sunt afișate separat, nu clasate în tăcere una față de alta.
- **O singură listă de rezervări.** Fiecare rezervare făcută prin orice furnizor ajunge în aceeași
  listă, cu aceleași stări, același voucher și același flux de anulare.
- **Marja ta, aplicată automat.** Stabilești o marjă; portalul arată prețuri de vânzare agenților
  tăi și clienților tăi și păstrează alături netul furnizorului pentru rapoartele tale.

## Ce nu face în mod deliberat

Nu sunt funcții lipsă care așteaptă să apară. Sunt decizii și modelează ce trebuie să aștepți de la
portal.

- **OneRate nu atinge niciodată banii rezervării.** Nu există cont curent, nu există contabilitate,
  nu există sold, nu există scadențar, nu există încasare. Furnizorul tău îți facturează pe
  contractul tău, exact ca înainte. OneRate încasează doar abonamentul propriu.
- **OneRate nu convertește între monede.** Un tarif cotat de un furnizor în EUR rămâne în EUR. Nu
  este niciodată convertit în moneda ta de vânzare la un curs inventat de OneRate, pentru că acel
  curs nu ar fi cel pe care ți-l dă banca ta. Ofertele într-o monedă diferită de moneda ta de
  vânzare sunt afișate într-o secțiune proprie și clasate doar între ele. Vezi
  [Prețuri](/ro/manage/pricing/).
- **OneRate nu contopește tipurile de cameră între furnizori.** „Standard Double” de la un furnizor
  și „Classic Room, 1 Queen Bed” de la altul nu se presupune că sunt aceeași cameră. Ofertele sunt
  grupate la nivel de hotel după masă și rambursabilitate; echivalența tipurilor de cameră este o
  problemă de cercetare, iar ghicitul este modul în care o agenție vinde o cameră pe care oaspetele
  nu o primește.
- **Doar hoteluri.** Fără zboruri, fără transferuri, fără închirieri auto, fără tren.
- **Nu este un site B2C.** Călătorii tăi nu văd niciodată OneRate; clienții tăi îl văd doar prin
  rolul de client în care îi inviți, care nu arată niciodată nume de furnizori sau tarife nete.

## Singura idee de reținut: grupurile comparabile

Aproape orice întrebare despre ecranul de rezultate se reduce la asta.

Două oferte pot fi comparate între ele doar dacă se potrivesc **toate** următoarele:

| Trebuie să se potrivească | De ce |
| --- | --- |
| Hotelul | Evident, dar corespondența dintre ID-urile de hotel ale furnizorilor este cea care o face adevărată. |
| Codul de masă | Doar cazare față de demipensiune nu este o diferență de preț, este alt produs. |
| Clasa de rambursabilitate | Un tarif nerambursabil este mai ieftin *pentru că* este nerambursabil. |
| Intervalul termenului de anulare | Anulare gratuită până mâine nu este același produs cu anulare gratuită până luna viitoare. |
| Acoperirea ocupării | Un tarif pentru doi adulți nu este comparabil cu unul care acoperă și un copil. |
| Moneda și baza de impozitare | Totalurile trebuie să fie același fel de număr înainte ca „mai ieftin” să însemne ceva. |

În interiorul unui astfel de grup, cel mai ieftin câștigă automat. Între grupuri nu se selectează
nimic automat — ți se arată fiecare grup și alegi tu.

Când OneRate alege un câștigător pentru tine, înregistrează **de ce**: ce oferte a analizat, pe
care le-a exclus și pe ce temei, și diferența decisivă. Asta deschide linkul **De ce acest
furnizor?** de pe un rezultat. Dacă un furnizor te întreabă vreodată de ce ai rezervat în altă
parte, sau un coleg întreabă de ce lista s-a clasat așa, acea înregistrare este răspunsul.

:::note
Clasarea este o setare implicită, nu o regulă. Dacă agenția ta are angajamente de volum, o poți
modifica — fixezi un furnizor sau preferi unul dacă altul nu este mai ieftin cu mai mult de *n*%.
Vezi [Preferințe de furnizori](/ro/manage/preferences/).
:::

## Rezultatele parțiale sunt normale

O căutare nu așteaptă cel mai lent furnizor. Rezultatele sosesc pe măsură ce fiecare furnizor
răspunde, iar starea fiecărui furnizor este afișată lângă număr — **OK**, **Lent**, **Eșuat**,
**Parțial** sau **Fără acoperire aici**.

O căutare care returnează mai puține hoteluri pentru că un furnizor nu a răspuns la timp *îți spune
că s-a întâmplat asta*. Este deliberat: un instrument care returnează în tăcere mai puține hoteluri
este un instrument în care nu poți avea încredere când spune „nu există disponibilitate”.

## Unde mergi mai departe

- Nou în portal → [Autentificare](/ro/start/signing-in/), apoi [Portalul](/ro/start/the-portal/)
- Vei căuta și rezerva → [Cum cauți](/ro/search/running-a-search/)
- Configurezi agenția → [Furnizori](/ro/manage/suppliers/) și [Setări](/ro/manage/settings/)
- Un cuvânt pe care nu îl recunoști → [Glosar](/ro/reference/glossary/)
