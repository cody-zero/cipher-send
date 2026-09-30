# How CipherSend compares with common credential-sharing and messaging tools

Sensitive information is rarely exposed by a sophisticated attack. More often, it leaks through the everyday tools used to pass it along. CipherSend is designed for two use cases: sharing credentials and other secrets with one person, and holding a private, off-the-record conversation with one person. This page explains how the usual alternatives work, where they fall short, and how CipherSend's architecture differs.

> **In short:** Chat apps retain message history tied to your account. Email leaves a persistent, typically unencrypted record. Paste sites can store content indefinitely, where bots scrape it. CipherSend uses end-to-end encryption (E2EE) in the browser, requires no account, retains no data, and expires every session automatically.

## Sharing credentials and secrets

This covers passwords, API keys and tokens, private keys, TOTP seeds and recovery phrases.

### Chat and messaging apps

**Typical use:** Pasting a password, key or code into a conversation with a colleague, friend or support agent.

> [!WARNING]
> **Common weaknesses:**

- Messages usually remain in chat history, where anyone with access to the account can search them, unless someone deletes them.
- Many platforms don't enable end-to-end encryption by default, so messages may be exposed in transit.
- A credential posted once in a group chat can be forwarded, screenshotted, or read by every current and future member of the thread.

> **How CipherSend differs:** The secret is encrypted client-side in the sender's browser and decrypted only in the recipient's. The relay server can't read it. Each link and session is single-use and expires automatically, so no persistent thread remains to hold the secret.

### Email

**Typical use:** Sending a password, API key or other credential in the body of an email.

> [!WARNING]
> **Common weaknesses:**

- Most email isn't end-to-end encrypted, so content can pass through, and rest on, several servers in plaintext.
- Emails effectively become permanent records. Copies linger in sent folders, backups and mail servers long after the need has passed.
- A single compromised mailbox exposes every credential ever sent through it, since an attacker only has to search for a keyword such as "password."
- Messages can be forwarded or misdirected, and they can't be recalled.

> **How CipherSend differs:** The secret is never written to persistent storage: no sent-mail archive, no server-side record, no backup. Before anything is transmitted, a short authentication string (SAS) lets both parties confirm they're connected to the intended person. An email thread has no equivalent verification step.

### Paste and text-sharing sites

**Typical use:** Posting a configuration file, key or credential on a public or "unlisted" site and sharing the link.

> [!WARNING]
> **Common weaknesses:**

- Many paste sites store content in plaintext and retain it indefinitely unless it's deleted. "Unlisted" pastes are often public pastes at a URL that can be found or guessed.
- Automated scrapers continuously scan these sites for patterns such as `API_KEY`, `password` and `private_key`.
- Public pastes are frequently indexed by search engines and can remain searchable even after the original is deleted.
- Roughly seven in ten leaked secrets found this way were reported to still be valid two years later.

> **How CipherSend differs:** There is no public or persistent storage layer. A session exists only for the duration of the exchange and then closes. It admits exactly two participants, so there is no public URL space for bots or search engines to crawl.

### Password manager sharing

**Typical use:** Sharing a stored login or note through a password manager's built-in sharing feature.

> [!WARNING]
> **Common weaknesses:**

- Both parties generally need to use the same password manager and have an account. For a one-off exchange with someone outside your setup, that adds considerable friction.
- Security professionals typically advise against ad hoc credential sharing outside a managed tool, because informal channels bypass the controls a password manager provides.

> **How CipherSend differs:** Neither party needs an account or any existing tool. The Host creates a link, and the Guest needs only a browser. That makes it well suited to the one-time handoff, to someone outside your own ecosystem, that a password manager's sharing feature isn't designed for.

## Off-the-record chat

This covers sensitive but legitimate conversations that you'd rather keep away from your primary social media or instant messaging account.

### Why it matters: automated moderation and account risk

