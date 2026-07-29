import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed/users/$userId")({
    params: {
        parse: (params) => ({
            userId: Number(params.userId),
        }),
        stringify: (params) => ({
            userId: String(params.userId),
        }),
    },
    component: Page,
})

function Page() {
    const { userId } = Route.useParams()
    return <div>{userId}</div>
}
