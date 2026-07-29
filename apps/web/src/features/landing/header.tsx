import * as React from "react"

import { cn } from "#/lib/utils.ts"

interface Props {
    className?: string
    children: React.ReactNode
}

export function LandingPageHeader({ className, children }: Props) {
    return (
        <header
            className={cn(
                "bg-card/80 z-50 flex max-h-14 w-full flex-row items-center rounded-2xl border-b drop-shadow-lg backdrop-blur-lg",
                className,
            )}
        >
            {children}
        </header>
    )
}
