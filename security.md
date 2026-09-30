# How CipherSend keeps your secret yours

CipherSend is built around one rule: every decision that matters for your secret's confidentiality is made in your browser, not on a server. Below is exactly how that works, and — just as importantly — what it doesn't claim to protect against.

## 1. End-to-End Encryption

- Each session generates a fresh encryption keypair in the Host's and Guest's browsers (ECDH, P-256 curve) — never reused across sessions or reconnects.
- The two browsers derive a shared session key (via HKDF-SHA256) that never leaves either device.
- The secret itself is encrypted with AES-256-GCM, with a unique random value per message and a per-message integrity tag bound to the session and message order.
- All of this cryptography runs using your browser's built-in, native cryptographic engine — CipherSend doesn't use a third-party JavaScript library for any of it.

## 2. You Verify Who You're Talking To

- After connecting, both browsers independently calculate a short **comparison phrase** — five plain words, drawn from a fixed word list — derived from the encryption keys just exchanged.
- Reading this phrase aloud (or comparing it visually) to your counterpart confirms the connection is genuinely between the two of you, and hasn't been quietly intercepted by anyone in between.
- The phrase carries enough randomness (55 bits, well above the standard 40-bit floor typically considered adequate for this kind of check) to make guessing it impractical.
- **This check only works if you actually compare it.** Approving without checking removes this safeguard entirely — this is a deliberate design trade-off, not an oversight: the phrase is a tool, not an automatic guarantee.

## 3. Nobody Sends Until Both Sides Agree

- Each person clicks their own "Approve" independently. One person's approval has no effect on the other's.
- Only after approving locally will a browser allow itself to send a secret, or decrypt and display one it receives.
- This decision is made entirely inside each browser. The server is never told anything more meaningful than "another piece of encrypted data arrived" — it has no concept of "approved," "verified," or even who the Host or Guest is.

## 4. What the Server Can — and Can't — Do

CipherSend's server is intentionally kept to the smallest possible role:

> **It can:**
> - Decide whether to let a connection into a session (and reject a third connection to a session that already has two).
> - Relay encrypted messages between the two browsers immediately, without holding onto them.
> - Enforce how long a session may stay open.
> - Check that incoming messages are structurally well-formed (right size, right basic shape) — without ever looking at what's inside them.

> [!CAUTION]
> **It cannot, by design:**
> - Read your secret, your encryption keys, or your comparison phrase — none of these are ever available to the server in a usable form.
> - Tell whether a connected browser is the Host or the Guest.
> - Know whether either side has approved anything.
> - Retrieve or replay anything after a session ends — there is nothing kept to replay.

> Even in a scenario where the server itself were compromised, an attacker would gain access to encrypted traffic only — not your secret, not the keys, and not the ability to forge an "approved" state, because the server never held one to begin with.

## 5. Sessions Don't Linger

- **Capacity limit:** a session accepts exactly two connections — the Host and one Guest. A third attempt is turned away.
- **Idle timeout:** an inactive session closes on its own after a set period (10 minutes, by default).
- **Hard time limit:** every session has a maximum lifetime (30 minutes, by default) regardless of activity, so nothing stays open indefinitely.
- **Connection health checks:** the server periodically checks that both connections are still alive and frees up the slot promptly if one goes silent.
- When a session ends — by timeout, by either person closing it, or by leaving/hiding the page — the secret and key material held in that browser's memory are actively cleared.

## 6. Built to Resist Abuse, Not Just Eavesdropping

- **A deliberate join step.** The person receiving a link must click "Join secure session" before any connection is made — this exists specifically so that automated tools (like a chat app generating a link preview) can't silently occupy the one available slot before the real recipient arrives.
- **Traffic limits per session.** Each side of a session has a cap on how much it can send, so a malicious or malfunctioning peer can't flood the session indefinitely.
- **Rate limiting.** Requests to create sessions and connection attempts are rate-limited per network address to reduce automated abuse.
- **No compression of encrypted data.** Message compression is deliberately disabled for this protocol's traffic, since it provides no benefit for already-encrypted data and can reopen known compression-based attack classes.

## 7. If Something Interrupts the Connection

- Any unexpected disconnect, or a browser tab being restored from the background, triggers a full reset: fresh encryption keys, a fresh comparison phrase, and a requirement to approve again.
- Nothing from before the interruption is treated as still trustworthy — there is no shortcut that resumes a previous handshake.
- This is by design: it closes off a way an attacker might otherwise try to exploit a reconnect as a second chance to intercept the exchange.

## 8. Transport & Infrastructure Hardening

- All traffic is encrypted in transit using current TLS standards, in addition to the end-to-end encryption applied to the secret itself.
- The site applies a strict content security policy and related browser security headers designed to reduce the risk of the page itself being tampered with or embedded elsewhere.
- Responses are marked not to be cached, and the page avoids browser storage mechanisms (cookies, local storage) for anything related to your secret, keys, or comparison phrase.

## 9. Careful About Dependencies

- The cryptography, QR code generation, and comparison-phrase word list are all implemented directly in CipherSend's own code — not pulled in from third-party packages — reducing the number of external components that would need to be trusted.
- Any vendored component that is used is reviewed and tracked against its original source, so any unexpected change can be detected.
- The one external library used for real-time connections is continuously checked against known vulnerability databases as part of the build process, rather than relying on a fixed version being assumed safe indefinitely.

## 10. What CipherSend Does Not Protect Against

> [!WARNING]
> In the interest of not overstating what this system can do, here's what's explicitly out of scope:
> - **A device that's already compromised.** If malware or an attacker already controls the Host's or Guest's device, no sharing tool can fully protect what happens on it.
> - **Ignoring a mismatched comparison phrase.** The verification step only works if it's actually checked.
> - **The channel used to share the link itself.** If the link is sent over a channel that's already being watched, that's outside CipherSend's control.
> - **Anything beyond the browser's decrypted memory buffer.** Once a secret is decrypted, CipherSend actively clears its own memory copy, but downstream copies — such as text pasted elsewhere, or synced automatically to another device via clipboard sync — are outside its control.
> - **General file sharing or long-term storage.** CipherSend is built for a one-time, one-to-one exchange of a short text secret — not as a document vault or ongoing access-sharing system.

## A Note on Review

This system's design has been through multiple internal and independent audit rounds specifically focused on closing gaps between what a security requirement states and what its actual implementation delivers — including checks on dependency freshness, deployment configuration, and the interaction between individually correct design decisions.

## Common questions

**What encryption does CipherSend use?**

ECDH key exchange (P-256), HKDF-SHA256 for the shared session key, and AES-256-GCM for the secret itself — all computed in the browser's native cryptographic engine, with no third-party crypto library.

**What happens if I approve without checking the phrase?**

The comparison phrase is only as good as the check you do. Approving without comparing removes the safeguard that confirms you're connected to the right person — it's a deliberate trade-off, not an automatic guarantee.

**Does CipherSend's server know who the Host and Guest are?**

No. The server can't tell whether a connected browser is the Host or the Guest, whether either side approved, or anything about the content — it only relays structurally-valid encrypted data.

## Next steps

- [Read the privacy details](/privacy)
- [Find out how CipherSend works](/how-it-works)