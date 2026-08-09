---
title: Foglalási állapotok
description: Minden állapot, amelyben egy foglalás lehet, mit jelent a vendég számára, és az a kettő, amelyhez ember kell — Egyeztetés alatt és Kézi ellenőrzés.
---

## Az állapotok

| Állapot | Mit jelent | Mit tegyél |
| --- | --- | --- |
| **Piszkozat** | Létrejött, még nem adtuk le a beszállítónál. | Semmit — csak egy pillanatig tart. |
| **Előfoglalt** | Az árat újraellenőriztük és elfogadtuk; a foglalás leadás alatt van. | Semmit. |
| **Visszaigazolt** | A beszállítónál megvan. Van visszaigazolási azonosító és voucher. | Küldd el a vouchert. Kész. |
| **Sikertelen** | Nem jött létre, és tudjuk, hogy nem jött létre. A beszállítónál nincs semmi. | Foglalj újra, ha a vendég még kéri a tartózkodást. |
| **Egyeztetés alatt** | Még nem tudjuk, felvette-e a beszállító. | **Várj. Ne foglald le újra.** Lásd lentebb. |
| **Kézi ellenőrzés** | 24 óra után is ismeretlen. Embernek kell lezárnia. | Tulajdonos vagy adminisztrátor: egyeztess a beszállítóval, és rögzítsd, amit találsz. Lásd lentebb. |
| **Lemondva** | Lemondva. A beszállító által felszámított díjat rögzítjük a foglaláson. | Semmit. |
| **Módosítva** | A beszállító jelzi, hogy a foglalás megváltozott. | Nézd meg a részleteket és az idővonalat. |

## Egyeztetés alatt

Ezt az állapotot érdemes rendesen megérteni.

**A beszállítói időtúllépés *ismeretlent* jelent, nem *sikertelent*.** A kérés megérkezhetett, és
elfogadásra kerülhetett azután, hogy a kapcsolat megszakadt. Ha ezt kudarcnak vesszük és újrafoglalunk,
úgy jár egy iroda, hogy két szobája lesz — és mindkettőt kifizeti.

Ezért a OneRate nem találgat. A foglalást **Egyeztetés alatt** állapotba teszi, és újra megkérdezi a
beszállítót, egyre ritkuló ütemben, legfeljebb 24 órán át. A portál pontosan ezt írja:

> Egyeztetünk a beszállítóval, hogy átment-e ez a foglalás. Az ellenőrzés automatikusan ismétlődik,
> és 24 órán belül lezárul; ha utána is bizonytalan, ember veszi át.
>
> Addig ne foglald le újra ezt a tartózkodást — ha a beszállító mégis felvette, két foglalásod lenne.

Ezután három dolog történhet:

- A beszállító megerősíti, hogy létezik → **Visszaigazolt**, és minden a szokott módon halad tovább.
- A beszállító biztosan állítja, hogy nem létezik → **Sikertelen**. Nyugodtan foglalj újra.
- 24 óra után is ismeretlen → **Kézi ellenőrzés**.

Amíg egy foglalás egyeztetés alatt van, nincs teendőd. Az ellenőrzés akkor is fut, ha a portál nincs
nyitva.

:::caution
Ha a vendég ott áll előtted, és ma estére kell szoba, **másik szállodát vagy másik árat foglalj**,
ne ugyanazt még egyszer. Ugyanannak a tartózkodásnak a második foglalása pontosan az a duplikátum,
amelynek megelőzésére ez az állapot létezik.
:::

## Kézi ellenőrzés

24 óra automatikus ellenőrzés nem zárta le. Valakinek meg kell néznie.

Csak tulajdonos vagy adminisztrátor zárhatja le, mert ez végleges kijelentés arról, mi történt
valójában. A képernyő ezt írja:

> Az egyeztetés nem tudta megállapítani, hogy ez a foglalás eljutott-e a beszállítóhoz. Nézd meg a
> beszállítód saját nyilvántartását, és rögzítsd, amit találsz — csak így kerül ki az ellenőrzésből.

### Hogyan zárd le

1. **Nézd meg a beszállító extranetjét, vagy hívd fel.** Ne emlékezetből vagy következtetésből zárd
   le. Ez maga a feladat.
2. Nyisd meg a foglalást, és menj a **Zárd le ezt a foglalást** részhez.
3. Rögzítsd, mit mutat a beszállító:
   - **A foglalás létezik** — meg kell adnod a **beszállító visszaigazolási azonosítóját**. Nélküle
     semmi nem azonosítja a foglalást a beszállítónál, ezért az űrlap megköveteli.
   - **Nincs ilyen foglalás** — sikertelenként rögzítjük, és a tartózkodás újra foglalható.
   - **Létezik, de már le van mondva** — lemondottként rögzítjük.
4. Nyomd meg az **Eredmény rögzítése** gombot.

Ha valaki más zárta le előbb, ezt kapod: *„Ez a foglalás már nincs ellenőrzés alatt — valaki más
előbb lezárta.”* Semmit nem írunk felül.

## Figyelmet igénylő foglalások

A navigáció számot mutat azokról a foglalásokról, amelyek olyan állapotban ülnek, amely magától nem
oldódik meg. Kövesd. Egy kézi ellenőrzés alatti foglalás egy szoba, amely lehet, hogy megvan a
vendégnek, lehet, hogy nem — és magától nem lesz jobb.

## Miért csak egy irányba mozognak az állapotok

A foglalás rögzített úton halad — Piszkozat → Előfoglalt → Visszaigazolt, vagy a Sikertelen, az
Egyeztetés alatt, illetve a Kézi ellenőrzés felé — és soha nem visszafelé. Az átmeneteket a kiírás
pillanatában kényszerítjük ki, nem utólag ellenőrizzük, így két, egyszerre cselekvő ember nem tud
két kimenetelt előállítani.

Gyakorlatilag ez azt jelenti: amit egy foglaláson látsz, az történt. Nincs javítási útvonal, amely
csendben átírná a történteket — pontosan ezért kér a kézi ellenőrzés emberi kijelentést, nem pedig
egy „újra” gombot.
