---
sidebar_position: 5
title: Memory System
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/MEMORYSYSTEM.md -->

# Memory System Reference

Technical specification for PAI's persistent memory architecture.

## Overview

The memory system provides persistence across sessions, enabling:
- Work tracking and session continuity
- Learning capture and retrieval
- Research organization
- Signal detection and analytics

## Directory Structure

```
~/.claude/MEMORY/
├── README.md               # Memory system documentation
├── WORK/                   # Session work tracking
│   └── {date}_{description}/
│       ├── README.md       # Work item details
│       └── artifacts/      # Generated files
├── LEARNING/               # Captured insights
│   ├── SYSTEM/             # Tooling, infrastructure learnings
│   │   └── YYYY-MM/
│   ├── ALGORITHM/          # Task execution learnings
│   │   └── YYYY-MM/
│   └── SIGNALS/            # Pattern recognition
│       └── ratings.jsonl
├── STATE/                  # Runtime state
│   ├── current-work.json   # Active work item
│   ├── agent-sessions.json # Session→Agent mapping
│   └── progress/           # Work item progress
└── RAW/                    # Event logs
    └── YYYY-MM/
        └── YYYY-MM-DD_all-events.jsonl
```

## Memory Types

### WORK/

Primary work tracking with session artifacts.

```
WORK/{date}_{description}/
├── README.md           # Work item metadata
├── ISC.md              # Ideal State Criteria
├── transcript.md       # Session transcript
└── artifacts/          # Generated files
```

**Work item README.md:**

```markdown
# {Description}

**Started:** {timestamp}
**Status:** IN_PROGRESS | COMPLETED
**Session:** {session_id}

## Summary

{What was accomplished}

## Files Changed

- `path/to/file.ts` - {description}

## Next Steps

- [ ] Remaining task 1
- [ ] Remaining task 2
```

**State tracking:**

```typescript
// STATE/current-work.json
{
  "work_dir": "2026-01-15_implement-dark-mode",
  "started": "2026-01-15T10:30:00Z",
  "session_id": "abc123",
  "description": "Implement dark mode toggle"
}
```

### LEARNING/

Long-term insights organized by category.

```
LEARNING/
├── SYSTEM/             # Infrastructure, tooling
│   └── 2026-01/
│       └── 2026-01-15_hook-timeout-fix.md
├── ALGORITHM/          # Task execution patterns
│   └── 2026-01/
│       └── 2026-01-15_isc-refinement.md
└── SIGNALS/            # Analytics
    └── ratings.jsonl
```

**Learning categories:**

| Category | What It Captures |
|----------|------------------|
| `SYSTEM` | Tooling, hooks, infrastructure, debugging |
| `ALGORITHM` | ISC patterns, execution strategies, task approaches |
| `SIGNALS` | User ratings, sentiment, pattern detection |

**Learning file format:**

```markdown
# {Title}

**Date:** {timestamp}
**Category:** SYSTEM | ALGORITHM
**Session:** {session_id}

## Context

{What was happening}

## Problem

{What went wrong or was discovered}

## Solution

{How it was resolved}

## Takeaway

{Key insight for future reference}
```

**Signals format (JSONL):**

```json
{"timestamp": "2026-01-15T10:30:00Z", "rating": 8, "source": "explicit", "session_id": "abc123", "comment": "Good work"}
{"timestamp": "2026-01-15T11:00:00Z", "rating": 2, "source": "implicit", "confidence": 0.85, "context": "Frustration detected"}
```

### STATE/

Runtime state for session continuity.

```
STATE/
├── current-work.json       # Active work item pointer
├── agent-sessions.json     # Session→Agent type mapping
└── progress/               # Work item progress files
    └── {work-dir}.json
```

**current-work.json:**

```json
{
  "work_dir": "2026-01-15_implement-feature",
  "started": "2026-01-15T10:30:00Z",
  "session_id": "abc123",
  "description": "Implement new feature"
}
```

**agent-sessions.json:**

```json
{
  "session-abc123": "engineer",
  "session-def456": "researcher",
  "session-ghi789": "pentester"
}
```

### RAW/

Complete event logs in JSONL format.

```
RAW/
└── YYYY-MM/
    └── YYYY-MM-DD_all-events.jsonl
```

**Event format:**

```json
{
  "timestamp": "2026-01-15T10:30:00Z",
  "event_type": "Stop",
  "session_id": "abc123",
  "tool_name": null,
  "payload": { ... }
}
```

## API Operations

### Writing to Memory

```typescript
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const MEMORY_DIR = `${process.env.PAI_DIR}/MEMORY`;

// Write learning
function writeLearning(category: 'SYSTEM' | 'ALGORITHM', content: string, filename: string) {
  const yearMonth = new Date().toISOString().slice(0, 7);
  const dir = join(MEMORY_DIR, 'LEARNING', category, yearMonth);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, filename), content);
}

// Write work item
function writeWorkItem(workDir: string, content: string, filename: string) {
  const dir = join(MEMORY_DIR, 'WORK', workDir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, filename), content);
}

// Append to signal log
function appendSignal(signal: object) {
  const dir = join(MEMORY_DIR, 'LEARNING', 'SIGNALS');
  mkdirSync(dir, { recursive: true });
  appendFileSync(join(dir, 'ratings.jsonl'), JSON.stringify(signal) + '\n');
}
```

### Reading from Memory

