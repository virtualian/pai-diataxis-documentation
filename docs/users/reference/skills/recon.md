---
sidebar_position: 8
title: Recon
---
<!-- Source: ~/projects/pai/Packs/pai-recon-skill -->

# Recon Skill

Security reconnaissance, bug bounty, and attack surface mapping. Systematic enumeration of targets for authorized security testing.

## Triggers

The Recon skill activates when you say:
- "recon", "reconnaissance"
- "bug bounty", "bounty target"
- "attack surface", "map the attack surface"
- "subdomain enumeration", "find subdomains"
- "port scan", "service discovery"

## Use Cases

### Bug Bounty Research
Pre-engagement reconnaissance for authorized bug bounty programs.

### Attack Surface Mapping
Understanding the full exposure of an organization's infrastructure.

### Security Assessments
Initial information gathering phase for penetration tests.

## Workflows

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| **Passive** | OSINT-only, no direct contact | "passive recon", "no-touch recon" |
| **Active** | Direct enumeration (authorized only) | "active recon", "enumerate" |
| **Subdomain** | Subdomain discovery | "find subdomains", "subdomain enum" |
| **Technology** | Tech stack identification | "identify tech stack", "what's running" |

## Capabilities

### Passive Reconnaissance
- Certificate transparency logs
- DNS records analysis
- WHOIS information
- Wayback machine history
- GitHub/GitLab exposure
- Public cloud resources

### Active Reconnaissance
- Subdomain enumeration
- Port scanning
- Service fingerprinting
- Web technology detection
- API endpoint discovery

## Examples

**Bug bounty start:**
```
Recon for bug bounty: example.com (authorized target)
```

**Subdomain discovery:**
```
Find all subdomains for example.com
```

**Tech stack identification:**
```
What technologies is example.com running?
```

## Authorization Requirements

:::warning Authorization Required
The Recon skill is for authorized security testing only:
- Bug bounty programs with valid scope
- Penetration tests with written authorization
- Security assessments of your own infrastructure
:::

Before running active recon:
1. Confirm target is in scope
2. Document authorization
3. Respect rate limits and exclusions

## Output Format

```markdown
## Target: example.com

### Subdomains (15 found)
- api.example.com (A: 192.168.1.1)
- admin.example.com (CNAME: example.com)
- ...

### Technologies
- Cloudflare CDN
- Nginx
- React frontend
- Node.js API

### Open Ports
- 443/tcp: HTTPS (Nginx 1.21)
- 22/tcp: SSH (OpenSSH 8.9)

### Potential Entry Points
1. [High] Admin panel exposed at admin.example.com
2. [Medium] API versioning may expose old endpoints
3. [Low] Debug headers in response
```

## Integration

### Works With
- **OSINT** — Background research on organization
- **Research** — Technical documentation lookup
- **BrightData** — When targets block normal access

## Notes

- Always verify authorization before active scanning
- Respect robots.txt and security.txt
- Document all findings for responsible disclosure
- Rate limit requests to avoid detection/blocking
