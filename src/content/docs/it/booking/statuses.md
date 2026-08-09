---
title: Stati della prenotazione
description: Ogni stato che una prenotazione può avere, che cosa significa per l'ospite, e i due che richiedono una persona — In riconciliazione e Verifica manuale.
---

## Gli stati

| Stato | Che cosa significa | Che cosa dovresti fare |
| --- | --- | --- |
| **Bozza** | Creata, non ancora inoltrata al fornitore. | Nulla — dura un istante. |
| **Preprenotata** | Il prezzo è stato ricontrollato e accettato; la prenotazione è in corso di inoltro. | Nulla. |
| **Confermata** | Il fornitore ce l'ha. Esistono un riferimento di conferma e un voucher. | Invia il voucher. Fatto. |
| **Non riuscita** | Non è avvenuta, e sappiamo che non è avvenuta. Presso il fornitore non esiste nulla. | Prenota di nuovo se l'ospite vuole ancora il soggiorno. |
| **In riconciliazione** | Non sappiamo ancora se il fornitore l'ha presa. | **Aspetta. Non prenotarla di nuovo.** Vedi sotto. |
| **Verifica manuale** | Ancora sconosciuta dopo 24 ore. Deve chiuderla una persona. | Titolare o amministratore: verifica con il fornitore e registra quello che trovi. Vedi sotto. |
| **Annullata** | Annullata. Ogni penale applicata dal fornitore è registrata sulla prenotazione. | Nulla. |
| **Modificata** | Il fornitore segnala che la prenotazione è stata cambiata. | Controlla il dettaglio e la cronologia. |

## In riconciliazione

Questo è lo stato che vale la pena capire davvero.

**Un timeout del fornitore significa *sconosciuto*, non *fallito*.** La richiesta può essere
arrivata ed essere stata accettata dopo la caduta della connessione. Trattarla come un fallimento e
riprenotare è il modo in cui un'agenzia finisce con — e paga — due camere.

Quindi OneRate non tira a indovinare. Mette la prenotazione **In riconciliazione** e richiede al
fornitore, con intervalli crescenti, fino a 24 ore. Il portale dice esattamente questo:

> Stiamo verificando con il fornitore se questa prenotazione è andata a buon fine. Il controllo si
> ripete automaticamente e si risolve entro 24 ore; se dopo resta ignoto, viene inoltrato a una
> persona.
>
> Nel frattempo non prenotare di nuovo questo soggiorno: se il fornitore l'avesse presa, te ne
> ritroveresti due.

Poi possono succedere tre cose:

- Il fornitore conferma che esiste → **Confermata**, e tutto prosegue normalmente.
- Il fornitore è definitivamente certo che non esiste → **Non riuscita**. Riprenota liberamente.
- Ancora sconosciuta dopo 24 ore → **Verifica manuale**.

Non c'è nulla da fare mentre una prenotazione è in riconciliazione. Il controllo gira che il
portale sia aperto o meno.

:::caution
Se l'ospite è davanti a te e ha bisogno di una camera stanotte, **prenota un hotel diverso o una
tariffa diversa** invece della stessa un'altra volta. Una seconda prenotazione dello stesso
soggiorno è esattamente il duplicato che questo stato esiste per prevenire.
:::

## Verifica manuale

24 ore di controlli automatici non l'hanno chiusa. Qualcuno deve guardare.

Solo un titolare o un amministratore può chiuderla, perché è una dichiarazione permanente su quello
che è realmente successo. La schermata dice:

> La riconciliazione non è riuscita a stabilire se questa prenotazione sia arrivata al fornitore.
> Controlla i registri del tuo fornitore e registra quanto trovi: è l'unico modo per farla uscire
> dalla verifica.

### Come chiuderne una

1. **Controlla l'extranet del fornitore o chiamalo.** Non chiudere a memoria o per deduzione. È
   tutto il lavoro.
2. Apri la prenotazione e vai su **Chiudi questa prenotazione**.
3. Registra quello che risulta al fornitore:
   - **La prenotazione esiste** — devi fornire il **riferimento di conferma del fornitore**. Senza
     di esso nulla identifica la prenotazione presso il fornitore, quindi il modulo lo richiede.
   - **Non esiste alcuna prenotazione** — viene registrata come non riuscita e il soggiorno può
     essere prenotato di nuovo.
   - **Esiste ma è già annullata** — registrata come annullata.
4. Premi **Registra questo esito**.

Se qualcun altro l'ha chiusa prima, te lo dirà: *"Questa prenotazione non è più in verifica:
qualcun altro l'ha chiusa prima."* Nulla viene sovrascritto.

## Prenotazioni che richiedono la tua attenzione

La navigazione porta un conteggio delle prenotazioni ferme in uno stato che non si risolve da solo.
Seguilo. Una prenotazione in verifica manuale è una camera che un ospite potrebbe avere o non
avere, e non migliora da sola.

## Perché gli stati si muovono in una sola direzione

Una prenotazione percorre un cammino fisso — Bozza → Preprenotata → Confermata, oppure verso Non
riuscita, In riconciliazione o Verifica manuale — e mai all'indietro. Le transizioni sono imposte
nel momento in cui vengono scritte, non controllate dopo, quindi due persone che agiscono
contemporaneamente non possono produrre due esiti.

In pratica significa: quello che vedi su una prenotazione è quello che è successo. Non c'è un
percorso di riparazione che riscrive silenziosamente la storia, ed è esattamente per questo che la
verifica manuale richiede la dichiarazione di una persona invece di un pulsante "riprova".
