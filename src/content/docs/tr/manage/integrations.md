---
title: Entegrasyonlar
description: Kendi sistemlerinizin rezervasyonlarınızı okuması için API anahtarları ve bir şey olduğunda haber veren webhook'lar.
---

Kendi sistemlerinizin OneRate ile çalışmasının iki yolu. Sahipler ve yöneticiler.

İkisi de [Ayarlar](/tr/manage/settings/) içindedir.

## API anahtarları

Bir anahtar, kendi arka ofisinizin **sizin** rezervasyonlarınızı OneRate'ten okumasını sağlar; kimse
giriş yapmadan.

### Oluşturma

1. **Ayarlar → API anahtarları.** Nerede kullanılacağını söyleyen bir ad verin — hangisini iptal
   edeceğinizi sonra bilmek isteyeceksiniz.
2. **Anahtar oluştur.**
3. **Anahtarı şimdi kopyalayın.** Bir kez gösterilir, bir daha asla.

"Anahtarı göster" düğmesi yoktur ve destek de size okuyamaz. OneRate'in sakladığı şey tek yönlü bir
parmak izidir; veritabanının bir kopyası kimseye çalışan bir anahtar vermez. Kaybederseniz yenisini
oluşturup eskisini iptal edin.

Liste her anahtarın ilk karakterlerini gösterir — dört anahtarı ayırt etmeye yeter, birini
kullanmaya asla yetmez.

### Kullanma

Bearer token olarak gönderin:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — rezervasyonlarınız; giriş tarihi aralığı ve duruma göre süzülür.
- `GET /api/v1/bookings/{id}` — tek rezervasyon, tam hâliyle.

Bu adreslerin hiçbirinde kurum kimliği yoktur. **Hangi acente olduğunu anahtar söyler** — bir
acentenin anahtarının başka birininkini okuyamamasının sebebi de budur.

### Bir anahtarın yapabildiği ve yapamadığı

Anahtar **okur**. Rezervasyon yapamaz, iptal edemez, hiçbir şeyi değiştiremez; ayarlarınıza,
tedarikçilerinize ya da ekibinize erişemez.

Bu bilinçlidir ve kalıcı değildir. API üzerinden rezervasyon, OneRate'e değil **tedarikçilerinize**
sorulacak bir soru açar — kendi sitenizden gelen trafiğin onların sözleşmesinde sizin trafiğiniz
sayılıp sayılmadığı — ve o cevap tedarikçi başına ve yazılıdır. Kendi verinizi geri okumak bunların
hiçbirini açmaz.

Acentenizin **izinli IP adresleri** varsa anahtarlar için de geçerlidir. Anahtar da acentenizin
trafiğidir.

Her anahtarın kendi istek payı vardır. Döngüye giren bir entegrasyon diğerini düşürmez — anahtarlara
ad vermenin önemi de burada: erişiminizi değil, sorun çıkaranı iptal edersiniz.

### İptal

**İptal et** anahtarı anında durdurur. Listede "iptal edildi" olarak kalır, böylece ne olduğunun
kaydı okunur kalır.

İptal edilmiş bir anahtarla hiç var olmamış bir anahtar aynı cevabı alır. Elinde tutan kişi, onun
gerçek olup olmadığı hakkında hiçbir şey öğrenmez.

## Webhook'lar

Webhook, sisteminizin sormasını beklemek yerine OneRate'in ona bir şey olduğunu söylemesidir.

### Uç nokta ekleme

1. **Ayarlar → Webhook uç noktaları.**
2. OneRate'in POST edeceği **https adresini** girin.
3. İstediğiniz **olayları** işaretleyin.
4. **Uç nokta ekle**, sonra **imza sırrını kopyalayın** — anahtar gibi, bir kez gösterilir.

Yalnızca `https`, ve iç ağdaki adresler kabul edilmez. İmza mesajın gerçek olduğunu kanıtlar;
içindekini gizlemez, ve bu mesajlar misafir adı taşır.

### Olaylar

| Olay | Ne zaman |
| --- | --- |
| `booking.confirmed` | Tedarikçi rezervasyonu onayladı |
| `booking.failed` | Rezervasyon denemesi rezervasyonsuz bitti |
| `booking.cancelled` | Bir iptal gerçekleşti |
| `booking.manual_review` | Bir rezervasyon bir insanın çözmesini bekliyor |
| `option.expiring` | Bir opsiyonun süresi yaklaşıyor |

Yalnızca işaretlediğiniz olayları alırsınız. "Hepsi" seçeneği yoktur — OneRate altıncı bir olay
eklediği gün, alıcınız hiç görmediği bir mesaj şeklini almaya başlardı.

### Mesajın gerçekten OneRate'ten geldiğini doğrulama

Her gönderim iki başlık taşır:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

`v1`, imza sırrınızla `<t>.<gövde>` üzerinde hesaplanmış bir HMAC-SHA256'dır. Yeniden hesaplayıp
karşılaştırın. Zaman damgası şimdiden uzak olanı reddedin; yakalanmış bir gönderimin sonradan tekrar
oynatılmasını durduran budur.

### Alıcınız çalışmıyorken

Başarısız gönderim yeniden denenir ve birkaç denemeden sonra bırakılır. Uç noktanın satırı **son
gönderimi** ve ne döndüğünü gösterir; böylece kendi alıcınızın hata verdiğini kimseye sormadan
görürsünüz — OneRate'in logları okuyabileceğiniz bir şey değildir.

Düzeltirken uç noktayı **duraklatın**. Duraklatmak, sisteminizin zaten yapılandırdığı adresi ve sırrı
korur; silmek ikisini de kaybettirir.

Duraklattığınızda kuyrukta olan bir mesaj gönderilmez. Duraklatma ile gecikme arasındaki fark budur.
