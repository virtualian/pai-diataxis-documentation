---
sidebar_position: 2
title: Create a Pack
---
<!-- Source: ~/projects/pai/Tools/PAIPackTemplate.md -->

# How to Create a Pack

Packs are the distribution format for PAI skills, hooks, and configurations. This guide walks through creating a complete, installable pack.

## Prerequisites

- Working skill(s) to package
- Understanding of [Pack Structure](/developers/reference/pack-structure)
- Tested installation on a clean system

## The End-to-End Requirement

**Every pack MUST be completely self-contained.** If your pack has a data flow, every component must be included:

```
Hook → sends to → Server → calls → API → produces → Output
  ✅        ✅        ✅       ✅      ✅        ✅
  ALL components must be in the pack
```

**Anti-patterns to avoid:**
- ❌ "A full server implementation is beyond this pack's scope"
- ❌ "You can implement your own TTS provider"
- ❌ "Adapt to your preferred system"

**The test:** Can someone go from fresh Claude Code to fully working system using ONLY your pack?

## Step 1: Create Directory Structure

```bash
mkdir -p Packs/my-skill-pack/src/{skills,hooks,config}
```

**Pack naming:** Lowercase with hyphens: `pai-feature-type`

Examples:
- `pai-agents-skill`
- `pai-voice-system`
- `pai-hook-system`

## Step 2: Create README.md

The README provides overview and context:

```markdown
---
name: My Skill Pack
pack-id: yourname-my-skill-pack-v1.0.0
version: 1.0.0
author: yourname
description: Brief description of what this pack provides
type: skill
platform: claude-code
dependencies: []
keywords: [keyword1, keyword2, keyword3]
---

<p align="center">
  <img src="icons/my-skill-pack.png" alt="My Skill Pack" width="256">
</p>

# My Skill Pack

> One-line description of value proposition

## Installation Prompt

You are receiving a PAI Pack - a modular upgrade for AI agent systems.

**What is PAI?** See: [PAI Project Overview](../README.md#what-is-pai)

This pack adds [capability] to your AI infrastructure. [2-3 sentences on value].

Please follow the installation instructions in INSTALL.md.

---

## What's Included

| Component | File | Purpose |
|-----------|------|---------|
| Main skill | `src/skills/MySkill/SKILL.md` | Core functionality |
| Workflow | `src/skills/MySkill/Workflows/Create.md` | Creation process |
| CLI tool | `src/skills/MySkill/Tools/MyTool.ts` | Automation |

**Summary:**
- **Files created:** 5
- **Skills installed:** 1
- **Dependencies:** None

---

## The Problem

[Explain the problem this pack solves - 2-4 paragraphs]

## The Solution

[Explain how your pack solves it - architecture overview]

## What Makes This Different

This sounds similar to [ALTERNATIVE] which also does [CAPABILITY]. What makes this approach different?

[64-word paragraph explaining your unique value proposition]

- First eight-word bullet explaining a key difference
- Second eight-word bullet explaining another key difference
- Third eight-word bullet explaining another key difference
- Fourth eight-word bullet explaining another key difference
```

## Step 3: Create INSTALL.md

Installation instructions should be AI-followable:

```markdown
# Installation

## AI-Guided Installation

Tell Claude:

> Install this pack following INSTALL.md

## Prerequisites

- PAI CORE installed
- Bun runtime: `curl -fsSL https://bun.sh/install | bash`

---

## Pre-Installation: System Analysis

### Step 0.1: Check Current State

```bash
# Check for existing files
PAI_CHECK="${PAI_DIR:-$HOME/.claude}"

if [ -d "$PAI_CHECK/skills/MySkill" ]; then
  echo "⚠️  MySkill already exists"
else
  echo "✓ Clean install path"
fi
```

### Step 0.2: Conflict Resolution

| Scenario | Action |
|----------|--------|
| Clean install | Proceed to Step 1 |
| Skill exists | Backup, then replace |
| Older version | Update in place |

---

## Step 1: Copy Skill Files

```bash
# Create skill directory
mkdir -p ~/.claude/skills/MySkill/{Workflows,Tools,Data}

# Copy all files
cp -r src/skills/MySkill/* ~/.claude/skills/MySkill/
```

## Step 2: Make Tools Executable

```bash
chmod +x ~/.claude/skills/MySkill/Tools/*.ts
```

## Step 3: Verify Installation

```bash
# Check skill exists
ls ~/.claude/skills/MySkill/SKILL.md

# Check tools are executable
~/.claude/skills/MySkill/Tools/MyTool.ts --help
```

---

## What Gets Installed

| Source | Destination |
|--------|-------------|
| `src/skills/MySkill/` | `~/.claude/skills/MySkill/` |

