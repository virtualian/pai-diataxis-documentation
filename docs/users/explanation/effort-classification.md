---
sidebar_position: 4
title: Effort Classification
---
<!-- Source: ~/projects/pai/website/docs/users/explanation/effort-classification.md -->

# Effort Classification

Effort classification determines which capabilities are available for a task.

## The Five Levels

### TRIVIAL

**When:** Simple questions, quick lookups, no work required

**Capabilities:** None - skip the algorithm entirely

**Example:** "What's the syntax for a for loop in Python?"

### QUICK

**When:** Single-step tasks that need minimal orchestration

**Capabilities:**
- `haiku` model (fast, cheap)
- `Intern` agent for grunt work
- `Ralph Loop` for simple iteration
- Max 1 parallel agent

**Example:** "Format this JSON file"

### STANDARD

**When:** Multi-step bounded work, typical development tasks

**Capabilities:**
- `haiku` + `sonnet` models
- Research agents (Perplexity, Gemini, etc.)
- `Engineer`, `QA`, `Designer` agents
- Agent composition via factory
- Browser verification
- 1-3 parallel agents

**Example:** "Add dark mode to the settings page"

### THOROUGH

**When:** Complex, multi-file work requiring careful design

**Capabilities:**
- All STANDARD capabilities
- `Council` debate (4 agents)
- `Architect` and `Pentester` agents
- Tree of Thought reasoning
- Plan Mode for user approval
- 3-5 parallel agents

**Example:** "Refactor the authentication system"

### DETERMINED

**When:** Mission-critical work where failure is not an option

**Capabilities:**
- All capabilities unlocked
- `opus` model (maximum intelligence)
- `RedTeam` (32 agents adversarial)
- Unlimited iteration
- 10 parallel agents

**Example:** "Design the security architecture for the payment system"

## How Classification Works

The algorithm classifies effort automatically based on:
- Task complexity
- Scope of changes
- Risk level
- Explicit indicators

### Override

Force a specific level with inline syntax:

```
Algorithm effort THOROUGH: design the new API
```

Or in conversation:

```
This is DETERMINED level - we cannot afford to miss anything
```

## Capability Matrix

| Category | QUICK | STANDARD | THOROUGH | DETERMINED |
|----------|-------|----------|----------|------------|
| Models | haiku | +sonnet | +opus plan | +opus |
| Research | - | single | parallel | all |
| Agents | Intern | +Eng/QA/Des | +Arch/Pen | +all |
| Debate | - | - | Council | +RedTeam |
| Parallel | 1 | 3 | 5 | 10 |
| Iterations | 1 | 2 | 3-5 | unlimited |

## Why This Matters

Effort classification prevents two failure modes:
1. **Over-engineering** - Using opus and 32 agents to format a JSON file
2. **Under-resourcing** - Using haiku to design a security architecture

Match resources to stakes for optimal outcomes.
