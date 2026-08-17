---
title: Your bookings
description: Finding a booking, reading its detail page and timeline, the cost breakdown, vouchers, and erasing guest data.
---

## The list

**Bookings** holds every booking your agency has made, through any supplier.

Filter and find:

- **Status** — one status, or all
- **Check-in from / to** — a date range on the stay, not on when it was booked
- **Find** — free text over guest name, hotel, and supplier confirmation reference

Columns: hotel, guest, stay, supplier, status, sell price, created. The total sits above the list,
and long lists page.

A booking whose guest data has been erased shows *guest data erased* in place of the name. The
booking itself is still there.

:::note
**Customer Bookings** is a separate screen: bookings made by your customers' own users. Same
columns plus which customer it belongs to, and a filter for that. Customers themselves see only
their own bookings, on their own screen.
:::

## The detail page

Open a booking to see everything recorded about it.

### The booking

Hotel, status, supplier, **confirmation reference**, check-in, check-out, lead guest, sell price,
the **branch** that took it and **who** took it.

If your agency has [agency fields](/en/manage/settings/#agency-fields), the values recorded on this
booking appear in their own section. They are what was recorded **at the time**: a field defined
afterwards is blank here, and one since retired still shows what it was coded with.

The confirmation reference is the supplier's own — it is what identifies the booking to them if you
ever need to call.

### Cost and fees

This section is not shown to customers.

| Row | What it is |
| --- | --- |
| **Quoted when you booked** | The supplier's net price at the moment you confirmed. |
| **Confirmed by the supplier** | What the supplier actually came back with. |
| **Expected cancellation fee** | What cancelling now would cost, under the policy stored at booking time. |
| **Sell price** | What you sold it for — net plus your margin. |

If those first two differ, the page says so:

> The supplier confirmed a different amount than it quoted. You sold against the quote.

That is a real event worth acting on, not a rounding artefact. Your margin on that booking is not
what you thought it was.

### Why this supplier

The same record the results screen offers, kept with the booking: which offers were considered and
what decided it. It stays available long after the search session is gone.

### Timeline

Every state the booking passed through, in order, with times. This is the first place to look when
a booking did something you did not expect.

## Options

An **option** is a booking you are holding while your customer decides.

It is a real reservation on a refundable rate, plus a date you have decided by. No supplier OneRate
works with offers a hold of its own — what the product adds is that the deadline is visible and
acted on, instead of living in somebody's diary.

A booking held as an option shows a panel saying so, with two buttons:

- **Confirm** — the option stands as an ordinary booking. Nothing changes at the hotel; it was
  always real.
- **Release** — the booking is cancelled. It goes through the same confirmation as any other
  cancellation, and quotes the same fee, because releasing an option *is* cancelling a booking.

The deadline is capped by the rate's own free-cancellation window, less a day. A rate with no free
window cannot be held at all: "hold" would mean "book it and pay the penalty later", which is a
booking, and you should be told that rather than sold the word.

The night before it runs out, whoever took the booking gets an email. What happens if nobody answers
is your agency's choice, in [Settings](/en/manage/settings/#agency-configuration): **remind** keeps
warning and never cancels, **release** gives the room back. An agency that has stated nothing gets
**remind**, because a wrong cancellation is real money.

The voucher of an open option says it is one, so a customer holding it cannot mistake it for a
settled stay.

## Vouchers

**Download voucher** gives you the PDF. **Email the voucher** sends it.

The button is replaced by a sentence when there is no voucher, and the sentence says why:

| Message | Why |
| --- | --- |
| "This booking is not confirmed, so no voucher has been issued for it." | Vouchers exist for confirmed bookings only. |
| "It is not yet known whether this booking reached the supplier…" | The booking is still being reconciled. |
| "This booking is cancelled and no voucher is available for it." | Cancelled. |
| "This booking's guest data has been erased, and the voucher was deleted with it." | The voucher carried the guest's name, so it went with the erasure. |

## Erasing guest data

Owners and admins can permanently erase the personal data on a booking — the guest's name and the
supplier records stored against it — and the voucher is deleted with them.

**This cannot be undone.** The booking itself stays on record: its status, its dates and its
amounts, so your reports and your accounts stay intact. Only the person is removed.

If the confirmation dialog is interrupted, run it again. Erasure is safe to repeat and finishes the
job.

Your agency also has a **guest data retention period** in [Settings](/en/manage/settings/), after
which this happens automatically. Erasing by hand is for a request that arrives before then.

## Cancellation reminders

OneRate watches the free-cancellation deadlines on your confirmed bookings and warns you before one
closes. The lead time is your agency's setting — 48 hours unless you have changed it.

This is the feature that stops you paying a cancellation fee on a stay the guest dropped last week.

## Next

- [Cancelling a booking](/en/booking/cancelling/)
- [Booking statuses](/en/booking/statuses/) — including what to do about one in review
