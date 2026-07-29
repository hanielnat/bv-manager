import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed/users/me")({ component: Page })

function Page() {
    return <div>Me</div>
}
