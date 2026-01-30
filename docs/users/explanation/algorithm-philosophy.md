---
sidebar_position: 3
title: Algorithm Philosophy
---
<!-- Source: ~/projects/pai/Packs/pai-algorithm-skill/src/skills/THEALGORITHM/SKILL.md -->

# The Algorithm Philosophy

THE ALGORITHM is PAI's universal execution engine - a structured approach to achieving exceptional outcomes through scientific method.

## The Core Mission

> **Produce euphoric, highly surprising, exceptional results that solve the problem better than expected.**

This is the north star. Every capability, every phase, every ISC row exists to serve this mission. When the system works correctly, you should be genuinely surprised and delighted by how thoroughly, thoughtfully, and effectively your request was fulfilled.

Not just "done" - done in a way that exceeds expectations.

## Why Structure Matters

Traditional AI assistance is reactive: you ask, it answers. The algorithm is proactive and methodical:

| Reactive AI | The Algorithm |
|-------------|---------------|
| Answer immediately | Understand fully first |
| Single attempt | Iterate until ideal |
| Best guess | Research-informed |
| Hope it's right | Verify independently |

## The Scientific Method for AI

The algorithm applies scientific method to every task:

1. **Observe** - What is the current state? What was asked?
2. **Hypothesize** - What does "ideal" look like?
3. **Plan** - What capabilities should we use?
4. **Experiment** - Execute with appropriate resources
5. **Verify** - Test against ideal criteria
6. **Learn** - Capture insights for future work

This isn't busywork. Each step prevents a category of failure.

## The ISC: Capturing "Ideal"

The **Ideal State Criteria** is the centerpiece of the algorithm. It's a living document that captures what "ideal" looks like for your specific request.

```
| # | What Ideal Looks Like | Source | Status |
|---|----------------------|--------|--------|
| 1 | Toggle component works | EXPLICIT | DONE |
| 2 | Theme persists on refresh | INFERRED | ACTIVE |
| 3 | No accessibility regressions | IMPLICIT | PENDING |
```

### Why ISC Matters

You can't hit a target you can't see. The ISC makes the target explicit.

Without ISC:
- "Add dark mode" → vague success criteria
- Work stops when it "seems done"
- Issues discovered after delivery

With ISC:
- "Toggle works, theme persists, passes a11y, tests pass" → explicit criteria
- Work stops when ALL criteria verified
- Issues caught during verification

### Source Types

The ISC captures requirements from multiple sources:

| Source | What It Captures |
|--------|------------------|
| **EXPLICIT** | What you literally asked for |
| **INFERRED** | Derived from your context (tech stack, patterns) |
| **IMPLICIT** | Universal standards (security, quality, testing) |

This is why the algorithm often does more than you asked - it infers what you'd want based on context and adds implicit quality standards.

### ISC Scales With Complexity

The ISC isn't limited to a handful of rows:

| Scale | When | Examples |
|-------|------|----------|
| 5-10 rows | Simple tasks | Fix a bug, add a button |
| 20-50 rows | Standard features | Add dark mode, create endpoint |
| 50-200 rows | Complex work | Redesign auth, major refactor |
| 200-1000+ rows | DETERMINED effort | Full security audit, new system |

Higher effort = larger ISC. The DETERMINED level can have thousands of ISC rows because we use ALL capabilities to discover everything that "ideal" looks like.

## Effort Classification

Not every task needs the same resources. The algorithm classifies effort to match capabilities to stakes:

| Effort | Thinking | Resources | Use When |
|--------|----------|-----------|----------|
| TRIVIAL | None | None | Simple questions |
| QUICK | Minimal | Basic agents | Single-step tasks |
| STANDARD | Normal | Research + Engineers | Multi-step work |
| THOROUGH | Extended | Council + Architects | Complex features |
| DETERMINED | Maximum | Everything | Mission-critical |

See [Effort Classification](/users/explanation/effort-classification) for the full breakdown.

### Why Gating Matters

Giving every task maximum resources wastes time and money. Under-resourcing important work produces mediocre results.

Effort classification ensures:
- Simple tasks stay simple
- Complex tasks get proper attention
- Resources match stakes

## Iteration: The Learning Loop

When verification fails, the algorithm doesn't just retry. It loops back to the appropriate phase:

```
BLOCKED row
    ├── Unclear what ideal looks like? → Loop to THINK
    ├── Wrong approach? → Loop to PLAN
    └── Execution error? → Loop to EXECUTE
```

Iteration count is bounded by effort level:
- QUICK: 1 iteration (move on)
- STANDARD: 2 iterations (try twice)
- THOROUGH: 3-5 iterations (persistent)
- DETERMINED: Unlimited (don't stop until success)

## Verification: Trust But Verify

The VERIFY phase uses a different "agent" than the one that did the work. This matters because:

- The executor might have blind spots
- Self-verification tends to be optimistic
- Independent checking catches more issues

For web work, this means actually loading the page and checking visually. For code, running tests. For content, reading critically.

## The Philosophy in Practice

When you say "add a logout button," the algorithm:

1. **OBSERVE**: Notes existing nav structure, auth patterns, your preferences
2. **THINK**: Considers edge cases (what if not logged in?), UX patterns
3. **PLAN**: Sequences work, assigns Engineer agent
4. **BUILD**: Refines ISC to be testable (button visible, click logs out, redirects)
5. **EXECUTE**: Writes the code
6. **VERIFY**: Checks visually in browser, runs tests
7. **LEARN**: Notes patterns for future similar requests

The result: a logout button that works, handles edge cases, matches your style, and has been tested - not just code that compiles.

## When to Use the Algorithm

The algorithm adds value for:
- Multi-step tasks
- Work with implicit requirements
- Anything where "good enough" isn't enough

Skip it (TRIVIAL) for:
- Simple questions
- Quick lookups
- When you need an answer NOW
