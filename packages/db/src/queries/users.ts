import { sql } from "drizzle-orm"

import { type DbInstance } from "@/db"
import { user } from "@/schema"

export async function selectHelloWorld(db: DbInstance): Promise<string> {
    const query = sql`select "hello world" as text`
    const result = await db.get<{ text: string }>(query)
    return result.text
}

export async function findUsers(db: DbInstance) {
    const [result] = await db.select().from(user)
    return result
}
