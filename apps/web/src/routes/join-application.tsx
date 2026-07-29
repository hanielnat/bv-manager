import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/join-application")({ component: Page })

function Page() {
    return <div>Application form</div>
}
