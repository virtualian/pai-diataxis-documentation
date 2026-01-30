---
sidebar_position: 9
title: Packs Catalog
---
<!-- Source: ~/projects/pai/Packs/README.md -->

# Packs Catalog

Complete catalog of PAI packs available for installation. Each pack is a self-contained, AI-installable module that adds specific capabilities to your system.

## What Are Packs?

**Packs** are battle-tested capabilities extracted from production PAI systems, packaged so anyone can install them. Think of them like downloading complete capabilities—tested, documented, and ready to use.

Each pack contains:
- **README.md** — Overview, architecture, what it solves
- **INSTALL.md** — Step-by-step installation instructions
- **VERIFY.md** — Mandatory verification checklist
- **src/** — Actual source code files

## Pack Categories

| Category | Purpose |
|----------|---------|
| **Infrastructure** | Core systems that other packs depend on |
| **Skills** | Specialized capabilities for specific domains |

---

## Infrastructure Packs (5)

These packs provide the foundation. Install them first, in order.

### pai-hook-system

**Foundation** — Event-driven automation framework

The foundation for all hook-based capabilities. Provides the event system that other packs use for automation.

| Property | Value |
|----------|-------|
| Category | Foundation |
| Dependencies | None (install first) |
| Provides | Hook templates, security hooks, event routing |

---

### pai-core-install

**Core** — Skills + Identity + Architecture

The complete foundation with intelligent routing, response format, and the MEMORY system. Required for all other packs.

| Property | Value |
|----------|-------|
| Category | Core |
| Dependencies | pai-hook-system |
| Includes | CORE skill, CreateSkill, Memory system, identity |

---

### pai-statusline

**Display** — Terminal status display

4-mode responsive status line showing learning signals, context usage, and trend indicators.

| Property | Value |
|----------|-------|
| Category | Display |
| Dependencies | pai-core-install |
| Features | 4 display modes, learning signal tracking, context usage |

---

### pai-voice-system

**Notifications** — Voice notifications with TTS

Voice notifications with ElevenLabs TTS and prosody enhancement for natural speech.

| Property | Value |
|----------|-------|
| Category | Notifications |
| Dependencies | pai-hook-system, pai-core-install |
| Features | ElevenLabs TTS, prosody enhancement, multiple voices |
| Requires | `ELEVENLABS_API_KEY` in `.env` |

---

### pai-observability-server

**Observability** — Real-time monitoring dashboard

Real-time multi-agent monitoring dashboard with WebSocket streaming.

| Property | Value |
|----------|-------|
| Category | Observability |
| Dependencies | pai-hook-system |
| Features | Metrics, logging, tracing, WebSocket streaming |

---

## Skill Packs (18)

Install any skills you need after the infrastructure is in place.

### pai-agents-skill

**Delegation** — Dynamic agent composition

Create specialized agents from 28 personality traits with unique voices.

| Property | Value |
|----------|-------|
| Category | Delegation |
| Skill | Agents |
| Features | 28 traits, voice mapping, parallel orchestration |
| Triggers | "create custom agents", "spin up agents", "agent personalities" |

---

### pai-algorithm-skill

**Methodology** — The Algorithm implementation

Universal problem-solving system with Ideal State Criteria (ISC) tracking.

| Property | Value |
|----------|-------|
| Category | Methodology |
| Skill | THEALGORITHM |
| Features | 7 phases, ISC tracking, effort classification, verifiable iteration |
| Triggers | "use the algorithm", "ISC", "ideal state" |

---

### pai-annualreports-skill

**Research** — Security report aggregation

Annual security report aggregation and threat landscape analysis.

| Property | Value |
|----------|-------|
| Category | Research |
| Skill | AnnualReports |
| Features | Report aggregation, threat analysis, trend identification |
| Triggers | "annual reports", "security reports", "threat reports" |

---

### pai-art-skill

**Creativity** — Visual content generation

Visual content generation with multi-reference image support and technical diagrams.

| Property | Value |
|----------|-------|
| Category | Creativity |
| Skill | Art |
| Features | Excalidraw aesthetic, Gemini integration, header images, PAI icons |
| Triggers | "create visual", "illustration", "diagram", "art" |

---

### pai-brightdata-skill

**Scraping** — Progressive URL scraping

Progressive URL scraping with Bright Data integration and tier escalation.

| Property | Value |
|----------|-------|
| Category | Scraping |
| Skill | BrightData |
| Features | Tier escalation, Bright Data API, scraping pipelines |
| Triggers | "Bright Data", "scrape URL", "web scraping tiers" |
| Requires | Bright Data API credentials |

---

### pai-browser-skill

**Automation** — Debug-first browser automation

Playwright-based browser automation with always-on diagnostics.

| Property | Value |
|----------|-------|
| Category | Automation |
| Skill | Browser |
| Features | Playwright, session auto-start, diagnostics, CLI tools |
| Triggers | "browser", "screenshot", "debug web", "verify UI" |

---

### pai-council-skill

**Analysis** — Multi-agent debate system

Multi-agent debate system for exploring perspectives and reaching consensus.

| Property | Value |
|----------|-------|
| Category | Analysis |
| Skill | Council |
| Features | Multiple perspectives, debate format, consensus building |
| Triggers | "council", "debate", "perspectives", "agents discuss" |

---

### pai-createcli-skill

**Development** — Generate TypeScript CLIs

Generate TypeScript CLI tools with Bun runtime.

| Property | Value |
|----------|-------|
| Category | Development |
| Skill | CreateCLI |
| Features | CLI scaffolding, Bun runtime, argument parsing |
| Triggers | "create CLI", "build CLI", "command-line tool" |

---

### pai-createskill-skill

**Development** — Create and validate PAI skills

Create and validate PAI skills with proper structure.

| Property | Value |
|----------|-------|
| Category | Development |
| Skill | CreateSkill |
| Features | Skill scaffolding, validation, structure templates |
| Triggers | "create skill", "new skill", "skill structure" |

---

### pai-firstprinciples-skill

**Analysis** — First principles decomposition

First principles decomposition and root cause analysis.

| Property | Value |
|----------|-------|
| Category | Analysis |
| Skill | FirstPrinciples |
| Features | Assumption identification, decomposition, root cause |
| Triggers | "first principles", "fundamental", "root cause", "decompose" |

---

### pai-osint-skill

**Research** — Open source intelligence

Open source intelligence gathering and due diligence.

| Property | Value |
|----------|-------|
| Category | Research |
| Skill | OSINT |
| Features | Due diligence, background research, company intel |
| Triggers | "OSINT", "due diligence", "background check", "investigate" |

---

### pai-privateinvestigator-skill

**Research** — Ethical people-finding

Ethical people-finding for reconnection and verification.

| Property | Value |
|----------|-------|
| Category | Research |
| Skill | PrivateInvestigator |
| Features | Ethical search, reconnection workflows, verification |
| Triggers | "find person", "locate", "reconnect", "people search" |

---

### pai-prompting-skill

**Methodology** — Meta-prompting system

Meta-prompting system with Handlebars templates and Claude best practices.

| Property | Value |
|----------|-------|
| Category | Methodology |
| Skill | Prompting |
| Features | Handlebars templates, prompt standards, meta-prompting |
| Triggers | "meta-prompting", "template generation", "prompt optimization" |

---

### pai-recon-skill

**Security** — Security reconnaissance

Security reconnaissance, bug bounty, and attack surface mapping.

| Property | Value |
|----------|-------|
| Category | Security |
| Skill | Recon |
| Features | Attack surface mapping, bug bounty workflows, subdomain enumeration |
| Triggers | "recon", "reconnaissance", "bug bounty", "attack surface" |

---

### pai-redteam-skill

**Security** — Adversarial analysis

Adversarial analysis with 32 specialized agents for stress testing ideas.

| Property | Value |
|----------|-------|
| Category | Security |
| Skill | RedTeam |
| Features | 32 adversarial agents, stress testing, counterarguments |
| Triggers | "red team", "attack idea", "counterarguments", "critique" |

---

### pai-research-skill

**Research** — Multi-source research

Multi-source research with parallel agent execution.

| Property | Value |
|----------|-------|
| Category | Research |
| Skill | Research |
| Features | Parallel agents (Gemini, Grok, Claude, Codex), multi-query decomposition |
| Triggers | "research", "investigate", "find information" |

---

### pai-system-skill

**Maintenance** — System integrity checks

System integrity checks, documentation updates, and security scanning.

| Property | Value |
|----------|-------|
| Category | Maintenance |
| Skill | System |
| Features | Integrity checks, doc updates, security scanning |
| Triggers | "system check", "integrity", "maintenance" |

---

### pai-telos-skill

**Life OS** — Deep goal capture

Deep goal capture framework—mission, goals, beliefs, strategies, learnings.

| Property | Value |
|----------|-------|
| Category | Life OS |
| Skill | Telos |
| Features | 10 capture files (MISSION, GOALS, BELIEFS, etc.), goal tracking |
| Triggers | "Telos", "life goals", "goals", "challenges" |

---

## Installation Order

Packs have dependencies. Install in this order:

```
Required (install first):
1. pai-hook-system            ← Foundation (no dependencies)
2. pai-core-install           ← Depends on hooks, includes MEMORY

Infrastructure (install next):
3. pai-statusline             ← Depends on core-install
4. pai-voice-system           ← Depends on hooks, core-install
5. pai-observability-server   ← Depends on hooks

Skills (install any you need):
6+. pai-*-skill               ← Most depend only on core-install
```

**Or use the [Official Bundle](/users/reference/bundles)** which handles ordering automatically.

---

## Quick Installation

### AI-Assisted (Recommended)

Give the pack directory to your DA:

```
Install the pai-research-skill pack from PAI/Packs/pai-research-skill/.
Use PAI_DIR="~/.claude" and DA="YourDAName".
```

Your DA will:
1. Read `README.md` for context
2. Follow `INSTALL.md` step by step
3. Copy files from `src/` to your system
4. Complete `VERIFY.md` checklist

### Manual Installation

1. Open the pack's `INSTALL.md`
2. Follow each step, copying files from `src/`
3. Complete the `VERIFY.md` checklist

---

## See Also

- [How to Install Packs](/users/how-to/install-packs) — Detailed installation guide
- [Bundles Reference](/users/reference/bundles) — Curated pack collections
- [GitHub: PAI Packs](https://github.com/danielmiessler/PAI/tree/main/Packs) — Source repository
