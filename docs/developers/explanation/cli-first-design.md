---
sidebar_position: 2
title: CLI-First Design
---
<!-- Source: ~/projects/pai/website/docs/developers/explanation/cli-first-design.md -->

# CLI-First Design

Why PAI uses CLI tools instead of APIs.

## The Problem

Traditional AI tool integration uses structured APIs:

```json
{
  "name": "browser_navigate",
  "parameters": {
    "url": { "type": "string" },
    "wait_for": { "type": "string" }
  }
}
```

This approach has costs:
- **Token overhead** - Schema included in every context
- **Complexity** - More parameters = more tokens
- **Rigidity** - Hard to extend without changing schema

## The CLI Solution

PAI uses TypeScript CLI tools:

```bash
bun run Browse.ts https://example.com
```

Benefits:
- **Zero schema overhead** - No JSON schema in context
- **Direct execution** - Run the same command in shell
- **Natural extension** - Add flags without changing interfaces

## Comparison

### API Approach

```typescript
// Tool definition (tokens in context)
{
  name: "browser_screenshot",
  parameters: {
    path: { type: "string", description: "..." },
    fullPage: { type: "boolean", description: "..." },
    element: { type: "string", description: "..." }
  }
}

// Invocation
await browser.screenshot({
  path: "/tmp/shot.png",
  fullPage: true
});
```

### CLI Approach

```bash
# No schema overhead
bun run Browse.ts screenshot /tmp/shot.png --full-page
```

## Token Savings

| Approach | Tokens |
|----------|--------|
| Playwright MCP | ~13,700 |
| CLI tool | ~0 |
| **Savings** | **99%+** |

## When to Use Each

### Use CLI When

- Tool is self-contained
- Parameters are simple
- Human might run it directly
- Token efficiency matters

### Use API When

- Complex state management needed
- Bidirectional communication required
- Type safety is critical
- Integration with typed systems

## Implementation Pattern

### CLI Tool Template

```typescript
#!/usr/bin/env bun

// Parse args
const args = process.argv.slice(2);
const command = args[0];

// Route command
switch (command) {
  case 'navigate':
    await navigate(args[1]);
    break;
  case 'screenshot':
    await screenshot(args[1]);
    break;
  default:
    showHelp();
}
```

### Invocation from Claude

```bash
bun run ~/.claude/skills/Browser/Tools/Browse.ts https://example.com
```

## Deterministic Code First

The CLI-first pattern extends to a broader principle:

> Prompts wrap code, not the other way around.

Business logic lives in TypeScript where it can be:
- **Tested** - Unit tests, integration tests
- **Versioned** - Git history, clear diffs
- **Debugged** - Standard debugging tools
- **Shared** - Import/export between tools

The prompt's job is to invoke the code correctly, not implement the logic.
