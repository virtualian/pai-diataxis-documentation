---
sidebar_position: 2
---

# How to Use the Diataxis Documentation Skill

<!-- Source: pai-diataxis-documentation-skill/src/skills/Diataxis-Documentation/SKILL.md:77-91 -->

Use the Diataxis-Documentation skill to plan, organize, and create documentation following the Diataxis framework.

## Overview

The skill provides five workflows triggered by natural language:

| Say This | Workflow | Result |
|----------|----------|--------|
| "Set up docs for this project" | InitializeProject | Creates `docs/.diataxis.md` config |
| "Plan documentation" | PlanDocumentation | Gap analysis and doc plan |
| "Organize my docs" | OrganizeDocumentation | Restructures existing docs |
| "Create a scaffold for X" | CreateScaffold | Empty doc structure |
| "Generate content for X" | GenerateContent | Fills scaffold from sources |

## Prerequisites

- PAI installed with pai-core-install
- Diataxis-Documentation skill installed

## Steps

### 1. Initialize your project (first time only)

<!-- Source: SKILL.md:86 -->

```
"Set up documentation for this project"
```

The skill will ask about:
- Documentation technology (Docusaurus, MkDocs, etc.)
- Hosting platform (GitHub Pages, Vercel, etc.)
- Target audiences and their priorities
- Documentation sources

This creates `docs/.diataxis.md` with your configuration.

### 2. Plan your documentation

<!-- Source: SKILL.md:87 -->

```
"Plan documentation for this project"
```

The skill will:
- Read your config from `docs/.diataxis.md`
- Scan existing docs
- Map content to Diataxis categories
- Identify gaps based on role priorities
- Present a prioritized documentation plan

### 3. Create documentation

<!-- Source: SKILL.md:89-90 -->

For new documentation:

```
"Create a how-to guide for deploying to production"
```

The skill will:
1. Create a scaffold following Diataxis how-to structure
2. Extract content from your configured sources
3. Fill the scaffold with source-derived content
4. Add provenance comments tracking where content came from

### 4. Organize existing documentation

<!-- Source: SKILL.md:88 -->

If you have existing docs that need restructuring:

```
"Organize my docs into Diataxis structure"
```

The skill will:
- Analyze current docs
- Classify each by content type
- Propose new role-first structure
- Highlight mixed-content docs that should be split

## Verification

After any workflow, check:
- [ ] `docs/.diataxis.md` exists and reflects your choices
- [ ] Documentation follows role-first structure (`docs/users/`, `docs/developers/`, etc.)
- [ ] Content types are separated (tutorials don't explain theory, references don't give opinions)

## Troubleshooting

### Skill not responding to documentation requests

<!-- Source: SKILL.md:155-161 -->

The skill activates on these triggers:
- Creating/modifying documentation in `docs/`
- Setting up documentation sites
- Documentation planning and prioritization
- Structuring guides, tutorials, reference docs
- Questions about documentation methodology

If not activating, try being explicit: "Use the Diataxis skill to..."

### Config not found errors

Ensure `docs/.diataxis.md` exists. If not, run:
```
"Initialize documentation for this project"
```

## Related

- [Diataxis Content Types Reference](../reference/diataxis-content-types)
- [Understanding Diataxis](../../developers/explanation/why-diataxis)
