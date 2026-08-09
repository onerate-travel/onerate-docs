---
title: Reports
description: What you sold, filtered by check-in date and status, broken down by supplier and month, and exported to CSV.
---

**Reports** is read-only. It is your own bookings, totalled. Available to owners, admins and
agents; not to customers.

## Filters

- **Check-in from / to** — a range over the **stay**, not over when the booking was made. A report
  for August is a report of August stays.
- **Status** — one [booking status](/en/booking/statuses/), or all.

## The table

One row per booking: check-in, hotel, destination, guest, supplier, status, **net**, **sell**.

Above it: the number of bookings, **Total net** and **Total sell**. The difference between those
two totals is your margin for the filtered set.

## Breakdowns

- **By supplier** — bookings, net and sell per supplier. This is the number to read next to your
  [supplier preferences](/en/manage/preferences/): it tells you whether a pin or a percentage rule
  is actually delivering the volume you set it up for.
- **By check-in month** — the same, per month of stay.

## Export

**Export CSV** downloads the filtered rows. Same columns as the table, so a spreadsheet total
matches what is on screen.

If it fails, try again — nothing is partially written.

## Two notes that change what the totals mean

Read both before you quote a number to anyone.

### Currency

> 3 booking(s) are priced in USD, GBP and are NOT included in the EUR totals above. OneRate does not
> convert between currencies.

Bookings in a currency other than your selling currency are **left out of the totals** — they are
not converted at an invented rate. They are still in the table; they are simply not summed into a
number they do not belong in.

If this note appears on every report, your selling currency probably does not match how you
actually trade. See [Pricing](/en/manage/pricing/).

### Truncation

> Only the first 1000 bookings are shown, and the totals above cover only those. Narrow the
> check-in range to see a complete report.

A large range is capped. **The totals are of the shown rows only** — they are not a partial estimate
of a larger figure. Narrow the check-in range and run it again; two half-year reports are accurate
where one truncated year is not.

## What is not here

No ledger, no balances, no aging, no payment state, no invoicing. OneRate never touches booking
money, so it has nothing to say about what has been paid — only about what was sold. See
[Pricing](/en/manage/pricing/#what-onerate-does-not-do-with-your-money).

## A monthly routine that works

1. Set the check-in range to last month, status **Confirmed**.
2. Read **Total net** against **Total sell** — that is what you made.
3. Check the currency note. If rows are excluded, handle them separately.
4. Read **By supplier** against your contracts and volume targets.
5. Export the CSV for whoever does your accounts.

Then, separately, filter status to **Cancelled** for the same range and read the cancellation fees
on those bookings. Fees the supplier charged that you did not expect are the cheapest thing to find
early and the most expensive to find at invoice time.
