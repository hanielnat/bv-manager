import { createFileRoute } from "@tanstack/react-router"
import { env } from "cloudflare:workers"
import honoApp from "server/app"

export const Route = createFileRoute("/api/$")({
    server: {
        handlers: {
            ANY: async ({ request }) => {
                return honoApp.fetch(request, env)
            },
        },
    },
})
