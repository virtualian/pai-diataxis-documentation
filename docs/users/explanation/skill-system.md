---
sidebar_position: 2
title: Skill System
---
<!-- Source: ~/projects/pai/website/docs/users/explanation/skill-system.md -->

# The Skill System

Skills are modular capabilities that extend PAI with specific functionality.

## What is a Skill?

A skill is a directory containing:
- `SKILL.md` - Definition with triggers and workflows
- `Workflows/` - Step-by-step procedures
- `Tools/` - TypeScript CLI implementations
- `Data/` - Configuration and data files

## How Skills Route

When you make a request, PAI checks skill triggers:

```yaml
name: Browser
description: USE WHEN browser, screenshot, navigate, web testing, verify UI
```

If your request matches, the skill activates and routes to the appropriate workflow.

## Skill Categories

### Core Skills

Always loaded, define fundamental capabilities:
- **CORE** - Identity, preferences, response format
- **CreateSkill** - Skill creation framework

### Capability Skills

Add specific functionality:
- **Agents** - Dynamic agent composition
- **Algorithm** - Structured execution engine
- **Browser** - Browser automation
- **Prompting** - Meta-prompting and templates
- **Art** - Visual content generation
- **Upgrades** - Ecosystem monitoring

## Skill Anatomy

### SKILL.md

Every skill has a `SKILL.md` with:

```yaml
---
name: SkillName
description: USE WHEN trigger words or phrases
---
```

### Workflows

Complex procedures broken into steps:

```markdown
# Workflow Name

## Steps

1. First step
2. Second step
3. Third step
```

### Tools

TypeScript CLIs for execution:

```typescript
// Tools/MyTool.ts
const args = process.argv.slice(2);
// ... implementation
```

## Skill Loading

Skills load via hooks at session start:
1. `CoreLoader` hook reads `~/.claude/skills/`
2. Each `SKILL.md` is parsed for triggers
3. Skill context is injected into the session

## Customization

Skills support a customization layer at:
```
~/.claude/SKILLCUSTOMIZATIONS/SkillName/
```

This allows user-specific configuration without modifying the base skill.
