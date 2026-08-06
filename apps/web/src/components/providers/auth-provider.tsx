import type { BetterFetchError } from "better-auth/react"
import * as React from "react"

import { authClient, useSession, type User } from "#/lib/auth-client"

export interface AuthContextType {
    isPending: boolean
    isAuthenticated: boolean
    isRefetching: boolean
    signIn: (socialProvider?: string) => Promise<void>
    signOut: () => Promise<void>
    refetch: () => Promise<void>
    error: BetterFetchError | null
    user: User | undefined
}

const AuthContext = React.createContext<AuthContextType | null>(null)

interface AuthContextProps {
    children: React.ReactNode
}

export function AuthContextProvider({ children }: AuthContextProps) {
    const { data: session, isPending, error, isRefetching, refetch } = useSession()
    const user = session?.user
    const isAuthenticated = !!user

    const signIn = React.useCallback(async (socialProvider = "discord") => {
        const res = await authClient.signIn.social({
            provider: socialProvider,
        })

        if (res.error) {
            console.error(res.error)
        }
    }, [])

    const signOut = React.useCallback(async () => {
        await authClient.signOut()
        await refetch()
    }, [refetch])

    const value = React.useMemo(
        () => ({
            isPending,
            isAuthenticated,
            isRefetching,
            error,
            user,
            signIn,
            signOut,
            refetch,
        }),
        [isPending, isAuthenticated, isRefetching, error, user, signIn, signOut, refetch],
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}
