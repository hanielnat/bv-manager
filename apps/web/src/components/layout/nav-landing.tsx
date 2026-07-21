import { Calendar, Helicopter, House, Info, LayoutDashboard, UserPlus } from "lucide-react"

import { ThemeToggle } from "#/components/theme-toggler"
import { Button } from "#/components/ui/button"

export function NavBarLanding() {
    return (
        <header className="bg-card sticky top-0 z-50 flex max-h-14 flex-row items-center border-b drop-shadow-lg">
            <div className="m-5 ml-80 flex items-center gap-2">
                <Button asChild variant="ghost">
                    <div>
                        <Helicopter className="size-100 h-6.5 w-6.5" />
                        <span className="text-xl">BV</span>
                    </div>
                </Button>
            </div>

            <nav className="m-5 flex items-center justify-baseline space-x-2">
                <Button variant="ghost" size="sm">
                    <House />
                    <span>Home</span>
                </Button>

                <Button variant="ghost" size="sm">
                    <Calendar />
                    <span>Events</span>
                </Button>

                <Button variant="ghost" size="sm">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </Button>

                <Button variant="ghost" size="sm">
                    <Info />
                    <span>About</span>
                </Button>
            </nav>

            <div className="mr-80 ml-auto flex items-center gap-2">
                <Button variant="ghost" size="sm">
                    Login
                </Button>

                <Button variant="outline" size="sm">
                    <UserPlus />
                    <span>Register</span>
                </Button>

                <ThemeToggle />
            </div>
        </header>
    )
}
