---
title: Pricing and margin
description: Your selling currency, the margin applied to every rate, how margins are inherited by customers, and why nothing is ever converted.
---

## Selling currency

Your agency sells in one currency, set in the header bar (owners and admins) or in
[Settings](/en/manage/settings/).

This is **not a display preference.** It decides:

- which offers appear in your main results list, and
- which offers appear in the separate **Other currency** section, ranked only among themselves.

### Nothing is converted, ever

A rate a supplier quotes in USD stays in USD. OneRate will not turn it into EUR at some rate it
made up, because that rate is not the one your bank will give you, and an invented number on a
booking is worse than an honest foreign one.

The consequences, all of which you will see in the portal:

- Offers in another currency are **bookable**, and labelled with what they actually are.
- They are **not ranked** against your selling-currency offers. "Cheaper" between two currencies is
  not a fact OneRate can state.
- In [Reports](/en/manage/reports/), bookings in another currency are **excluded from the totals**,
  and the report says how many and in which currencies.

If most of your business is in one currency, set that as your selling currency and this rarely
comes up. If you genuinely trade in two, expect two sets of numbers, because that is what you have.

## Margin

Your margin is the difference between what the supplier charges you (**net**) and what you sell for
(**sell**).

Set it in the header bar under **Default margin**, as a percentage — `12,5` for twelve and a half
per cent. Press **Apply**.

From that moment, every price in the portal — the results list, the hotel page, the review screen,
what your customers see — includes it.

### Unset means net

If no margin is set, nothing is added and you are selling at the supplier's price. The field says
so:

> Not set — nothing is added to the supplier's price. Enter a percentage to sell above net.

An explicit **0%** is different from unset. Zero is a decision you made and it is respected as one.

### Net stays visible to you

Your agents and owners always see both numbers on a booking: **Quoted when you booked**, **Confirmed
by the supplier**, and the **Sell price**. Reports total both.

Your **customers** see only the sell price. They never see supplier net, and they never see which
supplier it was.

## How margin is inherited

Margins resolve down your organisation chain: your agency, then any customer beneath it.

The rule is that **the nearest level that has a margin wins.** A customer with its own margin uses
that one; a customer with none inherits yours. Clearing a customer's override falls back to your
agency's value — not to zero.

This is the same inheritance the rest of your agency configuration uses, so it behaves the way you
would expect from [Settings](/en/manage/settings/).

## Sanity checks worth doing

1. **Run a search and open a hotel.** The price on the card and the price on the review screen
   should be your net plus your margin. If it is not, your margin is unset or was not applied.
2. **Look at a confirmed booking's cost section.** If *Confirmed by the supplier* differs from
   *Quoted when you booked*, your real margin on that booking is not what you set — the portal
   flags this explicitly rather than hiding it.
3. **Check your reports for the currency note.** If it says bookings are excluded from totals, your
   selling currency may not match how you actually trade.

## What OneRate does not do with your money

No ledger, no current account, no balance, no aging, no payment collection, no card data. Your
supplier invoices you on your own contract exactly as before, and your customer pays you however
they did before.

OneRate charges its own flat monthly subscription and touches nothing else. That is the whole
financial relationship.
