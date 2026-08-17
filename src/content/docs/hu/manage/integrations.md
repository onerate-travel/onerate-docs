---
title: Integrációk
description: API-kulcsok, amelyekkel a saját rendszerei olvassák a foglalásait, és webhookok, amelyek szólnak, ha történik valami.
---

Két módja annak, hogy a saját rendszerei a OneRate-tel dolgozzanak. Tulajdonosok és adminisztrátorok.

Mindkettő a [Beállítások](/hu/manage/settings/) alatt található.

## API-kulcsok

A kulccsal a saját háttérrendszere kiolvashatja **az Ön** foglalásait a OneRate-ből, anélkül hogy
bárki belépne.

### Létrehozás

1. **Beállítások → API-kulcsok.** Adjon nevet, amely megmondja, hol lesz használva — később tudni
   akarja majd, melyiket vonja vissza.
2. **Kulcs létrehozása.**
3. **Másolja ki most a kulcsot.** Egyszer jelenik meg, többé soha.

Nincs „kulcs megjelenítése" gomb, és az ügyfélszolgálat sem tudja felolvasni. A OneRate egyirányú
ujjlenyomatot tárol, így az adatbázis másolata senkinek nem ad működő kulcsot. Ha elveszíti, hozzon
létre újat, és vonja vissza a régit.

A lista minden kulcs első karaktereit mutatja — épp elég négy kulcs megkülönböztetéséhez, és jóval
kevesebb annál, hogy bármelyiket használni lehessen.

### Használat

Küldje bearer tokenként:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — a foglalásai, tartózkodási időszakra és státuszra szűrve.
- `GET /api/v1/bookings/{id}` — egy foglalás, teljes egészében.

Ezekben a címekben sehol nincs szervezetazonosító. **A kulcs mondja meg, melyik irodáról van szó** —
és ezért nem tudja egyik iroda kulcsa sem elolvasni a másikét.

### Mit tud és mit nem tud egy kulcs

A kulcs **olvas**. Nem tud foglalni, lemondani vagy bármit módosítani, és nem éri el a beállításait,
a szállítóit vagy a csapatát.

Ez szándékos, és nem örökre szól. Az API-n keresztüli foglalás kérdést vet fel **a szállítóinál**,
nem a OneRate-nél — hogy a saját webhelyéről érkező forgalom az ő feltételeik szerint az Ön
forgalmának számít-e —, és az a válasz szállítónként és írásban születik. A saját adatai
visszaolvasása ebből semmit nem vet fel.

Az iroda **engedélyezett IP-címei**, ha beállított ilyeneket, a kulcsokra is vonatkoznak. A kulcs is
az iroda forgalma.

Minden kulcsnak saját kérési kerete van. Egy körbe futó integráció nem viszi el a másikat — ezért is
számít az elnevezés: a rosszul viselkedőt vonja vissza, nem a hozzáférését.

### Visszavonás

A **Visszavonás** azonnal leállítja a kulcsot. A listában marad, visszavontként jelölve, hogy a
történtek nyoma olvasható maradjon.

Egy visszavont és egy soha nem létezett kulcs azonos választ kap. Aki a kezében tartja, semmit nem tud
meg arról, hogy valaha valódi volt-e.

## Webhookok

A webhook az, amikor a OneRate szól a rendszerének, hogy történt valami, ahelyett hogy a rendszere
kérdezné.

### Végpont hozzáadása

1. **Beállítások → Webhook végpontok.**
2. Adja meg a **https címet**, ahová a OneRate POST-oljon.
3. Jelölje be a kívánt **eseményeket**.
4. **Végpont hozzáadása**, majd **másolja ki az aláíró kulcsot** — az API-kulcshoz hasonlóan egyszer
   jelenik meg.

Csak `https`, és semmilyen belső hálózati cím. Az aláírás bizonyítja, hogy az üzenet valódi; nem
rejti el a tartalmát, ezek az üzenetek pedig vendégneveket hordoznak.

### Az események

| Esemény | Mikor |
| --- | --- |
| `booking.confirmed` | A szállító megerősített egy foglalást |
| `booking.failed` | Egy foglalási kísérlet foglalás nélkül ért véget |
| `booking.cancelled` | Egy lemondás átment |
| `booking.manual_review` | Egy foglalás emberi döntésre vár |
| `option.expiring` | Egy opció határideje közeleg |

Pontosan azokat az eseményeket kapja, amelyeket bejelölt. Nincs „mindent" lehetőség — azon a napon,
amikor a OneRate hatodik eseményt vezet be, a fogadója olyan üzenetformát kapna, amilyet még sosem
látott.

### Annak ellenőrzése, hogy az üzenet valóban a OneRate-től jött

Minden kézbesítés két fejlécet hordoz:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

A `v1` egy HMAC-SHA256 a `<t>.<törzs>` felett, az Ön aláíró kulcsával. Számolja újra és hasonlítsa
össze. Utasítson el mindent, aminek az időbélyege távol van a mostanitól — ez akadályozza meg, hogy
egy elfogott kézbesítést később újrajátsszanak.

### Amikor a fogadója nem működik

A sikertelen kézbesítés újrapróbálkozik, és néhány kísérlet után feladja. A végpont sora mutatja az
**utolsó kézbesítést** és azt, mi érkezett vissza, így saját fogadója hibáit anélkül látja, hogy
bárkit meg kellene kérdeznie — a OneRate naplói nem olvashatók az Ön oldaláról.

**Szüneteltesse** a végpontot, amíg javítja. A szüneteltetés megőrzi a címet és a kulcsot, amellyel a
rendszere már be van állítva; a törlés mindkettőt elveszíti.

Az az üzenet, amely a szüneteltetés pillanatában már sorban állt, nem kerül kézbesítésre. Ez a
különbség a szüneteltetés és a késleltetés között.
