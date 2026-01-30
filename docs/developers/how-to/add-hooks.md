---
sidebar_position: 3
title: Add Hooks
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/THEHOOKSYSTEM.md -->

# How to Add Hooks

Hooks are event-driven scripts that run automatically during Claude Code sessions. This guide covers creating and registering custom hooks.

## Prerequisites

- Claude Code installed
- TypeScript/Bun knowledge
- Understanding of [Hook API](/developers/reference/hook-api)

## Available Hook Events

| Event | When | Common Use Cases |
|-------|------|------------------|
| `SessionStart` | Session begins | Load context, initialize state |
| `SessionEnd` | Session terminates | Save summaries, cleanup |
| `UserPromptSubmit` | User sends prompt | Update UI, capture analytics |
| `Stop` | Main agent completes | Voice notification, capture work |
| `SubagentStop` | Subagent completes | Route agent output |
| `PreToolUse` | Before tool executes | Security validation |
| `PostToolUse` | After tool executes | Logging, transformation |
| `PreCompact` | Before context compaction | Preserve important context |

## Step 1: Create Hook Script

Create a TypeScript file in your hooks directory:

```typescript
#!/usr/bin/env bun
// ~/.claude/hooks/my-custom-hook.ts

interface HookInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: string;
  // Event-specific fields
  prompt?: string;           // UserPromptSubmit
  tool_name?: string;        // PreToolUse, PostToolUse
  tool_input?: any;          // PreToolUse, PostToolUse
  tool_output?: any;         // PostToolUse
}

async function main() {
  try {
    // Read input from stdin
    const input = await Bun.stdin.text();
    const data: HookInput = JSON.parse(input);

    console.error(`[MyHook] Processing ${data.hook_event_name}`);

    // Your hook logic here
    switch (data.hook_event_name) {
      case 'Stop':
        await handleStop(data);
        break;
      case 'UserPromptSubmit':
        await handlePrompt(data);
        break;
    }

  } catch (error) {
    // Log but don't fail - hooks should never crash Claude
    console.error('[MyHook] Error:', error);
  }

  // Always exit 0 - non-zero blocks the operation
  process.exit(0);
}

async function handleStop(data: HookInput) {
  // Read the transcript
  const fs = require('fs');
  if (fs.existsSync(data.transcript_path)) {
    const transcript = fs.readFileSync(data.transcript_path, 'utf-8');
    // Process transcript...
  }
}

async function handlePrompt(data: HookInput) {
  if (data.prompt) {
    console.error(`[MyHook] User said: ${data.prompt.substring(0, 50)}...`);
  }
}

main();
```

## Step 2: Make Executable

```bash
chmod +x ~/.claude/hooks/my-custom-hook.ts
```

## Step 3: Register in settings.json

Add your hook to `~/.claude/settings.json`:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "${PAI_DIR}/hooks/my-custom-hook.ts"
          }
        ]
      }
    ]
  }
}
```

**For tool-specific hooks**, use a matcher:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "${PAI_DIR}/hooks/security-validator.ts"
          }
        ]
      }
    ]
  }
}
```

## Step 4: Test the Hook

### Direct Testing

```bash
echo '{"session_id":"test","transcript_path":"/tmp/test.jsonl","hook_event_name":"Stop"}' \
  | bun ~/.claude/hooks/my-custom-hook.ts
```

### Live Testing

1. Restart Claude Code to load new hooks
2. Trigger the event (e.g., complete a response for Stop)
3. Check stderr output for your log messages

## Common Hook Patterns

### Security Validation (PreToolUse)

Block dangerous commands before execution:

```typescript
#!/usr/bin/env bun
// security-validator.ts

interface PreToolInput {
  tool_name: string;
  tool_input: {
    command?: string;
  };
}

async function main() {
  const input = await Bun.stdin.text();
  const data: PreToolInput = JSON.parse(input);

  if (data.tool_name === 'Bash' && data.tool_input.command) {
    const cmd = data.tool_input.command;

    // Block dangerous patterns
    const dangerous = [
      'rm -rf /',
      'sudo rm',
      'mkfs',
      '> /dev/sda',
      'dd if=/dev/zero'
    ];

    for (const pattern of dangerous) {
      if (cmd.includes(pattern)) {
        console.error(`[Security] BLOCKED: ${pattern}`);
        process.exit(1);  // Non-zero blocks the tool
      }
    }
  }

  process.exit(0);  // Allow execution
}

main();
```

### Voice Notification (Stop)

Extract completion message and send to voice server:

```typescript
#!/usr/bin/env bun
// voice-notify.ts

import { readFileSync } from 'fs';

interface StopInput {
  transcript_path: string;
}

async function main() {
  const input = await Bun.stdin.text();
  const data: StopInput = JSON.parse(input);

  // Read transcript
  const transcript = readFileSync(data.transcript_path, 'utf-8');
  const lines = transcript.split('\n').filter(Boolean);

  // Find last assistant message
  for (let i = lines.length - 1; i >= 0; i--) {
    try {
      const entry = JSON.parse(lines[i]);
      if (entry.type === 'assistant') {
        // Extract voice line: 🗣️ Name: message
        const voiceMatch = entry.message?.content?.match(/🗣️\s*\w+:\s*(.+)$/m);
        if (voiceMatch) {
          await sendVoice(voiceMatch[1].trim());
        }
        break;
      }
    } catch {}
  }

  process.exit(0);
}

async function sendVoice(message: string) {
  try {
    await fetch('http://localhost:8888/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        voice_id: process.env.VOICE_ID || 'default'
      })
    });
  } catch {
    // Voice server may not be running - fail silently
  }
}

main();
```

