---
sidebar_position: 5
title: Automate Browser Tasks
---
<!-- Source: ~/projects/pai/website/docs/users/how-to/automate-browser-tasks.md -->

# How to Automate Browser Tasks

Use the Browser skill for debug-first browser automation.

## Prerequisites

- `pai-browser-skill` pack installed
- Playwright browser installed

## Basic Usage

### Navigate with Diagnostics

```bash
bun run ~/.claude/skills/Browser/Tools/Browse.ts https://example.com
```

This single command:
- Navigates to the URL
- Takes a screenshot
- Captures console logs
- Records network requests
- Reports any errors

### Query Current State

```bash
# Console errors only
bun run Browse.ts errors

# All console output
bun run Browse.ts console

# Network activity
bun run Browse.ts network

# Failed requests (4xx, 5xx)
bun run Browse.ts failed
```

### Interact with Pages

```bash
# Click an element
bun run Browse.ts click "#submit-button"

# Fill a form field
bun run Browse.ts fill "#email" "user@example.com"

# Take a screenshot
bun run Browse.ts screenshot /tmp/current-state.png
```

## Debug-First Philosophy

The Browser skill captures diagnostics by default:

```
📸 Screenshot: /tmp/browse-1704567890.png

🔴 Console Errors (1):
   • Uncaught TypeError: Cannot read property 'map' of undefined

🌐 Failed Requests (1):
   • GET /api/users → 500 Internal Server Error

📊 Network: 23 requests | 847KB | avg 156ms
⚠️ Page: "My App" loaded with issues
```

## VERIFY Phase Integration

The Browser skill is mandatory for verifying web changes:

```bash
# After making changes, verify they work
bun run Browse.ts https://localhost:3000/changed-page

# View the screenshot
open /tmp/browse-*.png
```

## Tips

- Use CLI commands for simple tasks, not custom TypeScript
- Session stays alive between commands for fast subsequent operations
- 30-minute idle timeout auto-cleans zombie processes
- Always verify with actual browser rendering, not just tests
