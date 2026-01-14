---
sidebar_position: 9
title: Packs Catalog
---
<!-- Source: ~/projects/pai/website/docs/users/reference/packs-catalog.md -->

# Packs Catalog

Available PAI packs for installation.

## Core Packs

### pai-core-install

**Required.** The foundation of PAI.

| Property | Value |
|----------|-------|
| Skills | CORE, CreateSkill |
| Includes | Memory system, hooks, identity |

```bash
cd Packs/pai-core-install
```

## Skill Packs

### pai-agents-skill

Dynamic agent composition from traits.

| Property | Value |
|----------|-------|
| Skills | Agents |
| Features | 28 traits, voice mapping, parallel orchestration |

### pai-algorithm-skill

Universal execution engine.

| Property | Value |
|----------|-------|
| Skills | THEALGORITHM |
| Features | 7 phases, ISC tracking, effort classification |

### pai-browser-skill

Debug-first browser automation.

| Property | Value |
|----------|-------|
| Skills | Browser |
| Features | Playwright, diagnostics, CLI tools |

### pai-prompting-skill

Meta-prompting and templates.

| Property | Value |
|----------|-------|
| Skills | Prompting |
| Features | Handlebars templates, prompt standards |

### pai-art-skill

Visual content generation.

| Property | Value |
|----------|-------|
| Skills | Art |
| Features | Excalidraw aesthetic, Gemini integration |

### pai-upgrades-skill

Ecosystem monitoring.

| Property | Value |
|----------|-------|
| Skills | Upgrades |
| Features | 30+ Anthropic sources, YouTube monitoring |

## Infrastructure Packs

### pai-hook-system

Advanced hook configuration.

| Property | Value |
|----------|-------|
| Provides | Hook templates, security hooks |

### pai-observability-server

Monitoring and observability.

| Property | Value |
|----------|-------|
| Provides | Metrics, logging, tracing |

## Bundles

### Official Bundle

All core skills in one installation.

```bash
cd Bundles/Official
```

Includes:
- pai-core-install
- pai-agents-skill
- pai-algorithm-skill
- pai-browser-skill
- pai-prompting-skill
- pai-art-skill
- pai-upgrades-skill
- pai-hook-system

## Installation

Each pack follows the same pattern:

1. Navigate to pack directory
2. Read INSTALL.md
3. Ask Claude to install following the instructions
4. Verify with VERIFY.md

```bash
cd Packs/[pack-name]
cat INSTALL.md
# Ask Claude: "Install this pack following INSTALL.md"
cat VERIFY.md
# Ask Claude: "Verify the installation following VERIFY.md"
```
