---
sidebar_position: 1
title: Skill Structure
---
<!-- Source: ~/projects/pai/website/docs/developers/reference/skill-structure.md -->

# Skill Structure Reference

Required files and format for PAI skills.

## Directory Structure

```
~/.claude/skills/SkillName/
├── SKILL.md              # Required: Skill definition
├── Workflows/            # Optional: Workflow files
│   ├── Workflow1.md
│   └── Workflow2.md
├── Tools/                # Optional: CLI tools
│   └── MyTool.ts
└── Data/                 # Optional: Configuration
    └── config.yaml
```

## SKILL.md Format

### Frontmatter (Required)

```yaml
---
name: SkillName
description: USE WHEN trigger phrases. Brief description.
---
```

### Sections

```markdown
# SkillName

**Invoke when:** trigger phrases.

## Overview

What this skill does.

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **WorkflowName** | "trigger phrase" | `Workflows/WorkflowName.md` |

## Examples

**Example 1: Description**
```
User: "trigger phrase with context"
→ Action taken
→ Result returned
```
```

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Skill directory | TitleCase | `MySkill/` |
| SKILL.md | Uppercase | `SKILL.md` |
| Workflows | TitleCase | `MainWorkflow.md` |
| Tools | TitleCase | `MyTool.ts` |
| Data files | lowercase | `config.yaml` |

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Skill name (TitleCase) |
| `description` | Yes | Trigger phrases + brief description |
| `version` | No | Semantic version |

## Trigger Phrases

The `description` field should include `USE WHEN` followed by trigger phrases:

```yaml
description: USE WHEN browser, screenshot, navigate, web testing. Debug-first browser automation.
```

## Workflow Files

### Format

```markdown
# WorkflowName

## Overview

What this workflow does.

## Steps

1. First step
2. Second step
3. Third step

## Output

What the user sees when complete.
```

### Referencing in SKILL.md

```markdown
| Workflow | Trigger | File |
|----------|---------|------|
| **Extract** | "extract content" | `Workflows/Extract.md` |
```

## Tool Files

### TypeScript CLI Pattern

```typescript
#!/usr/bin/env bun

const args = process.argv.slice(2);

// Parse arguments
// Execute logic
// Output results

console.log(JSON.stringify(result));
```

### Executable

```bash
chmod +x Tools/MyTool.ts
```

## Data Files

Store configuration, templates, and static data:

```yaml
# Data/config.yaml
setting1: value1
setting2: value2
```

## Validation Checklist

- [ ] SKILL.md exists with valid frontmatter
- [ ] `name` field is TitleCase
- [ ] `description` includes trigger phrases
- [ ] All workflow references resolve to existing files
- [ ] Examples section is present
- [ ] Tool files are executable (if present)
