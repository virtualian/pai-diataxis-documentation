---
sidebar_position: 4
title: Council
---
<!-- Source: ~/projects/pai/Packs/pai-council-skill/src/skills/Council/SKILL.md -->

# Council Skill

Multi-agent debate system where specialized agents discuss topics in rounds, respond to each other's points, and surface insights through intellectual friction.

## Triggers

The Council skill activates when you say:
- "council", "convene the council"
- "debate", "debate this"
- "perspectives", "get perspectives on"
- "agents discuss", "what do the experts think"

## Council vs RedTeam

| Aspect | Council | RedTeam |
|--------|---------|---------|
| **Mode** | Collaborative-adversarial | Purely adversarial |
| **Goal** | Find best path through debate | Attack and stress-test |
| **Output** | Visible conversation transcript | Steelman + counter-argument |
| **When** | Exploring options | Validating a decision |

## Workflows

### Full Debate (Default)
**Trigger:** "council", "debate this"

Three-round structured discussion with complete transcript.

```
Council: Should we use WebSockets or SSE for real-time updates?
```

**Output:** Complete transcript showing each agent's position evolving through rounds.

### Quick Check
**Trigger:** "quick council", "quick perspectives"

Single round for fast perspective gathering.

```
Quick council check: Is this API design reasonable?
```

**Output:** Initial positions from each agent, no follow-up rounds.

## How It Works

### The Three Rounds

1. **Round 1: Initial Positions**
   - Each agent states their perspective
   - Based on their expertise and role

2. **Round 2: Response and Refinement**
   - Agents respond to each other's points
   - Positions may shift based on arguments

3. **Round 3: Synthesis**
   - Final positions after full discussion
   - Areas of agreement and remaining disagreement

### Council Members

Typical council includes:
- **Architect** — System design perspective
- **Engineer** — Implementation feasibility
- **Security** — Risk and threat perspective
- **User Advocate** — End-user experience

Additional specialists can be added based on topic.

## Examples

**Architecture decision:**
```
Council: Monolith vs microservices for our new product?
```

**Technology choice:**
```
Debate: React vs Vue vs Svelte for our frontend rewrite
```

**With specific expert:**
```
Council with security focus: Evaluate this authentication approach
```

## Integration

### Works With
- **Research** — Gather context before convening
- **RedTeam** — Pure adversarial attack after debate
- **FirstPrinciples** — When council needs to challenge assumptions

### Best Practices
1. Use Quick for sanity checks, Debate for important decisions
2. Let agents complete their thoughts before interjecting
3. Ask follow-up questions if synthesis is unclear
4. Consider RedTeam after Council for stress-testing the conclusion

## Notes

- Parallel execution within rounds, sequential between rounds
- A 3-round debate with 4 agents = 12 agent calls but only 3 sequential waits
- Complete in 30-90 seconds typically
- Council produces genuine intellectual friction, not just opinion collection
