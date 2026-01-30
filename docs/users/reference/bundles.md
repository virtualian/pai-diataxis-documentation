---
sidebar_position: 10
title: Bundles
---
<!-- Source: ~/projects/pai/Bundles/README.md -->

# Bundles

Bundles are curated collections of packs designed to work together as a harmonious system.

## What Is a Bundle?

While **packs** are individual capabilities (like Research or Browser automation), **bundles** are combinations of packs that were designed to integrate seamlessly—creating capabilities greater than the sum of their parts.

| Aspect | Pack | Bundle |
|--------|------|--------|
| **Scope** | Single capability | Collection of capabilities |
| **Structure** | Directory with code | Directory referencing packs |
| **Installation** | Can be standalone | Ordered sequence with dependencies |
| **Value** | One domain | Integrated experience across domains |

---

## Available Bundles

| Bundle | Description | Pack Count | Status |
|--------|-------------|------------|--------|
| [**Official PAI Bundle**](#official-pai-bundle) | Complete personal AI infrastructure | 23 packs | Active |

---

## Official PAI Bundle

The complete PAI system from Daniel Miessler's production Kai installation.

### What's Included

**Infrastructure Packs (5):**
- pai-hook-system — Event-driven automation
- pai-core-install — Identity, skills, memory
- pai-statusline — Terminal status display
- pai-voice-system — TTS notifications
- pai-observability-server — Monitoring dashboard

**Skill Packs (18):**
- pai-agents-skill — Dynamic agent composition
- pai-algorithm-skill — ISC and problem-solving
- pai-research-skill — Multi-source research
- pai-browser-skill — Browser automation
- pai-art-skill — Visual content
- pai-redteam-skill — Adversarial analysis
- pai-council-skill — Multi-agent debate
- pai-firstprinciples-skill — Root cause analysis
- pai-telos-skill — Life goals and mission
- pai-osint-skill — Open source intelligence
- pai-recon-skill — Security reconnaissance
- pai-prompting-skill — Meta-prompting
- pai-createskill-skill — Skill creation
- pai-createcli-skill — CLI generation
- pai-brightdata-skill — Web scraping
- pai-annualreports-skill — Report aggregation
- pai-privateinvestigator-skill — People finding
- pai-system-skill — System maintenance

### Installation

**Option 1: Full Release (Fastest)**

```bash
git clone https://github.com/danielmiessler/PAI.git
cd PAI/Releases/v2.4

# Back up existing config
[ -d ~/.claude ] && mv ~/.claude ~/.claude-backup-$(date +%Y%m%d)

# Copy complete installation
cp -r .claude ~/

# Run wizard
cd ~/.claude && bun run PAIInstallWizard.ts
```

**Option 2: Bundle Wizard**

```bash
cd PAI/Bundles/Official
bun run install.ts
```

Then install packs in order per the wizard output.

---

## Bundle Types

Bundles can serve different purposes:

| Type | Description | Example |
|------|-------------|---------|
| **Creator Bundle** | All packs from one author | Official PAI Bundle |
| **Functionality Bundle** | Packs for a specific purpose | "Research Bundle" |
| **Domain Bundle** | Packs for a specific field | "Security Bundle" |
| **Starter Bundle** | Minimal set to get started | "PAI Lite" |

---

## Bundle Tiers

| Tier | Description | Typical Size |
|------|-------------|--------------|
| **Starter** | Minimal viable collection | 2-3 packs |
| **Intermediate** | Core functionality | 4-6 packs |
| **Advanced** | Extended capabilities | 7-10 packs |
| **Complete** | Full experience | 10+ packs |

---

## Why Use a Bundle?

Individual packs are powerful, but bundles provide:

| Value | Description |
|-------|-------------|
| **Curation** | Tested combinations that work well together |
| **Order** | Proper installation sequence for dependencies |
| **Synergy** | Documentation of how packs interact |
| **Completeness** | Everything needed for a particular goal |

---

## Bundle vs Full Release

| Approach | What You Get | Best For |
|----------|--------------|----------|
| **Full Release** | Complete `.claude/` directory, pre-configured | Fastest path to working system |
| **Bundle + Packs** | Skeleton structure, then manual pack installation | Learning the system as you build |
| **Individual Packs** | Only what you choose | Cherry-picking specific capabilities |

---

## Can I Cherry-Pick from a Bundle?

Yes. Bundles are documentation of curated collections—you can install any subset of packs you want. Just ensure you install dependencies first:

1. pai-hook-system (always first)
2. pai-core-install (required for most packs)
3. Then any skills you need

---

## See Also

- [Packs Catalog](/users/reference/packs-catalog) — Complete pack listing
- [Install Packs](/users/how-to/install-packs) — How to install individual packs
- [Install PAI](/users/how-to/install-pai) — Initial PAI setup
