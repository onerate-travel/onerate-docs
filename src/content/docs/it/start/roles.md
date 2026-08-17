---
title: Ruoli e permessi
description: Ogni ruolo in un'agenzia e dentro un cliente aziendale, che cosa può fare esattamente ciascuno e perché alcune facoltà sono deliberatamente negate.
---

Ogni account ha esattamente un ruolo in un'agenzia. Il ruolo decide quali schermate compaiono e
quali azioni sono permesse. Nulla è permesso per impostazione predefinita — una facoltà che non
vedi elencata qui sotto, il tuo ruolo non ce l'ha.

## I ruoli della vostra agenzia

| Ruolo | A chi è destinato |
| --- | --- |
| **Titolare dell'agenzia** | La persona che possiede il rapporto con OneRate. Tutto, abbonamento incluso. |
| **Amministratore** | Manda avanti l'agenzia ogni giorno. Tutto tranne l'abbonamento. |
| **Agente** | Vende. Cerca, prenota e consulta le prenotazioni. |
| **Piattaforma** | Il personale di OneRate. Attiva agenzie e definizioni di fornitori — e deliberatamente non può toccare le prenotazioni di nessuna agenzia. |

## Che cosa può fare ciascun ruolo

| Azione | Titolare | Amministratore | Agente |
| --- | :---: | :---: | :---: |
| Fare una ricerca | ✅ | ✅ | ✅ |
| Creare una prenotazione | ✅ | ✅ | ✅ |
| Vedere le prenotazioni | ✅ | ✅ | ✅ |
| Scrivere il numero di pratica e la nota interna | ✅ | ✅ | ✅ |
| Impostare il proprio margine | ✅ | ✅ | ✅ |
| Vedere i report | ✅ | ✅ | ✅ |
| Annullare una prenotazione | ✅ | ✅ | — |
| Chiudere una prenotazione in verifica manuale | ✅ | ✅ | — |
| Cancellare i dati degli ospiti da una prenotazione | ✅ | ✅ | — |
| Gestire le credenziali dei fornitori | ✅ | ✅ | — |
| Gestire i membri del team e gli inviti | ✅ | ✅ | — |
| Gestire le impostazioni dell'agenzia | ✅ | ✅ | — |
| Gestire l'abbonamento | ✅ | — | — |

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

## Restringere un ruolo a una sola filiale

Se la vostra agenzia ha [filiali](/it/manage/team/#filiali), qualsiasi membro può essere
**limitato alla propria filiale**. È una spunta accanto al suo ruolo, non un ruolo a sé.

Un membro limitato vede solo le prenotazioni della sua filiale e solo i colleghi della sua filiale.
Gli altri permessi del suo ruolo restano invariati: un amministratore limitato a Milano amministra
comunque, ma tutto ciò che amministra è di Milano.

Nulla di ciò che può digitare allarga il limite. Chiedere all'elenco prenotazioni un'altra filiale
risponde con la propria, perché il limite appartiene a chi chiede, non a ciò che è stato chiesto.

## Ruoli dentro un cliente aziendale

Un **cliente** è uno dei vostri clienti aziendali, le cui persone prenotano sui *vostri* contratti
fornitore. La sua azienda ha tre ruoli propri, e siete voi a scegliere quale riceve ciascuna persona
quando la invitate.

| Ruolo | Vede | Inoltre può |
| --- | --- | --- |
| **Organizzatore** | Le prenotazioni dell'azienda | Prenotare per chiunque nella sua azienda |
| **Viaggiatore** | **Solo le prenotazioni che ha fatto lui stesso** | — |
| **Amministratore del cliente** | Le prenotazioni dell'azienda | Invitare i propri colleghi e gestire le impostazioni della propria azienda |

Il viaggiatore è il ruolo ristretto, ed è quello che un cliente aziendale assegna alla maggior parte
del personale: il viaggio di un collega non compare nel suo elenco, e aprirlo dal link gli dice che
non esiste, non che non può vederlo.

L'amministratore del cliente gestisce la **propria** azienda — le sue persone, i suoi campi, il suo
margine. Non raggiunge nulla della vostra agenzia: il confine è l'azienda, non il ruolo.

Nessuno dei tre può annullare, e nessuno di loro vede mai il nome di un fornitore o la vostra
tariffa netta. Vedi più sotto la sezione «Che cosa vede, e non vede, un cliente».

## Che cosa vede, e non vede, un cliente

I ruoli cliente esistono perché i vostri clienti aziendali possano prenotare i propri viaggi sui
*vostri* contratti fornitore. Quello che vedono è deliberatamente più ristretto:

- Vedono hotel e prezzi **con il vostro margine già applicato**.
- **Non vedono mai i nomi dei fornitori** e **non vedono mai la vostra tariffa netta**. Un cliente
  non può ricostruire quanto avete pagato.
- Vedono le prenotazioni della **propria azienda**, mai quelle della vostra agenzia — e un
  viaggiatore vede solo le sue.
- **Non possono annullare.** La loro schermata di prenotazione dice di contattare la vostra agenzia
  e li avverte di non chiamare direttamente l'hotel — una modifica fatta lì non arriverebbe mai al
  record.

Vedi [Clienti](/it/manage/customers/) per come configurarli.

## Verifica in due passaggi

La verifica in due passaggi è **obbligatoria** per i titolari di agenzia (e per il personale di
piattaforma di OneRate). Ogni altro ruolo può attivarla volontariamente da
[Il mio account](/it/account/security/), e dovrebbe farlo.

La vostra agenzia può richiedere di più: vedi le
[impostazioni di sicurezza](/it/manage/settings/#impostazioni-di-sicurezza). Un'agenzia può estendere
quel requisito ai suoi amministratori o a chiunque acceda — non può mai restringerlo sotto la soglia
di OneRate.

## Cambiare il ruolo di qualcuno

Si cambia sul posto da [Team](/it/manage/team/) — il ruolo è un menu a tendina sulla riga della
persona, ed è effettivo alla sua richiesta successiva. Nulla cambia nelle sue prenotazioni passate:
una prenotazione appartiene all'agenzia, non all'account che l'ha fatta.

L'unica regola che il portale impone: **un'agenzia ha sempre almeno un titolare attivo.** Cambiare
il ruolo dell'ultimo titolare, o sospenderlo, viene rifiutato invece che eseguito — un'agenzia senza
titolare non ha nessuno che possa rimetterne uno.
