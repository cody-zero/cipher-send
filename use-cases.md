# What people use CipherSend for

CipherSend is built for one specific job: getting a short-lived secret — a password, private key, API token, or TOTP seed — from one person to exactly one other person, without a copy sitting around afterward. Here's where that shows up in practice.

> **In short:** CipherSend fits any scenario where a sensitive credential needs to move to exactly one other person, once, without leaving a durable copy behind — technical handoffs, 2FA setup, temporary access, freelance and operational work, and personal contingency planning.

## Common Use Cases

### IT & Technical Handoffs

- Handing a new employee their first admin password or VPN credential without emailing it.
- Sharing a database, server, or router password with a contractor for a single maintenance task.
- Passing an SSH private key to a teammate setting up access to a shared server.
- Sending a cloud provider API key (AWS, GCP, Azure, etc.) to a developer for a one-off deployment or debugging session.

### Two-Factor & Account Setup

- Sharing a TOTP seed so a teammate can enroll their own authenticator app on a shared team account.
- Sending a backup 2FA code to a family member setting up a second device on a shared account.

### Everyday Personal Sharing

- Giving a house sitter or guest the Wi-Fi password for the duration of their stay.
- Sharing a streaming service password with a family member without leaving it in a text thread forever.
- Sending a private key or recovery phrase to a trusted family member as part of estate or emergency planning.

## Creative & Unexpected Use Cases

*Still within what CipherSend is built for — a one-time, one-to-one secret exchange — but showing up in less obvious places.*

### Software Development & Open Source

- A maintainer handing a temporary deploy key to a new contributor for a single release.
- Two developers on different companies' systems exchanging an API token for a short-term integration test, without either side's Slack or email retaining it.
- Rotating a leaked credential and sending the replacement to a teammate the moment it's generated, so the old one is the only copy anyone ever searches for later.

### Freelance & Agency Work

- A freelance developer receiving a client's CMS or hosting login for a single project, without it living in a client's email forever.
- An agency handing off a client's ad account or analytics credential at the end of an engagement, once, rather than leaving it in a shared spreadsheet.

### Small Business & Operations

- A shop owner sharing a point-of-sale system password with a temporary or seasonal staff member.
- Passing a supplier portal login to a new procurement contact for a single order cycle.

### Education & Training

- An instructor distributing a one-time lab environment credential to a student for a single exercise.
- A bootcamp mentor handing a student temporary access to a shared learning environment, closed out once the session ends.

### Events & Communities

- Sharing a private livestream or admin-panel password with a co-organizer just before an event, instead of posting it in a group chat.
- Passing a moderator or backstage-tool credential to a volunteer for the duration of a single event.

### Off-the-Record Chat

- Discussing something sensitive with one other person without leaving a copy in a chat thread your provider or employer could flag for it.
- Having a one-off conversation you'd rather not tie to your regular account history — no record, no log, gone after one exchange.
- Protecting your main messaging account from an automated moderation error. Sensitive but perfectly legitimate topics can trip an algorithm at a major messaging platform and get an account restricted or locked. Move that one conversation to a private, one-time session so it never appears on your account.

### Family & Household Admin

- One partner sharing a joint account password with the other without it sitting in a chat backup.
- Sending a shared smart-home or router admin password to a family member helping troubleshoot, then rotating it afterward.

### Emergency & Continuity Planning

- Sharing a password manager master password or crypto wallet recovery phrase with a designated trusted contact as part of a personal contingency plan.
- Handing an interim caretaker a one-time credential to a critical account during a temporary absence.

## What CipherSend Is Not For

> [!WARNING]
> To set expectations honestly:
> - **Not a file-sharing tool.** CipherSend is built for short text secrets — not documents, images, or attachments.
> - **Not a place to store secrets.** There's no history, no vault, and no way to retrieve something from a session after it closes.
> - **Not a replacement for ongoing shared-access management.** For accounts a whole team needs standing access to, a password manager with built-in sharing is a better fit than a one-time exchange tool.

## Common questions

**Can I send files with CipherSend?**

No. CipherSend is built for short text secrets — passwords, keys, and tokens — not documents or attachments.

**Can more than two people use the same link?**

No. A session accepts only a Host and one Guest — a single, one-time exchange. For something a whole team needs ongoing access to, a password manager is the better tool.

**What if I need to share a secret again later?**

Create a new session. Each link is single-use and self-expiring, so there's no history to reuse or revisit.

## Next steps

- [Try it now](/app)
- [See how it works](/how-it-works)