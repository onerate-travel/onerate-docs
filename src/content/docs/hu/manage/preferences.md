---
title: Beszállítói preferenciák
description: A „legolcsóbb elöl” rangsor felülírása — egy beszállító rögzítése, vagy egy beszállító előnyben részesítése, hacsak egy másik nem érdemben olcsóbb.
---

Alapértelmezés szerint minden összehasonlítható csoporton belül a legolcsóbb ajánlat nyer. Ez addig
helyes, amíg az irodádnak nincs volumenvállalása, jobb háttéralkuja, vagy olyan beszállítója,
amelynek a kiszolgálása megér néhány eurót.

A **Preferenciák** az a hely, ahol ezt kimondod. Tulajdonosok és adminisztrátorok.

## A két szabálytípus

### Mindig előnyben

Rögzíts egy beszállítót. Ahol annak a beszállítónak van ajánlata egy összehasonlítható csoportban,
ott ő nyer — az ártól függetlenül.

Akkor használd, ha egy szerződés valóban megköveteli. Értsd, miről mondasz le: néha többet fogsz
fizetni, és a **Miért ez a beszállító?** feljegyzés pontosan megmutatja, mikor és mennyivel.

### Előnyben, ha nem drágább

A lágyabb és általában jobb szabály. Részesíts előnyben egy beszállítót, **hacsak egy másik nem
olcsóbb több mint *n*%-kal.**

> Maradj a RateHawknál, hacsak egy másik beszállító nem olcsóbb több mint 3%-kal.

A hétköznapi foglalásokon eléred a volumencélodat, és mégis elkapod azokat, ahol a hűség valódi
pénzbe kerülne. A százalékot 0 és 100 között add meg.

## Hatókör

Minden szabály vagy:

- **Minden úti cél** — hagyd üresen az úti cél mezőt, vagy
- **Egy úti cél** — add meg az úti cél kódját, például `IST`.

Az úti célhoz kötött szabály csak az arra az úti célra indított keresésekre vonatkozik. Így követsz
egy regionális — nem globális — szerződést.

## Szabály hozzáadása

1. **Preferenciák → Szabály hozzáadása.**
2. Válaszd ki a **szabálytípust**.
3. Válaszd ki a **beszállítót**.
4. Adj meg opcionálisan egy **úti célt**; hagyd üresen az összeshez.
5. Az *Előnyben, ha nem drágább* esetén add meg a **százalékot**.
6. **Szabály hozzáadása.**

A lista minden szabályt megmutat a típusával, beszállítójával és hatókörével. Az **Eltávolítás**
töröl egyet, és megkérdezi, melyiket.

## Ha nincs egyetlen szabály sem

> Nincs preferenciaszabály. Alapértelmezésben a legolcsóbb összehasonlítható ajánlat nyer.

Ez teljesen rendben lévő állapot. Akkor adj hozzá szabályokat, ha üzleti okod van rá, nem
elővigyázatosságból.

## Amit a preferenciák nem változtatnak meg

- **Nem vonják össze a nem összehasonlítható ajánlatokat.** Egy rögzített beszállító félpanziós ára
  továbbra sem nyer egy másik beszállító csak-szoba árával szemben — sosem voltak egy csoportban.
  Lásd az összehasonlítható csoportokról szóló szakaszt a
  [Mi az a OneRate](/hu/what-is-onerate/) oldalon.
- **Nem rejtenek el semmit.** A többi beszállító ajánlata továbbra is megjelenik, továbbra is elérhető
  a lehetőségek kinyitásával, és továbbra is lefoglalható, ha valamelyiket választod.
- **Nem írnak felül téged csendben.** Minden, szabály miatt született automatikus választást rögzít a
  **Miért ez a beszállító?** nyomvonal, azzal az árkülönbséggel együtt, amelyet elfogadott.

Ez az utolsó pont az oka annak, hogy érdemes a lágyabb szabályt választani. Egy rögzítés, amely
csendben 40 €-ba kerül foglalásonként, láthatatlan egy végösszegben, és nyilvánvaló a nyomvonalon —
de csak akkor, ha valaki megnézi. A százalékos szabály magába a szabályba írja bele a határt.

## Átnézni őket

A preferenciák üzleti döntések lejárati dátummal: a szerződések változnak, a volumencélok
teljesülnek, a beszállítók romlanak. A portálon semmi nem fog emlékeztetni.

Olvasd őket a [riportjaid](/hu/manage/reports/) mellett — a **Beszállító szerint** bontás az a szám,
amely megmondja, hogy egy szabály azt csinálja-e, amiért beállítottad.
