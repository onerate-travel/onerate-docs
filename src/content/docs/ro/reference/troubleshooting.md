---
title: Depanare
description: Mesajele pe care le afișează portalul, ce înseamnă de fapt fiecare și ce ai de făcut.
---

## Întâi, cel care contează cel mai mult

:::danger
**O rezervare aflată *În reconciliere* are un rezultat necunoscut, nu unul eșuat.** Este posibil ca
furnizorul să o fi preluat. Nu rezerva din nou același sejur — rezervă alt hotel sau alt tarif dacă
oaspetele are nevoie de o cameră acum. [Explicația completă](/ro/booking/statuses/).
:::

## Autentificare

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „Această combinație de email și parolă nu a fost recunoscută.” | Una dintre cele două este greșită; mesajul este același în ambele cazuri, intenționat. | Verifică-le pe amândouă. |
| „Codul de verificare nu a fost acceptat.” | Codurile se schimbă la fiecare 30 de secunde. | Introdu-l pe cel curent. Dacă tot eșuează, activează data și ora automate pe telefon. |
| „Prea multe încercări.” | Limitare a numărului de cereri. | Așteaptă un minut. |
| „Acest cont nu se poate autentifica momentan.” | Cont suspendat sau abonament inactiv. | Întreabă administratorul agenției tale. |
| „Nu am putut contacta OneRate.” | Rețeaua ta. | Verifică-ți conexiunea. **Nu** ai fost autentificat; nimic nu s-a schimbat. |
| „Sesiunea ta s-a încheiat.” | Sesiunea a expirat cu fila deschisă. | Autentifică-te din nou. Lucrul nesalvat de pe acel ecran se pierde. |
| „Acest link de invitație este invalid sau expirat.” | Expirat, revocat sau deja folosit. | Cere unul nou — expeditorul îl poate retrimite din Echipă. |
| „Această invitație este legată de această adresă de email.” | Ești autentificat ca altcineva. | Deconectează-te, apoi înregistrează-te cu adresa invitată. |

## Căutare

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „Nu cunoaștem această destinație.” | Ai scris în loc să alegi o sugestie. | Alege una din listă. |
| „Precizează vârsta fiecărui copil.” | Furnizorii calculează prețul după vârsta copilului. | Introdu fiecare vârstă. |
| „Data de check-in este în trecut.” / „Check-out-ul trebuie să fie după check-in.” | Date invalide. | Corectează-le. |
| „Prea multe căutări într-un timp scurt.” | Limitare a cererilor, care îți protejează alocarea de la furnizor. | Așteaptă un moment. |
| „Formularul de căutare s-a schimbat. Aceste prețuri sunt în continuare pentru criteriile de mai sus…” | Rezultatele aparțin vechilor criterii. | Caută din nou. Prețurile nu se recalculează niciodată în browser. |
| „Rezultate parțiale — X a încetat să răspundă…” | Un furnizor a răspuns incomplet. | Unele hoteluri lipsesc. Caută din nou dacă contează. |
| „Niciun hotel găsit pentru această căutare.” | Nimic disponibil — **citește linia de stare a furnizorilor**. | Dacă un furnizor apare **Eșuat**, acesta nu este un răspuns complet. Încearcă din nou. |
| „Furnizorul de hărți nu a putut fi contactat…” | Cheia ta Google Maps sau Google însuși nu era accesibil. | De obicei este trecător. Dacă persistă, verifică cheia în [Setări](/ro/manage/settings/). |

### „Spune că nu există disponibilitate, dar știu că există”

În ordine:

1. **Citește linia de stare per furnizor.** Un furnizor **Eșuat** sau **Parțial** înseamnă că nu ai
   primit un răspuns complet.
2. **Verifică dacă furnizorul este activat** în ecranul [Furnizori](/ro/manage/suppliers/) și dacă
   **Sănătatea** lui nu este **Indisponibil**.
3. **Verifică destinația.** Un *loc al furnizorului* ajunge la un singur furnizor; un oraș din
   catalog ajunge la toți.
4. **Verifică secțiunea de monedă.** Ofertele cotate în altă monedă sunt sub lista principală, nu în
   ea.
5. **Verifică-ți filtrele.** Numărul îți spune câte a găsit efectiv căutarea — *„0 din 48”* este o
   problemă de filtru, nu de căutare.
6. **Verifică filtrarea după stele.** Hotelurile neclasificate sunt excluse de *orice* alegere de
   stele.

