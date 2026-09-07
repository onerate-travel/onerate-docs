---
title: Rezervasyon iptal etmek
description: Kimin iptal edebileceği, ücret onayının size ne söylediği, tedarikçi farklı bir ücret aldığında ne olduğu ve müşterilerin neden iptal edemediği.
---

## Kim iptal edebilir

Sahipler ve yöneticiler. **Satış temsilcileri edemez** — iptal ücretleri, temsilcinin imzalamadığı
bir kontrat altındaki gerçek paradır. Müşteriler de edemez.

Satış temsilcisiyseniz ve bir rezervasyonun iptal edilmesi gerekiyorsa sahibinize veya
yöneticinize başvurun.

## İptal etmek

Rezervasyonu **Rezervasyonlar** listesinden açın — satırın tamamı bir bağlantıdır — ve oradaki
**Rezervasyonu iptal et**e basın. Listenin kendisinde bu düğme yoktur: iptal, burada geri
alamayacağınız tek işlemdir ve listede imleç zaten bir sütun boyunca ilerlemektedir. Onaylamanız
istenir ve onay size ne kadara mal olacağını söyler:

> Bu rezervasyon iptal edilsin mi? Beklenen iptal ücreti 120,00 €.

ya da tedarikçi bir rakam vermediğinde:

> Bu rezervasyon iptal edilsin mi? İptal ücreti henüz bilinmiyor — tedarikçinizin kendi koşulları
> belirler.

İkisi de OneRate'in bildiği şey hakkında dürüst ifadelerdir. İkincisi bir sistem arızası değildir;
tedarikçinin cevabının ancak iptalle birlikte geleceği anlamına gelir.

## İptalden sonra

Rezervasyon **İptal edildi**ye geçer ve gerçekte ne olduğu size söylenir:

| Mesaj | Anlamı |
| --- | --- |
| "Rezervasyon iptal edildi. İptal ücreti alınmadı." | Beklendiği gibi ücretsiz. |
| "Rezervasyon iptal edildi. Tedarikçiniz 120,00 € iptal ücreti aldı." | Tedarikçi ücret aldı. Tedarikçi faturanızda bekleyeceğiniz tutar budur. |
| "Rezervasyon iptal edildi. İptal ücreti henüz bilinmiyor…" | İptal edildi, ücret hâlâ açık. Tedarikçinizin koşulları belirler. |

Tedarikçinin döndüğü ücret rezervasyona kaydedilir ve rezervasyon anında saklanan politikayla
karşılaştırılır. **Farklıysa bu, tedarikçinize götürülecek bir konudur** — ikisinin de kaydı
rezervasyonda, maliyet bölümünde ve zaman çizelgesindedir.

## Son tarih kapanmadan önce

Ücretsiz iptalin bir son tarihi vardır ve OneRate kapanmadan önce hatırlatır — varsayılan olarak 48
saat önce, acente başına [Ayarlar](/tr/manage/settings/) sayfasından ayarlanabilir.

Bir tedarikçi son tarihi saat dilimi belirtmeden verdiğinde OneRate onu otelin saat diliminde çözer
ve **Tahmini — bu tedarikçi saat dilimi belirtmiyor, bu yüzden son tarihin düşebileceği en erken an
budur** diye işaretler. Bunu bir söz değil, son güvenli an olarak kabul edin. Tahmini bir son
tarihte değil, ondan önce iptal edin.

Çok eski rezervasyonlar bunun yerine **Doğrulanmadı** gösterebilir — OneRate bir son tarihin
tedarikçinin kendisine mi ait yoksa tahmin mi olduğunu saklamaya başlamadan önce kaydedilmiş
demektir. Güvenmeden önce tedarikçiye danışın.

## Değişiklikler

Portalda bir değişiklik akışı yoktur. Tarih, kapasite veya misafir adı değiştirmek için kendi
kontratınız üzerinden doğrudan tedarikçinize başvurun; tedarikçi bir değişiklik bildirirse buradaki
rezervasyon **Değiştirildi** gösterir.

## Müşteriler neden iptal edemiyor

Bir müşterinin rezervasyon ekranında şu yazar:

> Bu rezervasyonu iptal etmek veya değiştirmek için acentenizle iletişime geçin — tedarikçi
> kontratı onlarda ve değiştirebilecek tek taraf onlar. Doğrudan oteli aramayın: orada yapılan bir
> değişiklik bu kayda ulaşmaz.

Önemli olan ikinci cümledir. Otel resepsiyonunda anlaşılan bir değişiklik tedarikçinize ya da bu
kayda hiç ulaşmaz; rezervasyon listeniz ile müşterinizin beklentisi ayrışır — ve bunu girişte
öğrenirsiniz.

## İptal başarısız olursa

Üç ayrı şey ters gidebilir ve ekran hangisi olduğunu söyler. Aradaki fark bundan sonra ne
yapacağınızı belirler; bir şeyin kırmızıya döndüğüne değil, yazana bakın.

| Gördüğünüz | Ne oldu | Ne yapmalı |
| --- | --- | --- |
| "Rezervasyon iptal edilemedi." | İstek karşıya ulaşmadı. | Tekrar deneyin. |
| "Rezervasyon iptal edilmedi: tedarikçiniz isteği reddetti (…)." | Tedarikçinize ulaştı ve reddetti. Parantez içindeki kod onlarındır. | Aşağıdaki kodlara bakın. |
| "Tedarikçiniz yanıt vermedi; bu rezervasyonun iptal edilip edilmediğini söyleyemiyoruz." | Henüz kimse bilmiyor. Geçmiş de olabilir, geçmemiş de. | **Tekrar denemeyin.** Bekleyin. |

Dikkat edilmesi gereken üçüncüsüdür. İptal çoğu tedarikçide idempotent değildir; ikinci kez iptal
ikinci kez ücretlendirilebilir. OneRate durumu tedarikçinizle kendisi doğrular ve cevap geldiğinde
buradaki durum değişir; zaman çizelgesi bunu kaydeder.

Üçünde de ekran iptal edildiğini söylemedikçe rezervasyon iptal **edilmemiştir**.

### Ret kodları

Kod, tedarikçinize aynen aktarabilesiniz diye üretildiği hâliyle gösterilir.

| Kod | Anlamı |
| --- | --- |
| `not_cancellable_CANCELLED` | Zaten iptal edilmiş. Yapılacak bir şey yok. |
| `not_cancellable_…` (başka bir durum) | Rezervasyon iptal edilebilecek bir durumda değil — örneğin tedarikçinin hiç teyit etmediği bir konaklama. Durumuna bakın. |
| `transition_conflict_…` | Siz iptal ederken bir başkası bu rezervasyonu değiştirdi. Sayfayı yenileyin ve başka bir şey yapmadan önce durumu okuyun. |
| `AUTH` | Tedarikçiniz kimlik bilgisini reddetti. **Tedarikçiler** altında kontrol edin. |
| `VALIDATION` | Tedarikçiniz bu rezervasyonu iptal edebileceği bir kayıt olarak tanımıyor. Tedarikçi referansıyla onlara başvurun. |
| Diğer | Tedarikçinizin kendi reddi. Kodu onlara iletin. |
