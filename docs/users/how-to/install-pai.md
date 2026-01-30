---
sidebar_position: 1
title: Install PAI
---
<!-- Source: ~/projects/pai/INSTALL.md -->

# How to Install PAI

This guide walks you through installing PAI (Personal AI Infrastructure) on your machine. PAI supports three installation paths—choose based on your needs.

## Prerequisites

Before you begin, ensure you have:

- **[Bun](https://bun.sh)** runtime installed (`curl -fsSL https://bun.sh/install | bash`)
- **[Claude Code](https://claude.ai/claude-code)** CLI installed and configured
- **Git** for cloning the repository
- **macOS** (primary support) or **Linux**

## Choose Your Installation Path

```
┌─────────────────────────────────────────────────────────────────┐
│  Do you want a complete, working PAI system right now?          │
│                                                                 │
│     YES ──────────► Option 1: Full Release Install              │
│                     (Complete .claude/ directory, ~5 min)       │
│                                                                 │
│     NO, I want to customize or learn the system                 │
│         │                                                       │
│         ├──► Option 2: Bundle + Packs (Build it yourself)       │
│         │    (Skeleton structure, then install packs manually)  │
│         │                                                       │
│         └──► Option 3: Individual Packs (Cherry-pick)           │
│              (Install only specific capabilities you need)      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Option 1: Full Release Install (Recommended)

The fastest path to a working PAI system. You get a complete, pre-configured `.claude/` directory with all infrastructure packs already installed.

### Step 1: Clone the Repository

```bash
git clone https://github.com/danielmiessler/PAI.git
cd PAI/Releases/v2.4
```

### Step 2: Back Up Existing Configuration

If you have an existing Claude Code configuration:

```bash
[ -d ~/.claude ] && mv ~/.claude ~/.claude-backup-$(date +%Y%m%d)
```

### Step 3: Copy the PAI Installation

```bash
cp -r .claude ~/
```

### Step 4: Run the Configuration Wizard

```bash
cd ~/.claude && bun run PAIInstallWizard.ts
```

The wizard will ask for:
- Your name
- Your DA (Digital Assistant) name
- Your timezone
- Voice preferences (optional)

### Step 5: Restart Claude Code

Close and reopen Claude Code to activate the hooks.

### Step 6: Verify Installation

Start a new Claude Code session:

```bash
claude
```

You should see:
- The PAI banner with version information
- Hook initialization messages
- Your configured DA name in responses

---

## Option 2: Bundle + Manual Pack Installation

For users who want to understand the system as they build it.

:::warning
The Bundle wizard creates a **skeleton directory structure only**. You must then install each pack manually for a working system.
:::

### Step 1: Clone and Run the Bundle Wizard

```bash
git clone https://github.com/danielmiessler/PAI.git
cd PAI/Bundles/Official
bun run install.ts
```

### Step 2: Install Packs in Order

After the wizard completes, install packs in this sequence:

| Order | Pack | Description |
|-------|------|-------------|
| 1 | pai-hook-system | Event-driven automation foundation |
| 2 | pai-core-install | Identity, skills, memory system |
| 3 | pai-statusline | Terminal status display |
| 4+ | Any skill packs | Add capabilities as needed |

To install each pack, tell your DA:

```
Install the pack at PAI/Packs/pai-hook-system/
```

---

## Option 3: Individual Pack Installation

Install only the specific capabilities you need.

### Step 1: Browse Available Packs

See [Packs Catalog](/users/reference/packs-catalog) for the complete list.

### Step 2: Install a Pack

Give the pack directory to your DA:

```
Install this pack into my system. Use PAI_DIR="~/.claude"
and DA="YourDAName". Set up the hooks, save the code, and verify it works.
```

---

## Troubleshooting

### Hooks not loading

1. Verify hooks are registered in settings:
   ```bash
   cat ~/.claude/settings.json | grep hooks
   ```

2. Check that hook files exist:
   ```bash
   ls ~/.claude/hooks/
   ```

3. Restart Claude Code after any hook changes.

### "Command not found: bun"

Install the Bun runtime:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then restart your terminal.

### Permission errors

Ensure the skills directory is writable:

```bash
chmod -R u+w ~/.claude/skills/
```

### Skills not routing

1. Confirm `CORE/SKILL.md` exists:
   ```bash
   ls ~/.claude/skills/CORE/SKILL.md
   ```

2. Check the SessionStart hook is loading context.

---

## Next Steps

After installation:

1. **[Getting Started](/users/tutorials/getting-started)** — Learn the basics
2. **[Install Packs](/users/how-to/install-packs)** — Add more capabilities
3. **Configure Voice** — Enable spoken notifications *(guide coming soon)*
