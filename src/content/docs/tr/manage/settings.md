---
title: Ayarlar
description: Kurumsal rezervasyon iletişimi, kendi kimliğiniz ve markalamanız, acente alanları, güvenlik duruşları, abonelik durumu, acente yapılandırması ve harita sağlayıcısı.
---

Sahipler ve yöneticiler. Bu ekrandan kaydedilmemiş değişikliklerle ayrılmak önce sorar.

## Kurumsal rezervasyon iletişimi

**Her şeyden önce yapılacak ayar budur.** İki alan da zorunludur:

- **Kurumsal rezervasyon iletişim e-postası**
- **Kurumsal rezervasyon iletişim telefonu** — uluslararası biçimde, örn. `+902121112233`

Tedarikçiler rezervasyonu yapan taraf için bir iletişim bilgisi ister. İkisi de mevcut olana kadar
müşterileriniz dahil her kullanıcı için **her rezervasyon reddedilir**. Ekran eksik olduklarında
uyarır:

> Kurumsal iletişim eklenene kadar rezervasyonlar reddedilir — hem e-posta hem telefon gereklidir.

İkisi birlikte doldurulmalı ya da birlikte temizlenmelidir. Birini diğeri olmadan kaydedemezsiniz,
çünkü yarım bir iletişim bilgisi iletişim bilgisi değildir.

## Acente kimliği

- **Acente adı**
- **Bu adresteki markalama** — ya OneRate varsayılanı ya da kendi white-label markanız

İkisi de OneRate tarafından sağlanır, burada düzenlenemez. Değiştirmek için OneRate desteğiyle
iletişime geçin. Ekran, kaydedilmeyecek bir alan göstermek yerine bunu söyler.

## Kendi kimliğiniz, kendi belgelerinizde

Bu bölümdeki her şey sizindir ve müşterilerinizin elinde kalan evraka basılır.

### Acente kimliği

- **Ticari unvan** — şirketinizin tescilli adı, ticari adınızdan farklıysa
- **Adres**
- **Vergi numarası** — Türkiye'de VKN, başka ülkelerde CUI, NIP ya da partita IVA. Yazdırılır,
  hesaplamada kullanılmaz; bu yüzden hepsi kabul edilir
- **Acente belge no** — Türkiye'de TÜRSAB belge numarası

Boş bıraktığınız alan voucher'da **hiç satır olarak görünmez**, boş bir satır olarak değil. Boş bir
"Vergi no:" satırı *yok* demektir; bu *belirtilmemiş*ten farklı bir iddiadır ve yanlış olanıdır.

Bunlar müşterilerinize de iner: kurumsal müşterinizin yaptığı bir rezervasyon **sizin** belge
numaranızı taşır, çünkü o belgede lisanslı taraf sizin acentenizdir.

### Acente logosu

**PNG veya JPEG, en fazla 256 KB.** Voucher'larınızda ve kendi web adresinizdeki giriş ekranında
görünür.

Yalnızca bu iki biçim, çünkü bir voucher'ın taşıyabildiği ikisi bunlar. Portalda görünüp belgeden
sessizce kaybolan bir biçim, reddedilmekten kötüdür — kimse bir müşteri sorana kadar fark etmez.

Değiştirmek için başkasını yükleyin; **Logoyu kaldır** OneRate'in markasına döner.

### Marka rengi

Tek renk, `#0e6b5c` gibi bir hex değeri. Üzerine gelme ve vurgu için kullanılan koyu ve açık tonlar
bundan türetilir, seçilecek başka bir şey yoktur.

**Okunamayan** bir renk reddedilir ve mesaj bunu söyler:

> Bu renk okunaklı değil: üzerindeki beyaz yazı ve açık zeminde en az 4.5:1 kontrast gerekir.

Bu titizlik değil. Aynı renk hem üzerinde beyaz yazı olan bir düğmeyi hem de açık zemindeki vurgulu
kelimeleri boyar — kurumsal bir sarı ikinci testi geçer, birincisini geçemez, ve sonuç kendi
personelinizin düğmelerini okuyamadığı bir portaldır.

### Web adresi

Acentenizin kendi giriş adresi: `adiniz.onerate.travel`.

Küçük harf, rakam ve tire; 3–40 karakter. Bazı adlar OneRate'in kendisine aittir ve reddedilir;
başka bir acentenin kullandığı ad da öyle — mesaj hangisi olduğunu söyler.

