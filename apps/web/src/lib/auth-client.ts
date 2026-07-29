import { inferAdditionalFields } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    plugins: [
        inferAdditionalFields({
            user: {
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
        }),
    ],
})

export const useSession = authClient.useSession

export type Session = typeof authClient.$Infer.Session
export type User = typeof authClient.$Infer.Session.user