## Rezervare

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „adaugă un contact corporativ în Setări pentru a putea rezerva” | Agenția nu are contact pentru rezervări. | Un proprietar sau administrator adaugă emailul **și** telefonul în [Setări](/ro/manage/settings/). |
| „Introdu prenumele și numele oaspetelui principal” | Oaspete principal incomplet. | Completează ambele. |
| „Prețul s-a schimbat la …” | Furnizorul a recotat. | Confirmă noul preț sau refuză. Nimic nu se rezervă cât timp te decizi. |
| „Acest hotel nu are tarife pentru aceste date momentan.” | Tariful s-a epuizat sau linkul este vechi. | Caută din nou. |
| „Acestui link îi lipsește ceva de care avem nevoie pentru a cota sejurul.” | Un link de hotel trunchiat sau modificat manual. | Întoarce-te și caută din nou. |
| „Acea cheie de rezervare a fost deja folosită pentru o altă rezervare.” | Protecția împotriva dublei rezervări, funcționând. | Începe o căutare nouă. Nimic nu a fost rezervat de două ori. |
| „Prea multe încercări de rezervare într-un timp scurt.” | Limitare a cererilor. | Așteaptă. O reîncercare acum este refuzată la fel. |
| „Rezervarea a eșuat. Te rugăm să încerci din nou.” | O eroare generală. | **Verifică întâi [Rezervări](/ro/booking/your-bookings/)** ca să confirmi că nu s-a creat nimic, apoi reîncearcă. |

## Rezervări și anulare

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „Rezervarea nu a putut fi anulată.” | Furnizorul a refuzat sau nu a răspuns. **Nu** este anulată. | Nu repeta orbește — la majoritatea furnizorilor anularea nu este idempotentă. Verifică cronologia, apoi contactează furnizorul. |
| „Penalizarea de anulare nu este încă cunoscută…” | Furnizorul nu a comunicat una. | O stabilesc condițiile lui. Va fi înregistrată când se va ști. |
| „Furnizorul a confirmat o sumă diferită de cea cotată.” | Netul s-a mișcat între cotație și confirmare. | Marja ta reală pe acea rezervare diferă. Ridică problema la furnizor. |
| „Această rezervare nu mai este în verificare — altcineva a închis-o înaintea ta.” | Un coleg a ajuns primul. | Reîncarcă. Nimic nu s-a suprascris. |
| „Datele oaspeților nu au putut fi șterse.” | Ștergerea poate fi parțială. | Rulează din nou — se poate repeta în siguranță. |
| „Estimare — acest furnizor nu indică un fus orar…” | Termenul este cel mai devreme moment la care ar putea cădea. | Tratează-l ca pe ultimul moment sigur. Anulează înainte, niciodată exact la el. |
| „Neconfirmat — această rezervare a fost înregistrată înainte…” | O rezervare veche. | Verifică la furnizor înainte să te bazezi pe termen. |

## Furnizori și setări

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „…cheia a fost respinsă” | Greșită, expirată sau din **mediul** greșit. | Verifică sandbox față de producție, apoi înlocuiește cheia. |
| „…furnizorul ne limitează cererile” / „nu a răspuns la timp” / „nu a putut fi contactat” | **Cheia poate fi perfect în regulă.** | Așteaptă și testează din nou. Nu înlocui o cheie funcțională din cauza unei pene la furnizor. |
| „Cheia nouă nu a fost acceptată; cea veche este în continuare în uz.” | Înlocuirea a eșuat. | Nimic nu este stricat. Verifică noua cheie și încearcă din nou. |
| Sănătate: **Indisponibil** | OneRate a suspendat apelurile după eșecuri repetate. | Se eliberează singur. Împiedică fiecare căutare să aștepte un timeout. |
| „Nesetat — necesar înainte ca un furnizor să poată fi activat” | Lipsește o valoare pe care doar agenția ta o poate ști. | Setează-o unde indică mesajul. OneRate nu o va inventa. |
| „o setare salvată este necunoscută sau invalidă” | Configurația ta nu poate fi citită și **nu a fost pusă în loc nicio valoare implicită**. | Contactează asistența OneRate. |
| „Emailul și telefonul trebuie completate împreună sau golite împreună.” | Jumătate de contact nu este un contact. | Completează-le pe amândouă sau golește-le pe amândouă. |
| „Google a respins această cheie” | Cheia este greșită sau **Map Tiles API** nu este activat pentru ea. | Repar-o în consola Google Cloud și introdu-o din nou. |

## Rapoarte

| Mesaj | Sens | Ce faci |
| --- | --- | --- |
| „X rezervare/rezervări sunt cotate în … și NU sunt incluse în totalurile în …” | Rezervările în altă monedă sunt excluse, nu convertite. | Tratează-le separat. Dacă se întâmplă la fiecare raport, verifică-ți [moneda de vânzare](/ro/manage/pricing/). |
| „Sunt afișate doar primele N rezervări, iar totalurile de mai sus le acoperă doar pe acestea.” | Intervalul a fost limitat. **Totalurile sunt doar ale rândurilor afișate.** | Restrânge intervalul de check-in și rulează din nou. |

## Tot blocat

- Un cuvânt pe care nu îl recunoști → [Glosar](/ro/reference/glossary/)
- Ceva ce rolul tău nu poate face → [Roluri și permisiuni](/ro/start/roles/)
- Orice altceva → proprietarul sau administratorul agenției tale, apoi OneRate la
  [hello@onerate.travel](mailto:hello@onerate.travel).

Când scrii, include **referința de confirmare a rezervării** sau **hotelul și datele** căutării.
Acestea sunt cele care permit oricui să găsească exact înregistrarea la care te uiți.
