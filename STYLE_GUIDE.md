# PAI Documentation Style Guide

Reference for content creators working on the PAI documentation site.

## Role-First Structure

Documentation is organized by **who you are**, not what you want to learn. Each role has distinct needs, mental models, and entry points.

### The Three Roles

| Role | One-Line | Mental Model |
|------|----------|--------------|
| **Users** | "I want to USE PAI" | PAI is a tool I interact with |
| **Developers** | "I want to BUILD ON PAI" | PAI is a platform I extend |
| **Contributors** | "I want to BUILD PAI" | PAI is a project I help create |

---

## Users

### Who Are Users?

**I am a User if:**
- I interact with PAI through conversation
- I install packs but don't create them
- I configure settings but don't write hooks
- I use skills but don't build them
- I care about outcomes, not implementation

**Mental model:** PAI is like a capable colleague. I talk to it, configure it, and use its capabilities. I don't need to know how it works internally.

### User Documentation Characteristics

- **Language:** Conversational, outcome-focused
- **Assumes:** PAI is installed and working
- **Avoids:** TypeScript, JSON schemas, file internals
- **Examples:** Natural language prompts, expected behaviors

### What Belongs in Users

| Content Type | Example Topics |
|--------------|----------------|
| Tutorials | Getting started, first workflow |
| How-tos | Install packs, use the algorithm, configure voice |
| Reference | Packs catalog, skill summaries, effort levels |
| Explanation | What is PAI?, how the algorithm thinks |

### What Does NOT Belong in Users

- Hook implementation details
- SKILL.md file format specifications
- TypeScript interfaces
- Directory structure internals
- API schemas

---

## Developers

### Who Are Developers?

**I am a Developer if:**
- I write code that PAI executes (skills, hooks, tools)
- I create packs for myself or others
- I need to understand file formats and APIs
- I debug using directory structures and logs
- I care about implementation, not just outcomes

**Mental model:** PAI is a platform with documented APIs. I build extensions that plug into its systems. I need to know the contracts.

### Developer Documentation Characteristics

- **Language:** Technical, precise
- **Assumes:** Programming experience, TypeScript familiarity
- **Includes:** File formats, schemas, TypeScript interfaces
- **Examples:** Code snippets, directory structures, CLI commands

### What Belongs in Developers

| Content Type | Example Topics |
|--------------|----------------|
| How-tos | Create a skill, create a pack, add hooks |
| Reference | SKILL.md format, hook API, memory system API |
| Explanation | Architecture overview, CLI-first design, security model |

### What Does NOT Belong in Developers

- Basic "how to use PAI" content (→ Users)
- Contribution workflows (→ Contributors)
- Pack review criteria (→ Contributors)

---

## Contributors

### Who Are Contributors?

**I am a Contributor if:**
- I submit PRs to the PAI repository
- I review others' pack submissions
- I help maintain the project
- I need to understand project conventions
- I care about the project's health, not just my extensions

**Mental model:** PAI is a community project I help build. I follow its conventions and help others do the same.

### Contributor Documentation Characteristics

- **Language:** Process-oriented, standards-focused
- **Assumes:** Developer-level technical knowledge
- **Includes:** Workflows, review criteria, conventions
- **Examples:** PR templates, review checklists

### What Belongs in Contributors

| Content Type | Example Topics |
|--------------|----------------|
| Tutorials | Onboarding, first contribution |
| How-tos | Submit a pack, respond to review feedback |
| Reference | Pack review criteria, naming conventions |
| Explanation | Why we build PAI this way, design philosophy |

### What Does NOT Belong in Contributors

- Technical specs (→ Developers > Reference)
- System architecture (→ Developers > Explanation)
- End-user guides (→ Users)

---

## Quick Decision Guide

**Where does this content go?**

```
Does the reader need to write code?
├── No → Users
└── Yes → Is the code for PAI itself or extending PAI?
    ├── Extending PAI (skills, packs, hooks) → Developers
    └── PAI itself (core, PRs, reviews) → Contributors
```

**Is this content too technical for Users?**

| If it mentions... | It probably belongs in... |
|-------------------|---------------------------|
| TypeScript interfaces | Developers > Reference |
| File paths like `~/.claude/skills/` | Developers (unless debugging tip) |
| YAML frontmatter format | Developers > Reference |
| PR review process | Contributors |
| Natural language prompts | Users |
| "Just ask PAI to..." | Users |

---

## Diataxis Within Each Role

Each role uses all four Diataxis content types:

| Type | Purpose | Style |
|------|---------|-------|
| **Tutorials** | Learning-oriented | "Let's build X together" |
| **How-tos** | Task-oriented | "To accomplish X, do Y" |
| **Reference** | Information-oriented | "X is defined as Y" |
| **Explanation** | Understanding-oriented | "X works because Y" |

### Common Mistakes

| Mistake | Example | Fix |
|---------|---------|-----|
| How-to with explanation | "Understanding the directory structure... Now let's create a skill" | Split into Explanation + How-to |
| Reference with opinions | "The best approach is..." | Move opinions to Explanation |
| Tutorial without learning | Step 1, Step 2, Step 3 (no context) | Add "why" at each step |

---

## Source Citations

Every documentation page should cite its source:

```markdown
<!-- Source: ~/projects/pai/Packs/pai-core-install/src/skills/CORE/SYSTEM/SKILLSYSTEM.md -->
```

This enables:
- Traceability for updates
- Verification against source
- Understanding the transformation applied

---

## Versioning

The site uses semantic versioning:

| Change | Version Bump | Example |
|--------|--------------|---------|
| Restructure navigation | MAJOR | Rename "Users" to "Operators" |
| Add new pages | MINOR | Add new skill reference |
| Fix typos, links | PATCH | Correct broken link |

Update `package.json` and `changelog.md` together.
