---
title: Reports
description: What you sold, filtered by check-in date and status, broken down by supplier, month, person, branch and customer, and exported to CSV.
---

**Reports** is read-only. It is your own bookings, totalled. Available to owners, admins and
agents; not to customers.

## Filters

- **Check-in from / to** — a range over the **stay**, not over when the booking was made. A report
  for August is a report of August stays.
- **Status** — one [booking status](/en/booking/statuses/), or all.

## The table

One row per booking: check-in, hotel, destination, guest, your **file number**, the **branch**, who
**took the booking**, supplier, status, **net**, **sell**, and the **cancellation terms** as they
stood when it was booked.

Above it: the number of bookings, **Total net** and **Total sell** — one pair per currency. The
difference between the two is your margin for that set.

## Breakdowns

Two are about your inventory:

- **By supplier** — bookings, net and sell per supplier. This is the number to read next to your
  [supplier preferences](/en/manage/preferences/): it tells you whether a pin or a percentage rule
  is actually delivering the volume you set it up for.
- **By check-in month** — the same, per month of stay.

Three are about your own shape:

- **By person** — who sold what. Named by email address, because a name is not unique and an
  internal id is not readable.
- **By branch** — which office sold what.
- **By customer** — which corporate client the volume came from.

Rows that belong to nobody get their **own segment** rather than being dropped: a booking made
before there were branches, or by an account since removed, is still a booking, and leaving it out
would mean the per-person numbers did not add up to your total.

Every segment is **per currency**, for the same reason the totals are: OneRate converts nothing, so
a branch trading in two currencies is two segments — arithmetically correct rather than one number
that means nothing.

## Export

**Export CSV** downloads the filtered rows. Same columns as the table, so a spreadsheet total
matches what is on screen.

If you have defined [agency fields](/en/manage/settings/#agency-fields) — a cost centre, a project
code — each one is an extra column, whether or not anything was recorded in it. A column that came
and went depending on what happened to be booked could not be pasted into the same spreadsheet
twice.

The export deliberately carries **neither your internal note nor the remark sent to the hotel**. A
file that leaves the product cannot be recalled, and those two are where free text about a guest
ends up.

If it fails, try again — nothing is partially written.

## Two notes that change what the totals mean

Read both before you quote a number to anyone.

### Currency

You get **one total per currency**, your agency's own first, and nothing is left out.

Nothing is converted either: a stay you bought in USD is totalled in USD, because the rate OneRate
would have to invent to add it to your EUR figure is not the rate your bank will give you.

If you see more totals than you expected, that is your business having more currencies than you
expected — not a filter to fix. See [Pricing](/en/manage/pricing/).

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
