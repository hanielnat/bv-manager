# BVManager - Project Definition for Agents

## Overview

BVManager is a player management tool and landing page for Boinas Verdes gaming community. It centralizes member data, automates server/Discord role management, and facilitates event scheduling.

The project is structured as a monorepo:

- `apps/web`: Website with landing page and management dashboard.
- `apps/bot`: Node.js Discord bot.
- `apps/server`: Main project backend (centralizes discord bot, dashboard and game data).
- `packages/db`: Project database schemas.
- `packages/shared`: Shared data between apps.

The frontend routes API calls to the backend trough a specific route (`apps/web/src/routes/api/$.ts`), then sends requests to Hono `app.fetch` with workers environment. With this, the Tanstack Start app is the main worker entrypoint.

```
bv-manager
├── apps
│   ├── bot
│   ├── server
│   │   └── src
│   │       ├── lib
│   │       ├── middlewares
│   │       └── routes
│   └── web
│       ├── public
│       └── src
│           ├── api
│           ├── components
│           │   ├── layout
│           │   ├── providers
│           │   └── ui
│           │       └── svg
│           ├── features
│           │   ├── dashboard
│           │   ├── join-application
│           │   └── landing
│           ├── hooks
│           ├── lib
│           └── routes
│               ├── api
│               ├── _authed
│               │   └── users
│               └── dashboard
├── data
├── docs
└── packages
    ├── db
    │   └── src
    │       └── queries
    └── shared
        ├── lib
        ├── schemas
        └── types
```

### Tech stack

- Base
    - Bun (as package manager)
    - Zod
    - Deployment in Cloudflare Workers

- Frontend
    - Vite
    - React
    - TailwindCSS
    - ShadCN
    - Tanstack Router
    - Tanstack Query
    - Tanstack Start

- Discord bot
    - discord.js

- Backend
    - Hono
    - BetterAuth
    - BetterAuth Admin

- Database
    - Drizzle ORM
    - Cloudflare D1

## Core Layers

1. **Website/Dashboard Layer**: Centralized C2 for community admins and user profiles.
2. **Discord Server Layer**: Bot for member registration, role management, and event notifications.
3. **Game Server Layer**: Integration with Arma Reforger for player stats, permissions, and admin actions.

## Code Standards

**TypeScript / TSX**

- 4-space indent
- Double quotes
- Single-line conditionals must have braces:

```ts
if (condition) {
    doThing()
} else {
    doOther()
}
```

**TSX Templates**

- 2-space indent
- One tag per line (preferred)

## Boundaries, Constraints and Best Practices

Constraints & Boundaries:

- **Refer to `docs/TODO.md` only** for tasks to work if no task were given. Ignore all TODOs in code.
- **Do not** introduce new heavy dependencies without asking first.
- **Before changing the stack** (new libraries, major version bumps, new frameworks): ask for confirmation and explain productivity gain.
- **Target scale**: 15-20 monthly active users max. Do not optimize for hundreds of users.

Best Practices:

- Check surrounding code for patterns, best practices, naming conventions and architectural choices in the file/directory of the work.
- Prefer extending existing patterns, over creating new ones.
- Break large changes into tracked steps, decompose substantial work into manageable subtasks. Track progress to prevent scope creep and missed items. Use TODO list tools to maintain a checklist.
- Batch multiple edits instead of sequential single edits. Use batch edit tools if available.
- Simple & readable > "future-proof"
- Favor clear names over explanatory comments
- Prefer to not write comments, only do when logic is important enough given the project goals to be explained
- No Unicode characters in comments, like arrow, bullet point and dashes, for example "→" or "←"
- No em-dashes in comments

**After doing changes on relevant files, update `docs/TODO.md` and `AGENTS.md`.**
