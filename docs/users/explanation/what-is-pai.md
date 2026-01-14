---
sidebar_position: 1
title: What is PAI?
---
<!-- Source: ~/projects/pai/website/docs/users/explanation/what-is-pai.md -->

# What is PAI?

PAI (Personal AI Infrastructure) is an extensible system that enhances Claude Code with persistent capabilities, memory, and orchestration.

## The Problem

Claude Code is powerful but stateless. Each session starts fresh:
- No memory of past work
- No custom capabilities
- No orchestration patterns
- No integration with your tools

## The Solution

PAI adds layers on top of Claude Code:

```
┌─────────────────────────────────────┐
│            Your Request             │
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│              Skills                 │
│  (Agents, Algorithm, Browser, ...)  │
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│               CORE                  │
│   (Identity, Memory, Preferences)   │
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│            Claude Code              │
└─────────────────────────────────────┘
```

## Core Concepts

### Skills

Modular capabilities that route based on triggers. Each skill:
- Defines when it activates
- Provides workflows for complex tasks
- Includes tools (TypeScript CLI)

### Packs

Distributable bundles of skills and configuration. Install a pack to add new capabilities.

### Hooks

Integration points with Claude Code events. Hooks can:
- Load context at session start
- Transform responses
- Trigger notifications

### Memory

Persistent storage across sessions:
- Learning from past work
- Research artifacts
- User preferences

## Philosophy

### CLI-First

Tools are TypeScript CLIs, not APIs. This:
- Reduces token usage (no schema overhead)
- Enables direct execution
- Simplifies debugging

### Deterministic Code First

Prompts wrap code, not the other way around. Business logic lives in TypeScript where it can be tested and versioned.

### Effort Classification

Complex tasks unlock more powerful capabilities. Simple questions get fast answers; mission-critical work gets full orchestration.

## What PAI is NOT

- **Not a replacement for Claude Code** - It extends it
- **Not a hosted service** - It runs locally
- **Not vendor locked** - Bring your own skills and tools
