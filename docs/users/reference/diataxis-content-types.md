---
sidebar_position: 2
---

# Diataxis Content Types Reference

<!-- Source: pai-diataxis-documentation-skill/src/skills/Diataxis-Documentation/Standard.md:1-100 -->
<!-- Source: pai-diataxis-documentation-skill/README.md:46-81 -->

Reference for the four Diataxis content types.

## The Four Quadrants

```
                    PRACTICAL                    THEORETICAL
                 (doing/action)               (understanding)
              ┌─────────────────────┬─────────────────────┐
   LEARNING   │     TUTORIALS       │    EXPLANATION      │
   (acquiring)│  learning-oriented  │ understanding-orien │
              │  "Follow along..."  │ "This works by..."  │
              ├─────────────────────┼─────────────────────┤
   WORKING    │    HOW-TO GUIDES    │    REFERENCE        │
   (applying) │   task-oriented     │ information-orient  │
              │  "Do this to..."    │ "API: function()"   │
              └─────────────────────┴─────────────────────┘
```

## Content Type Definitions

<!-- Source: README.md:64-72 -->

| Type | Purpose | Audience State | Key Question |
|------|---------|----------------|--------------|
| **Tutorial** | Learning by doing | New to topic, needs guidance | "How do I get started?" |
| **How-to** | Solving a problem | Has goal, needs steps | "How do I accomplish X?" |
| **Reference** | Looking up facts | Knows what, needs details | "What are the parameters?" |
| **Explanation** | Understanding | Wants to understand why | "Why does this work?" |

## Tutorial

<!-- Source: Standard.md:42-101 -->

**Purpose:** Teach a newcomer by guiding them through steps to complete a meaningful project.

**Characteristics:**
- Learning by doing - user follows along
- Instructor-led - you decide what to teach
- Meaningful outcome - ends with something that works
- Safe environment - mistakes are expected

**Do:**
- Start with a working result, not theory
- Use second person ("you")
- Give explicit, complete steps
- Explain what will happen before each step

**Don't:**
- Don't explain how things work (link to Explanation)
- Don't offer choices (make decisions for the learner)
- Don't cover edge cases
- Don't assume prior knowledge

**Example titles:**
- "Tutorial: Build Your First API"
- "Getting Started with Authentication"

## How-to Guide

<!-- Source: Standard.md:104-166 -->

**Purpose:** Help an experienced user accomplish a specific task.

**Characteristics:**
- Goal-oriented - user has specific outcome in mind
- Assumes competence - user knows the basics
- Practical - steps to achieve a result
- Focused - does one thing well

**Do:**
- Start with clear goal statement
- Use numbered steps
- Be specific about what to do
- Include verification steps
- Cover common problems

**Don't:**
- Don't teach concepts (link to Tutorial or Explanation)
- Don't explain why (link to Explanation)
- Don't cover every edge case
- Don't assume unfamiliarity

**Example titles:**
- "How to Configure SSO"
- "How to Migrate from v1 to v2"

## Reference

<!-- Source: Standard.md:169-227 -->

**Purpose:** Provide accurate, complete technical description.

**Characteristics:**
- Factual - describes what is, not what to do
- Complete - covers everything
- Consistent - same structure throughout
- Austere - no opinions, no guidance

**Do:**
- Use consistent formatting
- Be exhaustive
- Include types, defaults, constraints
- Provide examples
- Keep descriptions factual

**Don't:**
- Don't explain why things work this way
- Don't give advice
- Don't include tutorials
- Don't vary the structure

**Example titles:**
- "Configuration Reference"
- "API Reference: /users endpoint"

## Explanation

<!-- Source: Standard.md:230-285 -->

**Purpose:** Help the user understand concepts, design decisions, and how things work.

**Characteristics:**
- Theoretical - about understanding, not doing
- Discursive - can explore topics
- Contextual - places things in perspective
- Illuminating - provides insight

**Do:**
- Provide context and background
- Explain "why" not just "what"
- Connect concepts to each other
- Discuss alternatives and trade-offs
- Use analogies when helpful

**Don't:**
- Don't give step-by-step instructions
- Don't be exhaustive (that's Reference)
- Don't assume practical context
- Don't focus on specific tasks

**Example titles:**
- "Understanding the Event Loop"
- "Why We Chose PostgreSQL"

## Decision Tree

<!-- Source: SKILL.md:102-112 -->

```
Is the user trying to LEARN something new?
├─ YES → Is it practical (hands-on)?
│        ├─ YES → TUTORIAL
│        └─ NO  → EXPLANATION
└─ NO  → Does the user have a specific GOAL?
         ├─ YES → HOW-TO GUIDE
         └─ NO  → REFERENCE
```

## See Also

- [How to Use the Diataxis Skill](../how-to/use-diataxis-skill)
- [Why Diataxis?](../../developers/explanation/why-diataxis)
