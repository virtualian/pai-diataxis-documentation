---
sidebar_position: 2
title: Install Packs
---
<!-- Source: ~/projects/pai/website/docs/users/how-to/install-packs.md -->

# How to Install Packs

Add new capabilities to PAI by installing packs.

## Prerequisites

- PAI CORE installed (see [Install PAI](./install-pai))

## Steps

### 1. Find Available Packs

View the [Packs Catalog](../reference/packs-catalog) or browse the repository:

```bash
ls Packs/
```

### 2. Run the Pack Installer

Each pack has an `INSTALL.md` with AI-guided installation:

```bash
# Navigate to the pack
cd Packs/pai-agents-skill

# Read the install instructions
cat INSTALL.md
```

Then tell Claude:

```
Install this pack following INSTALL.md
```

### 3. Verify Installation

Each pack includes a `VERIFY.md` with validation steps:

```
Verify the installation following VERIFY.md
```

## Available Packs

| Pack | Description |
|------|-------------|
| `pai-agents-skill` | Dynamic agent composition from traits |
| `pai-algorithm-skill` | THE ALGORITHM execution engine |
| `pai-browser-skill` | Debug-first browser automation |
| `pai-prompting-skill` | Meta-prompting and templates |
| `pai-art-skill` | Visual content generation |
| `pai-upgrades-skill` | Ecosystem monitoring |
| `pai-hook-system` | Advanced hook configuration |

## Bundles

Bundles install multiple packs at once:

```bash
cd Bundles/Official
cat README.md
```

The Official bundle includes all core skills for a complete PAI installation.
