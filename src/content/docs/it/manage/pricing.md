---
title: Prezzi e margine
description: La vostra valuta di vendita, il margine applicato a ogni tariffa, le fasce di prezzo per gruppi di clienti, come i margini vengono ereditati e perché nulla viene mai convertito.
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

## Fasce di prezzo

Se vendete a una rete di sub-agenzie, le prezzate a gruppi, non una alla volta. La **fascia** è quel
gruppo: un nome e una percentuale.

1. **Impostazioni → Fasce di prezzo.** Aggiungete una fascia e datele un nome — "A bayileri",
   "B bayileri".
2. Impostate il suo **margine**, in percentuale, sulla riga della fascia.
3. Metteteci i clienti dalla schermata [Clienti](/it/manage/customers/).

Cambiare la percentuale di una fascia la cambia per tutti quelli che vi appartengono, ed è esattamente
il punto: quaranta sub-agenzie alle stesse condizioni devono essere un numero solo, non quaranta copie
che con il tempo divergono.

Un cliente appartiene ad **al massimo una fascia**. Due renderebbero ambigua la domanda "a quanto
vendiamo a questo cliente?" proprio nel momento in cui qualcuno la pone.

**Una fascia non si può eliminare finché ci sono clienti dentro.** Spostateli prima. Eliminarla con i
clienti dentro li riporterebbe in silenzio alla percentuale predefinita della vostra agenzia — un
cambio di prezzo che nessuno ha chiesto, scoperto su una fattura.

## Come si eredita il margine

I margini si risolvono dal livello più specifico verso l'esterno: **l'agente, poi il cliente, poi la
fascia del cliente, poi l'agenzia.**

La regola è che **vince il livello più vicino che ha un margine.** Un agente con il proprio margine
quota con quello; uno senza ricade su quello del cliente, poi su quello della sua fascia, poi su
quello dell'agenzia. Cancellare un override ricade sul livello superiore — mai a zero.

La posizione della fascia è deliberata: la fascia è ciò che dite su un *gruppo*, quindi tutto ciò che
avete detto su un singolo cliente la batte, e lei batte il vostro valore generale.

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
