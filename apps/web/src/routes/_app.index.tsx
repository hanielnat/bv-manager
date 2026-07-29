import { createFileRoute } from "@tanstack/react-router"

import { LandingPageContent } from "#/features/landing/content"
import { LandingPageHero } from "#/features/landing/hero"

export const Route = createFileRoute("/_app/")({ component: Page })

function Page() {
    return (
        <>
            <LandingPageHero />
            <LandingPageContent />
        </>
    )
}
