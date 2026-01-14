---
sidebar_position: 2
---

# How to Submit a Pack

<!-- Source: ~/projects/pai/README.md:993-1001 -->

Submit a new pack to the PAI repository.

## Overview

Contribute a pack that solves a real problem for PAI users.

## Prerequisites

- Forked PAI repository
- Working pack (tested locally)
- GitHub account

## Steps

### 1. Ensure Your Pack is Complete

Your pack must include:

| File | Purpose |
|------|---------|
| `README.md` | Overview, what it does, architecture |
| `INSTALL.md` | AI-assisted installation guide |
| `VERIFY.md` | Verification checklist |
| `src/` | Actual skill/hook files |

### 2. Follow the Template

Use [PAIPackTemplate.md](https://github.com/danielmiessler/Personal_AI_Infrastructure/blob/main/Tools/PAIPackTemplate.md) as your guide.

### 3. Test Thoroughly

Before submitting, verify:

```bash
# Fresh install test
rm -rf ~/.claude/skills/YourSkill
# Ask AI to install
"Install the pack from ./Packs/pai-your-skill/"
# Run verification
"Verify the YourSkill installation"
```

### 4. Create Pull Request

```bash
git add Packs/pai-your-skill/
git commit -m "Add pai-your-skill: [brief description]"
git push origin your-branch
```

Open PR with:
- **Title:** `Add pai-your-skill: [what it does]`
- **Description:** What problem it solves, how it works
- **Evidence:** Installation logs, verification output

### 5. Respond to Review

Reviewers may request changes. Address feedback promptly.

## Verification

Your PR is ready when:
- [ ] All required files present (README, INSTALL, VERIFY, src/)
- [ ] Passes local installation test
- [ ] Documentation is clear
- [ ] No hardcoded secrets or paths

## Troubleshooting

### PR not getting reviewed?

- Check if CI passes
- Ensure description is complete
- Ping maintainers if >7 days

### Installation fails for reviewers?

- Test on a fresh system (not just your machine)
- Check for hardcoded paths
- Verify all dependencies documented

## Related

- [Pack Review Process](../reference/pack-review)
- [Tutorial: Contributing to PAI](../tutorials/onboarding)
- [Pack Structure Reference](../../developers/reference/pack-structure)
