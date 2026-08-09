---
title: Roles and permissions
description: The five roles, exactly what each one may do, and why some abilities are deliberately withheld.
---

Every account has exactly one role in an agency. The role decides which screens appear and which
actions are permitted. Nothing is permitted by default — an ability you do not see listed below,
your role does not have.

## The five roles

| Role | Who it is for |
| --- | --- |
| **Agency owner** | The person who owns the OneRate relationship. Everything, including the subscription. |
| **Admin** | Runs the agency day to day. Everything except the subscription. |
| **Agent** | Sells. Searches, books and views bookings. |
| **Customer** | A person at one of *your* corporate customers, booking their own trips under your contracts. |
| **Platform** | OneRate's own staff. Provisions agencies and supplier definitions — and deliberately cannot touch any agency's bookings. |

## What each role may do

| Action | Owner | Admin | Agent | Customer |
| --- | :---: | :---: | :---: | :---: |
| Run a search | ✅ | ✅ | ✅ | ✅ |
| Create a booking | ✅ | ✅ | ✅ | ✅ |
| View bookings | ✅ | ✅ | ✅ | own only |
| View reports | ✅ | ✅ | ✅ | — |
| Cancel a booking | ✅ | ✅ | — | — |
| Resolve a booking in manual review | ✅ | ✅ | — | — |
| Erase guest data from a booking | ✅ | ✅ | — | — |
| Manage supplier credentials | ✅ | ✅ | — | — |
| Manage team members and invitations | ✅ | ✅ | — | — |
| Manage agency settings | ✅ | ✅ | — | — |
| Manage the subscription | ✅ | — | — | — |

## Why an agent cannot cancel

This surprises people, so it is worth stating plainly: **cancellation fees are real money.** An
agent can create a booking, because that is the job; cancelling one can cost the agency a fee under
a contract the agent did not sign. So cancellation sits with the owner and the admin.

The same reasoning puts two other actions there:

- **Resolving a booking in manual review** is a permanent statement that a booking does or does not
  exist at the supplier. It is not a day-to-day task, and getting it wrong is not recoverable.
- **Erasing guest data** cannot be undone.

If your agency wants agents to cancel, that is a product change, not a setting — tell OneRate.

## What a Customer sees, and does not see

The Customer role exists so your corporate clients can book their own trips under *your* supplier
contracts. What they see is deliberately narrower:

- They see hotels and prices **with your margin already applied**.
- They **never see supplier names**, and they **never see your net rate**. A customer cannot work
  out what you paid.
- They see **only their own bookings**, never the agency's.
- They **cannot cancel**. Their booking screen tells them to contact your agency, and warns them
  not to call the hotel directly — a change made there would never reach the record.

See [Customers](/en/manage/customers/) for how to set them up.

## Two-step verification

Two-step verification is **required** for agency owners (and for OneRate's own platform staff).
Every other role may turn it on voluntarily from [My account](/en/account/security/), and should.

## Changing someone's role

There is no role editor. To change what a colleague may do, remove them from the team and invite
them again with the role you want. See [Team](/en/manage/team/).
