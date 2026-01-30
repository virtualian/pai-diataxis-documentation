---
sidebar_position: 12
title: System
---
<!-- Source: ~/projects/pai/Packs/pai-system-skill/src/skills/System/SKILL.md -->

# System Skill

System maintenance with four core operations: integrity checks, session documentation, catch-up documentation, and git push. Plus security scanning workflows.

## Triggers

The System skill activates when you say:
- "integrity check", "audit system", "system health"
- "document session", "document this session", "log session"
- "document recent", "catch up docs", "what's undocumented"
- "git push", "commit and push"
- "check for secrets", "security scan", "privacy check"

## Core Operations (The Four)

### 1. Integrity Check
**Trigger:** "integrity check", "audit system", "check references"

Find and fix broken references across the PAI system.

```
Run an integrity check on my PAI installation
```

**Actions:**
- Validates all file references exist
- Checks hook registrations
- Verifies skill structure
- Reports and optionally fixes issues

### 2. Document Session
**Trigger:** "document session", "document today", "log session"

Document the current session's work from the transcript.

```
Document this session
```

**Actions:**
- Extracts key decisions and changes from session
- Updates relevant documentation
- Creates changelog entries

### 3. Document Recent
**Trigger:** "document recent", "catch up docs", "what's undocumented"

Catch-up documentation for changes since the last documented update.

```
Document recent - what have I changed that's not documented?
```

**Actions:**
- Identifies undocumented changes
- Generates documentation updates
- Fills gaps in changelog

### 4. Git Push
**Trigger:** "git push", "commit and push", "push changes"

Git commit and push to the PAI repository.

```
Git push with message "Updated research skill workflows"
```

**Actions:**
- Stages changes
- Creates commit with message
- Pushes to remote

## Composition Rules

The four operations can be composed:

```
Integrity Check → Document Session → Git Push
```

```
Document Recent → Git Push
```

## Security Workflows

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| **SecretScanning** | Find exposed credentials | "check for secrets", "scan for credentials" |
| **CrossRepoValidation** | Check for leaks between repos | "cross-repo validation" |
| **PrivacyCheck** | Find sensitive data exposure | "privacy check", "check for sensitive data" |

### Secret Scanning
```
Check for secrets in my PAI installation
```

Scans for:
- API keys
- Passwords
- Tokens
- Private keys
- Other credentials

### Privacy Check
```
Privacy check - am I leaking any personal data?
```

Scans for:
- Personal identifiers
- Contact information
- Financial data
- Health information

## Utility Workflows

### Work Context Recall
**Trigger:** "we just worked on", "what did we do with", "remember when we"

Recall past work context from session history.

```
Didn't we already work on the voice system last week?
```

## Examples

**Full maintenance cycle:**
```
1. Integrity check
2. Fix any issues found
3. Document session
4. Git push
```

**Security audit:**
```
1. Check for secrets
2. Privacy check
3. Cross-repo validation
```

## Integration

### Works With
- **Research** — Document research findings
- **MEMORY** — Accesses session history for documentation

### Visibility
System skill runs in foreground with full output visibility:
- Progress indicators
- Voice notifications
- Detailed logging

## Notes

- For public PAI integrity ("check PAI integrity"), use PAI skill instead
- Integrity checks run automatically on major updates
- Security scans should be run before any git push
- Documentation is tied to MEMORY system for learning
