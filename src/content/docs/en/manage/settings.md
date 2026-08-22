---
title: Settings
description: The corporate booking contact, your own identity and branding, agency fields, security postures, subscription status, agency configuration, and the map provider.
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

## Your own identity, on your own documents

Everything in this section is yours to set, and it appears on the paperwork your customers keep.

### Agency identity

- **Registered name** — your company as it is registered, when that differs from the name you trade
  under
- **Address**
- **Tax number** — a VKN in Turkey, a CUI, a NIP or a partita IVA elsewhere. It is printed, never
  computed with, so any of them is accepted
- **Agency licence no** — in Turkey the TÜRSAB belge no

A field you leave empty prints **no line at all** on a voucher, rather than an empty one. An empty
"Tax no:" reads as *none*, which is a different claim from *not stated* — and the false one.

These flow down to your customers: a booking made by one of your corporate clients carries **your**
licence, because your agency is the licensed party on that document.

### Agency logo

**PNG or JPEG, up to 256 KB.** It appears on your vouchers and on the sign-in page at your own
web address.

Those two formats and no others, because they are the two a voucher can carry. A format that
displayed in the portal and vanished from the document would be worse than a refusal — nobody would
find out until a customer asked.

Replace it by uploading another; **Remove logo** goes back to OneRate's mark.

### Brand colour

One colour, as a hex value like `#0e6b5c`. The darker and lighter shades used for hover states and
highlights are derived from it, so there is nothing else to pick.

A colour that **cannot be read** is refused, and the message says so:

> That colour is not legible: white text on it, and it on a light background, both need at least
> 4.5:1.

That is not fussiness. The same colour paints a button with white text on it and emphasised words on
a pale background — a corporate yellow passes the second test and fails the first, and the result is
a portal whose buttons your own staff cannot read.

### Web address

Your agency's own sign-in address, `yourname.onerate.travel`.

Lower-case letters, digits and hyphens, 3–40 characters. Some names are OneRate's own and are
refused; so is one another agency already holds — the message tells you which of the two it was.

:::caution
Changing it **stops the old address working immediately**, including on anything you have already
printed or emailed. Tell your customers before you change it, not after.
:::

## Agency fields

Your own fields on a booking: **cost centre**, **project code**, **PO number** — whatever your
finance team needs to reconcile a stay against.

Each field has:

- a **key**, which is how the value is stored and what the report column is anchored to. It cannot
  be changed later, because every value already recorded is stored under it
- a **label**, which is what your agents read on the booking form — and which you *can* change
- a **type**: text, a fixed list, or a date
- **required** or not

A **required** field refuses the booking outright, before the supplier is called. That is the point
of it: an uncoded stay is one somebody has to chase a fortnight later, and by then the agent has
forgotten which of forty bookings it was.

Your fields appear on the booking review screen, on the booking's own page, and as **columns in the
report export** — one column per field you have defined, whether or not anything was recorded in it,
so two exports of the same period have the same shape.

Your corporate customers can define their own as well; yours apply to their bookings too, and a
field you made required stays required for them. See [Customers](/en/manage/customers/).

## Security postures

Three settings, and every one of them can only **tighten** what OneRate already requires.

- **Who must use two-step verification** — owners (OneRate's own floor), your admins, or everyone
  who signs in. You cannot go below the floor.
- **Session lifetime (hours)** — how long a signed-in session may work before signing in again.
  Between 1 hour and 14 days.
- **Allowed IP addresses** — IPv4 addresses and CIDR ranges, comma-separated. A request from
  anywhere else is refused, **including your own staff's**.

IPv6 is refused rather than accepted and ignored: an allowlist that silently fails to match half of
the internet would leave you believing you had a control you do not have.

These apply to your API keys as well — a key is still your agency's traffic. See
[Integrations](/en/manage/integrations/).

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

Search results can be drawn on a map. By default that is **Google Maps**, drawn on OneRate's own
key: there is nothing to configure and nothing billed to your agency.

**Map provider** lets your agency choose **OpenStreetMap** instead. The choice applies to every agent
in your agency and to your customers' portals.

**Currently drawing** names the map in force. If it says **OpenStreetMap (temporary)**, you chose
Google and OneRate cannot draw it right now — the portal stays on OpenStreetMap until it can. There
is nothing for you to fix; your choice is kept.

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
