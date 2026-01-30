---
sidebar_position: 6
title: Use the Memory System
---
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/MEMORYSYSTEM.md -->

# How to Use the Memory System

PAI's memory system works **automatically in the background**. You don't need to manage it - just ask questions naturally.

## Prerequisites

- PAI CORE installed

## How Memory Works (The Short Version)

PAI automatically:
- **Tracks your work** - Every request creates a work record
- **Captures learnings** - When something goes wrong, PAI remembers how to fix it
- **Records your satisfaction** - Ratings (explicit or detected) help PAI improve

You don't need to do anything to make this happen. It just works.

---

## Ask About Past Work

**Instead of:** Running bash commands

**Just ask:**

> "What were we working on yesterday?"

> "Show me the work from last week"

> "What did we accomplish in that authentication refactor?"

PAI will retrieve relevant work from memory and summarize it.

---

## Ask What PAI Has Learned

**Just ask:**

> "What have you learned recently?"

> "Have you made mistakes like this before?"

> "What patterns have you noticed in my feedback?"

PAI uses learnings to avoid repeating mistakes.

---

## Give Feedback That Sticks

Your feedback improves PAI over time:

- **Rate responses** - Say "8/10" or "that was a 3"
- **Explain issues** - "That was wrong because..." triggers learning capture
- **Express frustration** - PAI detects sentiment and learns from it

Low ratings automatically trigger learning capture so the same mistake won't happen again.

---

## Resume Multi-Session Work

For work spanning multiple sessions:

> "Let's continue the API migration we started"

> "What's the status of that documentation project?"

PAI tracks progress across sessions and can pick up where you left off.

---

## For Power Users: Inspect Memory Directly

If you want to see what's stored under the hood:

### See current work
```bash
cat ~/.claude/MEMORY/STATE/current-work.json
```

### List recent work
```bash
ls -lt ~/.claude/MEMORY/WORK/ | head -5
```

### Check learnings
```bash
ls ~/.claude/MEMORY/LEARNING/SYSTEM/
ls ~/.claude/MEMORY/LEARNING/ALGORITHM/
```

### View your ratings
```bash
tail ~/.claude/MEMORY/LEARNING/SIGNALS/ratings.jsonl
```

---

## What Gets Stored Where

| What | Where | How It's Created |
|------|-------|------------------|
| Work records | `MEMORY/WORK/` | Automatically on every request |
| Learnings | `MEMORY/LEARNING/` | From errors, low ratings, corrections |
| Ratings | `MEMORY/LEARNING/SIGNALS/` | From explicit ratings or detected sentiment |
| Agent outputs | `MEMORY/RESEARCH/` | When research agents complete |

**Retention:** Work and learnings persist indefinitely. Session transcripts (in Claude Code's native storage) are kept for 30 days.

---

## Related

- [Memory System Reference](/developers/reference/memory-system) - Technical details for developers
