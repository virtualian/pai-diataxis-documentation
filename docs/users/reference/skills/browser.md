---
sidebar_position: 4
title: Browser
---
<!-- Source: ~/projects/pai/website/docs/users/reference/skills/browser.md -->

# Browser Skill

Debug-first browser automation with always-on visibility.

## Overview

| Property | Value |
|----------|-------|
| **Name** | Browser |
| **Pack** | `pai-browser-skill` |
| **Location** | `~/.claude/skills/Browser/` |

## Triggers

- "browser", "screenshot", "navigate"
- "web testing", "verify UI"
- "VERIFY phase", "debug web page"

## Philosophy

Traditional browser automation treats debugging as an afterthought. This skill flips that: **debugging is enabled from the start**.

Every page load captures:
- Console logs (errors, warnings, info)
- Network requests and responses
- Failed requests (4xx, 5xx)
- Page load status

## CLI Commands

### Primary Command

```bash
bun run Browse.ts <url>
```

Navigates and outputs full diagnostics.

### Query Commands

```bash
bun run Browse.ts errors      # Console errors only
bun run Browse.ts warnings    # Console warnings only
bun run Browse.ts console     # All console output
bun run Browse.ts network     # All network activity
bun run Browse.ts failed      # Failed requests (4xx, 5xx)
```

### Interaction Commands

```bash
bun run Browse.ts navigate <url>
bun run Browse.ts screenshot [path]
bun run Browse.ts click <selector>
bun run Browse.ts fill <selector> <value>
bun run Browse.ts type <selector> <text>
bun run Browse.ts eval "<javascript>"
```

### Session Management

```bash
bun run Browse.ts status      # Show session info
bun run Browse.ts restart     # Fresh session
bun run Browse.ts stop        # Stop session
```

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| Interact | Form fills, clicks | Multi-step interaction |
| Extract | Get page content | Scrape/extract data |
| VerifyPage | Complex verification | Full page validation |
| Screenshot | Custom screenshot | Screenshot with options |

## Session Architecture

- Auto-starts on first use
- Persists between commands
- 30-minute idle timeout
- State in `/tmp/browser-session.json`

## Output Example

```
📸 Screenshot: /tmp/browse-1704567890.png

🔴 Console Errors (1):
   • Uncaught TypeError: Cannot read property 'map' of undefined

🌐 Failed Requests (1):
   • GET /api/users → 500 Internal Server Error

📊 Network: 23 requests | 847KB | avg 156ms
⚠️ Page: "My App" loaded with issues
```
