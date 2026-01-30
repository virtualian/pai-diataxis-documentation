---
sidebar_position: 3
title: OSINT
---
<!-- Source: ~/projects/pai/Packs/pai-osint-skill -->

# OSINT Skill

Open source intelligence gathering for due diligence, background checks, and comprehensive research on companies and people.

## Triggers

The OSINT skill activates when you say:
- "OSINT", "open source intelligence"
- "due diligence", "vet this company"
- "background check", "research this person"
- "company intel", "investigate company"
- "who is [person]", "what do we know about"

## When to Use OSINT vs Research

| Scenario | Use This Skill |
|----------|---------------|
| General topic research | Research |
| Company due diligence | **OSINT** |
| Person background check | **OSINT** |
| Technical documentation | Research |
| Vendor evaluation | **OSINT** |
| News/article research | Research |
| Investment research | **OSINT** |

## Capabilities

### Company Intelligence
- Corporate structure and ownership
- Key personnel and leadership changes
- Financial indicators and funding history
- Public filings and regulatory records
- News and press coverage
- Social media presence analysis
- Competitor landscape

### Person Research
- Professional background and history
- Public records and affiliations
- Social media presence
- Published content and speaking
- Professional network mapping

### Vendor Evaluation
- Company stability indicators
- Customer reviews and reputation
- Technical capabilities assessment
- Security posture indicators

## Examples

**Company due diligence:**
```
OSINT: Evaluate [Company Name] as a potential vendor for cloud infrastructure
```

**Person background:**
```
Due diligence on [Name] - potential advisor for our startup
```

**Investment research:**
```
Investigate [Startup Name] - considering Series A investment
```

## Ethical Guidelines

The OSINT skill follows strict ethical guidelines:
- Only uses publicly available information
- Respects privacy boundaries
- Does not engage in social engineering
- Reports findings without speculation
- Notes confidence levels for each finding

## Integration

### Works With
- **Research** — For general research needs
- **AnnualReports** — For industry context
- **FirstPrinciples** — For analyzing findings

### Outputs
- Structured intelligence reports
- Source citations for all findings
- Confidence ratings per data point

## Notes

- OSINT is for ethical intelligence gathering only
- Always verify critical findings through multiple sources
- Results include source links for verification
- For person finding/reconnection, use PrivateInvestigator skill
