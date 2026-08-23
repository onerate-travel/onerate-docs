---
title: Clienti
description: Permettere ai vostri clienti aziendali di prenotare da soli sui vostri contratti fornitore, i ruoli dentro un cliente, le fasce di prezzo, i tetti delle prenotazioni aperte — e che cosa esattamente possono e non possono vedere.
---

Un **cliente** è uno dei tuoi clienti aziendali, configurato in OneRate perché le sue persone
possano cercare e prenotare sui *tuoi* contratti fornitore, ai *tuoi* prezzi.

Li configurano titolari e amministratori.

## Perché farlo

L'alternativa è che il tuo agente prenda la richiesta per telefono o via email e la digiti. Se un
cliente prenota abbastanza, lasciarglielo fare da sé elimina quel passaggio senza cedere nulla — i
tuoi contratti, i tuoi fornitori e le tue tariffe nette restano tuoi.

## Configurarne uno

1. **Clienti → Aggiungi un cliente.** Dagli il nome dell'azienda.
2. Aprilo e usa **Invita**: inserisci l'indirizzo email della persona e premi **Invita**.
3. Copia il link di invito e mandaglielo. Entrano dopo averlo aperto e aver completato la
   registrazione.

Sotto **{nome} — persone** vedi tutti: **Iscritto** per chi ha accettato, **Invitato** per chi è in
sospeso. Puoi **Copiare il link** di nuovo oppure **Revocare** un invito — la revoca ferma
immediatamente il funzionamento del link.

Un invito già accettato non può essere revocato; rimuovi invece la persona dal cliente.

## I tre ruoli dentro un cliente

| Ruolo | Vede | Può anche |
| --- | --- | --- |
| **Organizzatore** | Le prenotazioni della sua azienda | Prenotare per chiunque nella sua azienda |
| **Viaggiatore** | **Solo le prenotazioni che ha fatto lui** | — |
| **Amministratore del cliente** | Le prenotazioni della sua azienda | Invitare i propri colleghi e gestire le impostazioni della propria azienda |

L'organizzatore è il predefinito, ed è ciò che ogni utente cliente era prima che gli altri due
esistessero.

Date **viaggiatore** a chi prenota solo i propri viaggi: la prenotazione di un collega non compare
affatto nel suo elenco, e aprendola dal link gli viene detto che non esiste, non che non può vederla.

Date **amministratore del cliente** alla persona di quell'azienda che dovrebbe fare questo lavoro al
posto vostro: invitare i propri colleghi e definire i propri campi. Non raggiunge nulla della vostra
agenzia; il confine è l'azienda, non il ruolo.

Nessuno dei tre può annullare, e nessuno vede mai il nome di un fornitore o il vostro netto.

## Che cosa vede un utente cliente

| Vede | Non vede |
| --- | --- |
| Hotel e disponibilità | Da quale fornitore arrivava la tariffa |
| Prezzi **con il tuo margine applicato** | La tua tariffa netta fornitore |
| Le proprie prenotazioni | Qualsiasi altra prenotazione, nella tua agenzia o nella sua stessa azienda |
| I propri voucher e dettagli di conferma | I tuoi report, fornitori, team o impostazioni |

L'identità del fornitore è rimossa da tutto quello che toccano — i risultati, la prenotazione, la
pagina di dettaglio. Non c'è espansore, traccia o riferimento che la lasci trapelare.

**Non possono nemmeno annullare.** La loro pagina di prenotazione dice di contattarti e li avverte
di non chiamare direttamente l'hotel:

> Per annullare o modificare questa prenotazione contatta la tua agenzia: è lei ad avere il
> contratto con il fornitore ed è l'unica che può modificarla. Non chiamare direttamente l'hotel:
> una modifica fatta lì non arriverebbe a questo record.

## Che cosa vedi tu

**Prenotazioni clienti** elenca ogni prenotazione fatta dagli utenti di ogni cliente, con un filtro
per cliente. Ha le stesse colonne delle tue prenotazioni più il cliente, e la pagina di dettaglio di
ogni prenotazione è quella completa — fornitore, netto, penali e tutto il resto.

Annullare la prenotazione di un cliente è compito tuo, da quella pagina.

## Prezzi per un cliente

I clienti fanno parte della catena della tua organizzazione, quindi il tuo
[margine](/it/manage/pricing/) e la configurazione della tua agenzia scendono a loro per
impostazione predefinita. Un cliente può avere il proprio margine — utile quando un cliente ha
condizioni commerciali diverse — e vince il livello più vicino che ha un valore.

Azzerare il margine di un cliente ricade su quello della tua agenzia, non su zero.

### Fasce di prezzo

Se applicate lo stesso prezzo a gruppi di clienti — "A bayileri" a una percentuale, "B bayileri" a
un'altra — metteteli in una **fascia di prezzo** invece di ripetervi. La colonna della fascia è in
questa schermata; le fasce stesse sono in [Prezzi](/it/manage/pricing/#fasce-di-prezzo).

La fascia si colloca **fra** il margine proprio del cliente e quello della vostra agenzia: un cliente
con la propria percentuale la mantiene, e tutti gli altri nella fascia ricevono quella della fascia.

Un cliente appartiene al massimo a una fascia. Spostarlo fra fasce è lo stesso menu a tendina.

## Tetto delle prenotazioni aperte

Potete limitare quanto un cliente può avere **aperto** alla volta. La colonna è in questa schermata:
un importo nella vostra valuta di vendita, o vuoto per nessun tetto.

**Aperto** significa prenotazioni né annullate né già soggiornate, sommate al prezzo a cui le vendete.
Una prenotazione che porterebbe il cliente oltre il tetto viene rifiutata prima di raggiungere il
fornitore, e all'agente viene detto di parlare con voi.

:::caution
Questo **non è un fido.** OneRate non vede mai un pagamento, quindi qui non cambia nulla quando un
cliente vi paga. Il tetto scende man mano che i soggiorni si concludono e le prenotazioni vengono
annullate — nient'altro.

Risponde a *"impedisci a questo cliente di accumulare prenotazioni che non può pagare"*. Non risponde
a *"concedi a questo cliente 50.000 di credito"*; nulla in OneRate lo fa, per scelta.
:::

Vale **per valuta**. Un tetto fissato in EUR non dice nulla su una prenotazione in TRY, perché OneRate
non converte fra valute — e un limite è il posto peggiore del prodotto in cui iniziare a inventare un
tasso di cambio.

## Prima di invitare qualcuno

Due cose da avere pronte, perché un cliente che si scontra con una delle due si sentirà
semplicemente dire che la prenotazione non è disponibile e ti telefonerà:

1. **Un contatto aziendale per le prenotazioni** in [Impostazioni](/it/manage/settings/) — email e
   telefono. Senza, nessuno può prenotare. La versione del messaggio per il cliente gli dice di
   chiederlo a te.
2. **Un margine che ti va bene che vedano.** Loro vedono il prezzo di vendita. Se il tuo margine non
   è impostato, stanno guardando il prezzo netto del tuo fornitore.

Invitare qualcuno avviene nel pannello che si apre quando selezioni un cliente, accanto alle
persone già presenti — non nella riga del cliente. Se quello che scrivi nel tetto di prenotazione
aperta non è un importo, il campo lo dice e non salva nulla.

## Revocare l'accesso

**Revoca** annulla un invito in sospeso. Per rimuovere qualcuno che è già entrato, toglilo
dall'elenco persone del cliente — le sue prenotazioni restano a registro.
