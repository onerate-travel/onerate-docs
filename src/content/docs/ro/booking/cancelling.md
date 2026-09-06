---
title: Anularea unei rezervări
description: Cine poate anula, ce îți spune confirmarea penalizării, ce se întâmplă când furnizorul percepe altceva și de ce clienții nu pot anula.
---

## Cine poate anula

Proprietarii și administratorii. **Agenții nu pot** — penalizările de anulare sunt bani adevărați,
prevăzuți într-un contract pe care agentul nu l-a semnat. Nici clienții nu pot.

Dacă ești agent și o rezervare trebuie anulată, cere-i proprietarului sau administratorului tău.

## Anularea

Din **Rezervări**, apasă **Anulează rezervarea** pe rând — sau deschide rezervarea și apasă același
buton acolo. În ambele cazuri ți se cere să confirmi, iar confirmarea îți spune cât va costa:

> Anulezi această rezervare? Penalizarea de anulare estimată este 120,00 €.

sau, când furnizorul nu a dat o cifră:

> Anulezi această rezervare? Penalizarea de anulare nu este încă cunoscută — o stabilesc condițiile
> furnizorului tău.

Ambele sunt afirmații oneste despre ce știe OneRate. A doua nu este o defecțiune a sistemului;
înseamnă că răspunsul furnizorului va sosi abia odată cu anularea.

## După anulare

Rezervarea trece în **Anulată** și ți se spune ce s-a întâmplat de fapt:

| Mesaj | Sens |
| --- | --- |
| „Rezervare anulată. Nu a fost percepută nicio penalizare de anulare.” | Gratuit, ca așteptat. |
| „Rezervare anulată. Furnizorul tău a perceput o penalizare de anulare de 120,00 €.” | Furnizorul a taxat. Aceasta este suma la care să te aștepți pe factura lui. |
| „Rezervare anulată. Penalizarea de anulare nu este încă cunoscută…” | Anulată, penalizarea încă deschisă. O stabilesc condițiile furnizorului tău. |

Penalizarea returnată de furnizor este înregistrată pe rezervare și confruntată cu politica salvată
când ai rezervat. **Dacă diferă, este o problemă de ridicat furnizorului tău** — evidența ambelor
este pe rezervare, în secțiunea de costuri și în cronologie.

## Înainte să se închidă termenul

Anularea gratuită are un termen, iar OneRate îți amintește înainte să se închidă — implicit cu 48 de
ore înainte, reglabil pe agenție în [Setări](/ro/manage/settings/).

Când un furnizor indică un termen fără fus orar, OneRate îl rezolvă în fusul orar al hotelului și îl
marchează **Estimare — acest furnizor nu indică un fus orar, deci acesta este cel mai devreme moment
la care ar putea cădea termenul.** Tratează-l ca pe ultimul moment sigur, nu ca pe o promisiune.
Anulează înainte de un termen estimat, niciodată exact la el.

Rezervările foarte vechi pot afișa în schimb **Neconfirmat** — înregistrate înainte ca OneRate să
salveze dacă un termen era al furnizorului sau o estimare. Verifică la furnizor înainte să te
bazezi pe el.

## Modificări

În portal nu există un flux de modificare. Pentru a schimba datele, ocuparea sau numele unui
oaspete, contactează direct furnizorul pe contractul tău; rezervarea de aici va afișa **Modificată**
dacă furnizorul raportează o schimbare.

## De ce clienții nu pot anula

Ecranul de rezervare al unui client spune:

> Pentru a anula sau modifica această rezervare, contactează agenția ta — ea deține contractul cu
> furnizorul și este singura care o poate modifica. Nu suna direct hotelul: o modificare făcută
> acolo nu ar ajunge în această înregistrare.

A doua propoziție este cea care contează. O modificare convenită la recepția hotelului nu ajunge
niciodată la furnizorul tău sau în această înregistrare, așa că lista ta de rezervări și așteptările
clientului tău se despart — iar tu afli la check-in.

## Dacă anularea eșuează

Trei lucruri diferite pot merge prost, iar ecranul spune care. Diferența decide ce faci mai departe,
așa că citește textul, nu faptul că ceva s-a făcut roșu.

| Ce vezi | Ce s-a întâmplat | Ce să faci |
| --- | --- | --- |
| „Rezervarea nu a putut fi anulată.” | Cererea nu a ajuns. | Încearcă din nou. |
| „Rezervarea nu a fost anulată: furnizorul dumneavoastră a respins cererea (…).” | A ajuns la furnizor și el a refuzat. Codul din paranteză este al lui. | Vezi codurile de mai jos. |
| „Furnizorul dumneavoastră nu a răspuns, așa că nu putem spune dacă această rezervare a fost anulată.” | Încă nu știe nimeni. Poate a trecut, poate nu. | **Nu încerca din nou.** Așteaptă. |

Al treilea este cel cu care trebuie să fii atent. La majoritatea furnizorilor anularea nu este
idempotentă, deci o a doua anulare poate fi taxată a doua oară. OneRate verifică el însuși cu
furnizorul tău, iar starea de aici se schimbă când sosește răspunsul; cronologia o înregistrează.

În toate trei cazurile rezervarea **nu** a fost anulată, decât dacă ecranul spune că a fost.

### Codurile de refuz

Codul este afișat exact așa cum a fost produs, ca să îl poți cita furnizorului tău.

| Cod | Semnificație |
| --- | --- |
| `not_cancellable_CANCELLED` | Deja anulată. Nu ai ce face. |
| `not_cancellable_…` (orice altă stare) | Rezervarea nu este într-o stare care poate fi anulată — de exemplu un sejur pe care furnizorul nu l-a confirmat niciodată. Uită-te la starea ei. |
| `transition_conflict_…` | Altcineva a modificat această rezervare în timp ce o anulai. Reîncarc-o și citește starea înainte de a face altceva. |
| `AUTH` | Furnizorul tău a refuzat credențialul. Verifică-l la **Furnizori**. |
| `VALIDATION` | Furnizorul tău nu recunoaște această rezervare ca fiind una pe care o poate anula. Contactează-l cu referința furnizorului. |
| Orice altceva | Un refuz al furnizorului tău. Citează-i codul. |
