---
title: Beállítások
description: A céges foglalási kapcsolattartó, a saját azonosítód és márkázásod, az irodai mezők, a biztonsági beállítások, az előfizetés állapota, az iroda konfigurációja és a térképszolgáltató.
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

## A saját azonosítója, a saját dokumentumain

Ebben a szakaszban minden az Öné, és rákerül arra a papírra, amelyet az ügyfelei megőriznek.

### Az iroda adatai

- **Cégnév** — a bejegyzett cégnév, ha eltér attól, amelyen kereskedik
- **Cím**
- **Adószám** — Törökországban VKN, máshol CUI, NIP vagy partita IVA. Csak nyomtatásra kerül, nem
  számolunk vele, ezért mindegyik elfogadott
- **Irodai engedélyszám** — Törökországban a TÜRSAB-szám

Az üresen hagyott mező **egyáltalán nem** kerül a voucherre — nem üres sorként. Az üres „Adószám:"
sor azt jelenti, hogy *nincs*, ami más állítás, mint hogy *nincs megadva*, és a kettő közül a hamis.

Ezek az ügyfeleire is öröklődnek: a vállalati ügyfele által készített foglalás az **Ön** engedélyét
viseli, mert azon a dokumentumon az Ön irodája az engedélyes fél.

### Az iroda logója

**PNG vagy JPEG, legfeljebb 256 KB.** A vouchereken és a saját webcímén lévő belépőoldalon jelenik
meg.

Csak ez a két formátum, mert ezt a kettőt tudja a voucher hordozni. Egy formátum, amely a portálon
megjelenik, a dokumentumról viszont csendben eltűnik, rosszabb az elutasításnál — senki nem venné
észre, amíg egy ügyfél rá nem kérdez.

Cseréhez töltsön fel másikat; a **Logó eltávolítása** visszaáll a OneRate jelére.

### Márkaszín

Egyetlen szín, hexadecimális értékként, például `#0e6b5c`. A sötétebb és világosabb árnyalatok
ebből származnak, így nincs más választanivaló.

Az **olvashatatlan** szín elutasításra kerül, és az üzenet ezt meg is mondja:

> Ez a szín nem olvasható: a rajta lévő fehér szöveghez és a világos háttéren legalább 4.5:1 kell.

Ez nem szőrszálhasogatás. Ugyanaz a szín fest gombot fehér szöveggel és kiemelt szavakat világos
háttéren — egy céges sárga a második próbán átmegy, az elsőn nem, az eredmény pedig olyan portál,
amelynek gombjait a saját munkatársai nem tudják elolvasni.

### Webcím

Az iroda saját belépési címe: `azonneve.onerate.travel`.

Kisbetűk, számok és kötőjelek, 3–40 karakter. Néhány név a OneRate sajátja, azokat elutasítjuk; és
elutasítjuk azt is, amelyet már egy másik iroda használ — az üzenet megmondja, melyikről van szó.

:::caution
A módosítás **azonnal működésképtelenné teszi a régi címet**, azon is, amit már kinyomtatott vagy
e-mailben elküldött. A változás előtt szóljon az ügyfeleinek, ne utána.
:::

## Irodai mezők

Saját mezői a foglaláson: **költséghely**, **projektkód**, **megrendelésszám** — amire a pénzügynek
szüksége van, hogy egy tartózkodást beazonosítson.

Minden mezőnek van:

- **kulcsa**, amely alatt az érték tárolódik, és amelyhez a riport oszlopa kötődik. Később nem
  módosítható, mert minden rögzített érték ez alatt áll
- **címkéje**, amelyet az ügyintézői a foglalási űrlapon olvasnak — és ezt *lehet* módosítani
- **típusa**: szöveg, rögzített lista vagy dátum
- **kötelező** volta

A **kötelező** mező egyenesen elutasítja a foglalást, még mielőtt a szállító hívásra kerülne. Éppen
ez a lényege: a kódolatlan tartózkodás olyan, amelyet valaki két héttel később keres, és addigra az
ügyintéző elfelejtette, melyik volt a negyven közül.

A mezői megjelennek az ellenőrző képernyőn, a foglalás saját oldalán, és **oszlopként a riport
exportjában** — minden meghatározott mezőhöz egy oszlop, akkor is, ha nem került bele semmi, így
ugyanannak az időszaknak két exportja azonos alakú.

Vállalati ügyfelei is meghatározhatnak sajátokat; az Ön mezői az ő foglalásaikra is érvényesek, és a
kötelezővé tett mező náluk is kötelező marad. Lásd: [Ügyfelek](/hu/manage/customers/).

## Biztonsági beállítások

Három beállítás, és mindegyik csak **szigoríthat** azon, amit a OneRate már megkövetel.

- **Kinek kötelező a kétlépcsős azonosítás** — a tulajdonosoknak (a OneRate alapszintje), az Ön
  adminisztrátorainak, vagy mindenkinek, aki belép. Az alapszint alá nem mehet.
- **Munkamenet élettartama (óra)** — meddig működhet egy belépett munkamenet újbóli belépés nélkül.
  1 óra és 14 nap között.
- **Engedélyezett IP-címek** — IPv4-címek és CIDR-tartományok, vesszővel elválasztva. A máshonnan
  érkező kérés elutasításra kerül, **a saját munkatársaié is**.

Az IPv6 elutasításra kerül ahelyett, hogy elfogadnánk és figyelmen kívül hagynánk: egy lista, amely
az internet felével csendben nem egyezik, abban a hitben hagyná, hogy van egy védelme, ami nincs.

Ezek az API-kulcsaira is vonatkoznak — a kulcs is az iroda forgalma. Lásd:
[Integrációk](/hu/manage/integrations/).

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

A találatok térképen is megjeleníthetők. Alapértelmezés szerint ez a **Google Maps**, a OneRate saját
kulcsával rajzolva: nincs mit beállítani, és az irodádnak semmit sem számláznak.

A **Térképszolgáltató** beállítással az irodád helyette az **OpenStreetMap**-et választhatja. A
választás az iroda minden ügyintézőjére és az ügyfeleid portáljaira is érvényes.

A **Jelenleg használt** a ténylegesen használt térképet mutatja. Ha **OpenStreetMap (ideiglenesen)**
áll ott, a Google-t választottad, de a OneRate most nem tudja megjeleníteni — amíg lehetséges nem
lesz, a portál OpenStreetMapen marad. Nincs mit javítanod; a választásod megmarad.

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
