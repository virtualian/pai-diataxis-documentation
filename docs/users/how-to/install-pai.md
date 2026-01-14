---
sidebar_position: 1
title: Install PAI
---
<!-- Source: ~/projects/pai/website/docs/users/how-to/install-pai.md -->

# How to Install PAI

Install PAI (Personal AI Infrastructure) on your machine.

## Prerequisites

- [Claude Code](https://claude.ai/claude-code) CLI installed
- macOS (primary support) or Linux
- Node.js 18+ and npm
- Git

## Steps

### 1. Clone the PAI Repository

```bash
git clone https://github.com/virtualian/pai.git
cd pai
```

### 2. Run the Installer

```bash
./install.sh
```

The installer will:
- Create the `~/.claude/skills/` directory structure
- Install the CORE skill (required)
- Set up hooks for session management
- Configure environment variables

### 3. Verify Installation

Start a new Claude Code session:

```bash
claude
```

You should see the PAI banner and session initialization.

### 4. Install Additional Packs (Optional)

See [Install Packs](./install-packs) for adding more capabilities.

## Troubleshooting

### "Command not found: claude"

Ensure Claude Code is installed and in your PATH:

```bash
which claude
```

### Hooks not loading

Check that `~/.claude/settings.json` includes the hooks configuration:

```bash
cat ~/.claude/settings.json | grep hooks
```

### Permission errors

Ensure the skills directory is writable:

```bash
chmod -R u+w ~/.claude/skills/
```
