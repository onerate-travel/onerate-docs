---
title: Roller ve yetkiler
description: Bir acentedeki ve bir kurumsal müşterinin içindeki her rol, her birinin tam olarak neler yapabildiği ve bazı yetkilerin neden bilinçli olarak verilmediği.
---

Her hesabın bir acentede tam olarak bir rolü vardır. Rol, hangi ekranların görüneceğine ve hangi
işlemlere izin verileceğine karar verir. Varsayılan olarak hiçbir şeye izin verilmez — aşağıda
listelenmemiş bir yetki, rolünüzde yok demektir.

## Acentenizin kendi rolleri

| Rol | Kimin için |
| --- | --- |
| **Acente sahibi** | OneRate ilişkisinin sahibi olan kişi. Abonelik dahil her şey. |
| **Yönetici** | Acenteyi günlük olarak yürüten kişi. Abonelik dışında her şey. |
| **Danışman** | Satan kişi. Arar, rezervasyon yapar ve rezervasyonları görür. |
| **Platform** | OneRate'in kendi personeli. Acenteleri ve tedarikçi tanımlarını sağlar — ve bilinçli olarak hiçbir acentenin rezervasyonuna dokunamaz. |

## Her rol ne yapabilir

| İşlem | Sahip | Yönetici | Danışman |
| --- | :---: | :---: | :---: |
| Arama yapmak | ✅ | ✅ | ✅ |
| Rezervasyon oluşturmak | ✅ | ✅ | ✅ |
| Rezervasyonları görmek | ✅ | ✅ | ✅ |
| Dosya numarası ve iç not yazmak | ✅ | ✅ | ✅ |
| Kendi kârını belirlemek | ✅ | ✅ | ✅ |
| Raporları görmek | ✅ | ✅ | ✅ |
| Rezervasyon iptal etmek | ✅ | ✅ | — |
| Birinin tek başına taahhüt edemediği bir rezervasyonu onaylamak | ✅ | ✅ | — |
| Manuel incelemedeki rezervasyonu sonuçlandırmak | ✅ | ✅ | — |
| Rezervasyondaki misafir verisini silmek | ✅ | ✅ | — |
| Tedarikçi kimlik bilgilerini yönetmek | ✅ | ✅ | — |
| Ekip üyelerini ve davetleri yönetmek | ✅ | ✅ | — |
| Acente ayarlarını yönetmek | ✅ | ✅ | — |
| Aboneliği yönetmek | ✅ | — | — |

## Danışman neden iptal edemiyor

Bu insanları şaşırtıyor, o yüzden açıkça söylemeye değer: **iptal ücretleri gerçek paradır.** Bir
danışman rezervasyon oluşturabilir, çünkü iş budur; ama bir rezervasyonu iptal etmek, acenteye
danışmanın imzalamadığı bir kontrat altında ücrete mal olabilir. Bu yüzden iptal, sahip ve
yöneticidedir.

Aynı gerekçe üç yetkiyi daha oraya koyar:

