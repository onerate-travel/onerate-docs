---
title: Riportok
description: Amit eladtál, érkezési dátum és állapot szerint szűrve, beszállítóra, hónapra, személyre, fiókra és ügyfélre bontva, CSV-be exportálva.
---

A **Riportok** csak olvasható. A saját foglalásaid, összesítve. Tulajdonosoknak, adminisztrátoroknak
és ügyintézőknek érhető el; ügyfeleknek nem.

## Szűrők

- **Érkezés ettől / eddig** — tartomány a **tartózkodásra**, nem arra, mikor készült a foglalás. Egy
  augusztusi riport az augusztusi tartózkodások riportja.
- **Állapot** — egy [foglalási állapot](/hu/booking/statuses/), vagy mind.

## A táblázat

Foglalásonként egy sor: érkezés, szálloda, célállomás, vendég, az Ön **iktatószáma**, a **fiók**, ki
**vette fel a foglalást**, szállító, státusz, **nettó**, **eladási ár**, és a **lemondási feltételek**
úgy, ahogyan a foglalás pillanatában álltak.

Fölötte: a foglalások száma, **Összes nettó** és **Összes eladás** — pénznemenként egy pár. A kettő
különbsége az adott halmazon elért árrése.

## Bontások

Kettő a készletéről szól:

- **Szállító szerint** — foglalás, nettó és eladás szállítónként. Ezt a számot érdemes a
  [szállítói preferenciái](/hu/manage/preferences/) mellé olvasni: megmondja, hogy egy rögzítés vagy
  egy százalékos szabály valóban hozza-e azt a forgalmat, amiért beállította.
- **Érkezési hónap szerint** — ugyanez, a tartózkodás hónapja szerint.

Három a saját alakjáról:

- **Személy szerint** — ki mit adott el. E-mail cím alapján megnevezve, mert a név nem egyedi, a belső
  azonosító pedig nem olvasható.
- **Fiók szerint** — melyik iroda mit adott el.
- **Ügyfél szerint** — melyik vállalati ügyféltől jött a forgalom.

Azok a sorok, amelyek senkihez nem tartoznak, **saját szegmenst** kapnak, nem pedig kimaradnak: egy
foglalás, amely még a fiókok előttről való, vagy amelyet egy azóta törölt fiók készített, attól még
foglalás, és kihagyva a személyenkénti számok nem adnák ki az összesent.

Minden szegmens **pénznemenként** áll, ugyanazon okból, amiért az összegek is: a OneRate semmit nem
vált át, így egy két pénznemben kereskedő fiók két szegmens — számtanilag helyesen, nem pedig egyetlen
szám, amely semmit nem jelent.

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
