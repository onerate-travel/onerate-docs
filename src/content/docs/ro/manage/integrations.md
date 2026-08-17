---
title: Integrări
description: Chei API pentru ca sistemele dvs. să citească rezervările, și webhookuri care vă anunță când se întâmplă ceva.
---

Două moduri în care sistemele dvs. pot lucra cu OneRate. Proprietari și administratori.

Ambele se află în [Setări](/ro/manage/settings/).

## Chei API

O cheie permite propriului dvs. back office să citească **rezervările dvs.** din OneRate, fără ca
cineva să se autentifice.

### Crearea uneia

1. **Setări → Chei API.** Dați-i un nume care spune unde va fi folosită — mai târziu veți vrea să
   știți pe care să o revocați.
2. **Creează cheie.**
3. **Copiați cheia acum.** Este afișată o singură dată și niciodată din nou.

Nu există un buton „arată cheia", iar asistența nu v-o poate citi. Ceea ce păstrează OneRate este o
amprentă unidirecțională, așa că o copie a bazei de date nu oferă nimănui o cheie funcțională. Dacă o
pierdeți, creați alta și revocați-o pe cea veche.

Lista arată primele caractere ale fiecărei chei — suficient ca să deosebiți patru, mult prea puțin ca
să folosiți una.

### Utilizarea

Trimiteți-o ca bearer token:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — rezervările dvs., filtrate după perioada sejurului și status.
- `GET /api/v1/bookings/{id}` — o rezervare, în întregime.

În acele adrese nu apare niciun identificator de organizație. **Cheia spune despre ce agenție este
vorba** — și de aceea cheia unei agenții nu poate citi niciodată rezervările alteia.

### Ce poate și ce nu poate o cheie

O cheie **citește**. Nu poate rezerva, anula sau modifica nimic și nu ajunge la setările,
furnizorii sau echipa dvs.

Este intenționat și nu este definitiv. Rezervarea prin API deschide o întrebare **către furnizorii
dvs.**, nu către OneRate — dacă traficul de pe propriul dvs. site contează, în termenii lor, drept
traficul dvs. — iar acel răspuns se dă per furnizor și în scris. Citirea propriilor date nu deschide
nimic din toate acestea.

**Adresele IP permise** ale agenției dvs., dacă ați setat vreuna, se aplică și cheilor. O cheie este
tot trafic al agenției dvs.

Fiecare cheie are propria alocare de cereri. O integrare intrată în buclă nu o doboară pe cealaltă —
și de aceea contează cum le numiți: revocați pe cea care face probleme, nu accesul dvs.

### Revocarea

**Revocă** oprește o cheie imediat. Rămâne în listă, marcată ca revocată, astfel încât evidența a
ceea ce s-a întâmplat să rămână lizibilă.

O cheie revocată și una care nu a existat niciodată răspund la fel. Cine o deține nu află nimic
despre faptul că ar fi fost vreodată reală.

## Webhookuri

Un webhook înseamnă că OneRate îi spune sistemului dvs. că s-a întâmplat ceva, în loc ca sistemul
dvs. să întrebe.

### Adăugarea unui punct

1. **Setări → Puncte webhook.**
2. Introduceți **adresa https** la care OneRate să trimită POST.
3. Bifați **evenimentele** dorite.
4. **Adaugă punct**, apoi **copiați secretul de semnare** — ca la o cheie, este afișat o singură dată.

Doar `https` și nicio adresă din rețeaua internă. Semnătura dovedește că un mesaj este autentic; nu
îi ascunde conținutul, iar aceste mesaje poartă nume de oaspeți.

### Evenimentele

| Eveniment | Când |
| --- | --- |
| `booking.confirmed` | Furnizorul a confirmat o rezervare |
| `booking.failed` | O încercare de rezervare s-a încheiat fără rezervare |
| `booking.cancelled` | O anulare a trecut |
| `booking.manual_review` | O rezervare așteaptă ca o persoană să o soluționeze |
| `option.expiring` | Termenul unei opțiuni se apropie |

Primiți exact evenimentele bifate. Nu există opțiunea „tot" — în ziua în care OneRate ar adăuga al
șaselea eveniment, receptorul dvs. ar începe să primească o formă de mesaj pe care nu a văzut-o
niciodată.

### Verificarea că mesajul vine într-adevăr de la OneRate

Fiecare livrare poartă două anteturi:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

`v1` este un HMAC-SHA256 peste `<t>.<corp>` folosind secretul dvs. de semnare. Recalculați-l și
comparați. Respingeți orice are marcaj de timp departe de momentul curent — asta împiedică rejucarea
ulterioară a unei livrări interceptate.

### Când receptorul dvs. nu funcționează

O livrare eșuată este reîncercată și, după câteva încercări, abandonată. Rândul punctului arată
**ultima livrare** și ce a răspuns, ca să vedeți propriul receptor cum eșuează fără să întrebați pe
nimeni — jurnalele OneRate nu sunt ceva ce puteți citi.

**Suspendați** un punct cât timp îl reparați. Suspendarea păstrează adresa și secretul cu care
sistemul dvs. este deja configurat; ștergerea le pierde pe amândouă.

Un mesaj aflat deja în coadă în momentul suspendării nu este livrat. Aceasta este diferența dintre o
suspendare și o întârziere.
