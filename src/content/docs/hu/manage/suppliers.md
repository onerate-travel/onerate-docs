---
title: Beszállítók
description: A saját beszállítói szerződéseid bekötése, kulcsok tesztelése és cseréje, engedélyezés és letiltás, működés és az árak gyorsítótárazása.
---

A OneRate senki készletét nem viszonteladja. Te hozod a szerződéseket, amelyekkel már rendelkezel, a
OneRate pedig a nevedben keres bennük. Ez a képernyő az, ahol a hozzáférési adataid élnek.

Csak tulajdonosok és adminisztrátorok.

## Beszállító hozzáadása

1. **Beszállítók → Beszállító hozzáadása.**
2. Válaszd ki a beszállítót a listából.
3. Válaszd ki a **környezetet** — **Sandbox** vagy **Éles**. Ez a beszállító saját környezete,
   amelyhez a kulcs tartozik, és egy sandbox kulcs nem használható éles környezetben. Ennek
   elrontása a leggyakoribb beállítási hiba.
4. Add meg a beszállítód által kiadott hozzáférési adatokat.
5. Adhatsz neki **címkét** is — hasznos, ha ugyanazzal a beszállítóval két szerződésed van.
6. **Beszállító hozzáadása.**

A hozzáférési adatokat titkosítjuk, mielőtt eltárolnánk, csak abban a pillanatban fejtjük vissza,
amikor kérés indul az adott beszállítóhoz, és soha nem küldjük vissza a böngésződnek. Még te sem
tudsz kiolvasni egy eltárolt kulcsot a portálból — ha elveszíted, kérj újat a beszállítótól, és
cseréld ki itt.

## Kulcs tesztelése

A **Teszt** valódi hívást indít a beszállítóhoz a tárolt hozzáférési adatokkal.

| Eredmény | Jelentés |
| --- | --- |
| „…elfogadta a tárolt hozzáférési adatokat.” | A kulcs működik. |
| „…a kulcsot elutasították” | A kulcs hibás, lejárt, vagy a másik környezethez tartozik. Cseréld ki. |
| „…a beszállító korlátozza a kéréseinket” | A kulcs **akár teljesen jó is lehet**. Várj, és teszteld újra. |
| „…a beszállító nem válaszolt időben” | A kulcs lehet jó. A beszállító lassú vagy nem elérhető. |
| „…a beszállító nem volt elérhető” | A kulcs lehet jó. Hálózati gond vagy beszállítói kiesés. |

Csak az első hiba szól a te kulcsodról. A többi a beszállítóról állít valamit, és a megfogalmazás
szándékosan ügyel a különbségre — egy működő kulcs cseréje azért, mert a beszállító rövid ideig
kiesett, csak ront a helyzeten.

## Kulcs cseréje

A **Kulcs cseréje** átveszi az új hitelesítő adatot, és lecseréli. Ha az új kulcsot nem fogadjuk el,
**a régi marad használatban** — egy rossz beillesztéssel nem tudod tönkretenni a működő kapcsolatot.

Tedd meg a beszállító ütemezése szerint, és azonnal, ha egy kulcs kiszivároghatott.

## Engedélyezés és letiltás

Csak az **engedélyezett** beszállítókat kérdezzük meg.

A **Letiltás** kiveszi a beszállítót minden keresésből anélkül, hogy bármit törölne. Használd, ha
egy szerződés szünetel, ha egy beszállítónak rossz napja van és lassítja a kereséseidet, vagy amíg
egy hozzáférési problémát rendezel. Bármikor újra engedélyezheted.

Az **Eltávolítás** törli a beszállítót és a tárolt hozzáférési adatait. Ez nem visszafordítható — az
újbóli hozzáadáshoz megint szükséged lesz az adatokra.

:::note
Egy beszállítót addig nem lehet engedélyezni, amíg az irodádnak nincsenek meg azok a beállítások,
amelyektől a használata függ — például a kéréskereted. A portál megnevezi a hiányzó értéket, és
odavisz, ahol beállítható. Lásd: [Beállítások](/hu/manage/settings/).
:::

## Működés

A **Működés** oszlop a OneRate élő képe az adott beszállítóról, nem szerződéses állapot:

| Működés | Jelentés |
| --- | --- |
| **Rendben** | Normális. A kérések átmennek. |
| **Helyreáll** | Korábban hibázott; a OneRate óvatosan enged át újra forgalmat. |
| **Nem elérhető** | Következetesen hibázik, ezért a OneRate egy időre abbahagyta a hívását ahelyett, hogy minden keresésnek meg kellene várnia egy időtúllépést. |

A **Nem elérhető** védelem, nem büntetés. Egy kieső beszállító különben minden keresésedhez
hozzáadná a teljes időtúllépését. Magától feloldódik, amint a beszállító helyreáll.

Ugyanez tükröződik a keresőképernyő beszállítónkénti állapotsorában is.

## Árak gyorsítótárazása

A OneRate rövid ideig gyorsítótárazza egy beszállító árait, hogy egy keresés másodpercekkel későbbi
megismétlése ne használjon el újabb kérést a keretedből.

A **Gyorsítótárazás leállítása** ezt egy beszállítónál kikapcsolja — onnantól minden keresés frissen
kérdezi meg. Használd, ha egy árkülönbséget nyomozol, és pontosan látnod kell, mit mond a beszállító
éppen most. A kikapcsolt gyorsítótárú beszállítót **Nincs gyorsítótárazva** jelöléssel látjuk el,
hogy senki ne tűnődjön azon, miért lassultak a keresések.

A gyorsítótárazott árak mindig az irodádra korlátozódnak. A szerződött áraidat soha nem szolgáljuk
ki más irodának, és más iroda árait soha nem szolgáljuk ki neked.

## Mely beszállítók érhetők el

A **Beszállító hozzáadása** képernyő listája az, amelyekhez a OneRate-nek jelenleg van adaptere. Ha
a szerződésed olyan beszállítóval van, amely nem szerepel, szólj a OneRate-nek — egy új hozzáadása
termékfejlesztés, nem kapcsolható beállítás.

## Tovább

- [Beszállítói preferenciák](/hu/manage/preferences/) — a „legolcsóbb elöl” felülírása
  volumenvállalásokhoz
- [Árazás és árrés](/hu/manage/pricing/)
