import * as React from "react"

import { cn } from "#/lib/utils"

interface Props {
    className?: string
    children?: React.ReactNode
}

export function Container({ className, children, ...props }: Props) {
    return (
        <div className={cn("flex justify-center gap-2", className)} {...props}>
            {children}
        </div>
    )
}
