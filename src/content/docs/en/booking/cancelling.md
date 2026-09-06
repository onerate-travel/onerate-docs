---
title: Cancelling a booking
description: Who may cancel, what the fee confirmation tells you, what happens when the supplier charges something different, and why customers cannot cancel.
---

## Who can cancel

Owners and admins. **Agents cannot** — cancellation fees are real money under a contract the agent
did not sign. Customers cannot either.

If you are an agent and a booking must be cancelled, ask your owner or admin.

## Cancelling

From **Bookings**, press **Cancel booking** on the row — or open the booking and press the same
button there. Either way you are asked to confirm, and the confirmation tells you what it will
cost:

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

Three different things can go wrong, and the screen says which. The difference decides what you do
next, so read the wording rather than the fact that something went red.

| What you see | What happened | What to do |
| --- | --- | --- |
| "Booking could not be cancelled." | The request did not get through. | Try again. |
| "The booking was not cancelled: your supplier refused the request (…)." | It reached your supplier and they refused it. The code in brackets is theirs. | See the codes below. |
| "Your supplier did not answer, so we cannot say whether this booking was cancelled." | Nobody knows yet. It may or may not have gone through. | **Do not try again.** Wait. |

The third one is the one to be careful with. Cancellation is not idempotent at most suppliers, so
cancelling a second time can be charged a second time. OneRate checks with your supplier itself, and
the booking's status here changes once the answer arrives; the timeline records it.

In every one of the three the booking has **not** been cancelled unless the screen says it has.

### The refusal codes

The code is shown exactly as it was produced, so you can quote it to your supplier.

| Code | Meaning |
| --- | --- |
| `not_cancellable_CANCELLED` | Already cancelled. Nothing to do. |
| `not_cancellable_…` (any other status) | The booking is not in a state that can be cancelled — a stay the supplier never confirmed, for example. Look at its status. |
| `transition_conflict_…` | Somebody else changed this booking while you were cancelling it. Reload it and read the status before doing anything else. |
| `AUTH` | Your supplier refused the credential. Check it under **Suppliers**. |
| `VALIDATION` | Your supplier does not recognise this booking as one it can cancel. Contact them with the supplier reference. |
| Anything else | Your supplier's own refusal. Quote the code to them. |
