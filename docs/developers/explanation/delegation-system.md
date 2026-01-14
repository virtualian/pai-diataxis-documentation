---
sidebar_position: 3
title: Delegation System
---
<!-- Source: ~/projects/pai/website/docs/developers/explanation/delegation-system.md -->

# Delegation System

Agent spawning and orchestration patterns.

## Overview

PAI delegates work to specialized agents via Claude Code's Task tool.

## Agent Types

### Built-in Agents

Claude Code provides standard agent types:

| Type | Purpose |
|------|---------|
| `general-purpose` | Flexible multi-step tasks |
| `Explore` | Codebase exploration |
| `Plan` | Implementation planning |

### PAI Agents

PAI extends with specialized agents:

| Type | Purpose | Model |
|------|---------|-------|
| `Intern` | Grunt work | haiku |
| `Engineer` | Implementation | sonnet |
| `Architect` | System design | opus |
| `QATester` | Validation | sonnet |
| `Designer` | UX/UI | sonnet |
| `Pentester` | Security | sonnet |

### Dynamic Agents

Created via AgentFactory with trait composition:

```bash
bun run AgentFactory.ts --traits "security,skeptical,adversarial"
```

## Delegation Patterns

### Single Agent

```typescript
Task({
  subagent_type: "Engineer",
  prompt: "Implement the authentication flow"
})
```

### Parallel Agents

```typescript
// Launch multiple agents in parallel
Task({
  subagent_type: "Intern",
  run_in_background: true,
  prompt: "Search for all uses of deprecated API"
})

Task({
  subagent_type: "Intern",
  run_in_background: true,
  prompt: "Search for all error handling patterns"
})
```

### Sequential with Dependencies

```typescript
// Research first
const research = await Task({
  subagent_type: "PerplexityResearcher",
  prompt: "Research best practices for auth"
});

// Then implement based on research
await Task({
  subagent_type: "Engineer",
  prompt: `Implement auth using these practices: ${research}`
});
```

### Council Debate

```typescript
// Spawn 4 agents with different perspectives
const perspectives = await Promise.all([
  Task({ subagent_type: "Architect", prompt: "Evaluate from architecture perspective" }),
  Task({ subagent_type: "Engineer", prompt: "Evaluate from implementation perspective" }),
  Task({ subagent_type: "QATester", prompt: "Evaluate from testing perspective" }),
  Task({ subagent_type: "Pentester", prompt: "Evaluate from security perspective" }),
]);

// Synthesize
await Task({
  subagent_type: "general-purpose",
  prompt: `Synthesize these perspectives: ${perspectives.join('\n')}`
});
```

## Voice Assignment

Dynamic agents get unique voices via trait mapping:

```yaml
# Traits.yaml
security:
  voice_id: "K5QbygPi6edprgmNThSP"
skeptical:
  voice_id: "pNInz6obpgDQGcFmaJgB"
```

Different trait combinations = different voices.

## Effort Gating

Agent availability is gated by effort level:

| Effort | Available Agents |
|--------|-----------------|
| QUICK | Intern |
| STANDARD | +Engineer, QA, Designer |
| THOROUGH | +Architect, Pentester |
| DETERMINED | All, unlimited parallel |

## Best Practices

### Match Agent to Task

- Use `Intern` for parallel data gathering
- Use `Engineer` for implementation
- Use `Architect` for design decisions
- Use specialized researchers for research

### Limit Parallelism

- STANDARD: 1-3 agents
- THOROUGH: 3-5 agents
- DETERMINED: up to 10 agents

### Verify with Different Agent

The skeptical verifier should be a different agent than the one that did the work:

```typescript
// Execute
const result = await Task({
  subagent_type: "Engineer",
  prompt: "Implement feature"
});

// Verify with different agent
await Task({
  subagent_type: "QATester",
  prompt: `Verify this implementation: ${result}`
});
```
