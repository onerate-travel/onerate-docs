---
title: Pricing and margin
description: Your selling currency, the margin applied to every rate, how margins are inherited by customers, and why nothing is ever converted.
---

## Selling currency

Your agency sells in one currency, set by an owner or admin in
[Settings](/en/manage/settings/) under **Agency pricing**.

Each agent may also sell in their own, under **My pricing** in the user menu. Leave that blank and
you follow the agency's.

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
- In [Reports](/en/manage/reports/), you get **one total per currency**, your agency's first.
  Nothing is added across two currencies, and nothing is left out of the report either.

If most of your business is in one currency, set that as your selling currency and this rarely
comes up. If you genuinely trade in two, expect two sets of numbers, because that is what you have.

## Margin

Your margin is the difference between what the supplier charges you (**net**) and what you sell for
(**sell**).

An owner or admin sets the agency's in [Settings](/en/manage/settings/) under **Agency pricing**,
as a percentage — `12,5` for twelve and a half per cent.

Each agent can set their own under **My pricing** in the user menu. A blank field there follows the
agency; a number overrides it for that agent's own quotes and bookings.

Margins are a **percentage** of net. A fixed amount per booking is not something OneRate can add —
it would have to be denominated in some currency, and it converts none.

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

Margins resolve from the most specific level outwards: **the agent, then the customer, then the
agency.**

The rule is that **the nearest level that has a margin wins.** An agent with their own margin quotes
under it; an agent with none falls back to the customer's, then to the agency's. Clearing an
override falls back to the level above it — never to zero.

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
