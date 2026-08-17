---
title: Integrations
description: API keys for reading your bookings from your own systems, and webhooks for being told when something happens.
---

Two ways your own systems can work with OneRate. Owners and admins.

Both live in [Settings](/en/manage/settings/).

## API keys

A key lets your own back office read **your** bookings out of OneRate, without anybody logging in.

### Creating one

1. **Settings → API keys.** Give it a name that says where it will be used — you will want to know
   which one to revoke later.
2. **Create key.**
3. **Copy the key now.** It is shown once and never again.

There is no "show key" button, and support cannot read it back to you. What OneRate stores is a
one-way fingerprint, so a copy of the database hands nobody a working key. If you lose one, create
another and revoke the old.

The list shows each key's first characters — enough to tell four keys apart, far too little to use
one.

### Using it

Send it as a bearer token:

```http
GET /api/v1/bookings?checkInFrom=2026-09-01&checkInTo=2026-09-30
Authorization: Bearer onerate_…
```

- `GET /api/v1/bookings` — your bookings, filtered by check-in range and status, newest first.
- `GET /api/v1/bookings/{id}` — one booking, in full.

There is no organisation id anywhere in those addresses. **The key says which agency it is**, which
is also why a key from one agency can never read another's.

### What a key can and cannot do

A key **reads**. It cannot book, cancel or change anything, and it cannot reach your settings,
suppliers or team.

That is deliberate and it is not permanent. Booking through an API raises a question with your
suppliers rather than with OneRate — whether traffic from your own website counts as your traffic
under their terms — and that answer is per supplier and in writing. Reading your own data back
raises none of it.

Your agency's **allowed IP addresses**, if you set any, apply to keys too. A key is still your
agency's traffic.

Each key has its own request allowance. One integration looping does not take another one down —
which is also why naming them matters: you can revoke the one misbehaving instead of your access.

### Revoking

**Revoke** stops a key working immediately. It stays in the list, marked revoked, so the record of
what happened stays readable.

A revoked key and a key that never existed answer identically. Whoever is holding it learns nothing
about whether it was ever real.

## Webhooks

A webhook is OneRate telling your system that something happened, instead of your system asking.

### Adding an endpoint

1. **Settings → Webhook endpoints.**
2. Enter the **https address** OneRate should POST to.
3. Tick the **events** you want.
4. **Add endpoint**, then **copy the signing secret** — like a key, it is shown once.

Only `https`, and no address inside a private network. The signature proves a message is genuine; it
does not hide what is in it, and these messages carry guest names.

### The events

| Event | When |
| --- | --- |
| `booking.confirmed` | A booking was confirmed by the supplier |
| `booking.failed` | A booking attempt ended without a reservation |
| `booking.cancelled` | A cancellation went through |
| `booking.manual_review` | A booking is waiting for a person to settle it |
| `option.expiring` | An option's deadline is approaching |

You get exactly the events you tick. There is no "everything" option — the day OneRate adds a sixth
event, your receiver would start getting a message shape it has never seen.

### Checking a message is really from OneRate

Every delivery carries two headers:

```http
onerate-event: booking.confirmed
onerate-signature: t=1800000000,v1=<hex>
```

`v1` is an HMAC-SHA256 over `<t>.<body>` using your signing secret. Recompute it and compare. Reject
anything whose timestamp is far from now, which is what stops a captured delivery being replayed
later.

### When your receiver is down

A failed delivery is retried, and gives up after several attempts. The endpoint's row shows the
**last delivery** and what came back, so you can see your own receiver failing without asking anyone
— OneRate's logs are not something you can read.

**Pause** an endpoint while you fix it. Pausing keeps the address and the secret your system is
already configured with; deleting loses both.

A message that was already queued when you paused is not delivered. That is the difference between
a pause and a delay.
