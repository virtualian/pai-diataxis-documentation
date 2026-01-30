---
sidebar_position: 4
title: Create Custom Agents
---
<!-- Source: ~/projects/pai/Packs/pai-agents-skill/src/skills/Agents/SKILL.md -->

# How to Create Custom Agents

Compose specialized agents with unique personalities using PAI's trait-based agent factory.

## Prerequisites

- `pai-agents-skill` pack installed

## The Key Trigger: "Custom"

The word **"custom"** activates the trait system:

| You Say | What Happens |
|---------|--------------|
| "Create **custom** agents" | Unique prompts + unique voices for each |
| "Launch agents" | Generic Interns, same voice, parallel work |
| "Use Remy" | Pre-defined named agent |

## Basic Usage

Ask naturally:

```
Create 3 custom agents to analyze this security proposal
```

Or specify exact traits:

```
Spin up a skeptical, meticulous security expert to review this code
```

## The Trait System

Custom agents are composed from three categories:

### Expertise

What they know about:

`security` · `legal` · `finance` · `medical` · `technical` · `research` · `creative` · `business` · `data` · `communications`

### Personality

How they think:

`skeptical` · `enthusiastic` · `cautious` · `bold` · `analytical` · `creative` · `empathetic` · `contrarian` · `pragmatic` · `meticulous`

### Approach

How they work:

`thorough` · `rapid` · `systematic` · `exploratory` · `comparative` · `synthesizing` · `adversarial` · `consultative`

## How It Works

When you request custom agents:

1. **AgentFactory** infers or uses specified traits
2. Maps trait combinations to **unique voice IDs**
3. Generates a **specialized prompt** for each agent
4. Spawns agents with distinct **personalities**

Each agent sounds and thinks differently.

## Practical Examples

### Security Review Team

```
Create custom agents for security review:
- A skeptical security expert with adversarial approach
- A meticulous technical analyst with systematic approach
- A pragmatic business advisor with consultative approach
```

Result: Three agents with different expertise, personalities, and voices reviewing your code from different angles.

### Research Panel

```
Spin up 4 custom research agents with different perspectives to analyze this market
```

The factory automatically varies traits to create diverse viewpoints.

### Devil's Advocate

```
Create a contrarian, skeptical analyst to challenge this proposal
```

Gets you an agent designed to find holes in your thinking.

### Quick Parallel Work

When you don't need unique voices, skip "custom":

```
Launch 5 agents to research these companies
```

Result: Generic Intern agents, all with the same voice, optimized for parallel grunt work.

## Model Selection

Agents use appropriate models based on task:

| Task Type | Model | Speed |
|-----------|-------|-------|
| Grunt work, simple checks | `haiku` | 10-20x faster |
| Standard analysis, research | `sonnet` | Balanced |
| Deep reasoning, architecture | `opus` | Maximum intelligence |

For parallel custom agents, `sonnet` is typical. For parallel generic agents, `haiku` for speed.

## Named Agents

PAI includes pre-defined agents with full backstories:

| Agent | Role | Personality |
|-------|------|-------------|
| Remy | Technical archaeologist | Curious, tangent-following |
| Ava | Research analyst | Investigative, thorough |
| Marcus | Engineer lead | Battle-tested, pragmatic |
| Serena | System architect | Academic, visionary |
| Rook | Security pentester | Reformed grey hat |

Use them by name:

```
Get Rook to pentest this authentication flow
```

## Voice Integration

Custom agents get personality-matched voices:

- Enthusiastic agents → energetic voice
- Analytical agents → measured voice
- Skeptical agents → deliberate voice

This requires the `pai-voice-system` pack installed.

## Tips

- **Use "custom" explicitly** to trigger unique agent composition
- **Vary traits** across agents for diverse perspectives
- **Skip "custom"** when you need fast parallel work without personality
- **Specify traits** when you know exactly what perspective you need
- **Let the factory infer** when you just want "different perspectives"
