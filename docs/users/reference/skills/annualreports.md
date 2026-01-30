---
sidebar_position: 11
title: AnnualReports
---
<!-- Source: ~/projects/pai/Packs/pai-annualreports-skill/src/skills/AnnualReports/SKILL.md -->

# AnnualReports Skill

Aggregates and analyzes annual security reports from 570+ sources across the cybersecurity industry.

## Triggers

The AnnualReports skill activates when you say:
- "annual reports", "security reports"
- "threat reports", "industry reports"
- "update reports", "analyze reports"
- "vendor reports", "threat landscape"

## Data Source

Reports are sourced from [awesome-annual-security-reports](https://github.com/jacobdjwilson/awesome-annual-security-reports), a curated collection of security industry reports.

## Workflows

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| **Update** | Fetch latest sources from GitHub | "update annual reports" |
| **Analyze** | Analyze reports for trends | "analyze threat reports" |
| **Fetch** | Download specific reports | "get [vendor] report" |
| **List** | Show available reports by category | "list security reports" |

## Report Categories

### Analysis Reports (170+)

| Category | Reports | Examples |
|----------|---------|----------|
| **Global Threat Intelligence** | 56 | CrowdStrike, Microsoft, IBM, Mandiant |
| **Regional Assessments** | 11 | FBI, CISA, Europol, NCSC |
| **Sector Specific** | 13 | Healthcare, Finance, Energy, Transport |
| **Application Security** | 21 | OWASP, Veracode, Snyk, GitGuardian |
| **Cloud Security** | 11 | Google Cloud, AWS, Wiz, Datadog |
| **Vulnerabilities** | 14 | Rapid7, VulnCheck, Edgescan |
| **Ransomware** | 9 | Veeam, Zscaler, Palo Alto |
| **Data Breaches** | 6 | Verizon DBIR, IBM Cost of Breach |
| **Physical Security** | 6 | Dragos, Nozomi, Waterfall |
| **AI & Emerging Tech** | 11 | Anthropic, Google, Zimperium |

### Survey Reports (150+)

| Category | Reports | Examples |
|----------|---------|----------|
| **Industry Trends** | 68 | WEF, ISACA, Splunk, Gartner |
| **Executive Perspectives** | 7 | CISO reports, Deloitte, Proofpoint |
| **Workforce & Culture** | 5 | ISC2, KnowBe4, CompTIA |
| **Market Research** | 5 | IT Harvest, Recorded Future |
| **Identity Security** | 19 | CyberArk, Okta, SailPoint |
| **Penetration Testing** | 5 | HackerOne, Cobalt, Bugcrowd |
| **Privacy & Data Protection** | 8 | Cisco, Proofpoint, Drata |

## Usage Examples

**Update report sources:**
```
Update the annual reports from upstream
```

**List reports by category:**
```
List cloud security reports
```

**Analyze trends:**
```
Analyze the ransomware threat landscape based on 2024 reports
```

**Get specific report:**
```
Get the CrowdStrike Global Threat Report
```

**Compare reports:**
```
Compare findings from Verizon DBIR and IBM Cost of Breach
```

## CLI Tools

```bash
# Update sources from GitHub
bun run ~/.claude/skills/AnnualReports/Tools/UpdateSources.ts

# List all sources
bun run ~/.claude/skills/AnnualReports/Tools/ListSources.ts [category]

# Fetch a specific report
bun run ~/.claude/skills/AnnualReports/Tools/FetchReport.ts <vendor> <report-name>
```

## Integration

### Works With
- **Research** — Deep dive into specific topics from reports
- **RedTeam** — Validate security posture against threat data
- **OSINT** — Industry context for due diligence

### Data Files
- `Data/sources.json` — All report sources with metadata
- `Reports/` — Downloaded report files (PDFs, markdown)

## Notes

- Sources updated from upstream GitHub repository
- Reports downloaded on-demand to save space
- Trend analysis compares across multiple vendor reports
- Useful for threat briefings, security planning, and research
