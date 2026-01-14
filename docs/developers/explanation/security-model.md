---
sidebar_position: 4
title: Security Model
---
<!-- Source: ~/projects/pai/website/docs/developers/explanation/security-model.md -->

# Security Model

Security boundaries and protections.

## Threat Model

### What PAI Protects Against

1. **Dangerous commands** - Destructive shell operations
2. **Data exfiltration** - Unauthorized data access
3. **Prompt injection** - Malicious instructions in data
4. **Privilege escalation** - Unauthorized capability access

### What PAI Does NOT Protect Against

1. **Physical access** - Local machine compromise
2. **Malicious users** - Intentional self-harm
3. **Claude vulnerabilities** - Upstream model issues

## Defense Layers

### Layer 1: Hook Validation

Security hooks validate operations before execution:

```typescript
// PreToolUse hook
if (command.includes('rm -rf /')) {
  console.error('[Security] Blocked catastrophic deletion');
  process.exit(1);
}
```

### Layer 2: Effort Gating

Dangerous capabilities require higher effort levels:

| Capability | Minimum Effort |
|------------|----------------|
| Basic tools | TRIVIAL |
| Research agents | STANDARD |
| System changes | THOROUGH |
| Full access | DETERMINED |

### Layer 3: Agent Isolation

Spawned agents have limited context:

- Agents don't share full session state
- Each agent gets only needed context
- Results are validated before integration

### Layer 4: Verification

Different agent verifies work:

```typescript
// Skeptical verifier with adversarial trait
await Task({
  traits: ["skeptical", "meticulous", "adversarial"],
  prompt: "Find problems with this implementation"
});
```

## Security Hooks

### Command Blocking

```typescript
const BLOCKED_PATTERNS = [
  /rm\s+-rf\s+\//,
  /sudo\s+/,
  /chmod\s+777/,
  /curl.*\|\s*sh/,
];

if (BLOCKED_PATTERNS.some(p => p.test(command))) {
  process.exit(1);
}
```

### Path Validation

```typescript
const PROTECTED_PATHS = [
  '/etc/',
  '/usr/',
  '~/.ssh/',
];

if (PROTECTED_PATHS.some(p => path.startsWith(p))) {
  process.exit(1);
}
```

### Secret Detection

```typescript
const SECRET_PATTERNS = [
  /password\s*[=:]/i,
  /api[_-]?key\s*[=:]/i,
  /secret\s*[=:]/i,
];
```

## Best Practices

### For Users

1. **Review hook output** - Check what's being blocked
2. **Audit commands** - Review before allowing blocked operations
3. **Limit permissions** - Run with minimal necessary access
4. **Update regularly** - Keep security hooks current

### For Developers

1. **Fail secure** - When in doubt, block
2. **Log everything** - Audit trail for security events
3. **Validate inputs** - Never trust external data
4. **Least privilege** - Request minimum needed access

## Incident Response

### If Something Goes Wrong

1. **Stop the session** - Ctrl+C or `/stop`
2. **Review logs** - Check `/tmp/claude-audit.log`
3. **Assess damage** - What was accessed/modified?
4. **Remediate** - Restore from backup if needed
5. **Update hooks** - Prevent recurrence

### Reporting Issues

Report security issues to the PAI repository:
- Use private disclosure if sensitive
- Include reproduction steps
- Provide hook/log context
