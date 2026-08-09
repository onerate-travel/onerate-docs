---
title: Setări
description: Contactul corporativ pentru rezervări, identitatea și brandingul agenției, starea abonamentului, configurația agenției și furnizorul de hărți.
---

Proprietari și administratori. Părăsirea acestui ecran cu modificări nesalvate te întreabă întâi.

## Contact corporativ pentru rezervări

**Setarea de făcut înaintea oricărei alteia.** Ambele câmpuri sunt obligatorii:

- **Email de contact corporativ pentru rezervări**
- **Telefon de contact corporativ pentru rezervări** — format internațional, de ex.
  `+902121112233`

Furnizorii cer un contact pentru partea care rezervă. Până când nu există amândouă, **orice rezervare
este refuzată**, pentru orice utilizator, inclusiv clienții tăi. Ecranul te avertizează când lipsesc:

> Rezervările sunt refuzate până când adaugi un contact corporativ — sunt necesare atât emailul, cât
> și telefonul.

Trebuie completate împreună sau golite împreună. Nu poți salva unul fără celălalt, pentru că
jumătate de contact nu este un contact.

## Identitatea agenției

- **Numele agenției**
- **Brandingul pe această adresă** — fie implicitul OneRate, fie propriul tău branding white-label

Ambele sunt configurate de OneRate, nu se pot edita aici. Ca să schimbi oricare, contactează
asistența OneRate. Ecranul o spune, în loc să îți arate un câmp care nu se va salva.

## Abonament

Starea abonamentului tău: **Activ**, **Perioadă de probă**, **Plată restantă** sau **Anulat**. Doar
proprietari.

Dacă nu este vizibilă, portalul o spune limpede și te trimite la OneRate în loc să ghicească.

Starea abonamentului condiționează **autentificarea**, niciodată o rezervare deja în curs. O rezervare
aflată în desfășurare când un abonament expiră nu este abandonată la jumătate.

## Moneda de vânzare

Moneda în care vinde agenția ta — un cod ISO-4217 din trei litere, `EUR`, `TRY`, `USD`.

Schimbarea ei schimbă moneda în care vinde agenția ta, nu doar modul în care sunt afișate prețurile,
și **nimic nu se convertește**. Citește [Prețuri și marjă](/ro/manage/pricing/) înainte să o
schimbi.

## Hartă

Rezultatele căutării pot fi desenate pe o hartă. Implicit aceasta este **OpenStreetMap**, care nu te
costă nimic și nu are nevoie de configurare.

Dacă agenția ta are propria **cheie API Google Maps**, poți folosi harta Google. Dalele sunt
facturate în contul tău Google, pe contractul tău — OneRate nu aplică nicio limită proprie, așa că
setează cote și alerte de buget pe cheie în consola Google Cloud.

Ca să o folosești:

1. Introdu cheia. Este verificată la Google înainte de a fi salvată, criptată în repaus și niciodată
   trimisă către browserul tău.
2. Dacă Google o refuză, nu este salvată — verifică dacă **Map Tiles API** este activat pentru acea
   cheie.
3. Comută între **OpenStreetMap** și **Google Maps** oricând; **Elimină cheia** ca să revii definitiv.

Dacă mai târziu Google refuză o cheie care funcționa, portalul revine la OpenStreetMap și îți spune,
în loc să îți arate o hartă goală.

## Configurația agenției

O listă de valori rezolvate pentru agenția ta. Fiecare arată de unde vine valoarea ei curentă:

| Origine | Sens |
| --- | --- |
| **Setarea agenției tale** | Ai stabilit-o tu. |
| **Moștenită de la {org}** | Vine de la agenția ta-mamă. |
| **Valoare implicită a platformei OneRate** | Valoarea OneRate, folosită până când o stabilești pe a ta. |
| **Nesetat — OneRate nu are o valoare pentru aceasta** | Nimic nu funcționează pe această valoare. |
| **Nesetat — necesar înainte ca {capability}** | Ceva este blocat până când o stabilești. Mesajul spune ce anume. |

Regula de rezolvare: **câștigă setarea ta, apoi a agenției-mamă, apoi valoarea implicită a
OneRate.** Ștergerea suprascrierii tale revine la valoarea agenției-mamă, nu la cea a OneRate.

Printre valorile pe care le vei vedea aici: limba implicită a portalului, emailul de asistență pentru
călători, contactul corporativ, alocările de cereri către furnizori, bugetul de timp pentru căutare,
avansul amintirii de anulare, valabilitatea invitațiilor, durata cache-ului de tarife, păstrarea
datelor oaspeților, marja implicită și moneda de vânzare.

Nu toate sunt editabile aici. Setările devin editabile pe măsură ce apar funcțiile care le folosesc;
ecranul spune care e care, în loc să afișeze câmpuri moarte.

:::caution
Dacă vezi *„o setare salvată este necunoscută sau invalidă”*, contactează asistența OneRate. **Nu a
fost pusă în loc nicio valoare implicită** — portalul refuză să ghicească o valoare pe care nu o
poate citi, în loc să funcționeze pe un număr pe care nu l-a ales nimeni.
:::

### Două de care merită să știi

- **Păstrarea datelor oaspeților (zile)** — cât timp sunt ținute numele oaspeților și evidențele
  furnizorului pe o rezervare înainte să fie șterse automat. Ștergerea elimină persoana; starea,
  datele și sumele rezervării rămân pentru rapoartele tale. Poți șterge și o singură rezervare
  manual — vezi [Rezervările tale](/ro/booking/your-bookings/).
- **Avansul amintirii de anulare (ore)** — cu cât timp înainte de închiderea unei ferestre de anulare
  gratuită ești avertizat. 48 de ore dacă nu schimbi.

## Valori pe care doar agenția ta le poate ști

Unele setări **nu** au o valoare implicită OneRate și nu vor avea niciodată — alocarea de cereri din
contractul tău cu furnizorul, moneda ta de vânzare, contactul tău pentru rezervări.

OneRate nu le inventează, oricât de prudentă ar părea o valoare inventată, pentru că un contact
greșit nu este un contact prudent, este unul greșit. Acolo unde o astfel de valoare lipsește,
capabilitatea care are nevoie de ea rămâne oprită, iar portalul numește și valoarea, și locul unde se
setează. De asta un furnizor nu poate fi activat înainte să existe alocarea lui.
