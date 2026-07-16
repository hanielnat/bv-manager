import { REST, Routes, SlashCommandBuilder } from "discord.js"

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env
if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
    throw new Error("Set DISCORD_TOKEN, DISCORD_CLIENT_ID, and DISCORD_GUILD_ID in .env.local")
}

// the commands you want to register
const commands = [
    new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!").toJSON(),
]

const rest = new REST().setToken(DISCORD_TOKEN)

// register them in your test server
await rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), {
    body: commands,
})

console.log("Registered /ping")
