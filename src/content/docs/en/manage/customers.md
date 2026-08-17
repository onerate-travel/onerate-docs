---
title: Customers
description: Letting your corporate clients book for themselves under your supplier contracts, the roles inside a customer, pricing bands, open-booking ceilings, and exactly what they can and cannot see.
---

A **customer** is one of your corporate clients, set up in OneRate so their own people can search
and book under *your* supplier contracts, at *your* prices.

Owners and admins set them up.

## Why you would

The alternative is your agent taking the request by phone or email and typing it in. If a client
books enough, letting them do it themselves removes that step without giving anything away — your
contracts, your suppliers and your net rates stay yours.

## Setting one up

1. **Customers → Add a customer.** Give it the company's name.
2. Open it and use **Invite**: enter the person's email address, choose the **role** they join as,
   and press **Invite**.
3. Copy the invitation link and send it to them. They join after opening it and signing up.

Under **{name} — people** you see everyone: **Joined** for accepted, **Invited** for pending. You
can **Copy link** again or **Revoke** an invitation — revoking stops the link working immediately.

An invitation that has already been accepted cannot be revoked; remove the person from the customer
instead.

## The three roles inside a customer

| Role | Sees | Also can |
| --- | --- | --- |
| **Arranger** | Their company's bookings | Book for anyone in their company |
| **Traveller** | **Only the bookings they made themselves** | — |
| **Customer administrator** | Their company's bookings | Invite their own colleagues, and manage their own company's settings |

The arranger is the default, and it is what every customer user was before these existed.

Give **traveller** to people who only book their own trips: a colleague's booking does not appear
in their list at all, and opening one by its link tells them it does not exist rather than that they
may not see it.

Give **customer administrator** to the person at that company who should be doing this work instead
of you — inviting their own colleagues and setting their own fields. They reach their own company
and nothing of yours; the boundary is the company, not the role.

None of the three can cancel, and none of them ever sees a supplier name or your net rate.

## What a customer user sees

| They see | They do not see |
| --- | --- |
| Hotels and availability | Which supplier the rate came from |
| Prices **with your margin applied** | Your supplier net rate |
| Their own company's bookings (a traveller: only their own) | Any booking in your agency, or in another company |
| Their own vouchers and confirmation details | Your reports, suppliers, team or settings |

Supplier identity is stripped from everything they touch — the results, the booking, the detail
page. There is no expander, no trail, no reference that leaks it.

They also **cannot cancel**. Their booking page tells them to contact you, and warns them not to
call the hotel directly:

> To cancel or change this booking, contact your agency — they hold the supplier contract and are
> the only ones who can change it. Do not call the hotel directly: a change made there would not
> reach this record.

## What you see

**Customer Bookings** lists every booking made by every customer's users, with a filter for which
customer. It has the same columns as your own bookings plus the customer, and each booking's detail
page is the full one — supplier, net, fees and all.

Cancelling a customer's booking is your job, from that page.

## Prices for a customer

Customers are part of your organisation chain, so your [margin](/en/manage/pricing/) and your
agency configuration flow down to them by default. A customer can carry its own margin — useful
when one client is on different commercial terms — and the nearest level with a value wins.

Clearing a customer's own margin falls back to your agency's, not to zero.

### Pricing bands

If you price groups of customers alike — "A bayileri" on one rate, "B bayileri" on another — put
them in a **pricing band** instead of repeating yourself. The band column is on this screen; the
bands themselves are in [Pricing](/en/manage/pricing/#pricing-bands).

A band sits **between** a customer's own margin and your agency's: a customer with its own rate
keeps it, and everyone else in the band gets the band's.

A customer belongs to at most one band. Moving them between bands is the same dropdown.

## Open-booking ceiling

You can cap how much one customer may have **open** at a time. The column is on this screen: an
amount in your selling currency, or empty for no ceiling.

**Open** means bookings that are neither cancelled nor already stayed, added up at the price you
sell them at. A booking that would take the customer over the ceiling is refused before it reaches
the supplier, and the agent is told to speak to you.

:::caution
This is **not a credit limit.** OneRate never sees a payment, so nothing about it changes when a
customer pays you. The ceiling falls as stays complete and bookings are cancelled — nothing else.

It answers *"stop this client running away with bookings they cannot pay for"*. It does not answer
*"give this client 50,000 of credit"*; nothing in OneRate does, by design.
:::

It applies **per currency**. A ceiling set in EUR says nothing about a booking priced in TRY,
because OneRate does not convert between currencies — and a limit is the worst place in the product
to start inventing an exchange rate.

## Before you invite anyone

Two things to have in place first, because a customer hitting either of these will simply be told
booking is unavailable and will call you:

1. **A corporate booking contact** in [Settings](/en/manage/settings/) — both email and phone.
   Without it no booking can be made, by anyone. The customer's version of the message tells them
   to ask you.
2. **A margin you are happy for them to see.** They see the sell price. If your margin is unset,
   they are looking at your supplier's net price.

## Removing access

**Revoke** kills a pending invitation. To remove someone who has already joined, remove them from
the customer's people list — their bookings stay on record.
