---
sidebar_position: 1
title: Create a Skill
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/SKILLSYSTEM.md -->

# How to Create a Skill

This guide walks through creating a PAI skill from scratch. Skills are the primary way to extend PAI's capabilities.

## Prerequisites

- PAI CORE installed
- Understanding of [Skill Structure](/developers/reference/skill-structure)
- TypeScript knowledge (for tools)

## Quick Start

```bash
# Create skill directory with standard structure
mkdir -p ~/.claude/skills/MySkill/{Workflows,Tools,Data}

# Create the main skill file
touch ~/.claude/skills/MySkill/SKILL.md
```

## Step 1: Understand the Structure

Every skill follows this directory layout:

```
~/.claude/skills/MySkill/
├── SKILL.md              # Required: Main skill definition
├── Workflows/            # Execution procedures
│   ├── Create.md
│   └── Update.md
├── Tools/                # CLI tools (always present, even if empty)
│   └── MyTool.ts
├── Data/                 # Configuration, templates
│   └── config.yaml
└── Examples.md           # Context file (optional)
```

**Key Rules:**
- Skill directory uses **TitleCase**: `MySkill`, not `my-skill`
- SKILL.md is always **UPPERCASE**
- Workflows/ and Tools/ are the only allowed subdirectories
- Context files (guides, references) go in the **skill root**, not nested folders

## Step 2: Write SKILL.md

SKILL.md has two parts: YAML frontmatter and markdown body.

### YAML Frontmatter

```yaml
---
name: MySkill
description: Brief description. USE WHEN trigger phrase, another trigger, keyword.
---
```

**Requirements:**
- `name` uses TitleCase
- `description` is a **single line** (not multi-line `|`)
- `USE WHEN` clause is **mandatory** - Claude Code parses this for activation
- Max 1024 characters

### Markdown Body

```markdown
# MySkill

Brief description of what the skill does.

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **Create** | "create something" | `Workflows/Create.md` |
| **Update** | "update something" | `Workflows/Update.md` |

## Examples

**Example 1: Creating something**
```
User: "Create a new widget for my project"
→ Invokes Create workflow
→ Generates widget configuration
→ Returns confirmation with file path
```

**Example 2: Updating existing**
```
User: "Update the widget settings"
→ Invokes Update workflow
→ Modifies configuration
→ Returns diff of changes
```

## Quick Reference

- **Config location:** `~/.claude/skills/MySkill/Data/config.yaml`
- **Default output:** `~/Downloads/`
```

## Step 3: Create Workflows

Workflows are **execution procedures** - step-by-step instructions Claude follows.

```markdown
# Create

## Overview

Creates a new widget with user-specified settings.

## Steps

1. **Gather requirements**
   - Ask for widget name
   - Ask for widget type (simple | advanced)

2. **Generate configuration**
   ```yaml
   name: ${widget_name}
   type: ${widget_type}
   created: ${timestamp}
   ```

3. **Write file**
   - Save to `~/Downloads/${widget_name}.yaml`

4. **Confirm**
   - Report file location
   - Show preview of configuration

## Output

Return the configuration file path and a summary of what was created.
```

**Workflow vs Reference Docs:**
| Type | Goes In | Purpose |
|------|---------|---------|
| Workflows | `Workflows/` | Execution procedures (verbs: Create, Update, Sync) |
| Reference | Skill root | Information to read (nouns: Guide, Reference, Examples) |

## Step 4: Create Tools (Optional)

Tools are TypeScript CLI programs that workflows can invoke.

```typescript
#!/usr/bin/env bun
/**
 * MyTool.ts - Brief description
 *
 * Usage:
 *   bun ~/.claude/skills/MySkill/Tools/MyTool.ts <command> [options]
 *
 * Commands:
 *   generate    Generate a new widget
 *   validate    Validate configuration
 *
 * Options:
 *   --name      Widget name
 *   --type      Widget type (simple | advanced)
 *   --output    Output directory
 */

const args = process.argv.slice(2);
const command = args[0];

// Parse flags
const flags: Record<string, string> = {};
for (let i = 1; i < args.length; i += 2) {
  if (args[i].startsWith('--')) {
    flags[args[i].slice(2)] = args[i + 1];
  }
}

switch (command) {
  case 'generate':
    console.log(`Generating widget: ${flags.name}`);
    // Implementation here
    break;
  case 'validate':
    console.log('Validating configuration...');
    break;
  default:
    console.log('Usage: MyTool.ts <generate|validate> [options]');
    process.exit(1);
}
```

