import { Link } from "@tanstack/react-router"
import { Helicopter } from "lucide-react"

import { useAuth } from "#/components/providers/auth-provider"
import { ThemeToggle } from "#/components/theme-toggler"
import { Button } from "#/components/ui/button"
import DiscordButton from "#/components/ui/discord-button"
import { cn } from "#/lib/utils"

interface Props {
    className?: string
}

export function LandingPageNav({ className }: Props) {
    const { user, isPending, isAuthenticated, signIn, signOut } = useAuth()

    const handleSignIn = async () => {
        await signIn()
    }

    const handleSignOut = async () => {
        await signOut()
    }

    const loginComp = () => {
        return isAuthenticated ? (
            <div className="flex items-center gap-2">
                <div>
                    Bem-vindo novamente <b>{user?.name}</b>
                </div>
                <Button disabled={isPending} onClick={handleSignOut}>
                    Sair
                </Button>
            </div>
        ) : (
            <DiscordButton variant="default" size="lg" disabled={isPending} onClick={handleSignIn}>
                Continue com Discord
            </DiscordButton>
        )
    }

    return (
        <div className={cn(className)}>
            {/* Logo */}
            <div className="mr-auto ml-5 flex items-center gap-4">
                <Button asChild variant="ghost" size="lg">
                    <div>
                        <Helicopter className="size-100 h-6.5 w-6.5" />
                        <span className="text-xl">BV</span>
                    </div>
                </Button>
            </div>

            {/* Nav items */}
            <nav className="space-x-5 self-center">
                <Button variant="ghost" size="lg" asChild>
                    <Link to="/">Home</Link>
                </Button>

                <Button variant="ghost" size="lg">
                    <span>Eventos</span>
                </Button>

                <Button variant="ghost" size="lg" asChild>
                    <Link to="/dashboard">Dashboard</Link>
                </Button>

                <Button variant="ghost" size="lg">
                    <span>Sobre</span>
                </Button>
            </nav>

            {/* Sign-up */}
            <div className="mr-5 ml-auto flex items-center gap-4">
                {loginComp()}

                <ThemeToggle />
            </div>
        </div>
    )
}
