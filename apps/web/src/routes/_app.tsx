import { createFileRoute, Outlet } from "@tanstack/react-router"

import { LandingPageFooter } from "#/features/landing/footer"
import { LandingPageHeader } from "#/features/landing/header"
import { LandingPageNav } from "#/features/landing/nav-landing"

export const Route = createFileRoute("/_app")({ component: Layout })

function Layout() {
    return (
        <div className="grid size-full min-h-screen">
            <LandingPageHeader className="sticky top-2 z-40 mx-auto w-2/3">
                <LandingPageNav className="mx-auto" />
            </LandingPageHeader>

            <Outlet />

            <LandingPageFooter />
        </div>
    )
}
