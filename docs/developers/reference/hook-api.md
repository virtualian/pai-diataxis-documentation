---
sidebar_position: 3
title: Hook API
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/THEHOOKSYSTEM.md -->

# Hook API Reference

Complete specification for Claude Code hooks.

## Configuration

### File Location

```
~/.claude/settings.json
```

### Structure

```json
{
  "hooks": {
    "EventName": [
      {
        "matcher": "pattern",
        "hooks": [
          {
            "type": "command",
            "command": "${PAI_DIR}/hooks/my-hook.ts"
          }
        ]
      }
    ]
  },
  "env": {
    "PAI_DIR": "$HOME/.claude"
  }
}
```

## Hook Events

### SessionStart

Runs when a Claude Code session begins.

**Payload:**
```typescript
interface SessionStartInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "SessionStart";
  cwd: string;
}
```

**Behavior:**
- `stdout` → Injected into session context
- Exit 0 → Success
- Exit non-zero → Logged, session continues

**Use Cases:**
- Load PAI context
- Initialize session state
- Check for updates

---

### SessionEnd

Runs when a session terminates.

**Payload:**
```typescript
interface SessionEndInput {
  conversation_id: string;
  timestamp: string;
  hook_event_name: "SessionEnd";
}
```

**Note:** Uses `conversation_id` instead of `session_id`.

**Use Cases:**
- Generate session summaries
- Save state
- Cleanup temporary files

---

### UserPromptSubmit

Runs when user submits a prompt.

**Payload:**
```typescript
interface UserPromptSubmitInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "UserPromptSubmit";
  prompt: string;
}
```

**Behavior:**
- `stdout` → Injected as `<system-reminder>`
- Runs before Claude processes the prompt

**Use Cases:**
- Update UI indicators
- Capture analytics
- Detect ratings/sentiment

---

### Stop

Runs when main agent completes a response.

**Payload:**
```typescript
interface StopInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "Stop";
}
```

**Use Cases:**
- Voice notifications
- Capture work summaries
- Update tab state

---

### SubagentStop

Runs when a subagent (Task tool) completes.

**Payload:**
```typescript
interface SubagentStopInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "SubagentStop";
}
```

**Use Cases:**
- Capture agent outputs
- Route to appropriate history category
- Track multi-agent workflows

---

### PreToolUse

Runs before a tool executes. **Can block execution.**

**Payload:**
```typescript
interface PreToolUseInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "PreToolUse";
  tool_name: string;
  tool_input: Record<string, unknown>;
}
```

**Behavior:**
- Exit 0 → Allow tool execution
- Exit non-zero → **Block tool execution**
- `stdout` → Injected into context

**Use Cases:**
- Security validation
- Command filtering
- Pre-processing

---

### PostToolUse

Runs after a tool executes.

**Payload:**
```typescript
interface PostToolUseInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "PostToolUse";
  tool_name: string;
  tool_input: Record<string, unknown>;
  tool_output: string;
  error?: string;
}
```

**Use Cases:**
- Audit logging
- Output transformation
- Error tracking

---

### PreCompact

Runs before context compaction (long conversations).

**Payload:**
```typescript
interface PreCompactInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: "PreCompact";
}
```

**Use Cases:**
- Preserve important context
- Log compaction events

---

## Matcher Patterns

The `matcher` field filters which events trigger a hook:

| Pattern | Matches |
|---------|---------|
| `"Bash"` | Only Bash tool |
| `"Read"` | Only Read tool |
| `"*"` | All tools |
| `""` (empty) | All events (same as `*`) |
| `["Bash", "Write"]` | Bash or Write tools |

**Example:**

```json
{
  "PreToolUse": [
    {
      "matcher": "Bash",
      "hooks": [{ "command": "security-check.ts" }]
    },
    {
      "matcher": "*",
      "hooks": [{ "command": "audit-log.ts" }]
    }
  ]
}
```

## Hook Implementation

### Template

```typescript
#!/usr/bin/env bun

interface HookInput {
  session_id: string;
  transcript_path: string;
  hook_event_name: string;
  [key: string]: unknown;
}

async function main() {
  try {
    const input = await Bun.stdin.text();
    const data: HookInput = JSON.parse(input);

    // Your logic here

  } catch (error) {
    console.error('[Hook] Error:', error);
  }

  process.exit(0);
}

main();
```

### Input/Output

| Channel | Purpose |
|---------|---------|
| `stdin` | Receives JSON payload |
| `stdout` | Injected into context (PreToolUse, SessionStart) |
| `stderr` | Logging (visible in debug logs) |
| Exit code | 0 = success, non-zero = block (PreToolUse only) |

### Exit Codes

| Code | PreToolUse | Other Hooks |
|------|------------|-------------|
| 0 | Allow execution | Success |
| Non-zero | **Block execution** | Logged as error |

## Environment Variables

Hooks access variables from `settings.json` `env` section:

```json
{
  "env": {
    "PAI_DIR": "$HOME/.claude",
    "VOICE_ID": "abc123",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "64000"
  }
}
```

Access in hooks:

```typescript
const paiDir = process.env.PAI_DIR;
const voiceId = process.env.VOICE_ID;
```

## Identity Module

Read identity from settings.json programmatically:

```typescript
// hooks/lib/identity.ts
import { readFileSync } from 'fs';

interface DAIdentity {
  name: string;
  fullName: string;
  displayName: string;
  voiceId: string;
  color: string;
}

interface Principal {
  name: string;
  pronunciation: string;
  timezone: string;
}

export function getIdentity(): DAIdentity {
  const settings = JSON.parse(
    readFileSync(`${process.env.HOME}/.claude/settings.json`, 'utf-8')
  );
  return settings.daidentity;
}

export function getPrincipal(): Principal {
  const settings = JSON.parse(
    readFileSync(`${process.env.HOME}/.claude/settings.json`, 'utf-8')
  );
  return settings.principal;
}

export function getDAName(): string {
  return getIdentity().name;
}

export function getVoiceId(): string {
  return getIdentity().voiceId;
}
```

## Transcript Format

Transcripts are JSONL files with one entry per line:

```typescript
interface TranscriptEntry {
  type: "user" | "assistant" | "tool_use" | "tool_result";
  timestamp: string;
  message?: {
    content: string;
  };
  tool_name?: string;
  tool_input?: unknown;
  tool_output?: unknown;
}
```

**Reading transcripts:**

```typescript
import { readFileSync } from 'fs';

function readTranscript(path: string): TranscriptEntry[] {
  const content = readFileSync(path, 'utf-8');
  return content
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line));
}

function getLastAssistantMessage(entries: TranscriptEntry[]): string | null {
  for (let i = entries.length - 1; i >= 0; i--) {
    if (entries[i].type === 'assistant') {
      return entries[i].message?.content || null;
    }
  }
  return null;
}
```

**Important:** Transcripts use `type: "user"` not `type: "human"`.

## Execution Order

Hooks in the same event run **sequentially** in order defined:

```json
{
  "Stop": [
    {
      "hooks": [
        { "command": "first-hook.ts" },
        { "command": "second-hook.ts" }
      ]
    }
  ]
}
```

**Note:** If first hook hangs, second won't run.

## Performance Requirements

| Requirement | Target |
|-------------|--------|
| Execution time | < 500ms |
| Blocking operations | Avoid or use background processes |
| Network calls | Use timeouts |
| Exit | Always reach `process.exit(0)` |

## Error Handling

```typescript
// Recommended pattern
async function main() {
  // Global timeout
  setTimeout(() => {
    console.error('[Hook] Timeout');
    process.exit(0);
  }, 5000);

  try {
    const input = await Bun.stdin.text();
    const data = JSON.parse(input);

    // Hook logic

  } catch (error) {
    console.error('[Hook] Error:', error);
    // Log but don't propagate
  }

  process.exit(0);  // Always exit cleanly
}
```

## Common Patterns

### Voice Notification

```typescript
const voiceLine = response.match(/🗣️\s*\w+:\s*(.+)$/m);
if (voiceLine) {
  await fetch('http://localhost:8888/notify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: voiceLine[1].trim(),
      voice_id: getVoiceId()
    })
  }).catch(() => {});  // Fail silently
}
```

### Security Validation

```typescript
const dangerous = ['rm -rf /', 'sudo rm', 'mkfs'];
const command = data.tool_input.command as string;

for (const pattern of dangerous) {
  if (command.includes(pattern)) {
    console.error(`[Security] BLOCKED: ${pattern}`);
    process.exit(1);  // Block the command
  }
}
```

### Background Processing

```typescript
import { spawn } from 'bun';

// Spawn background process for slow work
spawn(['bun', 'slow-task.ts', sessionId], {
  stdout: 'ignore',
  stderr: 'ignore',
  stdin: 'ignore'
});

// Exit immediately
process.exit(0);
```

### Stdin with Timeout

```typescript
const timeout = new Promise<string>(resolve =>
  setTimeout(() => resolve(''), 500)
);
const read = Bun.stdin.text();

const input = await Promise.race([read, timeout]);
if (!input) {
  process.exit(0);
}
```

## Debugging

### Test Directly

```bash
echo '{"session_id":"test","transcript_path":"/tmp/test.jsonl","hook_event_name":"Stop"}' \
  | bun ~/.claude/hooks/my-hook.ts
```

### Validate settings.json

```bash
jq . ~/.claude/settings.json
```

### Check Permissions

```bash
ls -la ~/.claude/hooks/
chmod +x ~/.claude/hooks/*.ts
```

## Quick Reference

```
HOOK LIFECYCLE:
1. Event occurs
2. Claude Code writes JSON to hook's stdin
3. Hook script executes
4. Hook reads stdin (with timeout)
5. Hook performs actions
6. Hook exits 0 (always succeed)
7. Claude Code continues

KEY FILES:
~/.claude/settings.json          Hook configuration
~/.claude/hooks/                  Hook scripts
~/.claude/hooks/lib/              Shared libraries

OUTPUT CONVENTIONS:
console.log()   → Injected into context (SessionStart, PreToolUse)
console.error() → Debug logs (visible in hook debugging)
exit 0          → Success/allow
exit 1+         → Block (PreToolUse only)

EVENT PAYLOADS:
All events:     session_id, transcript_path, hook_event_name
UserPromptSubmit: + prompt
PreToolUse:     + tool_name, tool_input
PostToolUse:    + tool_name, tool_input, tool_output, error?
SessionEnd:     conversation_id (not session_id), timestamp
```
