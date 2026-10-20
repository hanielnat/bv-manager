import { Link } from "@tanstack/react-router"

import { Container } from "#/components/layout/container"
import { Button } from "#/components/ui/button"
import Discord from "#/components/ui/svg/discord.tsx"
import { cn } from "#/lib/utils.ts"

export function LandingPageHero({ className }: { className?: string }) {
    return (
        <section className={cn("mx-auto h-[calc(100dvh-3.5rem)] w-full", className)}>
            <Container className="container flex flex-col items-start md:mx-auto md:h-full md:flex-row md:items-center">
                <Container className="z-10 mr-4 flex max-w-1/2 min-w-1/2 flex-col gap-4">
                    <h1 className="overflow-hidden text-6xl">
                        Aqui o <b className="">MILSIM</b> é levado a{" "}
                        <b className="underline">SERIO</b>.
                    </h1>

                    <div className="text-muted-foreground text-xl">
                        Participe de operações virtuais organizadas usando doutrina real de forças
                        existentes em um cenário PvP.
                    </div>

                    <div className="mt-8 flex justify-start gap-4">
                        <Button variant="ghost" size="lg" asChild>
                            <Link to="/">Saiba Mais</Link>
                        </Button>

                        <Button
                            className="hover:ring-accent relative before:absolute before:-z-1 hover:ring-4"
                            size="lg"
                            asChild
                        >
                            <Link to="/">
                                <Discord />
                                Participar
                            </Link>
                        </Button>
                    </div>
                </Container>

                <Container className="bg-card ml-4 size-max rounded-lg border p-px drop-shadow-lg md:ml-0">
                    <iframe
                        className="aspect-video rounded-lg border-0"
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
