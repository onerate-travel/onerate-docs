---
title: Prezzi e margine
description: La tua valuta di vendita, il margine applicato a ogni tariffa, come i margini vengono ereditati dai clienti e perché nulla viene mai convertito.
---

## Valuta di vendita

La tua agenzia vende in una sola valuta, impostata da un titolare o un amministratore in
[Impostazioni](/it/manage/settings/), sezione **Prezzi dell'agenzia**.

Ogni agente può vendere anche nella propria: **I miei prezzi**, nel menu utente. Lasciandolo vuoto
segui quella dell'agenzia.

Questa **non è una preferenza di visualizzazione.** Decide:

- quali offerte compaiono nel tuo elenco risultati principale, e
- quali offerte compaiono nella sezione separata **Altra valuta**, ordinate solo tra loro.

### Nulla viene convertito, mai

Una tariffa che un fornitore quota in USD resta in USD. OneRate non la trasformerà in EUR a un
cambio inventato, perché quel cambio non è quello che ti darà la tua banca, e un numero inventato su
una prenotazione è peggio di uno straniero onesto.

Le conseguenze, che vedrai tutte nel portale:

- Le offerte in un'altra valuta sono **prenotabili**, ed etichettate per quello che sono davvero.
- **Non vengono ordinate** insieme alle tue offerte in valuta di vendita. "Più economico" fra due
  valute non è un fatto che OneRate possa affermare.
- Nei [Report](/it/manage/reports/) ottieni **un totale per ogni valuta**, per prima quella della
  tua agenzia. Due valute non vengono sommate, ma nessuna riga resta fuori dal report.

Se la maggior parte del tuo lavoro è in una valuta, imposta quella come valuta di vendita e la
questione si presenta di rado. Se davvero commerci in due, aspettati due serie di numeri, perché è
quello che hai.

## Margine

Il tuo margine è la differenza fra quello che ti addebita il fornitore (**netto**) e quello a cui
vendi (**vendita**).

Il margine dell'agenzia lo imposta un titolare o un amministratore in
[Impostazioni](/it/manage/settings/), sezione **Prezzi dell'agenzia**, come percentuale — `12,5` per
dodici e mezzo per cento.

Ogni agente può impostare il proprio in **I miei prezzi**, nel menu utente. Un campo lasciato vuoto
segue l'agenzia; un numero la sostituisce per i preventivi e le prenotazioni di quell'agente.

Il margine è una **percentuale** sul netto. Un importo fisso per prenotazione non è qualcosa che
OneRate possa aggiungere: dovrebbe essere espresso in una valuta, e OneRate non ne converte
nessuna.

Da quel momento, ogni prezzo nel portale — l'elenco risultati, la pagina dell'hotel, la schermata di
riepilogo, quello che vedono i tuoi clienti — lo include.

### Non impostato significa netto

Se non è impostato alcun margine, non viene aggiunto nulla e stai vendendo al prezzo del fornitore.
Il campo lo dice:

> Non impostato — al prezzo del fornitore non viene aggiunto nulla. Inserisci una percentuale per
> vendere sopra il netto.

Uno **0%** esplicito è diverso da non impostato. Zero è una decisione che hai preso e viene
rispettata come tale.

### Il netto resta visibile a te

I tuoi agenti e i titolari vedono sempre entrambi i numeri su una prenotazione: **Quotato al momento
della prenotazione**, **Confermato dal fornitore** e il **Prezzo di vendita**. I report totalizzano
entrambi.

I tuoi **clienti** vedono solo il prezzo di vendita. Non vedono mai il netto fornitore, e non vedono
mai di quale fornitore si trattasse.

## Come si eredita il margine

I margini si risolvono lungo la catena della tua organizzazione: la tua agenzia, poi ogni cliente
sotto di essa.

La regola è che **vince il livello più vicino che ha un margine.** Un cliente con un proprio margine
usa quello; un cliente che non ne ha eredita il tuo. Azzerare l'override di un cliente ricade sul
valore della tua agenzia — non su zero.

È la stessa ereditarietà che usa il resto della configurazione della tua agenzia, quindi si comporta
come ti aspetteresti dalle [Impostazioni](/it/manage/settings/).

## Controlli di buon senso da fare

1. **Lancia una ricerca e apri un hotel.** Il prezzo sulla scheda e quello sulla schermata di
   riepilogo dovrebbero essere il tuo netto più il tuo margine. Se non lo sono, il margine non è
   impostato o non è stato applicato.
2. **Guarda la sezione costi di una prenotazione confermata.** Se *Confermato dal fornitore*
   differisce da *Quotato al momento della prenotazione*, il tuo margine reale su quella prenotazione
   non è quello che hai impostato — il portale lo segnala esplicitamente invece di nasconderlo.
3. **Controlla nei tuoi report la nota sulle valute.** Se dice che alcune prenotazioni sono escluse
   dai totali, la tua valuta di vendita potrebbe non corrispondere a come commerci davvero.

## Che cosa OneRate non fa con i tuoi soldi

Nessuna contabilità, nessun conto corrente, nessun saldo, nessuno scadenzario, nessun incasso,
nessun dato di carta. Il tuo fornitore ti fattura sul tuo contratto esattamente come prima, e il tuo
cliente ti paga come ti pagava prima.

OneRate addebita il proprio abbonamento mensile a prezzo fisso e non tocca nient'altro. È tutto il
rapporto finanziario.
