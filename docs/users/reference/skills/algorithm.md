---
sidebar_position: 3
title: THE ALGORITHM
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/algorithm.md -->

# THE ALGORITHM Skill

Universal execution engine using scientific method to achieve ideal state.

## Overview

| Property | Value |
|----------|-------|
| **Name** | THEALGORITHM |
| **Pack** | `pai-algorithm-skill` |
| **Location** | `~/.claude/skills/THEALGORITHM/` |

## Triggers

- "run the algorithm"
- "use the algorithm"
- "algorithm effort LEVEL"
- Complex multi-step requests (auto-invoke)

## The 7 Phases

| Phase | Action | ISC Mutation |
|-------|--------|--------------|
| OBSERVE | Understand request + context | CREATE rows |
| THINK | Ensure nothing missing | COMPLETE rows |
| PLAN | Sequence + assign capabilities | ORDER + ASSIGN |
| BUILD | Make rows testable | REFINE rows |
| EXECUTE | Do the work | ADVANCE status |
| VERIFY | Test each completion | CONFIRM status |
| LEARN | Output for user rating | OUTPUT results |

## Effort Levels

| Level | Models | Agents | Parallel |
|-------|--------|--------|----------|
| TRIVIAL | - | - | 0 |
| QUICK | haiku | Intern | 1 |
| STANDARD | haiku, sonnet | Eng/QA/Des | 3 |
| THOROUGH | +opus plan | +Arch/Pen | 5 |
| DETERMINED | all | all | 10 |

## Tools

| Tool | Purpose |
|------|---------|
| `AlgorithmDisplay.ts` | LCARS visual display + voice |
| `EffortClassifier.ts` | Classify request → effort |
| `CapabilityLoader.ts` | Load capabilities for effort |
| `CapabilitySelector.ts` | Select capability for ISC row |
| `ISCManager.ts` | Create/update/query ISC |
| `RalphLoopExecutor.ts` | Persistent iteration |

## Capability Categories

### Research
`perplexity`, `gemini`, `grok`, `claude`, `codex`

### Thinking
`ultrathink`, `tree_of_thought`, `plan_mode`

### Debate
`council` (4 agents), `redteam` (32 agents)

### Execution
`intern`, `engineer`, `qa_tester`, `designer`, `architect`, `pentester`

### Verification
`browser`, `skeptical_verifier`

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition |
| `Data/Capabilities.yaml` | Source of truth for capabilities |
| `Phases/*.md` | Detailed phase documentation |
| `Reference/CapabilityMatrix.md` | Effort → capability mapping |

## Usage Examples

### Basic Invocation

```
Run the algorithm to implement user authentication
```

### With Effort Override

```
Algorithm effort DETERMINED: design the security architecture
```

### Ralph Loop

```
Iterate until all tests pass
```
