---
title: Risoluzione dei problemi
description: I messaggi che il portale mostra, che cosa significa davvero ciascuno e che cosa farci.
---

## Prima di tutto, quello che conta di più

:::danger
**Una prenotazione *In riconciliazione* ha un esito sconosciuto, non fallito.** Il fornitore
potrebbe averla presa. Non prenotare di nuovo lo stesso soggiorno — prenota un hotel diverso o una
tariffa diversa se l'ospite ha bisogno di una camera adesso.
[Spiegazione completa](/it/booking/statuses/).
:::

## Accesso

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "Email e password non corrispondono." | Uno dei due è sbagliato; il messaggio è lo stesso in entrambi i casi, di proposito. | Controllali entrambi. |
| "Codice di verifica non accettato." | I codici cambiano ogni 30 secondi. | Inserisci quello attuale. Se continua a fallire, attiva data e ora automatiche sul telefono. |
| "Troppi tentativi." | Limitazione delle richieste. | Aspetta un minuto. |
| "Questo account al momento non può accedere." | Account sospeso, o abbonamento non attivo. | Chiedi all'amministratore della tua agenzia. |
| "Non siamo riusciti a raggiungere OneRate." | La tua rete. | Controlla la connessione. **Non** hai effettuato l'accesso; nulla è cambiato. |
| "La tua sessione è terminata." | La sessione è scaduta con la scheda aperta. | Accedi di nuovo. Il lavoro non salvato su quella schermata è perso. |
| "Questo link di invito non è valido o è scaduto." | Scaduto, revocato o già usato. | Chiedine uno nuovo — chi te l'ha mandato può rinviarlo da Team. |
| "Questo invito è legato a questo indirizzo email." | Hai fatto l'accesso come qualcun altro. | Esci, poi registrati con l'indirizzo invitato. |

## Ricerca

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "Questa destinazione non ci risulta." | Hai digitato invece di scegliere un suggerimento. | Scegline uno dall'elenco. |
| "Indica l'età di ogni bambino." | I fornitori calcolano il prezzo sull'età del bambino. | Inserisci ogni età. |
| "Il check-in è nel passato." / "Il check-out deve essere successivo al check-in." | Date non valide. | Correggile. |
| "Troppe ricerche in poco tempo." | Limitazione delle richieste, a protezione della tua quota fornitore. | Aspetta un momento. |
| "Il modulo di ricerca è cambiato. Questi prezzi valgono ancora per i criteri qui sopra…" | I risultati appartengono ai vecchi criteri. | Cerca di nuovo. I prezzi non vengono mai ricalcolati nel browser. |
| "Risultati parziali — X ha smesso di rispondere…" | Un fornitore ha risposto in modo incompleto. | Alcuni hotel mancano. Cerca di nuovo se è importante. |
| "Nessun hotel trovato per questa ricerca." | Nulla disponibile — **leggi la riga di stato dei fornitori**. | Se un fornitore mostra **Non riuscito**, questa non è una risposta completa. Riprova. |
| "Non è stato possibile raggiungere il fornitore della mappa…" | La tua chiave Google Maps o Google stesso non era raggiungibile. | Di solito è passeggero. Se persiste, controlla la chiave in [Impostazioni](/it/manage/settings/). |

### "Dice che non c'è disponibilità, ma io so che c'è"

Nell'ordine:

1. **Leggi la riga di stato per fornitore.** Un fornitore **Non riuscito** o **Parziale** significa
   che non hai avuto una risposta completa.
2. **Controlla che il fornitore sia abilitato** nella schermata [Fornitori](/it/manage/suppliers/), e
   che la sua **Salute** non sia **Non disponibile**.
3. **Controlla la destinazione.** Un *luogo del fornitore* raggiunge un solo fornitore; una città di
   catalogo li raggiunge tutti.
4. **Controlla la sezione valuta.** Le offerte quotate in un'altra valuta sono sotto l'elenco
   principale, non dentro di esso.
5. **Controlla i tuoi filtri.** Il conteggio ti dice quanti ne ha trovati davvero la ricerca —
   *"0 di 48"* è un problema di filtro, non di ricerca.
6. **Controlla il filtro stelle.** Gli hotel senza categoria sono esclusi da *qualsiasi* scelta di
   stelle.

