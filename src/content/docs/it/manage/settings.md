---
title: Impostazioni
description: Il contatto aziendale per le prenotazioni, l'identità e il marchio dell'agenzia, lo stato dell'abbonamento, la configurazione dell'agenzia e il fornitore di mappe.
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
**OpenStreetMap**, che non ti costa nulla e non richiede configurazione.

Se la tua agenzia ha una propria **chiave API di Google Maps**, puoi usare la mappa di Google. Le
tile vengono fatturate sul tuo account Google, sul tuo contratto — OneRate non applica alcun limite
proprio, quindi imposta quote e avvisi di budget sulla chiave nella console Google Cloud.

Per usarla:

1. Inserisci la chiave. Viene verificata con Google prima di essere salvata, è cifrata a riposo e
   non viene mai inviata al tuo browser.
2. Se Google la rifiuta, non viene salvata — verifica che l'**API Map Tiles** sia abilitata per
   quella chiave.
3. Passa fra **OpenStreetMap** e **Google Maps** quando vuoi; **Rimuovi la chiave** per tornare
   indietro definitivamente.

Se in seguito Google rifiuta una chiave che funzionava, il portale torna a OpenStreetMap e te lo
dice, invece di mostrarti una mappa vuota.

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
