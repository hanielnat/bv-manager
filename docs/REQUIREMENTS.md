# bv-manager — Requirements

## 1. What is this project?

<details>
<summary>Player managing tool for a private community</summary>

bv-manager is a website for managing community members and community events through receiving/sending data from/to Discord and Arma Reforger. The purpose of this is to centralize, track and automate member information for better management. This project will have three layers:

- Game server layer

Handles player specific attributes like roles, permissions, stats and persistence. Also has administration functionality for in server administration (kick and ban).

- Discord server layer

Is a discord bot that will handle member registration and aggregation. Will also give roles and permissions to members. Can handle administrative actions like the game server layer.

- Website/Dashboard layer

Will be the central point for communicating between the game and discord servers, will show aggregated data from the data sources and will be the source of thruth like a C2. Members will be able to login with discord and see their data that was collected through the game server and discord, admins will have administrative tools that will drain down to either of the data sources, a community member ban sent by the dashboard will ban the player from the game server and from the discord server for example.

</details>

---

## 2. Tech preferences

<details>

Language:

- Typescript

Stack:

- Next.js
- Node.js
- pnpm as package manager
- TailwindCSS
- Shadcn UI library
- Prisma ORM
- SQLite database (will use PostgreSQL in the future)

Dicord bot:

- discord.js

</details>

---

## 3. Core features

<details>
Not ordered in priority.

- Dashboard (admin views):

1. Receive and send player data/commands from/to the game server and discord server

    1.2. List registered users/players

    1.3. Remove/kick/ban registered users/players

    1.4. Change user/player roles and rank

    1.5. List online players

    1.6. List player stats

    1.7. Show server information

2. Receive and send community events from/to the game server and discord server

    2.1. List ongoing and future events

    2.2. Remove events

    2.3. Change event data

    2.4. Tack event attendence

    2.5. Schedule events

    2.6. Automatically notify termination of membership of a user if he doesn't attend X number of events

    2.7. Terminate membership of a user if the doesn't attend X number of events

    2.8. List player attended events

- Dashboard (events view):

1. Events need to be slottable, a member can slot in a specific slot with a role and rank

2. Events will have slot-in closed before the start of the event

3. Events will show a briefing (that will be done separated from this project) and have a de-briefing screen with player stats after the event ended

- Dashboard (user view):

1. List player attended events

2. List player stats

3. List ongoing and future events

4. Receive notifications about scheduled events

- Discord bot:

1. Schedule and create discord events coming from the dashboard layer

2. Send back member info to the dashboard layer

3. Handle user registration with a form

    3.1. The form must cosist of atleast a player ID that Arma Reforger already makes available for players, this will be a PK for users

    3.2. Automatically give default member roles after registration complete

4. Show server information, more specifically list online players

5. Administation tools like kick, ban and role changing

</details>

---

## 4. Commands / CLI surface

<details>
N/A
</details>

---

## 5. Inputs & outputs

<details>

**Inputs:**

- BVManager discord bot
- Arma Reforger BVManager mod

**Outputs:**

- Data/commands/events to BVManager discord bot and Arma Reforger mod

</details>

---

## 6. Constraints & edge cases

<details>

- The BVManager reforger mod is already made, so any functionality relating to it in the dashboard and discord bot can just be a stub or placeholder for now
- The BVManger reforger mod is a API client, so endpoints need to be exposed for it to consume and if sending data to it, there must be a polling endpoint with data that it can use

</details>

---

## 7. Anything else

<details>

- Inspired by Coalition but for my specific use-cases
- [Coalition website](https://www.coalitiongroup.net/)
- [CoalitionReforgerFramework mod repository](https://github.com/CoalitionArma/Coalition-Reforger-Framework)
- We should just setup the project structure fow now

</details>
