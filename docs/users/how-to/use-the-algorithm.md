---
sidebar_position: 3
title: Use the Algorithm
---
<!-- Source: ~/projects/pai/Packs/pai-algorithm-skill/src/skills/THEALGORITHM/SKILL.md -->

# How to Use the Algorithm

Execute complex tasks using THE ALGORITHM - PAI's universal execution engine that applies scientific method to achieve exceptional results.

## Prerequisites

- `pai-algorithm-skill` pack installed

## Basic Invocation

Ask Claude to run the algorithm:

```
Run the algorithm to refactor the authentication system
```

Or use the explicit trigger:

```
Use the algorithm: implement dark mode for the settings page
```

## Override Effort Level

Force a specific effort level for more (or less) thorough execution:

```
Algorithm effort THOROUGH: design a new API architecture
```

```
Algorithm effort QUICK: format this config file
```

See [Effort Classification](/users/explanation/effort-classification) for details on each level.

## The 7 Phases

The algorithm executes in strict order. Each phase gates the next:

| Phase | Purpose | What Happens |
|-------|---------|--------------|
| **OBSERVE** | Understand request | Gather context, infer requirements |
| **THINK** | Ensure completeness | Challenge assumptions, find gaps |
| **PLAN** | Sequence work | Assign capabilities, map dependencies |
| **BUILD** | Make testable | Refine criteria to be verifiable |
| **EXECUTE** | Do the work | Spawn agents, run tools |
| **VERIFY** | Test completions | Independent validation of each criterion |
| **LEARN** | Capture insights | Output for feedback, store learnings |

### Phase Transitions

The algorithm shows visual progress:

```
Phase: 👁️ OBSERVE → 🧠 THINK → 📋 PLAN → 🔨 BUILD → ⚡ EXECUTE → ✅ VERIFY → 📚 LEARN
```

## The ISC (Ideal State Criteria)

Every non-trivial task gets an ISC table tracking what "ideal" looks like:

```
| # | What Ideal Looks Like | Source | Capability | Status |
|---|----------------------|--------|------------|--------|
| 1 | Research good patterns | INFERRED | research | PENDING |
| 2 | Toggle component works | EXPLICIT | engineer | ACTIVE |
| 3 | Theme state persists | EXPLICIT | engineer | PENDING |
| 4 | Uses TypeScript | INFERRED | — | DONE |
| 5 | Tests pass | IMPLICIT | qa_tester | PENDING |
| 6 | Browser-verified | IMPLICIT | browser | PENDING |
```

### Source Types

- **EXPLICIT** - User literally asked for this
- **INFERRED** - Derived from context (your tech stack, past work)
- **IMPLICIT** - Universal standards (security, testing, quality)

### Status Progression

`PENDING` → `ACTIVE` → `DONE`

Or: `BLOCKED` (cannot achieve), `ADJUSTED` (modified with reason)

### ISC Scales With Complexity

The ISC isn't limited to a small number of rows:

| Effort | Typical ISC Size | Example |
|--------|------------------|---------|
| QUICK | 2-4 rows | "Fix typo", "Add button" |
| STANDARD | 5-10 rows | "Add dark mode" |
| THOROUGH | 10-20 rows | "Redesign auth system" |
| DETERMINED | 50-200+ rows | "Security audit" |

## Effort → Capability Matrix

Higher effort unlocks more powerful capabilities:

| Effort | Models | Research | Agents | Parallel |
|--------|--------|----------|--------|----------|
| **TRIVIAL** | — | — | — | 0 |
| **QUICK** | haiku | — | Intern | 1 |
| **STANDARD** | haiku, sonnet | single | Engineer, QA, Designer | 1-3 |
| **THOROUGH** | +opus plan | parallel | +Architect, Pentester | 3-5 |
| **DETERMINED** | all + opus | all | unlimited | 10 |

## Iteration Loops

When VERIFY finds issues, the algorithm loops back:

- **Unclear ideal?** → Back to THINK
- **Wrong approach?** → Back to PLAN
- **Execution error?** → Back to EXECUTE

Iteration count is bounded by effort level:
- QUICK: 1 iteration max
- STANDARD: 2 iterations
- THOROUGH: 3-5 iterations
- DETERMINED: Unlimited until success

## The Interview Protocol

When your request is unclear, the algorithm asks structured questions:

1. What does success look like when this is done?
2. Who will use this and what will they do with it?
3. What would make you show this to your friends?
4. What existing thing is this most similar to?
5. What should this definitely NOT do?

## Practical Examples

### Simple Feature

```
Use the algorithm: add a logout button to the navbar
```

ISC might include:
- Button visible in navbar (EXPLICIT)
- Clicking logs user out (EXPLICIT)
- Redirects to login page (INFERRED)
- Works on mobile (IMPLICIT)

### Complex Refactor

```
Algorithm effort THOROUGH: refactor the payment processing module
```

ISC might include dozens of rows covering:
- Existing tests still pass
- No PCI compliance regressions
- Performance benchmarks maintained
- Error handling improved
- Documentation updated

### Mission-Critical Work

```
Algorithm effort DETERMINED: design the security architecture
```

The algorithm will use ALL capabilities:
- Multiple research agents find best practices
- Council debates approaches
- RedTeam stress-tests the design
- Architect produces detailed specs
- Unlimited iterations until ideal state achieved

## Tips

- **Let classification happen automatically** for most tasks
- **Override to QUICK** when you need speed over thoroughness
- **Override to DETERMINED** when failure is not an option
- **The ISC grows** as research discovers more requirements
- **Each phase gates the next** - no skipping allowed
