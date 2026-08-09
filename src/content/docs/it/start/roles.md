---
title: Ruoli e permessi
description: I cinque ruoli, che cosa può fare esattamente ciascuno e perché alcune facoltà sono deliberatamente negate.
---

Ogni account ha esattamente un ruolo in un'agenzia. Il ruolo decide quali schermate compaiono e
quali azioni sono permesse. Nulla è permesso per impostazione predefinita — una facoltà che non
vedi elencata qui sotto, il tuo ruolo non ce l'ha.

## I cinque ruoli

| Ruolo | A chi è destinato |
| --- | --- |
| **Titolare dell'agenzia** | La persona che possiede il rapporto con OneRate. Tutto, abbonamento incluso. |
| **Amministratore** | Manda avanti l'agenzia ogni giorno. Tutto tranne l'abbonamento. |
| **Agente** | Vende. Cerca, prenota e consulta le prenotazioni. |
| **Cliente** | Una persona presso uno dei *tuoi* clienti aziendali, che prenota i propri viaggi sui tuoi contratti. |
| **Piattaforma** | Il personale di OneRate. Attiva agenzie e definizioni di fornitori — e deliberatamente non può toccare le prenotazioni di nessuna agenzia. |

## Che cosa può fare ciascun ruolo

| Azione | Titolare | Amministratore | Agente | Cliente |
| --- | :---: | :---: | :---: | :---: |
| Fare una ricerca | ✅ | ✅ | ✅ | ✅ |
| Creare una prenotazione | ✅ | ✅ | ✅ | ✅ |
| Vedere le prenotazioni | ✅ | ✅ | ✅ | solo le proprie |
| Vedere i report | ✅ | ✅ | ✅ | — |
| Annullare una prenotazione | ✅ | ✅ | — | — |
| Chiudere una prenotazione in verifica manuale | ✅ | ✅ | — | — |
| Cancellare i dati degli ospiti da una prenotazione | ✅ | ✅ | — | — |
| Gestire le credenziali dei fornitori | ✅ | ✅ | — | — |
| Gestire i membri del team e gli inviti | ✅ | ✅ | — | — |
| Gestire le impostazioni dell'agenzia | ✅ | ✅ | — | — |
| Gestire l'abbonamento | ✅ | — | — | — |

## Perché un agente non può annullare

Questo sorprende, quindi vale la pena dirlo chiaramente: **le penali di annullamento sono denaro
vero.** Un agente può creare una prenotazione, perché è il suo lavoro; annullarne una può costare
all'agenzia una penale prevista da un contratto che l'agente non ha firmato. Perciò l'annullamento
sta al titolare e all'amministratore.

Lo stesso ragionamento mette lì altre due azioni:

- **Chiudere una prenotazione in verifica manuale** è una dichiarazione permanente che una
  prenotazione esiste o non esiste presso il fornitore. Non è un compito quotidiano, e sbagliarlo
  non è recuperabile.
- **Cancellare i dati degli ospiti** non si può annullare.

Se la tua agenzia vuole che gli agenti possano annullare, è una modifica del prodotto, non
un'impostazione — dillo a OneRate.

## Che cosa vede, e non vede, un Cliente

Il ruolo Cliente esiste perché i tuoi clienti aziendali possano prenotare i propri viaggi sui
*tuoi* contratti fornitore. Quello che vedono è deliberatamente più ristretto:

- Vedono hotel e prezzi **con il tuo margine già applicato**.
- **Non vedono mai i nomi dei fornitori** e **non vedono mai la tua tariffa netta**. Un cliente non
  può ricostruire quanto hai pagato.
- Vedono **solo le proprie prenotazioni**, mai quelle dell'agenzia.
- **Non possono annullare.** La loro schermata di prenotazione dice di contattare la tua agenzia e
  li avverte di non chiamare direttamente l'hotel — una modifica fatta lì non arriverebbe mai al
  record.

Vedi [Clienti](/it/manage/customers/) per come configurarli.

## Verifica in due passaggi

La verifica in due passaggi è **obbligatoria** per i titolari di agenzia (e per il personale di
piattaforma di OneRate). Ogni altro ruolo può attivarla volontariamente da
[Il mio account](/it/account/security/), e dovrebbe farlo.

## Cambiare il ruolo di qualcuno

Non esiste un editor dei ruoli. Per cambiare quello che un collega può fare, rimuovilo dal team e
invitalo di nuovo con il ruolo che vuoi. Vedi [Team](/it/manage/team/).
