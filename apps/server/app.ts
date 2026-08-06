import { createD1, type DbInstance } from "db"
import { Hono } from "hono"
import { cors } from "hono/cors"

import { createAuth, type Auth } from "#/lib/auth"
import { authMiddleware } from "#/middlewares/auth"

export interface AppEnv {
    Bindings: {
        DB: D1Database
        BASE_URL: string
        BETTER_AUTH_URL: string
        BETTER_AUTH_SECRET: string
        DISCORD_CLIENT_ID: string
        DISCORD_CLIENT_SECRET: string
    }
    Variables: {
        db: DbInstance
        auth: Auth
        user: Auth["$Infer"]["Session"]["user"] | null
        session: Auth["$Infer"]["Session"]["session"] | null
    }
}

const app = new Hono<AppEnv>()
const api = new Hono<AppEnv>()
    .basePath("/api")

    .use("*", async (c, next) => {
        if (!c.env.DB) {
            return c.json({ error: "D1 binding is not present" }, 500)
        }

        c.set("db", createD1(c.env.DB))
        await next()
    })

    .use("*", async (c, next) => {
        const middleware = cors({
            origin: [c.env.BASE_URL],
            allowHeaders: ["Content-Type", "Authorization"],
            allowMethods: ["POST", "GET", "OPTIONS"],
            exposeHeaders: ["Content-Length"],
            maxAge: 600,
            credentials: true,
        })

        return middleware(c, next)
    })

    .use("*", async (c, next) => {
        const db = c.get("db")
        const auth = createAuth(db, {
            BASE_URL: c.env.BASE_URL,
            BETTER_AUTH_SECRET: c.env.BETTER_AUTH_SECRET,
            BETTER_AUTH_URL: c.env.BETTER_AUTH_URL,
            DISCORD_CLIENT_ID: c.env.DISCORD_CLIENT_ID,
            DISCORD_CLIENT_SECRET: c.env.DISCORD_CLIENT_SECRET,
        })

        if (!auth) {
            return c.json({ error: "better-auth server is not present" }, 500)
        }

        c.set("auth", auth)
        await next()
    })

    .use("/protected", authMiddleware)

    .on(["POST", "GET"], "/auth/**", (c) => {
        const auth = c.get("auth")
        return auth.handler(c.req.raw)
    })

    .get("/hono", (c) => {
        return c.json({ message: "Hello from hono" })
    })

app.route("/", api)

export type ApiType = typeof api

export default app
