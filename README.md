# CipherSend ([https://cipher-send.com](https://cipher-send.com))

CipherSend ([https://cipher-send.com](https://cipher-send.com)) is a secure web application that enables you to send short-lived secrets or conduct off-the-record chats directly browser-to-browser. It is engineered around a zero-trust server architecture to ensure your sensitive credentials never linger online.

---

## Key Features

* **Ephemeral Sessions:** Each session is single-use, supports exactly two participants (Host and Guest), and automatically expires after a brief idle or maximum time limit.


* **No Accounts Required:** You can start or join a secure session immediately with zero sign-ups, logins, or personal information collection.


* **Zero Storage:** Secrets, encryption keys, and verification phrases are never written to disk, databases, or logs under any condition.


* **End-to-End Encryption:** Built using ECDH key exchange (P-256), HKDF-SHA256, and AES-256-GCM computed entirely client-side using native browser cryptography.


* **Manual Connection Verification:** Both browsers independently derive a short comparison phrase to verify authenticity and prevent man-in-the-middle interception before sending anything.



---

## Use Cases

* **Secure Credential Handoff:** Pass passwords, API keys, private keys, TOTP seeds, or Wi-Fi configurations to a teammate or guest without leaving a plaintext record in chat logs or emails.


* **Off-the-Record Chat:** Communicate sensitive notes or discussion points in real-time without history or logs being retained by any intermediary server.



---

## How It Works

1. **Create:** The Host generates a random, single-use session link and QR code.


2. **Share:** Send the link or QR code to the intended recipient via your trusted communication channel.


3. **Verify:** Both users compare the short word phrase displayed on their screens to confirm they are talking to the right person.


4. **Approve & Send:** Once both sides independently approve, the secret is encrypted in-browser, sent, and decrypted solely on the recipient's end.



---

Try CipherSend today at [https://cipher-send.com](https://cipher-send.com)