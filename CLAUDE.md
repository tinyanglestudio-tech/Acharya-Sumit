# Project: Acharya Sumit Website

## Critical Instructions

### Image / File Uploads
- When the user shares an image in chat, ALWAYS extract it directly from the conversation JSONL at `/root/.claude/projects/.../*.jsonl` using Python base64 decode, then commit via git or GitHub MCP.
- NEVER ask the user to upload files themselves or suggest alternative methods when the image can be extracted directly from the conversation.
- The user is primarily on mobile — do all file/upload work yourself.

### General
- Next.js website for Acharya Sumit (astrologer/numerologist/vastu).
- Development branch: `claude/awesome-clarke-3ELT0`
- Never waste the user's time with workarounds you can solve yourself.
