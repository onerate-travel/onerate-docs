---
title: Settings
description: The corporate booking contact, agency identity and branding, subscription status, agency configuration, and the map provider.
---

Owners and admins. Leaving this screen with unsaved changes asks you first.

## Corporate booking contact

**The one setting to do before anything else.** Both fields are required:

- **Corporate booking contact email**
- **Corporate booking contact phone** — international format, e.g. `+902121112233`

Suppliers require a contact for the booking party. Until both exist, **every booking is refused**,
for every user including your customers. The screen warns you when they are missing:

> Bookings are refused until you add a corporate contact — both email and phone are required.

They must be filled in together or cleared together. You cannot save one without the other, because
half a contact is not a contact.

## Agency identity

- **Agency name**
- **Branding on this address** — either the OneRate default, or your own white-label branding

Both are provisioned by OneRate, not editable here. To change either, contact OneRate support. The
screen says so rather than showing you a field that will not save.

## Subscription

Your subscription status: **Active**, **Trial**, **Payment overdue** or **Cancelled**. Owners only.

If it is not visible, the portal says so plainly and points you at OneRate rather than guessing.

Subscription status gates **signing in**, never a booking already in progress. A booking underway
when a subscription lapses is not abandoned halfway.

## Selling currency

The currency your agency sells in — a three-letter ISO-4217 code, `EUR`, `TRY`, `USD`.

Changing it changes what your agency sells in, not just how prices are displayed, and **nothing is
converted**. Read [Pricing and margin](/en/manage/pricing/) before changing it.

## Map

Search results can be drawn on a map. By default that is **OpenStreetMap**, which costs you nothing
and needs no configuration.

If your agency has its own **Google Maps API key**, you can use Google's map instead. The tiles are
billed to your own Google account, on your own contract — OneRate applies no limit of its own, so
set quotas and budget alerts on the key in the Google Cloud console.

To use it:

1. Enter the key. It is checked against Google before it is stored, encrypted at rest, and never
   sent to your browser.
2. If Google refuses it, it is not saved — check that the **Map Tiles API** is enabled for that key.
3. Switch between **OpenStreetMap** and **Google Maps** at any time; **Remove the key** to go back
   for good.

If Google later refuses a key that used to work, the portal falls back to OpenStreetMap and tells
you, rather than showing an empty map.

## Agency configuration

A list of values resolved for your agency. Each one shows where its current value came from:

| Origin | Meaning |
| --- | --- |
| **Your agency's setting** | You set it. |
| **Inherited from {org}** | It comes from your parent agency. |
| **OneRate platform default** | OneRate's value, used until you set your own. |
| **Not set — OneRate has no value for this** | Nothing is running on this value. |
| **Not set — required before {capability}** | Something is blocked until you set it. The message names what. |

The resolution rule: **your own setting wins, then your parent's, then OneRate's default.** Clearing
your override falls back to your parent's value, not to OneRate's.

Values you will see here include the portal's default language, traveller support email, the
corporate contact, supplier request allowances, the search time budget, the cancellation reminder
lead time, invitation validity, rate cache lifetime, guest data retention, default margin and
selling currency.

Not all of them are editable here. Settings become editable as the features that use them ship; the
screen states which is which rather than showing dead fields.

:::caution
If you see *"a stored setting is unknown or invalid"*, contact OneRate support. **No default has
been substituted** — the portal refuses to guess a value it cannot read, rather than run on a
number nobody chose.
:::

### Two worth knowing about

- **Guest data retention (days)** — how long guest names and supplier records are kept on a booking
  before being erased automatically. Erasure removes the person; the booking's status, dates and
  amounts stay for your reports. You can also erase a single booking by hand — see
  [Your bookings](/en/booking/your-bookings/#erasing-guest-data).
- **Cancellation reminder lead time (hours)** — how far ahead of a closing free-cancellation window
  you are warned. 48 hours unless you change it.

## Values only your agency can know

Some settings have **no** OneRate default and never will — your supplier contract's request
allowance, your selling currency, your booking contact.

OneRate does not invent these, however cautious an invented value might look, because a wrong
contact is not a careful contact, it is a wrong one. Where such a value is missing, the capability
that needs it stays switched off and the portal names both the value and where to set it. That is
why a supplier cannot be enabled before its allowance exists.
