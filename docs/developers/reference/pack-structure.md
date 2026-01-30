---
sidebar_position: 2
title: Pack Structure
---
<!-- Source: ~/projects/pai/Tools/PAIPackTemplate.md -->

# Pack Structure Reference

Complete specification for PAI packs.

## Directory Structure

```
Packs/pack-name/
├── README.md           # Required: Overview, architecture
├── INSTALL.md          # Required: Installation steps
├── VERIFY.md           # Required: Verification checklist
└── src/
    ├── skills/         # Skills to install
    │   └── SkillName/
    │       ├── SKILL.md
    │       ├── Workflows/
    │       └── Tools/
    ├── hooks/          # Hooks to install
    │   └── my-hook.ts
    └── config/         # Configuration files
        └── settings-fragment.json
```

## Naming Convention

**Pack directories:** Lowercase with hyphens

```
pai-{feature}-{type}
```

| Example | Description |
|---------|-------------|
| `pai-agents-skill` | Agents skill pack |
| `pai-voice-system` | Voice notification system |
| `pai-hook-system` | Core hook infrastructure |
| `pai-core-install` | Core PAI installation |

## Frontmatter

README.md includes YAML frontmatter:

```yaml
---
name: PAI History System
pack-id: danielmiessler-history-system-core-v1.0.0
version: 1.0.0
author: danielmiessler
description: Granular context-tracking system (128 words max)
type: feature
purpose-type: [productivity, automation, development]
platform: claude-code
dependencies: []
keywords: [history, documentation, memory, capture]
---
```

### Field Specifications

| Field | Format | Description |
|-------|--------|-------------|
| `name` | 24 words max | Human-readable name |
| `pack-id` | `{author}-{name}-{variant}-v{version}` | Unique identifier |
| `version` | SemVer | `major.minor.patch` |
| `author` | 1 word | GitHub username |
| `description` | 128 words max | One-line description |
| `type` | Single | `concept`, `skill`, `hook`, `plugin`, `agent`, `mcp`, `workflow`, `template`, `other` |
| `purpose-type` | List | `security`, `productivity`, `research`, `development`, `automation`, `integration`, `creativity`, `analysis`, `other` |
| `platform` | Single | `agnostic`, `claude-code`, `opencode`, `cursor`, `custom` |
| `dependencies` | List | Required pack-ids, or `[]` |
| `keywords` | 24 max | Searchable tags |

## Required Files

### README.md

```markdown
---
[frontmatter]
---

<p align="center">
  <img src="icons/pack-name.png" alt="Pack Name" width="256">
</p>

# Pack Name

> One-line value proposition

## Installation Prompt

You are receiving a PAI Pack - a modular upgrade for AI agent systems.

**What is PAI?** See: [PAI Project Overview](../README.md#what-is-pai)

This pack adds [capability]. [2-3 sentences].

Please follow INSTALL.md instructions.

---

## What's Included

| Component | File | Purpose |
|-----------|------|---------|
| [Component 1] | `path/to/file.ts` | [What it does] |

**Summary:**
- **Files created:** N
- **Hooks registered:** N
- **Dependencies:** [List or "None"]

---

## The Problem

[2-4 paragraphs explaining the problem]

## The Solution

[Architecture overview with diagram]

## What Makes This Different

This sounds similar to [ALTERNATIVE] which also does [CAPABILITY]. What makes this approach different?

[64-word paragraph]

- First eight-word bullet explaining key difference
- Second eight-word bullet explaining another difference
- Third eight-word bullet explaining another difference
- Fourth eight-word bullet explaining another difference
```

### INSTALL.md

```markdown
# Installation

## AI-Guided Installation

Tell Claude:

> Install this pack following INSTALL.md

## Prerequisites

- PAI CORE installed
- Bun runtime
- [Other requirements]

---

## Pre-Installation: System Analysis

### Step 0.1: Detect Current State

```bash
PAI_CHECK="${PAI_DIR:-$HOME/.claude}"
if [ -d "$PAI_CHECK/skills/SkillName" ]; then
  echo "⚠️  Skill exists"
else
  echo "✓ Clean install"
fi
```

### Step 0.2: Conflict Resolution

| Scenario | Action |
|----------|--------|
| Clean install | Proceed to Step 1 |
| Files exist | Backup, then replace |
| Missing dependencies | Install dependencies first |

---

## Step 1: [First Step]

```bash
# Commands
```

## Step 2: [Second Step]

[Continue with numbered steps]

---

## What Gets Installed

| Source | Destination |
|--------|-------------|
| `src/skills/X/` | `~/.claude/skills/X/` |
| `src/hooks/` | `~/.claude/hooks/` |

---

## Post-Installation

Restart Claude Code.

Test with:
```
[Example prompt]
```
```

### VERIFY.md

