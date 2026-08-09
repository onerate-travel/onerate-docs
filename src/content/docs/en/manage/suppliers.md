---
title: Suppliers
description: Connecting your own supplier contracts, testing and rotating keys, enabling and disabling, health, and rate caching.
---

OneRate does not resell anybody's inventory. You bring the contracts you already hold, and OneRate
searches them on your behalf. This screen is where your credentials live.

Owners and admins only.

## Adding a supplier

1. **Suppliers → Add a supplier.**
2. Choose the supplier from the list.
3. Choose the **environment** — **Sandbox** or **Live**. This is the supplier's own environment
   that the key belongs to, and a sandbox key cannot be used in production. Getting this wrong is
   the single most common setup mistake.
4. Enter the credentials your supplier issued you.
5. Optionally give it a **label**, useful when you hold two contracts with the same supplier.
6. **Add supplier.**

Credentials are encrypted before they are stored, are decrypted only at the moment a request is
made to that supplier, and are never sent back to your browser. Not even you can read a stored key
back out of the portal — if you lose it, get a new one from the supplier and replace it here.

## Testing a key

**Test** makes a real call to the supplier with the stored credentials.

| Result | Meaning |
| --- | --- |
| "…accepted the stored credentials." | The key works. |
| "…the key was rejected" | The key is wrong, expired, or for the other environment. Replace it. |
| "…the supplier is rate-limiting us" | The key **may well be fine**. Wait and test again. |
| "…the supplier did not answer in time" | The key may be fine. The supplier is slow or down. |
| "…the supplier could not be reached" | The key may be fine. A network or supplier outage. |

Only the first failure is about your key. The rest are statements about the supplier, and the
wording is careful about the difference on purpose — replacing a working key because the supplier
was briefly down makes things worse.

## Replacing a key

**Replace key** takes a new credential and swaps it in. If the new key is not accepted, **the old
one stays in use** — you cannot break a working connection with a bad paste.

Do this on the supplier's schedule, and immediately if a key may have leaked.

## Enabling and disabling

Only **enabled** suppliers are searched.

**Disable** takes a supplier out of every search without deleting anything. Use it when a contract
is paused, when a supplier is having a bad day and slowing your searches down, or while you sort a
credential problem out. Re-enable at any time.

**Remove** deletes the supplier and its stored credentials. This is not reversible — you will need
the credentials again to re-add it.

:::note
A supplier cannot be enabled until your agency has the settings that supplier's use depends on —
for example your request allowance. The portal names the missing value and links to where it is
set. See [Settings](/en/manage/settings/).
:::

## Health

The **Health** column is OneRate's live view of that supplier, not a contract status:

| Health | Meaning |
| --- | --- |
| **Healthy** | Normal. Requests are going through. |
| **Recovering** | It was failing; OneRate is carefully letting traffic through again. |
| **Unavailable** | Failing consistently, so OneRate has stopped calling it for a period rather than making every search wait for a timeout. |

**Unavailable** is a protection, not a punishment. A supplier that is down would otherwise add its
full timeout to every search you run. It clears itself when the supplier recovers.

This is also what you will see reflected in the per-supplier status line on the search screen.

## Rate caching

OneRate briefly caches a supplier's rates so that repeating a search seconds later does not spend
another request from your allowance.

**Stop caching** turns that off for one supplier — every search then asks it fresh. Use it when you
are chasing a pricing discrepancy and need to see exactly what the supplier says right now. A
supplier with caching off is marked **Not cached** so nobody wonders why searches got slower.

Cached rates are always scoped to your agency. Your contracted rates are never served to another
agency, and another agency's are never served to you.

## Which suppliers are available

The list on the **Add a supplier** screen is what OneRate currently has adapters for. If your
contract is with a supplier that is not listed, tell OneRate — adding one is product work, not a
setting you can toggle.

## Next

- [Supplier preferences](/en/manage/preferences/) — overriding cheapest-first for volume commitments
- [Pricing and margin](/en/manage/pricing/)
