---
title: Prenotare un soggiorno
description: I nomi degli ospiti, la schermata di riepilogo, la conferma e che cosa fare quando il prezzo cambia tra la tua quotazione e la prenotazione.
---

## Prima della tua prima prenotazione

Una prenotazione viene rifiutata finché la tua agenzia non ha un **contatto aziendale per le
prenotazioni** — sia un indirizzo email sia un numero di telefono — salvato in
[Impostazioni](/it/manage/settings/). I fornitori richiedono un contatto per la parte che prenota;
inventarne uno non è un'opzione.

Se manca vedrai:

> Prenotazione non riuscita: aggiungi un contatto aziendale in Impostazioni per poter prenotare.

I clienti vedono la stessa cosa formulata per loro: *chiedi alla tua agenzia di aggiungere un
contatto aziendale per le prenotazioni.*

Solo un titolare o un amministratore può aggiungerlo, e va fatto una volta sola.

## Scegliere una tariffa

Apri un hotel dai risultati. La pagina riquota il soggiorno presso il fornitore in quel momento ed
elenca ogni opzione tariffaria — trattamento, rimborsabilità, scadenza di cancellazione, totale.

Se hai scelto una tariffa sulla scheda dei risultati, la pagina si apre **su quella tariffa**. Il
ricalcolo è una nuova chiamata al fornitore, quindi può non esserci più; la pagina lo dice e mostra
la più economica, invece di mettere un'altra camera sotto le condizioni che hai scelto.

Se la tariffa è quotata in una valuta diversa dalla tua valuta di vendita, la pagina lo dice:

> Quotato in USD, non nella tua valuta di vendita EUR. Questa tariffa è prenotabile, ma OneRate non
> converte tra valute: l'importo qui sopra è quello che addebita il fornitore, nella sua valuta.

Premi **Prenota** sulla tariffa che vuoi.

## Dati degli ospiti

L'**ospite principale** — nome e cognome — è obbligatorio. È il nome sotto cui il fornitore
prenota, quindi deve essere il nome sul passaporto o sul documento che l'ospite presenterà in hotel.

Sotto puoi nominare **ogni** ospite, adulti e bambini, camera per camera.

:::note
Se lasci un ospite in bianco, per lui non viene inviato nulla. Al fornitore non viene **mai** dato
un nome inventato. Questo conta negli hotel che registrano ogni ospite per nome.
:::

## La schermata di riepilogo

Prima che qualcosa raggiunga il fornitore compare **Conferma questa prenotazione**. Si apre sopra la
pagina come finestra di dialogo, con il fuoco sul suo titolo, e ci resta finché non rispondi:
qualunque cosa produca il tentativo — una conferma, un rifiuto, un prezzo che si è mosso — viene
mostrata **al suo interno**, accanto ai dati a cui si riferisce e senza perdere i nomi digitati.

| | |
| --- | --- |
| Hotel | la struttura |
| Trattamento | che cosa è incluso |
| Occupazione | adulti e bambini |
| Notti | durata del soggiorno |
| Totale | a quanto lo stai vendendo, nella tua valuta di vendita |
| Cancellazione gratuita | la scadenza, oppure che non ce n'è |

Leggi la riga della cancellazione. È l'ultimo punto in cui cambiare idea sulle condizioni costa
poco.

### I campi della vostra agenzia

