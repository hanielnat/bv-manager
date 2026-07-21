import { createFileRoute, Link } from "@tanstack/react-router"

import { Container } from "#/components/layout/container"
import { NavBarLanding } from "#/components/layout/nav-landing"
import { AspectRatio } from "#/components/ui/aspect-ratio"
import { Button } from "#/components/ui/button"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
    return (
        <>
            <NavBarLanding />
            <main className="mx-auto grid min-h-screen grid-cols-1 border-x">
                <section className="mx-auto flex flex-row items-center gap-8 p-5 text-start text-5xl">
                    <Container className="flex flex-col gap-4">
                        <div className="text-start text-6xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>

                        <div className="text-primary bg-card text-2xl inline-2xs">
                            Maecenas elit enim, egestas.
                        </div>

                        <div className="mt-8 flex justify-start gap-4">
                            <Button variant="secondary" asChild>
                                <Link to="/sign-up" viewTransition={true}>
                                    Join
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link to="/">Know More</Link>
                            </Button>
                        </div>
                    </Container>

                    <Container className="w-full">
                        <AspectRatio
                            className="bg-card rounded-lg border p-px drop-shadow-lg"
                            ratio={16 / 9}
                        >
                            {/*"h-[9em] w-[16em]"*/}
                            <iframe
                                className="size-full rounded-lg border-0"
                                src="https://www.youtube-nocookie.com/embed/SWkdnz2KqMc?si=grOKE5nFht3nN4jh&amp;controls=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </AspectRatio>
                        {/*<div className="bg-card m-5 h-[9em] w-[16em] rounded-sm border">old</div>*/}
                    </Container>
                </section>

                <section>
                    <Container>Features section</Container>
                </section>

                <section>
                    <Container>Videos section</Container>
                </section>

                <section>
                    <Container>FAQ section</Container>
                </section>
            </main>

            <footer className="max-h-32">
                <Container className="bg-card h-16 justify-evenly border-t">
                    <div className="m-5">Socials</div>
                    <div className="m-5">About</div>
                    <div className="m-5">BV</div>
                    <div className="m-5">Terms of Use</div>
                    <div className="m-5">Privacy Policy</div>
                </Container>
            </footer>
        </>
    )
}
