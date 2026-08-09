---
title: Booking statuses
description: Every status a booking can hold, what it means for the guest, and the two that need a human — Reconciling and Manual review.
---

## The statuses

| Status | What it means | What you should do |
| --- | --- | --- |
| **Draft** | Created, not yet placed with the supplier. | Nothing — it is a moment long. |
| **Prebooked** | The price has been re-checked and accepted; the booking is being placed. | Nothing. |
| **Confirmed** | The supplier has it. A confirmation reference and a voucher exist. | Send the voucher. Done. |
| **Failed** | It did not happen, and we know it did not. Nothing exists at the supplier. | Book again if the guest still wants the stay. |
| **Reconciling** | We do not yet know whether the supplier took it. | **Wait. Do not book it again.** See below. |
| **Manual review** | Still unknown after 24 hours. A human has to settle it. | Owner or admin: check with the supplier and record what you find. See below. |
| **Cancelled** | Cancelled. Any fee the supplier charged is recorded on the booking. | Nothing. |
| **Amended** | The supplier reports the booking was changed. | Check the detail and the timeline. |

## Reconciling

This is the one status worth understanding properly.

**A supplier timeout means *unknown*, not *failed*.** The request may have arrived and been
accepted after the connection dropped. Treating that as a failure and rebooking is how an agency
ends up with — and pays for — two rooms.

So OneRate does not guess. It puts the booking in **Reconciling** and asks the supplier again, on a
widening schedule, for up to 24 hours. The portal says exactly this:

> We are checking with the supplier whether this booking went through. The check repeats
> automatically and resolves within 24 hours; if it is still unknown after that, it is escalated
> for a human to settle.
>
> Do not book this stay again in the meantime — if the supplier did take it, you would end up with
> two.

Three things can then happen:

- The supplier confirms it exists → **Confirmed**, and everything proceeds normally.
- The supplier is definitively certain it does not → **Failed**. Rebook freely.
- Still unknown after 24 hours → **Manual review**.

There is nothing to do while a booking is reconciling. The check runs whether or not the portal is
open.

:::caution
If the guest is standing in front of you and needs a room tonight, **book a different hotel or a
different rate** rather than the same one again. A second booking of the same stay is exactly the
duplicate this status exists to prevent.
:::

## Manual review

24 hours of automatic checks did not settle it. Somebody has to look.

Only an owner or admin can resolve it, because it is a permanent statement about what really
happened. The screen says:

> Reconciliation could not tell whether this booking reached the supplier. Check your supplier's
> own records and record what you find — this is the only way it leaves review.

### Resolving one

1. **Check the supplier's own extranet or call them.** Do not resolve from memory or inference.
   This is the whole job.
2. Open the booking and go to **Resolve this booking**.
3. Record what the supplier shows:
   - **The booking exists** — you must supply the **supplier confirmation reference**. Without it
     nothing identifies the booking at the supplier, so the form requires it.
   - **There is no such booking** — it is recorded as failed and the stay can be booked again.
   - **It exists but is already cancelled** — recorded as cancelled.
4. Press **Record this outcome**.

If someone else resolved it first, you will be told: *"This booking is no longer in review — someone
else resolved it first."* Nothing is overwritten.

## Bookings that need your attention

The navigation carries a count of bookings sitting in a status that will not resolve itself.
Follow it. A booking in manual review is a room a guest may or may not have, and it does not get
better on its own.

## Why statuses only move one way

A booking moves along a fixed path — Draft → Prebooked → Confirmed, or into Failed, Reconciling or
Manual review — and never backwards. The transitions are enforced at the moment they are written,
not checked afterwards, so two people acting at the same time cannot produce two outcomes.

Practically, this means: what you see on a booking is what happened. There is no repair path that
silently rewrites history, which is exactly why manual review requires a human statement rather
than a retry button.
