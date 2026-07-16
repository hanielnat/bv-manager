import { Hono } from "hono"

const app = new Hono()

app.get("/", async (c) => {
    return c.text("Hello world")
})

export default app
