---
sidebar_position: 5
title: Configure Voice Notifications
---
<!-- Source: ~/projects/pai/Packs/pai-voice-system/README.md -->

# How to Configure Voice Notifications

Give your AI a voice with the PAI Voice System - hear completions and notifications instead of constantly checking the terminal.

## Prerequisites

- `pai-voice-system` pack installed
- macOS (uses `afplay` for audio)
- Optional: ElevenLabs API key for high-quality AI voices

## Quick Start

After installation, the voice server runs automatically. Test it:

```bash
curl -X POST http://localhost:8888/notify \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from PAI!"}'
```

You should hear your AI speak.

## Basic Usage

### Send a Notification

Any PAI component can trigger voice output:

```bash
curl -X POST http://localhost:8888/notify \
  -H "Content-Type: application/json" \
  -d '{"message": "Task completed successfully"}'
```

### Use Agent-Specific Voices

Different agents can have distinct voices:

```bash
# Engineer voice (male)
curl -X POST http://localhost:8888/notify \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Build completed with zero errors",
    "voice_id": "bIHbv24MWmeRgasZH58o",
    "title": "Engineer Agent"
  }'

# Designer voice (female)
curl -X POST http://localhost:8888/notify \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Design review complete",
    "voice_id": "MClEFoImJXBTgLwdLI5n",
    "title": "Designer Agent"
  }'
```

### Check Server Status

```bash
curl http://localhost:8888/health
```

Returns health info including which voice system is active (ElevenLabs or macOS fallback).

## Voice Configuration

### Set Up ElevenLabs (Optional)

For high-quality AI voices, add to `~/.env`:

```bash
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=bIHbv24MWmeRgasZH58o  # Default voice
```

Get a free API key at [elevenlabs.io](https://elevenlabs.io) (10,000 characters/month free).

Without an API key, the system falls back to macOS built-in voices.

### Voice IDs Reference

| Type | Voice ID | Use Case |
|------|----------|----------|
| Male | `bIHbv24MWmeRgasZH58o` | Engineer, Architect, technical agents |
| Female | `MClEFoImJXBTgLwdLI5n` | Designer, Writer, creative agents |
| Neutral | `M563YhMmA0S8vEYwkgYa` | Researcher, Analyst, neutral roles |

Browse more voices at the [ElevenLabs Voice Library](https://elevenlabs.io/voice-library).

### Customize Voice Personalities

Edit `~/.claude/VoiceServer/voices.json` to tune voice characteristics:

```json
{
  "default_volume": 0.8,
  "voices": {
    "engineer": {
      "voice_id": "bIHbv24MWmeRgasZH58o",
      "stability": 0.7,
      "similarity_boost": 0.8
    }
  }
}
```

- **stability** (0.0-1.0): Lower = more expressive, Higher = more consistent
- **similarity_boost** (0.0-1.0): Higher = closer to original voice

After changes, restart the server:

```bash
~/.claude/VoiceServer/restart.sh
```

## Server Management

| Command | Purpose |
|---------|---------|
| `~/.claude/VoiceServer/start.sh` | Start the server |
| `~/.claude/VoiceServer/stop.sh` | Stop the server |
| `~/.claude/VoiceServer/restart.sh` | Restart after config changes |
| `~/.claude/VoiceServer/status.sh` | Check if running |

The server auto-starts on login via macOS LaunchAgent.

## Integration with PAI

The voice system integrates with other PAI components:

- **Hooks** call the voice server when tasks complete
- **Custom agents** get unique voices based on personality traits
- **The Algorithm** announces phase transitions

You don't need to call the API manually - PAI components do it automatically.

## Troubleshooting

### No Sound

1. Check server is running: `~/.claude/VoiceServer/status.sh`
2. Check system volume isn't muted
3. Test with: `curl http://localhost:8888/health`

### ElevenLabs Not Working

1. Verify API key in `~/.env`
2. Check quota at [elevenlabs.io](https://elevenlabs.io)
3. Server falls back to macOS `say` if ElevenLabs fails

### Port Conflict

If port 8888 is in use, set a different port in `~/.env`:

```bash
PORT=8889
```
