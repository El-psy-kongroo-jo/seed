# Run record template

Copy one block per run and fill it in **at the time of the run**. Leave a field as `unknown` rather than estimating it later. A rerun is a new run, not a replacement for an earlier one.

This template covers the items that remained unverified in the [Governance Under Review / 01 run manifest](../governance-review-01/RUN-MANIFEST.md).

```text
Run ID:
Series / round:
Date and time (with time zone):

Service and interface (e.g. web app, desktop app, API):
Displayed model label (exactly as shown on screen):
Reasoning or mode setting, if shown:
Web search / browsing: on / off / unknown
Account memory or personalization: on / off / unknown
New conversation: yes / no
Prior SEED context in this account: yes / no / unknown

Supplied files (name + SHA-256):
Prompt version (name + SHA-256):
Test IDs supplied:

Attempts: first answer used? yes / no — if no, explain
Copied unchanged: yes / no — if no, describe the change
Transcript or screenshot retained: yes / no — where (not necessarily public)

Reveal step (if any): date and time, text used
Response after reveal: archived as

Notes:
```

To compute a SHA-256 value: `shasum -a 256 <file>` (macOS) or `sha256sum <file>` (Linux).
