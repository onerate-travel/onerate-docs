---
title: Le tue prenotazioni
description: Trovare una prenotazione, che cosa registra la pagina di dettaglio, approvazione, opzioni, voucher, promemoria di annullamento e cancellazione dei dati degli ospiti.
---

## L'elenco

**Prenotazioni** contiene ogni prenotazione fatta dalla tua agenzia, con qualsiasi fornitore.

Filtra e trova:

- **Stato** — uno stato, o tutti
- **Check-in dal / al** — un intervallo di date sul soggiorno, non su quando è stato prenotato
- **Trova** — testo libero su nome dell'ospite, hotel e riferimento di conferma del fornitore

Colonne: hotel, ospite, soggiorno, fornitore, stato, prezzo di vendita, creata. Il totale sta sopra
l'elenco, e gli elenchi lunghi vengono paginati.

Una prenotazione i cui dati ospite sono stati cancellati mostra *dati ospite cancellati* al posto
del nome. La prenotazione in sé resta.

:::note
**Prenotazioni clienti** è una schermata separata: prenotazioni fatte dagli utenti dei tuoi clienti.
Stesse colonne più il cliente a cui appartiene, e un filtro per quello. I clienti stessi vedono solo
le proprie prenotazioni, sulla propria schermata.
:::

## La pagina di dettaglio

Apri una prenotazione per vedere tutto quello che è stato registrato su di essa.

### La prenotazione

Hotel, stato, fornitore, **riferimento di conferma**, check-in, check-out, ospite principale,
prezzo di vendita, la **filiale** che l'ha presa e **chi** l'ha presa.

