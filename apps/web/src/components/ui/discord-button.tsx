import { Button, type ButtonProps } from "#/components/ui/button"
import Discord from "#/components/ui/svg/discord"
import { cn } from "#/lib/utils"

export default function DiscordButton({ className, children, ...props }: ButtonProps) {
    return (
        <>
            <Button
                className={cn(
                    "bg-[#5862EC]",
                    "text-secondary",
                    "dark:text-primary",
                    "dark:hover:text-secondary",
                    className,
                )}
                {...props}
            >
                <Discord />
                {children}
            </Button>
        </>
    )
}
