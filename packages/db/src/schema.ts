import { relations } from "drizzle-orm/relations"
import * as t from "drizzle-orm/sqlite-core"
import { sqliteTable } from "drizzle-orm/sqlite-core"

// -------------------------------------------------------------------------------
//#region AUTH

export const user = sqliteTable("user", {
    // BetterAuth
    id: t.text("id").primaryKey(),
    name: t.text("name").notNull(),
    email: t.text("email").notNull().unique(),
    emailVerified: t.integer("email_verified").notNull(),
    image: t.text("image"),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),

    // -------------------------------------------------------------------------------
    // BetterAuth Admin

    role: t.text("role"),
    banned: t.integer("banned", { mode: "boolean" }),
    banReason: t.text("ban_reason"),
    banExpires: t.integer("ban_expires", { mode: "timestamp_ms" }),

    // -------------------------------------------------------------------------------
    // Rest

    /*
    roleId: t
        .integer()
        .notNull()
        .references(() => role.id, { onDelete: "cascade" }),
    */

    discordId: t.text("discord_id").notNull(),
    discordUsername: t.text("discord_username").notNull(),
    discordDiscriminator: t.text("discord_discriminator").notNull(),
    discordAvatar: t.text("discord_avatar").notNull(),
})

export const session = sqliteTable("session", {
    // -------------------------------------------------------------------------------
    // BetterAuth

    id: t.text("id").primaryKey(),
    userId: t
        .text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    token: t.text("token").notNull().unique(),
    expiresAt: t.integer("expires_at", { mode: "timestamp_ms" }).notNull(),

    ipAddress: t.text("ip_address"),
    userAgent: t.text("user_agent"),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),

    // -------------------------------------------------------------------------------
    // BetterAuth Admin

    impersonatedBy: t.text("impersonated_by"),
})

export const account = sqliteTable("account", {
    id: t.text("id").primaryKey(),

    userId: t
        .text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    accountId: t.text("account_id").notNull(),
    providerId: t.text("provider_id").notNull(),

    accessToken: t.text("access_token"),
    refreshToken: t.text("refresh_token"),

    accessTokenExpiresAt: t.integer("access_token_expires_at", { mode: "timestamp_ms" }),
    refreshTokenExpiresAt: t.integer("refresh_token_expires_at", { mode: "timestamp_ms" }),
    scope: t.text("scope"),
    idToken: t.text("id_token"),
    password: t.text("password"),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

export const verification = sqliteTable("verification", {
    id: t.text("id").primaryKey(),
    identifier: t.text("identifier").notNull(),
    value: t.text("value").notNull(),

    expiresAt: t.integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

//#endregion
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
//#region DATA

export const role = sqliteTable("role", {
    id: t.integer("id").primaryKey({ autoIncrement: true }),
    name: t.text("name").notNull().unique(),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

export const faction = sqliteTable("faction", {
    id: t.integer("id").primaryKey({ autoIncrement: true }),
    name: t.text("name").notNull(),
    factionKey: t.text("faction_key").notNull(),
})

export const rosterGroup = sqliteTable("rostergroup", {
    id: t.integer("id").primaryKey({ autoIncrement: true }),
    name: t.text("name").notNull(),
    type: t.text("type").notNull().default("SQUAD"),
    size: t.integer("size").default(4),
    memberCount: t.integer("member_count").default(0),

    factionId: t
        .integer("faction_id")
        .notNull()
        .references(() => faction.id),
    userId: t.text("user_id").references(() => user.id, { onDelete: "cascade" }),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

export const roster = sqliteTable("roster", {
    id: t.text("id").primaryKey(),
    groupId: t.integer("group_id").references(() => rosterGroup.id),

    schemaVersion: t.integer("schema_version").notNull().default(1),
    data: t.text("data", { mode: "json" }).notNull().default({}),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

export const application = sqliteTable("application", {
    id: t.text("id").primaryKey().$default(crypto.randomUUID),
    userId: t
        .text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),

    assignedRecruiterId: t
        .text("assigned_recruiter_id")
        .references(() => user.id, { onDelete: "cascade" }),
    state: t.text("state").default("APPLIED"),
    deniedReason: t.text("denied_reason"),

    schemaVersion: t.integer("schema_version").notNull().default(1),
    data: t.text("data", { mode: "json" }).notNull().default({}),

    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: t.integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})

//#endregion
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
//#region RELATIONS

export const userRelations = relations(user, ({ many }) => ({
    sessions: many(session),
    accounts: many(account),
}))

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}))

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}))

//#endregion
// -------------------------------------------------------------------------------

export const schema = {
    user,
    session,
    account,
    verification,

    role,
    faction,
    rosterGroup,
    roster,
    application,

    userRelations,
    sessionRelations,
    accountRelations,
}