:::caution
Değiştirmek **eski adresi anında çalışmaz hale getirir**; bastırdığınız ya da e-postayla
gönderdiğiniz her şey dahil. Müşterilerinize değiştirdikten sonra değil, önce haber verin.
:::

## Acente alanları

Rezervasyonda kendi alanlarınız: **masraf merkezi**, **proje kodu**, **PO numarası** — muhasebenizin
bir konaklamayı neyle eşleştirmesi gerekiyorsa.

Her alanın şunları vardır:

- bir **anahtar**: değerin saklandığı ve rapor kolonunun bağlandığı şey. Sonradan değiştirilemez,
  çünkü kayıtlı her değer onun altında durur
- bir **etiket**: acentenizin rezervasyon formunda okuduğu şey — ve bunu *değiştirebilirsiniz*
- bir **tip**: metin, sabit liste ya da tarih
- **zorunlu** olup olmadığı

**Zorunlu** bir alan rezervasyonu doğrudan reddeder, tedarikçi çağrılmadan önce. Amacı da budur:
kodsuz bir konaklama, iki hafta sonra birinin peşine düşeceği bir konaklamadır ve o zamana kadar
acente kırk rezervasyondan hangisi olduğunu unutmuştur.

Alanlarınız rezervasyon inceleme ekranında, rezervasyonun kendi sayfasında ve **rapor ihracatında
kolon olarak** görünür — tanımladığınız her alan için bir kolon, içinde bir şey kayıtlı olsun ya da
olmasın; böylece aynı dönemin iki ihracatı aynı şekle sahip olur.

Kurumsal müşterileriniz de kendi alanlarını tanımlayabilir; sizinkiler onların rezervasyonlarına da
uygulanır ve zorunlu yaptığınız bir alan onlar için de zorunlu kalır. Bkz.
[Müşteriler](/tr/manage/customers/).

## Güvenlik duruşları

Üç ayar, ve her biri OneRate'in zaten istediğini yalnızca **sıkılaştırabilir**.

