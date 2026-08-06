import type { DrizzleD1Database } from "drizzle-orm/d1"
import { drizzle } from "drizzle-orm/d1"

import { schema } from "./schema"

export type DbInstance = DrizzleD1Database<typeof schema>
export function createD1(d1: D1Database) {
    return drizzle(d1, { schema })
}
