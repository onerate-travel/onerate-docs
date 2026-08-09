---
title: Foglalás lemondása
description: Ki mondhat le, mit közöl a díj megerősítése, mi történik, ha a beszállító mást számít fel, és miért nem tudnak lemondani az ügyfelek.
---

## Ki mondhat le

Tulajdonosok és adminisztrátorok. **Az ügyintézők nem** — a lemondási díjak valódi pénzek, olyan
szerződés alapján, amelyet nem az ügyintéző írt alá. Az ügyfelek sem tudnak.

Ha ügyintéző vagy, és egy foglalást le kell mondani, kérd meg a tulajdonosodat vagy az
adminisztrátorodat.

## A lemondás

Nyisd meg a foglalást, és nyomd meg a **Foglalás lemondása** gombot. Megerősítést kérünk, és a
megerősítés megmondja, mibe fog kerülni:

> Lemondod ezt a foglalást? A várható lemondási díj 120,00 €.

vagy, ha a beszállító nem adott összeget:

> Lemondod ezt a foglalást? A lemondási díj még nem ismert — a beszállítód saját feltételei döntik
> el.

Mindkettő őszinte állítás arról, amit a OneRate tud. A második nem rendszerhiba; azt jelenti, hogy a
beszállító válasza csak a lemondással együtt érkezik meg.

## A lemondás után

A foglalás **Lemondva** állapotba kerül, és megtudod, mi történt valójában:

| Üzenet | Jelentés |
| --- | --- |
| „A foglalás lemondva. Lemondási díjat nem számoltak fel.” | Díjmentes, ahogy vártuk. |
| „A foglalás lemondva. A beszállítód 120,00 € lemondási díjat számolt fel.” | A beszállító felszámított. Ezt az összeget várd a számláján. |
| „A foglalás lemondva. A lemondási díj még nem ismert…” | Lemondva, a díj még nyitott. A beszállítód feltételei döntik el. |

A beszállító által visszaadott díjat rögzítjük a foglaláson, és összevetjük a foglaláskor tárolt
feltételekkel. **Ha eltérnek, az a beszállítóddal rendezendő kérdés** — mindkettő nyoma ott van a
foglaláson, a költségek szakaszban és az idővonalon.

## Mielőtt a határidő bezárul

Az ingyenes lemondásnak van határideje, és a OneRate emlékeztet, mielőtt bezárul — alapértelmezés
szerint 48 órával előtte, irodánként állítható a [Beállításokban](/hu/manage/settings/).

Ha egy beszállító időzóna nélkül ad meg határidőt, a OneRate a szálloda időzónájában oldja fel, és
így jelöli: **Becslés — ez a beszállító nem ad meg időzónát, így ez a legkorábbi időpont, amikorra a
határidő eshet.** Tekintsd az utolsó biztonságos pillanatnak, ne ígéretnek. A becsült határidő
*előtt* mondj le, soha ne pontosan rajta.

Nagyon régi foglalások helyette **Nem megerősített** jelzést mutathatnak — még azelőtt rögzítettük
őket, hogy tároltuk volna, a határidő a beszállítóé volt-e vagy becslés. Egyeztess a beszállítóval,
mielőtt erre építesz.

## Módosítások

A portálon nincs módosítási folyamat. Dátum, létszám vagy vendégnév megváltoztatásához fordulj
közvetlenül a beszállítódhoz a saját szerződéseden; az itteni foglalás **Módosítva** állapotot mutat,
ha a beszállító változást jelent.

## Miért nem tudnak lemondani az ügyfelek

Az ügyfél foglalási képernyője ezt írja:

> A foglalás lemondásához vagy módosításához fordulj az irodádhoz — náluk van a beszállítói
> szerződés, és egyedül ők módosíthatják. Ne hívd közvetlenül a szállodát: az ott elvégzett
> módosítás nem jutna el ehhez a nyilvántartáshoz.

A második mondat a lényeg. A szálloda recepcióján megbeszélt módosítás soha nem jut el a
beszállítódhoz vagy ehhez a nyilvántartáshoz, így a foglalási listád és az ügyfeled elvárásai
szétválnak — és ez a bejelentkezéskor derül ki.

## Ha a lemondás nem sikerül

A „A foglalást nem sikerült lemondani” azt jelenti, hogy a beszállító elutasította, vagy nem
válaszolt. A foglalás **nem** lett lemondva.

Ne feltételezd, hogy átment, és ne nyomkodd a gombot — a legtöbb beszállítónál a lemondás nem
idempotens, így az ismétlés második díjat is eredményezhet. Nézd meg az idővonalat, majd lépj
kapcsolatba közvetlenül a beszállítóval, ha továbbra sem sikerül.
