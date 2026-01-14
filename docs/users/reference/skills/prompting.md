---
sidebar_position: 5
title: Prompting
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/prompting.md -->

# Prompting Skill

Meta-prompting system for dynamic prompt generation.

## Overview

| Property | Value |
|----------|-------|
| **Name** | Prompting |
| **Pack** | `pai-prompting-skill` |
| **Location** | `~/.claude/skills/Prompting/` |

## Triggers

- "meta-prompting", "template generation"
- "prompt optimization"
- "programmatic prompt composition"

## Capabilities

### Standards

Complete prompt engineering documentation based on:
- Anthropic's Claude 4.x Best Practices
- Context engineering principles
- 1,500+ academic papers on prompt optimization

### Templates

Handlebars-based system with five core primitives:

| Primitive | Purpose |
|-----------|---------|
| ROSTER | Agent/skill definitions from data |
| VOICE | Personality calibration settings |
| STRUCTURE | Multi-step workflow patterns |
| BRIEFING | Agent context handoff |
| GATE | Validation checklists |

## Tools

### RenderTemplate

```bash
bun run RenderTemplate.ts \
  --template Primitives/Briefing.hbs \
  --data path/to/data.yaml \
  --output path/to/output.md
```

### ValidateTemplate

```bash
bun run ValidateTemplate.ts \
  --template Primitives/Briefing.hbs
```

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| RenderTemplate | "render template" | Generate from template |
| ValidateTemplate | "validate template" | Check syntax |
| ApplyStandards | "review prompt" | Optimize prompt |

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition |
| `Standards.md` | Complete prompt engineering guide |
| `Templates/README.md` | Template system overview |
| `Templates/Primitives/*.hbs` | Template primitives |

## Usage Examples

### Generate Agent Roster

```
Generate a roster from my agents.yaml
```

### Create Briefing

```
Brief the research agent on this task
```

### Validate Template

```
Check my new template for errors
```

## Best Practices

1. **Separation of Concerns** - Templates for structure, YAML for content
2. **Keep Templates Simple** - Business logic in TypeScript
3. **DRY Principle** - Extract repeated patterns into partials
4. **Validate Before Rendering** - Check all required variables exist
