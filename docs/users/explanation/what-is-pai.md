---
sidebar_position: 1
title: What is PAI?
---
<!-- Source: ~/projects/pai/README.md -->

# What is PAI?

PAI (Personal AI Infrastructure) is an open-source framework that extends Claude Code into a personalized AI system. It's not a replacement—it's what you build *on top of* your AI assistant.

## The Problem PAI Solves

Claude Code is powerful but stateless. Each session starts fresh:

- **No memory** of past work or decisions
- **No custom capabilities** beyond built-in tools
- **No orchestration** for complex multi-step workflows
- **No personalization** to your goals and preferences
- **No learning** from what worked or didn't

You're constantly re-explaining context, rebuilding workflows, and starting from scratch.

## The Solution

PAI adds infrastructure layers on top of Claude Code:

```
┌─────────────────────────────────────────────┐
│              Your Request                   │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│                Skills                        │
│   (Algorithm, Research, Browser, Agents)    │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│                 CORE                         │
│    (Identity, Memory, Preferences, Goals)   │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│              Claude Code                     │
└─────────────────────────────────────────────┘
```

Each layer adds capabilities while staying composable and modular.

---

## Core Concepts

### Skills

Modular capabilities that route intelligently based on context. Each skill:

- **Defines triggers** that activate it automatically
- **Provides workflows** for complex multi-step tasks
- **Includes tools** (TypeScript CLIs) for deterministic operations

**Example skills:** Research, Browser automation, Algorithm thinking, Agent composition

### Packs

Self-contained, AI-installable modules that add specific capabilities to your system. Each pack includes:

- Code and configuration
- Installation instructions
- Verification tests

Your DA reads the pack and installs it—no manual copying required.

### Hooks

Integration points with Claude Code lifecycle events:

| Event | What Hooks Can Do |
|-------|-------------------|
| Session start | Load context, display banners |
| Tool call | Validate commands, log activity |
| Response complete | Speak summaries, send notifications |
| Session end | Capture history, save learnings |

### Memory System

Three-tier persistent storage:

- **Hot (WORK/)** — Active projects and current context
- **Warm (STATE/)** — Recent sessions and decisions
- **Cold (LEARNING/)** — Long-term patterns and insights

Every interaction generates signals that feed back into the memory system.

---

## The PAI Principles

These principles guide how PAI systems are designed:

| Principle | What It Means |
|-----------|---------------|
| **User Centricity** | PAI is built around you, not tooling. Your goals come first. |
| **The Algorithm** | Scientific method as problem-solving: Observe → Think → Plan → Execute → Verify → Learn |
| **CLI-First** | Tools are TypeScript CLIs, reducing token usage and enabling direct execution |
| **Deterministic First** | Prompts wrap code, not the other way around. Business logic lives in TypeScript. |
| **Scaffolding > Model** | System architecture matters more than which model you use |

---

## The Algorithm

PAI's universal problem-solving approach:

### The Seven Phases

1. **Observe** — Gather information about current state and what was asked
2. **Think** — Analyze intent, desired outcome, and failure modes
3. **Plan** — Define Ideal State Criteria (ISC) as verifiable success metrics
4. **Build** — Construct the solution components
5. **Execute** — Implement toward the criteria
6. **Verify** — Confirm all criteria are met with evidence
7. **Learn** — Capture what worked for future improvement

### Ideal State Criteria (ISC)

The key innovation: every task gets broken down into testable criteria that define success. These criteria:

- Are exactly 8 words each (forces precision)
- Describe state, not actions ("Tests pass" not "Run tests")
- Can be verified in under 2 seconds
- Become the verification checklist

This turns vague requests into measurable outcomes.

---

## PAI Primitives

The architectural components that make PAI work:

### Assistant vs. Agent Model

PAI treats AI as a persistent assistant rather than a stateless agent. An assistant knows your goals, remembers your preferences, and improves over time.

### User/System Separation

- **USER/** — Your customizations, identity, preferences
- **SYSTEM/** — PAI infrastructure and defaults

When PAI upgrades, your files are untouched. Portable identity, upgrade-safe.

### Granular Customization

Six layers you can customize:

1. **Identity** — Name, voice, personality
2. **Preferences** — Tech stack, tools, conventions
3. **Workflows** — How skills execute
4. **Skills** — What capabilities exist
5. **Hooks** — How events are handled
6. **Memory** — What gets captured and retained

Start with defaults, customize when you need to.

---

## What PAI Is NOT

- **Not a replacement for Claude Code** — It extends and enhances it
- **Not a hosted service** — It runs locally on your machine
- **Not vendor-locked** — Bring your own skills and tools
- **Not all-or-nothing** — Install just what you need, when you need it

---

## Philosophy: AI Should Magnify Everyone

PAI exists because we believe:

> Only a tiny fraction of humanity's creative potential is activated on Earth.

Most people don't believe they have valuable contributions to make. They've never articulated who they are or what they're about. This makes them vulnerable to AI displacement.

PAI's mission is twofold:

1. **Activate people** — Help them identify, articulate, and pursue their purpose through AI-augmented self-discovery
2. **Democratize infrastructure** — Ensure quality AI isn't reserved for the technical elite

That's why this is an open-source project. The infrastructure that makes AI *yours* should be available to everyone.
