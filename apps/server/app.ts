import { serve } from "bun"
import { Hono, type Env } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

import { auth } from "#/lib/auth"

const serverPort = process.env.SERVER_PORT || 3000

export interface AppEnv extends Env {
    Variables: {
        user: typeof auth.$Infer.Session.user | null
        session: typeof auth.$Infer.Session.session | null
    }
}

const app = new Hono<AppEnv>()
const api = new Hono(app)
    .basePath("/api")

    .use(
        "*",
        cors({
            origin: process.env.CLIENT_BASE_URL,
            allowHeaders: ["Content-Type", "Authorization"],
            allowMethods: ["POST", "GET", "OPTIONS"],
            exposeHeaders: ["Content-Length"],
            maxAge: 600,
            credentials: true,
        }),
    )

    // .use("*", authMiddleware)

    .use("*", logger())

    .on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw))

    .get("/hono", (c) => {
        return c.json({ message: "Hello from hono" })
    })

if (process.env.NODE_ENV === "production") {
    serve({ fetch: app.fetch, port: serverPort })
}

export type ApiType = typeof api

export default {
    port: serverPort,
    fetch: app.fetch,
}
