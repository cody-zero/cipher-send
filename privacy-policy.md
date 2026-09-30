# Privacy Policy

*Last updated: 2026-9-18*

## Overview

This policy explains what information CipherSend collects, what it never collects, and how the limited data it does handle is used. CipherSend is built specifically to minimize what it knows about you — there are no accounts, and the content of what you share through the app is never accessible to us.

## 1. Information We Never Collect

By design, CipherSend never stores, logs, or has access to any of the following, under any circumstance:

- The secret you send or receive (password, private key, API token, TOTP seed, or anything else typed into the app).
- Encryption keys used during a session.
- The comparison ("verification phrase") value used to confirm a connection.
- The raw content of any message exchanged during a session.
- Your name, email address, or any other identity information — CipherSend has no account system and does not ask for one.

> There is no database or code path in CipherSend that would allow any of the above to be written down, so this is an architectural fact, not just a policy commitment.

## 2. Information We Collect to Operate the Service

A small amount of technical, non-content data is briefly handled to keep the service running and secure:

- **Session existence data** — a record that a session exists, when it was created, and when it expires. This contains no information about what was sent in the session, and is deleted automatically once the session closes.
- **Abuse-prevention data** — your network address is used briefly, in a scrambled (non-reversible) form, to apply rate limits that prevent automated abuse. It is never stored in its raw, readable form and is discarded after a short window.
- **Anonymized, aggregate usage counts** — general totals such as how many sessions were created, completed, or expired, with no link back to any individual session, address, or person.

## 3. Analytics: Google Analytics

CipherSend uses **Google Analytics** to understand overall website traffic and usage patterns — for example, which pages are visited and how people generally navigate the site.

**What this involves:**

- Google Analytics uses cookies and similar identifiers to collect standard web analytics data, such as pages viewed, general device and browser type, approximate location (derived from IP address), and session duration.
- This data is collected and processed by Google as a third-party analytics provider, under Google's own privacy and data-handling terms.
- Google Analytics data is generally retained for a limited period (commonly a matter of months for detailed user- and event-level data) before being aggregated or deleted, per Google's own retention settings.

**What this does not involve:**

- No secret, encryption key, verification phrase, or session link is ever sent to Google Analytics. Analytics tracks general website usage only — it has no visibility into what happens inside an active CipherSend session.
- CipherSend does not deliberately send any personally identifying information (such as your name or email address) to Google Analytics.

**Your choices:**

- You can decline or limit analytics cookies through your browser's cookie settings or a cookie-consent tool, where offered on this site.
- You can also use Google's own opt-out mechanisms (such as a browser extension provided by Google) to prevent Google Analytics from collecting data across sites, including this one.

## 4. Cookies & Browser Storage

- Your secret, encryption keys, and comparison phrase are never written to cookies, local storage, session storage, or any other on-device browser storage.
- The one identifier that does appear anywhere client-visible is the session link itself — since that's how the link works — and it's treated as a one-time access token, not a secret in itself.
- Pages are marked not to be cached by your browser.
- Google Analytics, described in section 3, sets its own cookies for analytics purposes — separate from the application itself, which uses no cookies or browser storage for session material.

## 5. Third Parties

- **Google Analytics** is the only third-party service integrated into this website, for the general traffic-analytics purpose described in section 3.
- Session data itself is never shared with, or accessible to, any third party — the underlying architecture is built so that only your browser and the recipient's browser can ever access the content of a session.
- Session creation requests don't include any cross-origin sharing headers, meaning other websites can't piggyback on your session.
- The cryptography, QR code rendering, and comparison-phrase word list used by CipherSend are all built directly into the app itself.
- Browser privacy protections are enabled by default on the page — including restricting access to your camera, microphone, and location, none of which CipherSend needs or requests.

## 6. Data Retention

| Data | How Long |
| --- | --- |
| Session existence record | Deleted automatically when the session ends |
| Rate-limiting counters | Short, rolling time window (minutes), then discarded |
| Aggregate usage counts | Retained in anonymized form indefinitely |
| Google Analytics data | Retained per Google's own analytics data-retention settings |

## 7. Your Choices

- Because CipherSend collects no personal information, there is no personal data to access, correct, or delete.
- You can clear your browser's cached data at any time through your browser settings — this will not affect CipherSend's operation, since nothing secret is stored in your browser's persistent storage.
- You can decline analytics cookies via your browser's cookie settings or a cookie-consent tool where offered, or use a Google-provided opt-out tool — core functionality works fine with analytics disabled.

## 8. Changes to This Policy

If this privacy policy is updated, the updated version will be posted on this page with a revised "Last updated" date. Continued use of CipherSend after changes are posted constitutes acceptance of the updated policy.