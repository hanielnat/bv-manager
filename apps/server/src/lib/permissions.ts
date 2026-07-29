import { createAccessControl } from "better-auth/plugins/access"
import { adminAc, defaultStatements, userAc } from "better-auth/plugins/admin/access"

export const statement = {
    ...defaultStatements,
    application: ["create", "delete", "update"],
} as const

export const ac = createAccessControl(statement)

export const user = ac.newRole({
    application: ["create"] as const,
    ...userAc.statements,
})

export const admin = ac.newRole({
    application: ["create", "update", "delete"] as const,
    ...adminAc.statements,
})

export const recruiter = ac.newRole({
    application: ["update"] as const,
})
