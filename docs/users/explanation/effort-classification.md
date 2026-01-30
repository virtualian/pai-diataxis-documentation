---
sidebar_position: 4
title: Effort Classification
---
<!-- Source: ~/projects/pai/Packs/pai-algorithm-skill/src/skills/THEALGORITHM/Reference/EffortMatrix.md -->

# Effort Classification

Effort classification determines which capabilities PAI uses for a task. Higher effort unlocks more powerful tools.

## The Five Levels

### TRIVIAL

**When:** Simple questions, quick lookups, obvious answers

**Capabilities:** None - skip the algorithm entirely

**What happens:** Direct answer, no ISC, no phased execution

**Example triggers:** "What's the syntax for...", one-liner fixes, typos

### QUICK

**When:** Single-step tasks, low complexity, low risk

**Capabilities:**
- `haiku` model (fast, cheap)
- `Intern` agent for grunt work
- 1 parallel agent max
- 1 iteration max

**ISC:** 2-4 rows typically

**Example triggers:** "quick", "fast", "just", "simple", "don't overthink"

### STANDARD

**When:** Multi-step work, typical development tasks (DEFAULT)

**Capabilities:**
- `haiku` + `sonnet` models
- Research agents (Perplexity, Gemini, Claude, Grok)
- `Engineer`, `QA`, `Designer` agents
- Agent composition via factory
- Browser verification
- 1-3 parallel agents
- 2 iterations max

**ISC:** 5-10 rows typically

**Example:** "Add dark mode", "Create API endpoint", normal feature work

### THOROUGH

**When:** Complex features, sensitive changes, important work

**Capabilities:**
- All STANDARD capabilities
- `Council` debate (4 agents collaborate)
- `Architect` agent for system design
- `Pentester` agent for security review
- Tree of Thought reasoning
- Plan Mode (user approval before major changes)
- 3-5 parallel agents
- 3-5 iterations

**ISC:** 10-20 rows typically

**Example triggers:** "thorough", "careful", "comprehensive", "important", "production"

### DETERMINED

**When:** Mission-critical work where failure is not an option

**Capabilities:**
- All capabilities unlocked
- `opus` model (maximum intelligence)
- `RedTeam` (32 agents, adversarial stress-testing)
- Unlimited iteration
- 10 parallel agents
- No time limit on effort

**ISC:** 50-200+ rows (can reach 1000+ for major projects)

**Example triggers:** "until done", "don't stop", "whatever it takes", "mission-critical"

## The Capability Matrix

| Category | TRIVIAL | QUICK | STANDARD | THOROUGH | DETERMINED |
|----------|---------|-------|----------|----------|------------|
| **Models** | — | haiku | +sonnet | +opus planning | +opus execution |
| **Research** | — | — | single agent | parallel agents | all agents |
| **Execution** | — | Intern | +Engineer, QA, Designer | +Architect, Pentester | +all specialists |
| **Debate** | — | — | — | Council (4) | +RedTeam (32) |
| **Thinking** | — | minimal | deep thinking | tree of thought | extended reasoning |
| **Parallel** | 0 | 1 | 3 | 5 | 10 |
| **Iterations** | 0 | 1 | 2 | 3-5 | unlimited |

## Detection Keywords

The algorithm auto-detects effort level from your request:

| Level | Keywords |
|-------|----------|
| TRIVIAL | "quick question", "what's the syntax", obvious one-liners |
| QUICK | "quick", "fast", "just", "simple", "don't overthink", "straightforward" |
| STANDARD | (default when no signals) |
| THOROUGH | "thorough", "careful", "comprehensive", "detailed", "important" |
| DETERMINED | "until done", "don't stop", "whatever it takes", "overnight" |

## Manual Override

Force a specific level:

```
Algorithm effort THOROUGH: design the new API
```

```
Algorithm effort QUICK: format this file
```

Or in conversation:

```
This is DETERMINED level work - we cannot afford to miss anything
```

## Model Selection by Effort

| Model | Effort Level | Characteristics |
|-------|-------------|-----------------|
| `haiku` | QUICK, STANDARD | Fast, cheap, good enough |
| `sonnet` | STANDARD, THOROUGH | Balanced reasoning |
| `opus` | THOROUGH (planning), DETERMINED | Maximum intelligence |

## Why This Matters

Effort classification prevents two failure modes:

### Over-Engineering

Using `opus` and 32 agents to format a JSON file wastes resources and time. QUICK tasks should stay quick.

### Under-Resourcing

Using `haiku` to design a security architecture produces mediocre results. DETERMINED tasks need maximum resources.

## Quick Decision Guide

```
Is it a typo or one-liner?           → TRIVIAL (skip algorithm)
Is it low-risk and simple?           → QUICK
Is it normal development work?       → STANDARD (default)
Is it complex or important?          → THOROUGH
Is failure unacceptable?             → DETERMINED
```

## ISC Size by Effort

| Effort | Typical ISC Rows | Example Task |
|--------|------------------|--------------|
| TRIVIAL | 0 (skip) | "What's the syntax for..." |
| QUICK | 2-4 | "Format this JSON" |
| STANDARD | 5-10 | "Add dark mode" |
| THOROUGH | 10-20 | "Refactor authentication" |
| DETERMINED | 50-200+ | "Security architecture audit" |

## Trait Modifiers

Each effort level modifies agent behavior:

| Effort | Agent Traits |
|--------|--------------|
| QUICK | rapid, pragmatic |
| STANDARD | analytical, systematic |
| THOROUGH | thorough, meticulous |
| DETERMINED | thorough, meticulous, adversarial |

The VERIFY phase always adds: skeptical, meticulous, adversarial - regardless of effort level.
