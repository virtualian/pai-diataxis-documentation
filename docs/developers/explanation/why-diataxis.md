---
sidebar_position: 2
---

# Why Diataxis?

<!-- Source: pai-diataxis-documentation-skill/README.md:104-121 -->

Understanding why PAI uses the Diataxis framework for documentation.

## The Problem

<!-- Source: README.md:106-113 -->

Without a systematic documentation approach:

1. **Mixed Content** - Tutorials that explain too much, references that wander into opinions
2. **Unclear Audience** - Who is this documentation for? New users? Experts? Contributors?
3. **Inconsistent Structure** - Every doc organized differently, hard to navigate
4. **Missing Content** - No systematic way to identify gaps in documentation
5. **Maintenance Burden** - Hard to know where updates belong, content drifts over time

## The Solution

<!-- Source: README.md:115-121 -->

Diataxis provides:

1. **Clear Separation** - Each document has one purpose and serves one user need
2. **Role-First Organization** - Documentation organized by audience first, then by content type
3. **Consistent Structure** - Predictable patterns across all docs
4. **Gap Analysis** - The framework reveals what's missing
5. **Easy Maintenance** - Updates go to obvious locations

## The Insight

<!-- Source: Standard.md:9-29 -->

Diataxis is based on a key insight: documentation serves **four distinct user needs**, requiring **four distinct content types**.

| User Mode | Practical Need | Theoretical Need |
|-----------|---------------|------------------|
| **Learning** (acquiring knowledge) | Tutorial | Explanation |
| **Working** (applying knowledge) | How-to Guide | Reference |

A user reading a tutorial is in a different mental state than one looking up an API reference. Mixing content types creates friction.

## Anti-Patterns

<!-- Source: README.md:74-81 -->

Common documentation problems that Diataxis solves:

| Anti-Pattern | Problem | Diataxis Solution |
|--------------|---------|-------------------|
| Tutorial with too much explanation | Loses focus, overwhelms learner | Move explanation to separate doc, link to it |
| How-to that teaches concepts | User wants action, not theory | Link to tutorial/explanation instead |
| Reference with opinions | Mixes facts with guidance | Keep reference factual; guidance goes in how-to |
| Explanation with steps | Confuses understanding with doing | Split into explanation + how-to |

## Why Role-First Structure?

<!-- Source: Standard.md:297-326 -->

PAI extends Diataxis with **role-first structure**: organize by audience first, then by content type.

```
docs/
├── users/           # End users
│   ├── tutorials/
│   ├── how-to/
│   └── reference/
├── developers/      # API consumers, integrators
│   ├── how-to/
│   ├── reference/
│   └── explanation/
└── contributors/    # Project maintainers
    └── ...
```

This ensures:
- Users find content relevant to them without wading through developer docs
- Developers don't miss technical details buried in user guides
- Each role gets only the content types they need

## Source Fidelity Principle

<!-- Source: SKILL.md:30-48 -->

PAI's Diataxis implementation adds a critical principle: **documentation must be derived from sources, never invented**.

- **Extract and Transform** - Take information from code, specs, and existing docs; restructure for Diataxis
- **No Hallucination** - If sources don't cover something, flag it as a gap rather than inventing
- **Provenance Tracking** - Track which source informed which content
- **Cite Sources** - Use `<!-- Source: path/to/file:L10-L25 -->` comments

This prevents documentation drift and ensures accuracy.

## Trade-offs

**Benefits:**
- Systematic, scalable documentation
- Clear ownership and maintenance
- Reduced cognitive load for readers
- Framework for identifying gaps

**Costs:**
- Initial restructuring effort
- Requires discipline to maintain separation
- May feel rigid for small projects
- Learning curve for contributors

For PAI's scale and goals, the benefits outweigh the costs.

## Related

- [Diataxis Content Types Reference](../../users/reference/diataxis-content-types)
- [How to Use the Diataxis Skill](../../users/how-to/use-diataxis-skill)
- [Diataxis.fr](https://diataxis.fr/) - Official framework documentation