**Tool Requirements:**
1. Use `#!/usr/bin/env bun` shebang
2. TitleCase naming: `MyTool.ts`
3. Support `--help` flag
4. Create matching `.help.md` file
5. Handle errors gracefully with clear messages

Make it executable:

```bash
chmod +x ~/.claude/skills/MySkill/Tools/MyTool.ts
```

## Step 5: Add Voice Notification (Optional)

If you want voice announcements when workflows run:

```markdown
## Voice Notification

**When executing a workflow, do BOTH:**

1. **Send voice notification**:
   ```bash
   curl -s -X POST http://localhost:8888/notify \
     -H "Content-Type: application/json" \
     -d '{"message": "Running the Create workflow from the MySkill skill"}' \
     > /dev/null 2>&1 &
   ```

2. **Output text notification**:
   ```
   Running the **Create** workflow from the **MySkill** skill...
   ```
```

## Step 6: Validate

Run through this checklist:

### Naming
- [ ] Skill directory is TitleCase
- [ ] YAML `name:` is TitleCase
- [ ] All workflow files are TitleCase
- [ ] Tool files are TitleCase

### SKILL.md
- [ ] Single-line `description` with `USE WHEN`
- [ ] Workflow routing table present
- [ ] Examples section with 2-3 patterns
- [ ] No separate `triggers:` array (old format)

### Structure
- [ ] `Tools/` directory exists (even if empty)
- [ ] No `backups/` inside skill directory
- [ ] Context docs in skill root, not subdirectories

### Test
- [ ] Workflows reference existing files
- [ ] Tools are executable
- [ ] Examples match actual behavior

## Personal vs System Skills

PAI distinguishes between shareable and personal skills:

| Type | Naming | Contains | Shareable |
|------|--------|----------|-----------|
| System | TitleCase (`Browser`) | No personal data | Yes (via packs) |
| Personal | `_ALLCAPS` (`_BLOGGING`) | API keys, personal config | Never |

**System skills** reference `~/.claude/skills/CORE/USER/` for personalization:

```markdown
## Configuration

Personal configuration loaded from:
- `~/.claude/skills/CORE/USER/CONTACTS.md`
- `~/.claude/skills/CORE/USER/TECHSTACKPREFERENCES.md`
```

## Dynamic Loading Pattern

For large skills, keep SKILL.md minimal and load context on-demand:

**Minimal SKILL.md (~40 lines):**
```markdown
---
name: MySkill
description: Brief. USE WHEN triggers.
---

# MySkill

Brief description.

## Workflow Routing

| Trigger | Workflow |
|---------|----------|
| "create" | `Workflows/Create.md` |

## Quick Reference

- Key point 1
- Key point 2

**Full Documentation:**
- Details: `SkillSearch('myskill details')`
- Examples: `SkillSearch('myskill examples')`
```

**Separate context files:**
- `Details.md` - Full documentation
- `Examples.md` - Extended examples
- `ApiReference.md` - API documentation

Benefits: 70%+ token reduction on skill invocation.

## Complete Example

Here's a complete skill structure for a "Translator" skill:

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

**SKILL.md:**
```yaml
---
name: Translator
description: Document translation. USE WHEN translate, translation, convert language, localize.
---

# Translator

Translates documents between languages using AI.

## Workflow Routing

| Workflow | Trigger | File |
|----------|---------|------|
| **TranslateDocument** | "translate this" | `Workflows/TranslateDocument.md` |

## Examples

**Example 1: Translate a file**
```
User: "Translate README.md to Spanish"
→ Invokes TranslateDocument workflow
→ Reads source file
→ Translates content
→ Writes README_es.md
```

## Quick Reference

- **Supported languages:** See `Data/languages.yaml`
- **Output naming:** `{filename}_{lang}.{ext}`
```

## Next Steps

- Review [Skill Structure Reference](/developers/reference/skill-structure) for complete spec
- See [Create a Pack](/developers/how-to/create-a-pack) to distribute your skill
- Check existing skills in `~/.claude/skills/` for patterns
