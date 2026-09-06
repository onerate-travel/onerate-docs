---
title: Rezervasyonlarınız
description: Bir rezervasyonu bulmak, iptalin ne tutacağını görmek ve listeden iptal etmek, detay sayfasının kaydettikleri, onay, opsiyonlar, voucher'lar ve hangi dilde kesildikleri, iptal hatırlatmaları ve misafir verisini silmek.
---

## Liste

**Rezervasyonlar**, acentenizin hangi tedarikçiden olursa olsun yaptığı her rezervasyonu tutar.

Filtreleyin ve bulun:

- **Durum** — tek bir durum ya da hepsi
- **Giriş tarihi (başlangıç / bitiş)** — rezervasyonun yapıldığı tarihe değil, konaklamaya ait bir
  aralık
- **Bul** — misafir adı, otel ve tedarikçi onay referansı üzerinde serbest metin

Sütunlar: otel, misafir, konaklama, satış fiyatı, durum, iptal, tedarikçi, işlemi yapan. Toplam
listenin üstündedir ve uzun listeler sayfalanır.

**İptal**, o rezervasyonu *şu anda* bırakmanın neye mal olacağıdır — rezervasyon anında kaydedilen
şartlara göre: "Şu anda iptal ücretsiz.", bir tutar, ya da "Bu rezervasyon iade edilemez; iptalde
ücret alınır (tutarı tedarikçi bildirmedi)." Tedarikçi son tarihi saat dilimi belirtmeden veriyorsa
satıra "Saatler yaklaşık olduğundan tutar da yaklaşıktır." eklenir. Şartı kayıtlı olmayan bir rezervasyon
bunu söyler — "İptal ücreti bu rezervasyon için kayıtlı değil." — hiçbir şey yazmaz değil: sessizlik
"ödenecek bir şey yok" diye okunur ve yanılmanın pahalı yolu budur.

