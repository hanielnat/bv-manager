import { QueryClient, type QueryClient as QueryClientType } from "@tanstack/react-query"
import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"

import type { AuthContextType } from "#/components/providers/auth-provider"

import { routeTree } from "./routeTree.gen"

const createDefaultAuthContext = (): AuthContextType => ({
    isPending: false,
    isAuthenticated: false,
    signIn: async () => {},
    signOut: async () => {},
    user: undefined,
})

export interface RouterContext {
    auth: AuthContextType
    queryClient: QueryClientType
}

export function getRouter(auth?: Partial<AuthContextType>) {
    const resolvedAuth: AuthContextType = {
        ...createDefaultAuthContext(),
        ...auth,
    }
    const queryClient = new QueryClient()

    const router = createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: "intent",
        defaultPreloadStaleTime: 0,
        context: {
            auth: resolvedAuth,
            queryClient,
        },
    })

    setupRouterSsrQueryIntegration({ router, queryClient })

    return router
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof getRouter>
    }
}
