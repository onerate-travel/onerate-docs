---
title: Your bookings
description: Finding a booking, seeing what cancelling costs and cancelling from the list, what its detail page records, approval, options, vouchers and the language they are issued in, cancellation reminders and erasing guest data.
---

## The list

**Bookings** holds every booking your agency has made, through any supplier.

Filter and find:

- **Status** — one status, or all
- **Check-in from / to** — a date range on the stay, not on when it was booked
- **Find** — free text over guest name, hotel, and supplier confirmation reference

Columns: hotel, guest, stay, sell price, status, cancellation, supplier, booked by. The total sits
above the list, and long lists page.

**Cancellation** is what dropping that booking would cost *right now*, under the terms stored when
you booked: "Cancelling now is free.", an amount, or "This booking is non-refundable; cancelling
will be charged (the supplier stated no amount)." Where the supplier states a deadline without a
timezone the line adds "The times are approximate, so the amount is too." A booking with no stored
terms says so — "No cancellation terms were recorded for this booking." — rather than nothing at all:
silence reads as "there is nothing to pay", which is the more expensive way to be wrong.

If you may cancel, a confirmed booking also carries **Cancel booking** on its row. It asks first,
and the question quotes the same fee, so you are never one stray click from a charge. Agents do not
see the button — [they may not cancel](/en/booking/cancelling/#who-can-cancel).

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

## Approval

Your agency can set a ceiling on what each colleague may commit
[alone](/en/manage/team/#what-each-colleague-may-commit-alone). A booking above that ceiling is
**held**: it appears in your list as **Awaiting approval**, and nothing has been sent to the
supplier — no room is taken, no rate is held, and nothing can be cancelled because nothing exists
yet.

The booking's page says so, to everyone who can see it. If you may approve bookings, it also carries
two buttons:

- **Approve and book** — the booking is made *now*, at whatever the rate is at that moment. It goes
  through the ordinary checks, so if the price moved while the booking was waiting you get the
  price-changed question rather than a silent booking at the new number.
- **Refuse** — the request ends. Your note goes onto the booking's timeline, where the colleague who
  asked will read it.

Whoever holds the booking's approval is emailed when it is made: the amount, the hotel and who asked,
which is enough to answer without opening the portal.

**An offer does not wait for ever.** If nobody answers before the rate expires, the booking fails on
its own and its timeline says the offer lapsed rather than that somebody refused it. Approving after
that point does not resurrect the rate — the supplier is asked afresh, and answers afresh.

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

If the automatic release cannot reach the supplier — it refuses the cancellation, or does not answer
— the booking says so: the option shows as released **and** carries a warning that the room is still
held, and the booking's own status stays confirmed, because it is. Cancel it yourself from the
booking page; nothing else has to be undone first.

The voucher of an open option says it is one, so a customer holding it cannot mistake it for a
settled stay.

## Vouchers

**Download voucher** gives you the PDF. **Email the voucher** sends it.

### What it carries

The voucher is the document your guest hands to a hotel desk, so it states the stay as it was
sold: the supplier confirmation reference, everyone staying, the hotel with its own address and
phone, the room, the board, the dates, the cancellation terms as they stood when you booked,
anything payable at the hotel, and your agency's identity and logo.

A row appears only when the supplier stated it. A hotel that sends no phone number produces a
voucher with no phone row rather than an empty one — a blank "Payable at hotel" reads as "there is
nothing to pay", which is the more expensive way to be wrong. What is owed at the desk is listed
per currency and never added together, because a total across two currencies is a number nobody
can pay.

Where the supplier gave the hotel's position, a small map sits in the panel at the top, beside the
reference — something a guest arriving by taxi can point at.

Below the stay come the hotel's own **rules** — check-in and check-out times, deposits, pets — and
its **description**, as that supplier states them. Both are fetched when the voucher is issued, so
they are the hotel's terms as they stand now rather than as they read on the day you booked. The
voucher fits on one page where it can; a hotel with a lot to say pushes it onto a second, and
nothing is cut short to prevent that — a house rule trimmed in half to save a sheet of paper is
worse than the sheet.

A booking made before OneRate began recording the hotel's position and the supplier's own hotel
reference carries neither the map nor these sections. Both are knowable only at the moment of
booking, and nothing afterwards can recover them.

### Which language

**Voucher language** sits beside the download and starts on the language you are reading the portal
in. Change it and the whole document changes: OneRate's own words and the hotel's, together — so a
customer who received a Bulgarian offer is not handed an English voucher after it.

Choose the guest's language rather than your own. The same agency issues vouchers for guests in
different languages on the same morning, which is why this sits on the booking and not in
settings.

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
