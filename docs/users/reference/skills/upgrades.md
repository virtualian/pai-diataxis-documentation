---
sidebar_position: 7
title: Upgrades
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/upgrades.md -->

# Upgrades Skill

Monitor Anthropic ecosystem and AI development channels for updates.

## Overview

| Property | Value |
|----------|-------|
| **Name** | Upgrades |
| **Pack** | `pai-upgrades-skill` |
| **Location** | `~/.claude/skills/Upgrades/` |

## Triggers

- "check Anthropic", "new Claude features"
- "check YouTube", "new videos"
- "check for updates", "check upgrades"

## Anthropic Monitoring (30+ Sources)

### Blogs & News (4)
Main blog, Alignment, Research, Interpretability

### GitHub Repositories (21+)
claude-code, skills, MCP, SDKs, cookbooks

### Changelogs (5)
Claude Code CHANGELOG, releases, docs notes

### Documentation (6)
Claude docs, API docs, MCP docs, spec, registry

### Community (1)
Discord server

## YouTube Monitoring

Configured via Skill Customization Layer:
```
~/.claude/SKILLCUSTOMIZATIONS/Upgrades/youtube-channels.json
```

Features:
- New video detection via yt-dlp
- Transcript extraction
- State tracking (no duplicates)
- User-customizable channel list

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| Anthropic | "check Anthropic" | Check Anthropic sources |
| YouTube | "check YouTube" | Check YouTube channels |
| ReleaseNotesDeepDive | "deep dive" | Research each feature |
| All | "check updates" | Run both workflows |

## Tools

| Tool | Purpose |
|------|---------|
| `Anthropic.ts` | Check Anthropic sources |

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition |
| `sources.json` | Anthropic sources config |
| `youtube-channels.json` | Base YouTube channels |
| `state/last-check.json` | Anthropic state |
| `state/youtube-videos.json` | YouTube state |

## Usage Examples

### Full Check

```
Check for updates
```

### Anthropic Only

```
Any new Claude Code features?
```

### Deep Dive

```
Deep dive the latest release notes
```

This launches parallel research agents to investigate each feature and map to PAI opportunities.
