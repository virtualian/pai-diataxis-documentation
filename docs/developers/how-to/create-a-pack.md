---
sidebar_position: 2
title: Create a Pack
---
<!-- Source: ~/projects/pai/website/docs/developers/how-to/create-a-pack.md -->

# How to Create a Pack

Package skills for distribution.

## Prerequisites

- Working skill(s) to package
- Understanding of pack structure (see [Pack Structure](../reference/pack-structure))

## Steps

### 1. Create Pack Directory

```bash
mkdir -p Packs/my-skill-pack/src/skills
```

### 2. Copy Skills

```bash
cp -r ~/.claude/skills/MySkill Packs/my-skill-pack/src/skills/
```

### 3. Create README.md

```markdown
# My Skill Pack

Brief description of what this pack provides.

## Features

- Feature 1
- Feature 2

## Requirements

- PAI CORE installed
- Other dependencies

## Quick Start

See [INSTALL.md](./INSTALL.md) for installation.
```

### 4. Create INSTALL.md

```markdown
# Installation

## AI-Guided Installation

This pack uses AI-guided installation. Simply tell Claude:

> Install this pack following INSTALL.md

## What Gets Installed

| Source | Destination |
|--------|-------------|
| `src/skills/MySkill/` | `~/.claude/skills/MySkill/` |

## Manual Installation

1. Copy skill to skills directory:
   ```bash
   cp -r src/skills/MySkill ~/.claude/skills/
   ```

2. Verify installation:
   ```bash
   ls ~/.claude/skills/MySkill/SKILL.md
   ```
```

### 5. Create VERIFY.md

```markdown
# Verification

## AI-Guided Verification

Tell Claude:

> Verify the installation following VERIFY.md

## Manual Verification

### Check Files Exist

```bash
ls ~/.claude/skills/MySkill/SKILL.md
```

### Test Functionality

Try the skill:

```
[Example prompt that should trigger the skill]
```

Expected: [What should happen]
```

### 6. Validate Pack

```bash
bun run Tools/validate-pack.ts Packs/my-skill-pack
```

## Pack Structure

```
Packs/my-skill-pack/
├── README.md           # Overview
├── INSTALL.md          # Installation guide
├── VERIFY.md           # Verification steps
└── src/
    └── skills/
        └── MySkill/
            ├── SKILL.md
            ├── Workflows/
            └── Tools/
```

## Best Practices

1. **Lowercase with hyphens** - `my-skill-pack`, not `MySkillPack`
2. **Include all three docs** - README, INSTALL, VERIFY
3. **AI-guided first** - Design for Claude to follow instructions
4. **Test installation** - Verify on a clean system
5. **Document dependencies** - List what must be installed first