Se la vostra agenzia ha definito [campi dell'agenzia](/it/manage/settings/#campi-dellagenzia) — un
centro di costo, un codice progetto, un numero d'ordine — compaiono qui, sopra il riquadro delle
richieste. Un campo contrassegnato con `*` è **obbligatorio**, e senza di esso la prenotazione viene
rifiutata prima che qualsiasi cosa raggiunga il fornitore.

Sono la codifica della prenotazione secondo la vostra agenzia: non vengono mai inviati all'hotel o al
fornitore, compaiono poi sulla pagina della prenotazione stessa e diventano colonne
nell'[esportazione dei report](/it/manage/reports/#esportazione).

Premi **Conferma e prenota**, oppure **Torna ai risultati**.

## Quando il prezzo cambia

I fornitori riquotano al momento della prenotazione. Tra l'elenco dei risultati e la tua conferma,
la tariffa può muoversi.

Se è successo, OneRate **si ferma** e chiede:

> Il prezzo è cambiato in €412,00. Conferma per prenotare al nuovo prezzo.

Ti vengono mostrati sia il prezzo che ti era stato quotato sia quello nuovo, e scegli **Conferma il
nuovo prezzo** oppure **Rifiuta**. Nulla viene prenotato mentre la domanda è aperta, e rifiutando
non si prenota nulla.

È per questo che esiste la schermata di riepilogo. Il portale non prenoterà in silenzio a un prezzo
che non hai accettato.

## Se la tariffa è sparita

Una tariffa può esaurirsi tra la ricerca e la prenotazione. La prenotazione fallisce in modo
pulito — nulla è prenotato, nulla è addebitato — e torni ai risultati per scegliere l'opzione
successiva.

## Che cosa succede dopo la conferma

La prenotazione attraversa una sequenza: il prezzo viene ricontrollato, la prenotazione viene
inoltrata al fornitore e il risultato viene registrato. Poi il voucher viene generato e l'email di
conferma viene inviata.

La maggior parte delle prenotazioni arriva a **Confermata** in pochi secondi. Ogni esito possibile,
compresi quelli che non si risolvono subito, è descritto in
[Stati della prenotazione](/it/booking/statuses/).

:::caution
**Se l'esito di una prenotazione non è noto, non prenotarla di nuovo.** Un timeout del fornitore
significa *sconosciuto*, non *fallito* — il fornitore potrebbe benissimo averla presa. OneRate
ricontrolla automaticamente. Prenotare una seconda volta è il modo in cui un'agenzia finisce per
pagare due camere. Vedi [Stati della prenotazione](/it/booking/statuses/).
:::

## Rifiuti che potresti vedere

| Che cosa vedi | Che cosa significa | Che cosa fare |
| --- | --- | --- |
| "Prenotazione non riuscita: aggiungi un contatto aziendale in Impostazioni" | La tua agenzia non ha un contatto per le prenotazioni. | Un titolare o un amministratore lo aggiunge in [Impostazioni](/it/manage/settings/). |
| "Inserisci nome e cognome dell'ospite principale prima di prenotare." | L'ospite principale è incompleto. | Compila entrambi i campi. |
| "Troppi tentativi di prenotazione in poco tempo." | Limitazione delle richieste. | Aspetta. Riprovare subito verrà rifiutato allo stesso modo. |
| "Quella chiave di prenotazione è già stata usata per un'altra prenotazione." | Questo modulo di prenotazione è già stato usato per prenotare altro. | Avvia una nuova ricerca. Nulla è stato prenotato due volte — questo messaggio è la protezione che funziona. |
| "Prenotazione non riuscita. Riprova." | Un errore generico. | Controlla [Prenotazioni](/it/booking/your-bookings/) **prima** di riprovare, per confermare che non sia stato creato nulla. |
| "Un campo obbligatorio manca o non è valido." | Uno dei campi della vostra agenzia è vuoto o non rispetta la sua definizione. | Completatelo nella schermata di riepilogo. Nulla è stato prenotato. |
| "Questa prenotazione porterebbe il cliente oltre il suo tetto di prenotazioni aperte." | Il cliente ha un [tetto](/it/manage/customers/#tetto-delle-prenotazioni-aperte) su quanto può tenere aperto, e questa prenotazione lo supera. | Parlate con l'agenzia. Il tetto scende man mano che i soggiorni si concludono e le prenotazioni vengono annullate. |

## Quando la prenotazione ha bisogno di un'approvazione

Se la vostra agenzia ha fissato un tetto a quanto potete impegnare
[da soli](/it/manage/team/#che-cosa-può-impegnare-da-solo-ogni-collega), una prenotazione superiore
non viene fatta — viene **trattenuta**. La schermata lo dice, al fornitore non arriva nulla, e chi
può approvarla riceve un'email.

Non c'è nulla da correggere: non è un rifiuto e l'offerta non è persa. Seguite la prenotazione in
[Prenotazioni](/it/booking/your-bookings/#approvazione) — resta **In attesa di approvazione** finché
qualcuno non risponde, e fallisce da sola se la tariffa scade prima.

## Perché non puoi prenotare due volte per sbaglio

Ogni tentativo di prenotazione porta con sé una chiave generata quando hai aperto il modulo. Se la
stessa chiave arriva due volte — un doppio clic, una richiesta ripetuta, una connessione instabile
— la seconda viene riconosciuta e rifiutata invece che eseguita.

È questo che ti sta dicendo "quella chiave di prenotazione è già stata usata". Non è un errore nel
tuo lavoro.
