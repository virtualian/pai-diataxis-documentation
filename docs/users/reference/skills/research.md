---
sidebar_position: 2
title: Research
---
<!-- Source: ~/projects/pai/Packs/pai-research-skill/src/skills/Research/SKILL.md -->

# Research Skill

Comprehensive research, analysis, and content extraction system with multiple research modes and 242+ Fabric patterns.

## Triggers

The Research skill activates when you say:
- "do research", "research this", "find information"
- "quick research", "minor research"
- "extensive research", "deep research"
- "investigate", "look into"
- "extract wisdom", "extract alpha"
- "use fabric", "fabric pattern"

## Research Modes

### Quick Research
**Trigger:** "quick research", "minor research"

Single Claude agent, single query. Fast results in ~10-15 seconds.

```
Quick research: What are the main features of PostgreSQL 16?
```

### Standard Research (Default)
**Trigger:** "do research", "research this"

Two parallel agents (Claude + Gemini) for broader coverage. Results in ~15-30 seconds.

```
Research: What are current best practices for API rate limiting?
```

### Extensive Research
**Trigger:** "extensive research", "do extensive research"

Nine parallel agents (3 types × 3 threads) for comprehensive coverage. Results in ~60-90 seconds.

```
Do extensive research on the current state of WebAssembly adoption.
```

## Workflows

| Workflow | Purpose | When to Use |
|----------|---------|-------------|
| **QuickResearch** | Fast, single-agent lookup | Simple questions, fact-checking |
| **StandardResearch** | Balanced multi-source | General research (default) |
| **ExtensiveResearch** | Deep parallel investigation | Important decisions, comprehensive coverage |
| **ExtractAlpha** | Deep content analysis | Finding non-obvious insights |
| **Retrieve** | Content with bot detection | Sites blocking normal access |
| **Fabric** | Apply 242+ patterns | Structured content analysis |

## Fabric Integration

The Research skill includes access to 242+ Fabric patterns for specialized analysis:

### Popular Patterns

| Pattern | Purpose |
|---------|---------|
| `extract_wisdom` | Pull key insights from content |
| `summarize` | Create concise summaries |
| `analyze_claims` | Evaluate claims for validity |
| `create_threat_model` | Security threat analysis |
| `improve_writing` | Enhance written content |
| `extract_main_idea` | Find core thesis |

### Using Fabric

```
Use fabric extract_wisdom on this article: [URL]
```

```
Fabric summarize: [paste content]
```

## Examples

**Research a technology:**
```
Research: What are the tradeoffs between Redis and Memcached for session storage?
```

**Extract insights from content:**
```
Extract alpha from this blog post: https://example.com/article
```

**Quick fact check:**
```
Quick research: When was TypeScript 5.0 released?
```

## Integration

### Works With
- **OSINT** — For company/person research, use OSINT instead
- **BrightData** — For blocked content, research can escalate to BrightData
- **Council** — Research first, then debate findings

### Outputs To
- **Memory** — Research artifacts saved to MEMORY/WORK/
- **History** — Permanent storage in History/research/

## Notes

- All URLs are verified before delivery (research agents can hallucinate URLs)
- Research artifacts are tied to current work item for learning
- For due diligence or background checks, use OSINT skill instead
