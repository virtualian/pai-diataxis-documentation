---
sidebar_position: 4
title: Capabilities Registry
---
<!-- Source: ~/projects/pai/Packs/pai-algorithm-skill/src/skills/THEALGORITHM/Data/Capabilities.yaml -->

# Capabilities Registry Reference

Complete specification for THE ALGORITHM's orchestratable capabilities.

## Source of Truth

```
~/.claude/skills/THEALGORITHM/Data/Capabilities.yaml
```

## YAML Structure

```yaml
version: "1.0"

category_name:
  capability_name:
    property: value
    property: value
```

## Capability Properties

| Property | Required | Description |
|----------|----------|-------------|
| `effort_min` | Yes | Minimum effort level to unlock |
| `description` | No | Human-readable description |
| `use_for` / `use_when` | Yes | When to use this capability |
| `skill` | Varies | Associated skill name |
| `workflow` | Varies | Associated workflow name |
| `subagent_type` | Varies | Agent type to spawn via Task tool |
| `model` | Varies | Model to use (haiku, sonnet, opus) |
| `agents` | Varies | Number of agents (for debate systems) |
| `rounds` | Varies | Number of rounds (for debate systems) |

## Effort Levels

Capabilities unlock progressively by effort level:

| Level | Description | Unlocks |
|-------|-------------|---------|
| `TRIVIAL` | Skip algorithm entirely | Nothing |
| `QUICK` | Single-step, fast execution | haiku, Intern |
| `STANDARD` | Multi-step bounded work | +sonnet, research, Engineer, QA |
| `THOROUGH` | Complex, multi-file work | +Council, Architect, Pentester |
| `DETERMINED` | Mission-critical, unlimited | +opus, RedTeam, all capabilities |

## Categories

### models

Compute resources for different intelligence levels.

```yaml
models:
  haiku:
    effort_min: QUICK
    description: "Fast, cheap execution"
    use_for: "Parallel grunt work, simple execution, spotchecks"

  sonnet:
    effort_min: STANDARD
    description: "Balanced reasoning"
    use_for: "Analysis, planning, research, standard work"

  opus:
    effort_min: DETERMINED
    description: "Maximum intelligence"
    use_for: "Architecture, critical decisions, complex reasoning"
```

### thinking

Enhanced thinking modes.

```yaml
thinking:
  deep_thinking:
    skill: BeCreative
    workflow: StandardCreativity
    effort_min: STANDARD
    use_when: "Need creative solutions, novel approaches, quality thinking"

  tree_of_thought:
    skill: BeCreative
    workflow: TreeOfThoughts
    effort_min: THOROUGH
    use_when: "Complex multi-factor decisions, branching exploration"

  plan_mode:
    tool: EnterPlanMode
    effort_min: THOROUGH
    use_when: "Complex multi-step implementation needing user approval"
```

### debate

Multi-agent collaboration systems.

```yaml
debate:
  council:
    skill: Council
    workflow: DEBATE
    effort_min: THOROUGH
    agents: 4
    rounds: 3
    use_when: "Need multiple perspectives, collaborative analysis, design decisions"

  redteam:
    skill: RedTeam
    workflow: ParallelAnalysis
    effort_min: DETERMINED
    agents: 32
    use_when: "Adversarial validation, stress-testing, find weaknesses"
```

### analysis

Analytical frameworks.

```yaml
analysis:
  first_principles:
    skill: FirstPrinciples
    effort_min: STANDARD
    use_when: "Challenge assumptions, find root truths, deconstruct problems"

  science:
    skill: Science
    effort_min: STANDARD
    use_when: "Hypothesis-driven exploration, systematic experimentation"
```

### research

Research agents with different specializations.

```yaml
research:
  perplexity:
    subagent_type: PerplexityResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Web research, current events, citations needed"

  gemini:
    subagent_type: GeminiResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Multi-perspective research, parallel query decomposition"

  grok:
    subagent_type: GrokResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Contrarian analysis, unbiased fact-checking"

  claude:
    subagent_type: ClaudeResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Academic research, scholarly sources"

  codex:
    subagent_type: CodexResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Technical archaeology, code pattern research"
```

### execution

Execution agents for different work types.

```yaml
execution:
  intern:
    subagent_type: Intern
    model: haiku
    effort_min: QUICK
    use_when: "Parallel grunt work, simple tasks, data gathering"

  architect:
    subagent_type: Architect
    model: opus
    effort_min: THOROUGH
    use_when: "System design, architectural decisions"

  engineer:
    subagent_type: Engineer
    model: sonnet
    effort_min: STANDARD
    use_when: "Implementation, coding tasks"

  qa_tester:
    subagent_type: QATester
    model: sonnet
    effort_min: STANDARD
    use_when: "Testing, validation, quality assurance"

  designer:
    subagent_type: Designer
    model: sonnet
    effort_min: STANDARD
    use_when: "UX/UI design, user-centered solutions"

  pentester:
    subagent_type: Pentester
    model: sonnet
    effort_min: THOROUGH
    use_when: "Security testing, vulnerability assessment"

  ralph_loop:
    type: iterative_loop
    model: sonnet
    effort_min: QUICK
    icon: "🔄"
    keywords:
      - "iterate until"
      - "keep trying"
      - "until tests pass"
    max_iterations_default: 10
    completion_detection: promise_tags
    use_when: "Persistent iteration until success criteria met"
```

