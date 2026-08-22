---
title: Impostazioni
description: Il contatto aziendale per le prenotazioni, la vostra identità e il vostro marchio, i campi dell'agenzia, le impostazioni di sicurezza, lo stato dell'abbonamento, la configurazione dell'agenzia e il fornitore di mappe.
---

Titolari e amministratori. Lasciare questa schermata con modifiche non salvate te lo chiede prima.

## Contatto aziendale per le prenotazioni

**L'impostazione da fare prima di ogni altra cosa.** Entrambi i campi sono obbligatori:

- **Email di contatto aziendale per le prenotazioni**
- **Telefono di contatto aziendale per le prenotazioni** — formato internazionale, es.
  `+902121112233`

I fornitori richiedono un contatto per la parte che prenota. Finché non esistono entrambi, **ogni
prenotazione viene rifiutata**, per ogni utente, compresi i tuoi clienti. La schermata ti avvisa
quando mancano:

> Le prenotazioni vengono rifiutate finché non aggiungi un contatto aziendale: servono sia email
> sia telefono.

Vanno compilati insieme o svuotati insieme. Non puoi salvarne uno senza l'altro, perché mezzo
contatto non è un contatto.

## Identità dell'agenzia

- **Nome dell'agenzia**
- **Marchio su questo indirizzo** — o il predefinito OneRate, o il tuo marchio white-label

Entrambi sono impostati da OneRate, non modificabili qui. Per cambiarli contatta l'assistenza
OneRate. La schermata lo dice invece di mostrarti un campo che non si salverà.

## La vostra identità, sui vostri documenti

Tutto ciò che segue è vostro da impostare e compare sui documenti che i vostri clienti conservano.

### Dati dell'agenzia

- **Ragione sociale** — la vostra società come è registrata, quando differisce dal nome con cui
  operate
- **Indirizzo**
- **Partita IVA** — un VKN in Turchia, un CUI, un NIP o una partita IVA altrove. Viene stampata, mai
  usata per calcoli, quindi sono accettate tutte
- **Licenza dell'agenzia** — in Turchia il numero TÜRSAB

Un campo lasciato vuoto **non stampa alcuna riga** sul voucher, non una riga vuota. Una riga
"Partita IVA:" vuota si legge come *nessuna*, che è un'affermazione diversa da *non indicata* — ed è
quella falsa.

Questi dati scendono ai vostri clienti: una prenotazione fatta da un vostro cliente aziendale porta
la **vostra** licenza, perché su quel documento la parte licenziata è la vostra agenzia.

### Logo dell'agenzia

**PNG o JPEG, fino a 256 KB.** Compare sui vostri voucher e nella pagina di accesso al vostro
indirizzo web.

Solo questi due formati, perché sono i due che un voucher può portare. Un formato che si vede nel
portale e sparisce dal documento sarebbe peggio di un rifiuto: nessuno se ne accorgerebbe finché un
cliente non lo chiede.

Per sostituirlo caricatene un altro; **Rimuovi il logo** torna al marchio di OneRate.

### Colore del marchio

Un colore, in esadecimale come `#0e6b5c`. Le tonalità più scure e più chiare usate per gli stati
attivi e le evidenziazioni si ricavano da esso, quindi non c'è altro da scegliere.

Un colore **illeggibile** viene rifiutato, e il messaggio lo dice:

> Questo colore non è leggibile: il testo bianco su di esso e il colore su sfondo chiaro richiedono
> almeno 4.5:1.

Non è pignoleria. Lo stesso colore dipinge un pulsante con testo bianco sopra e le parole in
evidenza su sfondo chiaro — un giallo aziendale supera la seconda prova e fallisce la prima, e il
risultato è un portale i cui pulsanti il vostro stesso personale non riesce a leggere.

### Indirizzo web

L'indirizzo di accesso della vostra agenzia: `ilvostronome.onerate.travel`.

Lettere minuscole, cifre e trattini, 3–40 caratteri. Alcuni nomi sono di OneRate e vengono
rifiutati; così come uno già usato da un'altra agenzia — il messaggio dice quale dei due.

:::caution
Cambiarlo **rende subito inutilizzabile il vecchio indirizzo**, anche su tutto ciò che avete già
stampato o inviato per email. Avvisate i vostri clienti prima, non dopo.
:::

## Campi dell'agenzia

I vostri campi sulla prenotazione: **centro di costo**, **codice progetto**, **numero d'ordine** —
ciò che serve alla vostra amministrazione per riconciliare un soggiorno.

Ogni campo ha:

- una **chiave**, che è il modo in cui il valore viene conservato e a cui è ancorata la colonna del
  report. Non è modificabile in seguito, perché ogni valore già registrato sta sotto di essa
- un'**etichetta**, che è ciò che i vostri agenti leggono sul modulo — e *questa* si può cambiare
- un **tipo**: testo, elenco fisso o data
- se è **obbligatorio** o no

Un campo **obbligatorio** rifiuta la prenotazione, prima ancora che il fornitore venga contattato.
È esattamente il suo scopo: un soggiorno senza codice è un soggiorno che qualcuno insegue due
settimane dopo, e per allora l'agente ha dimenticato quale fosse fra quaranta.

I vostri campi compaiono nella schermata di riepilogo, sulla pagina della prenotazione e come
**colonne nell'esportazione del report** — una colonna per ogni campo definito, che vi sia stato
scritto qualcosa o no, così due esportazioni dello stesso periodo hanno la stessa forma.

Anche i vostri clienti aziendali possono definire i propri; i vostri valgono anche per le loro
prenotazioni, e un campo che avete reso obbligatorio resta obbligatorio per loro. Vedi
[Clienti](/it/manage/customers/).

