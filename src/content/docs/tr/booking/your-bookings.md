---
title: Rezervasyonlarınız
description: Bir rezervasyonu bulmak, detay sayfasını ve zaman çizelgesini okumak, maliyet dökümü, voucher'lar ve misafir verisini silmek.
---

## Liste

**Rezervasyonlar**, acentenizin hangi tedarikçiden olursa olsun yaptığı her rezervasyonu tutar.

Filtreleyin ve bulun:

- **Durum** — tek bir durum ya da hepsi
- **Giriş tarihi (başlangıç / bitiş)** — rezervasyonun yapıldığı tarihe değil, konaklamaya ait bir
  aralık
- **Bul** — misafir adı, otel ve tedarikçi onay referansı üzerinde serbest metin

Sütunlar: otel, misafir, konaklama, tedarikçi, durum, satış fiyatı, oluşturulma. Toplam listenin
üstündedir ve uzun listeler sayfalanır.

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

Açık bir opsiyonun voucher'ı bunu yazar, böylece elinde onu tutan bir müşteri onu kesinleşmiş bir
konaklama sanamaz.

## Voucher'lar

**Voucher indir** size PDF'i verir. **Voucher'ı e-postayla gönder** onu gönderir.

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
