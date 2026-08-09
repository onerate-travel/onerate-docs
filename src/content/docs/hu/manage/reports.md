---
title: Riportok
description: Amit eladtál, érkezési dátum és állapot szerint szűrve, beszállítóra és hónapra bontva, CSV-be exportálva.
---

A **Riportok** csak olvasható. A saját foglalásaid, összesítve. Tulajdonosoknak, adminisztrátoroknak
és ügyintézőknek érhető el; ügyfeleknek nem.

## Szűrők

- **Érkezés ettől / eddig** — tartomány a **tartózkodásra**, nem arra, mikor készült a foglalás. Egy
  augusztusi riport az augusztusi tartózkodások riportja.
- **Állapot** — egy [foglalási állapot](/hu/booking/statuses/), vagy mind.

## A táblázat

Foglalásonként egy sor: érkezés, szálloda, úti cél, vendég, beszállító, állapot, **nettó**,
**eladás**.

Fölötte: a foglalások száma, a **Nettó összesen** és az **Eladás összesen**. A két összeg különbsége
a szűrt halmazon elért árrésed.

## Bontások

- **Beszállító szerint** — foglalások, nettó és eladás beszállítónként. Ezt a számot érdemes a
  [beszállítói preferenciáid](/hu/manage/preferences/) mellett olvasni: megmondja, hogy egy rögzítés
  vagy egy százalékos szabály tényleg hozza-e azt a volument, amiért beállítottad.
- **Érkezési hónap szerint** — ugyanez, a tartózkodás hónapja szerint.

## Export

A **CSV exportálása** letölti a szűrt sorokat. Ugyanazok az oszlopok, mint a táblázatban, így egy
táblázatkezelős összesítés megegyezik azzal, ami a képernyőn van.

Ha nem sikerül, próbáld újra — semmi nem íródik ki félig.

## Két megjegyzés, amely megváltoztatja az összegek jelentését

Olvasd el mindkettőt, mielőtt bárkinek számot mondanál.

### Pénznem

> 3 foglalás USD, GBP pénznemben van árazva, és NEM szerepel a fenti EUR összegekben. A OneRate nem
> vált át pénznemek között.

Az eladási pénznemedtől eltérő pénznemű foglalások **kimaradnak az összegekből** — nem váltjuk át
őket kitalált árfolyamon. A táblázatban továbbra is ott vannak; egyszerűen nem adódnak hozzá egy
olyan számhoz, amelyhez nem tartoznak.

Ha ez a megjegyzés minden riporton megjelenik, az eladási pénznemed valószínűleg nem illik ahhoz,
ahogy valójában kereskedsz. Lásd: [Árazás](/hu/manage/pricing/).

### Csonkolás

> Csak az első 1000 foglalás látszik, és a fenti összegek is csak ezekre vonatkoznak. Szűkítsd az
> érkezési időszakot a teljes riporthoz.

A nagy tartományt korlátozzuk. **Az összegek kizárólag a megjelenített sorokra vonatkoznak** — nem
egy nagyobb szám részleges becslései. Szűkítsd az érkezési tartományt, és futtasd újra; két féléves
riport pontos ott, ahol egy csonkolt év nem az.

## Ami nincs itt

Nincs főkönyv, nincsenek egyenlegek, nincs korosítás, nincs fizetési állapot, nincs számlázás. A
OneRate soha nem nyúl a foglalás pénzéhez, így nincs mit mondania arról, mit fizettek ki — csak
arról, mit adtak el. Lásd: [Árazás](/hu/manage/pricing/).

## Egy havi rutin, ami működik

1. Állítsd az érkezési tartományt az előző hónapra, az állapotot **Visszaigazolt**-ra.
2. Olvasd a **Nettó összesen**-t az **Eladás összesen**-hez képest — ennyit kerestél.
3. Nézd meg a pénznem-megjegyzést. Ha vannak kizárt sorok, kezeld őket külön.
4. Olvasd a **Beszállító szerint** bontást a szerződéseid és volumencéljaid mellé.
5. Exportáld a CSV-t annak, aki a könyvelésedet viszi.

Utána, külön, szűrd az állapotot **Lemondva** értékre ugyanarra a tartományra, és olvasd el a
lemondási díjakat azokon a foglalásokon. A beszállító által felszámított, nem várt díjak a legolcsóbb
dolgok, amiket korán fel lehet fedezni, és a legdrágábbak, ha csak a számlázáskor derülnek ki.
