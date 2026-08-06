import { Container } from "#/components/layout/container"
import { cn } from "#/lib/utils"

export function LandingPageFooter({ className }: { className?: string }) {
    return (
        <footer className={cn("max-h-32", className)}>
            <Container className="bg-card h-16 justify-evenly border-t">
                <div className="m-5">Socials</div>
                <div className="m-5">BV</div>
                <div className="m-5">About</div>
            </Container>
        </footer>
    )
}
