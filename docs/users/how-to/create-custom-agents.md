---
sidebar_position: 4
title: Create Custom Agents
---
<!-- Source: ~/projects/pai/website/docs/users/how-to/create-custom-agents.md -->

# How to Create Custom Agents

Compose specialized agents from traits using the Agents skill.

## Prerequisites

- `pai-agents-skill` pack installed

## Basic Usage

Ask for custom agents naturally:

```
Create 3 custom agents to analyze this security proposal
```

Or be specific about traits:

```
Spin up a skeptical, meticulous security expert to review this code
```

## The Trait System

Agents are composed from three trait categories:

### Expertise
`security`, `legal`, `finance`, `medical`, `technical`, `research`, `creative`, `business`, `data`, `communications`

### Personality
`skeptical`, `enthusiastic`, `cautious`, `bold`, `analytical`, `creative`, `empathetic`, `contrarian`, `pragmatic`, `meticulous`

### Approach
`thorough`, `rapid`, `systematic`, `exploratory`, `comparative`, `synthesizing`, `adversarial`, `consultative`

## How It Works

When you request custom agents, PAI:

1. Runs `AgentFactory.ts` with your trait requirements
2. Maps traits to unique voice IDs
3. Generates a specialized prompt for each agent
4. Spawns agents with `subagent_type: "general-purpose"`

## Examples

### Security Review Team

```
Create custom agents for security review:
- A skeptical security expert with adversarial approach
- A meticulous technical analyst with systematic approach
- A pragmatic business advisor with consultative approach
```

### Research Panel

```
Spin up 4 custom research agents with different perspectives
```

## Tips

- Use different trait combinations for each agent to get diverse voices
- The word "custom" triggers the trait system - use it explicitly
- Each custom agent gets a unique voice for audio output
- For parallel grunt work without unique voices, just say "agents" without "custom"
