# Multi-Model Stress Test 01 — Run manifest

Prepared on 2 October 2026 with Claude Code. This records where the archived results came from and what remains unknown. It is not proof of historical execution conditions.

## Sources

| Source | Role |
| --- | --- |
| [Project page](https://www.joowonjo.com/multi-model-stress-test-01) | Public description; embeds the results document below |
| [Embedded results document](https://www-joowonjo-com.filesusr.com/html/3ad406_49eab2853613b25a6ddec758efc1ed44.html) | Contains the case, model and response data reproduced in this record |
| Initiator-supplied extraction, dated 25 September 2026 | Markdown extraction of the rendered page, made with Playwright; not published here |

On 2 October 2026 the embedded results document was retrieved directly and its data parsed. The thirty response texts (five cases × three models × initial rationale and after-reference response) match the 25 September extraction exactly. Titles, scenarios, decisions, reference conclusions and reference rationales match [`seed-tests.json`](../../seed-tests.json). The summary figures recompute from the case data.

## Known and unverified

| Item | Status |
| --- | --- |
| Cases | ST-002, ST-004, ST-011, ST-016, ST-020 (published) |
| Selection rule | Each reference conclusion appears once (published) |
| Model labels | GPT 5.6 Sol (High), Gemini 3.1 Pro, Claude Sonnet 5 — recorded as supplied; not verified identifiers |
| Model settings | Empty in the published data; not recorded |
| Collection date | September 2026; day not recorded |
| Services and interfaces | Not recorded |
| Conditions | Same English prompt, fresh conversations, instructed not to browse or use tools (published); whether browsing or tools were actually available is not recorded |
| Prompt text, Phase A and Phase B | **Not located.** Not on the published page; not found in the initiator's local folder according to the 25 September extraction |
| Attempts and selection among attempts | Not recorded |
| Original transcripts | Existence not established |

Model statements within responses do not independently verify any of these conditions. If the prompt text is found later, add it with its date and basis rather than reconstructing it.

## Hashes at retrieval

SHA-256 values identify the source as retrieved on 2 October 2026. They do not establish what any model received or when a response was generated.

| File | SHA-256 |
| --- | --- |
| Embedded results document (`3ad406_49eab2853613b25a6ddec758efc1ed44.html`) | dac13dafb747700d62a4b09b756c5d1d6eb93dbda4ce0d9c55d559856f1e1908 |
| `seed-tests.json` (baseline v0.1) | 25d9816fbbd64b526314151322545d77ff3fcf928fc734256ecf9d8a364993a0 |

The archived [RESPONSES.md](RESPONSES.md) and [results.json](results.json) are generated from the embedded data without editing the response texts.
