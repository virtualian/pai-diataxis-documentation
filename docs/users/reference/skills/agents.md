---
sidebar_position: 2
title: Agents
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/agents.md -->

# Agents Skill

Dynamic agent composition and management system.

## Overview

| Property | Value |
|----------|-------|
| **Name** | Agents |
| **Pack** | `pai-agents-skill` |
| **Location** | `~/.claude/skills/Agents/` |

## Triggers

- "custom agents", "create custom agents"
- "spin up custom", "specialized agents"
- "agent personalities", "available traits"

## Capabilities

### Dynamic Agent Composition

Create agents from trait combinations:

```bash
bun run AgentFactory.ts \
  --traits "security,skeptical,adversarial" \
  --task "Review this authentication code" \
  --output json
```

### Trait Categories

**Expertise:** security, legal, finance, medical, technical, research, creative, business, data, communications

**Personality:** skeptical, enthusiastic, cautious, bold, analytical, creative, empathetic, contrarian, pragmatic, meticulous

**Approach:** thorough, rapid, systematic, exploratory, comparative, synthesizing, adversarial, consultative

### Voice Mapping

Each trait combination maps to a unique voice ID for audio output.

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| CreateCustomAgent | "create custom agents" | Compose agents from traits |
| ListTraits | "available traits" | Show all trait options |
| SpawnParallelAgents | "spawn parallel" | Launch multiple agents |

## Tools

| Tool | Purpose |
|------|---------|
| `AgentFactory.ts` | Compose agent from traits |

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition |
| `Data/Traits.yaml` | 28 composable traits with voice mappings |
| `Templates/DynamicAgent.hbs` | Agent prompt template |
| `AgentPersonalities.md` | Named agent definitions |

## Usage Examples

### Single Custom Agent

```
Create a skeptical security expert to review this code
```

### Multiple Agents

```
Spin up 3 custom agents with different perspectives on this architecture
```

### Task-Based Inference

```bash
bun run AgentFactory.ts --task "TypeScript transformation with careful type checking" --output json
```
