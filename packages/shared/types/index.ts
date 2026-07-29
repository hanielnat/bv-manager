import * as z from "zod"

export enum RolesMask {
    user = 1 << 1,
    admin = 1 << 2,
    recruiter = 1 << 3,
}

export type Roles = keyof typeof RolesMask

export enum AllowedPlatforms {
    PC,
    XBOX,
    PSN,
}

export type Platforms = keyof typeof AllowedPlatforms

export enum GameExperienceLevels {
    firstTime,
    starter,
    moderate,
    advanced,
    alreadyMember,
}

export enum WeekDays {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
}

export enum MilitaryQualification {
    inf0701,
}

export const applicationFormSchema = z.object({
    schemaVersion: z.number().nonnegative().default(1),

    age: z.number().nonnegative().max(100),
    platform: z.enum(AllowedPlatforms),
    hasMicrophone: z.boolean().default(false),
    gameExperience: z.enum(GameExperienceLevels),
    otherGroupParticipation: z.boolean().default(false),
    availableWeekdays: z.array(z.enum(WeekDays)),
    wantedQm: z.enum(MilitaryQualification),
    expectations: z.string().max(255),
    isVeteran: z.boolean().default(false),
})

export type ApplicationForm = z.infer<typeof applicationFormSchema>
