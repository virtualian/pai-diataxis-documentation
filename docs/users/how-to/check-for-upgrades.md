---
sidebar_position: 6
title: Check for Upgrades
---
<!-- Source: ~/projects/pai/website/docs/users/how-to/check-for-upgrades.md -->

# How to Check for Upgrades

Monitor the Anthropic ecosystem for updates that can improve PAI.

## Prerequisites

- `pai-upgrades-skill` pack installed

## Basic Usage

### Full Ecosystem Check

```
Check for updates
```

This runs both Anthropic and YouTube monitoring.

### Anthropic Only

```
Any new Claude Code features?
```

### YouTube Only

```
Any new videos from AI development channels?
```

### Deep Dive on Release Notes

```
Deep dive the latest release notes
```

This launches parallel research agents to investigate each feature.

## What Gets Monitored

### Anthropic Sources (30+)

- **Blogs** - Main blog, Alignment, Research, Interpretability
- **GitHub** - claude-code, skills, MCP, SDKs, cookbooks (21+ repos)
- **Changelogs** - Claude Code CHANGELOG, releases, docs notes
- **Documentation** - Claude docs, API docs, MCP docs, spec, registry
- **Community** - Discord server

### YouTube Channels

Configured via the Skill Customization Layer at:
```
~/.claude/SKILLCUSTOMIZATIONS/Upgrades/youtube-channels.json
```

## Output

The skill returns prioritized updates:

```
## Anthropic Updates

### High Priority
- Claude Code v1.2.0 released with new hook system

### Medium Priority
- New MCP server documentation added

## YouTube Updates

### New Videos
- "Building AI Agents with Claude" - Indy Dev Dan (transcript available)
```

## Tips

- Run weekly to stay current with ecosystem changes
- Use deep dive for major releases to understand implications
- Add your own YouTube channels via customization layer
