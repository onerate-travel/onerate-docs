---
title: Report
description: Che cosa hai venduto, filtrato per data di check-in e stato, ripartito per fornitore e per mese, ed esportato in CSV.
---

**Report** è in sola lettura. Sono le tue prenotazioni, totalizzate. Disponibile a titolari,
amministratori e agenti; non ai clienti.

## Filtri

- **Check-in dal / al** — un intervallo sul **soggiorno**, non su quando è stata fatta la
  prenotazione. Un report di agosto è un report dei soggiorni di agosto.
- **Stato** — uno [stato della prenotazione](/it/booking/statuses/), oppure tutti.

## La tabella

Una riga per prenotazione: check-in, hotel, destinazione, ospite, fornitore, stato, **netto**,
**vendita**.

Sopra: il numero di prenotazioni, **Netto totale** e **Vendita totale**. La differenza fra questi due
totali è il tuo margine sull'insieme filtrato.

## Ripartizioni

- **Per fornitore** — prenotazioni, netto e vendita per fornitore. È il numero da leggere accanto
  alle tue [preferenze fornitori](/it/manage/preferences/): ti dice se un fornitore fissato o una
  regola percentuale stiano davvero portando il volume per cui li hai impostati.
- **Per mese di check-in** — lo stesso, per mese di soggiorno.

## Esportazione

**Esporta CSV** scarica le righe filtrate. Stesse colonne della tabella, così un totale in un foglio
di calcolo corrisponde a quello che vedi sullo schermo.

Se fallisce, riprova — nulla viene scritto a metà.

## Due note che cambiano il significato dei totali

Leggile entrambe prima di citare un numero a chiunque.

### Valuta

> 3 prenotazione/i sono quotate in USD, GBP e NON sono incluse nei totali in EUR qui sopra. OneRate
> non converte tra valute.

Le prenotazioni in una valuta diversa dalla tua valuta di vendita sono **lasciate fuori dai
totali** — non vengono convertite a un cambio inventato. Restano nella tabella; semplicemente non
vengono sommate in un numero a cui non appartengono.

Se questa nota compare su ogni report, probabilmente la tua valuta di vendita non corrisponde a come
commerci davvero. Vedi [Prezzi](/it/manage/pricing/).

### Troncamento

> Sono mostrate solo le prime 1000 prenotazioni, e i totali qui sopra riguardano solo quelle.
> Restringi l'intervallo di check-in per un report completo.

Un intervallo grande viene limitato. **I totali sono solo delle righe mostrate** — non sono una
stima parziale di una cifra più grande. Restringi l'intervallo di check-in e rilancia; due report
semestrali sono accurati dove un anno troncato non lo è.

## Che cosa non c'è

Nessuna contabilità, nessun saldo, nessuno scadenzario, nessuno stato dei pagamenti, nessuna
fatturazione. OneRate non tocca mai il denaro delle prenotazioni, quindi non ha nulla da dire su
quello che è stato pagato — solo su quello che è stato venduto. Vedi
[Prezzi](/it/manage/pricing/).

## Una routine mensile che funziona

1. Imposta l'intervallo di check-in al mese scorso, stato **Confermata**.
2. Leggi **Netto totale** contro **Vendita totale** — è quello che hai guadagnato.
3. Controlla la nota sulle valute. Se ci sono righe escluse, gestiscile a parte.
4. Leggi **Per fornitore** rispetto ai tuoi contratti e obiettivi di volume.
5. Esporta il CSV per chi ti tiene la contabilità.

Poi, separatamente, filtra lo stato su **Annullata** per lo stesso intervallo e leggi le penali di
annullamento su quelle prenotazioni. Le penali che il fornitore ha applicato e che non ti aspettavi
sono la cosa più economica da scoprire presto e la più costosa da scoprire al momento della fattura.
