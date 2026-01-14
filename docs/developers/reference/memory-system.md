---
sidebar_position: 5
title: Memory System
---
<!-- Source: ~/projects/pai/website/docs/developers/reference/memory-system.md -->

# Memory System Reference

Persistent memory architecture.

## Overview

PAI's memory system provides persistence across sessions.

## Directory Structure

```
~/.claude/MEMORY/
├── README.md           # Memory system documentation
├── Learning/           # Insights and patterns
│   ├── ALGORITHM/
│   └── skills/
├── Work/               # Session artifacts
│   └── {session-id}/
├── Research/           # Research outputs
│   └── {topic}/
└── Signals/            # Pattern recognition
    └── *.jsonl
```

## Memory Types

### Learning

Long-term insights extracted from work:

```
~/.claude/MEMORY/Learning/
├── ALGORITHM/          # Algorithm learnings
├── skills/             # Skill-specific learnings
└── patterns.md         # Recognized patterns
```

### Work

Session-specific artifacts:

```
~/.claude/MEMORY/Work/{session-id}/
├── ISC.md              # Ideal State Criteria
├── transcript.md       # Session transcript
└── artifacts/          # Generated files
```

### Research

Research outputs organized by topic:

```
~/.claude/MEMORY/Research/{topic}/
├── sources.md          # Source list
├── findings.md         # Key findings
└── synthesis.md        # Synthesized conclusions
```

### Signals

Pattern recognition in JSONL format:

```
~/.claude/MEMORY/Signals/algorithm-patterns.jsonl
```

```json
{"timestamp": "2025-01-10T12:00:00Z", "pattern": "...", "confidence": 0.85}
```

## Memory Operations

### Write

```typescript
const memoryPath = `${process.env.PAI_DIR}/MEMORY/Learning/my-insight.md`;
fs.writeFileSync(memoryPath, content);
```

### Read

```typescript
const learnings = fs.readFileSync(
  `${process.env.PAI_DIR}/MEMORY/Learning/patterns.md`,
  'utf-8'
);
```

### Query

Search across memory:

```bash
grep -r "pattern" ~/.claude/MEMORY/
```

## Session Memory

Each session can store artifacts:

```typescript
const sessionDir = `${process.env.PAI_DIR}/MEMORY/Work/${sessionId}`;
fs.mkdirSync(sessionDir, { recursive: true });
fs.writeFileSync(`${sessionDir}/ISC.md`, iscContent);
```

## Memory Retention

| Type | Retention | Cleanup |
|------|-----------|---------|
| Learning | Permanent | Manual |
| Work | 30 days | Automatic |
| Research | Permanent | Manual |
| Signals | 90 days | Automatic |

## Integration

### With Algorithm

```typescript
// Save ISC to memory
const iscPath = `${memoryDir}/Work/${session}/ISC.md`;
fs.writeFileSync(iscPath, renderISC(isc));
```

### With Skills

Skills can read/write memory:

```typescript
// Read skill learnings
const learnings = loadLearnings('MySkill');
```

## Best Practices

1. **Structured formats** - Use markdown or JSON
2. **Clear naming** - Descriptive file names
3. **Timestamps** - Include when created/updated
4. **Cross-references** - Link related memories
5. **Cleanup** - Remove stale work artifacts
