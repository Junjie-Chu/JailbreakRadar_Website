---
title: "Jailbreak Taxonomy"
permalink: /taxonomy
layout: default
sectionid: taxonomy
---

## Jailbreak Taxonomy
---

We classify the methods based on the following two criteria:
- We consider whether the original forbidden question is modified to bypass the target LLM's alignment mechanisms in the method.
- If the original question is modified, we then consider how these modified prompts are generated in the method, such as through translation or adding prefixes and suffixes.

| Jailbreak Taxonomy |     Jailbreak Method    | Require White-Box Access? | Modify the Original Question?  |    Initial Jailbreak Seeds?    |
|:------------------:|:-----------------------:|:-------------------------:|:------------------------------:|:------------------------------:|
|     Human-Based    |           AIM           |             ✗             |                ✓               |                /               |
|     Human-Based    |       Devmoderanti      |             ✗             |                ✓               |                /               |
|     Human-Based    |        Devmodev2        |             ✗             |                ✓               |                /               |
|  Obfuscation-Based |          Base64         |             ✗             |                ✓               |                /               |
|  Obfuscation-Based |       Combination       |             ✗             |                ✓               |                /               |
|  Obfuscation-Based |           Zulu          |             ✗             |                ✓               |                /               |
|  Obfuscation-Based |         DrAttack        |             ✗             |                ✓               |                ✗               |
|    Heuristic-Based |         AutoDAN         |             ✓             |                ✓               |                ✓               |
|    Heuristic-Based |         GPTFuzz         |             ✗             |                ✓               |                ✓               |
|    Heuristic-Based |           LAA           |             ✗             |                ✓               |                ✓               |
|     Feedback-Based |           GCG           |             ✓             |                ✓               |                ✗               |
|     Feedback-Based |           COLD          |             ✓             |                ✓               |                ✗               |
|     Feedback-Based |           PAIR          |             ✗             |                ✓               |                ✗               |
|     Feedback-Based |           TAP           |             ✗             |                ✓               |                ✗               |
|  Fine-Tuning-Based |        Masterkey        |             ✗             |                ✓               |                ✓               |
|  Fine-Tuning-Based |      AdvPrompter        |             ✗             |                ✓               |                ✗               |
| Generation-Parameter-Based | Generation Exploitation |     ✓             |                ✗               |                /               |
