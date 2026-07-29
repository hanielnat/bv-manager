import * as React from "react"

import { authClient, useSession, type User } from "#/lib/auth-client"

export interface AuthContextType {
    isPending: boolean
    isAuthenticated: boolean
    signIn: (socialProvider?: string) => Promise<void>
    signOut: () => Promise<void>
    user: User | undefined
}

const AuthContext = React.createContext<AuthContextType | null>(null)

interface AuthContextProps {
    children: React.ReactNode
}

export function AuthContextProvider({ children }: AuthContextProps) {
    const { data: session, isPending } = useSession()
    const [user, setUser] = React.useState<User | undefined>(session?.user)
    const isAuthenticated = !!user

    const signIn = React.useCallback(
        async (socialProvider?: string) => {
            if (!socialProvider) {
                socialProvider = "discord"
            }

            await authClient.signIn.social({
                provider: socialProvider,
            })

            setUser(session?.user)
        },
        [session?.user],
    )

    const signOut = React.useCallback(async () => {
        await authClient.signOut()
        setUser(undefined)
    }, [])

    return (
        <AuthContext.Provider value={{ isPending, isAuthenticated, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}
