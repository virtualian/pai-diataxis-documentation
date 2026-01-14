---
sidebar_position: 3
title: Hook API
---
<!-- Source: ~/projects/pai/website/docs/developers/reference/hook-api.md -->

# Hook API Reference

Available hooks and their signatures.

## Hook Types

### PreToolUse

Runs before a tool executes. Can block execution.

**Input:**
```typescript
interface PreToolUseInput {
  tool_name: string;
  tool_input: Record<string, unknown>;
}
```

**Behavior:**
- Exit 0: Allow tool execution
- Exit non-zero: Block tool execution
- Stdout: Injected into context

### PostToolUse

Runs after a tool executes. Can transform output.

**Input:**
```typescript
interface PostToolUseInput {
  tool_name: string;
  tool_input: Record<string, unknown>;
  tool_output: string;
}
```

**Behavior:**
- Exit 0: Success
- Stdout: Can transform or augment output

### Notification

Runs on Claude notifications.

**Input:**
```typescript
interface NotificationInput {
  message: string;
  type: 'info' | 'warning' | 'error';
}
```

### Stop

Runs when session ends.

**Input:**
```typescript
interface StopInput {
  reason: string;
  session_id: string;
}
```

## Configuration

Hooks are configured in `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "~/.claude/hooks/security.ts"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "*",
        "command": "~/.claude/hooks/logger.ts"
      }
    ]
  }
}
```

## Matcher Patterns

| Pattern | Matches |
|---------|---------|
| `"Bash"` | Only Bash tool |
| `"Read"` | Only Read tool |
| `"*"` | All tools |
| `["Bash", "Write"]` | Bash or Write |

## Hook Implementation

### Template

```typescript
#!/usr/bin/env bun

interface HookInput {
  tool_name: string;
  tool_input: Record<string, unknown>;
}

async function main() {
  const input: HookInput = JSON.parse(process.argv[2] || '{}');

  // Your logic here

  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

### Output Conventions

| Output | Effect |
|--------|--------|
| `console.log()` | Injected into context (PreToolUse) |
| `console.error()` | Shown as hook feedback |
| Exit 0 | Success/allow |
| Exit 1+ | Failure/block |

## Common Patterns

### Security Validation

```typescript
if (command.includes('rm -rf')) {
  console.error('[Security] Blocked dangerous command');
  process.exit(1);
}
```

### Context Injection

```typescript
const context = fs.readFileSync('~/.claude/skills/CORE/SKILL.md');
console.log(context);
process.exit(0);
```

### Logging

```typescript
const entry = { timestamp: Date.now(), tool: input.tool_name };
fs.appendFileSync('/tmp/audit.log', JSON.stringify(entry) + '\n');
```

### Voice Notification

```typescript
const voiceLine = extractVoiceLine(input.tool_output);
if (voiceLine) {
  await fetch('http://localhost:8888/notify', {
    method: 'POST',
    body: JSON.stringify({ message: voiceLine })
  });
}
```

## Error Handling

Hooks should handle errors gracefully:

```typescript
try {
  // Hook logic
} catch (err) {
  console.error(`Hook error: ${err.message}`);
  // Decide: block (exit 1) or allow (exit 0)
  process.exit(0); // Fail open
}
```

## Performance

- Hooks run synchronously
- Keep execution under 100ms
- Avoid network calls in hot paths
- Cache expensive computations
