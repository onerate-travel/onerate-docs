---
title: Raporlar
description: Ne sattığınız — giriş tarihine ve duruma göre filtrelenmiş, tedarikçiye, aya, kişiye, şubeye ve müşteriye göre dökülmüş, CSV olarak dışa aktarılmış.
---

**Raporlar** salt okunurdur. Kendi rezervasyonlarınızın toplamıdır. Sahiplere, yöneticilere ve satış
temsilcilerine açıktır; müşterilere değil.

## Filtreler

- **Giriş tarihi (başlangıç / bitiş)** — rezervasyonun yapıldığı tarihe değil, **konaklamaya** ait
  bir aralık. Ağustos raporu, ağustos konaklamalarının raporudur.
- **Durum** — tek bir [rezervasyon durumu](/tr/booking/statuses/) ya da hepsi.

## Tablo

Rezervasyon başına bir satır: giriş tarihi, otel, varış, misafir, **dosya numaranız**, **şube**,
rezervasyonu **alan kişi**, tedarikçi, durum, **net**, **satış**, ve rezervasyon anındaki hâliyle
**iptal koşulu**.

Üstünde: rezervasyon sayısı, **Toplam net** ve **Toplam satış** — para birimi başına bir çift. İkisi
arasındaki fark, o küme için kârınızdır.

## Dökümler

İkisi envanteriniz hakkında:

- **Tedarikçiye göre** — tedarikçi başına rezervasyon, net ve satış.
  [Tedarikçi tercihlerinizin](/tr/manage/preferences/) yanına konacak sayı budur: bir sabitlemenin ya
  da yüzde kuralının gerçekten kurduğunuz hacmi getirip getirmediğini söyler.
- **Giriş ayına göre** — aynısı, konaklama ayı başına.

Üçü kendi şekliniz hakkında:

- **Kişiye göre** — kim ne sattı. E-posta adresiyle adlandırılır; ad benzersiz değildir, iç kimlik ise
  okunmaz.
- **Şubeye göre** — hangi ofis ne sattı.
- **Müşteriye göre** — hacim hangi kurumsal müşteriden geldi.

Kimseye ait olmayan satırlar düşürülmez, **kendi segmentlerini** alır: şubeler var olmadan önce
yapılmış ya da sonradan silinmiş bir hesabın yaptığı rezervasyon yine bir rezervasyondur ve dışarıda
bırakılsaydı kişi bazlı sayılar toplamınızı tutmazdı.

Her segment **para birimi başınadır**, toplamlarla aynı sebeple: OneRate hiçbir şey çevirmez, yani iki
para biriminde çalışan bir şube iki segmenttir — aritmetik olarak doğru, hiçbir şey ifade etmeyen tek
bir sayı değil.

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
