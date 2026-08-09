---
title: Fornitori
description: Collegare i tuoi contratti fornitore, provare e sostituire le chiavi, abilitare e disabilitare, la salute e la cache delle tariffe.
---

OneRate non rivende l'inventario di nessuno. Tu porti i contratti che già hai, e OneRate li
interroga per tuo conto. Questa schermata è dove vivono le tue credenziali.

Solo titolari e amministratori.

## Aggiungere un fornitore

1. **Fornitori → Aggiungi un fornitore.**
2. Scegli il fornitore dall'elenco.
3. Scegli l'**ambiente** — **Sandbox** o **Produzione**. È l'ambiente del fornitore a cui appartiene
   la chiave, e una chiave di sandbox non può essere usata in produzione. Sbagliare qui è l'errore
   di configurazione più comune in assoluto.
4. Inserisci le credenziali che il tuo fornitore ti ha rilasciato.
5. Facoltativamente dagli un'**etichetta**, utile quando hai due contratti con lo stesso fornitore.
6. **Aggiungi fornitore.**

Le credenziali sono cifrate prima di essere salvate, vengono decifrate solo nel momento in cui si fa
una richiesta a quel fornitore, e non vengono mai rimandate al tuo browser. Nemmeno tu puoi
rileggere una chiave salvata dal portale — se la perdi, chiedine una nuova al fornitore e
sostituiscila qui.

## Provare una chiave

**Prova** effettua una chiamata reale al fornitore con le credenziali salvate.

| Risultato | Significato |
| --- | --- |
| "…ha accettato le credenziali salvate." | La chiave funziona. |
| "…la chiave è stata rifiutata" | La chiave è sbagliata, scaduta o è dell'altro ambiente. Sostituiscila. |
| "…il fornitore ci sta limitando le richieste" | La chiave **potrebbe benissimo essere valida**. Aspetta e riprova. |
| "…il fornitore non ha risposto in tempo" | La chiave potrebbe essere valida. Il fornitore è lento o non disponibile. |
| "…non è stato possibile raggiungere il fornitore" | La chiave potrebbe essere valida. Un problema di rete o un'interruzione del fornitore. |

Solo il primo errore riguarda la tua chiave. Gli altri sono affermazioni sul fornitore, e la
formulazione è attenta alla differenza di proposito — sostituire una chiave funzionante perché il
fornitore era brevemente giù peggiora le cose.

## Sostituire una chiave

**Sostituisci la chiave** prende una nuova credenziale e la scambia. Se la nuova chiave non viene
accettata, **resta in uso quella vecchia** — non puoi rompere una connessione funzionante con un
incolla sbagliato.

Fallo secondo il calendario del fornitore, e subito se una chiave potrebbe essere trapelata.

## Abilitare e disabilitare

Solo i fornitori **abilitati** vengono interrogati.

**Disabilita** toglie un fornitore da ogni ricerca senza cancellare nulla. Usalo quando un contratto
è sospeso, quando un fornitore ha una brutta giornata e sta rallentando le tue ricerche, o mentre
sistemi un problema di credenziali. Riabilitalo quando vuoi.

**Rimuovi** cancella il fornitore e le sue credenziali salvate. Non è reversibile — ti serviranno di
nuovo le credenziali per riaggiungerlo.

:::note
Un fornitore non può essere abilitato finché la tua agenzia non ha le impostazioni da cui dipende
l'uso di quel fornitore — per esempio la tua quota di richieste. Il portale nomina il valore mancante
e rimanda a dove si imposta. Vedi [Impostazioni](/it/manage/settings/).
:::

## Salute

La colonna **Salute** è la vista in tempo reale che OneRate ha di quel fornitore, non uno stato
contrattuale:

| Salute | Significato |
| --- | --- |
| **In salute** | Normale. Le richieste passano. |
| **In ripresa** | Stava fallendo; OneRate sta lasciando passare traffico con cautela. |
| **Non disponibile** | Fallisce in modo costante, quindi OneRate ha smesso di chiamarlo per un periodo invece di far attendere ogni ricerca fino al timeout. |

**Non disponibile** è una protezione, non una punizione. Un fornitore giù aggiungerebbe altrimenti
il suo timeout completo a ogni ricerca che fai. Si sblocca da solo quando il fornitore si riprende.

È anche quello che vedrai riflesso nella riga di stato per fornitore sulla schermata di ricerca.

## Cache delle tariffe

OneRate mette brevemente in cache le tariffe di un fornitore, così ripetere una ricerca pochi
secondi dopo non consuma un'altra richiesta della tua quota.

**Interrompi la cache** la disattiva per un fornitore — ogni ricerca lo interroga allora da capo.
Usalo quando stai inseguendo una discrepanza di prezzo e devi vedere esattamente che cosa dice il
fornitore adesso. Un fornitore con la cache disattivata è contrassegnato **Non in cache**, così
nessuno si chiede perché le ricerche siano rallentate.

Le tariffe in cache sono sempre limitate alla tua agenzia. Le tue tariffe contrattuali non vengono
mai servite a un'altra agenzia, e quelle di un'altra agenzia non vengono mai servite a te.

## Quali fornitori sono disponibili

L'elenco sulla schermata **Aggiungi un fornitore** è quello per cui OneRate ha attualmente adattatori.
Se il tuo contratto è con un fornitore non elencato, dillo a OneRate — aggiungerne uno è lavoro di
prodotto, non un'impostazione che puoi attivare.

## Poi

- [Preferenze fornitori](/it/manage/preferences/) — modificare il criterio del più economico per gli
  impegni di volume
- [Prezzi e margine](/it/manage/pricing/)