```typescript
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const MEMORY_DIR = `${process.env.PAI_DIR}/MEMORY`;

// Read current work
function getCurrentWork(): object | null {
  const path = join(MEMORY_DIR, 'STATE', 'current-work.json');
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// Read learnings by category
function getLearnings(category: string, yearMonth?: string): string[] {
  const dir = join(MEMORY_DIR, 'LEARNING', category, yearMonth || '');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => readFileSync(join(dir, f), 'utf-8'));
}

// Search across memory
function searchMemory(query: string): string[] {
  // Use grep for efficient search
  const { execSync } = require('child_process');
  const result = execSync(`grep -r "${query}" ${MEMORY_DIR}`, { encoding: 'utf-8' });
  return result.split('\n').filter(Boolean);
}
```

### State Management

```typescript
// Set current work
function setCurrentWork(workDir: string, description: string, sessionId: string) {
  const state = {
    work_dir: workDir,
    started: new Date().toISOString(),
    session_id: sessionId,
    description
  };
  const path = join(MEMORY_DIR, 'STATE', 'current-work.json');
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(state, null, 2));
}

// Clear current work (session end)
function clearCurrentWork() {
  const path = join(MEMORY_DIR, 'STATE', 'current-work.json');
  if (existsSync(path)) {
    unlinkSync(path);
  }
}

// Track agent session
function setAgentSession(sessionId: string, agentType: string) {
  const path = join(MEMORY_DIR, 'STATE', 'agent-sessions.json');
  let sessions = {};
  if (existsSync(path)) {
    sessions = JSON.parse(readFileSync(path, 'utf-8'));
  }
  sessions[sessionId] = agentType;
  writeFileSync(path, JSON.stringify(sessions, null, 2));
}
```

## Retention Policy

| Type | Retention | Cleanup |
|------|-----------|---------|
| WORK/ | 30 days | Automatic (configurable) |
| LEARNING/ | Permanent | Manual |
| STATE/ | Session lifetime | Automatic on session end |
| RAW/ | 90 days | Automatic (configurable) |

## Integration Patterns

### With Hooks

```typescript
// In stop hook - capture learning
import { isLearningCapture, getLearningCategory } from './lib/learning-utils';

const text = getLastAssistantMessage(transcript);
if (isLearningCapture(text)) {
  const category = getLearningCategory(text);
  const filename = generateFilename(description, 'LEARNING');
  writeLearning(category, formatLearning(text), filename);
}
```

### With Algorithm

```typescript
// Save ISC to work item
function saveISC(workDir: string, isc: ISCCriteria[]) {
  const content = renderISCMarkdown(isc);
  writeWorkItem(workDir, content, 'ISC.md');
}
```

### With Skills

```typescript
// Read skill-specific learnings
function getSkillLearnings(skillName: string): string[] {
  const learnings = getLearnings('ALGORITHM');
  return learnings.filter(l => l.includes(skillName));
}
```

## File Naming Convention

```
YYYY-MM-DD-HHMMSS_TYPE_description.md
```

| Component | Format | Example |
|-----------|--------|---------|
| Date | `YYYY-MM-DD` | `2026-01-15` |
| Time | `HHMMSS` | `103000` |
| Type | Uppercase | `LEARNING`, `SESSION`, `WORK` |
| Description | Lowercase with hyphens | `hook-timeout-fix` |

**Examples:**
- `2026-01-15-103000_LEARNING_hook-timeout-fix.md`
- `2026-01-15-140500_SESSION_algorithm-refinement.md`

## Learning Detection

Automatic learning detection looks for indicators:

```typescript
function isLearningCapture(text: string): boolean {
  const indicators = [
    'problem', 'issue', 'bug', 'error',
    'fixed', 'solved', 'resolved',
    'troubleshoot', 'debug', 'investigate',
    'lesson', 'takeaway', 'learning', 'insight'
  ];

  let count = 0;
  for (const indicator of indicators) {
    if (text.toLowerCase().includes(indicator)) count++;
  }
  return count >= 2;  // 2+ indicators suggests learning content
}
```

## Category Detection

```typescript
function getLearningCategory(text: string): 'SYSTEM' | 'ALGORITHM' {
  const systemKeywords = [
    'hook', 'tool', 'infrastructure', 'config',
    'script', 'deployment', 'server', 'API'
  ];

  for (const keyword of systemKeywords) {
    if (text.toLowerCase().includes(keyword)) {
      return 'SYSTEM';
    }
  }
  return 'ALGORITHM';
}
```

## Quick Reference

```
DIRECTORY STRUCTURE:
~/.claude/MEMORY/
├── WORK/               Session work items
├── LEARNING/           Permanent insights
│   ├── SYSTEM/         Tooling, infrastructure
│   ├── ALGORITHM/      Task execution
│   └── SIGNALS/        Analytics (JSONL)
├── STATE/              Runtime state
│   ├── current-work.json
│   └── agent-sessions.json
└── RAW/                Event logs (JSONL)

FILE NAMING:
YYYY-MM-DD-HHMMSS_TYPE_description.md

RETENTION:
WORK/     → 30 days (auto)
LEARNING/ → Permanent
STATE/    → Session lifetime
RAW/      → 90 days (auto)

COMMON OPERATIONS:
getCurrentWork()       → Active work item
setCurrentWork()       → Start tracking work
writeLearning()        → Capture insight
searchMemory(query)    → Search across all memory
```
