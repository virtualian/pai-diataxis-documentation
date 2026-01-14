---
sidebar_position: 2
title: Pack Structure
---
<!-- Source: ~/projects/pai/website/docs/developers/reference/pack-structure.md -->

# Pack Structure Reference

Pack packaging requirements for distribution.

## Directory Structure

```
Packs/pack-name/
├── README.md           # Required: Overview
├── INSTALL.md          # Required: Installation guide
├── VERIFY.md           # Required: Verification steps
└── src/
    ├── skills/         # Skills to install
    │   └── SkillName/
    ├── hooks/          # Hooks to install
    │   └── my-hook.ts
    └── config/         # Configuration files
        └── settings.json
```

## Naming Convention

Pack names use lowercase with hyphens:

```
pai-{feature}-{type}
```

Examples:
- `pai-agents-skill`
- `pai-browser-skill`
- `pai-hook-system`

## Required Files

### README.md

```markdown
# Pack Name

Brief description.

## Features

- Feature 1
- Feature 2

## Requirements

- PAI CORE installed

## Quick Start

See [INSTALL.md](./INSTALL.md).
```

### INSTALL.md

```markdown
# Installation

## AI-Guided Installation

> Install this pack following INSTALL.md

## What Gets Installed

| Source | Destination |
|--------|-------------|
| `src/skills/X/` | `~/.claude/skills/X/` |

## Manual Installation

Step-by-step manual instructions.

## Post-Installation

Any required configuration steps.
```

### VERIFY.md

```markdown
# Verification

## AI-Guided Verification

> Verify the installation following VERIFY.md

## Verification Steps

### 1. Check Files

```bash
ls ~/.claude/skills/SkillName/SKILL.md
```

### 2. Test Functionality

```
[Example prompt]
```

Expected: [Result]

## Troubleshooting

Common issues and solutions.
```

## Installation Mapping

The `INSTALL.md` should document source → destination:

| Source | Destination |
|--------|-------------|
| `src/skills/` | `~/.claude/skills/` |
| `src/hooks/` | `~/.claude/hooks/` |
| `src/config/` | Varies |

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
```

## Validation

```bash
bun run Tools/validate-pack.ts Packs/pack-name
```

Checks:
- Required files exist
- SKILL.md frontmatter is valid
- Workflow references resolve
- Examples section present

## Best Practices

1. **AI-first design** - Write for Claude to follow
2. **Atomic installs** - Each pack should be installable independently
3. **Clear dependencies** - Document required packs
4. **Verification tests** - Include concrete test steps
5. **Rollback instructions** - How to uninstall if needed