### Context Loading (SessionStart)

Inject context at session start:

```typescript
#!/usr/bin/env bun
// load-context.ts

import { readFileSync, existsSync } from 'fs';

async function main() {
  const contextPath = `${process.env.PAI_DIR}/skills/CORE/SKILL.md`;

  if (existsSync(contextPath)) {
    const context = readFileSync(contextPath, 'utf-8');
    // Output goes into session context
    console.log(`<system-reminder>\n${context}\n</system-reminder>`);
  }

  process.exit(0);
}

main();
```

### Audit Logging (PostToolUse)

Log all tool executions:

```typescript
#!/usr/bin/env bun
// audit-logger.ts

import { appendFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

interface PostToolInput {
  session_id: string;
  tool_name: string;
  tool_input: any;
  tool_output: any;
}

async function main() {
  const input = await Bun.stdin.text();
  const data: PostToolInput = JSON.parse(input);

  const logEntry = {
    timestamp: new Date().toISOString(),
    session: data.session_id,
    tool: data.tool_name,
    input: data.tool_input,
    output_length: JSON.stringify(data.tool_output).length
  };

  const logPath = `${process.env.PAI_DIR}/logs/tool-audit.jsonl`;
  mkdirSync(dirname(logPath), { recursive: true });
  appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

  process.exit(0);
}

main();
```

### Background Processing

For slow operations, spawn a background process:

```typescript
#!/usr/bin/env bun
// async-processor.ts

import { spawn } from 'bun';

async function main() {
  const input = await Bun.stdin.text();
  const data = JSON.parse(input);

  // Quick synchronous work
  console.error('[Hook] Starting background process...');

  // Spawn background process for slow work
  spawn(['bun', `${process.env.PAI_DIR}/hooks/slow-task.ts`, data.session_id], {
    stdout: 'ignore',
    stderr: 'ignore',
    stdin: 'ignore'
  });

  // Exit immediately - don't wait for background work
  process.exit(0);
}

main();
```

## Best Practices

### 1. Fast Execution

Hooks run synchronously. Target < 500ms execution time.

```typescript
// BAD: Blocking network call
const response = await fetch(url);  // May take seconds

// GOOD: Spawn background process
spawn(['bun', 'background-task.ts']);
process.exit(0);
```

### 2. Graceful Failure

Never crash - log and continue:

```typescript
try {
  await riskyOperation();
} catch (error) {
  console.error('[Hook] Error:', error);
  // Continue or exit 0 - don't propagate
}
process.exit(0);
```

### 3. Timeout Protection

Add timeouts to prevent hangs:

```typescript
// Global timeout
setTimeout(() => {
  console.error('[Hook] Timeout - exiting');
  process.exit(0);
}, 5000);

// Per-operation timeout
const controller = new AbortController();
setTimeout(() => controller.abort(), 2000);

await fetch(url, { signal: controller.signal });
```

### 4. Stdin with Timeout

Read stdin with a timeout in case data isn't sent:

```typescript
const timeout = new Promise<void>(resolve => setTimeout(resolve, 500));
const read = Bun.stdin.text();

const input = await Promise.race([read, timeout]);
if (!input) {
  process.exit(0);  // No input, exit gracefully
}
```

### 5. Use stderr for Logging

stdout may be captured as context; use stderr for logs:

```typescript
// BAD: Goes into context
console.log('Debug message');

// GOOD: Visible in hook logs
console.error('[MyHook] Debug message');
```

## Configuration

### Environment Variables

Hooks have access to settings.json `env` section:

```json
{
  "env": {
    "PAI_DIR": "$HOME/.claude",
    "VOICE_ID": "abc123"
  }
}
```

Access in hooks:
```typescript
const paiDir = process.env.PAI_DIR;
const voiceId = process.env.VOICE_ID;
```

### Identity Configuration

Read identity from settings.json:

```typescript
import { readFileSync } from 'fs';

function getIdentity() {
  const settings = JSON.parse(
    readFileSync(`${process.env.HOME}/.claude/settings.json`, 'utf-8')
  );
  return settings.daidentity;  // { name, voiceId, color }
}
```

## Troubleshooting

### Hook Not Running

1. Is script executable? `chmod +x hook.ts`
2. Is path correct in settings.json?
3. Is JSON valid? `jq . ~/.claude/settings.json`
4. Did you restart Claude Code?

### Hook Hangs

1. Add timeout protection
2. Check for blocking operations
3. Ensure `process.exit(0)` is always reached
4. Use background processes for slow work

### Voice Not Working

1. Is voice server running? `curl http://localhost:8888/health`
2. Is voice_id correct?
3. Check network connectivity

## Next Steps

- See [Hook API Reference](/developers/reference/hook-api) for full specification
- Check existing hooks in `~/.claude/hooks/` for patterns
- Review the [Memory System](/developers/reference/memory-system) for persistent state
