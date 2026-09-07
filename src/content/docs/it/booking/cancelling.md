---
title: Annullare una prenotazione
description: Chi può annullare, che cosa ti dice la conferma della penale, che cosa succede quando il fornitore addebita qualcosa di diverso e perché i clienti non possono annullare.
---

## Chi può annullare

Titolari e amministratori. **Gli agenti no** — le penali di annullamento sono denaro vero, previsto
da un contratto che l'agente non ha firmato. Nemmeno i clienti possono.

Se sei un agente e una prenotazione va annullata, chiedi al tuo titolare o amministratore.

## Annullare

Apri la prenotazione da **Prenotazioni** — l'intera riga è un collegamento — e premi lì **Annulla
prenotazione**. Nell'elenco non c'è: annullare è l'unica azione qui che non si può disfare, e in un
elenco il puntatore sta già scorrendo lungo una colonna. Ti viene chiesta una conferma, e la
conferma ti dice quanto costerà:

> Annullare questa prenotazione? La penale prevista è di €120,00.

oppure, quando il fornitore non ha dato una cifra:

> Annullare questa prenotazione? La penale di annullamento non è ancora nota: la stabiliscono le
> condizioni del tuo fornitore.

Entrambe sono affermazioni oneste su quello che OneRate sa. La seconda non è un guasto del sistema;
significa che la risposta del fornitore arriverà solo insieme all'annullamento.

## Dopo l'annullamento

La prenotazione passa ad **Annullata** e ti viene detto che cosa è successo davvero:

| Messaggio | Significato |
| --- | --- |
| "Prenotazione annullata. Non è stata applicata alcuna penale." | Senza costi, come previsto. |
| "Prenotazione annullata. Il tuo fornitore ha applicato una penale di €120,00." | Il fornitore ha addebitato. È l'importo da attendersi sulla sua fattura. |
| "Prenotazione annullata. La penale non è ancora nota…" | Annullata, penale ancora aperta. La stabiliscono le condizioni del tuo fornitore. |

La penale restituita dal fornitore viene registrata sulla prenotazione e riconciliata con la policy
salvata quando hai prenotato. **Se differiscono, è una questione da portare al tuo fornitore** — il
registro di entrambe è sulla prenotazione, nella sezione costi e nella cronologia.

## Prima che la scadenza si chiuda

La cancellazione gratuita ha una scadenza, e OneRate ti ricorda prima che si chiuda — per
impostazione predefinita 48 ore prima, regolabile per agenzia in
[Impostazioni](/it/manage/settings/).

Quando un fornitore indica una scadenza senza fuso orario, OneRate la risolve nel fuso orario
dell'hotel e la contrassegna **Stima: questo fornitore non indica un fuso orario, quindi questo è il
primo momento in cui la scadenza potrebbe cadere.** Trattala come l'ultimo momento sicuro, non come
una promessa. Annulla prima di una scadenza stimata, mai in corrispondenza di essa.

Prenotazioni molto vecchie possono mostrare **Non confermata** — registrate prima che OneRate
salvasse se una scadenza fosse quella del fornitore o una stima. Verifica con il fornitore prima di
farci affidamento.

## Modifiche

Nel portale non esiste un percorso di modifica. Per cambiare date, occupazione o il nome di un
ospite, contatta direttamente il tuo fornitore sul tuo contratto; qui la prenotazione mostrerà
**Modificata** se il fornitore segnala un cambiamento.

## Perché i clienti non possono annullare

La schermata di prenotazione di un cliente dice:

> Per annullare o modificare questa prenotazione contatta la tua agenzia: è lei ad avere il
> contratto con il fornitore ed è l'unica che può modificarla. Non chiamare direttamente l'hotel:
> una modifica fatta lì non arriverebbe a questo record.

La seconda frase è quella che conta. Una modifica concordata al banco dell'hotel non raggiunge mai
il tuo fornitore né questo record, quindi il tuo elenco prenotazioni e le aspettative del tuo
cliente divergono — e te ne accorgi al check-in.

## Se l'annullamento non riesce

Tre cose diverse possono andare storte, e la schermata dice quale. La differenza decide cosa fai
dopo, quindi leggi il testo e non il fatto che qualcosa sia diventato rosso.

| Cosa vedi | Cosa è successo | Cosa fare |
| --- | --- | --- |
| "Impossibile annullare la prenotazione." | La richiesta non è passata. | Riprova. |
| "La prenotazione non è stata annullata: il tuo fornitore ha rifiutato la richiesta (…)." | È arrivata al fornitore e lui ha rifiutato. Il codice tra parentesi è suo. | Vedi i codici sotto. |
| "Il tuo fornitore non ha risposto, quindi non possiamo dire se questa prenotazione sia stata annullata." | Ancora nessuno lo sa. Può essere andata a buon fine oppure no. | **Non riprovare.** Aspetta. |

Il terzo è quello con cui fare attenzione. Presso la maggior parte dei fornitori l'annullamento non è
idempotente, quindi annullare una seconda volta può essere addebitato una seconda volta. OneRate
verifica da sé con il tuo fornitore e lo stato qui cambia appena arriva la risposta; la cronologia lo
registra.

In tutti e tre i casi la prenotazione **non** è stata annullata, a meno che la schermata non lo dica.

### I codici di rifiuto

Il codice è mostrato esattamente come è stato prodotto, così puoi citarlo al tuo fornitore.

| Codice | Significato |
| --- | --- |
| `not_cancellable_CANCELLED` | Già annullata. Nulla da fare. |
| `not_cancellable_…` (qualsiasi altro stato) | La prenotazione non è in uno stato annullabile — per esempio un soggiorno che il fornitore non ha mai confermato. Guarda il suo stato. |
| `transition_conflict_…` | Qualcun altro ha modificato questa prenotazione mentre la annullavi. Ricaricala e leggi lo stato prima di fare altro. |
| `AUTH` | Il tuo fornitore ha rifiutato la credenziale. Controllala in **Fornitori**. |
| `VALIDATION` | Il tuo fornitore non riconosce questa prenotazione come annullabile. Contattalo con il riferimento del fornitore. |
| Qualsiasi altro | Un rifiuto del tuo fornitore. Cita loro il codice. |
