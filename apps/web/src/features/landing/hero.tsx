import { Link } from "lucide-react"

import { Container } from "#/components/layout/container"
import { Button } from "#/components/ui/button"

export function LandingPageHero() {
    return (
        <section className="mx-auto h-[calc(100dvh-3.5rem)] w-full max-w-2/3">
            <video
                autoPlay={false}
                muted
                loop
                playsInline
                className="absolute top-0 left-0 size-full max-h-screen max-w-screen object-cover"
            >
                <source src="bg-1080.webm" type="video/webm" />
            </video>

            <div className="dark:bg-background/90 bg-background/30 inset-shadow-md absolute top-0 left-0 size-full shadow-xl/50 shadow-inner contrast-200 saturate-50"></div>

            <Container className="mx-auto h-full items-center">
                <Container className="z-10 mr-4 flex max-w-1/2 min-w-1/2 flex-col gap-5">
                    <h1 className="overflow-hidden text-6xl">
                        Aqui o <b className="">MILSIM</b> é levado a{" "}
                        <b className="underline">SERIO</b>.
                    </h1>

                    <div className="text-primary text-xl">
                        Participe de operações virtuais organizadas usando doutrina real de forças
                        existentes em um cenário PvP.
                    </div>

                    <div className="mt-8 flex justify-start gap-5">
                        <Button variant="ghost" size="lg" asChild>
                            <Link to="/">Saiba Mais</Link>
                        </Button>

                        <Button
                            className="hover:ring-accent relative before:absolute before:-z-1 before:h-full before:w-full before:overflow-hidden before:bg-blue-500 before:p-6 hover:ring-4"
                            size="lg"
                            asChild
                        >
                            <Link to="/">Participar</Link>
                        </Button>
                    </div>
                </Container>

                <Container className="bg-card ml-4 h-1/2 w-full rounded-lg border p-px drop-shadow-lg">
                    <iframe
                        className="size-full rounded-lg border-0"
                        src="https://www.youtube-nocookie.com/embed/SWkdnz2KqMc?si=grOKE5nFht3nN4jh&amp;controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Container>
            </Container>
        </section>
    )
}