- **Tek başına taahhüt edemeyeceği söylenmiş bir rezervasyonu onaylamak**, acentenin parasını
  danışmanın imzalamadığı bir kontrat altında taahhüt etmektir — aynı para, aynı gerekçe, bir adım
  önce. Her meslektaşın tek başına neyi taahhüt edebileceği
  [Ekip](/tr/manage/team/#her-meslektaş-tek-başına-neyi-taahhüt-edebilir) ekranında belirlenir.
- **Manuel incelemedeki bir rezervasyonu sonuçlandırmak**, tedarikçide bir rezervasyonun var olduğu
  ya da olmadığı yönünde kalıcı bir beyandır. Günlük bir iş değildir ve yanlış yapıldığında geri
  alınamaz.
- **Misafir verisini silmek** geri alınamaz.

Acenteniz danışmanların iptal edebilmesini istiyorsa bu bir ayar değil, bir ürün değişikliğidir —
OneRate'e bildirin.

## Bir rolü tek bir şubeye daraltmak

Acentenizin [şubeleri](/tr/manage/team/#şubeler) varsa, herhangi bir üye **kendi şubesiyle
sınırlanabilir**. Bu, rolünün yanındaki bir işarettir, ayrı bir rol değil.

Sınırlı bir üye yalnızca kendi şubesinin rezervasyonlarını ve yalnızca kendi şubesinin
meslektaşlarını görür. Rolünün diğer yetkileri değişmez: İzmir'le sınırlı bir yönetici yine yönetir,
ama yönettiği her şey İzmir'indir.

Yazabileceği hiçbir şey bunu genişletmez. Rezervasyon listesinden başka bir şubeyi istemek, kendi
şubesiyle yanıtlanır; çünkü sınır, sorulana değil, soran kişiye aittir.

## Bir kurumsal müşterinin içindeki roller

**Müşteri**, kendi çalışanları *sizin* tedarikçi kontratlarınız üzerinden rezervasyon yapan kurumsal
müşterilerinizden biridir. Şirketinin kendi içinde üç rolü vardır ve davet ederken her kişiye
hangisinin verileceğini siz seçersiniz.

| Rol | Gördüğü | Ayrıca yapabildiği |
| --- | --- | --- |
| **Organizatör** | Şirketin rezervasyonlarını | Şirketindeki herkes adına rezervasyon yapmak |
| **Yolcu** | **Yalnızca kendi yaptığı rezervasyonları** | — |
| **Müşteri yöneticisi** | Şirketin rezervasyonlarını | Kendi meslektaşlarını davet etmek ve kendi şirketinin ayarlarını yönetmek |

Dar olan rol yolcudur ve kurumsal bir müşterinin çalışanlarının çoğuna verdiği rol budur: bir
meslektaşın seyahati onun listesinde görünmez, bağlantısıyla açmak ise ona "göremezsiniz" değil,
"böyle bir şey yok" der.

Müşteri yöneticisi **kendi** şirketini yönetir — kendi insanlarını, kendi alanlarını, kendi kârını.
Sizin acentenizden hiçbir şeye erişmez: sınır roldan değil, şirketten gelir.

Üçünden hiçbiri iptal edemez ve hiçbiri bir tedarikçi adını ya da net fiyatınızı görmez. Aşağıdaki
"Bir müşteri neyi görür, neyi görmez" bölümüne bakın.

## Bir müşteri neyi görür, neyi görmez

Müşteri rolleri, kurumsal müşterilerinizin *sizin* tedarikçi kontratlarınız üzerinden kendi
seyahatlerini rezerve edebilmesi için vardır. Gördükleri bilinçli olarak dardır:

- Otelleri ve fiyatları **kârınız uygulanmış halde** görürler.
- **Tedarikçi adlarını asla görmezler** ve **net fiyatınızı asla görmezler.** Bir müşteri ne
  ödediğinizi çıkaramaz.
- **Kendi şirketlerinin** rezervasyonlarını görürler, acentenizinkileri değil — bir yolcu ise
  yalnızca kendininkini.
- **İptal edemezler.** Rezervasyon ekranları onlara acentenizle iletişime geçmelerini söyler ve
  doğrudan oteli aramamaları konusunda uyarır — orada yapılan bir değişiklik kayda hiç ulaşmaz.

Kurulum için bkz. [Müşteriler](/tr/manage/customers/).

## İki adımlı doğrulama

İki adımlı doğrulama acente sahipleri için (ve OneRate'in kendi platform personeli için)
**zorunludur**. Diğer her rol [Hesabım](/tr/account/security/) sayfasından gönüllü olarak
açabilir — ve açmalıdır.

Acenteniz daha fazlasını zorunlu kılabilir: bkz.
[güvenlik duruşları](/tr/manage/settings/#güvenlik-duruşları). Bir acente bu zorunluluğu
yöneticilerine ya da giriş yapan herkese genişletebilir — OneRate'in kendi tabanının altına asla
indiremez.

## Birinin rolünü değiştirmek

[Ekip](/tr/manage/team/) ekranından yerinde değiştirin — rol, kişinin satırındaki bir açılır
listedir ve bir sonraki isteğinde yürürlüğe girer. Geçmiş rezervasyonlarında hiçbir şey değişmez:
bir rezervasyon, onu yapan hesaba değil, acenteye aittir.

Portalın uyguladığı tek kural: **bir acentenin her zaman en az bir etkin sahibi vardır.** Son
sahibin rolünü değiştirmek ya da onu askıya almak yapılmaz, reddedilir — sahibi olmayan bir
acentede, yerine yenisini koyabilecek kimse yoktur.
