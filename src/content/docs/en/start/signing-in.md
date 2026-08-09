---
title: Signing in
description: Accepting an invitation, signing in, two-step verification, backup codes, and what to do when you cannot get in.
---

The portal is at **[app.onerate.travel](https://app.onerate.travel)**.

You cannot sign yourself up. Accounts exist because somebody invited you: your agency's owner or
admin invites colleagues, and an agency invites its customers. If you have no invitation, ask the
person who runs your agency's OneRate account.

## Accepting an invitation

You will receive a link. Opening it shows who invited you and which email address the invitation
was issued to.

1. Open the link.
2. Sign up — or sign in, if you already have a OneRate account — **using that exact email address**.
   The invitation is tied to it and will not accept another.
3. Verify your email if you are asked to. Check your inbox for the verification link, then return
   and press **Accept invitation** again.
4. Press **Accept invitation**.

Invitations expire. If yours has, the page says so — ask for a fresh one; the sender can resend from
their [Team](/en/manage/team/) screen.

## Signing in

Enter your email and password and press **Sign in**.

- **Keep me signed in on this device** extends your session on that browser. Do not use it on a
  shared machine.
- After too many failed attempts, sign-in is refused for a short period. Wait a minute and try
  again — retrying immediately will not work.
- **"This account cannot sign in at the moment."** means your account has been suspended or your
  agency's subscription is not active. Contact your agency administrator.

## Two-step verification

Two-step verification is **required for agency owner accounts** and optional for everyone else. If
it is required for you, the portal takes you through setup on your first sign-in and will not let
you past it.

### Setting it up

1. Confirm your OneRate password.
2. Add the verification key shown to an authenticator app — Google Authenticator, Microsoft
   Authenticator, 1Password, Authy or any other TOTP app. On a phone you can press **Open in your
   authenticator app** instead of typing the key.
3. Enter the six-digit code your app generates and press **Verify code**.

### Backup codes

After setup you are shown a set of backup codes. **They are shown once and never again.**

Each code signs you in exactly once, and is what you use if you lose the phone with your
authenticator on it. Press **Copy codes** or **Download as a file** and put them somewhere you can
reach without that phone — a password manager, not the phone's own notes app.

To sign in with one, choose **Use a backup code instead** on the verification step.

You can replace your backup codes at any time from [My account](/en/account/security/). The old
ones stop working the moment new ones are generated.

:::caution
Codes from your authenticator change every 30 seconds. "That verification code was not accepted"
almost always means you typed a code that had already expired, or that your phone's clock has
drifted. Enter the current code; if it keeps failing, check that automatic date and time is on for
your phone.
:::

## Forgotten password

1. Press **Forgot your password?** on the sign-in screen.
2. Enter your email and press **Send reset link**.
3. Open the link in the email and choose a new password.

The confirmation says "if that address has an account" whether or not it does — that is
intentional, so the screen cannot be used to discover who has an account. The link expires shortly
and works only once; if it has been used or has expired, request a new one.

## If you cannot get in

| What you see | What it means |
| --- | --- |
| "That email and password combination was not recognised." | One of the two is wrong. Check both — a wrong email gives the same message as a wrong password, on purpose. |
| "Too many attempts. Wait a minute, then try again." | Rate limiting. Waiting is the only fix. |
| "This account cannot sign in at the moment." | Suspended account or inactive subscription. Ask your agency administrator. |
| "We could not reach OneRate." | A network problem on your side. You have **not** been signed in and nothing has changed. |
| "Your session has ended." | Your session expired while the tab was open. Sign in again — unsaved work on the screen is lost. |

## Changing language

Every screen has a language switcher. It is in the header bar, next to your currency, and it is a
drop-down list: English, Türkçe, Български, Magyar, Italiano, Polski and Română. Each language is
named in itself, so look for the name as you would write it. Your choice is remembered on that
browser.
