---
sidebar_position: 2
---

# Contribution Philosophy

<!-- Source: ~/projects/pai/README.md:54-65, 991-1021 -->

Understanding the principles behind PAI contributions.

## The Mission

> **AI should magnify everyone—not just the top 1%.**

PAI exists to democratize access to self-learning AI infrastructure. Contributions should further this mission by:

- Making AI more accessible
- Solving real problems for real users
- Keeping the system open and free

## Modularity by Design

<!-- Source: ~/projects/pai/README.md:1082-1089 -->

PAI v2 is modular by design. This philosophy extends to contributions:

| Principle | Implication for Contributors |
|-----------|------------------------------|
| **Packs are independent** | Your pack should work standalone |
| **Start small** | Don't try to do everything |
| **Self-contained** | Minimize dependencies |

**The mistake of PAI v1** was trying to install everything at once. That creates fragile systems where one broken piece takes down the whole thing.

Your pack should:
- Install without requiring other packs (except pai-core-install)
- Work if other packs are missing
- Fail gracefully if dependencies unavailable

## Author Responsibility

Pack authors maintain their packs. This is a social contract:

1. **You built it, you support it** - Answer issues, fix bugs
2. **Keep it working** - Update for breaking changes
3. **Or hand it off** - If you can't maintain it, let someone else

This model keeps the ecosystem healthy without burdening core maintainers.

## Quality Over Quantity

We'd rather have 10 excellent packs than 100 mediocre ones.

**What makes an excellent pack:**
- Solves a real, common problem
- Just works (minimal configuration)
- Clear documentation
- Tested on fresh systems

**What we avoid:**
- Packs that require extensive setup
- Niche use cases with few users
- Duplicates of existing functionality

## Open Source Values

PAI is MIT licensed. Contributions should:
- Not introduce proprietary dependencies
- Not require paid services (optional integrations OK)
- Be usable by anyone, anywhere

## The Algorithm Connection

Contributions should align with [The Algorithm](../../developers/explanation/architecture-overview) philosophy:

- **Verifiable** - Can we test if it works?
- **Iterative** - Can it improve over time?
- **Learning** - Does it capture feedback?

The best packs make PAI better at learning and improving.

## Related

- [Tutorial: Contributing to PAI](../tutorials/onboarding)
- [What is PAI?](../../users/explanation/what-is-pai)
- [Architecture Overview](../../developers/explanation/architecture-overview)
