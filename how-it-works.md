# How CipherSend works

CipherSend lets one person (the **Host**) hand a secret — a password, API key, private key, or TOTP seed — to exactly one other person (the **Guest**), directly between their two browsers. Nothing is exchanged through an account, and the server in the middle never sees the secret itself. Here's exactly what happens, step by step.

> **In short:** CipherSend is a four-step, zero-account flow — create a link, share it, verify a short comparison phrase, and both sides approve before anything sensitive is sent. Each session is single-use and self-expiring, connected end-to-end encrypted between two browsers only.

## 1. Host creates a session

The Host opens CipherSend and clicks **"Create a secure link."**

- A random, single-use session is created on the spot. No login, no setup.
- The Host's browser generates a fresh set of encryption keys for this session only — they're never reused for a future session.
- A shareable link and QR code are generated immediately.

> *Nothing about the secret itself exists yet at this point — only an empty, waiting session.*

## 2. Host shares the link or QR code

The Host sends the link or QR code to the Guest, using whatever channel they already trust — chat, email, or in person.

- If sharing the QR code, CipherSend shows a reminder: **scan it with your phone's built-in camera app only** — third-party QR scanner apps are known to forward scanned links to their own servers.
- The link itself does not contain the secret — only a random session identifier. Sharing it is safe, but it does act as the "key" to that session, so it should still only go to your intended recipient.

## 3. Guest joins the session

When the Guest opens the link, the page loads but **does not connect automatically.**

- The Guest must click a clearly labeled **"Join secure session"** button before anything happens.
- This one click matters: it confirms a real person opened the link, rather than an automated preview (for example, a chat app generating a link preview) accidentally taking the one available spot in the session.
- Once clicked, the Guest's browser generates its own fresh set of encryption keys and connects.

## 4. Both sides verify they're talking to each other

Once both the Host and Guest are connected, each browser independently derives a short **comparison phrase** — a handful of plain words — from the encryption keys just exchanged.

- Both people read their phrase to each other over a call, in chat, or in person, and check that it matches.
- A matching phrase confirms the connection is genuinely between the two of you, with nobody able to secretly sit in the middle.
- **If the phrase doesn't match, stop.** Don't approve — this means the connection may not be trustworthy, and a new session should be started instead.

## 5. Both sides approve

Each person clicks their own **"Approve"** button once they're satisfied the phrase matches.

- Approval is a personal decision made independently on each side — the Host's approval doesn't affect the Guest's, and vice versa.
- Only after approving will a person's browser allow it to send a secret or display one it receives.

## 6. The secret is sent

Once approved, either side can type or paste the secret in and send it.

- The secret is encrypted in the sender's browser before it ever leaves, and only decrypted in the recipient's browser after it arrives.
- The recipient sees it in a masked field, with a **reveal** option and a **copy** button.
- After copying, CipherSend makes a best-effort attempt to automatically clear your clipboard after about 30 seconds — this isn't guaranteed on every browser, so a **"Clear clipboard now"** button is also always available to do it reliably yourself.

## 7. The session ends

A session ends when either person closes it, or automatically:

- **Idle timeout:** if the session sits inactive for a while (10 minutes by default), it closes on its own.
- **Hard limit:** every session has a maximum lifetime (30 minutes by default) regardless of activity, so nothing stays open indefinitely.
- When a session ends, the secret and encryption keys held in the browser's memory are cleared.

## What if I get disconnected?

CipherSend is built to recover from ordinary hiccups without exposing anything from before the disconnect:

- If either side's connection drops and reconnects, **both sides start the verification process over from scratch** — fresh keys, a fresh comparison phrase, and a fresh approval. Nothing from the previous handshake is carried forward or assumed to still be trustworthy.
- You'll see a message telling you to re-verify — treat it exactly like the first time, and don't assume it's a continuation of the same trust you already established.
- This can also happen automatically if a browser tab is put to sleep and restored (for example, switching apps on mobile and coming back) — that's expected behavior, not a sign of a problem.

## Good to know

- **Exactly two people, one time.** A session accepts only a Host and one Guest — a third person trying to join is turned away.
- **The link is single-use.** Once a session is created, that specific link is only good for that one exchange.
- **The server relays, but doesn't read.** Every message between the Host and Guest passes through CipherSend's server, but the server only forwards encrypted data — it never has the ability to make sense of it.

## Common questions

**How long does a session stay open?**

By default, a session closes after about 10 minutes of inactivity, and every session has a hard limit of about 30 minutes total, regardless of activity.

**Do both people need to approve?**

Yes. Each person approves independently on their own side. Approval on one side never happens automatically because the other side approved.

**Do I have to click "Join" again after a reconnect?**

No. That join click is only required once, the first time you open the link. Reconnections after that (for example, if your phone's browser tab was put to sleep and restored) don't ask again.

## Next steps

- [Try it now](/app)
- [See the security details](/security)
- [See how your data is handled](/privacy)
- [Browse common questions](/faq)