İptal yetkiniz varsa onaylanmış rezervasyonun satırında **Rezervasyonu iptal et** de bulunur. Önce
sorar ve soru aynı tutarı söyler; yanlış bir tıkla ücret ödemezsiniz. Danışmanlar bu butonu görmez
— [iptal yetkileri yoktur](/tr/booking/cancelling/#kim-iptal-edebilir).

Misafir verisi silinmiş bir rezervasyon, isim yerine *misafir verisi silindi* gösterir.
Rezervasyonun kendisi hâlâ oradadır.

:::note
**Müşteri Rezervasyonları** ayrı bir ekrandır: müşteri kullanıcılarınızın yaptığı rezervasyonlar.
Aynı sütunlar artı hangi müşteriye ait olduğu ve bunun için bir filtre. Müşterilerin kendileri
yalnızca kendi rezervasyonlarını, kendi ekranlarında görürler.
:::

## Detay sayfası

Bir rezervasyonu açtığınızda hakkında kaydedilen her şeyi görürsünüz.

### Rezervasyon

Otel, durum, tedarikçi, **onay referansı**, giriş, çıkış, ana misafir, satış fiyatı, rezervasyonu
alan **şube** ve **kişi**.

Acentenizin [acente alanları](/tr/manage/settings/#acente-alanları) varsa, bu rezervasyona kaydedilen
değerler kendi bölümlerinde görünür. Bunlar **o andaki** hâlleriyle kayıtlıdır: sonradan tanımlanmış
bir alan burada boştur, kaldırılmış bir alan ise kodlandığı değeri göstermeye devam eder.

Onay referansı tedarikçinin kendi referansıdır — onları aramanız gerekirse rezervasyonu onlar için
tanımlayan şeydir.

### Maliyet ve ücretler

Bu bölüm müşterilere gösterilmez.

| Satır | Nedir |
| --- | --- |
| **Rezervasyon anında teklif edilen** | Onayladığınız andaki tedarikçi net fiyatı. |
| **Tedarikçinin onayladığı** | Tedarikçinin gerçekten döndüğü tutar. |
| **Beklenen iptal ücreti** | Rezervasyon anında saklanan politikaya göre şimdi iptal etmenin maliyeti. |
| **Satış fiyatı** | Sattığınız tutar — net artı kârınız. |

İlk ikisi farklıysa sayfa bunu söyler:

> Tedarikçi, teklif ettiğinden farklı bir tutarı onayladı. Siz teklife karşı sattınız.

Bu bir yuvarlama artefaktı değil, üzerine gidilecek gerçek bir olaydır. O rezervasyondaki kârınız
sandığınız kadar değildir.

### Neden bu tedarikçi

Sonuç ekranının sunduğu kaydın aynısı, rezervasyonla birlikte saklanır: hangi teklifler
değerlendirildi ve kararı ne belirledi. Arama oturumu çoktan bittikten sonra da erişilebilir kalır.

### Zaman çizelgesi

Rezervasyonun geçtiği her durum, sırayla ve saatleriyle. Bir rezervasyon beklemediğiniz bir şey
yaptığında bakılacak ilk yer burasıdır.

## Onay

Acenteniz her meslektaşın [tek başına](/tr/manage/team/#her-meslektaş-tek-başına-neyi-taahhüt-edebilir)
taahhüt edebileceğine bir tavan koyabilir. Bu tavanın üzerindeki bir rezervasyon **beklemeye alınır**:
listenizde **Onay bekliyor** olarak görünür ve tedarikçiye hiçbir şey gönderilmemiştir — oda
tutulmamış, fiyat sabitlenmemiş, iptal edilecek bir şey de yoktur, çünkü henüz hiçbir şey yoktur.

Rezervasyonun sayfası bunu görebilen herkese söyler. Rezervasyonları onaylayabiliyorsanız iki düğme
de taşır:

- **Onayla ve rezerve et** — rezervasyon *şimdi*, o andaki fiyatla yapılır. Olağan kontrollerden
  geçer; yani beklerken fiyat değiştiyse yeni tutarla sessizce rezerve edilmek yerine fiyat değişikliği
  sorusunu alırsınız.
- **Reddet** — talep sona erer. Notunuz rezervasyonun zaman çizelgesine düşer; isteyen meslektaşınız
  orada okur.

Rezervasyon yapıldığında onay yetkisi olanlara e-posta gider: tutar, otel ve kimin istediği — portalı
açmadan cevap vermeye yetecek kadarı.

**Bir teklif sonsuza kadar beklemez.** Fiyatın süresi dolmadan kimse cevap vermezse rezervasyon
kendiliğinden başarısız olur ve zaman çizelgesi birinin reddettiğini değil, teklifin süresinin
dolduğunu yazar. Ondan sonra onaylamak eski fiyatı geri getirmez — tedarikçiye yeniden sorulur ve o
yeniden cevap verir.

## Opsiyonlar

**Opsiyon**, müşteriniz karar verirken tuttuğunuz bir rezervasyondur.

İadeli bir fiyat üzerinde gerçek bir rezervasyondur, artı sizin karar verdiğiniz bir tarih. OneRate'in
çalıştığı hiçbir tedarikçi kendi opsiyonunu sunmaz — ürünün eklediği şey, sürenin birinin ajandasında
yaşamak yerine görünür olması ve üzerine hareket edilmesidir.

Opsiyonda tutulan bir rezervasyon bunu söyleyen bir panel gösterir, iki düğmeyle:

- **Kesinleştir** — opsiyon sıradan bir rezervasyon olarak kalır. Otelde hiçbir şey değişmez; zaten
  gerçekti.
- **Opsiyondan vazgeç** — rezervasyon iptal edilir. Diğer her iptalle aynı onaydan geçer ve aynı
  ücreti gösterir, çünkü bir opsiyondan vazgeçmek *rezervasyonu iptal etmektir*.

Süre, fiyatın kendi ücretsiz iptal penceresiyle sınırlıdır, bir gün eksiğiyle. Ücretsiz penceresi
olmayan bir fiyat hiç tutulamaz: "tutmak" burada "rezerve et ve cezayı sonra öde" demek olurdu, ki bu
bir rezervasyondur — ve size bu kelimenin satılması yerine bunun söylenmesi gerekir.

Süre dolmadan bir önceki gece, rezervasyonu alan kişiye bir e-posta gider. Kimse yanıt vermezse ne
olacağı acentenizin seçimidir, [Ayarlar](/tr/manage/settings/#acente-yapılandırması) içinde:
**hatırlat** uyarmaya devam eder ve asla iptal etmez, **bırak** odayı geri verir. Hiçbir şey
belirtmemiş bir acente **hatırlat**ı alır, çünkü yanlış bir iptal gerçek paradır.

Otomatik bırakma tedarikçiye ulaşamazsa — iptali reddederse ya da yanıt vermezse — rezervasyon bunu
söyler: opsiyon bırakılmış görünür **ve** odanın hâlâ tutulduğu uyarısını taşır; rezervasyonun kendi
durumu onaylı kalır, çünkü öyledir. Rezervasyon sayfasından kendiniz iptal edin; önce geri alınması
gereken başka bir şey yok.

Açık bir opsiyonun voucher'ı bunu yazar, böylece elinde onu tutan bir müşteri onu kesinleşmiş bir
konaklama sanamaz.

## Voucher'lar

**Voucher indir** size PDF'i verir. **Voucher'ı e-postayla gönder** onu gönderir.

### Voucher'da ne yazar

Voucher, misafirinizin otel resepsiyonuna verdiği belgedir; bu yüzden konaklamayı satıldığı hâliyle
yazar: tedarikçi onay referansı, konaklayan herkes, otelin kendi adresi ve telefonu, oda, pansiyon,
tarihler, rezervasyon anındaki iptal koşulları, otelde ödenecek tutarlar ve acentenizin kimliğiyle
logosu.

Bir satır yalnızca tedarikçi onu söylediyse görünür. Telefon numarası göndermeyen bir otel, boş bir
satır yerine telefon satırı olmayan bir voucher üretir — boş bir "otelde ödenecek" satırı "ödenecek
bir şey yok" diye okunur ve yanılmanın pahalı olan yolu budur. Otelde ödenecek tutarlar para birimi
başına yazılır, asla toplanmaz: iki para biriminin toplamı kimsenin ödeyemeyeceği bir sayıdır.

Tedarikçi otelin konumunu verdiyse, üstteki panelde referansın yanında küçük bir harita durur —
taksiyle gelen bir misafirin gösterebileceği bir şey.

Konaklamanın altında otelin kendi **kuralları** — giriş ve çıkış saatleri, depozito, evcil hayvan —
ve **tanıtım metni** gelir; tedarikçinin bildirdiği hâliyle. İkisi de voucher kesilirken çekilir,
yani otelin bugünkü koşullarıdır, rezervasyon günündeki hâli değil. Voucher sığdığı yerde tek
sayfada kalır; söyleyecek çok şeyi olan bir otel onu ikinci sayfaya taşır ve bunu önlemek için
hiçbir şey kısaltılmaz — bir kâğıt tasarrufu için yarıdan kesilmiş bir otel kuralı, o kâğıttan
kötüdür.

OneRate otelin konumunu ve tedarikçinin kendi otel referansını kaydetmeye başlamadan önce yapılmış
bir rezervasyonda ne harita ne de bu bölümler bulunur. İkisi de yalnızca rezervasyon anında
bilinebilir; sonradan hiçbir şey onları geri getiremez.

### Hangi dilde

**Voucher dili** indirme bağlantısının yanındadır ve portalı okuduğunuz dille başlar. Değiştirin,
belgenin tamamı değişir: OneRate'in kendi kelimeleri ve otelinkiler birlikte — böylece Bulgarca
teklif almış bir müşteriye ardından İngilizce voucher verilmez.

Kendi dilinizi değil, misafirin dilini seçin. Aynı acenta aynı sabah farklı dillerdeki misafirlere
voucher keser; bu yüzden bu seçim ayarlarda değil, rezervasyonun üzerindedir.

Voucher yoksa düğmenin yerini bir cümle alır ve o cümle nedenini söyler:

| Mesaj | Neden |
| --- | --- |
| "Bu rezervasyon onaylanmadı, bu yüzden voucher düzenlenmedi." | Voucher yalnızca onaylı rezervasyonlar için vardır. |
| "Bu rezervasyonun tedarikçiye ulaşıp ulaşmadığı henüz bilinmiyor…" | Rezervasyon hâlâ mutabakatta. |
| "Bu rezervasyon iptal edildi ve voucher yok." | İptal edilmiş. |
| "Bu rezervasyonun misafir verisi silindi, voucher da onunla birlikte silindi." | Voucher misafirin adını taşıyordu, o yüzden silmeyle birlikte gitti. |

## Misafir verisini silmek

Sahipler ve yöneticiler bir rezervasyondaki kişisel veriyi — misafirin adı ve buna karşı saklanan
tedarikçi kayıtları — kalıcı olarak silebilir; voucher da onlarla birlikte silinir.

**Bu geri alınamaz.** Rezervasyonun kendisi kayıtta kalır: durumu, tarihleri ve tutarları, böylece
raporlarınız ve hesaplarınız bozulmaz. Yalnızca kişi kaldırılır.

Onay penceresi yarıda kalırsa tekrar çalıştırın. Silme işlemini tekrarlamak güvenlidir ve işi
bitirir.

Acentenizin ayrıca [Ayarlar](/tr/manage/settings/) sayfasında bir **misafir verisi saklama süresi**
vardır; süre dolduğunda bu otomatik olarak gerçekleşir. Elle silme, süreden önce gelen bir talep
içindir.

## İptal hatırlatmaları

OneRate onaylı rezervasyonlarınızdaki ücretsiz iptal son tarihlerini izler ve biri kapanmadan önce
sizi uyarır. Kaç saat önceden uyarılacağınız acentenizin ayarıdır — değiştirmediyseniz 48 saat.

Bu, misafirin geçen hafta vazgeçtiği bir konaklama için iptal ücreti ödemenizi engelleyen
özelliktir.

## Sırada

- [Rezervasyon iptal etmek](/tr/booking/cancelling/)
- [Rezervasyon durumları](/tr/booking/statuses/) — incelemedeki bir rezervasyon için ne yapılacağı dahil
