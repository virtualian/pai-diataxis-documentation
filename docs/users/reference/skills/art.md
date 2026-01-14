---
sidebar_position: 6
title: Art
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/art.md -->

# Art Skill

Visual content generation with Excalidraw hand-drawn aesthetic.

## Overview

| Property | Value |
|----------|-------|
| **Name** | Art |
| **Pack** | `pai-art-skill` |
| **Location** | `~/.claude/skills/Art/` |

## Triggers

- "diagram", "visualizations"
- "comics", "editorial illustrations"
- Visual content requests

## Aesthetic

**Excalidraw Hand-Drawn** - Clean, approachable technical illustrations:
- Slightly wobbly hand-drawn lines
- Simple shapes with organic imperfections
- Consistent hand-lettered typography
- Dark mode backgrounds with bright accents

## Color System

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0f` | Primary dark background |
| PAI Blue | `#4a90d9` | Key elements, primary accents |
| Electric Cyan | `#22d3ee` | Flows, connections |
| Accent Purple | `#8b5cf6` | Highlights, callouts |
| Text White | `#e5e7eb` | Primary text, labels |

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| TechnicalDiagrams | Architecture diagrams | System visualizations |
| Essay | Blog headers | Editorial illustrations |
| Comics | Sequential panels | Comic-style narratives |

## Tools

### Generate

```bash
bun run Generate.ts \
  --model nano-banana-pro \
  --prompt "[PROMPT]" \
  --size 2K \
  --aspect-ratio 16:9 \
  --output ~/Downloads/output.png
```

## Output Location

```
ALL GENERATED IMAGES GO TO ~/Downloads/ FIRST
Preview in Finder/Preview before final placement
Only copy to project directories after review
```

## Usage Examples

### Technical Diagram

```
Create a diagram showing the authentication flow
```

### Blog Header

```
Create a header for my post about AI agents
```

### Comic Strip

```
Create a comic showing the before/after of using AI
```

## Default Model

`nano-banana-pro` (Gemini 3 Pro)

API keys configured in: `~/.claude/.env`
