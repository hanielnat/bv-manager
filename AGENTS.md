# BVManager — Project Definition for Agents

## Overview

BVManager is a player management tool for private community gaming (specifically Arma Reforger). It centralizes member data, automates server/Discord role management, and facilitates event scheduling.

The project is structured as a monorepo:

- `apps/web`: Website (Dashboard).
- `apps/bot`: Node.js Discord bot.
- `apps/server`: Main project backend (talks with discord bot, game and dashboard).
- `packages/shared`: Shared data between apps.

## Core Layers

1. **Website/Dashboard Layer**: Centralized C2 for community admins and user profiles.
2. **Discord Server Layer**: Bot for member registration, role management, and event notifications.
3. **Game Server Layer**: Integration with Arma Reforger for player stats, permissions, and admin actions.

## Code Standards

_(To be filled by the user)_

## Tech Stack

- **Framework**: To be filled
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Database**: Supabase PostgreSQL
- **Discord**: Discord.js 14
- **Package Manager**: pnpm
