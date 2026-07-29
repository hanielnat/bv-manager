import { join } from "node:path"

import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"

import { schema } from "./schema"

export const client = createClient({
    url: `file:${join(import.meta.dir, "..", "..", "..", "data", "dev.db")}`,
})

export const db = drizzle(client, { schema })
