---
title: What OneRate is
description: What the product does, what it deliberately does not do, and the one idea — comparable groups — that the rest of the portal is built on.
sidebar:
  order: 1
---

OneRate is a B2B hotel booking portal for travel agencies. You bring your own supplier contracts;
OneRate searches all of them at once, normalises what comes back, ranks the cheapest offer within
each group of genuinely comparable rooms, and books.

It is sold as a flat monthly subscription.

## What it does

- **One search, every contract.** Instead of opening four supplier extranets and comparing by hand,
  you enter the stay once. OneRate asks every supplier you have enabled, in parallel.
- **Comparable, defensible pricing.** The cheapest offer is picked *within* a group of offers that
  are genuinely alike — same hotel, same board, same refundability, same cancellation deadline,
  same occupancy, same currency. Offers that are not alike are shown separately rather than
  silently ranked against each other.
- **One booking list.** Every booking made through any supplier lands in the same list, with the
  same statuses, the same voucher and the same cancellation flow.
- **Your margin, applied automatically.** You set a margin; the portal shows sell prices to your
  agents and to your customers, and keeps the supplier net alongside it for your own reports.

## What it deliberately does not do

These are not missing features waiting to ship. They are decisions, and they shape what you should
expect from the portal.

- **OneRate never touches booking money.** There is no current account, no ledger, no balance, no
  aging, no payment collection. Your supplier bills you on your own contract, exactly as it did
  before. OneRate charges only its subscription.
- **OneRate does not convert between currencies.** A rate quoted by a supplier in EUR stays in EUR.
  It is never converted into your selling currency at some rate OneRate invented, because that rate
  would not be the one your bank gives you. Offers in a currency other than your selling currency
  are shown in their own section and ranked only against each other. See
  [Pricing](/en/manage/pricing/).
- **OneRate does not merge room types across suppliers.** "Standard Double" from one supplier and
  "Classic Room, 1 Queen Bed" from another are not assumed to be the same room. Offers are grouped
  at the hotel level by board and refundability; room-type equivalence is a research problem, and
  guessing at it is how an agency sells a room the guest does not get.
- **It is hotels only.** No flights, no transfers, no car rental, no rail.
- **It is not a B2C site.** Your travellers never see OneRate; your customers see it only through
  the customer role you invite them into, which never shows supplier names or net rates.

## The one idea to take away: comparable groups

Almost every question about the results screen resolves to this.

Two offers may be compared against each other only if **all** of the following match:

| Must match | Why |
| --- | --- |
| The hotel | Obvious, but it is the mapping between supplier hotel IDs that makes it true. |
| Board code | Room-only against half-board is not a price difference, it is a different product. |
| Refundability class | A non-refundable rate is cheaper *because* it is non-refundable. |
| Cancellation deadline bucket | Free cancellation until tomorrow is not the same product as free cancellation until next month. |
| Occupancy coverage | A rate for two adults is not comparable to one that also covers a child. |
| Currency and tax basis | Totals must be the same kind of number before "cheaper" means anything. |

Within one such group, the cheapest wins automatically. Across groups, nothing is auto-selected —
you are shown each group and you choose.

When OneRate picks a winner for you, it records **why**: which offers it considered, which it
excluded and on what grounds, and the deciding difference. That is what the **Why this supplier?**
link on a result opens. If a supplier ever asks you why you booked elsewhere, or a colleague asks
why the list ranked the way it did, that record is the answer.

:::note
Ranking is a default, not a rule. If your agency has volume commitments, you can override it —
pin a supplier, or prefer one unless another is more than *n*% cheaper. See
[Supplier preferences](/en/manage/preferences/).
:::

## Partial results are normal

A search does not wait for the slowest supplier. Results stream in as each supplier answers, and
each supplier's own status is shown next to the count — **OK**, **Slow**, **Failed**, **Partial**,
or **No coverage here**.

A search that returns fewer hotels because one supplier timed out will *tell you that happened*.
This is deliberate: a tool that silently returns fewer hotels is a tool you cannot trust to say
"there is nothing available".

## Where to go next

- New to the portal → [Signing in](/en/start/signing-in/), then [The portal](/en/start/the-portal/)
- You will be searching and booking → [Running a search](/en/search/running-a-search/)
- You are setting the agency up → [Suppliers](/en/manage/suppliers/) and [Settings](/en/manage/settings/)
- A word you do not recognise → [Glossary](/en/reference/glossary/)
