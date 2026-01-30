---
sidebar_position: 100
title: Site Changelog
---

# Site Changelog

Release notes for the PAI Documentation site itself (not PAI software releases).

For PAI software releases, see [PAI GitHub Releases](https://github.com/danielmiessler/PAI/releases).

---

## [1.2.0] - 2026-01-27

Phase 4: Developer Reference documentation.

### Enhanced

**How-To Guides**
- Create a Skill (`create-a-skill.md`) - Complete tutorial with SKILL.md format, workflows, tools, validation checklist
- Create a Pack (`create-a-pack.md`) - Full pack creation workflow with end-to-end requirement, templates
- Add Hooks (`add-hooks.md`) - All hook events, patterns for security/voice/logging, best practices

**Reference Pages**
- Hook API (`hook-api.md`) - Complete TypeScript interfaces, all events, matcher patterns, transcript format
- Skill Structure (`skill-structure.md`) - Full specification with naming conventions, flat structure, customization system
- Pack Structure (`pack-structure.md`) - Complete frontmatter spec, section limits, bundle structure
- Memory System (`memory-system.md`) - Full API with TypeScript code examples, retention policies
- Capabilities Registry (`capabilities-registry.md`) - Complete YAML spec with all categories, effort unlocks

---

## [1.1.0] - 2026-01-27

Phase 3: User Advanced documentation.

### Added

**How-To Guides**
- Configure Voice Notifications (`configure-voice.md`) - Voice server setup, ElevenLabs integration, agent-specific voices
- Use the Memory System (`use-memory-system.md`) - WORK/, LEARNING/, STATE/ directories, session tracking

### Enhanced

**How-To Guides**
- Use the Algorithm - Added 7-phase breakdown, ISC scaling table, interview protocol, practical examples
- Create Custom Agents - Added trait categories, named agents table, voice integration section

**Explanation Pages**
- Algorithm Philosophy - Added ISC importance, iteration loops, verification philosophy
- Effort Classification - Added full capability matrix, detection keywords, trait modifiers

---

## [1.0.0] - 2026-01-27

Initial public release of the PAI Documentation site.

### Added

**Phase 1: Foundation**
- Landing page with PAI v2.4 overview
- Installation guide with three paths (Full Release, Bundle + Packs, Individual)
- Getting Started tutorial for new users
- "What is PAI?" explanation page

**Phase 2: User Core**
- Complete Packs Catalog (23 packs documented)
- Pack installation how-to guide
- Bundles reference page
- Skill System explanation
- 12 skill reference pages:
  - Research, OSINT, Council, RedTeam
  - FirstPrinciples, Telos, Recon, Fabric
  - BrightData, AnnualReports, System, CreateSkill

**Infrastructure**
- Docusaurus 3.9.2 with React 19
- Role-based Diataxis documentation structure (Users/Developers/Contributors)
- Playwright smoke tests (6 tests, Chrome-only)
- GitHub Pages deployment configuration

### Documentation Structure

```
docs/
├── intro.md                    # Landing page
├── changelog.md                # This file
├── users/
│   ├── tutorials/              # Step-by-step guides
│   ├── how-to/                 # Task-oriented guides
│   ├── reference/              # Technical specs
│   │   └── skills/             # 12 skill pages
│   └── explanation/            # Conceptual docs
├── developers/                 # Developer docs (placeholder)
└── contributors/               # Contributor docs (placeholder)
```

---

## Versioning

This site follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Restructure navigation or remove content
- **MINOR**: Add new pages or sections
- **PATCH**: Fix typos, broken links, clarifications

---

## Upcoming

**Phase 5: Developer Explanation**
- Architecture overview documentation
- CLI-first design rationale
- Delegation system explanation
- Security model documentation

**Phase 6: Contributors**
- Onboarding tutorial
- Pack submission guide
- Pack review criteria
