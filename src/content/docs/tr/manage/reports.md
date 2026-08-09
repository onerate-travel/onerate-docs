---
title: Raporlar
description: Ne sattığınız — giriş tarihine ve duruma göre filtrelenmiş, tedarikçiye ve aya göre dökülmüş, CSV olarak dışa aktarılmış.
---

**Raporlar** salt okunurdur. Kendi rezervasyonlarınızın toplamıdır. Sahiplere, yöneticilere ve satış
temsilcilerine açıktır; müşterilere değil.

## Filtreler

- **Giriş tarihi (başlangıç / bitiş)** — rezervasyonun yapıldığı tarihe değil, **konaklamaya** ait
  bir aralık. Ağustos raporu, ağustos konaklamalarının raporudur.
- **Durum** — tek bir [rezervasyon durumu](/tr/booking/statuses/) ya da hepsi.

## Tablo

Rezervasyon başına bir satır: giriş, otel, destinasyon, misafir, tedarikçi, durum, **net**,
**satış**.

Üstünde: rezervasyon sayısı, **Toplam net** ve **Toplam satış**. Bu iki toplam arasındaki fark,
filtrelenen küme için kârınızdır.

## Dökümler

- **Tedarikçiye göre** — tedarikçi başına rezervasyon, net ve satış. Bu,
  [tedarikçi tercihlerinizin](/tr/manage/preferences/) yanında okunacak sayıdır: bir sabitleme ya
  da yüzde kuralının kurduğunuz hacmi gerçekten getirip getirmediğini söyler.
- **Giriş ayına göre** — aynısı, konaklama ayına göre.

## Dışa aktarım

**CSV dışa aktar**, filtrelenmiş satırları indirir. Tabloyla aynı sütunlar, böylece elektronik
tablodaki toplam ekrandakiyle örtüşür.

Başarısız olursa tekrar deneyin — kısmi bir yazma olmaz.

## Toplamların anlamını değiştiren iki not

Birine bir sayı söylemeden önce ikisini de okuyun.

### Para birimi

> 3 rezervasyon USD, GBP cinsinden fiyatlandırıldı ve yukarıdaki EUR toplamlarına DAHİL DEĞİL.
> OneRate para birimleri arasında çeviri yapmaz.

Satış para biriminiz dışındaki rezervasyonlar **toplamların dışında bırakılır** — uydurma bir kurla
çevrilmezler. Tabloda hâlâ vardırlar; yalnızca ait olmadıkları bir sayıya toplanmazlar.

Bu not her raporda çıkıyorsa satış para biriminiz muhtemelen gerçekte nasıl ticaret yaptığınızla
örtüşmüyordur. Bkz. [Fiyatlandırma](/tr/manage/pricing/).

### Kırpma

> Yalnızca ilk 1000 rezervasyon gösteriliyor ve yukarıdaki toplamlar yalnızca onları kapsıyor.
> Eksiksiz bir rapor için giriş tarihi aralığını daraltın.

Geniş bir aralık üst sınıra takılır. **Toplamlar yalnızca gösterilen satırlarındır** — daha büyük
bir rakamın kısmi tahmini değildirler. Giriş tarihi aralığını daraltıp tekrar çalıştırın; iki altı
aylık rapor doğrudur, kırpılmış bir yıllık rapor değildir.

## Burada olmayanlar

Muhasebe defteri yok, bakiye yok, yaşlandırma yok, ödeme durumu yok, faturalama yok. OneRate
rezervasyon parasına hiç dokunmaz, dolayısıyla neyin ödendiği hakkında söyleyecek bir şeyi yoktur —
yalnızca neyin satıldığı hakkında. Bkz.
[Fiyatlandırma](/tr/manage/pricing/#onerate-paranızla-ne-yapmaz).

## İşe yarayan aylık bir rutin

1. Giriş tarihi aralığını geçen aya, durumu **Onaylandı**ya ayarlayın.
2. **Toplam net** ile **Toplam satış**ı karşılaştırın — kazandığınız budur.
3. Para birimi notunu kontrol edin. Satırlar dışarıda bırakılıyorsa onları ayrıca ele alın.
4. **Tedarikçiye göre** dökümünü kontratlarınız ve hacim hedeflerinizle karşılaştırın.
5. Muhasebenizi tutan kişi için CSV'yi dışa aktarın.

Sonra ayrıca, aynı aralık için durumu **İptal edildi**ye filtreleyip o rezervasyonlardaki iptal
ücretlerini okuyun. Tedarikçinin aldığı ama sizin beklemediğiniz ücretler, erken bulunduğunda en
ucuz, fatura zamanında bulunduğunda en pahalı şeydir.
