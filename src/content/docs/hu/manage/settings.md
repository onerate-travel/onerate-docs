---
title: Beállítások
description: A céges foglalási kapcsolattartó, az iroda azonosítója és márkázása, az előfizetés állapota, az iroda konfigurációja és a térképszolgáltató.
---

Tulajdonosok és adminisztrátorok. Ha mentetlen módosításokkal hagynád el ezt a képernyőt, előbb
rákérdezünk.

## Céges foglalási kapcsolattartó

**Ez az a beállítás, amelyet minden más előtt el kell végezni.** Mindkét mező kötelező:

- **Céges foglalási kapcsolattartó e-mail**
- **Céges foglalási kapcsolattartó telefonszám** — nemzetközi formátum, pl. `+902121112233`

A beszállítók kapcsolattartót kérnek a foglaló félhez. Amíg mindkettő nincs meg, **minden foglalást
elutasítunk**, minden felhasználónál, az ügyfeleidnél is. A képernyő figyelmeztet, ha hiányoznak:

> A foglalásokat elutasítjuk, amíg nem adsz meg céges kapcsolattartót — e-mail és telefonszám is
> kell.

Együtt kell kitölteni vagy együtt törölni őket. Az egyiket a másik nélkül nem lehet elmenteni, mert
egy fél kapcsolattartó nem kapcsolattartó.

## Az iroda azonosítója

- **Iroda neve**
- **Márkázás ezen a címen** — vagy a OneRate alapértelmezett, vagy a saját white-label márkázásod

Mindkettőt a OneRate állítja be, itt nem szerkeszthetők. Bármelyik módosításához fordulj a OneRate
ügyfélszolgálatához. A képernyő ezt ki is írja, ahelyett hogy olyan mezőt mutatna, amely nem
mentődik el.

## Előfizetés

Az előfizetésed állapota: **Aktív**, **Próbaidőszak**, **Fizetés késedelemben** vagy
**Megszüntetve**. Csak tulajdonosok.

Ha nem látható, a portál ezt világosan kimondja, és a OneRate-hez irányít, ahelyett hogy találgatna.

Az előfizetés állapota a **bejelentkezést** szabályozza, soha nem egy már folyamatban lévő foglalást.
Egy futó foglalás nem marad félbe attól, hogy közben lejár az előfizetés.

## Eladási pénznem

Az a pénznem, amelyben az irodád elad — háromjegyű ISO-4217 kód: `EUR`, `TRY`, `USD`.

A megváltoztatása azt változtatja meg, hogy az irodád miben ad el — nem csak azt, hogyan jelennek meg
az árak —, és **semmit nem váltunk át**. Olvasd el az [Árazás és árrés](/hu/manage/pricing/) oldalt,
mielőtt módosítod.

## Térkép

A találatok térképen is megjeleníthetők. Alapértelmezés szerint ez az **OpenStreetMap**, amely semmibe
nem kerül, és nem igényel beállítást.

Ha az irodádnak van saját **Google Maps API-kulcsa**, használhatod a Google térképét. A csempéket a
saját Google-fiókodra, a saját szerződéseden számlázzák — a OneRate nem alkalmaz saját korlátot, ezért
állíts be kvótákat és költségriasztásokat a kulcsra a Google Cloud konzolban.

A használatához:

1. Add meg a kulcsot. Mentés előtt ellenőrizzük a Google-nél, titkosítva tároljuk, és soha nem küldjük
   el a böngésződnek.
2. Ha a Google elutasítja, nem mentjük el — ellenőrizd, hogy a **Map Tiles API** engedélyezve van-e rá.
3. Bármikor válthatsz az **OpenStreetMap** és a **Google Maps** között; a **Kulcs eltávolítása**
   véglegesen visszaállít.

Ha a Google később elutasít egy korábban működő kulcsot, a portál visszavált OpenStreetMapre, és ezt
közli is, ahelyett hogy üres térképet mutatna.

## Az iroda konfigurációja

Az irodádra feloldott értékek listája. Mindegyik megmutatja, honnan származik az aktuális értéke:

| Eredet | Jelentés |
| --- | --- |
| **Az irodád beállítása** | Te állítottad be. |
| **Örökölve innen: {org}** | A szülő irodádtól jön. |
| **A OneRate platform alapértelmezése** | A OneRate értéke, amíg nem állítod be a sajátodat. |
| **Nincs beállítva — a OneRate-nek nincs erre értéke** | Semmi nem fut ezen az értéken. |
| **Nincs beállítva — szükséges ahhoz, hogy {capability}** | Valami blokkolva van, amíg be nem állítod. Az üzenet megmondja, mi. |

A feloldási szabály: **a saját beállításod nyer, majd a szülőé, majd a OneRate alapértelmezése.** A
saját felülírásod törlése a szülő értékére esik vissza, nem a OneRate-ére.

Az itt látható értékek közé tartozik a portál alapértelmezett nyelve, az utasoknak szóló
ügyfélszolgálati e-mail, a céges kapcsolattartó, a beszállítói kéréskeretek, a keresési időkeret, a
lemondási emlékeztető előideje, a meghívók érvényessége, az ár-gyorsítótár élettartama, a
vendégadat-megőrzés, az alapértelmezett árrés és az eladási pénznem.

Nem mindegyik szerkeszthető itt. A beállítások akkor válnak szerkeszthetővé, amikor az őket használó
funkciók megjelennek; a képernyő megmondja, melyik melyik, ahelyett hogy halott mezőket mutatna.

:::caution
Ha azt látod, hogy *„egy tárolt beállítás ismeretlen vagy érvénytelen”*, fordulj a OneRate
ügyfélszolgálatához. **Semmilyen alapértelmezést nem helyettesítettünk be** — a portál nem hajlandó
találgatni egy értéket, amelyet nem tud elolvasni, ahelyett hogy olyan számon futna, amelyet senki
nem választott.
:::

### Kettő, amelyről érdemes tudni

- **Vendégadatok megőrzése (nap)** — meddig maradnak a vendégnevek és a beszállítói adatok egy
  foglaláson, mielőtt automatikusan törölnénk őket. A törlés a személyt távolítja el; a foglalás
  állapota, dátumai és összegei megmaradnak a riportjaidhoz. Egyetlen foglalást kézzel is törölhetsz
  — lásd [A foglalásaid](/hu/booking/your-bookings/).
- **Lemondási emlékeztető előideje (óra)** — mennyivel a záruló ingyenes lemondási ablak előtt kapsz
  figyelmeztetést. 48 óra, ha nem változtatod meg.

## Értékek, amelyeket csak az irodád tudhat

Néhány beállításnak **nincs** OneRate-alapértelmezése, és soha nem is lesz — a beszállítói
szerződésed kéréskerete, az eladási pénznemed, a foglalási kapcsolattartód.

A OneRate ezeket nem találja ki, bármilyen óvatosnak tűnjön is egy kitalált érték, mert egy hibás
kapcsolattartó nem óvatos kapcsolattartó, hanem hibás. Ahol ilyen érték hiányzik, az azt igénylő
képesség kikapcsolva marad, a portál pedig megnevezi az értéket is és azt is, hol kell beállítani.
Ezért nem lehet egy beszállítót engedélyezni, mielőtt a kerete létezne.
