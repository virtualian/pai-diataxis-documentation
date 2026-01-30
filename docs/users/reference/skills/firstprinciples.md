---
sidebar_position: 6
title: FirstPrinciples
---
<!-- Source: ~/projects/pai/Packs/pai-firstprinciples-skill/src/skills/FirstPrinciples/SKILL.md -->

# FirstPrinciples Skill

Foundational reasoning methodology based on physics-based thinking. Deconstructs problems to fundamental truths rather than reasoning by analogy.

## Triggers

The FirstPrinciples skill activates when you say:
- "first principles", "from first principles"
- "fundamental", "fundamentally"
- "root cause", "find the root cause"
- "decompose", "break this down"
- "challenge assumptions", "is this really true"

## Core Concept

### Reasoning by Analogy (Common, Often Wrong)
- "How did we solve something similar?"
- "What do others do?"
- Copies existing solutions with slight variations

### Reasoning from First Principles (This Skill)
- "What are the fundamental truths here?"
- "What is this actually made of?"
- Rebuilds solutions from irreducible facts

## The Three-Step Framework

### Step 1: Deconstruct
**"What is this really made of?"**

Break down to constituent parts and fundamental truths.

Questions:
- What is this actually made of?
- What are the constituent parts?
- What is the actual cost/value of each part?
- What physical/logical laws apply?

### Step 2: Challenge
**"Is this a real constraint or an assumption?"**

Classify each element as hard or soft constraint.

| Type | Description | Example |
|------|-------------|---------|
| **Hard Constraint** | Physical law, unbreakable | Speed of light, laws of physics |
| **Soft Constraint** | Assumption, convention, habit | "We've always done it this way" |

### Step 3: Reconstruct
**"Given only the truths, what's optimal?"**

Build new solution from fundamentals, ignoring inherited form.

Questions:
- If starting from scratch, what would we build?
- What's the simplest solution that satisfies hard constraints?
- What conventions are we carrying forward unnecessarily?

## Workflows

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| **Deconstruct** | Break problem into fundamental parts | "decompose this", "break down" |
| **Challenge** | Challenge assumptions systematically | "challenge assumptions", "is this really needed" |
| **Reconstruct** | Rebuild solution from fundamentals | "rebuild from first principles" |

## Examples

**Challenge a pricing model:**
```
First principles: Why does our SaaS cost $99/month?
```

Output:
- Deconstruction of cost components
- Challenge: Which costs are fixed vs. assumed?
- Reconstruction: What would pricing look like from scratch?

**Analyze a technical decision:**
```
From first principles: Do we really need Kubernetes?
```

Output:
- What problems does K8s solve?
- Which of those problems do we actually have?
- What's the simplest solution for our actual problems?

**Root cause analysis:**
```
Find the root cause of our slow deployments
```

Output:
- Decomposition of the deployment pipeline
- Identify which steps are necessary vs. inherited
- Reconstruct optimal flow

## When to Use

| Role | Use Case |
|------|----------|
| **Architects** | Challenge "is this a constraint or how we've always done it?" |
| **Pentesters** | Identify actual attack surfaces vs. assumed security boundaries |
| **Engineers** | When stuck, rebuild from fundamentals |
| **Any skill** | When inherited assumptions may be limiting solutions |

## Integration

### Works With
- **RedTeam** — Sharpen adversarial analysis with assumption deconstruction
- **Council** — Bring first principles perspective to debates
- **Research** — Gather facts before first principles analysis

### Classic Example: SpaceX Rockets

**Analogy reasoning:** Rockets cost $65M because that's what rockets cost.

**First principles reasoning:**
1. Deconstruct: What is a rocket made of? (aluminum, titanium, copper, fuel)
2. Challenge: What do those raw materials cost? (~$500K)
3. Reconstruct: Why the 130x markup? (Manufacturing, supply chain, margins)
4. Solution: Vertical integration, reusable rockets → 10x cost reduction

## Notes

- First principles thinking is slower but produces breakthrough solutions
- Not every problem needs first principles—use for high-impact decisions
- The goal is to separate "what must be true" from "what we assume is true"
