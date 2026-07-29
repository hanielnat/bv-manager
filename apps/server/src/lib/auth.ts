import { betterAuth, type DiscordProfile } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { openAPI } from "better-auth/plugins"
import { admin as adminPlugin } from "better-auth/plugins/admin"
import { db, schema } from "db"

import { ac, admin, recruiter, user } from "@/lib/permissions"

export const auth = betterAuth({
    appName: "BV",
    disabledPaths: ["/sign-up/email", "/sign-in/email"],

    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema: schema,
        usePlural: false,
    }),

    experimental: {
        joins: true,
    },

    user: {
        additionalFields: {
            discordId: {
                type: "string",
                required: false,
                input: true,
            },

            discordUsername: {
                type: "string",
                required: true,
                input: true,
            },

            discordDiscriminator: {
                type: "string",
                required: true,
                input: true,
            },

            discordAvatar: {
                type: "string",
                required: true,
                input: true,
            },
        },
    },

    emailAndPassword: {
        enabled: false,
    },

    socialProviders: {
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            disableSignUp: false,
            redirectURI: `${process.env.SERVER_BASE_URL as string}/api/auth/callback/discord`,

            mapProfileToUser: (profile: DiscordProfile) => {
                return {
                    discordId: profile.id,
                    discordUsername: profile.username,
                    discordDiscriminator: profile.discriminator, // #0000 tag
                    discordAvatar: profile.avatar
                        ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
                        : null,
                    email: profile.email ?? `${profile.id}@discord.placeholder.local`, // fallback for phone only accounts
                }
            },
        },
    },

    plugins: [
        adminPlugin({
            ac,
            defaultRole: "user",
            roles: {
                admin,
                user,
                recruiter,
            },
        }),
        openAPI(),
    ],
})

export type Auth = typeof auth
