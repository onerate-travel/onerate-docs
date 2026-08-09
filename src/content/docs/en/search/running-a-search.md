---
title: Running a search
description: Filling in the search form — destination, dates, rooms, guest ages and citizenship — and reading the supplier progress line while results arrive.
---

**Search** is where the work starts. One form, asked of every supplier you have enabled, at once.

## The form

### Destination

Start typing. The list that appears has two kinds of entry:

- **Catalog places** — cities, airports and regions OneRate knows about. These can be searched
  across every supplier.
- **Supplier places** — hotels and places that one particular supplier recognises. These reach that
  supplier only.

Each suggestion is labelled **City**, **Airport**, **Hotel** or **Place**.

:::caution
**You must pick a destination from the list.** Typed free text is refused with "We do not know that
destination." This is deliberate: handing every supplier a string each of them interprets
differently, and then reporting the empty result as "no availability", is worse than refusing.
:::

### Check-in and check-out

Pick both dates in the calendar. Rules the form enforces:

- Check-in cannot be in the past.
- Check-out must be after check-in.

Dates are the hotel's own calendar dates, not your timezone's.

### Rooms and guests

Press the guests field to open it. For each room, set the number of adults and the number of
children.

**Every child needs an age.** The form will not submit without them, and this is not bureaucracy —
suppliers price on the child's age, and a missing age means a wrong price or a refused booking.

Use **Add room** for a second or third room. Each room has its own occupancy.

### Guests' citizenship

Optional, and it changes prices. Some suppliers and some hotels have rates restricted by
nationality or residency. Left as **Not stated**, you get the unrestricted rates.

## Running it

Press **Check availability**.

Results stream in as suppliers answer. You do not wait for the slowest one — the first hotels
appear while others are still being asked.

### The progress line

While the search runs you see **"3 / 5 suppliers responded"** and a status for each supplier:

| Status | What it means |
| --- | --- |
| **OK** | Answered normally. |
| **Slow** | Answered, but took long enough to be worth knowing about. |
| **Failed** | Did not answer, or answered with an error. Its hotels are missing from this list. |
| **Partial** | Started answering and stopped before finishing. Some of its hotels are missing. |
| **No coverage here** | This supplier has nothing mapped for this destination. Not an error. |

:::note
**Read this line before you tell anyone "there is nothing available".** "No hotels found" means
every supplier answered and none had anything. "No hotels found" *with a Failed supplier* means
something quite different — try again.
:::

**Stop this search** cancels a running search if you already have what you need.

## What "search again" means

The results on screen belong to the criteria that produced them. If you change the form without
re-running the search, the portal tells you:

> The search form has changed. These prices are still for the criteria above — search again to
> price the new ones.

Prices are not recalculated in the browser. There is no way to get a price for new dates without
asking the suppliers again.

## Search history

The portal keeps this session's earlier searches — destination, stay and occupancy — so you can
return to one without retyping it. It lives in the tab and is gone when the tab is.

## Limits and refusals

| What you see | What it means |
| --- | --- |
| "Too many searches in a short time." | Rate limiting, per agency. Wait a moment. Each supplier contract has its own allowance and this protects it. |
| "We do not know that destination." | You typed instead of picking. Choose a suggestion. |
| "Pick a check-in and a check-out date." | Both are required. |
| "State each child's age." | Every child needs one — the supplier prices on it. |

## Next

The results screen has its own page: what the groups mean, how to filter and sort, the map, and the
**Why this supplier?** record → [Reading the results](/en/search/reading-results/).
