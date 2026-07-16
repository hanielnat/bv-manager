import { Client, Events, GatewayIntentBits } from "discord.js"

const { DISCORD_TOKEN } = process.env
if (!DISCORD_TOKEN) {
    throw new Error("Set DISCORD_TOKEN in .env.local")
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// runs once, right after the bot connects
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Logged in as ${readyClient.user.tag}`)
})

// runs every time someone uses a slash command
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!")
    }
})

client.login(DISCORD_TOKEN)