- **İki adımlı doğrulama kimlerde zorunlu** — sahipler (OneRate'in tabanı), yöneticileriniz ya da
  giriş yapan herkes. Tabanın altına inemezsiniz.
- **Oturum ömrü (saat)** — bir oturumun yeniden giriş gerektirmeden ne kadar çalışabileceği.
  1 saat ile 14 gün arası.
- **İzinli IP adresleri** — IPv4 adresleri ve CIDR aralıkları, virgülle ayrılmış. Başka her yerden
  gelen istek reddedilir, **kendi personeliniz dahil**.

IPv6 kabul edilip yok sayılmak yerine reddedilir: internetin yarısıyla sessizce eşleşmeyen bir
liste, sizi sahip olmadığınız bir kontrole sahip sanmanıza bırakırdı.

Bunlar API anahtarlarınız için de geçerlidir — anahtar da acentenizin trafiğidir. Bkz.
[Entegrasyonlar](/tr/manage/integrations/).

## Abonelik

Abonelik durumunuz: **Aktif**, **Deneme**, **Ödeme gecikti** ya da **İptal edildi**. Yalnızca
sahipler.

Görünmüyorsa portal bunu açıkça söyler ve tahmin yürütmek yerine sizi OneRate'e yönlendirir.

Abonelik durumu **giriş yapmayı** kısıtlar, devam eden bir rezervasyonu asla. Abonelik sona
erdiğinde yürüyen bir rezervasyon yarıda bırakılmaz.

## Satış para birimi

Acentenizin sattığı para birimi — üç harfli ISO-4217 kodu: `EUR`, `TRY`, `USD`.

Bunu değiştirmek yalnızca fiyatların nasıl gösterildiğini değil, acentenizin neyle sattığını
değiştirir ve **hiçbir şey çevrilmez**. Değiştirmeden önce
[Fiyatlandırma ve kâr](/tr/manage/pricing/) sayfasını okuyun.

## Harita

Arama sonuçları harita üzerinde çizilebilir. Varsayılan olarak bu **OpenStreetMap**'tir; size
hiçbir maliyeti yoktur ve yapılandırma gerektirmez.

Acentenizin kendi **Google Maps API anahtarı** varsa Google haritasını kullanabilirsiniz. Karolar
kendi Google hesabınıza, kendi kontratınız üzerinden faturalandırılır — OneRate kendi bir sınır
uygulamaz, bu yüzden anahtar üzerinde Google Cloud konsolundan kota ve bütçe uyarıları tanımlayın.

Kullanmak için:

1. Anahtarı girin. Saklanmadan önce Google'a karşı doğrulanır, beklerken şifrelenir ve tarayıcınıza
   asla gönderilmez.
2. Google reddederse kaydedilmez — o anahtar için **Map Tiles API**'nin etkin olduğunu kontrol edin.
3. **OpenStreetMap** ile **Google Maps** arasında istediğiniz zaman geçiş yapın; tamamen dönmek için
   **Anahtarı kaldır**ı kullanın.

Google daha önce çalışan bir anahtarı sonradan reddederse portal boş bir harita göstermek yerine
OpenStreetMap'e döner ve bunu size söyler.

## Acente yapılandırması

Acenteniz için çözülmüş değerlerin listesi. Her biri mevcut değerinin nereden geldiğini gösterir:

| Kaynak | Anlamı |
| --- | --- |
| **Acentenizin ayarı** | Siz belirlediniz. |
| **{org}'dan devralındı** | Üst acentenizden geliyor. |
| **OneRate platform varsayılanı** | Siz kendinizinkini belirleyene kadar OneRate'in değeri. |
| **Ayarlanmadı — OneRate'in bunun için bir değeri yok** | Bu değer üzerinde hiçbir şey çalışmıyor. |
| **Ayarlanmadı — {yetenek} için gerekli** | Siz ayarlayana kadar bir şey engelli. Mesaj neyin engellendiğini söyler. |

Çözüm kuralı: **kendi ayarınız kazanır, sonra üst acentenizinki, sonra OneRate'in varsayılanı.**
Kendi geçersiz kılmanızı temizlemek, OneRate'in değerine değil, üst acentenizin değerine geri döner.

Burada göreceğiniz değerler arasında portalın varsayılan dili, yolcu destek e-postası, kurumsal
iletişim, tedarikçi istek kotaları, arama süre bütçesi, iptal hatırlatma süresi, davet geçerlilik
süresi, fiyat önbelleği ömrü, misafir verisi saklama süresi, varsayılan kâr ve satış para birimi
vardır.

Hepsi burada düzenlenebilir değildir. Ayarlar, onları kullanan özellikler devreye girdikçe
düzenlenebilir hale gelir; ekran ölü alanlar göstermek yerine hangisinin hangisi olduğunu söyler.

:::caution
*"saklanan bir ayar bilinmiyor veya geçersiz"* görürseniz OneRate desteğiyle iletişime geçin.
**Hiçbir varsayılan yerine konmamıştır** — portal okuyamadığı bir değeri tahmin etmeyi reddeder,
kimsenin seçmediği bir sayı üzerinde çalışmaktansa.
:::

### Bilmeye değer iki tanesi

- **Misafir verisi saklama (gün)** — misafir adlarının ve tedarikçi kayıtlarının bir rezervasyonda,
  otomatik olarak silinmeden önce ne kadar tutulacağı. Silme kişiyi kaldırır; rezervasyonun durumu,
  tarihleri ve tutarları raporlarınız için kalır. Tek bir rezervasyonu elle de silebilirsiniz — bkz.
  [Rezervasyonlarınız](/tr/booking/your-bookings/#misafir-verisini-silmek).
- **İptal hatırlatma süresi (saat)** — kapanan bir ücretsiz iptal penceresinden ne kadar önce
  uyarılacağınız. Değiştirmediyseniz 48 saat.

## Yalnızca acentenizin bilebileceği değerler

Bazı ayarların OneRate varsayılanı **yoktur** ve hiç olmayacaktır — tedarikçi kontratınızın istek
kotası, satış para biriminiz, rezervasyon iletişiminiz.

OneRate bunları uydurmaz, uydurulmuş bir değer ne kadar temkinli görünürse görünsün; çünkü yanlış
bir iletişim bilgisi dikkatli bir iletişim bilgisi değil, yanlış bir iletişim bilgisidir. Böyle bir
değer eksikse, ona ihtiyaç duyan yetenek kapalı kalır ve portal hem değeri hem de nerede
ayarlanacağını söyler. Bir tedarikçinin, kotası tanımlanmadan etkinleştirilememesinin sebebi budur.
