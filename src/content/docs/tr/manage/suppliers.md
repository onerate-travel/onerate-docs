---
title: Tedarikçiler
description: Kendi tedarikçi kontratlarınızı bağlamak, anahtarları test etmek ve değiştirmek, etkinleştirme ve devre dışı bırakma, sağlık durumu ve fiyat önbelleği.
---

OneRate kimsenin envanterini yeniden satmaz. Zaten sahip olduğunuz kontratları siz getirirsiniz ve
OneRate onları sizin adınıza arar. Kimlik bilgileriniz bu ekranda yaşar.

Yalnızca sahipler ve yöneticiler.

## Tedarikçi eklemek

1. **Tedarikçiler → Tedarikçi ekle.**
2. Listeden tedarikçiyi seçin.
3. **Ortamı** seçin — **Sandbox** ya da **Canlı**. Bu, anahtarın ait olduğu, tedarikçinin kendi
   ortamıdır ve bir sandbox anahtarı canlıda kullanılamaz. Bunu yanlış yapmak en sık görülen kurulum
   hatasıdır.
4. Tedarikçinizin size verdiği kimlik bilgilerini girin.
5. İsterseniz bir **etiket** verin; aynı tedarikçiyle iki kontratınız varsa işe yarar.
6. **Tedarikçi ekle.**

Kimlik bilgileri saklanmadan önce şifrelenir, yalnızca o tedarikçiye istek yapıldığı anda çözülür ve
tarayıcınıza asla geri gönderilmez. Saklanan bir anahtarı portaldan siz bile geri okuyamazsınız —
kaybederseniz tedarikçiden yenisini alıp buradan değiştirin.

## Anahtarı test etmek

**Test**, saklanan kimlik bilgileriyle tedarikçiye gerçek bir çağrı yapar.

| Sonuç | Anlamı |
| --- | --- |
| "…saklanan kimlik bilgilerini kabul etti." | Anahtar çalışıyor. |
| "…anahtar reddedildi" | Anahtar yanlış, süresi dolmuş ya da diğer ortama ait. Değiştirin. |
| "…tedarikçi bize hız sınırı uyguluyor" | Anahtar **pekâlâ sağlam olabilir**. Bekleyip tekrar test edin. |
| "…tedarikçi zamanında cevap vermedi" | Anahtar sağlam olabilir. Tedarikçi yavaş ya da kapalı. |
| "…tedarikçiye ulaşılamadı" | Anahtar sağlam olabilir. Ağ ya da tedarikçi kesintisi. |

Yalnızca ilk hata anahtarınızla ilgilidir. Geri kalanı tedarikçi hakkında ifadelerdir ve bu ayrımı
yapan dil bilinçlidir — tedarikçi kısa süre kapalı diye çalışan bir anahtarı değiştirmek işleri
kötüleştirir.

## Anahtarı değiştirmek

**Anahtarı değiştir**, yeni bir kimlik bilgisi alıp yerine koyar. Yeni anahtar kabul edilmezse
**eskisi kullanımda kalır** — hatalı bir yapıştırmayla çalışan bir bağlantıyı bozamazsınız.

Bunu tedarikçinin takvimine göre yapın; bir anahtarın sızmış olabileceği durumlarda hemen.

## Etkinleştirmek ve devre dışı bırakmak

Yalnızca **etkin** tedarikçiler aranır.

**Devre dışı bırak**, hiçbir şeyi silmeden bir tedarikçiyi tüm aramalardan çıkarır. Bir kontrat
duraklatıldığında, bir tedarikçi kötü bir gün geçirip aramalarınızı yavaşlattığında ya da bir kimlik
bilgisi sorununu çözerken kullanın. İstediğiniz zaman tekrar etkinleştirin.

**Kaldır**, tedarikçiyi ve saklanan kimlik bilgilerini siler. Geri alınamaz — tekrar eklemek için
kimlik bilgilerine yeniden ihtiyacınız olur.

:::note
Bir tedarikçi, kullanımının bağlı olduğu acente ayarları — örneğin istek kotanız — mevcut olmadan
etkinleştirilemez. Portal eksik değeri adıyla söyler ve ayarlandığı yere bağlantı verir. Bkz.
[Ayarlar](/tr/manage/settings/).
:::

Bir tedarikçiyi **kapatmak** önce size sorar: oranları o andan itibaren hiçbir aramada görünmez ve
bunun tek işareti daha kısa bir sonuç listesidir. Geri açmak sormaz — kurtarma odur.

## Sağlık

**Sağlık** sütunu OneRate'in o tedarikçiye dair canlı görüşüdür, bir kontrat durumu değil:

| Sağlık | Anlamı |
| --- | --- |
| **Sağlıklı** | Normal. İstekler geçiyor. |
| **Toparlanıyor** | Hata veriyordu; OneRate trafiği dikkatle tekrar geçirmeye başlıyor. |
| **Kullanılamıyor** | Sürekli hata veriyor, bu yüzden OneRate her aramayı zaman aşımı beklemek yerine bir süreliğine onu aramayı bıraktı. |

**Kullanılamıyor** bir ceza değil, bir korumadır. Kapalı bir tedarikçi aksi halde çalıştırdığınız her
aramaya kendi zaman aşımını eklerdi. Tedarikçi toparlandığında kendiliğinden temizlenir.

Aynı durum arama ekranındaki tedarikçi bazlı durum satırına da yansır.

## Fiyat önbelleği

OneRate bir tedarikçinin fiyatlarını kısa süre önbellekler; böylece saniyeler sonra aynı aramayı
tekrarlamak kotanızdan bir istek daha harcamaz.

**Önbelleği durdur**, bunu tek bir tedarikçi için kapatır — her arama ona taze sorar. Bir fiyat
tutarsızlığının peşindeyseniz ve tedarikçinin tam olarak şu an ne dediğini görmeniz gerekiyorsa
kullanın. Önbelleği kapalı bir tedarikçi **Önbelleklenmiyor** olarak işaretlenir, böylece kimse
aramaların neden yavaşladığını merak etmez.

Önbelleklenen fiyatlar her zaman acentenize özeldir. Kontratlı fiyatlarınız başka bir acenteye asla
sunulmaz, başka bir acentenin fiyatları da size sunulmaz.

## Hangi tedarikçiler var

**Tedarikçi ekle** ekranındaki liste, OneRate'in şu anda adaptörü olan tedarikçilerdir.
Kontratınız listede olmayan bir tedarikçiyleyse OneRate'e bildirin — yeni bir tedarikçi eklemek
açıp kapatabileceğiniz bir ayar değil, ürün geliştirme işidir.

## Sırada

- [Tedarikçi tercihleri](/tr/manage/preferences/) — hacim taahhütleri için en ucuz önce sıralamasını geçersiz kılmak
- [Fiyatlandırma ve kâr](/tr/manage/pricing/)
