---
sidebar_position: 3
title: Add Hooks
---
<!-- Source: ~/projects/pai/website/docs/developers/how-to/add-hooks.md -->

# How to Add Hooks

Integrate custom behavior into Claude Code events.

## Prerequisites

- Understanding of Claude Code's hook system
- TypeScript/JavaScript knowledge

## Steps

### 1. Understand Available Hooks

Claude Code provides hooks for various events:

| Hook | When | Use Case |
|------|------|----------|
| `PreToolUse` | Before tool execution | Validation, security |
| `PostToolUse` | After tool execution | Logging, transformation |
| `Notification` | On notifications | Voice output, alerts |
| `Stop` | Session end | Cleanup, persistence |

### 2. Create Hook File

```typescript
// ~/.claude/hooks/my-hook.ts

interface HookInput {
  tool_name: string;
  tool_input: Record<string, unknown>;
}

const input: HookInput = JSON.parse(process.argv[2] || '{}');

// Your hook logic
if (input.tool_name === 'Bash') {
  // Validate bash commands
  const command = input.tool_input.command as string;
  if (command.includes('rm -rf /')) {
    console.error('Blocked dangerous command');
    process.exit(1);
  }
}

// Success - allow the operation
process.exit(0);
```

### 3. Register in settings.json

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "~/.claude/hooks/my-hook.ts"
      }
    ]
  }
}
```

### 4. Test the Hook

Run a Claude Code session and trigger the hook:

```
Run: echo "test"
```

Check that your hook executes.

## Hook Patterns

### Security Validation

```typescript
// Block dangerous operations
if (command.includes('sudo') || command.includes('rm -rf')) {
  console.error('[Security] Blocked dangerous command');
  process.exit(1);
}
```

### Logging

```typescript
// Log all tool usage
const log = {
  timestamp: new Date().toISOString(),
  tool: input.tool_name,
  input: input.tool_input
};
fs.appendFileSync('/tmp/claude-audit.log', JSON.stringify(log) + '\n');
```

### Voice Notification

```typescript
// Extract voice line and send to voice server
const response = input.response as string;
const voiceMatch = response.match(/🗣️.*?:(.*?)$/m);
if (voiceMatch) {
  fetch('http://localhost:8888/notify', {
    method: 'POST',
    body: JSON.stringify({ message: voiceMatch[1].trim() })
  });
}
```

### Context Loading

```typescript
// Load context at session start
const context = fs.readFileSync('~/.claude/skills/CORE/SKILL.md', 'utf-8');
console.log(context); // Injected into session
```

## Best Practices

1. **Exit 0 for success** - Non-zero exits block the operation
2. **Be fast** - Hooks run synchronously
3. **Handle errors** - Don't crash on malformed input
4. **Log sparingly** - Avoid stdout noise that confuses Claude
5. **Use stderr for messages** - `console.error()` for hook feedback
