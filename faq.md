# Frequently asked questions

If you're wondering whether CipherSend is safe to use, what happens to your data, or what to do if something looks off, here are direct answers.

> **In short:** CipherSend is free, end-to-end encrypted, requires no account, and stores nothing — no secret, no keys, no message history. A session holds exactly two people for one exchange, verifies the connection with a comparison phrase, and expires on its own.

## General

**What is CipherSend?**

CipherSend lets one person (the Host) hand a short-lived secret — a password, private key, API token, or TOTP seed — directly to one other person (the Guest), browser-to-browser, end-to-end encrypted.

**Do I need to create an account?**

No. CipherSend has no accounts, no login, and collects no personal information to use it.

**What can I share with it?**

It's designed for short-lived secrets like passwords, private keys, API tokens, or TOTP seeds — not general files.

**Who is it for?**

Anyone who needs to hand off a sensitive credential to exactly one other person, one time, without leaving a copy of it sitting in email, chat, or a shared document afterward.

## Using CipherSend

**How do I start a session?**

Click "Create a secure link." A one-time link and QR code are generated immediately — no setup required.

**How does the other person join?**

By opening the link or scanning the QR code, then clicking the "Join secure session" button. The page doesn't connect automatically on its own.

**Why do I have to click "Join secure session" instead of it just connecting?**

That one click confirms a real person opened the link, rather than something like an automated chat-app link preview accidentally taking the one available spot in the session before you get there.

**Can more than two people join the same session?**

No. A session accepts only the Host and one Guest; a third connection attempt is rejected.

**What's the warning about QR scanner apps?**

CipherSend recommends scanning the QR code with your phone's built-in camera app only — third-party QR scanner apps are known to send scanned links to their own servers first.

**How do I know I'm actually connected to the right person, and not someone else?**

After connecting, both browsers display a short comparison phrase (a handful of plain words). Read it to each other over your call, chat, or in person — if it matches on both screens, you're connected to the right person.

**What if the phrase doesn't match?**

Don't approve. A mismatch means the connection may not be trustworthy — stop and start a new session instead.

**Do both people need to approve before the secret can be sent?**

Yes. Each person approves independently on their own side. Approval on one side never happens automatically because the other side approved.

**What happens after I copy the secret?**

CipherSend makes a best-effort attempt to automatically clear your clipboard after about 30 seconds. This isn't guaranteed to work on every browser, so a "Clear clipboard now" button is always available if you want to be sure.

**How long does a session stay open?**

By default, a session closes after about 10 minutes of inactivity, and every session has a hard limit of about 30 minutes total, regardless of activity.

**I got disconnected mid-session — what happens?**

Both sides restart the verification step from scratch: fresh keys, a fresh comparison phrase, and a fresh approval. Nothing from before the disconnect is assumed to still be trustworthy — you'll be prompted to re-verify.

**Do I have to click "Join" again if I get disconnected and reconnect?**

No. That join click is only required once, the first time you open the link. Reconnections after that (for example, if your phone's browser tab was put to sleep and restored) don't ask again.

## Security & Trust

**Is CipherSend end-to-end encrypted?**

Yes. The secret is encrypted in the sender's browser and only decrypted in the recipient's browser, using industry-standard encryption computed entirely client-side.

**Can CipherSend's server read my secret?**

No. The server only relays encrypted data between the two browsers — it's built to never interpret or make sense of what's inside.

**Does the server store my secret anywhere?**

No. The secret, the encryption keys, and the comparison phrase are never stored on the server, even temporarily.

**What if CipherSend's server were somehow compromised?**

The server was never trusted with your secret in the first place, so it has nothing to hand over — it doesn't hold the keys, the secret, or the comparison phrase used to verify the connection.

**Does CipherSend protect me if my own device is compromised?**

No. If a device involved is already compromised, no sharing tool can fully protect what happens on it. This is an explicitly acknowledged limitation, not something CipherSend claims to solve.

**Can I use CipherSend for a private, off-the-record conversation?**

Yes. Here is what anyone else could see. An eavesdropper sees only encrypted data, because everything is end-to-end encrypted (E2EE) in your browsers. The server sees nothing useful: it only relays that data, it stores nothing, and it never holds your keys or your words. An attacker sitting in the middle can't slip in unnoticed, because you and the other person compare a short phrase first, and a mismatch tells you the connection isn't safe. Once the session ends, no history is left behind on our side.

## Privacy & Data

**Does CipherSend collect personal information?**

No. There are no accounts, and no personally identifying information is required or collected to use it.

**Are my IP address or other details logged?**

Raw IP addresses and other identifying details are never logged directly. Any operational data used to prevent abuse is processed in a way that doesn't retain it in a directly readable form, and only briefly.

**Is my secret, key, or comparison phrase ever stored in cookies or browser storage?**

No. None of these values are ever written to cookies, local storage, session storage, or the browser's address bar.

**What data does CipherSend keep at all?**

Only the minimum needed to operate the service — for example, a short-lived record that a session exists and when it expires, and temporary counters used to prevent abuse. None of this includes the content of what you send.

## Limitations — Good to Know

**Is CipherSend a general file-sharing tool?**

No. It's built specifically for short-lived text secrets, not general file transfer.

**Does CipherSend keep a history of past sessions or messages?**

No. There's no message history and no way to resend something from a closed session.

**What if I ignore the comparison phrase and just approve anyway?**

The comparison phrase only protects you if you actually check it. Approving without comparing removes the one safeguard designed to confirm you're connected to the right person.

**Why does the page say "Open in your browser" instead of loading normally?**

This appears if your current browser or app can't run the security checks CipherSend depends on (for example, some in-app browsers inside chat apps). Opening the link in your device's regular browser usually resolves it.

## Next steps

- [Read the security details](/security)
- [Read the privacy details](/privacy)