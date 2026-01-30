---
sidebar_position: 10
title: BrightData
---
<!-- Source: ~/projects/pai/Packs/pai-brightdata-skill/src/skills/BrightData/SKILL.md -->

# BrightData Skill

Progressive URL scraping with four-tier fallback strategy. Automatically escalates through tiers when sites block access.

## Triggers

The BrightData skill activates when you say:
- "scrape this URL", "scrape [URL]"
- "fetch this URL", "fetch [URL]"
- "can't access this site", "site is blocking me"
- "bot detection", "CAPTCHA"
- "use Bright Data", "use browser to scrape"

## The Four-Tier Strategy

BrightData progressively escalates through access methods:

```
Tier 1 (WebFetch) → Tier 2 (Curl) → Tier 3 (Browser) → Tier 4 (Bright Data)
```

### Tier 1: WebFetch (Built-in)
- **Tool:** Claude Code's WebFetch
- **Speed:** ~2-5 seconds
- **Cost:** Free
- **Works for:** Public sites, no bot detection

### Tier 2: Curl with Chrome Headers
- **Tool:** Bash curl with comprehensive browser headers
- **Speed:** ~3-7 seconds
- **Cost:** Free
- **Works for:** Sites with basic user-agent filtering

### Tier 3: Browser Automation
- **Tool:** Browser skill's Playwright automation
- **Speed:** ~10-20 seconds
- **Cost:** Free
- **Works for:** JavaScript SPAs, dynamic content

### Tier 4: Bright Data MCP
- **Tool:** Bright Data's premium proxy network
- **Speed:** ~15-30 seconds
- **Cost:** Paid (requires Bright Data account)
- **Works for:** Anti-bot protected sites, CAPTCHAs

## Usage Examples

**Standard URL fetch (auto-escalates):**
```
Scrape this URL: https://example.com/article
```

**Skip to specific tier:**
```
Use browser to scrape https://example.com/spa-page
```

```
Use Bright Data to fetch https://heavily-protected-site.com
```

**When encountering blocks:**
```
I can't access this site, it's blocking me: https://example.com
```

## Escalation Logic

The skill automatically escalates when:

| Condition | Action |
|-----------|--------|
| 200 OK with content | Return content (success) |
| 403 Forbidden | Escalate to next tier |
| 429 Rate Limited | Escalate to next tier |
| CAPTCHA detected | Skip to Tier 4 |
| JavaScript required | Skip to Tier 3 |
| Cloudflare block | Skip to Tier 4 |

## Requirements

### Tier 1-3 (Free)
No additional setup required.

### Tier 4 (Bright Data)
Requires Bright Data account and API credentials:

```bash
# Add to ~/.claude/.env
BRIGHT_DATA_CUSTOMER_ID=your_customer_id
BRIGHT_DATA_ZONE=your_zone
BRIGHT_DATA_PASSWORD=your_password
```

## Integration

### Works With
- **Research** — Research skill escalates to BrightData when blocked
- **OSINT** — Company research when sites block access
- **Browser** — Tier 3 uses Browser skill automation

### Output Format
```markdown
## URL: https://example.com/article

**Tier Used:** 2 (Curl)
**Status:** Success

### Content
[Extracted content in markdown format]

### Metadata
- Title: Example Article
- Word Count: 1,234
- Extracted: 2024-01-15
```

## Notes

- Tiers 1-3 are free and work for most sites
- Tier 4 requires paid Bright Data subscription
- Respects robots.txt by default
- Rate limits to avoid detection
- Always check terms of service before scraping
