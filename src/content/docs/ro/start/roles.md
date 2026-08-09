---
title: Roluri și permisiuni
description: Cele cinci roluri, ce anume poate face fiecare și de ce unele capacități sunt refuzate în mod deliberat.
---

Fiecare cont are exact un rol într-o agenție. Rolul decide ce ecrane apar și ce acțiuni sunt
permise. Nimic nu este permis implicit — o capacitate pe care nu o vezi listată mai jos, rolul tău
nu o are.

## Cele cinci roluri

| Rol | Pentru cine este |
| --- | --- |
| **Proprietar de agenție** | Persoana care deține relația cu OneRate. Tot, inclusiv abonamentul. |
| **Administrator** | Conduce agenția zi de zi. Tot, mai puțin abonamentul. |
| **Agent** | Vinde. Caută, rezervă și vede rezervările. |
| **Client** | O persoană de la unul dintre clienții *tăi* corporativi, care își rezervă propriile călătorii pe contractele tale. |
| **Platformă** | Personalul OneRate. Creează agenții și definiții de furnizori — și în mod deliberat nu poate atinge rezervările vreunei agenții. |

## Ce poate face fiecare rol

| Acțiune | Proprietar | Administrator | Agent | Client |
| --- | :---: | :---: | :---: | :---: |
| Pornește o căutare | ✅ | ✅ | ✅ | ✅ |
| Creează o rezervare | ✅ | ✅ | ✅ | ✅ |
| Vede rezervările | ✅ | ✅ | ✅ | doar ale sale |
| Vede rapoartele | ✅ | ✅ | ✅ | — |
| Anulează o rezervare | ✅ | ✅ | — | — |
| Închide o rezervare aflată în verificare manuală | ✅ | ✅ | — | — |
| Șterge datele oaspeților dintr-o rezervare | ✅ | ✅ | — | — |
| Administrează datele de acces ale furnizorilor | ✅ | ✅ | — | — |
| Administrează membrii echipei și invitațiile | ✅ | ✅ | — | — |
| Administrează setările agenției | ✅ | ✅ | — | — |
| Administrează abonamentul | ✅ | — | — | — |

## De ce un agent nu poate anula

Asta îi surprinde pe oameni, deci merită spus limpede: **penalizările de anulare sunt bani
adevărați.** Un agent poate crea o rezervare, pentru că asta e treaba lui; anularea uneia poate
costa agenția o penalizare prevăzută într-un contract pe care agentul nu l-a semnat. Așa că
anularea stă la proprietar și la administrator.

Același raționament pune acolo alte două acțiuni:

- **Închiderea unei rezervări aflate în verificare manuală** este o declarație permanentă că o
  rezervare există sau nu există la furnizor. Nu este o sarcină de zi cu zi, iar dacă greșești nu
  se poate repara.
- **Ștergerea datelor oaspeților** nu poate fi anulată.

Dacă agenția ta vrea ca agenții să poată anula, aceea este o modificare de produs, nu o setare —
spune-i OneRate.

## Ce vede și ce nu vede un Client

Rolul de Client există pentru ca acei clienți corporativi ai tăi să își poată rezerva propriile
călătorii pe contractele *tale* cu furnizorii. Ce văd ei este în mod deliberat mai îngust:

- Văd hoteluri și prețuri **cu marja ta deja aplicată**.
- **Nu văd niciodată numele furnizorilor** și **nu văd niciodată tariful tău net**. Un client nu
  poate deduce cât ai plătit.
- Văd **doar propriile rezervări**, niciodată pe ale agenției.
- **Nu pot anula.** Ecranul lor de rezervare le spune să contacteze agenția ta și îi avertizează să
  nu sune direct hotelul — o modificare făcută acolo nu ar ajunge niciodată în înregistrare.

Vezi [Clienți](/ro/manage/customers/) pentru cum îi configurezi.

## Verificarea în doi pași

Verificarea în doi pași este **obligatorie** pentru proprietarii de agenție (și pentru personalul
de platformă al OneRate). Orice alt rol o poate activa voluntar din
[Contul meu](/ro/account/security/), și ar trebui să o facă.

## Schimbarea rolului cuiva

Nu există un editor de roluri. Ca să schimbi ce poate face un coleg, elimină-l din echipă și
invită-l din nou cu rolul dorit. Vezi [Echipă](/ro/manage/team/).
