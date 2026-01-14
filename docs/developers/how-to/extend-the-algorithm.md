---
sidebar_position: 4
title: Extend the Algorithm
---
<!-- Source: ~/projects/pai/website/docs/developers/how-to/extend-the-algorithm.md -->

# How to Extend the Algorithm

Add new capabilities to THE ALGORITHM.

## Prerequisites

- `pai-algorithm-skill` installed
- Understanding of the capability system

## Steps

### 1. Understand the Capability Registry

The source of truth is:
```
~/.claude/skills/THEALGORITHM/Data/Capabilities.yaml
```

### 2. Add a New Capability

Edit `Capabilities.yaml`:

```yaml
# === MY CUSTOM CAPABILITIES ===
custom:
  my_capability:
    skill: MySkill
    workflow: MainWorkflow
    effort_min: STANDARD
    use_when: "Need my custom functionality"
```

### 3. Define Effort Minimum

Choose the minimum effort level:

| Level | When to Require |
|-------|-----------------|
| QUICK | Simple, fast operations |
| STANDARD | Typical development work |
| THOROUGH | Complex, multi-step work |
| DETERMINED | Mission-critical operations |

### 4. Add to Effort Unlocks

Add your capability to the appropriate effort levels:

```yaml
effort_unlocks:
  STANDARD:
    capabilities:
      # ... existing ...
      - custom.my_capability
```

### 5. Update the ISC Manager (Optional)

If your capability needs special handling, update `ISCManager.ts`:

```typescript
case 'custom.my_capability':
  // Special handling for your capability
  break;
```

## Adding a New Research Agent

```yaml
research:
  my_researcher:
    subagent_type: MyResearcher
    model: sonnet
    effort_min: STANDARD
    use_when: "Research from my custom source"
```

## Adding a New Execution Agent

```yaml
execution:
  my_agent:
    subagent_type: MyAgent
    model: sonnet
    effort_min: STANDARD
    use_when: "Execute my custom tasks"
```

## Adding a New Thinking Mode

```yaml
thinking:
  my_thinking:
    skill: MyThinkingSkill
    workflow: DeepThink
    effort_min: THOROUGH
    use_when: "Complex reasoning with my approach"
```

## Testing Your Capability

1. Run the capability loader:
```bash
bun run CapabilityLoader.ts --effort STANDARD
```

2. Verify your capability appears in the output.

3. Test with a real task:
```
Algorithm effort STANDARD: [task that should use your capability]
```

## Best Practices

1. **Match effort to complexity** - Don't require DETERMINED for simple capabilities
2. **Clear use_when** - Make it obvious when to use the capability
3. **Test at each level** - Verify it works at the minimum and higher levels
4. **Document in matrix** - Update `Reference/CapabilityMatrix.md`
