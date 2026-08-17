---
title: Roluri și permisiuni
description: Fiecare rol dintr-o agenție și din interiorul unui client corporativ, ce anume poate face fiecare și de ce unele capacități sunt refuzate în mod deliberat.
---

Fiecare cont are exact un rol într-o agenție. Rolul decide ce ecrane apar și ce acțiuni sunt
permise. Nimic nu este permis implicit — o capacitate pe care nu o vezi listată mai jos, rolul tău
nu o are.

## Rolurile proprii ale agenției tale

| Rol | Pentru cine este |
| --- | --- |
| **Proprietar de agenție** | Persoana care deține relația cu OneRate. Tot, inclusiv abonamentul. |
| **Administrator** | Conduce agenția zi de zi. Tot, mai puțin abonamentul. |
| **Agent** | Vinde. Caută, rezervă și vede rezervările. |
| **Platformă** | Personalul OneRate. Creează agenții și definiții de furnizori — și în mod deliberat nu poate atinge rezervările vreunei agenții. |

## Ce poate face fiecare rol

| Acțiune | Proprietar | Administrator | Agent |
| --- | :---: | :---: | :---: |
| Pornește o căutare | ✅ | ✅ | ✅ |
| Creează o rezervare | ✅ | ✅ | ✅ |
| Vede rezervările | ✅ | ✅ | ✅ |
| Scrie numărul de dosar și nota internă | ✅ | ✅ | ✅ |
| Își stabilește propria marjă | ✅ | ✅ | ✅ |
| Vede rapoartele | ✅ | ✅ | ✅ |
| Anulează o rezervare | ✅ | ✅ | — |
| Aprobă o rezervare pe care cineva nu o poate angaja singur | ✅ | ✅ | — |
| Închide o rezervare aflată în verificare manuală | ✅ | ✅ | — |
| Șterge datele oaspeților dintr-o rezervare | ✅ | ✅ | — |
| Administrează datele de acces ale furnizorilor | ✅ | ✅ | — |
| Administrează membrii echipei și invitațiile | ✅ | ✅ | — |
| Administrează setările agenției | ✅ | ✅ | — |
| Administrează abonamentul | ✅ | — | — |

## De ce un agent nu poate anula

Asta îi surprinde pe oameni, deci merită spus limpede: **penalizările de anulare sunt bani
adevărați.** Un agent poate crea o rezervare, pentru că asta e treaba lui; anularea uneia poate
costa agenția o penalizare prevăzută într-un contract pe care agentul nu l-a semnat. Așa că
anularea stă la proprietar și la administrator.

Același raționament pune acolo alte trei acțiuni:

- **Aprobarea unei rezervări** despre care cuiva i s-a spus că nu o poate angaja singur înseamnă
  angajarea banilor agenției într-un contract pe care agentul nu l-a semnat — aceiași bani, același
  raționament, cu un pas mai devreme. Cât poate angaja singur fiecare se stabilește în
  [Echipă](/ro/manage/team/#ce-poate-angaja-singur-fiecare-coleg).
- **Închiderea unei rezervări aflate în verificare manuală** este o declarație permanentă că o
  rezervare există sau nu există la furnizor. Nu este o sarcină de zi cu zi, iar dacă greșești nu
  se poate repara.
- **Ștergerea datelor oaspeților** nu poate fi anulată.

Dacă agenția ta vrea ca agenții să poată anula, aceea este o modificare de produs, nu o setare —
spune-i OneRate.

## Restrângerea unui rol la o singură sucursală

Dacă agenția ta are [sucursale](/ro/manage/team/#sucursale), orice membru poate fi **limitat la
propria sucursală**. Este o bifă lângă rolul lui, nu un rol separat.

Un membru limitat vede doar rezervările sucursalei sale și doar colegii sucursalei sale. Celelalte
permisiuni ale rolului rămân neschimbate: un administrator limitat la Cluj administrează în
continuare, dar tot ce administrează este al Clujului.

Nimic din ce poate scrie nu lărgește limita. Dacă cere listei de rezervări altă sucursală, primește
răspuns cu a lui, pentru că limita aparține celui care întreabă, nu lucrului întrebat.

## Roluri în interiorul unui client corporativ

Un **client** este unul dintre clienții tăi corporativi, ai cărui oameni rezervă pe contractele
*tale* cu furnizorii. Compania lui are trei roluri proprii, iar tu alegi care rol primește fiecare
persoană atunci când o inviți.

| Rol | Vede | Mai poate |
| --- | --- | --- |
| **Organizator** | Rezervările companiei | Să rezerve pentru oricine din compania sa |
| **Călător** | **Doar rezervările pe care le-a făcut el însuși** | — |
| **Administrator client** | Rezervările companiei | Să își invite proprii colegi și să administreze setările propriei companii |

Călătorul este rolul îngust și este cel pe care un client corporativ îl dă majorității angajaților
săi: călătoria unui coleg nu apare în lista lui, iar deschiderea ei prin link îi spune că nu există,
nu că nu are voie să o vadă.

Administratorul clientului administrează **propria** companie — oamenii ei, câmpurile ei, marja ei.
Nu ajunge la nimic din agenția ta: granița este compania, nu rolul.

Niciunul dintre cele trei roluri nu poate anula și niciunul nu vede vreodată numele unui furnizor
sau tariful tău net. Vezi mai jos secțiunea „Ce vede și ce nu vede un client”.

## Ce vede și ce nu vede un client

Rolurile de client există pentru ca acei clienți corporativi ai tăi să își poată rezerva propriile
călătorii pe contractele *tale* cu furnizorii. Ce văd ei este în mod deliberat mai îngust:

- Văd hoteluri și prețuri **cu marja ta deja aplicată**.
- **Nu văd niciodată numele furnizorilor** și **nu văd niciodată tariful tău net**. Un client nu
  poate deduce cât ai plătit.
- Văd rezervările **propriei companii**, niciodată pe ale agenției tale — iar un călător le vede
  doar pe ale sale.
- **Nu pot anula.** Ecranul lor de rezervare le spune să contacteze agenția ta și îi avertizează să
  nu sune direct hotelul — o modificare făcută acolo nu ar ajunge niciodată în înregistrare.

Vezi [Clienți](/ro/manage/customers/) pentru cum îi configurezi.

## Verificarea în doi pași

Verificarea în doi pași este **obligatorie** pentru proprietarii de agenție (și pentru personalul
de platformă al OneRate). Orice alt rol o poate activa voluntar din
[Contul meu](/ro/account/security/), și ar trebui să o facă.

Agenția ta poate cere mai mult: vezi [setările de securitate](/ro/manage/settings/#setări-de-securitate).
O agenție poate extinde această cerință la administratorii ei sau la toți cei care se autentifică —
nu o poate îngusta niciodată sub pragul propriu al OneRate.

## Schimbarea rolului cuiva

Se schimbă pe loc din [Echipă](/ro/manage/team/) — rolul este o listă derulantă pe rândul persoanei
și intră în vigoare la următoarea ei cerere. Nimic din rezervările ei trecute nu se schimbă: o
rezervare aparține agenției, nu contului care a făcut-o.

Singura regulă pe care portalul o impune: **o agenție are întotdeauna cel puțin un proprietar
activ.** Schimbarea rolului ultimului proprietar sau suspendarea lui este refuzată, nu executată —
o agenție fără proprietar nu are pe cine să pună unul la loc.
