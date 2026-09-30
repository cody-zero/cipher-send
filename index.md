# Share a secret. Not with the server.

Send a password, API key, private key, or TOTP seed straight to one person's browser — end-to-end encrypted, no account, and gone the moment it's used.

[Create a secure link](/app)

*Free to use · Link works once · Nothing kept on our servers*

## What people send with CipherSend

Drag or use your mouse wheel to scroll.

- **Passwords** — Hand off a login without texting it in plaintext.
- **API keys & tokens** — Pass credentials to a teammate or contractor for a one-off task.
- **Off-the-record chat** — Talk about something sensitive without your account getting flagged or banned for it.
- **Private keys** — Move sensitive key material without it sitting in chat history.
- **TOTP seeds** — Share two-factor setup codes when enrolling a shared or backup device.
- **Wi-Fi passwords** — Give a house sitter or guest access for the duration of their stay.
- **Recovery phrases** — Send crypto recovery phrases or secrets to a trusted contact, once.

[See all use cases](/use-cases)

## Four steps, no account

1. **Create a link** — One click generates a random, single-use session.
2. **Share it** — Send the link or QR code to your recipient over whatever channel you already trust.
3. **Verify the phrase** — Both sides see a short word phrase; read it aloud or compare it to confirm you're talking to the right person, not an imposter.
4. **Approve and send** — Once both sides approve, the secret is encrypted in your browser, sent, and decrypted only in the recipient's browser.

[Read the full walkthrough](/how-it-works)

## Built to know as little as possible

- **No account, ever.** Most link- and chat-based sharing requires a login or leaves the secret sitting in a message history. CipherSend has zero accounts and collects no personal information.
- **Nothing durable to steal.** The server never stores your secret, your encryption keys, or your verification phrase — not even briefly. There's no database of past shares to breach.
- **The server can't read it either.** CipherSend's relay only forwards encrypted, structurally-valid data between the two browsers — it never inspects or interprets what's inside.
- **One link, one use.** Each session supports exactly two participants and expires on its own; there's nothing left to revisit or leak later.

[See the full comparison](/why-ciphersend)

## Encrypted where it matters — your browser

- **End-to-end encryption** using ECDH key exchange and AES-256-GCM, computed entirely in your browser. Keys never leave your device.
- **You verify who you're talking to.** A short, human-readable phrase lets both people confirm the connection hasn't been intercepted, before anything is sent.
- **Nobody sends until both agree.** Each side independently controls when their own secret can be sent or displayed — this decision is never made by the server.
- **Sessions don't linger.** Idle sessions time out, and every session has a hard expiry regardless of activity.

[Explore security details](/security)

## Quick answers

**Do I need to create an account?**

No. CipherSend has no accounts, logins, or personal information collected.

**Is my secret stored anywhere?**

No. The secret, the encryption keys, and the verification phrase are never stored on the server — only your two browsers ever handle them.

**Why do I need to click "Join secure session"?**

It's a one-time confirmation that a real person — not an automated link preview — is opening the session, so your link can't be silently occupied before your intended recipient arrives.

**What if the phrase doesn't match?**

Don't approve. A mismatched phrase means the connection may not be with who you expect — treat it as a failed handshake and start a new session.

**Why is CipherSend suitable for off-the-record chat?**

Your conversation stays between the two of you, and nothing is left behind. Everything is end-to-end encrypted, so messages are readable only in your browsers. Nothing is stored, so there's no history to find later. The server knows nothing: it only relays encrypted data and holds no accounts or personal details. A shared verification phrase protects against man-in-the-middle attacks, because you both confirm the connection hasn't been intercepted before anything is sent.

[View full FAQ](/faq)