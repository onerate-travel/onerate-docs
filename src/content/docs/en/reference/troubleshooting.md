---
title: Troubleshooting
description: The messages the portal shows, what each one actually means, and what to do about it.
---

## First, the one that matters most

:::danger
**A booking in *Reconciling* has an unknown outcome, not a failed one.** The supplier may have taken
it. Do not book the same stay again — book a different hotel or a different rate if the guest needs
a room now. [Full explanation](/en/booking/statuses/#reconciling).
:::

## Signing in

| Message | Meaning | Do this |
| --- | --- | --- |
| "That email and password combination was not recognised." | One of the two is wrong; the message is the same either way on purpose. | Check both. |
| "That verification code was not accepted." | Codes change every 30 seconds. | Enter the current one. If it keeps failing, turn on automatic date and time on your phone. |
| "Too many attempts." | Rate limiting. | Wait a minute. |
| "This account cannot sign in at the moment." | Suspended account, or an inactive subscription. | Ask your agency administrator. |
| "We could not reach OneRate." | Your network. | Check your connection. You were **not** signed in; nothing changed. |
| "Your session has ended." | The session expired with the tab open. | Sign in again. Unsaved work on that screen is lost. |
| "This invitation link is invalid or expired." | Expired, revoked, or already used. | Ask for a new one — the sender can resend from Team. |
| "This invitation is tied to this email address." | You are signed in as somebody else. | Sign out, then sign up with the invited address. |

## Searching

| Message | Meaning | Do this |
| --- | --- | --- |
| "We do not know that destination." | You typed instead of picking a suggestion. | Choose one from the list. |
| "State each child's age." | Suppliers price on child age. | Enter every age. |
| "Check-in is in the past." / "Check-out must be after check-in." | Invalid dates. | Fix them. |
| "Too many searches in a short time." | Rate limiting, protecting your supplier allowance. | Wait a moment. |
| "The search form has changed. These prices are still for the criteria above…" | The results belong to the old criteria. | Search again. Prices are never recalculated in the browser. |
| "Partial results — X stopped responding…" | A supplier answered incompletely. | Some hotels are missing. Search again if it matters. |
| "No hotels found for this search." | Nothing available — **check the supplier status line**. | If a supplier shows **Failed**, this is not a complete answer. Try again. |
| "The map provider could not be reached, so this map is drawn on OpenStreetMap." | Your Google Maps key or Google itself was unreachable. | Usually transient. If it persists, check the key in [Settings](/en/manage/settings/#map). |

### "It says there is nothing available, but I know there is"

In order:

1. **Read the per-supplier status line.** A **Failed** or **Partial** supplier means you did not get
   a complete answer.
2. **Check the supplier is enabled** on the [Suppliers](/en/manage/suppliers/) screen, and that its
   **Health** is not **Unavailable**.
3. **Check the destination.** A *supplier place* reaches one supplier only; a catalog city reaches
   all of them.
4. **Check the currency section.** Offers priced in another currency are below the main list, not
   in it.
5. **Check your filters.** The count tells you how many the search actually found — *"0 of 48"* is a
   filter problem, not a search problem.
6. **Check star filtering.** Unrated hotels are excluded by *any* star choice.

## Booking

| Message | Meaning | Do this |
| --- | --- | --- |
| "add a corporate contact in Settings before you can book" | No booking contact for the agency. | Owner or admin adds email **and** phone in [Settings](/en/manage/settings/). |
| "Enter the lead guest's first and last name" | Incomplete lead guest. | Fill both. |
| "The price changed to …" | The supplier re-priced. | Confirm the new price, or decline. Nothing is booked while you decide. |
| "This hotel has no rates for these dates right now." | The rate sold out or the link is stale. | Search again. |
| "This link is missing something we need to price the stay." | A truncated or hand-edited hotel link. | Go back and search again. |
| "That booking key was already used for a different booking." | The double-booking protection working. | Start a new search. Nothing was double-booked. |
| "Too many booking attempts in a short time." | Rate limiting. | Wait. Retrying now is refused too. |
| "Booking failed. Please try again." | A general failure. | **Check [Bookings](/en/booking/your-bookings/) first** to confirm nothing was created, then retry. |

## Bookings and cancellation

| Message | Meaning | Do this |
| --- | --- | --- |
| "Booking could not be cancelled." | The supplier refused or did not answer. It is **not** cancelled. | Do not repeat it blindly — cancellation is not idempotent at most suppliers. Check the timeline, then contact the supplier. |
| "The cancellation fee is not known yet…" | The supplier has not stated one. | Their terms decide it. It will be recorded when known. |
| "The supplier confirmed a different amount than it quoted." | Net moved between quote and confirmation. | Your real margin on that booking differs. Take it up with the supplier. |
| "This booking is no longer in review — someone else resolved it first." | A colleague got there first. | Reload. Nothing was overwritten. |
| "Guest data could not be erased." | Erasure may be part-done. | Run it again — it is safe to repeat. |
| "Estimate — this supplier states no time zone…" | The deadline is the earliest it could fall. | Treat it as the last safe moment. Cancel before it, never at it. |
| "Unconfirmed — this booking was recorded before we stored whether the deadline is the supplier's own or an estimate." | An old booking. | Check with the supplier before relying on the deadline. |

## Suppliers and settings

| Message | Meaning | Do this |
| --- | --- | --- |
| "…the key was rejected" | Wrong, expired, or the wrong **environment**. | Check sandbox vs live, then replace the key. |
| "…the supplier is rate-limiting us" / "did not answer in time" / "could not be reached" | **The key may well be fine.** | Wait and test again. Do not replace a working key over a supplier outage. |
| "The new key was not accepted; the old one is still in use." | The replacement failed. | Nothing is broken. Check the new key and try again. |
| Health: **Unavailable** | OneRate has paused calls after repeated failures. | It clears itself. It prevents every search waiting on a timeout. |
| "Not set — required before a supplier can be enabled" | A value only your agency can know is missing. | Set it where the message points. OneRate will not invent it. |
| "a stored setting is unknown or invalid" | Your configuration cannot be read, and **no default was substituted**. | Contact OneRate support. |
| "Email and phone must be filled in together, or cleared together." | Half a contact is not a contact. | Fill both, or clear both. |
| "Google refused this key" | The key is wrong or the **Map Tiles API** is not enabled for it. | Fix it in the Google Cloud console and enter it again. |

## Reports

| Message | Meaning | Do this |
| --- | --- | --- |
| "X booking(s) are priced in … and are NOT included in the … totals" | Other-currency bookings are excluded rather than converted. | Handle them separately. If it is every report, check your [selling currency](/en/manage/pricing/). |
| "Only the first N bookings are shown, and the totals above cover only those." | The range was capped. **The totals are of shown rows only.** | Narrow the check-in range and run it again. |

## Still stuck

- A word you do not recognise → [Glossary](/en/reference/glossary/)
- Something your role cannot do → [Roles and permissions](/en/start/roles/)
- Anything else → your agency owner or admin, and then OneRate at
  [hello@onerate.travel](mailto:hello@onerate.travel).

When you write in, include the **booking's confirmation reference** or the **hotel and dates** of
the search. Those are what let anyone find the same record you are looking at.
