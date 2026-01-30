---
sidebar_position: 13
title: CreateSkill
---
<!-- Source: ~/projects/pai/Packs/pai-createskill-skill/src/skills/CreateSkill/SKILL.md -->

# CreateSkill Skill

Mandatory framework for creating and validating PAI skills. Ensures all skills follow the correct structure and conventions.

## Triggers

The CreateSkill skill activates when you say:
- "create skill", "new skill"
- "skill structure", "scaffold skill"
- "canonicalize", "validate skill"

## Skill Structure Requirements

### Directory Layout

```
SkillName/
├── SKILL.md              # Required: Definition, triggers, overview
├── Workflows/            # Optional: Step-by-step procedures
│   ├── MainWorkflow.md
│   └── AlternateFlow.md
├── Tools/                # Optional: TypeScript CLI tools
│   └── ToolName.ts
├── Data/                 # Optional: Configuration files
│   └── config.yaml
└── USER/                 # Optional: User customizations
    └── overrides.md
```

### TitleCase Naming Convention

**All naming must use TitleCase (PascalCase):**

| Component | Format | Example |
|-----------|--------|---------|
| Skill directory | TitleCase | `Blogging`, `CreateSkill` |
| Workflow files | TitleCase.md | `Create.md`, `UpdateInfo.md` |
| Tool files | TitleCase.ts | `ManageServer.ts` |
| Reference docs | TitleCase.md | `ApiReference.md` |

**Never use:**
- `createskill`, `create-skill`, `CREATE_SKILL`
- `create.md`, `update-info.md`

### Flat Folder Structure

**Maximum depth:** `skills/SkillName/Category/`

**Allowed:**
```
skills/SkillName/SKILL.md                    ✓
skills/SkillName/Workflows/Create.md         ✓
skills/SkillName/Tools/Manage.ts             ✓
skills/SkillName/QuickStartGuide.md          ✓
```

**Forbidden (too deep):**
```
skills/SkillName/Workflows/Category/File.md  ✗
skills/SkillName/Tools/Utils/Helper.ts       ✗
```

## SKILL.md Requirements

Every SKILL.md must contain:

```yaml
---
name: SkillName
description: USE WHEN trigger, phrases, keywords
version: 1.0.0
---

# SkillName

Overview of what this skill does.

## Workflow Routing

| Trigger | Workflow |
|---------|----------|
| "do thing" | Workflows/DoThing.md |

## Tools

- `ToolName.ts` — What this tool does
```

### Description Format

The `description` field MUST use "USE WHEN" format:

```yaml
# Good
description: USE WHEN research, investigate, find information

# Bad
description: A skill for doing research
```

## Usage Examples

**Create a new skill:**
```
Create a new skill called "Bookmarks" that manages my saved links
```

**Validate existing skill:**
```
Validate the structure of my Research skill
```

**Canonicalize naming:**
```
Canonicalize the naming in my custom skill
```

## Workflows

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| **Create** | Scaffold new skill | "create skill", "new skill" |
| **Validate** | Check skill structure | "validate skill", "check skill" |
| **Canonicalize** | Fix naming conventions | "canonicalize", "fix naming" |

## Authoritative Source

Before creating any skill, the CreateSkill skill reads:
- `~/.claude/skills/CORE/SkillSystem.md` — Full specification
- Canonical example: `~/.claude/skills/_BLOGGING/SKILL.md`

## Generated Skill Example

When you run "create skill Bookmarks", you get:

```
Bookmarks/
├── SKILL.md
│   ├── name: Bookmarks
│   ├── description: USE WHEN bookmarks, saved links, favorites
│   ├── Workflow routing table
│   └── Tool references
├── Workflows/
│   ├── Save.md
│   ├── List.md
│   └── Search.md
├── Tools/
│   └── BookmarkManager.ts
└── Data/
    └── bookmarks.json
```

## Integration

### Works With
- **System** — Integrity checks validate skill structure
- **CORE** — Skills are registered with CORE for routing

## Notes

- All skills MUST be created through CreateSkill or manually following the spec
- Validation runs automatically before skill registration
- Non-compliant skills will not route correctly
- Use canonicalize to fix existing skills with wrong naming
