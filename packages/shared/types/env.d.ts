export declare module "bun" {
    interface Env {
        CLIENT_PORT: number
        SERVER_PORT: number

        BASE_URL: string
        SERVER_BASE_URL: string
        CLIENT_BASE_URL: string

        DATABASE_URL: string

        BETTER_AUTH_URL: string
        BETTER_AUTH_SECRET?: string

        DISCORD_TOKEN?: string
        DISCORD_CLIENT_ID?: string
        DISCORD_GUILD_ID?: string
    }
}
