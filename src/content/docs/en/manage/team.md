---
title: Team
description: Inviting colleagues, choosing and changing their role, branches, what each colleague may commit alone, suspending access, and removing people.
---

**Team** is your agency's own staff. Owners and admins.

## Inviting a colleague

1. **Team → Invite a colleague.**
2. Enter their **email address**. The invitation is tied to it — they must sign up with that exact
   address.
3. Choose their **role**: Admin or Agent. See [Roles and permissions](/en/start/roles/) for what
   each may do. (An agency has one owner and it is provisioned, not invited.)
4. **Create invitation.**
5. Copy the **invitation link** and send it to them.

The portal gives you a link rather than assuming email delivery worked. Send it however you
normally reach that person.

## Pending invitations

Everyone who has been invited and has not yet joined, with the date the invitation expires.

- **Resend** issues a fresh link — use it when the old one expired or was lost.
- **Revoke** stops the link working immediately.

If an action fails with *"it may already have been accepted or revoked"*, reload the screen: the
person probably joined while you were looking at a stale list.

## Choosing a role

Give the least that does the job.

- **Agent** for anyone whose work is searching and booking. They cannot cancel, cannot see
  supplier credentials, and cannot change settings.
- **Admin** for whoever actually runs the agency's OneRate setup — suppliers, team, settings,
  cancellations.
- **Agency owner** only for the person who owns the commercial relationship. It is the only role
  that can manage the subscription, and it is the role that **must** use two-step verification.

An owner account is not a convenience account. Two-step verification is mandatory on it and cannot
be turned off.

## Changing a role

The role is a dropdown on the person's row. Change it and it applies to their next request — there
is nothing to save and nothing to sign out of.

Their bookings are unaffected: a booking belongs to the agency, not to the account that made it.

**An agency always keeps at least one active owner.** Changing the last owner's role is refused
rather than performed, because an agency with no owner has nobody left who could appoint one.

## Suspending someone

**Suspend** switches a colleague off without removing them. Every action is refused from their next
request, and their invitations and bookings stay exactly where they are.

Use it for the case removal does not fit: somebody on leave, somebody under investigation, somebody
whose laptop is missing. **Restore** puts them back.

Their sign-in still works — they may belong to another agency, and that is none of this agency's
business. What they see here is a message naming the suspension rather than a broken screen.

The same rule as above applies: the last active owner cannot be suspended.

## Branches

If your agency works out of more than one office, **branches** give you the dimension to say so.

Add one by name under **Branches**. Then, on each person's row, choose the branch they work at.

What a branch is for:

- **Every booking is stamped with the branch that took it**, at the moment it is made. It is read
  from the person, not chosen on a form, so nobody can file a booking under an office they do not
  work at.
- Reports break down [by branch](/en/manage/reports/#breakdowns).
- A member can be **limited to their own branch** — the tick beside their role. They then see their
  branch's bookings and their branch's colleagues, and nothing else.
- A branch can hold its **own supplier account**: see [Suppliers](/en/manage/suppliers/).
- A branch can carry its **own address, phone and licence number**, which is what appears on the
  vouchers it issues. A guest ringing at 23:00 rings the desk that sold them the room, not head
  office.

Closing a branch unassigns its people; their memberships and their bookings survive, and a booking
taken by a branch that no longer exists is still a booking that happened.

A branch that holds its own supplier account **cannot be closed** until that account is removed —
the credential is what cancels its past bookings, and deleting it would strand them.

## What each colleague may commit alone

Beside each person's role is an **approval ceiling**: the most they may commit without being asked.

A booking above it is **held**. Nothing is sent to the supplier — no room, no rate, no cancellation
terms — and the owners and administrators of your agency get an email naming the amount and who
asked. They approve it or refuse it from the booking's own page. See
[Bookings](/en/booking/your-bookings/#approval).

It is a ceiling on what one person may commit **alone**, not on what your agency may commit. That is
the difference between this and a customer's
[open-booking ceiling](/en/manage/customers/#open-booking-ceiling), which refuses the booking
outright.

Leaving the field empty means no ceiling — which is what everybody has until you state one. The
field needs your agency's [selling currency](/en/manage/pricing/) first: a ceiling in a currency you
do not sell in would say nothing about the money you actually take, so OneRate refuses to guess one.

Owners and administrators may always approve. An agent never can — the same reasoning that withholds
cancelling from them, in [Roles](/en/start/roles/#why-an-agent-cannot-cancel).

## Removing someone

**Remove** takes them out of your team. You are asked to confirm by name.

Their past bookings stay exactly where they are, and the agency keeps working. Do this the day
someone leaves; a departed colleague's session is otherwise as valid as anyone's.

:::note
Removing someone from the team does not delete their OneRate account — it removes their access to
*your* agency. If they belong to another agency, that is unaffected.
:::

## What a new colleague should read first

Send them here:

1. [Signing in](/en/start/signing-in/) — accepting the invitation and setting up two-step verification
2. [The portal](/en/start/the-portal/) — finding their way around
3. [Running a search](/en/search/running-a-search/) and [Booking a stay](/en/booking/booking-a-stay/) — the actual job
4. [Booking statuses](/en/booking/statuses/) — specifically, why you never rebook a **Reconciling** stay
