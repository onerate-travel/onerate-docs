---
title: Booking a stay
description: Guest names, the review screen, confirming, and what to do when the price changes between your quote and the booking.
---

## Before your first booking

A booking is refused until your agency has a **corporate booking contact** — both an email address
and a phone number — saved in [Settings](/en/manage/settings/). Suppliers require a contact for the
booking party; a made-up one is not an option.

If it is missing you will see:

> Booking failed: add a corporate contact in Settings before you can book.

Customers see the same thing worded for them: *ask your agency to add a corporate booking contact.*

Only an owner or admin can add it, and it only has to be done once.

## Choosing a rate

Open a hotel from the results. The page re-prices the stay against the supplier at that moment and
lists every rate option — board, refundability, cancellation deadline, total.

If the rate is priced in a currency other than your selling currency, the page says so:

> Priced in USD, not your selling currency EUR. This rate is bookable, but OneRate does not convert
> between currencies — the amount above is what the supplier charges, in its own currency.

Press **Book** on the rate you want.

## Guest details

**Lead guest** — first and last name — is required. This is the name the supplier books under, so
it must be the name on the passport or ID the guest will present at the hotel.

Below it you can name **every** guest, adults and children, room by room.

:::note
Leave a guest blank and nothing is sent for them. The supplier is **never** given an invented name.
This matters at hotels that check every guest in by name.
:::

## The review screen

Before anything reaches the supplier you get **Confirm this booking**, showing:

| | |
| --- | --- |
| Hotel | the property |
| Board | what is included |
| Occupancy | adults and children |
| Nights | length of stay |
| Total | what you are selling it for, in your selling currency |
| Free cancellation | the deadline, or that there is none |

Read the cancellation line. It is the last point at which the terms are cheap to change your mind
about.

### Your agency's own fields

If your agency has defined [agency fields](/en/manage/settings/#agency-fields) — a cost centre, a
project code, a PO number — they appear here, above the request box. A field marked with `*` is
**required**, and the booking is refused without it before anything reaches the supplier.

They are your agency's own coding of the booking: they are never sent to the hotel or the supplier,
they appear on the booking's own page afterwards, and they become columns in your
[report export](/en/manage/reports/#export).

Press **Confirm and book**, or **Back to results**.

## When the price changes

Suppliers re-price at booking time. Between the results list and your confirmation, the rate can
move.

If it has, OneRate **stops** and asks:

> The price changed to €412,00. Confirm to book at the new price.

You are shown both the price you were quoted and the new one, and you choose **Confirm new price**
or **Decline**. Nothing is booked while the question is open, and declining books nothing.

This is why the review screen exists. The portal will not quietly book at a price you did not
agree to.

## If the rate is gone

A rate can sell out between the search and the booking. The booking fails cleanly — nothing is
booked, nothing is charged — and you are returned to the results to pick the next option.

## What happens after you confirm

The booking goes through a sequence: the price is re-checked, the booking is placed with the
supplier, and the result is recorded. Then the voucher is rendered and the confirmation email is
sent.

Most bookings land on **Confirmed** within seconds. Every possible outcome, including the ones that
do not resolve immediately, is described in [Booking statuses](/en/booking/statuses/).

:::caution
**If a booking's outcome is not known, do not book it again.** A supplier timeout means *unknown*,
not *failed* — the supplier may well have taken it. OneRate re-checks automatically. Booking a
second time is how an agency ends up paying for two rooms. See
[Reconciling](/en/booking/statuses/#reconciling).
:::

## Refusals you might see

| What you see | What it means | What to do |
| --- | --- | --- |
| "Booking failed: add a corporate contact in Settings" | Your agency has no booking contact. | An owner or admin adds it in [Settings](/en/manage/settings/). |
| "Enter the lead guest's first and last name before booking." | The lead guest is incomplete. | Fill both fields. |
| "Too many booking attempts in a short time." | Rate limiting. | Wait. Retrying immediately will be refused too. |
| "That booking key was already used for a different booking." | This booking form has already been used to book something else. | Start a new search. Nothing was double-booked — this message is the protection working. |
| "Booking failed. Please try again." | A general failure. | Check [Bookings](/en/booking/your-bookings/) **before** retrying, to confirm nothing was created. |
| "A required field is missing or invalid." | One of your agency's own fields is empty or does not fit its definition. | Complete the field on the review screen. Nothing was booked. |
| "This would take the customer over their open-booking ceiling." | The customer has a [ceiling](/en/manage/customers/#open-booking-ceiling) on how much they may have open, and this booking crosses it. | Speak to the agency. The ceiling falls as stays complete and bookings are cancelled. |

## When the booking needs approval

If your agency has set a ceiling on what you may commit
[alone](/en/manage/team/#what-each-colleague-may-commit-alone), a booking above it is not made — it
is **held**. The screen says so, nothing reaches the supplier, and the people who may approve it are
emailed.

You have nothing to correct: this is not a refusal, and the offer is not lost. Watch the booking in
[Bookings](/en/booking/your-bookings/#approval) — it shows as **Awaiting approval** until somebody
answers, and it fails on its own if the rate expires first.

## Why you cannot accidentally book twice

Every booking attempt carries a key generated when you opened the form. If the same key arrives
twice — a double-click, a retried request, a flaky connection — the second one is recognised and
refused rather than executed.

That is what "that booking key was already used" is telling you. It is not an error in your work.
