---
title: A foglalásaid
description: Foglalás megtalálása, mit rögzít a részletező oldal, jóváhagyás, opciók, voucherek, lemondási emlékeztetők és vendégadatok törlése.
---

## A lista

A **Foglalások** minden foglalást tartalmaz, amelyet az irodád leadott, bármelyik beszállítón át.

Szűrés és keresés:

- **Állapot** — egy állapot vagy mind
- **Érkezés ettől / eddig** — dátumtartomány a tartózkodásra, nem a foglalás időpontjára
- **Keresés** — szabad szöveg a vendég nevére, a szállodára és a beszállítói visszaigazolási
  azonosítóra

Oszlopok: szálloda, vendég, tartózkodás, beszállító, állapot, eladási ár, létrehozva. Az összesítés
a lista fölött áll, a hosszú listák pedig lapozódnak.

Az a foglalás, amelynek vendégadatait töröltük, a név helyén *vendégadatok törölve* feliratot mutat.
Maga a foglalás megmarad.

:::note
Az **Ügyfélfoglalások** külön képernyő: az ügyfeleid saját felhasználói által leadott foglalások.
Ugyanazok az oszlopok, plusz az, hogy melyik ügyfélhez tartoznak, és egy erre szolgáló szűrő. Maguk
az ügyfelek csak a saját foglalásaikat látják, a saját képernyőjükön.
:::

## A részletező oldal

Nyiss meg egy foglalást, hogy lásd mindazt, amit róla rögzítettünk.

### A foglalás

Szálloda, állapot, beszállító, **visszaigazolási azonosító**, érkezés, távozás, fő vendég, eladási
ár, a **fiók**, amely felvette, és **ki** vette fel.