---

## Post-Installation

Restart Claude Code to load the new skill.

Test with:
```
[Example prompt that triggers your skill]
```
```

## Step 4: Create VERIFY.md

Verification ensures the pack works:

```markdown
# Verification

## AI-Guided Verification

Tell Claude:

> Verify the installation following VERIFY.md

---

## Verification Checklist

### 1. Files Exist

```bash
# Check all required files
ls ~/.claude/skills/MySkill/SKILL.md
ls ~/.claude/skills/MySkill/Workflows/Create.md
ls ~/.claude/skills/MySkill/Tools/MyTool.ts
```

**Expected:** All files present, no errors.

### 2. Tool Executes

```bash
~/.claude/skills/MySkill/Tools/MyTool.ts --help
```

**Expected:** Help text displays without errors.

### 3. Skill Triggers

Test with this prompt:

```
Create a test widget named "verification-test"
```

**Expected:**
- Skill activates (shows "Running the Create workflow...")
- Workflow executes
- Output file created

### 4. End-to-End Test

[Describe a complete workflow test]

**Expected:** [What success looks like]

---

## Troubleshooting

### Skill Doesn't Activate

1. Check SKILL.md has `USE WHEN` in description
2. Restart Claude Code
3. Check skill path is correct

### Tool Permission Denied

```bash
chmod +x ~/.claude/skills/MySkill/Tools/*.ts
```

### Missing Dependencies

Check Bun is installed:
```bash
bun --version
```

---

## Uninstall

To remove this pack:

```bash
rm -rf ~/.claude/skills/MySkill
```
```

## Step 5: Copy Source Files

Copy your working skill into the pack:

```bash
# Copy skill
cp -r ~/.claude/skills/MySkill Packs/my-skill-pack/src/skills/

# Copy any hooks
cp ~/.claude/hooks/my-hook.ts Packs/my-skill-pack/src/hooks/

# Copy configuration if needed
cp ~/.claude/settings-fragment.json Packs/my-skill-pack/src/config/
```

## Step 6: Create Pack Icon

Every pack needs a 256×256 transparent PNG icon:

```bash
bun run ~/.claude/skills/Art/Tools/Generate.ts \
  --model nano-banana-pro \
  --prompt "[ICON_DESCRIPTION], simple flat icon design, 256x256 pixels. Primary electric blue (#4a90d9), Accent purple (#8b5cf6). Simple enough to read at 64x64." \
  --size 1K \
  --aspect-ratio 1:1 \
  --remove-bg \
  --output Packs/icons/my-skill-pack.png
```

**Critical:** The `--remove-bg` flag is mandatory for actual transparency.

## Step 7: Validate Pack

Run the validation tool:

```bash
bun run Tools/validate-pack.ts Packs/my-skill-pack
```

This checks:
- Required files exist (README, INSTALL, VERIFY)
- SKILL.md has valid frontmatter
- Workflow references resolve
- Examples section present

## Complete Pack Structure

```
Packs/my-skill-pack/
├── README.md           # Overview, architecture, value prop
├── INSTALL.md          # Step-by-step installation
├── VERIFY.md           # Verification checklist
└── src/
    ├── skills/
    │   └── MySkill/
    │       ├── SKILL.md
    │       ├── Workflows/
    │       │   └── Create.md
    │       ├── Tools/
    │       │   └── MyTool.ts
    │       └── Data/
    │           └── config.yaml
    ├── hooks/          # Optional: Hook files
    │   └── my-hook.ts
    └── config/         # Optional: Configuration
        └── settings-fragment.json
```

## Pack Completeness Checklist

### Required Files
- [ ] README.md with frontmatter
- [ ] INSTALL.md with AI-guided steps
- [ ] VERIFY.md with test criteria
- [ ] 256×256 transparent PNG icon

### End-to-End Chain
- [ ] Every data flow component included
- [ ] No "implement your own" gaps
- [ ] Server code included (if needed)
- [ ] All dependencies documented

### Content Quality
- [ ] Problem clearly explained
- [ ] Solution architecture documented
- [ ] "What Makes This Different" section
- [ ] Troubleshooting section

### Testing
- [ ] Tested on clean system
- [ ] All verification steps pass
- [ ] Uninstall works cleanly

## Best Practices

1. **AI-first design** - Write for Claude to follow instructions
2. **Atomic installs** - Each pack independently installable
3. **Clear dependencies** - Document required packs
4. **Concrete tests** - Verifiable success criteria
5. **Rollback support** - Uninstall instructions

## Publishing

Once validated, your pack can be:
- Submitted to the PAI repository
- Shared via direct file transfer
- Hosted on your own repository

See the PAI contributing guide for submission requirements.
