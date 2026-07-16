import { sql } from "drizzle-orm"

import { db } from "@/db"
import { usersTable } from "@/schema"

export function selectHelloWorld(): string {
    const query = sql`select "hello world" as text`
    const result = db.get<{ text: string }>(query)
    return result.text
}

export async function findUsers() {
    const [result] = await db.select().from(usersTable)
    return result
}
