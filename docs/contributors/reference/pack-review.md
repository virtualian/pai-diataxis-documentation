---
sidebar_position: 2
---

# Pack Review Process

<!-- Source: ~/projects/pai/README.md:1002-1020 -->

Reference for how submitted packs are reviewed.

## Review Criteria

| Criterion | What Reviewers Check |
|-----------|---------------------|
| **Completeness** | All required sections present (README, INSTALL, VERIFY, src/) |
| **Code Quality** | Works as described, no obvious bugs |
| **Security** | No hardcoded secrets, follows best practices |
| **Usefulness** | Solves a real problem for users |

## Review Timeline

**Most packs reviewed within 7 days.**

If your PR hasn't been reviewed after 7 days:
1. Check CI status
2. Ensure description is complete
3. Comment on PR asking for review

## Required Files

### README.md

Must include:
- Pack name and description
- What problem it solves
- Architecture/file structure
- Credits/license

### INSTALL.md

Must include:
- AI agent instructions
- System analysis phase
- Installation steps
- Verification commands

### VERIFY.md

Must include:
- Checklist of what to verify
- Commands to run
- Expected output

### src/

Must include:
- Actual skill/hook files
- Proper directory structure

## Maintenance Commitment

<!-- Source: ~/projects/pai/README.md:1012-1020 -->

**Authors maintain their packs.** When you submit a pack, you're committing to:

| Responsibility | What It Means |
|----------------|---------------|
| Respond to issues | Answer questions about your pack |
| Fix bugs | Address reported problems |
| Consider features | Evaluate enhancement requests |
| Update for breaking changes | Keep pack working with PAI updates |

**Unmaintained packs:** If a pack becomes unmaintained, the community can fork and maintain a new version.

## See Also

- [How to Submit a Pack](../how-to/submit-pack)
- [Pack Structure Reference](../../developers/reference/pack-structure)