### verification

Verification capabilities.

```yaml
verification:
  browser:
    skill: Browser
    effort_min: STANDARD
    use_when: "Web application validation, visual verification"

  skeptical_verifier:
    traits: [skeptical, meticulous, adversarial]
    model: sonnet
    rule: "Must be different agent than executor"
    use_when: "Validate work against ISC criteria"
```

### agent_composition

Dynamic agent creation.

```yaml
agent_composition:
  factory:
    tool: AgentFactory
    location: ~/.claude/skills/Agents/Tools/AgentFactory.ts
    effort_min: STANDARD
  traits_file: ~/.claude/skills/Agents/Data/Traits.yaml
  use_when: "Need custom agent with specific trait combination"
```

### parallel

Parallel execution configuration.

```yaml
parallel:
  max_concurrent:
    QUICK: 1
    STANDARD: 3
    THOROUGH: 5
    DETERMINED: 10
  background_enabled: true
  spotcheck_required: true
  spotcheck_model: haiku
```

## Effort Unlocks Summary

```yaml
effort_unlocks:
  TRIVIAL:
    description: "Skip algorithm, direct response"
    capabilities: []

  QUICK:
    description: "Single-step, fast execution"
    capabilities:
      - models.haiku
      - execution.intern
      - execution.ralph_loop

  STANDARD:
    description: "Multi-step bounded work"
    capabilities:
      - models.haiku
      - models.sonnet
      - thinking.deep_thinking
      - analysis.first_principles
      - analysis.science
      - research.*           # single researcher
      - execution.intern
      - execution.engineer
      - execution.qa_tester
      - execution.designer
      - agent_composition
      - verification.browser
      - verification.skeptical_verifier

  THOROUGH:
    description: "Complex, multi-file work"
    capabilities:
      - all_standard
      - thinking.tree_of_thought
      - thinking.plan_mode
      - debate.council
      - research.*           # parallel researchers
      - execution.architect
      - execution.pentester

  DETERMINED:
    description: "Mission-critical, unlimited iteration"
    capabilities:
      - all_capabilities
      - models.opus
      - debate.redteam
```

## Adding Capabilities

### Step 1: Add to Category

```yaml
execution:
  # Existing capabilities...

  new_agent:
    subagent_type: NewAgent
    model: sonnet
    effort_min: STANDARD
    use_when: "Description of when to use"
```

### Step 2: Update Effort Unlocks

```yaml
effort_unlocks:
  STANDARD:
    capabilities:
      # Existing...
      - execution.new_agent
```

### Step 3: Update Documentation

Document the new capability in relevant skill SKILL.md.

## Capability Selection

The Algorithm selects capabilities based on:

1. **Effort level** - What's unlocked at current effort?
2. **Task type** - Research? Implementation? Validation?
3. **Complexity** - How many parallel agents needed?
4. **Stakes** - How critical is the outcome?

### Selection Example

```
User: "Implement dark mode" (STANDARD effort implied)

Available:
✅ models.haiku, models.sonnet
✅ execution.engineer, execution.qa_tester
✅ verification.browser
❌ models.opus (DETERMINED only)
❌ execution.architect (THOROUGH only)
❌ debate.redteam (DETERMINED only)

Selected:
- Engineer agent for implementation
- QA agent for testing
- Browser skill for visual verification
```

## Quick Reference

```
EFFORT LEVELS:
TRIVIAL    → Skip algorithm
QUICK      → haiku, Intern
STANDARD   → +sonnet, research, Engineer, QA
THOROUGH   → +Council, Architect, Pentester
DETERMINED → +opus, RedTeam, all

CATEGORIES:
models      → haiku, sonnet, opus
thinking    → deep_thinking, tree_of_thought, plan_mode
debate      → council (4 agents), redteam (32 agents)
analysis    → first_principles, science
research    → perplexity, gemini, grok, claude, codex
execution   → intern, architect, engineer, qa_tester, designer, pentester
verification → browser, skeptical_verifier

PARALLEL LIMITS:
QUICK: 1 | STANDARD: 3 | THOROUGH: 5 | DETERMINED: 10

REQUIRED PROPERTIES:
effort_min    → Minimum effort to unlock
use_for/when  → When to select this capability
```
