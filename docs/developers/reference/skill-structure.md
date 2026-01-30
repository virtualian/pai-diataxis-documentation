---
sidebar_position: 1
title: Skill Structure
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/SKILLSYSTEM.md -->

# Skill Structure Reference

Complete specification for PAI skills.

## Directory Structure

```
~/.claude/skills/SkillName/
├── SKILL.md                  # Required: Main skill definition
├── QuickStartGuide.md        # Context file (optional)
├── ApiReference.md           # Context file (optional)
├── Examples.md               # Context file (optional)
├── Workflows/                # Execution procedures
│   ├── Create.md
│   ├── Update.md
│   └── SyncRepo.md
├── Tools/                    # CLI tools (ALWAYS present)
│   ├── MyTool.ts
│   └── MyTool.help.md
└── Data/                     # Configuration, templates
    └── config.yaml
```

## Naming Conventions

**All naming uses TitleCase (PascalCase).**

| Component | Wrong | Correct |
|-----------|-------|---------|
| Skill directory | `createskill`, `create-skill` | `CreateSkill` |
| Workflow files | `create.md`, `update-info.md` | `Create.md`, `UpdateInfo.md` |
| Tool files | `manage-server.ts` | `ManageServer.ts` |
| Help files | `manage-server.help.md` | `ManageServer.help.md` |
| Reference docs | `api-reference.md` | `ApiReference.md` |
| YAML name field | `name: create-skill` | `name: CreateSkill` |

**Exception:** `SKILL.md` is always uppercase.

**TitleCase Rules:**
- First letter of each word capitalized
- No hyphens, underscores, or spaces
- Single words: `Blogging`, `Daemon`
- Multi-word: `UpdateDaemonInfo`, `SyncRepo`

## SKILL.md Format

### YAML Frontmatter

```yaml
---
name: SkillName
description: [What it does]. USE WHEN [intent triggers using OR]. [Additional capabilities].
---
```

**Fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | TitleCase skill name |
| `description` | Yes | Single line with `USE WHEN` clause |
| `implements` | No | Protocol compliance (e.g., `Science`) |
| `science_cycle_time` | No | `micro`, `meso`, or `macro` |

**Description Requirements:**
- Single line (not multi-line with `|`)
- Must include `USE WHEN` keyword
- Use intent-based triggers with `OR`
- Max 1024 characters (Anthropic limit)
- **No separate `triggers:` or `workflows:` arrays**

### Markdown Body

```markdown
# SkillName

Brief description of what the skill does.

## Voice Notification

**When executing a workflow, do BOTH:**

1. **Send voice notification**:
   ```bash
   curl -s -X POST http://localhost:8888/notify \
     -H "Content-Type: application/json" \
     -d '{"message": "Running the WORKFLOWNAME workflow from the SKILLNAME skill"}' \
     > /dev/null 2>&1 &
   ```

2. **Output text notification**:
   ```
   Running the **WorkflowName** workflow from the **SkillName** skill...
   ```

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **Create** | "create something" | `Workflows/Create.md` |
| **Update** | "update something" | `Workflows/Update.md` |

## Examples

**Example 1: Common use case**
```
User: "typical user request"
→ Invokes Create workflow
→ [What skill does]
→ [What user receives]
```

**Example 2: Another use case**
```
User: "another request pattern"
→ [Process]
→ [Output]
```

## Quick Reference

- **Config:** `Data/config.yaml`
- **Output:** `~/Downloads/`
```

## Workflow Files

Workflows are **execution procedures** - step-by-step instructions.

```markdown
# WorkflowName

## Overview

What this workflow does.

## Steps

1. **First step**
   - Detail
   - Detail

2. **Second step**
   ```bash
   command to run
   ```

3. **Third step**
   - Complete the action

## Output

What the user sees when complete.
```

**Workflow vs Reference:**

| Type | Location | Purpose | Naming |
|------|----------|---------|--------|
| Workflow | `Workflows/` | Execution procedures | Verbs: `Create.md`, `SyncRepo.md` |
| Reference | Skill root | Information to read | Nouns: `ApiReference.md`, `Examples.md` |

## Tool Files

### TypeScript CLI Pattern

```typescript
#!/usr/bin/env bun
/**
 * ToolName.ts - Brief description
 *
 * Usage:
 *   bun ~/.claude/skills/SkillName/Tools/ToolName.ts <command> [options]
 *
 * Commands:
 *   start     Start the service
 *   stop      Stop the service
 *   status    Check status
 *
 * Options:
 *   --port    Port number
 *   --config  Config file path
 */

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'start':
    // Implementation
    break;
  case '--help':
    console.log('Usage: ...');
    break;
  default:
    console.error('Unknown command');
    process.exit(1);
}
```

### Tool Requirements

1. Use `#!/usr/bin/env bun` shebang
2. TitleCase naming: `MyTool.ts`
3. Support `--help` flag
4. Create matching `.help.md` documentation
5. Use colored output for terminal feedback
6. Handle errors with clear messages
7. Exit codes: 0 for success, non-zero for errors

### Configuration Flags

Tools should expose configuration through CLI flags:

| Category | Examples | Purpose |
|----------|----------|---------|
| Mode flags | `--fast`, `--thorough`, `--dry-run` | Execution behavior |
| Output flags | `--format json`, `--quiet`, `--verbose` | Output control |
| Resource flags | `--model haiku`, `--model opus` | Model selection |
| Post-process flags | `--thumbnail`, `--remove-bg` | Additional processing |

## Flat Structure Requirement

**Maximum depth: 2 levels** (`skills/SkillName/Category/`)

