---
sidebar_position: 4
title: Capabilities Registry
---
<!-- Source: ~/projects/pai/website/docs/developers/reference/capabilities-registry.md -->

# Capabilities Registry Reference

Algorithm capability definitions.

## Source of Truth

```
~/.claude/skills/THEALGORITHM/Data/Capabilities.yaml
```

## Structure

```yaml
version: "1.0"

# Category
category_name:
  capability_name:
    property: value
```

## Capability Properties

| Property | Required | Description |
|----------|----------|-------------|
| `effort_min` | Yes | Minimum effort level |
| `description` | No | Human description |
| `use_for` / `use_when` | Yes | When to use |
| `skill` | Varies | Associated skill |
| `workflow` | Varies | Associated workflow |
| `subagent_type` | Varies | Agent type to spawn |
| `model` | Varies | Model to use |

## Categories

### models

Compute resources.

```yaml
models:
  haiku:
    effort_min: QUICK
    use_for: "Parallel grunt work, simple tasks"
  sonnet:
    effort_min: STANDARD
    use_for: "Analysis, planning, standard work"
  opus:
    effort_min: DETERMINED
    use_for: "Architecture, critical decisions"
```

### thinking

Thinking modes.

```yaml
thinking:
  ultrathink:
    skill: BeCreative
    workflow: StandardCreativity
    effort_min: STANDARD
    use_when: "Creative solutions, quality thinking"
  tree_of_thought:
    skill: BeCreative
    workflow: TreeOfThoughts
    effort_min: THOROUGH
    use_when: "Complex decisions, branching exploration"
```

### debate

Multi-agent debate systems.

```yaml
debate:
  council:
    skill: Council
    workflow: DEBATE
    effort_min: THOROUGH
    agents: 4
    rounds: 3
  redteam:
    skill: RedTeam
    workflow: ParallelAnalysis
    effort_min: DETERMINED
    agents: 32
```

### research

Research agents.

```yaml
research:
  perplexity:
    subagent_type: PerplexityResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Web research, citations"
  gemini:
    subagent_type: GeminiResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Multi-perspective research"
```

### execution

Execution agents.

```yaml
execution:
  intern:
    subagent_type: Intern
    model: haiku
    effort_min: QUICK
    use_when: "Parallel grunt work"
  engineer:
    subagent_type: Engineer
    model: sonnet
    effort_min: STANDARD
    use_when: "Implementation, coding"
  architect:
    subagent_type: Architect
    model: opus
    effort_min: THOROUGH
    use_when: "System design"
```

### verification

Verification capabilities.

```yaml
verification:
  browser:
    skill: Browser
    effort_min: STANDARD
    use_when: "Web application validation"
  skeptical_verifier:
    traits: [skeptical, meticulous, adversarial]
    model: sonnet
    rule: "Different agent than executor"
```

## Effort Unlocks

Maps effort levels to available capabilities:

```yaml
effort_unlocks:
  TRIVIAL:
    capabilities: []
  QUICK:
    capabilities:
      - models.haiku
      - execution.intern
  STANDARD:
    capabilities:
      - models.haiku
      - models.sonnet
      - research.*
      - execution.engineer
      - verification.browser
  THOROUGH:
    capabilities:
      - all_standard
      - debate.council
      - execution.architect
  DETERMINED:
    capabilities:
      - all_capabilities
      - models.opus
      - debate.redteam
```

## Parallel Configuration

```yaml
parallel:
  max_concurrent:
    QUICK: 1
    STANDARD: 3
    THOROUGH: 5
    DETERMINED: 10
```

## Adding Capabilities

1. Add to appropriate category
2. Set `effort_min`
3. Add to `effort_unlocks`
4. Update documentation
