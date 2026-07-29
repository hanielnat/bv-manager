import { createFileRoute } from "@tanstack/react-router"
import honoApp from "server/app"

export const Route = createFileRoute("/api/$")({
    server: {
        handlers: {
            ANY: async ({ request }) => honoApp.fetch(request),
        },
    },
})
