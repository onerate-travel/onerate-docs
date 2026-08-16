---
title: Árazás és árrés
description: Az eladási pénznemed, a minden árra rákerülő árrés, hogyan öröklődnek az árrések az ügyfelekhez, és miért nem váltunk át soha semmit.
---

## Eladási pénznem

Az irodád egyetlen pénznemben ad el, amelyet tulajdonos vagy adminisztrátor állít be a
[Beállításokban](/hu/manage/settings/), az **Iroda árazása** részben.

Minden ügyintéző a sajátjában is eladhat: **Az én árazásom** a felhasználói menüben. Ha üresen
hagyod, az irodáét követed.

Ez **nem megjelenítési beállítás.** Ez dönti el:

- mely ajánlatok jelennek meg a fő találati listádon, és
- mely ajánlatok kerülnek a külön **Más pénznem** szakaszba, csak egymáshoz mérve.

### Semmit nem váltunk át, soha

Az az ár, amelyet egy beszállító USD-ben ad, USD-ben marad. A OneRate nem alakítja EUR-ra valamilyen
kitalált árfolyamon, mert az nem az az árfolyam lenne, amit a bankod ad, és egy kitalált szám egy
foglaláson rosszabb, mint egy őszinte külföldi.

A következmények, amelyeket mind látni fogsz a portálon:

- A más pénznemű ajánlatok **lefoglalhatók**, és pontosan azzal vannak felcímkézve, amik.
- **Nem rangsoroljuk** őket az eladási pénznemű ajánlataid mellé. Az „olcsóbb” két pénznem között
  nem olyan tény, amelyet a OneRate kimondhatna.
- A [Riportokban](/hu/manage/reports/) **pénznemenként egy összesítést** kapsz, elsőként az
  irodádét. Két pénznem nem adódik össze, de egyetlen sor sem marad ki a riportból.

Ha az üzleted java egy pénznemben van, állítsd be azt eladási pénznemnek, és ez ritkán kerül elő. Ha
tényleg kettőben kereskedsz, számíts két számsorra, mert ennyid van.

## Árrés

Az árrésed az a különbség, ami aközött van, amit a beszállító felszámít neked (**nettó**), és amiért
eladod (**eladás**).

Az iroda árrését tulajdonos vagy adminisztrátor állítja be a [Beállításokban](/hu/manage/settings/),
az **Iroda árazása** részben, százalékban — `12,5` tizenkét és fél százalékra.

Minden ügyintéző beállíthatja a sajátját **Az én árazásom** alatt a felhasználói menüben. Az ott
üresen hagyott mező az irodát követi; a beírt szám felülírja azt az adott ügyintéző saját ajánlataira
és foglalásaira.

Az árrés a nettó **százaléka**. Foglalásonkénti fix összeget a OneRate nem tud hozzáadni: valamelyik
pénznemben kellene megadni, és a OneRate semmit nem vált át.

Attól a pillanattól kezdve a portál minden ára — a találati lista, a szállodaoldal, az ellenőrző
képernyő, amit az ügyfeleid látnak — tartalmazza.

### A nincs beállítva nettót jelent

Ha nincs árrés beállítva, semmit nem adunk hozzá, és a beszállító árán adsz el. A mező ezt ki is
írja:

> Nincs beállítva — a beszállító árához nem adunk hozzá semmit. Adj meg egy százalékot, hogy nettó
> fölött adj el.

A kifejezett **0%** más, mint a nincs beállítva. A nulla olyan döntés, amelyet meghoztál, és
döntésként is kezeljük.

### A nettó számodra látható marad

Az ügyintézőid és a tulajdonosok mindig mindkét számot látják egy foglaláson: **A foglaláskor
ajánlott ár**, **A beszállító által visszaigazolva** és az **Eladási ár**. A riportok mindkettőt
összesítik.

Az **ügyfeleid** csak az eladási árat látják. Soha nem látják a beszállítói nettót, és soha nem
látják, melyik beszállítóról volt szó.

## Hogyan öröklődik az árrés

Az árrések a szervezeti láncod mentén oldódnak fel: az irodád, majd bármely alatta lévő ügyfél.

A szabály az, hogy **a legközelebbi szint nyer, amelyiknek van árrése.** A saját árréssel rendelkező
ügyfél azt használja; az árrés nélküli a tiédet örökli. Egy ügyfél felülírásának törlése az irodád
értékére esik vissza — nem nullára.

Ez ugyanaz az öröklés, amelyet az irodád konfigurációjának többi része is használ, tehát úgy
viselkedik, ahogy a [Beállításoktól](/hu/manage/settings/) várnád.

## Érdemes ellenőrzések

1. **Indíts egy keresést, és nyiss meg egy szállodát.** A kártyán és az ellenőrző képernyőn lévő
   árnak a nettódnak plusz az árrésednek kell lennie. Ha nem az, az árrés nincs beállítva, vagy nem
   került alkalmazásra.
2. **Nézd meg egy visszaigazolt foglalás költségszakaszát.** Ha *A beszállító által visszaigazolva*
   eltér *A foglaláskor ajánlott ártól*, a valódi árrésed azon a foglaláson nem az, amit beállítottál
   — a portál ezt kifejezetten jelzi, nem rejti el.
3. **Nézd meg a riportjaidban a pénznem-megjegyzést.** Ha azt írja, hogy foglalások kimaradnak az
   összesítésekből, lehet, hogy az eladási pénznemed nem illik ahhoz, ahogy valójában kereskedsz.

## Mit nem csinál a OneRate a pénzeddel

Nincs főkönyv, nincs folyószámla, nincs egyenleg, nincs korosítás, nincs beszedés, nincs
kártyaadat. A beszállítód a saját szerződéseden számláz neked, pontosan úgy, mint korábban, az
ügyfeled pedig úgy fizet neked, ahogy eddig.

A OneRate a saját fix havidíjas előfizetését számlázza, és semmi máshoz nem nyúl. Ez a teljes
pénzügyi kapcsolat.
