import { Container } from "#/components/layout/container"

export function LandingPageFooter() {
    return (
        <footer className="max-h-32 self-end">
            <Container className="bg-card h-16 justify-evenly border-t">
                <div className="m-5">Socials</div>
                <div className="m-5">BV</div>
                <div className="m-5">About</div>
            </Container>
        </footer>
    )
}
