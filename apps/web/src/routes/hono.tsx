import { createFileRoute } from "@tanstack/react-router"

import { getHono } from "#/api/server-functions"

export const Route = createFileRoute("/hono")({
    component: Hono,
    loader: async () => {
        const data = await getHono()
        return data
    },
})

function Hono() {
    const data = Route.useLoaderData()
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
            <p className="mt-10 text-lg">{JSON.stringify(data)}</p>
        </div>
    )
}
