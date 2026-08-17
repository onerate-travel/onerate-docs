---
title: Roles and permissions
description: Every role in an agency and inside a corporate customer, exactly what each one may do, and why some abilities are deliberately withheld.
---

Every account has exactly one role in an agency. The role decides which screens appear and which
actions are permitted. Nothing is permitted by default — an ability you do not see listed below,
your role does not have.

## Your agency's own roles

| Role | Who it is for |
| --- | --- |
| **Agency owner** | The person who owns the OneRate relationship. Everything, including the subscription. |
| **Admin** | Runs the agency day to day. Everything except the subscription. |
| **Agent** | Sells. Searches, books and views bookings. |
| **Platform** | OneRate's own staff. Provisions agencies and supplier definitions — and deliberately cannot touch any agency's bookings. |

## What each role may do

| Action | Owner | Admin | Agent |
| --- | :---: | :---: | :---: |
| Run a search | ✅ | ✅ | ✅ |
| Create a booking | ✅ | ✅ | ✅ |
| View bookings | ✅ | ✅ | ✅ |
| Write the file number and internal note | ✅ | ✅ | ✅ |
| Set their own margin | ✅ | ✅ | ✅ |
| View reports | ✅ | ✅ | ✅ |
| Cancel a booking | ✅ | ✅ | — |
| Resolve a booking in manual review | ✅ | ✅ | — |
| Erase guest data from a booking | ✅ | ✅ | — |
| Manage supplier credentials | ✅ | ✅ | — |
| Manage team members and invitations | ✅ | ✅ | — |
| Manage agency settings | ✅ | ✅ | — |
| Manage the subscription | ✅ | — | — |

## Why an agent cannot cancel

This surprises people, so it is worth stating plainly: **cancellation fees are real money.** An
agent can create a booking, because that is the job; cancelling one can cost the agency a fee under
a contract the agent did not sign. So cancellation sits with the owner and the admin.

The same reasoning puts two other actions there:

- **Resolving a booking in manual review** is a permanent statement that a booking does or does not
  exist at the supplier. It is not a day-to-day task, and getting it wrong is not recoverable.
- **Erasing guest data** cannot be undone.

If your agency wants agents to cancel, that is a product change, not a setting — tell OneRate.

## Narrowing a role to one branch

If your agency has [branches](/en/manage/team/#branches), any member can be **limited to their own
branch**. It is a tick beside their role, not a role of its own.

A limited member sees only their branch's bookings, and only their branch's colleagues. Their
role's other permissions are unchanged: an admin limited to İzmir still administers, but everything
they administer is İzmir's.

Nothing they can type widens it. Asking the bookings list for another branch answers with their
own, because the limit belongs to who is asking rather than to what was asked.

## Roles inside a corporate customer

A **customer** is one of your corporate clients, whose own people book under *your* supplier
contracts. Their company has three roles of its own, and you choose which one each person gets when
you invite them.

| Role | Sees | Also can |
| --- | --- | --- |
| **Arranger** | The company's bookings | Book for anyone in their company |
| **Traveller** | **Only the bookings they made themselves** | — |
| **Customer administrator** | The company's bookings | Invite their own colleagues and manage their own company's settings |

The traveller is the narrow one, and it is the role a corporate client gives to most of its staff:
a colleague's trip does not appear in their list, and opening one by its link tells them it does not
exist rather than that they may not see it.

The customer administrator manages **their own** company — its people, its own fields, its own
margin. It reaches nothing of your agency's: the boundary is the company, not the role.

None of the three can cancel, and none of them ever sees a supplier name or your net rate. See
[what a customer sees](#what-a-customer-sees-and-does-not-see) below.

## What a customer sees, and does not see

The customer roles exist so your corporate clients can book their own trips under *your* supplier
contracts. What they see is deliberately narrower:

- They see hotels and prices **with your margin already applied**.
- They **never see supplier names**, and they **never see your net rate**. A customer cannot work
  out what you paid.
- They see their **own company's** bookings, never your agency's — and a traveller sees only their
  own.
- They **cannot cancel**. Their booking screen tells them to contact your agency, and warns them
  not to call the hotel directly — a change made there would never reach the record.

See [Customers](/en/manage/customers/) for how to set them up.

## Two-step verification

Two-step verification is **required** for agency owners (and for OneRate's own platform staff).
Every other role may turn it on voluntarily from [My account](/en/account/security/), and should.

Your agency can require more: see
[Who must use two-step verification](/en/manage/settings/#security-postures). An agency can widen
that requirement to its admins or to everyone who signs in — it can never narrow it below OneRate's
own floor.

## Changing someone's role

Change it in place from [Team](/en/manage/team/) — the role is a dropdown on the person's row, and
it takes effect on their next request. Nothing about their past bookings changes: a booking belongs
to the agency, not to the account that made it.

The one rule the portal enforces: **an agency always has at least one active owner.** Changing the
last owner's role, or suspending them, is refused rather than performed — an agency with no owner
has nobody who can put one back.
