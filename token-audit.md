# Code Buddy Token Audit

## Accuracy and provenance

This is a **reconstructed, runnable project scaffold**, not a verified modification of the Kalvium source repository. The supplied GitHub URL returned 404, and no original repository files were present. The prompt below was authored for this scaffold; it must not be described as preserving the unavailable original prompt. Likewise, counts and cost comparisons against the original are not reported as measured facts.

To finish the assignment against the official source, replace this scaffold's `prompts/system-prompt.txt` with the repository's real original prompt, then compare and optimize that exact text. Count both complete prompts in the [OpenAI Tokenizer](https://platform.openai.com/tokenizer) and capture actual API `usage` values for the sample request.

## Pre-Fix Audit

| Measurement | Result | Method |
|---|---:|---|
| Original repository prompt tokens | Not available | Repository returned 404; original prompt was not supplied. |
| Scaffold prompt tokens | Not reported | Count `prompts/system-prompt.txt` in the OpenAI Tokenizer before treating this as a submission. |
| Sample user message tokens | Not measured | Use and record the exact code sample sent to the API. |
| Completion tokens | Not measured | Read the real response's `usage.completion_tokens`. |

### Monthly volume and pricing assumptions

The assignment specifies `200 users × 15 calls/day × 30 days = 90,000 calls/month` and GPT-4o rates of `$2.50 per million input tokens` and `$10.00 per million output tokens`.

```text
monthly_calls = 200 × 15 × 30 = 90,000
input_cost_per_call = prompt_tokens × 2.50 / 1,000,000
output_cost_per_call = completion_tokens × 10.00 / 1,000,000
cost_per_call = input_cost_per_call + output_cost_per_call
monthly_cost = cost_per_call × 90,000
```

Actual monthly cost cannot be calculated until real prompt and completion counts are recorded.

## Waste Sources

The three findings below must be based on direct quotes from the **original repository prompt**. That source was unavailable, so no quotes or findings are invented here.

| # | Pattern | Original prompt quote and location | Why it wastes tokens on every call |
|---:|---|---|---|
| 1 | Pending source inspection | Pending | Requires evidence from the real source prompt. |
| 2 | Pending source inspection | Pending | Requires evidence from the real source prompt. |
| 3 | Pending source inspection | Pending | Requires evidence from the real source prompt. |

## Rewritten Prompt

The scaffold prompt in `prompts/system-prompt.txt` is a newly authored prompt. It is **not** claimed to be a rewrite of the official prompt.

- Official original token count: unavailable.
- Scaffold prompt token count: not measured with the OpenAI Tokenizer.
- Percent reduction: cannot be established without the official original prompt and measured counts.
- Requirement of at least 40% reduction: not verified.

### Instruction preservation mapping

Cannot be completed until the original prompt is available. Map every original instruction to the corresponding instruction in the rewrite and verify none were dropped.

| Original instruction | Location in optimized prompt | Preserved? |
|---|---|---|
| Pending source inspection | Pending | Pending |

## Cost Comparison

The table intentionally does not substitute estimates for real measurements. For the final submission, use counts from the OpenAI Tokenizer and an actual API response, then show full arithmetic.

| Version | Prompt tokens | Completion tokens | Cost per call | Monthly cost |
|---|---:|---:|---:|---:|
| Original repository prompt | Not measured | Not measured | Not calculable | Not calculable |
| Optimized official prompt | Not measured | Not measured | Not calculable | Not calculable |

```text
cost_per_call = (prompt_tokens × 0.0000025) + (completion_tokens × 0.00001)
monthly_cost = cost_per_call × 90,000
monthly_savings = original_monthly_cost − optimized_monthly_cost
```

## Token Logging Implementation

`src/callAI.js` reads usage fields from the OpenRouter response, prints prompt, completion, and total token counts, and estimates cost using the rates required in the assignment. The app logs a warning if the provider response omits usage data. Confirm the actual selected model's pricing before interpreting the estimate as the provider's invoice amount.

## Run the scaffold

1. Install Node.js, then run `npm install` in this folder.
2. Copy `.env.example` to `.env` and set `OPENROUTER_API_KEY`.
3. Run `npm start`.
4. Send three POST requests to `http://localhost:3000/review` with JSON bodies such as `{"code":"function add(a, b) { return a + b; }"}`.
5. Verify the terminal prints one `[TOKEN LOG]` line for each response.

## Submission status

- Official repository changes: not made; repository access is unavailable.
- Branch `token-fix`: not created in the official repository.
- Tokenizer measurements and evidence-backed audit: pending original source access.
- Pull request link: pending.
- Video explanation link: pending.
