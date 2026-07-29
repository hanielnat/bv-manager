import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed")({
    beforeLoad: () => {},
    component: Page,
})

function Page() {
    return
}