Major platforms rely on automated content moderation to scan messages and enforce policy at scale. These systems are imperfect. A false positive can restrict, suspend or lock an account, sometimes with little explanation. Appeals can be slow, and the account may hold years of contacts and history. Topics that trigger these systems are not always harmful: medical, legal, financial or security discussions, and quoted text or context-dependent language, can all be misclassified.

CipherSend keeps that conversation off your primary account entirely. There is nothing on the platform for an automated system to flag.

### Typical scenarios

- Discussing a sensitive but legitimate topic, such as a health, legal or financial matter, without exposing your main account to automated flagging.
- Quoting or explaining content that a keyword or classifier-based filter might misread out of context.
- Moving one conversation out of a long-standing account that you can't afford to have restricted, such as one tied to your business, contacts or two-factor authentication (2FA) recovery.

### Mainstream messaging and social platforms

> [!WARNING]
> **Common weaknesses:**

- Message content is tied to a persistent account identity, so a moderation action affects everything on that account.
- Automated enforcement can produce false positives, which can lead to restricted features, suspension or lockout.
- Message history is retained in the account, in backups and on synced devices, where it can be reviewed or re-scanned later.
- Some platforms don't enable end-to-end encryption (E2EE) by default, so message content may be accessible to the provider.

> **How CipherSend differs:** There is no account to restrict, so there is no enforcement action that can affect you. Messages are end-to-end encrypted in the browser, so the relay server has no access to the plaintext. No data is retained on the server, so there is no history to scan or review afterward. A short authentication string protects against man-in-the-middle (MITM) attacks: both parties confirm it before the conversation begins, and a mismatch means you start a new session.

### Email and direct messages

> [!WARNING]
> **Common weaknesses:**

- Content is generally readable by the provider and intermediate servers, and is often scanned for spam, abuse and policy violations.
- Messages persist in mailboxes, archives and backups.
- Either party can forward or screenshot the thread, and neither can verify who is on the other end.

> **How CipherSend differs:** The server acts only as a relay for ciphertext. It can't inspect the content, and it stores nothing.

## At a glance

| | Chat apps | Email | Paste sites | Password manager sharing | CipherSend |
| --- | --- | --- | --- | --- | --- |
| **Account required** | Usually | Usually | Sometimes | Yes, on both sides | No |
| **Server can read content** | Often | Often | Yes (plaintext) | Depends | No. E2EE, browser to browser |
| **Data persists** | Usually | Usually | Often, indefinitely | Depends | No. Single-use, auto-expiring |
| **Linked to your identity** | Yes | Yes | Sometimes | Yes | No |
| **Exposed to account-level moderation** | Yes | Yes | Varies | Varies | No account to act on |
| **Verifies the counterparty** | No | No | No | Account-based only | Yes. Short authentication string |
| **Works across platforms** | Yes | Yes | Yes | No | Yes |

## Limitations

CipherSend is not a file-transfer tool, and it retains no message history. It can't protect your data if either endpoint is already compromised, or if someone approves a mismatched authentication string. It also can't prevent the other party from copying or screenshotting what you send. It does not remove the need to follow the law or the terms of the services you use. It is built for one specific job: transferring a short-lived secret, or holding a private exchange, with one other person and leaving no persistent record. It isn't intended to replace every tool above.

## Common questions

**Is CipherSend end-to-end encrypted?**

Yes. Data is encrypted client-side in the sender's browser and decrypted only in the recipient's, using an ECDH key exchange and AES-256-GCM.

**Can the server read my secret or my messages?**

No. The server only relays encrypted data between the two browsers. It's designed never to interpret the contents.

**Does the server store anything?**

No. The secret, the encryption keys and the authentication string are never stored on the server, even temporarily.

**Why is it suitable for off-the-record chat?**

Messages are end-to-end encrypted, nothing is retained, and the server has no knowledge of you or your conversation. The authentication string protects against MITM attacks. And because no account is involved, your primary messaging account never sees the exchange, so an automated moderation error can't affect it.

## Next steps

- [Try CipherSend now](/app)
- [Explore security details](/security)