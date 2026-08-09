---
title: Cancelling a booking
description: Who may cancel, what the fee confirmation tells you, what happens when the supplier charges something different, and why customers cannot cancel.
---

## Who can cancel

Owners and admins. **Agents cannot** — cancellation fees are real money under a contract the agent
did not sign. Customers cannot either.

If you are an agent and a booking must be cancelled, ask your owner or admin.

## Cancelling

Open the booking and press **Cancel booking**. You are asked to confirm, and the confirmation tells
you what it will cost:

> Cancel this booking? The expected cancellation fee is €120,00.

or, when the supplier has not given a figure:

> Cancel this booking? The cancellation fee is not known yet — your supplier's own terms decide it.

Both are honest statements about what OneRate knows. The second one is not a system fault; it means
the supplier's answer will only arrive when the cancellation does.

## After cancelling

The booking moves to **Cancelled** and you are told what actually happened:

| Message | Meaning |
| --- | --- |
| "Booking cancelled. No cancellation fee was charged." | Free of charge, as expected. |
| "Booking cancelled. Your supplier charged a cancellation fee of €120,00." | The supplier charged. This is the amount to expect on your supplier invoice. |
| "Booking cancelled. The cancellation fee is not known yet…" | Cancelled, fee still open. Your supplier's terms decide it. |

The fee the supplier returns is recorded on the booking and reconciled against the policy stored
when you booked. **If they differ, that is an issue to take to your supplier** — the record of both
is on the booking, in the cost section and in the timeline.

## Before the deadline closes

Free cancellation has a deadline, and OneRate reminds you before it closes — by default 48 hours
ahead, adjustable per agency in [Settings](/en/manage/settings/).

Where a supplier states a deadline without a timezone, OneRate resolves it in the hotel's timezone
and marks it **Estimate — this supplier states no time zone, so this is the earliest the deadline
could fall.** Treat that as the last safe moment, not as a promise. Cancel earlier than an
estimated deadline, never at it.

Very old bookings may show **Unconfirmed** instead — recorded before OneRate stored whether a
deadline was the supplier's own or an estimate. Check with the supplier before relying on it.

## Changes and amendments

There is no amendment flow in the portal. To change dates, occupancy or a guest name, contact your
supplier directly on your own contract; the booking here will show **Amended** if the supplier
reports a change.

## Why customers cannot cancel

A customer's booking screen says:

> To cancel or change this booking, contact your agency — they hold the supplier contract and are
> the only ones who can change it. Do not call the hotel directly: a change made there would not
> reach this record.

The second sentence is the one that matters. A change agreed at the hotel desk never reaches your
supplier or this record, so your booking list and your customer's expectations diverge — and you
find out at check-in.

## If cancellation fails

"Booking could not be cancelled" means the supplier refused or did not answer. The booking has
**not** been cancelled.

Do not assume it went through and do not spam the button — cancellation is not idempotent at most
suppliers, so repeating it can produce a second fee. Check the timeline, then contact your
supplier directly if it keeps failing.
