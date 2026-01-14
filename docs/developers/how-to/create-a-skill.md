---
sidebar_position: 1
title: Create a Skill
---
<!-- Source: ~/projects/pai/website/docs/developers/how-to/create-a-skill.md -->

# How to Create a Skill

Build a new skill from scratch.

## Prerequisites

- PAI CORE installed
- Understanding of skill structure (see [Skill Structure](../reference/skill-structure))

## Steps

### 1. Read the Specification

```bash
cat ~/.claude/skills/CORE/SkillSystem.md
```

This is the authoritative source for skill structure.

### 2. Create the Directory

```bash
mkdir -p ~/.claude/skills/MySkill/{Workflows,Tools,Data}
```

### 3. Create SKILL.md

```markdown
---
name: MySkill
description: USE WHEN trigger phrase, another trigger. Brief description of capability.
---

# MySkill

**Invoke when:** trigger phrases that activate this skill.

## Overview

What this skill does and why.

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **MainWorkflow** | "do the thing" | `Workflows/MainWorkflow.md` |

## Examples

**Example 1: Basic usage**
```
User: "do the thing for my project"
→ Invokes MainWorkflow
→ Executes steps
→ Returns result
```
```

### 4. Create Workflows

```markdown
# MainWorkflow

## Steps

1. First, do X
2. Then, do Y
3. Finally, do Z

## Output

What the user should see when complete.
```

### 5. Create Tools (Optional)

```typescript
// Tools/MyTool.ts
const args = process.argv.slice(2);

// Parse arguments
const input = args[0];

// Do something
console.log(`Processing: ${input}`);
```

### 6. Validate

Check that:
- SKILL.md has valid frontmatter
- All workflow references in SKILL.md exist
- Examples section is present
- Tool files are executable

## Best Practices

1. **TitleCase naming** - `MySkill`, not `my-skill`
2. **Clear triggers** - Make it obvious when the skill should activate
3. **Examples required** - Show real usage patterns
4. **Single responsibility** - One skill, one capability domain
5. **Workflows for complexity** - Break complex procedures into workflow files

## Example: Complete Skill

```
~/.claude/skills/Translator/
├── SKILL.md
├── Workflows/
│   └── TranslateDocument.md
├── Tools/
│   └── Translate.ts
└── Data/
    └── languages.yaml
```
