---
sidebar_position: 8
title: CLI Tools
---
<!-- Source: ~/projects/pai/website/docs/users/reference/cli-tools.md -->

# CLI Tools Reference

PAI provides TypeScript CLI tools for common operations.

## Philosophy

CLI tools over APIs:
- Reduces token usage (no schema overhead)
- Enables direct shell execution
- Simplifies debugging and testing

## Core Tools

### AgentFactory

Compose dynamic agents from traits.

```bash
bun run ~/.claude/skills/Agents/Tools/AgentFactory.ts \
  --traits "security,skeptical,adversarial" \
  --task "Review authentication code" \
  --output json
```

**Options:**
- `--traits` - Comma-separated trait list
- `--task` - Task description (infers traits if no --traits)
- `--output` - Output format (json, text)
- `--list` - Show all available traits

### Browse

Debug-first browser automation.

```bash
bun run ~/.claude/skills/Browser/Tools/Browse.ts <url|command> [args]
```

**Commands:**
- `<url>` - Navigate with full diagnostics
- `errors` - Console errors only
- `console` - All console output
- `network` - Network activity
- `failed` - Failed requests
- `click <selector>` - Click element
- `fill <selector> <value>` - Fill input
- `screenshot [path]` - Take screenshot
- `status` - Session info
- `restart` - Fresh session
- `stop` - Stop session

### ISCManager

Manage Ideal State Criteria tables.

```bash
bun run ~/.claude/skills/THEALGORITHM/Tools/ISCManager.ts <command> [options]
```

**Commands:**
- `create --request "..."` - Create new ISC
- `show` - Display current ISC
- `update --row N --status STATUS` - Update row status
- `capability --row N -c CAPABILITY` - Assign capability

### EffortClassifier

Classify request effort level.

```bash
bun run ~/.claude/skills/THEALGORITHM/Tools/EffortClassifier.ts \
  --request "Design the security architecture"
```

**Options:**
- `--request` - The request to classify
- `--override` - Force effort level (TRIVIAL, QUICK, STANDARD, THOROUGH, DETERMINED)

### AlgorithmDisplay

Visual display for algorithm execution.

```bash
bun run ~/.claude/skills/THEALGORITHM/Tools/AlgorithmDisplay.ts <command> [options]
```

**Commands:**
- `start EFFORT -r "request"` - Start with effort level
- `phase PHASE` - Transition to phase
- `show` - Show current status
- `effort LEVEL` - Show effort banner

### RenderTemplate

Render Handlebars templates.

```bash
bun run ~/.claude/skills/Prompting/Tools/RenderTemplate.ts \
  --template Templates/Briefing.hbs \
  --data data.yaml \
  --output output.md
```

### Generate (Art)

Generate images.

```bash
bun run ~/.claude/skills/Art/Tools/Generate.ts \
  --model nano-banana-pro \
  --prompt "Technical diagram of auth flow" \
  --size 2K \
  --aspect-ratio 16:9 \
  --output ~/Downloads/diagram.png
```

## Tool Location

All tools live in skill directories:
```
~/.claude/skills/[SkillName]/Tools/[ToolName].ts
```

## Running Tools

Use `bun run` for TypeScript execution:
```bash
bun run /path/to/tool.ts [args]
```
