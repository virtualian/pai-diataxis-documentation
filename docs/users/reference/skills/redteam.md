---
sidebar_position: 5
title: RedTeam
---
<!-- Source: ~/projects/pai/Packs/pai-redteam-skill/src/skills/RedTeam/SKILL.md -->

# RedTeam Skill

Military-grade adversarial analysis using parallel agent deployment. Breaks arguments into atomic components, attacks from 32 expert perspectives, and produces devastating counter-arguments.

## Triggers

The RedTeam skill activates when you say:
- "red team", "red team this"
- "attack this idea", "attack my plan"
- "counterarguments", "find the flaws"
- "critique", "stress test"
- "poke holes in", "devil's advocate"

## Workflows

### Parallel Analysis (Default)
**Trigger:** "red team", "stress test this"

Full adversarial analysis with steelman and counter-argument output.

```
Red team this microservices migration plan
```

### Adversarial Validation
**Trigger:** "battle of bots", "adversarial validation"

Produces new content through competition between proposals.

```
Adversarial validation: Which approach is better for this feature?
```

## The Five-Phase Protocol

RedTeam's ParallelAnalysis follows this protocol:

### 1. Decomposition
Break the argument into 24 atomic claims. Each claim is a single, testable assertion.

### 2. Parallel Analysis
32 specialized agents examine each claim:
- Engineers (code, architecture, scalability)
- Architects (system design, patterns)
- Pentesters (security, attack vectors)
- Business analysts (ROI, market fit)
- Interns (fresh eyes, naive questions)

Each agent identifies BOTH strengths AND weaknesses.

### 3. Synthesis
Identify convergent insights—where multiple agents agree on strengths or weaknesses.

### 4. Steelman
Produce the strongest possible version of the argument (8 points). This ensures fair treatment before attack.

### 5. Counter-Argument
Produce the strongest possible rebuttal (8 points). Focus on the ONE core issue that could collapse the entire argument.

## Output Format

```
## Steelman (8 points)
1. [Strongest version of point 1]
2. [Strongest version of point 2]
...

## Counter-Argument (8 points)
1. [Most devastating critique 1]
2. [Second most devastating critique 2]
...

## The Core Issue
[Single most important vulnerability that could collapse the argument]
```

## Examples

**Attack an architecture proposal:**
```
Red team this: We should migrate to microservices to improve scalability
```

**Devil's advocate on a business decision:**
```
Poke holes in my plan to raise prices 20%
```

**Stress test a security model:**
```
Red team our authentication approach - find the weaknesses
```

## Integration

### Works With
- **FirstPrinciples** — Challenge assumptions before red teaming
- **Council** — Collaborative debate first, then red team the conclusion
- **Research** — Gather context before stress testing

### When to Use RedTeam vs Council

| Scenario | Use This |
|----------|----------|
| Exploring options | Council |
| Have a decision, need validation | **RedTeam** |
| Want collaborative discussion | Council |
| Want pure attack | **RedTeam** |

## Notes

- RedTeam is purely adversarial—it will find flaws in even good ideas
- Always steelman before counter-argument for fairness
- The 32-agent parallel deployment provides comprehensive coverage
- Results should inform decisions, not replace judgment