```markdown
# Verification

## AI-Guided Verification

Tell Claude:

> Verify the installation following VERIFY.md

---

## Verification Checklist

### 1. Files Exist

```bash
ls ~/.claude/skills/SkillName/SKILL.md
```

**Expected:** File exists.

### 2. Tools Execute

```bash
~/.claude/skills/SkillName/Tools/MyTool.ts --help
```

**Expected:** Help text displays.

### 3. Skill Triggers

```
[Test prompt]
```

**Expected:** [Expected behavior]

### 4. End-to-End Test

[Complete workflow test]

---

## Troubleshooting

### [Common Issue 1]

[Solution]

### [Common Issue 2]

[Solution]

---

## Uninstall

```bash
rm -rf ~/.claude/skills/SkillName
```
```

## Pack Icon

**Required:** 256×256 transparent PNG

**Specifications:**
- 256×256 pixels
- Actual transparent background (not checkerboard)
- Primary color: Blue (#4a90d9)
- Accent color: Purple (#8b5cf6) - 10-15% only
- Simple, recognizable at 64×64

**Generation:**

```bash
bun run ~/.claude/skills/Art/Tools/Generate.ts \
  --model nano-banana-pro \
  --prompt "[DESCRIPTION], simple flat icon, 256x256. Primary #4a90d9, Accent #8b5cf6." \
  --size 1K \
  --aspect-ratio 1:1 \
  --remove-bg \
  --output Packs/icons/pack-name.png
```

**Critical:** `--remove-bg` is mandatory for actual transparency.

## End-to-End Requirement

**Every pack must be completely self-contained.**

### The Chain Test

For every data flow:

```
Hook → sends to → Server → calls → API → produces → Output
```

Each component must be in the pack. No "implement your own" gaps.

### Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| "Server is beyond scope" | Include complete server |
| "Implement your own TTS" | Include TTS integration |
| "Adapt to your system" | Include working system |
| "See skeleton below" | Include production code |

## Installation Mapping

| Source Directory | Destination |
|-----------------|-------------|
| `src/skills/` | `~/.claude/skills/` |
| `src/hooks/` | `~/.claude/hooks/` |
| `src/config/settings-fragment.json` | Merge into `~/.claude/settings.json` |

## Bundle Structure

Bundles install multiple packs:

```
Bundles/BundleName/
├── README.md
└── packs.yaml
```

```yaml
# packs.yaml
name: Official
description: All core PAI skills
packs:
  - pai-core-install
  - pai-agents-skill
  - pai-algorithm-skill
  - pai-browser-skill
```

## Section Word Limits

| Section | Limit |
|---------|-------|
| Installation Prompt | 512 |
| What's Included | 256 |
| The Problem | 2048 |
| The Solution | 4096 |
| What Makes Different | 128 |
| Installation | 16384 |
| Invocation Scenarios | 8192 |
| Example Usage | 8192 |
| Configuration | 512 |
| Customization | 2048 |
| Credits | 256 |
| Related/Recommended | 256 each |
| Relationships | 512 total |

## Validation

```bash
bun run Tools/validate-pack.ts Packs/pack-name
```

**Checks:**
- Required files exist
- SKILL.md frontmatter valid
- Workflow references resolve
- Examples section present
- Icon exists and is correct size

## Completeness Checklist

### Structure
- [ ] Pack directory in `Packs/`
- [ ] README.md with frontmatter
- [ ] INSTALL.md with AI-guided steps
- [ ] VERIFY.md with test criteria
- [ ] 256×256 transparent PNG icon
- [ ] `src/` with source files

### End-to-End
- [ ] Chain test passed
- [ ] No "implement your own" gaps
- [ ] Server included (if needed)
- [ ] All dependencies documented

### Content
- [ ] Problem clearly explained
- [ ] Solution architecture documented
- [ ] "What Makes Different" section
- [ ] Troubleshooting section

### Testing
- [ ] Tested on clean system
- [ ] All verification steps pass
- [ ] Uninstall works cleanly

## Versioning

**SemVer:** `major.minor.patch`

| Change Type | Version Bump |
|-------------|--------------|
| Breaking changes | Major |
| New features (compatible) | Minor |
| Bug fixes | Patch |

## Quick Reference

```
PACK STRUCTURE:
Packs/pack-name/
├── README.md       Overview + frontmatter
├── INSTALL.md      AI-guided installation
├── VERIFY.md       Verification checklist
└── src/            Source files
    ├── skills/     Skills to install
    ├── hooks/      Hooks to install
    └── config/     Configuration

NAMING:
Packs: lowercase-with-hyphens (pai-feature-type)
Skills: TitleCase (inside src/skills/)

ICON:
256×256 transparent PNG
--remove-bg flag mandatory

FRONTMATTER:
name, pack-id, version, author, description,
type, purpose-type, platform, dependencies, keywords

THE TEST:
Can someone go from fresh Claude Code to
fully working system using ONLY this pack?
```
