---
title: Glossary
description: The words the portal uses, and what each one means here specifically.
---

**Agency** — your business. The tenant. Everything in the portal belongs to one.

**Amended** — a [booking status](/en/booking/statuses/): the supplier reports the booking was
changed. OneRate has no amendment flow of its own.

**Board** — what the rate includes: room only, bed and breakfast, half board, full board,
all-inclusive. Two rates with different board are **not** comparable.

**Cancellation deadline** — the moment free cancellation ends. Resolved in the **hotel's** timezone.
Marked *Estimate* when the supplier gave no timezone; treat that as the earliest it could fall.

**Comparable group** — offers that may legitimately be ranked against each other: same hotel, board,
refundability, cancellation deadline bucket, occupancy and currency. The cheapest is auto-selected
*within* a group and never across groups. [More](/en/what-is-onerate/#the-one-idea-to-take-away-comparable-groups).

**Confirmation reference** — the supplier's own identifier for a booking. What you quote if you
call them.

**Corporate booking contact** — your agency's email and phone, sent to the supplier as the booking
party. Bookings are refused without it. Set in [Settings](/en/manage/settings/).

**Customer** — one of *your* corporate clients, set up so their people can book under your
contracts. Sees sell prices, never supplier names or net. Also the name of that role.
[More](/en/manage/customers/).

**Environment** — which of a supplier's own environments a credential belongs to: **Sandbox** or
**Live**. A sandbox key cannot be used in production.

**Health** — OneRate's live view of a supplier: **Healthy**, **Recovering**, **Unavailable**. Not a
contract status. [More](/en/manage/suppliers/#health).

**Idempotency key** — the key carried by a booking attempt so the same attempt cannot execute twice.
What "that booking key was already used" refers to.

**Manual review** — a [booking status](/en/booking/statuses/#manual-review): 24 hours of automatic
checks could not establish whether the supplier took the booking. An owner or admin must check with
the supplier and record the outcome.

**Margin** — what you add to the supplier's net to get your sell price. A percentage: the agency's
in Settings, your own under **My pricing**. [More](/en/manage/pricing/).

**Net** — what the supplier charges you. Visible to your agency, never to your customers.

**No coverage here** — a per-supplier search status: that supplier has nothing mapped for this
destination. Not an error.

**Non-refundable** — no free cancellation at any point. Cheaper *because* of it, which is why it is
never ranked against a refundable rate.

**Occupancy** — the guests a rate covers: adults, children and their ages. Children are priced on
age, so an age is mandatory.

**Partial** — a per-supplier search status: it started answering and stopped. Some of its hotels are
missing from your list.

**Platform** — OneRate's own staff role. Provisions agencies and supplier definitions; deliberately
cannot touch any agency's bookings.

**Prebooked** — a [booking status](/en/booking/statuses/): the price has been re-checked and
accepted, and the booking is being placed.

**Reconciling** — a [booking status](/en/booking/statuses/#reconciling): it is not yet known whether
the supplier took the booking. OneRate re-checks for up to 24 hours. **Do not book the stay again
while it is in this state.**

**Refundability** — whether a rate can be cancelled free of charge. One of the properties that must
match for two offers to be comparable.

**Residency / guests' citizenship** — an optional search field. Some rates are restricted by
nationality or residency, so stating it can change the prices you see.

**Selling currency** — the one currency your agency sells in. Decides which offers are ranked in
your main list. Nothing is ever converted into it.

**Supplier** — a bedbank or wholesaler you hold a contract with. You bring the contract; OneRate
searches it. [More](/en/manage/suppliers/).

**Supplier preference rule** — an override of cheapest-first: *Always prefer* (a pin) or *Prefer
unless pricier* (unless another is more than *n*% cheaper). [More](/en/manage/preferences/).

**Voucher** — the PDF confirming the booking to the hotel. Issued for confirmed bookings, deleted
when guest data is erased.

**Why this supplier?** — the record kept with every automatic selection: offers considered, offers
excluded and why, and the deciding difference. Available on the result card and on the booking.
