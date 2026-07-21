import { serve } from "bun"
import { Hono } from "hono"
import { cors } from "hono/cors"

const serverPort = process.env.SERVER_PORT || 3000

const app = new Hono()
const api = new Hono(app)
    .basePath("/api")

    .use("*", cors())

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