## Prenotazione

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "aggiungi un contatto aziendale in Impostazioni per poter prenotare" | Nessun contatto per le prenotazioni per l'agenzia. | Un titolare o un amministratore aggiunge email **e** telefono in [Impostazioni](/it/manage/settings/). |
| "Inserisci nome e cognome dell'ospite principale" | Ospite principale incompleto. | Compila entrambi. |
| "Il prezzo è cambiato in …" | Il fornitore ha riquotato. | Conferma il nuovo prezzo, oppure rifiuta. Nulla viene prenotato mentre decidi. |
| "Questo hotel al momento non ha tariffe per queste date." | La tariffa è esaurita o il link è vecchio. | Cerca di nuovo. |
| "A questo link manca qualcosa che ci serve per quotare il soggiorno." | Un link all'hotel troncato o modificato a mano. | Torna indietro e cerca di nuovo. |
| "Quella chiave di prenotazione è già stata usata per un'altra prenotazione." | La protezione contro la doppia prenotazione che funziona. | Avvia una nuova ricerca. Nulla è stato prenotato due volte. |
| "Troppi tentativi di prenotazione in poco tempo." | Limitazione delle richieste. | Aspetta. Riprovare adesso viene rifiutato allo stesso modo. |
| "Prenotazione non riuscita. Riprova." | Un errore generico. | **Controlla prima [Prenotazioni](/it/booking/your-bookings/)** per confermare che non sia stato creato nulla, poi riprova. |

## Prenotazioni e annullamento

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "Impossibile annullare la prenotazione." | Il fornitore ha rifiutato o non ha risposto. **Non** è annullata. | Non ripeterlo alla cieca — presso la maggior parte dei fornitori l'annullamento non è idempotente. Controlla la cronologia, poi contatta il fornitore. |
| "La penale di annullamento non è ancora nota…" | Il fornitore non ne ha indicata una. | La stabiliscono le sue condizioni. Verrà registrata quando sarà nota. |
| "Il fornitore ha confermato un importo diverso da quello quotato." | Il netto si è mosso fra quotazione e conferma. | Il tuo margine reale su quella prenotazione è diverso. Portalo al fornitore. |
| "Questa prenotazione non è più in verifica: qualcun altro l'ha chiusa prima." | Un collega è arrivato prima. | Ricarica. Nulla è stato sovrascritto. |
| "Impossibile cancellare i dati degli ospiti." | La cancellazione può essere parziale. | Eseguila di nuovo — è sicura da ripetere. |
| "Stima: questo fornitore non indica un fuso orario…" | La scadenza è il primo momento in cui potrebbe cadere. | Trattala come l'ultimo momento sicuro. Annulla prima, mai in corrispondenza. |
| "Non confermata: questa prenotazione è stata registrata prima…" | Una prenotazione vecchia. | Verifica con il fornitore prima di fidarti della scadenza. |

## Fornitori e impostazioni

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "…la chiave è stata rifiutata" | Sbagliata, scaduta o dell'**ambiente** sbagliato. | Controlla sandbox contro produzione, poi sostituisci la chiave. |
| "…il fornitore ci sta limitando le richieste" / "non ha risposto in tempo" / "non è stato possibile raggiungerlo" | **La chiave potrebbe benissimo essere valida.** | Aspetta e riprova. Non sostituire una chiave funzionante per un'interruzione del fornitore. |
| "La nuova chiave non è stata accettata; resta in uso quella vecchia." | La sostituzione non è riuscita. | Nulla è rotto. Controlla la nuova chiave e riprova. |
| Salute: **Non disponibile** | OneRate ha sospeso le chiamate dopo errori ripetuti. | Si sblocca da solo. Evita che ogni ricerca aspetti un timeout. |
| "Non impostato — richiesto prima che un fornitore possa essere abilitato" | Manca un valore che solo la tua agenzia può conoscere. | Impostalo dove indica il messaggio. OneRate non lo inventerà. |
| "un'impostazione salvata è sconosciuta o non valida" | La tua configurazione non può essere letta, e **non è stato sostituito alcun valore predefinito**. | Contatta l'assistenza OneRate. |
| "Email e telefono vanno compilati insieme, oppure svuotati insieme." | Mezzo contatto non è un contatto. | Compilali entrambi, o svuotali entrambi. |
| "Google ha rifiutato questa chiave" | La chiave è sbagliata o l'**API Map Tiles** non è abilitata per essa. | Sistemala nella console Google Cloud e inseriscila di nuovo. |

## Report

| Messaggio | Significato | Che cosa fare |
| --- | --- | --- |
| "X prenotazione/i sono quotate in … e NON sono incluse nei totali in …" | Le prenotazioni in altra valuta sono escluse invece che convertite. | Gestiscile a parte. Se succede in ogni report, controlla la tua [valuta di vendita](/it/manage/pricing/). |
| "Sono mostrate solo le prime N prenotazioni, e i totali qui sopra riguardano solo quelle." | L'intervallo è stato limitato. **I totali sono solo delle righe mostrate.** | Restringi l'intervallo di check-in e rilancia. |

## Ancora bloccato

- Una parola che non riconosci → [Glossario](/it/reference/glossary/)
- Qualcosa che il tuo ruolo non può fare → [Ruoli e permessi](/it/start/roles/)
- Qualsiasi altra cosa → il titolare o l'amministratore della tua agenzia, e poi OneRate a
  [hello@onerate.travel](mailto:hello@onerate.travel).

Quando scrivi, includi il **riferimento di conferma della prenotazione** oppure l'**hotel e le date**
della ricerca. Sono quelli che permettono a chiunque di trovare lo stesso record che stai guardando.
