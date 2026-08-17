---
title: Integrazioni
description: Chiavi API per leggere le vostre prenotazioni dai vostri sistemi, e webhook per essere avvisati quando accade qualcosa.
---

Due modi in cui i vostri sistemi possono lavorare con OneRate. Titolari e amministratori.

Entrambi si trovano in [Impostazioni](/it/manage/settings/).

## Chiavi API

Una chiave permette al vostro back office di leggere **le vostre** prenotazioni da OneRate, senza che
nessuno debba accedere.

### Crearne una

1. **Impostazioni → Chiavi API.** Datele un nome che dica dove sarà usata: più avanti vorrete sapere
   quale revocare.
2. **Crea chiave.**
3. **Copiate la chiave ora.** Viene mostrata una volta sola e mai più.

Non esiste un pulsante "mostra chiave", e l'assistenza non può rileggerla. Quello che OneRate
conserva è un'impronta a senso unico, quindi una copia del database non consegna a nessuno una chiave
funzionante. Se la perdete, createne un'altra e revocate la vecchia.

L'elenco mostra i primi caratteri di ogni chiave: abbastanza per distinguerne quattro, troppo poco
per usarne una.

### Usarla

Inviatela come bearer token:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — le vostre prenotazioni, filtrate per periodo di soggiorno e stato.
- `GET /api/v1/bookings/{id}` — una prenotazione, per intero.

In quegli indirizzi non compare alcun identificativo di organizzazione. **È la chiave a dire di quale
agenzia si tratta**, ed è anche il motivo per cui la chiave di un'agenzia non può leggere quelle di
un'altra.

### Cosa può e cosa non può fare una chiave

Una chiave **legge**. Non può prenotare, annullare o modificare nulla, e non raggiunge le vostre
impostazioni, i vostri fornitori o il vostro team.

È deliberato e non è definitivo. Prenotare via API apre una domanda **verso i vostri fornitori**, non
verso OneRate — se il traffico dal vostro sito conti come vostro secondo i loro termini — e quella
risposta è per fornitore e per iscritto. Rileggere i vostri dati non ne apre nessuna.

Gli **indirizzi IP consentiti** della vostra agenzia, se ne avete impostati, valgono anche per le
chiavi. Una chiave è comunque traffico della vostra agenzia.

Ogni chiave ha la propria quota di richieste. Un'integrazione che entra in un ciclo non trascina giù
l'altra — ed è anche per questo che i nomi contano: revocate quella che si comporta male, non il
vostro accesso.

### Revocare

**Revoca** ferma subito una chiave. Resta nell'elenco, contrassegnata come revocata, così il registro
di ciò che è successo rimane leggibile.

Una chiave revocata e una mai esistita rispondono allo stesso modo. Chi la possiede non impara nulla
sul fatto che sia mai stata reale.

## Webhook

Un webhook è OneRate che dice al vostro sistema che è successo qualcosa, invece del vostro sistema
che lo chiede.

### Aggiungere un endpoint

1. **Impostazioni → Endpoint webhook.**
2. Inserite l'**indirizzo https** a cui OneRate deve inviare il POST.
3. Spuntate gli **eventi** che volete.
4. **Aggiungi endpoint**, poi **copiate il segreto di firma**: come per una chiave, viene mostrato
   una volta sola.

Solo `https`, e nessun indirizzo di rete interna. La firma dimostra che un messaggio è autentico; non
ne nasconde il contenuto, e questi messaggi portano nomi di ospiti.

### Gli eventi

| Evento | Quando |
| --- | --- |
| `booking.confirmed` | Il fornitore ha confermato una prenotazione |
| `booking.failed` | Un tentativo di prenotazione si è concluso senza prenotazione |
| `booking.cancelled` | Un annullamento è andato a buon fine |
| `booking.manual_review` | Una prenotazione attende che una persona la risolva |
| `option.expiring` | La scadenza di un'opzione si avvicina |

Ricevete esattamente gli eventi che avete spuntato. Non esiste l'opzione "tutto": il giorno in cui
OneRate aggiungesse un sesto evento, il vostro ricevitore comincerebbe a ricevere una forma di
messaggio mai vista.

### Verificare che un messaggio venga davvero da OneRate

Ogni consegna porta due intestazioni:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

`v1` è un HMAC-SHA256 su `<t>.<corpo>` con il vostro segreto di firma. Ricalcolatelo e confrontatelo.
Rifiutate tutto ciò il cui timestamp sia lontano da adesso: è quello che impedisce che una consegna
intercettata venga rigiocata più tardi.

### Quando il vostro ricevitore è fermo

Una consegna fallita viene ritentata e dopo alcuni tentativi rinuncia. La riga dell'endpoint mostra
l'**ultima consegna** e cosa ha risposto, così vedete il vostro ricevitore fallire senza chiedere a
nessuno: i log di OneRate non sono qualcosa che potete leggere.

**Sospendete** un endpoint mentre lo sistemate. La sospensione conserva l'indirizzo e il segreto con
cui il vostro sistema è già configurato; eliminarlo li perde entrambi.

Un messaggio già in coda al momento della sospensione non viene consegnato. È questa la differenza
fra una sospensione e un ritardo.