## Impostazioni di sicurezza

Tre impostazioni, e ognuna può solo **restringere** ciò che OneRate già richiede.

- **Chi deve usare la verifica in due passaggi** — i titolari (la soglia di OneRate), i vostri
  amministratori, o chiunque acceda. Sotto la soglia non si può andare.
- **Durata della sessione (ore)** — per quanto una sessione può lavorare prima di dover accedere di
  nuovo. Fra 1 ora e 14 giorni.
- **Indirizzi IP consentiti** — indirizzi IPv4 e intervalli CIDR, separati da virgole. Una richiesta
  da altrove viene rifiutata, **anche quella del vostro personale**.

L'IPv6 viene rifiutato anziché accettato e ignorato: un elenco che silenziosamente non corrisponde a
metà di internet vi lascerebbe credere di avere un controllo che non avete.

Valgono anche per le vostre chiavi API — una chiave è comunque traffico della vostra agenzia. Vedi
[Integrazioni](/it/manage/integrations/).

## Abbonamento

Lo stato del tuo abbonamento: **Attivo**, **Prova**, **Pagamento in ritardo** o **Annullato**. Solo
titolari.

Se non è visibile, il portale lo dice chiaramente e ti indirizza a OneRate invece di tirare a
indovinare.

Lo stato dell'abbonamento condiziona **l'accesso**, mai una prenotazione già in corso. Una
prenotazione in corso quando un abbonamento scade non viene abbandonata a metà.

## Valuta di vendita

La valuta in cui la tua agenzia vende — un codice ISO-4217 di tre lettere, `EUR`, `TRY`, `USD`.

Cambiarla cambia la valuta in cui la tua agenzia vende, non solo il modo in cui i prezzi vengono
mostrati, e **nulla viene convertito**. Leggi [Prezzi e margine](/it/manage/pricing/) prima di
cambiarla.

## Mappa

I risultati di ricerca possono essere disegnati su una mappa. Per impostazione predefinita è
**Google Maps**, disegnata con la chiave di OneRate: niente da configurare e niente a carico della tua
agenzia.

**Fornitore della mappa** permette alla tua agenzia di scegliere invece **OpenStreetMap**. La scelta
vale per ogni agente della tua agenzia e per i portali dei tuoi clienti.

**Attualmente in uso** indica la mappa in vigore. Se dice **OpenStreetMap (temporaneo)**, hai scelto
Google e OneRate al momento non può disegnarla: il portale resta su OpenStreetMap finché non sarà
possibile. Non c'è nulla da sistemare; la tua scelta è conservata.

## Configurazione dell'agenzia

Un elenco di valori risolti per la tua agenzia. Ognuno mostra da dove viene il suo valore attuale:

| Origine | Significato |
| --- | --- |
| **Impostazione della tua agenzia** | L'hai impostata tu. |
| **Ereditata da {org}** | Viene dalla tua agenzia capogruppo. |
| **Valore predefinito della piattaforma OneRate** | Il valore di OneRate, usato finché non imposti il tuo. |
| **Non impostato — OneRate non ha un valore per questo** | Nulla sta funzionando su questo valore. |
| **Non impostato — richiesto prima che {capability}** | Qualcosa è bloccato finché non lo imposti. Il messaggio dice che cosa. |

La regola di risoluzione: **vince la tua impostazione, poi quella della capogruppo, poi il valore
predefinito di OneRate.** Azzerare il tuo override ricade sul valore della capogruppo, non su quello
di OneRate.

Fra i valori che vedrai qui: la lingua predefinita del portale, l'email di assistenza per i
viaggiatori, il contatto aziendale, le quote di richieste ai fornitori, il tempo massimo di ricerca,
l'anticipo del promemoria di annullamento, la validità degli inviti, la durata della cache tariffe,
la conservazione dei dati degli ospiti, il margine predefinito e la valuta di vendita.

Non tutti sono modificabili qui. Le impostazioni diventano modificabili man mano che escono le
funzioni che le usano; la schermata dice quale è quale invece di mostrare campi morti.

:::caution
Se vedi *"un'impostazione salvata è sconosciuta o non valida"*, contatta l'assistenza OneRate.
**Non è stato sostituito alcun valore predefinito** — il portale si rifiuta di indovinare un valore
che non riesce a leggere, invece di funzionare su un numero che nessuno ha scelto.
:::

### Due che vale la pena conoscere

- **Conservazione dei dati degli ospiti (giorni)** — per quanto tempo i nomi degli ospiti e i dati
  del fornitore restano su una prenotazione prima di essere cancellati automaticamente. La
  cancellazione rimuove la persona; stato, date e importi della prenotazione restano per i tuoi
  report. Puoi anche cancellare una singola prenotazione a mano — vedi
  [Le tue prenotazioni](/it/booking/your-bookings/).
- **Anticipo del promemoria di annullamento (ore)** — con quanto anticipo vieni avvisato prima che
  si chiuda una finestra di cancellazione gratuita. 48 ore se non lo cambi.

## Valori che solo la tua agenzia può conoscere

Alcune impostazioni **non** hanno un valore predefinito OneRate e non lo avranno mai — la quota di
richieste del tuo contratto fornitore, la tua valuta di vendita, il tuo contatto per le prenotazioni.

OneRate non li inventa, per quanto prudente possa sembrare un valore inventato, perché un contatto
sbagliato non è un contatto prudente, è un contatto sbagliato. Dove un valore del genere manca, la
funzionalità che ne ha bisogno resta spenta e il portale nomina sia il valore sia dove impostarlo. È
per questo che un fornitore non può essere abilitato prima che esista la sua quota.
