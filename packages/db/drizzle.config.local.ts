import fs from "node:fs"
import path from "node:path"

import { defineConfig } from "drizzle-kit"

function localD1Path() {
    const base = path.resolve("../../apps/web/.wrangler/state/v3/d1/miniflare-D1DatabaseObject")
    const file = fs
        .readdirSync(base, { recursive: true, encoding: "utf8" })
        .find((f) => !f.includes("metadata"))

    if (!file) {
        throw new Error("No local D1 sqlite file, run wrangler/vite dev once first")
    }

    return path.join(base, file)
}

export default defineConfig({
    out: "./drizzle",
    schema: "./src/schema.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: localD1Path(),
    },
})
