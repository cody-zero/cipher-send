# What CipherSend knows about you: as little as possible

CipherSend is designed around a simple idea: the less it knows, the less there is to protect, leak, or hand over. Here's a plain breakdown of what is and isn't collected, and what's briefly kept just to keep the service running.

> **In short:** CipherSend has no accounts and never stores your secret, keys, or comparison phrase — anywhere, under any circumstance. It briefly holds only the minimum operational data needed to run (a session's existence and expiry, temporary abuse-prevention counters) and discards it on its own.

## 1. No Accounts, No Personal Information

- CipherSend has no sign-up, no login, and no user profile.
- You don't provide a name, email address, or any other personal identifier to create or join a session.
- The only thing generated is a random, single-use session link — not tied to any identity.

## 2. What Is Never Stored — Under Any Circumstance

> [!CAUTION]
> The following are never written to a database, disk, or log, under any condition:
> - Your secret, in any form (plaintext or encrypted).
> - Encryption keys, public or private.
> - The comparison phrase used to verify the connection.
> - The raw contents of any message exchanged during a session.
> - Any log entry containing an unhashed session link or an unmasked IP address.

> This isn't a policy choice that could be quietly changed later — it's built into how the system works: there is no database or code path that would let any of the above be written down.

## 3. What May Be Briefly Held — and Why

A small amount of operational information is held temporarily, purely to keep the service running and to prevent abuse. None of it reveals anything about what you sent:

| Data | Purpose | Retention |
| --- | --- | --- |
| Session existence record (creation time, expiry time, connection count) | Lets the server know a session exists and when to close it | Deleted automatically once the session ends |
| Rate-limiting counters, tied to a scrambled version of your network address | Prevents automated abuse (e.g., mass session creation) | Short, rolling time window, then discarded |
| Aggregate, anonymized usage counts | General service health monitoring | Not linked back to any individual session or address |
| Error reports from the browser's own security checks, if triggered | Helps catch technical issues | Sensitive fields (like the session link) are scrambled before storage |

## 4. How Your Network Address Is Handled

- Your IP address is never stored or logged in its raw, readable form.
- Before being used for abuse prevention, it's transformed using a keyed scrambling method, so the stored value can't be reversed back into your actual address, and can't be looked up in a precomputed table.
- It's used only to apply the temporary rate-limiting described above — never linked to your session content.

## 5. Cookies & Browser Storage

- Your secret, encryption keys, and comparison phrase are never written to cookies, local storage, session storage, or any other on-device browser storage.
- The one identifier that does appear anywhere client-visible is the session link itself — since that's how the link works — and it's treated as a one-time access token, not a secret in itself.
- Pages are marked not to be cached by your browser.

## 6. What Happens Outside CipherSend's Control

Some privacy considerations are outside what any web app can guarantee:

- **Clipboard syncing across your own devices.** If your operating system or browser automatically syncs your clipboard to other signed-in devices (for example, a phone-to-laptop handoff feature), a copied secret may be shared that way too. CipherSend's clipboard-clearing feature reduces this window but can't reach outside your own device ecosystem.
- **Downstream copies you make yourself.** Once you paste a secret somewhere else — a password manager, a message, a config file — that copy is now subject to wherever you put it, not to CipherSend.
- **Third-party QR scanner apps.** If you scan CipherSend's QR code with a third-party scanner app rather than your device's built-in camera, that app may see the link before you do. This is why CipherSend recommends the built-in camera specifically.

## 7. No Unnecessary Third Parties

- Session creation requests don't include any cross-origin sharing headers, meaning other websites can't piggyback on your session.
- The cryptography, QR code rendering, and comparison-phrase word list used by CipherSend are all built directly into the app itself, rather than pulled from third-party services at runtime.
- Browser privacy protections are enabled by default on the page — including restricting access to your camera, microphone, and location, none of which CipherSend needs or requests.

## 8. A Note on Compliance

> Because CipherSend collects no personal data and stores no secret content, its overall privacy exposure is minimized by its architecture rather than by policy alone. The categories of information it does briefly retain — anonymized aggregate metrics, short-lived abuse-prevention counters, and a temporary record that a session exists — contain nothing that identifies you personally, and all of it expires automatically.
>
> *This description reflects how the system is built. It is not a claim of certification under any specific privacy law or standard.*

## Common questions

**Does CipherSend collect personal information?**

No. There are no accounts, and no personally identifying information is required or collected to use it.

**Are my message contents ever stored?**

No. The raw contents of your messages, your secret, the keys, and the comparison phrase are never written to a database, disk, or log — under any condition.

**Is my IP address logged?**

Raw IP addresses are never stored or logged. They're transformed with a keyed scramble before being used only for temporary abuse-prevention, so the stored value can't be reversed into your actual address.

## Next steps

- [Read the security details](/security)
- [View full FAQ](/faq)