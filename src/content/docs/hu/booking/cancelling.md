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

A **Foglalások** listában nyomd meg a sorban a **Foglalás lemondása** gombot — vagy nyisd meg a
foglalást, és nyomd meg ugyanazt a gombot ott. Mindkét esetben megerősítést kérünk, és a
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

Három különböző dolog romolhat el, és a képernyő megmondja, melyik. A különbség dönti el, mit tegyél
utána — a szöveget olvasd, ne azt, hogy valami pirosra váltott.

| Amit látsz | Mi történt | Mit tegyél |
| --- | --- | --- |
| „A foglalást nem sikerült lemondani.” | A kérés nem jutott át. | Próbáld újra. |
| „A foglalást nem mondtuk le: a szállítója elutasította a kérést (…).” | Eljutott a beszállítóhoz, és ő utasította el. A zárójeles kód az övé. | Lásd a kódokat alább. |
| „A szállítója nem válaszolt, ezért nem tudjuk megmondani, lemondták-e ezt a foglalást.” | Még senki nem tudja. Lehet, hogy átment, lehet, hogy nem. | **Ne próbáld újra.** Várj. |

A harmadikkal kell óvatosnak lenni. A legtöbb beszállítónál a lemondás nem idempotens, így a második
lemondás másodszor is felszámítható. A OneRate maga egyeztet a beszállítóddal, és az itteni állapot
változik, amint megjön a válasz; az idővonal rögzíti.

Mindhárom esetben a foglalás **nincs** lemondva, hacsak a képernyő nem mondja, hogy igen.

### Az elutasítási kódok

A kód pontosan úgy jelenik meg, ahogy keletkezett, hogy idézni tudd a beszállítódnak.

| Kód | Jelentés |
| --- | --- |
| `not_cancellable_CANCELLED` | Már le van mondva. Nincs teendő. |
| `not_cancellable_…` (bármely más állapot) | A foglalás nincs olyan állapotban, amit le lehet mondani — például olyan tartózkodás, amelyet a beszállító soha nem erősített meg. Nézd meg az állapotát. |
| `transition_conflict_…` | Valaki más módosította ezt a foglalást, miközben te lemondtad. Töltsd újra, és olvasd el az állapotot, mielőtt bármit tennél. |
| `AUTH` | A beszállítód elutasította a hitelesítő adatot. Ellenőrizd a **Beszállítók** alatt. |
| `VALIDATION` | A beszállítód nem ismeri fel ezt a foglalást olyanként, amit le tud mondani. Keresd meg őket a beszállítói hivatkozással. |
| Bármi más | A beszállítód saját elutasítása. Idézd nekik a kódot. |
