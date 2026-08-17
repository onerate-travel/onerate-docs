---
title: Sorun giderme
description: Portalın gösterdiği mesajlar, her birinin gerçekte ne anlama geldiği ve ne yapmanız gerektiği.
---

## Önce en önemlisi

:::danger
***Mutabakat*taki bir rezervasyonun sonucu bilinmiyordur, başarısız olmuş değildir.** Tedarikçi onu
almış olabilir. Aynı konaklamayı tekrar rezerve etmeyin — misafirin şimdi odaya ihtiyacı varsa
farklı bir otel ya da farklı bir fiyat rezerve edin.
[Tam açıklama](/tr/booking/statuses/#mutabakat).
:::

## Giriş

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Bu e-posta ve şifre birleşimi tanınmadı." | İkisinden biri yanlış; mesaj bilinçli olarak her iki durumda da aynıdır. | İkisini de kontrol edin. |
| "Bu doğrulama kodu kabul edilmedi." | Kodlar 30 saniyede bir değişir. | Güncel kodu girin. Israrla olmuyorsa telefonunuzda otomatik tarih ve saati açın. |
| "Çok fazla deneme." | Hız sınırlama. | Bir dakika bekleyin. |
| "Bu hesap şu anda giriş yapamıyor." | Askıya alınmış hesap ya da aktif olmayan abonelik. | Acente yöneticinize başvurun. |
| "OneRate'e ulaşamadık." | Sizin ağınız. | Bağlantınızı kontrol edin. Giriş **yapılmadı**; hiçbir şey değişmedi. |
| "Oturumunuz sona erdi." | Sekme açıkken oturumun süresi doldu. | Giriş ekranına dönersiniz ve giriş yapınca kaldığınız yere geri gelirsiniz. Bir formda yazılmış bir şey varsa portal sizi götürmez, bekler — hazır olduğunuzda **Tekrar giriş yap**a basın. |
| "Bu acentedeki erişiminiz askıya alınmış." | O acenteden biri erişiminizi kapatmış. | Tekrar giriş yapmak bir şeyi değiştirmez. Başka bir yerde çalışıyorsanız acente değiştiriciyi kullanın; değilse o acentenin sahibi ya da yöneticisine sorun. |
| "Bu acente yeniden giriş yapmanızı gerektiriyor." | Acenteniz daha kısa bir oturum ömrü belirlemiş. | Tekrar giriş yapın. Hesabınızda bir sorun yok. |
| "Bu ağdan erişime izin verilmiyor." | Acenteniz hangi IP adreslerinin bağlanabileceğini sınırlıyor. | Ofis ağından bağlanın ya da bir sahipten kendinizinkini Ayarlar'a eklemesini isteyin. |
| "Bu davet bağlantısı geçersiz veya süresi dolmuş." | Süresi dolmuş, iptal edilmiş ya da kullanılmış. | Yenisini isteyin — gönderen kişi Ekip'ten tekrar gönderebilir. |
| "Bu davet bu e-posta adresine bağlı." | Başka biri olarak giriş yapmışsınız. | Çıkış yapın, davet edilen adresle kayıt olun. |

## Arama

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Bu destinasyonu tanımıyoruz." | Öneri seçmek yerine yazdınız. | Listeden birini seçin. |
| "Her çocuğun yaşını belirtin." | Tedarikçiler çocuk yaşına göre fiyatlandırır. | Her yaşı girin. |
| "Giriş tarihi geçmişte." / "Çıkış, girişten sonra olmalı." | Geçersiz tarihler. | Düzeltin. |
| "Kısa sürede çok fazla arama." | Tedarikçi kotanızı koruyan hız sınırlama. | Biraz bekleyin. |
| "Arama formu değişti. Bu fiyatlar hâlâ yukarıdaki kriterler için…" | Sonuçlar eski kriterlere ait. | Tekrar arayın. Fiyatlar tarayıcıda asla yeniden hesaplanmaz. |
| "Kısmi sonuçlar — X yanıt vermeyi bıraktı…" | Bir tedarikçi eksik yanıtladı. | Bazı oteller eksik. Önemliyse tekrar arayın. |
| "Bu arama için otel bulunamadı." | Müsaitlik yok — **tedarikçi durum satırını kontrol edin**. | Bir tedarikçi **Başarısız** gösteriyorsa bu eksiksiz bir cevap değildir. Tekrar deneyin. |
| "Harita sağlayıcısına ulaşılamadı, bu harita OpenStreetMap üzerine çizildi." | Google Maps anahtarınıza ya da Google'a ulaşılamadı. | Genelde geçicidir. Sürerse [Ayarlar](/tr/manage/settings/#harita)'daki anahtarı kontrol edin. |

### "Müsaitlik yok diyor ama olduğunu biliyorum"

Sırayla:

1. **Tedarikçi bazlı durum satırını okuyun.** **Başarısız** ya da **Kısmi** bir tedarikçi, eksiksiz
   bir cevap almadığınız anlamına gelir.
2. **Tedarikçinin etkin olduğunu** [Tedarikçiler](/tr/manage/suppliers/) ekranından ve
   **Sağlık** durumunun **Kullanılamıyor** olmadığını kontrol edin.
3. **Destinasyonu kontrol edin.** Bir *tedarikçi yeri* yalnızca tek bir tedarikçiye ulaşır; katalog
   şehri hepsine ulaşır.
4. **Para birimi bölümünü kontrol edin.** Farklı para biriminde fiyatlanan teklifler ana listenin
   içinde değil, altındadır.
5. **Filtrelerinizi kontrol edin.** Sayaç aramanın gerçekte kaç sonuç bulduğunu söyler — *"48'den
   0'ı"* bir filtre sorunudur, arama sorunu değil.
6. **Yıldız filtresini kontrol edin.** Derecesiz oteller *herhangi bir* yıldız seçiminde dışarıda
   kalır.

## Rezervasyon

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Ayarlar'da kurumsal iletişim ekleyin" | Acentenin rezervasyon iletişimi yok. | Sahip veya yönetici [Ayarlar](/tr/manage/settings/)'da e-posta **ve** telefon ekler. |
| "Ana misafirin adını ve soyadını girin" | Ana misafir eksik. | İkisini de doldurun. |
| "Fiyat … olarak değişti." | Tedarikçi yeniden fiyatlandırdı. | Yeni fiyatı onaylayın ya da reddedin. Siz karar verirken hiçbir şey rezerve edilmez. |
| "Bu otelin şu anda bu tarihler için fiyatı yok." | Fiyat tükendi ya da bağlantı eskidi. | Tekrar arayın. |
| "Bu bağlantıda konaklamayı fiyatlandırmak için gereken bir şey eksik." | Kesilmiş ya da elle düzenlenmiş bir otel bağlantısı. | Geri dönüp tekrar arayın. |
| "Bu rezervasyon anahtarı zaten başka bir rezervasyon için kullanıldı." | Çift rezervasyon koruması çalışıyor. | Yeni bir arama başlatın. Çift rezervasyon olmadı. |
| "Kısa sürede çok fazla rezervasyon denemesi." | Hız sınırlama. | Bekleyin. Şimdi tekrar denemek de reddedilir. |
| "Rezervasyon başarısız. Lütfen tekrar deneyin." | Genel bir hata. | **Önce [Rezervasyonlar](/tr/booking/your-bookings/)'a bakıp** hiçbir şeyin oluşmadığını doğrulayın, sonra tekrar deneyin. |
| "Zorunlu bir alan eksik ya da geçersiz." | Acentenizin kendi [alanlarından](/tr/manage/settings/#acente-alanları) biri boş ya da bir değer tanımına uymuyor. | Gözden geçirme ekranında tamamlayın. Hiçbir şey rezerve edilmedi ve tedarikçiye hiçbir şey gitmedi. |
| "Bu, müşteriyi açık rezervasyon tavanının üzerine çıkarır." | Müşterinin bir [açık rezervasyon tavanı](/tr/manage/customers/#açık-rezervasyon-tavanı) var ve bu rezervasyon onu aşıyor. | Acenteyle konuşun. Bu bir kredi limiti değildir — ödemeyle değil, konaklamalar tamamlandıkça ve rezervasyonlar iptal edildikçe düşer. |

## Rezervasyonlar ve iptal

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Rezervasyon iptal edilemedi." | Tedarikçi reddetti ya da cevap vermedi. İptal **edilmedi**. | Körü körüne tekrarlamayın — iptal çoğu tedarikçide idempotent değildir. Zaman çizelgesine bakın, sonra tedarikçiyle iletişime geçin. |
| "İptal ücreti henüz bilinmiyor…" | Tedarikçi bir rakam vermedi. | Onların koşulları belirler. Bilindiğinde kaydedilir. |
| "Tedarikçi, teklif ettiğinden farklı bir tutarı onayladı." | Net, teklif ile onay arasında değişti. | O rezervasyondaki gerçek kârınız farklıdır. Tedarikçinizle görüşün. |
| "Bu rezervasyon artık incelemede değil — başkası önce sonuçlandırdı." | Bir meslektaşınız önce davrandı. | Sayfayı yenileyin. Hiçbir şeyin üzerine yazılmadı. |
| "Misafir verisi silinemedi." | Silme yarım kalmış olabilir. | Tekrar çalıştırın — tekrarlamak güvenlidir. |
| "Tahmini — bu tedarikçi saat dilimi belirtmiyor…" | Son tarih, düşebileceği en erken andır. | Son güvenli an olarak kabul edin. Son tarihte değil, ondan önce iptal edin. |
| "Doğrulanmadı — bu rezervasyon, son tarihin tedarikçiye mi ait yoksa tahmin mi olduğunu saklamaya başlamadan önce kaydedildi." | Eski bir rezervasyon. | Güvenmeden önce tedarikçiye danışın. |

## Onay

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Bu rezervasyon tek başınıza onaylayabileceğinizin üzerinde…" | Acenteniz tek başınıza taahhüt edebileceğinize bir tavan koymuş ve bu rezervasyon onu aşıyor. | Yanlış bir şey yok ve tedarikçiye hiçbir şey gönderilmedi. Onaylayabilecek kişilere e-posta gitti; rezervasyon [Rezervasyonlar](/tr/booking/your-bookings/#onay) içinde bekliyor. |
| "Bu rezervasyon onay beklemiyor." | Birisi çoktan cevaplamış ya da hiç beklemeye alınmamış. | Rezervasyonu yeniden yükleyin. Sayfası şimdi ne olduğunu gösterir. |
| "Bu rezervasyon yeniden oluşturulamıyor." | Beklemedeki rezervasyonda, yapılabilmesi için gereken bir şey eksik. | Yeni bir arama başlatın. Hiçbir şey rezerve edilmedi. |
| "Teklifin süresi doldu" diyerek başarısız olan beklemedeki bir rezervasyon | Fiyatın süresi dolmadan kimse cevaplamamış. | Yeniden arayın. Bu noktadan sonra onaylamak eski fiyatı geri getirmez. |

## Opsiyonlar

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "Bu rezervasyon açık bir opsiyon değil." | Birisi zaten yanıtlamış ya da hiç opsiyon olmamış. | Rezervasyonu yeniden yükleyin. Panel şimdi ne olduğunu gösterir. |
| İadeli bir rezervasyonda opsiyon paneli yok | Opsiyon tarihi olmadan rezerve edilmiş. | Opsiyon rezervasyon yapılırken belirlenir; sonradan eklenemez. |

## Entegrasyonlar

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| `/api/v1/…`'den `401` | Anahtar yanlış ya da iptal edilmiş. | İkisi bilinçli olarak aynı yanıtı verir. Ayarlar'da yeni bir anahtar oluşturun. |
| `/api/v1/…`'den `429` | O anahtarın istek kotası tükenmiş. | `retry-after` saniye kadar bekleyin. Her anahtarın kendi kotası vardır, diğer entegrasyon etkilenmez. |
| "Bu adres reddedildi: yalnızca https ve iç adresler olmaz." | Düz http'ye ya da özel bir ağa işaret eden bir webhook uç noktası. | Herkese açık bir `https` adresi kullanın. |
| **Son teslimat**ında hata gösteren bir webhook uç noktası | Alıcınız reddetti ya da yanıt vermedi. | Alıcıyı düzeltin; bu arada tekrar denemeleri durdurmak isterseniz **Duraklat** ve **Devam ettir**i kullanın. |

## Tedarikçiler ve ayarlar

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "…anahtar reddedildi" | Yanlış, süresi dolmuş ya da yanlış **ortam**. | Sandbox mı canlı mı kontrol edin, sonra anahtarı değiştirin. |
| "…hız sınırı uyguluyor" / "zamanında cevap vermedi" / "ulaşılamadı" | **Anahtar pekâlâ sağlam olabilir.** | Bekleyip tekrar test edin. Tedarikçi kesintisi yüzünden çalışan bir anahtarı değiştirmeyin. |
| "Yeni anahtar kabul edilmedi; eskisi hâlâ kullanımda." | Değiştirme başarısız oldu. | Hiçbir şey bozulmadı. Yeni anahtarı kontrol edip tekrar deneyin. |
| Sağlık: **Kullanılamıyor** | OneRate tekrarlanan hatalardan sonra çağrıları duraklattı. | Kendiliğinden temizlenir. Her aramanın zaman aşımı beklemesini önler. |
| "Ayarlanmadı — bir tedarikçinin etkinleştirilebilmesi için gerekli" | Yalnızca acentenizin bilebileceği bir değer eksik. | Mesajın işaret ettiği yerde ayarlayın. OneRate onu uydurmaz. |
| "saklanan bir ayar bilinmiyor veya geçersiz" | Yapılandırmanız okunamıyor ve **hiçbir varsayılan yerine konmadı**. | OneRate desteğiyle iletişime geçin. |
| "E-posta ve telefon birlikte doldurulmalı veya birlikte temizlenmeli." | Yarım bir iletişim bilgisi, iletişim bilgisi değildir. | İkisini de doldurun ya da ikisini de temizleyin. |
| "Google bu anahtarı reddetti" | Anahtar yanlış ya da **Map Tiles API** etkin değil. | Google Cloud konsolundan düzeltip tekrar girin. |

## Raporlar

| Mesaj | Anlamı | Ne yapmalı |
| --- | --- | --- |
| "X rezervasyon … cinsinden ve … toplamlarına DAHİL DEĞİL" | Diğer para birimindeki rezervasyonlar çevrilmek yerine dışarıda bırakılır. | Ayrıca ele alın. Her raporda çıkıyorsa [satış para biriminizi](/tr/manage/pricing/) gözden geçirin. |
| "Yalnızca ilk N rezervasyon gösteriliyor ve toplamlar yalnızca onları kapsıyor." | Aralık kırpıldı. **Toplamlar yalnızca gösterilen satırlarındır.** | Giriş tarihi aralığını daraltıp tekrar çalıştırın. |

## Hâlâ takıldıysanız

- Tanımadığınız bir terim → [Sözlük](/tr/reference/glossary/)
- Rolünüzün yapamadığı bir şey → [Roller ve yetkiler](/tr/start/roles/)
- Diğer her şey → acente sahibiniz veya yöneticiniz, sonra OneRate:
  [hello@onerate.travel](mailto:hello@onerate.travel).

Yazarken **rezervasyonun onay referansını** ya da aramanın **otel ve tarihlerini** ekleyin. Baktığınız
kaydın aynısını başkasının bulmasını sağlayan şeyler bunlardır.
