---
sidebar_position: 2
title: Skill System
---
<!-- Source: ~/projects/pai/Packs/README.md, SYSTEM/SKILLSYSTEM.md -->

# The Skill System

Skills are modular capabilities that extend PAI with specific functionality. They route intelligently based on context, providing specialized workflows for complex tasks.

## What Is a Skill?

A skill is a self-contained capability module. When you make a request, PAI checks skill triggers to determine which skill should handle it—then routes your request to the appropriate workflow.

**Example:** Say "research quantum computing" and the Research skill activates, coordinating multiple AI agents to gather comprehensive information from different sources.

---

## How Skills Work

### Trigger-Based Routing

Each skill defines trigger phrases in its SKILL.md:

```yaml
---
name: Research
description: USE WHEN research, investigate, find information, multi-source analysis
---
```

When your request matches these triggers, the skill activates automatically.

### The Routing Flow

```
Your Request
     │
     ▼
┌─────────────────────────┐
│   Trigger Matching      │  ← Checks all skill descriptions
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│   Skill Activation      │  ← Loads skill context and workflows
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│   Workflow Execution    │  ← Runs appropriate workflow
└─────────────────────────┘
     │
     ▼
┌─────────────────────────┐
│   Tool Invocation       │  ← Calls CLI tools as needed
└─────────────────────────┘
```

---

## Skill Anatomy

Every skill is a directory with a consistent structure:

```
SkillName/
├── SKILL.md              # Definition, triggers, overview
├── Workflows/            # Step-by-step procedures
│   ├── MainWorkflow.md
│   └── AlternateFlow.md
├── Tools/                # TypeScript CLI implementations
│   └── ToolName.ts
├── Data/                 # Configuration and data files
│   └── config.yaml
└── USER/                 # User customizations (optional)
    └── overrides.md
```

### SKILL.md

The skill definition file. Required elements:

```yaml
---
name: SkillName
description: USE WHEN trigger, phrases, keywords
version: 1.0.0
---

# SkillName

Overview of what this skill does...

## Workflows

- **MainWorkflow** — Primary use case
- **AlternateFlow** — Secondary use case

## Tools

- `ToolName.ts` — What this tool does
```

### Workflows

Step-by-step procedures for complex tasks:

```markdown
# Research Workflow

## Prerequisites
- Topic or question defined

## Steps

1. **Decompose Query** — Break into sub-questions
2. **Spawn Agents** — Launch parallel researchers
3. **Gather Results** — Collect and deduplicate
4. **Synthesize** — Combine into coherent answer
5. **Cite Sources** — Add references

## Verification
- All sources cited
- Sub-questions addressed
```

### Tools

TypeScript CLIs that provide deterministic operations:

```typescript
// Tools/Search.ts
const args = process.argv.slice(2);
const query = args[0];

// Implementation...

console.log(JSON.stringify(results));
```

Tools are invoked via Bun: `bun run ~/.claude/skills/Research/Tools/Search.ts "query"`

---

## Skill Categories

### Core Skills

Always loaded, define fundamental capabilities:

| Skill | Purpose |
|-------|---------|
| **CORE** | Identity, preferences, response format, memory |
| **CreateSkill** | Skill creation and validation framework |

### Capability Skills

Add specific functionality when triggered:

| Category | Skills |
|----------|--------|
| **Research** | Research, OSINT, AnnualReports |
| **Analysis** | FirstPrinciples, Council, RedTeam |
| **Automation** | Browser, BrightData |
| **Development** | CreateCLI, CreateSkill, Prompting |
| **Security** | Recon, RedTeam |
| **Life OS** | Telos |
| **Creativity** | Art |
| **Delegation** | Agents |
| **Methodology** | Algorithm |

---

## Skill Loading

Skills load via hooks at session start:

1. **CoreLoader hook** reads `~/.claude/skills/`
2. Each `SKILL.md` is parsed for name and triggers
3. Skill index is built with trigger → skill mappings
4. Context is injected into the session

The skill index file (`skill-index.json`) maps triggers to skills for fast routing.

---

## Why CLI-First?

Skills use TypeScript CLIs instead of API calls because:

| Benefit | Description |
|---------|-------------|
| **Reduced Tokens** | No schema overhead or verbose API formats |
| **Direct Execution** | Run tools without AI interpretation |
| **Testable** | Unit test tools independently |
| **Debuggable** | Run tools manually to diagnose issues |
| **Composable** | Pipe outputs between tools |

**Example:**
```bash
# Direct tool execution
bun run ~/.claude/skills/Research/Tools/Search.ts "quantum computing" | \
  bun run ~/.claude/skills/Research/Tools/Summarize.ts
```

---

## Customization

Skills support user customization without modifying the base skill:

### User Overrides

Create files in `~/.claude/SKILLCUSTOMIZATIONS/SkillName/`:

```
SKILLCUSTOMIZATIONS/
└── Research/
    ├── preferences.md    # Your research preferences
    └── sources.yaml      # Your preferred sources
```

### USER Directory

Skills can include a `USER/` subdirectory for user-specific content that survives upgrades:

```
Research/
├── SKILL.md
├── Workflows/
└── USER/
    └── favorite-sources.md   # Your additions
```

---

## Creating Skills

Use the CreateSkill skill to scaffold new skills:

```
Create a new skill called "Bookmarks" that manages my saved links
```

Or manually create the directory structure following the anatomy above.

See the [Developer Guide: Create a Skill](/developers/how-to/create-a-skill) for complete instructions.

---

## See Also

- [Packs Catalog](/users/reference/packs-catalog) — Available skill packs
- [Install Packs](/users/how-to/install-packs) — Adding skills to your system
- [Developer: Create a Skill](/developers/how-to/create-a-skill) — Building custom skills
