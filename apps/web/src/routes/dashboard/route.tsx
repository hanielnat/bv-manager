import { createFileRoute, Outlet } from "@tanstack/react-router"

import { AppSidebar } from "#/features/dashboard/app-sidebar"
import { SidebarInset, SidebarProvider } from "#/features/dashboard/sidebar"
import { SiteHeader } from "#/features/dashboard/site-header"

export const Route = createFileRoute("/dashboard")({ component: Layout })

function Layout() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="floating" />
            <SidebarInset>
                <SiteHeader />

                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}
