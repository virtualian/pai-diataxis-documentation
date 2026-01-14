---
sidebar_position: 1
title: Architecture Overview
---
<!-- Source: ~/projects/pai/website/docs/developers/explanation/architecture-overview.md -->

# Architecture Overview

PAI system components and data flow.

## Layers

```
┌─────────────────────────────────────────────────────────────┐
│                      User Request                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         Hooks                               │
│  (Context loading, security validation, notifications)      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Skills                               │
│  (Agents, Algorithm, Browser, Prompting, Art, Upgrades)     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         CORE                                │
│  (Identity, preferences, memory, system architecture)       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code                            │
│  (Tools: Read, Write, Bash, Task, etc.)                     │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

### Claude Code

The foundation. Provides:
- Tool execution (Read, Write, Bash, etc.)
- Agent spawning (Task tool)
- Session management

### CORE

The identity layer. Provides:
- AI identity and personality
- User preferences
- Response format
- Memory system access

### Skills

Modular capabilities. Each skill:
- Defines triggers for activation
- Routes to workflows
- Provides CLI tools
- Stores configuration

### Hooks

Integration points. Hooks:
- Load context at session start
- Validate operations (security)
- Transform responses
- Send notifications

## Data Flow

### Request Processing

1. User makes request
2. Hooks load context (CoreLoader)
3. Request matched against skill triggers
4. Skill routes to workflow
5. Workflow executes (may use tools, spawn agents)
6. Response transformed by hooks
7. Result returned to user

### Agent Spawning

```
Request → Algorithm → ISC Created → Capability Assigned →
Agent Spawned → Work Executed → Verified → Result Merged
```

### Memory Flow

```
Session Work → Artifacts Saved → Learnings Extracted →
Patterns Recognized → Future Sessions Informed
```

## Key Design Decisions

### Why Skills?

Skills provide:
- **Modularity** - Add/remove capabilities independently
- **Routing** - Clear trigger-based activation
- **Organization** - Workflows, tools, data in one place

### Why Hooks?

Hooks provide:
- **Separation** - Infrastructure separate from skills
- **Composability** - Multiple hooks can chain
- **Extensibility** - Add behavior without modifying core

### Why CLI Tools?

CLI tools provide:
- **Efficiency** - No schema overhead in context
- **Testability** - Run tools directly in shell
- **Simplicity** - Standard input/output patterns

## Integration Points

| Component | Integrates With |
|-----------|-----------------|
| Skills | Claude Code tools, other skills |
| Hooks | Claude Code events, external services |
| Memory | Skills, Algorithm, sessions |
| Algorithm | All capabilities, ISC persistence |
