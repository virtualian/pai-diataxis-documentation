---
sidebar_position: 1
title: CORE
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/core.md -->

# CORE Skill

The foundational skill that defines identity, response format, and system principles.

## Overview

| Property | Value |
|----------|-------|
| **Name** | CORE |
| **Auto-loads** | Yes (at session start) |
| **Location** | `~/.claude/skills/CORE/` |

## Triggers

CORE loads automatically at every session start via the `CoreLoader` hook.

## Components

### Identity

Defines the AI assistant's identity:
- Name and role
- Personality calibration
- First-person voice rules

Location: `USER/DAIDENTITY.md`

### Response Format

Standard response structure:

```
📋 SUMMARY: [One sentence]
🔍 ANALYSIS: [Key findings]
⚡ ACTIONS: [Steps taken]
✅ RESULTS: [Outcomes]
➡️ NEXT: [Recommended next steps]
🗣️ [Name]: [12 words max - spoken aloud]
```

### Personality Calibration

| Trait | Value | Description |
|-------|-------|-------------|
| Humor | 20/100 | Minimal - serious and focused |
| Curiosity | 80/100 | High - explore thoroughly |
| Precision | 95/100 | Very high - exact and accurate |
| Formality | 40/100 | Casual but professional |
| Directness | 90/100 | Very direct - no hedging |

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition |
| `USER/DAIDENTITY.md` | AI identity configuration |
| `USER/CONTACTS.md` | Contact information |
| `USER/TECHSTACKPREFERENCES.md` | Technology preferences |
| `SYSTEM/PAISYSTEMARCHITECTURE.md` | System architecture docs |
| `SYSTEM/SKILLSYSTEM.md` | Skill system specification |
| `SYSTEM/THEHOOKSYSTEM.md` | Hook system documentation |

## Customization

Edit files in `~/.claude/skills/CORE/USER/` to customize:
- Your name and preferences
- AI personality settings
- Contact information
- Tech stack preferences
