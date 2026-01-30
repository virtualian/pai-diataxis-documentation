---
sidebar_position: 9
title: Fabric Patterns
---
<!-- Source: ~/projects/pai/Packs/pai-research-skill/src/skills/Research/SKILL.md -->

# Fabric Patterns

Fabric provides 240+ specialized patterns for content analysis, extraction, and transformation. Patterns are invoked through the Research skill.

## Triggers

Fabric patterns activate when you say:
- "use fabric", "fabric pattern"
- "run fabric", "fabric [pattern-name]"
- Pattern names directly (e.g., "extract wisdom", "summarize")

## Top 20 Patterns

These are the most commonly used Fabric patterns:

### Content Extraction

| Pattern | Purpose |
|---------|---------|
| **extract_wisdom** | Pull key insights, ideas, and quotes from content |
| **extract_main_idea** | Find the core thesis of content |
| **extract_insights** | Identify non-obvious insights |
| **extract_article_wisdom** | Specialized for article analysis |

### Summarization

| Pattern | Purpose |
|---------|---------|
| **summarize** | Create concise summary |
| **create_5_sentence_summary** | Ultra-brief summary |
| **summarize_paper** | Academic paper summarization |

### Analysis

| Pattern | Purpose |
|---------|---------|
| **analyze_claims** | Evaluate claims for validity |
| **analyze_paper** | Deep academic paper analysis |
| **analyze_threat_report** | Security threat report analysis |
| **find_logical_fallacies** | Identify reasoning errors |

### Security

| Pattern | Purpose |
|---------|---------|
| **create_threat_model** | Generate threat model from description |

### Content Creation

| Pattern | Purpose |
|---------|---------|
| **improve_writing** | Enhance written content |
| **improve_prompt** | Optimize AI prompts |
| **create_prd** | Product requirements document |
| **create_quiz** | Generate quiz from content |
| **create_mermaid_visualization** | Create diagrams from content |
| **humanize** | Make AI content more natural |

### Evaluation

| Pattern | Purpose |
|---------|---------|
| **rate_content** | Quality rating of content |

## Usage Examples

**Extract wisdom from a video:**
```
Extract wisdom from https://youtube.com/watch?v=example
```

**Summarize an article:**
```
Fabric summarize: https://example.com/article
```

**Analyze claims in content:**
```
Use fabric analyze_claims on this blog post: [paste or URL]
```

**Create a threat model:**
```
Fabric create_threat_model for our user authentication system
```

**Improve a prompt:**
```
Fabric improve_prompt: "Write a blog post about AI"
```

## Pattern Categories

All 240+ patterns are organized into categories:

| Category | Count | Examples |
|----------|-------|----------|
| **Analysis** | 45+ | analyze_claims, analyze_paper |
| **Extraction** | 30+ | extract_wisdom, extract_insights |
| **Creation** | 40+ | create_prd, create_threat_model |
| **Improvement** | 25+ | improve_writing, improve_prompt |
| **Summarization** | 15+ | summarize, summarize_paper |
| **Security** | 20+ | create_threat_model, analyze_threat_report |
| **Transformation** | 25+ | humanize, formalize |

## Integration

Fabric patterns are integrated into the Research skill:

```
Research: Extract wisdom from this podcast transcript
→ Invokes Fabric extract_wisdom pattern
→ Returns structured insights
```

### Works With
- **Research** — Primary integration point
- **Council** — Analyze debate outputs
- **RedTeam** — Analyze argument structures

## Updating Patterns

To get the latest Fabric patterns:

```
Update fabric patterns
```

This syncs patterns from the upstream Fabric repository.

## Notes

- Patterns are maintained by the [Fabric project](https://github.com/danielmiessler/fabric)
- PAI includes 242+ patterns out of the box
- Custom patterns can be added to your installation
- Patterns run through specialized prompts, not just keyword matching
