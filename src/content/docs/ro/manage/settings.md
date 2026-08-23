---
title: Setări
description: Contactul corporativ pentru rezervări, identitatea și brandingul dvs., câmpurile agenției, setările de securitate, starea abonamentului, configurația agenției și furnizorul de hărți.
---

Proprietari și administratori. Părăsirea acestui ecran cu modificări nesalvate te întreabă întâi.

Setările sunt patru secțiuni, alese din coloana din stânga: **Identitate și marcă**, **Prețuri**,
**Integrări** și **Contact**. Cea în care te afli face parte din adresă, așa că un link către o
setare se deschide chiar pe acea setare, nu în capul paginii.

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

## Identitatea dvs., pe documentele dvs.

Tot ce urmează vă aparține și apare pe documentele pe care clienții dvs. le păstrează.

### Datele agenției

- **Denumire înregistrată** — societatea așa cum este înregistrată, când diferă de numele sub care
  operați
- **Adresă**
- **Cod fiscal** — VKN în Turcia, CUI, NIP sau partita IVA în altă parte. Se tipărește, nu se
  calculează cu el, așa că oricare este acceptat
- **Licența agenției** — în Turcia numărul TÜRSAB

Un câmp lăsat gol **nu tipărește niciun rând** pe voucher, nu unul gol. Un rând „Cod fiscal:" gol se
citește ca *niciunul*, ceea ce este o afirmație diferită de *nespecificat* — și cea falsă.

Acestea coboară și la clienții dvs.: o rezervare făcută de un client corporativ poartă licența
**dvs.**, pentru că pe acel document partea licențiată este agenția dvs.

### Logoul agenției

**PNG sau JPEG, până la 256 KB.** Apare pe vouchere și pe pagina de autentificare de la adresa dvs.
web.

Doar aceste două formate, pentru că acestea sunt cele două pe care un voucher le poate purta. Un
format care se vede în portal și dispare discret de pe document ar fi mai rău decât un refuz —
nimeni nu ar afla până când un client nu întreabă.

Pentru înlocuire încărcați altul; **Elimină logoul** revine la marca OneRate.

### Culoarea mărcii

O singură culoare, valoare hexazecimală de tipul `#0e6b5c`. Nuanțele mai închise și mai deschise se
derivă din ea, deci nu mai e nimic de ales.

O culoare **ilizibilă** este refuzată, iar mesajul o spune:

> Această culoare nu este lizibilă: textul alb pe ea și ea pe fundal deschis necesită cel puțin
> 4.5:1.

Nu este pedanterie. Aceeași culoare vopsește un buton cu text alb pe el și cuvintele accentuate pe
fundal deschis — un galben corporativ trece al doilea test și cade la primul, iar rezultatul este un
portal ale cărui butoane propriul dvs. personal nu le poate citi.

### Adresă web

Adresa proprie de autentificare a agenției: `numeledvs.onerate.travel`.

Litere mici, cifre și cratime, 3–40 de caractere. Unele nume sunt ale OneRate și sunt refuzate; la
fel unul folosit deja de altă agenție — mesajul spune despre care dintre cele două este vorba.

:::caution
Schimbarea **oprește imediat vechea adresă**, inclusiv pe tot ce ați tipărit sau trimis deja pe
e-mail. Anunțați clienții înainte de schimbare, nu după.
:::

## Câmpurile agenției

Propriile dvs. câmpuri pe rezervare: **centru de cost**, **cod de proiect**, **număr de comandă** —
ce îi trebuie contabilității ca să potrivească un sejur.

Fiecare câmp are:

- o **cheie**, sub care se păstrează valoarea și de care este ancorată coloana din raport. Nu poate
  fi schimbată ulterior, pentru că fiecare valoare deja înregistrată stă sub ea
- o **etichetă**, pe care agenții dvs. o citesc pe formular — și pe aceasta *o puteți* schimba
- un **tip**: text, listă fixă sau dată
- dacă este **obligatoriu** sau nu

Un câmp **obligatoriu** refuză rezervarea direct, înainte ca furnizorul să fie apelat. Exact acesta
este rostul lui: un sejur necodificat este unul pe care cineva îl caută două săptămâni mai târziu,
iar până atunci agentul a uitat care dintre patruzeci de rezervări era.

Câmpurile dvs. apar pe ecranul de verificare, pe pagina rezervării și ca **coloane în exportul
raportului** — câte o coloană pentru fiecare câmp definit, indiferent dacă s-a scris ceva în el,
astfel încât două exporturi ale aceleiași perioade au aceeași formă.

Și clienții dvs. corporativi își pot defini propriile câmpuri; ale dvs. se aplică și rezervărilor
lor, iar un câmp pe care l-ați făcut obligatoriu rămâne obligatoriu și pentru ei. Vedeți
[Clienți](/ro/manage/customers/).

## Setări de securitate

Trei setări, și fiecare poate doar să **strângă** ceea ce OneRate cere deja.

- **Cine trebuie să folosească verificarea în doi pași** — proprietarii (pragul OneRate),
  administratorii dvs. sau oricine se autentifică. Sub prag nu se poate coborî.
- **Durata sesiunii (ore)** — cât poate lucra o sesiune înainte de o nouă autentificare. Între 1 oră
  și 14 zile.
- **Adrese IP permise** — adrese IPv4 și intervale CIDR, separate prin virgulă. O cerere de oriunde
  altundeva este refuzată, **inclusiv de la personalul dvs.**

IPv6 este refuzat în loc să fie acceptat și ignorat: o listă care în tăcere nu se potrivește cu
jumătate din internet v-ar lăsa să credeți că aveți un control pe care nu îl aveți.

Se aplică și cheilor dvs. API — o cheie este tot trafic al agenției. Vedeți
[Integrări](/ro/manage/integrations/).

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

Rezultatele căutării pot fi desenate pe o hartă. Implicit aceasta este **Google Maps**, desenată cu
cheia OneRate: nimic de configurat și nimic facturat agenției tale.

**Furnizorul hărții** permite agenției tale să aleagă în schimb **OpenStreetMap**. Alegerea se aplică
fiecărui agent din agenție și portalurilor clienților tăi.

**Furnizorul de hărți** îi permite agenției tale să aleagă între **Google Maps** și
**OpenStreetMap**. Alegerea se aplică fiecărui agent din agenția ta și portalurilor clienților tăi
și intră în vigoare în clipa în care o faci — este singurul card de pe ecran fără Salvare, și o
spune.

Dacă ai ales Google, iar OneRate nu o poate desena acum, cardul îți spune: portalul rămâne pe
OpenStreetMap până când va putea. Nu ai nimic de reparat; alegerea ta este păstrată.

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
