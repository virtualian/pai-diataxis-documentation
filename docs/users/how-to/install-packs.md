---
sidebar_position: 2
title: Install Packs
---
<!-- Source: ~/projects/pai/Packs/README.md -->

# How to Install Packs

Add new capabilities to PAI by installing packs. Each pack is a self-contained module with everything needed for installation.

## Prerequisites

- PAI CORE installed (see [Install PAI](/users/how-to/install-pai))
- [Bun](https://bun.sh) runtime for running pack tools

## Understanding Pack Structure

Each pack is a directory containing:

```
pack-name/
├── README.md           # Pack overview, architecture, what it solves
├── INSTALL.md          # Step-by-step installation instructions
├── VERIFY.md           # Mandatory verification checklist
└── src/                # Actual source code files
    ├── hooks/          # Hook implementations (if applicable)
    ├── tools/          # CLI tools and utilities
    ├── skills/         # Skill definitions and workflows
    └── config/         # Configuration files
```

---

## Method 1: AI-Assisted Installation (Recommended)

Let your DA handle the installation. This is the recommended approach because your DA:
- Understands your existing system
- Customizes installation for your setup
- Verifies everything works before declaring success

### Step 1: Navigate to the Pack

```bash
cd PAI/Packs/pai-research-skill
```

### Step 2: Ask Your DA to Install

```
Install this pack into my system. Use PAI_DIR="~/.claude"
and DA="YourDAName". Set up the hooks, save the code, and verify it works.
```

### What Your DA Will Do

1. **Read README.md** — Understand what the pack provides
2. **Follow INSTALL.md** — Execute each step in order
3. **Copy files from src/** — Place code in the correct locations
4. **Complete VERIFY.md** — Run verification checks to confirm success

---

## Method 2: Manual Installation

If you prefer to install packs yourself:

### Step 1: Find Available Packs

Browse the [Packs Catalog](/users/reference/packs-catalog) or list them directly:

```bash
ls PAI/Packs/
```

### Step 2: Read the Install Instructions

```bash
cat PAI/Packs/pai-research-skill/INSTALL.md
```

### Step 3: Copy Files from src/

Each pack's `src/` directory contains the actual code files. Copy them to the locations specified in INSTALL.md:

```bash
# Example: copying a skill
cp -r PAI/Packs/pai-research-skill/src/skills/Research ~/.claude/skills/
```

### Step 4: Install Dependencies

If the pack requires npm packages:

```bash
cd ~/.claude && bun add <package-name>
```

### Step 5: Verify Installation

Run the checks from VERIFY.md:

```bash
cat PAI/Packs/pai-research-skill/VERIFY.md
```

---

## Installation Order

Packs have dependencies. Install infrastructure packs first:

```
Required (install first):
1. pai-hook-system            ← Foundation (no dependencies)
2. pai-core-install           ← Depends on hooks

Infrastructure (install next):
3. pai-statusline             ← Depends on core-install
4. pai-voice-system           ← Depends on hooks + core
5. pai-observability-server   ← Depends on hooks

Skills (install any):
6+. pai-*-skill               ← Most depend only on core-install
```

---

## Installing Multiple Packs

### Using a Bundle

Bundles are curated collections that handle installation order automatically:

```bash
cd PAI/Bundles/Official
```

Then ask your DA:

```
Install this bundle into my system.
```

See [Bundles Reference](/users/reference/bundles) for available bundles.

### Installing Packs in Sequence

If installing multiple packs manually:

```
Install these packs in order:
1. PAI/Packs/pai-hook-system/
2. PAI/Packs/pai-core-install/
3. PAI/Packs/pai-research-skill/
```

---

## API Keys and Authentication

**All API keys live in one place: `~/.claude/.env`**

Packs that require API keys (Voice, Art, BrightData, etc.) read from this single environment file:

```bash
# Copy the example and add your keys
cp PAI/.env.example ~/.claude/.env
nano ~/.claude/.env
```

Common variables:
- `ELEVENLABS_API_KEY` — For voice notifications
- `BRIGHT_DATA_*` — For web scraping
- `OPENAI_API_KEY` — For image generation

---

## Verification

Every pack includes `VERIFY.md` with a verification checklist. **Do not consider installation complete until all checks pass.**

Typical verification includes:

- [ ] All directories created
- [ ] All files copied from `src/`
- [ ] Dependencies installed
- [ ] Hook registered in settings.json (if applicable)
- [ ] Verification commands run and passed

---

## Troubleshooting

### Pack Not Activating

1. Verify the skill directory exists:
   ```bash
   ls ~/.claude/skills/SkillName/
   ```

2. Check SKILL.md has the correct trigger format:
   ```yaml
   ---
   name: SkillName
   description: USE WHEN trigger words or phrases
   ---
   ```

3. Restart Claude Code to reload skills.

### Missing Dependencies

Check if the pack requires other packs first:

```bash
cat PAI/Packs/pack-name/README.md | grep -i depend
```

### Hook Not Firing

1. Verify hook is registered in settings:
   ```bash
   cat ~/.claude/settings.json | grep hooks
   ```

2. Check the hook file exists and is executable.

3. Restart Claude Code after hook changes.

---

## See Also

- [Packs Catalog](/users/reference/packs-catalog) — Complete pack listing
- [Bundles Reference](/users/reference/bundles) — Curated pack collections
- [Install PAI](/users/how-to/install-pai) — Initial PAI setup
