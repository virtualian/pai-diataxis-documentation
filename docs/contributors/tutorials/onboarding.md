---
sidebar_position: 2
---

# Tutorial: Contributing to PAI

<!-- Source: ~/projects/pai/README.md:991-1021 -->

Learn how to contribute to PAI by creating and submitting your first pack.

## What You'll Learn

By the end of this tutorial, you'll have:
- Forked the PAI repository
- Created a simple pack
- Tested it locally
- Submitted a pull request

## Prerequisites

- Git installed
- GitHub account
- PAI installed locally (for testing)
- Familiarity with PAI concepts (see [What is PAI?](../../users/explanation/what-is-pai))

## Steps

### Step 1: Fork the Repository

Go to [github.com/danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) and click **Fork**.

Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/Personal_AI_Infrastructure.git
cd Personal_AI_Infrastructure
```

### Step 2: Explore Existing Packs

Before creating your own, explore existing packs:

```bash
ls Packs/
```

Each pack follows a standard structure. Pick one and read through it:

```bash
ls Packs/pai-core-install/
cat Packs/pai-core-install/README.md
```

### Step 3: Create Your Pack Directory

Use the pack template as a starting point:

```bash
cp -r Tools/PAIPackTemplate.md Packs/pai-my-skill/README.md
mkdir -p Packs/pai-my-skill/src/skills/MySkill
```

### Step 4: Write Your Skill

Create the SKILL.md file:

```bash
cat > Packs/pai-my-skill/src/skills/MySkill/SKILL.md << 'EOF'
---
name: MySkill
description: Brief description of what this skill does
---

# MySkill

**Invoke when:** [triggers that activate this skill]

## Overview

[What this skill does]

## Examples

[Usage examples]
EOF
```

### Step 5: Create Installation Guide

Create INSTALL.md following the AI-assisted installation pattern:

```bash
# See Tools/InstallTemplate.md for the full template
```

### Step 6: Test Locally

Install your pack using AI:

```
"Install the pack from ./Packs/pai-my-skill/"
```

Verify it works:
- Does the skill get invoked correctly?
- Do all files get copied?
- Does verification pass?

### Step 7: Submit a Pull Request

Commit your changes:

```bash
git add Packs/pai-my-skill/
git commit -m "Add pai-my-skill pack"
git push origin main
```

Open a pull request on GitHub with:
- Clear description of what the pack does
- Testing evidence (screenshots, logs)
- Any dependencies or requirements

## What You've Learned

- PAI contribution workflow
- Pack structure and requirements
- AI-assisted installation pattern
- PR submission process

## Next Steps

- [How to Submit a Pack](../how-to/submit-pack) - Detailed submission guide
- [Pack Review Process](../reference/pack-review) - What reviewers look for
- [Create a Skill](../../developers/how-to/create-a-skill) - Skill development details