Se la vostra agenzia ha [campi dell'agenzia](/it/manage/settings/#campi-dellagenzia), i valori
registrati su questa prenotazione compaiono in una sezione propria. Sono quelli registrati **in quel
momento**: un campo definito in seguito qui è vuoto, e uno nel frattempo ritirato mostra ancora con
cosa era stata codificata.

Il riferimento di conferma è quello del fornitore — è ciò che identifica la prenotazione presso di
lui se dovessi telefonare.

### Costi e penali

Questa sezione non è mostrata ai clienti.

| Riga | Che cos'è |
| --- | --- |
| **Quotato al momento della prenotazione** | Il prezzo netto del fornitore nell'istante in cui hai confermato. |
| **Confermato dal fornitore** | Quello con cui il fornitore è effettivamente tornato. |
| **Penale di annullamento prevista** | Quanto costerebbe annullare adesso, secondo la policy salvata al momento della prenotazione. |
| **Prezzo di vendita** | A quanto l'hai venduta — netto più il tuo margine. |

Se i primi due differiscono, la pagina lo dice:

> Il fornitore ha confermato un importo diverso da quello quotato. Hai venduto sulla base della
> quotazione.

È un evento reale su cui vale la pena agire, non un artefatto di arrotondamento. Il tuo margine su
quella prenotazione non è quello che pensavi.

### Perché questo fornitore

Lo stesso registro che offre la schermata dei risultati, conservato con la prenotazione: quali
offerte sono state considerate e che cosa ha deciso. Resta disponibile molto dopo che la sessione di
ricerca è finita.

### Cronologia

Ogni stato attraversato dalla prenotazione, in ordine, con gli orari. È il primo posto dove
guardare quando una prenotazione ha fatto qualcosa che non ti aspettavi.

## Approvazione

La vostra agenzia può fissare un tetto a quanto ogni collega può impegnare
[da solo](/it/manage/team/#che-cosa-può-impegnare-da-solo-ogni-collega). Una prenotazione sopra quel
tetto viene **trattenuta**: compare nel vostro elenco come **In attesa di approvazione**, e al
fornitore non è stato inviato nulla — nessuna camera occupata, nessuna tariffa bloccata, e niente da
annullare perché ancora non esiste niente.

La pagina della prenotazione lo dice a chiunque possa vederla. Se potete approvare prenotazioni,
porta anche due pulsanti:

- **Approva e prenota** — la prenotazione viene fatta *adesso*, alla tariffa di quel momento. Passa
  dai controlli ordinari, quindi se il prezzo si è mosso durante l'attesa ricevete la domanda sul
  prezzo cambiato invece di una prenotazione silenziosa al nuovo importo.
- **Rifiuta** — la richiesta si chiude. La vostra nota finisce sulla cronologia della prenotazione,
  dove la legge il collega che l'aveva chiesta.

Quando la prenotazione viene fatta, chi può approvarla riceve un'email: l'importo, l'hotel e chi ha
chiesto — abbastanza per rispondere senza aprire il portale.

**Un'offerta non aspetta per sempre.** Se nessuno risponde prima che la tariffa scada, la prenotazione
fallisce da sola e la sua cronologia dice che l'offerta è scaduta, non che qualcuno l'ha rifiutata.
Approvare dopo quel momento non resuscita la tariffa — il fornitore viene interrogato di nuovo, e
risponde di nuovo.

## Opzioni

Un'**opzione** è una prenotazione che tenete mentre il vostro cliente decide.

È una prenotazione reale su una tariffa rimborsabile, più una data che avete deciso voi. Nessun
fornitore con cui OneRate lavora offre un blocco proprio — ciò che il prodotto aggiunge è che la
scadenza è visibile e viene gestita, invece di vivere nell'agenda di qualcuno.

Una prenotazione tenuta in opzione mostra un pannello che lo dichiara, con due pulsanti:

- **Conferma** — l'opzione resta come prenotazione ordinaria. All'hotel non cambia nulla; era già
  reale.
- **Rilascia** — la prenotazione viene annullata. Passa dalla stessa conferma di qualsiasi altro
  annullamento e cita la stessa penale, perché rilasciare un'opzione *è* annullare una prenotazione.

La scadenza è limitata dalla finestra di cancellazione gratuita della tariffa stessa, meno un giorno.
Una tariffa senza finestra gratuita non può essere tenuta affatto: «tenere» significherebbe
«prenotare e pagare la penale dopo», che è una prenotazione — e questo va detto, non venduto come
parola.

La sera prima della scadenza, chi ha preso la prenotazione riceve un'email. Cosa succede se nessuno
risponde è una scelta della vostra agenzia, in
[Impostazioni](/it/manage/settings/#configurazione-dellagenzia): **promemoria** continua ad avvisare
e non annulla mai, **rilascio** restituisce la camera. Un'agenzia che non ha dichiarato nulla ottiene
**promemoria**, perché un annullamento sbagliato è denaro vero.

Il voucher di un'opzione aperta dichiara che lo è, così un cliente che lo ha in mano non può
scambiarlo per un soggiorno definito.

## Voucher

**Scarica il voucher** ti dà il PDF. **Invia il voucher via email** lo spedisce.

### Che cosa contiene

Il voucher è il documento che il tuo ospite consegna al ricevimento, quindi descrive il soggiorno
come è stato venduto: il riferimento di conferma del fornitore, tutti gli ospiti, l'hotel con il
proprio indirizzo e telefono, la camera, il trattamento, le date, le condizioni di cancellazione
come erano al momento della prenotazione, quanto è dovuto in hotel e l'identità e il logo della tua
agenzia.

Una riga compare solo se il fornitore l'ha indicata. Un hotel che non invia un numero di telefono
produce un voucher senza la riga del telefono, non con una riga vuota: un "da pagare in hotel"
vuoto si legge come "non c'è nulla da pagare", ed è il modo più costoso di sbagliare. Quanto è
dovuto al ricevimento è elencato per valuta e mai sommato, perché un totale fra due valute è un
numero che nessuno può pagare.

Il pulsante è sostituito da una frase quando non c'è voucher, e la frase dice perché:

| Messaggio | Perché |
| --- | --- |
| "Questa prenotazione non è confermata, quindi non è stato emesso alcun voucher." | I voucher esistono solo per le prenotazioni confermate. |
| "Non si sa ancora se questa prenotazione sia arrivata al fornitore…" | La prenotazione è ancora in riconciliazione. |
| "Questa prenotazione è annullata e non è disponibile alcun voucher." | Annullata. |
| "I dati degli ospiti di questa prenotazione sono stati cancellati e con essi anche il voucher." | Il voucher portava il nome dell'ospite, quindi è sparito con la cancellazione. |

## Cancellare i dati degli ospiti

Titolari e amministratori possono cancellare definitivamente i dati personali su una prenotazione —
il nome dell'ospite e i dati del fornitore registrati su di esso — e il voucher viene cancellato con
essi.

**Non si può annullare.** La prenotazione in sé resta a registro: il suo stato, le sue date e i suoi
importi, così i tuoi report e la tua contabilità restano intatti. Viene rimossa solo la persona.

Se la finestra di conferma viene interrotta, eseguila di nuovo. La cancellazione è sicura da
ripetere e porta a termine il lavoro.

La tua agenzia ha anche un **periodo di conservazione dei dati degli ospiti** in
[Impostazioni](/it/manage/settings/), dopo il quale questo avviene automaticamente. Cancellare a
mano serve per una richiesta che arriva prima.

## Promemoria di annullamento

OneRate sorveglia le scadenze di cancellazione gratuita sulle tue prenotazioni confermate e ti
avvisa prima che una si chiuda. L'anticipo è un'impostazione della tua agenzia — 48 ore se non l'hai
cambiata.

È la funzione che ti evita di pagare una penale su un soggiorno che l'ospite ha lasciato cadere la
settimana scorsa.

## Poi

- [Annullare una prenotazione](/it/booking/cancelling/)
- [Stati della prenotazione](/it/booking/statuses/) — compreso che cosa fare con una in verifica
