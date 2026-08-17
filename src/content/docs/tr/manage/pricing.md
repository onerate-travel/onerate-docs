---
title: Fiyatlandırma ve kâr
description: Satış para biriminiz, her fiyata uygulanan kâr, müşteri grupları için fiyat grupları, kârın nasıl aktarıldığı ve neden hiçbir şeyin çevrilmediği.
---

## Satış para birimi

Acenteniz tek bir para biriminde satar; bunu bir sahip ya da yönetici
[Ayarlar](/tr/manage/settings/) sayfasındaki **Acente fiyatlandırması** bölümünde belirler.

Her temsilci kendi para biriminde de satabilir: kullanıcı menüsündeki **Fiyatlandırmam**. Orayı boş
bırakırsanız acentenizinkini izlersiniz.

Bu **bir görüntüleme tercihi değildir.** Şunlara karar verir:

- ana sonuç listenizde hangi tekliflerin görüneceği ve
- hangilerinin ayrı **Diğer para birimi** bölümünde, yalnızca kendi aralarında sıralanacağı.

### Hiçbir şey, asla çevrilmez

Bir tedarikçinin USD verdiği fiyat USD kalır. OneRate onu uydurduğu bir kurla EUR'ya çevirmez,
çünkü o kur bankanızın vereceği kur değildir ve bir rezervasyondaki uydurma bir sayı, dürüst bir
yabancı sayıdan daha kötüdür.

Portalda göreceğiniz sonuçları:

- Farklı para birimindeki teklifler **rezerve edilebilir** ve gerçekte ne oldukları etiketlenir.
- Satış para birimindeki tekliflerle **sıralanmazlar**. İki para birimi arasında "daha ucuz",
  OneRate'in beyan edebileceği bir olgu değildir.
- [Raporlar](/tr/manage/reports/)'da **her para birimi için ayrı bir toplam** alırsınız; önce
  acentenizinki. İki para birimi toplanmaz, ama hiçbir satır da rapor dışında bırakılmaz.

İşinizin çoğu tek para birimindeyse onu satış para biriminiz yapın; bu konu nadiren gündeme gelir.
Gerçekten iki para biriminde ticaret yapıyorsanız iki ayrı sayı kümesi bekleyin, çünkü elinizdeki
şey budur.

## Kâr

Kârınız, tedarikçinin sizden aldığı tutar (**net**) ile sattığınız tutar (**satış**) arasındaki
farktır.

Acentenin kârını bir sahip ya da yönetici [Ayarlar](/tr/manage/settings/) sayfasındaki **Acente
fiyatlandırması** bölümünde yüzde olarak belirler — yüzde on iki buçuk için `12,5`.

Her temsilci kendi kârını kullanıcı menüsündeki **Fiyatlandırmam** bölümünde belirleyebilir. Orada
boş bırakılan alan acenteyi izler; girilen bir sayı, o temsilcinin kendi teklif ve rezervasyonları
için acentenin değerini geçersiz kılar.

Kâr net üzerinden **yüzdedir**. Rezervasyon başına sabit tutar OneRate'in ekleyebileceği bir şey
değil: bir para biriminde ifade edilmesi gerekirdi ve OneRate hiçbir para birimini çevirmez.

O andan itibaren portaldaki her fiyat — sonuç listesi, otel sayfası, gözden geçirme ekranı,
müşterilerinizin gördüğü — bunu içerir.

### Ayarlanmamış, net demektir

Kâr belirlenmemişse hiçbir şey eklenmez ve tedarikçinin fiyatından satıyorsunuz demektir. Alan bunu
söyler:

> Ayarlanmadı — tedarikçinin fiyatına hiçbir şey eklenmiyor. Netin üzerinde satmak için bir yüzde
> girin.

Açıkça girilmiş bir **%0**, ayarlanmamış olmaktan farklıdır. Sıfır sizin verdiğiniz bir karardır ve
öyle kabul edilir.

### Net size görünür kalır

Satış temsilcileriniz ve sahipleriniz bir rezervasyonda her zaman iki sayıyı da görür:
**Rezervasyon anında teklif edilen**, **Tedarikçinin onayladığı** ve **Satış fiyatı**. Raporlar her
ikisini de toplar.

**Müşterileriniz** yalnızca satış fiyatını görür. Tedarikçi netini asla görmezler ve hangi tedarikçi
olduğunu asla görmezler.

## Fiyat grupları

Bir alt acente ağına satıyorsanız onları tek tek değil, gruplar hâlinde fiyatlarsınız. **Grup** o
gruptur: bir ad ve bir oran.

1. **Ayarlar → Fiyat grupları.** Grup ekleyin ve ad verin — "A bayileri", "B bayileri".
2. Grubun kendi satırında **kâr oranını** yüzde olarak belirleyin.
3. Müşterileri [Müşteriler](/tr/manage/customers/) ekranından gruba koyun.

Bir grubun oranını değiştirmek gruptaki herkes için değiştirir; bütün mesele de budur: aynı şartlardaki
kırk alt acente kırk kopya değil, tek bir sayı olmalıdır — kopyalar zamanla birbirinden ayrılır.

Bir müşteri **en fazla bir gruba** aittir. İki grup, "bu müşteriye kaça satıyoruz?" sorusunu tam
sorulduğu anda belirsiz yapardı.

**İçinde müşteri varken bir grup silinemez.** Önce onları çıkarın. Müşteriler içindeyken silmek,
hepsini sessizce acentenizin varsayılan oranına düşürürdü — kimsenin istemediği, faturada fark edilen
bir fiyat değişikliği.

## Kâr nasıl aktarılır

Kâr oranları en özel seviyeden dışarı doğru çözülür: **acente kullanıcısı, sonra müşteri, sonra
müşterinin grubu, sonra acente.**

Kural şu: **değeri olan en yakın seviye kazanır.** Kendi oranı olan bir kullanıcı onunla fiyat verir;
olmayan müşterininkine, sonra müşterinin grubununkine, sonra acentenizinkine düşer. Bir override'ı
temizlemek sıfıra değil, bir üstteki seviyeye döner.

Grubun yeri bilinçlidir: grup, bir *küme* hakkında söylediğiniz şeydir — dolayısıyla tek bir müşteri
hakkında söylediğiniz her şey onu yener, o da genel varsayılanınızı yener.

## Yapmaya değer kontroller

1. **Bir arama yapıp bir oteli açın.** Karttaki ve gözden geçirme ekranındaki fiyat, netiniz artı
   kârınız olmalı. Değilse kârınız ayarlanmamış ya da uygulanmamıştır.
2. **Onaylı bir rezervasyonun maliyet bölümüne bakın.** *Tedarikçinin onayladığı*, *rezervasyon
   anında teklif edilen*den farklıysa o rezervasyondaki gerçek kârınız belirlediğiniz gibi
   değildir — portal bunu gizlemek yerine açıkça işaretler.
3. **Raporlarınızdaki para birimi notunu kontrol edin.** Rezervasyonların toplam dışında bırakıldığı
   yazıyorsa satış para biriminiz gerçekte nasıl ticaret yaptığınızla örtüşmüyor olabilir.

## OneRate paranızla ne yapmaz

Muhasebe defteri yok, cari hesap yok, bakiye yok, yaşlandırma yok, tahsilat yok, kart verisi yok.
Tedarikçiniz sizi tıpkı eskisi gibi kendi kontratınız üzerinden faturalandırır, müşteriniz de size
eskiden nasıl ödüyorsa öyle öder.

OneRate kendi sabit aylık aboneliğini tahsil eder ve başka hiçbir şeye dokunmaz. Finansal ilişkinin
tamamı budur.
