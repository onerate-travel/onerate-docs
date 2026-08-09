---
title: Roller ve yetkiler
description: Beş rol, her birinin tam olarak neler yapabildiği ve bazı yetkilerin neden bilinçli olarak verilmediği.
---

Her hesabın bir acentede tam olarak bir rolü vardır. Rol, hangi ekranların görüneceğine ve hangi
işlemlere izin verileceğine karar verir. Varsayılan olarak hiçbir şeye izin verilmez — aşağıda
listelenmemiş bir yetki, rolünüzde yok demektir.

## Beş rol

| Rol | Kimin için |
| --- | --- |
| **Acente sahibi** | OneRate ilişkisinin sahibi olan kişi. Abonelik dahil her şey. |
| **Yönetici** | Acenteyi günlük olarak yürüten kişi. Abonelik dışında her şey. |
| **Satış temsilcisi** | Satan kişi. Arar, rezervasyon yapar ve rezervasyonları görür. |
| **Müşteri** | *Sizin* kurumsal müşterilerinizden birindeki, sizin kontratlarınız üzerinden kendi seyahatlerini rezerve eden kişi. |
| **Platform** | OneRate'in kendi personeli. Acenteleri ve tedarikçi tanımlarını sağlar — ve bilinçli olarak hiçbir acentenin rezervasyonuna dokunamaz. |

## Her rol ne yapabilir

| İşlem | Sahip | Yönetici | Temsilci | Müşteri |
| --- | :---: | :---: | :---: | :---: |
| Arama yapmak | ✅ | ✅ | ✅ | ✅ |
| Rezervasyon oluşturmak | ✅ | ✅ | ✅ | ✅ |
| Rezervasyonları görmek | ✅ | ✅ | ✅ | yalnızca kendi |
| Raporları görmek | ✅ | ✅ | ✅ | — |
| Rezervasyon iptal etmek | ✅ | ✅ | — | — |
| Manuel incelemedeki rezervasyonu sonuçlandırmak | ✅ | ✅ | — | — |
| Rezervasyondaki misafir verisini silmek | ✅ | ✅ | — | — |
| Tedarikçi kimlik bilgilerini yönetmek | ✅ | ✅ | — | — |
| Ekip üyelerini ve davetleri yönetmek | ✅ | ✅ | — | — |
| Acente ayarlarını yönetmek | ✅ | ✅ | — | — |
| Aboneliği yönetmek | ✅ | — | — | — |

## Satış temsilcisi neden iptal edemiyor

Bu insanları şaşırtıyor, o yüzden açıkça söylemeye değer: **iptal ücretleri gerçek paradır.** Bir
temsilci rezervasyon oluşturabilir, çünkü iş budur; ama bir rezervasyonu iptal etmek, acenteye
temsilcinin imzalamadığı bir kontrat altında ücrete mal olabilir. Bu yüzden iptal, sahip ve
yöneticidedir.

Aynı gerekçe iki yetkiyi daha oraya koyar:

- **Manuel incelemedeki bir rezervasyonu sonuçlandırmak**, tedarikçide bir rezervasyonun var olduğu
  ya da olmadığı yönünde kalıcı bir beyandır. Günlük bir iş değildir ve yanlış yapıldığında geri
  alınamaz.
- **Misafir verisini silmek** geri alınamaz.

Acenteniz temsilcilerin iptal edebilmesini istiyorsa bu bir ayar değil, bir ürün değişikliğidir —
OneRate'e bildirin.

## Müşteri neyi görür, neyi görmez

Müşteri rolü, kurumsal müşterilerinizin *sizin* tedarikçi kontratlarınız üzerinden kendi
seyahatlerini rezerve edebilmesi için vardır. Gördükleri bilinçli olarak dardır:

- Otelleri ve fiyatları **kârınız uygulanmış halde** görürler.
- **Tedarikçi adlarını asla görmezler** ve **net fiyatınızı asla görmezler.** Bir müşteri ne
  ödediğinizi çıkaramaz.
- **Yalnızca kendi rezervasyonlarını** görürler, acentenin rezervasyonlarını değil.
- **İptal edemezler.** Rezervasyon ekranları onlara acentenizle iletişime geçmelerini söyler ve
  doğrudan oteli aramamaları konusunda uyarır — orada yapılan bir değişiklik kayda hiç ulaşmaz.

Kurulum için bkz. [Müşteriler](/tr/manage/customers/).

## İki adımlı doğrulama

İki adımlı doğrulama acente sahipleri için (ve OneRate'in kendi platform personeli için)
**zorunludur**. Diğer her rol [Hesabım](/tr/account/security/) sayfasından gönüllü olarak
açabilir — ve açmalıdır.

## Birinin rolünü değiştirmek

Rol düzenleyici yoktur. Bir meslektaşınızın yetkilerini değiştirmek için onu ekipten çıkarın ve
istediğiniz rolle tekrar davet edin. Bkz. [Ekip](/tr/manage/team/).
