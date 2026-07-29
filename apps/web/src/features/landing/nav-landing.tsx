import { Link } from "@tanstack/react-router"
import { Calendar, Helicopter, House, Info, LayoutDashboard, UserPlus } from "lucide-react"

import { ThemeToggle } from "#/components/theme-toggler"
import { Button } from "#/components/ui/button"
import { cn } from "#/lib/utils"

export function LandingPageNav({ className, ...props }: { className?: string }) {
    return (
        <div className={cn(className)} {...props}>
            <div className="mr-auto ml-5 flex items-center gap-4">
                <Button asChild variant="ghost">
                    <div>
                        <Helicopter className="size-100 h-6.5 w-6.5" />
                        <span className="text-xl">BV</span>
                    </div>
                </Button>
            </div>

            <nav className="m-5 flex items-center justify-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                    <Link to="/">
                        <House /> Home
                    </Link>
                </Button>

                <Button variant="ghost" size="sm">
                    <Calendar />
                    <span>Events</span>
                </Button>

                <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard">
                        <LayoutDashboard /> Dashboard
                    </Link>
                </Button>

                <Button variant="ghost" size="sm">
                    <Info />
                    <span>About</span>
                </Button>
            </nav>

            <div className="mr-5 ml-auto flex items-center gap-4">
                <Button variant="ghost" size="sm">
                    Login
                </Button>

                <Button variant="outline" size="sm">
                    <UserPlus />
                    <span>Register</span>
                </Button>

                <ThemeToggle />
            </div>
        </div>
    )
}
