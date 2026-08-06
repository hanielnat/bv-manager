import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/join-application")({ component: Page })

function Page() {
    return <div className="bg-secondary flex size-full flex-1">Application form</div>
}