### ✅ Allowed

```
skills/OSINT/SKILL.md                           # Skill root
skills/OSINT/Workflows/CompanyDueDiligence.md   # One level deep
skills/OSINT/Tools/Analyze.ts                   # One level deep
skills/OSINT/CompanyTools.md                    # Context in root
skills/OSINT/Examples.md                        # Context in root
```

### ❌ Forbidden

```
skills/OSINT/Resources/Examples.md              # No Resources/
skills/OSINT/Docs/CompanyTools.md               # No Docs/
skills/OSINT/Workflows/Company/DueDiligence.md  # Too deep
skills/Prompting/Templates/BeCreative.md        # Templates in root
```

## Personal vs System Skills

| Type | Naming | Contains | Shareable |
|------|--------|----------|-----------|
| System | TitleCase (`Browser`) | No personal data | Yes |
| Personal | `_ALLCAPS` (`_BLOGGING`) | API keys, config | Never |

**Personal skill identification:**

```bash
ls -1 ~/.claude/skills/ | grep "^_"
```

**Personalization pattern for system skills:**

```markdown
## Configuration

Personal configuration loaded from:
- `~/.claude/skills/CORE/USER/CONTACTS.md`
- `~/.claude/skills/CORE/USER/TECHSTACKPREFERENCES.md`
```

## Skill Customization System

System skills check for user customizations:

```markdown
## Customization

**Before executing, check for user customizations at:**
`~/.claude/skills/CORE/USER/SKILLCUSTOMIZATIONS/{SkillName}/`

If this directory exists, load and apply:
- `PREFERENCES.md` - User preferences
- Additional skill-specific files
```

### Customization Directory Structure

```
~/.claude/skills/CORE/USER/SKILLCUSTOMIZATIONS/
├── README.md
├── Art/
│   ├── EXTEND.yaml           # Extension manifest
│   ├── PREFERENCES.md        # Aesthetic preferences
│   └── CharacterSpecs.md
├── Agents/
│   ├── EXTEND.yaml
│   ├── PREFERENCES.md
│   └── VoiceConfig.json
└── [SkillName]/
    ├── EXTEND.yaml           # Required
    └── [config-files]
```

### EXTEND.yaml Manifest

```yaml
---
skill: SkillName                 # Must match skill name
extends:
  - PREFERENCES.md
  - OtherConfig.md
merge_strategy: override         # append | override | deep_merge
enabled: true
description: "What this customization adds"
```

## Dynamic Loading Pattern

For large skills, minimize SKILL.md and load context on-demand:

**Minimal SKILL.md (~40 lines):**
```markdown
---
name: Art
description: Visual content system. USE WHEN art, header images, diagrams.
---

# Art Skill

Complete visual content system.

## Workflow Routing

| Trigger | Workflow |
|---------|----------|
| Blog header | `Workflows/Essay.md` |
| Diagram | `Workflows/TechnicalDiagrams.md` |

## Quick Reference

**Aesthetic:** Charcoal architectural sketch
**Model:** nano-banana-pro

**Full Documentation:**
- Aesthetic: `SkillSearch('art aesthetic')`
- Examples: `SkillSearch('art examples')`
```

**Benefits:** 70%+ token reduction on invocation.

## Examples Section

**Required for all skills.** Shows 2-3 concrete usage patterns.

```markdown
## Examples

**Example 1: [Use case name]**
```
User: "[Actual user request]"
→ Invokes WorkflowName workflow
→ [What the skill does]
→ [What user receives]
```

**Example 2: [Another use case]**
```
User: "[Different request]"
→ [Process]
→ [Output]
```
```

**Why required:** Anthropic research shows examples improve tool selection accuracy from 72% to 90%.

## Output Requirements (Recommended)

For skills with variable output quality:

```markdown
## Output Requirements

- **Format:** [markdown | JSON | prose | code | table]
- **Length:** [under X words | exactly N items | concise]
- **Tone:** [professional | casual | technical]
- **Must Include:** [required elements]
- **Must Avoid:** [corporate fluff | hedging | filler]
```

## Validation Checklist

### Naming
- [ ] Skill directory is TitleCase
- [ ] YAML `name:` is TitleCase
- [ ] All workflow files are TitleCase
- [ ] All tool files are TitleCase
- [ ] Routing table names match file names

### SKILL.md
- [ ] Single-line `description` with `USE WHEN`
- [ ] No separate `triggers:` or `workflows:` arrays
- [ ] Description under 1024 characters
- [ ] Workflow routing table present
- [ ] Examples section with 2-3 patterns

### Structure
- [ ] `Tools/` directory exists (even if empty)
- [ ] No `backups/` inside skill
- [ ] Context docs in skill root (not subdirectories)
- [ ] Maximum 2 levels deep
- [ ] Workflows contain only execution procedures

### Tools
- [ ] Each tool has `.help.md` documentation
- [ ] Tools are executable
- [ ] Tools support `--help` flag

## Quick Reference

```
REQUIRED FILES:
SKILL.md              Main skill definition (UPPERCASE)

OPTIONAL DIRECTORIES:
Workflows/            Execution procedures only
Tools/                CLI tools (always present, can be empty)
Data/                 Configuration, templates

CONTEXT FILES:
*.md in skill root    Reference docs, guides, examples
                      NOT in subdirectories

YAML FRONTMATTER:
name: TitleCase
description: Brief. USE WHEN triggers. Details.

BODY SECTIONS:
# SkillName
## Voice Notification (optional)
## Workflow Routing (required table)
## Examples (required, 2-3 patterns)
## Quick Reference (optional)
```
