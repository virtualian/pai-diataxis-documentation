---
sidebar_position: 2
title: Getting Started
---
<!-- Source: ~/projects/pai/README.md "New to This? Start Here" section -->

# Getting Started with PAI

This tutorial introduces PAI (Personal AI Infrastructure) and helps you understand what makes it different from other AI tools.

## Understanding AI Levels

You've probably used ChatGPT or Claude. Type a question, get an answer. Simple. But AI systems come in three levels:

### Level 1: Chatbots

**Examples:** ChatGPT, Claude.ai, Gemini

You ask something, it answers, then it forgets everything. The next conversation starts fresh with no memory of you, your preferences, or what you talked about yesterday.

**The pattern:** Ask → Answer → Forget

### Level 2: Agentic Platforms

**Examples:** Claude Code, Cursor, Windsurf

The AI can actually *do* things—write code, browse the web, edit files, run commands. More capable, but it still doesn't know *you*—your goals, your preferences, your history.

**The pattern:** Ask → Use tools → Get result

### Level 3: Personal AI Infrastructure

**Example:** PAI

Now your AI **learns and improves**:

- **Captures every signal** — Ratings, sentiment, verification outcomes
- **Learns from mistakes** — Failures get analyzed and fixed
- **Gets better over time** — Success patterns get reinforced
- **Upgrades itself** — Skills, workflows, even core behavior evolves

Plus it knows:

- **Your goals** — What you're working toward
- **Your preferences** — How you like things done
- **Your history** — Past decisions and learnings

**The pattern:** Observe → Think → Plan → Execute → Verify → **Learn** → Improve

The key difference: **PAI learns from feedback**. Every interaction makes it better at helping *you* specifically.

---

## What PAI Gives You

### Persistent Memory

Your DA (Digital Assistant) remembers:
- Past sessions and decisions
- What worked and what didn't
- Your preferences for how things should be done

### Intelligent Routing

Say "research this" and the right workflow triggers automatically. Skills activate based on context, not explicit commands.

### Modular Capabilities

PAI capabilities come as **Packs**—self-contained modules you install as needed:
- Infrastructure packs for core functionality
- Skill packs for specific capabilities
- Community packs for specialized domains

### Self-Improvement

The system constantly captures signals:
- Explicit ratings (1-10) you provide
- Implicit signals from your behavior
- Verification outcomes from completed work

These feed back into making the system better.

---

## Who Is PAI For?

**Everyone.** PAI is the anti-gatekeeping AI project.

| If you are... | PAI helps you... |
|--------------|------------------|
| A small business owner | Handle invoicing, scheduling, customer follow-ups |
| A manager | Track projects, prepare for reviews, communicate clearly |
| An artist or creative | Find opportunities, organize your work, build your practice |
| An everyday person | Improve fitness, manage finances, get organized |
| A developer | Add persistent memory and custom workflows to your AI assistant |
| A power user | Build a system that knows your goals and context |

---

## How PAI Is Different

The first thing people ask:

> How is this different from Claude Code, or any of the other agentic systems?

**Three core differentiators:**

1. **Goal Orientation** — PAI's primary focus is on the human running it and what they're trying to accomplish, not the technology.

2. **Pursuit of Optimal Output** — The system's outer loop is trying to produce the exact right output given all context available.

3. **Continuous Learning** — The system constantly captures signals about what was done, what outputs were produced, and how you liked the results.

---

## Key Concepts

### Skills

Modular capabilities that route based on triggers. Each skill defines when it activates and provides workflows for complex tasks.

**Example:** Say "research" and the Research skill activates, coordinating multiple AI agents to gather comprehensive information.

### Packs

Distributable bundles that add capabilities to your system. Install a pack and your DA gains new abilities.

**Example:** Install the Browser pack and your DA can take screenshots, click elements, and verify web pages.

### Hooks

Event handlers that respond to Claude Code lifecycle events:
- Load context at session start
- Play voice notifications on completion
- Capture session history automatically

### The Algorithm

PAI's universal problem-solving approach:

1. **Observe** — Understand the current state
2. **Think** — Analyze what the user really needs
3. **Plan** — Define Ideal State Criteria (ISC)
4. **Build** — Construct the solution
5. **Execute** — Implement the plan
6. **Verify** — Confirm all criteria are met
7. **Learn** — Capture what worked for next time

---

## What's Next?

Ready to install PAI? Follow these steps:

1. **[Install PAI](/users/how-to/install-pai)** — Set up PAI on your machine
2. **[Install Packs](/users/how-to/install-packs)** — Add the capabilities you need
3. **[Explore the Packs Catalog](/users/reference/packs-catalog)** — See what's available

---

## Common Questions

### Do I need to install everything?

No. PAI is modular by design:
- Packs are independent—install one, ten, or none
- Start small and add more as you need
- Each pack declares its dependencies explicitly

### What if I break something?

The modular design makes recovery easy:
- Packs are isolated—breaking one doesn't affect others
- History is preserved—your DA's memory survives mistakes
- Everything is Git-backed—roll back when needed

### Is this only for Claude Code?

No. While examples use Claude Code, the concepts work with OpenCode, Cursor, Windsurf, and custom systems. The code is TypeScript, Python, and Bash—the concepts are universal.