Ha az irodájának vannak [irodai mezői](/hu/manage/settings/#irodai-mezők), az ezen a foglaláson
rögzített értékek külön szakaszban jelennek meg. Azt mutatják, ami **akkor** rögzült: egy később
definiált mező itt üres, egy azóta kivezetett pedig továbbra is azt mutatja, amivel kódolták.

A visszaigazolási azonosító a beszállítóé — ez azonosítja náluk a foglalást, ha valaha telefonálnod
kell.

### Költségek és díjak

Ezt a szakaszt az ügyfelek nem látják.

| Sor | Mi ez |
| --- | --- |
| **A foglaláskor ajánlott ár** | A beszállító nettó ára abban a pillanatban, amikor megerősítetted. |
| **A beszállító által visszaigazolva** | Amivel a beszállító ténylegesen visszajött. |
| **Várható lemondási díj** | Mennyibe kerülne most a lemondás, a foglaláskor tárolt feltételek szerint. |
| **Eladási ár** | Mennyiért adtad el — nettó plusz a te árrésed. |

Ha az első kettő eltér, az oldal ezt közli:

> A beszállító az ajánlottól eltérő összeget igazolt vissza. Te az ajánlat alapján adtad el.

Ez valódi esemény, amire érdemes reagálni, nem kerekítési műtermék. Az árrésed azon a foglaláson nem
az, aminek gondoltad.

### Miért ez a beszállító

Ugyanaz a feljegyzés, amelyet a találati képernyő kínál, a foglalással együtt megőrizve: mely
ajánlatokat vettük figyelembe, és mi döntött. Jóval a keresési munkamenet után is elérhető marad.

### Idővonal

Minden állapot, amelyen a foglalás átment, sorrendben, időpontokkal. Ez az első hely, ahová nézni
kell, ha egy foglalás olyat tett, amire nem számítottál.

## Jóváhagyás

Az irodája plafont szabhat annak, amit egy kolléga
[egyedül](/hu/manage/team/#mit-vállalhat-egy-kolléga-egyedül) vállalhat. Az e fölötti foglalás
**várakozik**: a listában **Jóváhagyásra vár** néven jelenik meg, és a beszállítóhoz semmi nem ment
el — nincs lefoglalt szoba, nincs rögzített ár, és nincs mit lemondani, mert még semmi nem létezik.

A foglalás oldala ezt mindenkinek kimondja, aki látja. Ha Ön jóváhagyhat foglalásokat, két gombot is
kap:

- **Jóváhagyás és foglalás** — a foglalás *most* jön létre, az akkori áron. Az szokásos ellenőrzéseken
  megy át, tehát ha az ár közben elmozdult, az ármódosulás kérdését kapja, nem pedig egy csendes
  foglalást az új összegen.
- **Elutasítás** — a kérés lezárul. A megjegyzése a foglalás idővonalára kerül, ahol az a kolléga
  olvassa, aki kérte.

Amikor a foglalás elkészül, e-mailt kapnak azok, akik jóváhagyhatják: az összeg, a szálloda és hogy ki
kérte — ennyi elég a válaszhoz a portál megnyitása nélkül.

**Egy ajánlat nem vár örökké.** Ha senki nem válaszol, mielőtt az ár lejár, a foglalás magától
meghiúsul, és az idővonala azt mondja, hogy az ajánlat járt le, nem azt, hogy valaki elutasította. Az
ezután adott jóváhagyás nem támasztja fel a régi árat — a beszállítót újra megkérdezzük, és újra
válaszol.

## Opciók

Az **opció** olyan foglalás, amelyet addig tart, amíg az ügyfele dönt.

Valódi foglalás egy visszatéríthető áron, plusz egy dátum, amelyet Ön határozott meg. Egyetlen
beszállító sem kínál saját opciót, amellyel a OneRate dolgozik — amit a termék hozzátesz, az az, hogy
a határidő látható és tesznek is vele valamit, ahelyett, hogy valakinek a naptárában élne.

Az opcióban tartott foglalás egy erről szóló panelt mutat, két gombbal:

- **Megerősítés** — az opció közönséges foglalásként áll tovább. A szállodánál semmi nem változik;
  mindig is valódi volt.
- **Elengedés** — a foglalást lemondják. Ugyanazon a megerősítésen megy át, mint bármely más lemondás,
  és ugyanazt a díjat idézi, mert egy opció elengedése *foglalás lemondása*.

A határidőt az ár saját ingyenes lemondási ablaka korlátozza, egy nappal kevesebbel. Ingyenes ablak
nélküli árat egyáltalán nem lehet tartani: a „tartás” itt azt jelentené, hogy „foglald le, a
kötbért majd később fizeted”, ami foglalás — és ezt kell megmondani, nem a szót eladni.

A lejárat előtti este e-mailt kap az, aki a foglalást felvette. Hogy mi történik, ha senki nem
válaszol, az az iroda döntése a [Beállításokban](/hu/manage/settings/#az-iroda-konfigurációja):
az **emlékeztetés** tovább figyelmeztet és soha nem mond le, az **elengedés** visszaadja a szobát.
Az az iroda, amely semmit nem mondott ki, **emlékeztetést** kap, mert egy téves lemondás valódi pénz.

A nyitott opció voucherje kimondja, hogy opció, így az ügyfél, aki a kezében tartja, nem nézheti
lezárt tartózkodásnak.

## Voucherek

A **Voucher letöltése** adja a PDF-et. A **Voucher küldése e-mailben** elküldi.

A gomb helyére mondat lép, ha nincs voucher, és a mondat megmondja, miért:

| Üzenet | Miért |
| --- | --- |
| „Ez a foglalás nincs visszaigazolva, ezért nem állítottunk ki hozzá vouchert.” | Voucher csak visszaigazolt foglaláshoz létezik. |
| „Még nem tudni, eljutott-e ez a foglalás a beszállítóhoz…” | A foglalás még egyeztetés alatt van. |
| „Ez a foglalás le van mondva, így nincs hozzá elérhető voucher.” | Lemondva. |
| „A foglalás vendégadatait töröltük, és velük együtt a vouchert is.” | A voucher a vendég nevét hordozta, így a törléssel együtt ment. |

## Vendégadatok törlése

A tulajdonosok és az adminisztrátorok véglegesen törölhetik egy foglalás személyes adatait — a
vendég nevét és a hozzá tárolt beszállítói adatokat —, és a voucher is törlődik velük.

**Ez nem vonható vissza.** Maga a foglalás a nyilvántartásban marad: az állapota, a dátumai és az
összegei, így a riportjaid és az elszámolásaid érintetlenek maradnak. Csak a személy kerül ki.

Ha a megerősítő ablak megszakad, futtasd le újra. A törlés biztonságosan ismételhető, és befejezi a
munkát.

Az irodádnak van egy **vendégadat-megőrzési időszaka** is a [Beállításokban](/hu/manage/settings/),
amely után ez automatikusan megtörténik. A kézi törlés az olyan kérésre való, amely azelőtt érkezik.

## Lemondási emlékeztetők

A OneRate figyeli a visszaigazolt foglalásaid ingyenes lemondási határidejét, és szól, mielőtt egy
bezárulna. Az előidő az irodád beállítása — 48 óra, ha nem változtattad meg.

Ez az a funkció, amely megóv attól, hogy lemondási díjat fizess egy olyan tartózkodásért, amelyet a
vendég múlt héten ejtett.

## Tovább

- [Foglalás lemondása](/hu/booking/cancelling/)
- [Foglalási állapotok](/hu/booking/statuses/) — beleértve, mit tegyél egy ellenőrzés alattival
