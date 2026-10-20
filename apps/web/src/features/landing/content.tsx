import { Container } from "#/components/layout/container"
import { Card, CardContent, CardFooter } from "#/components/ui/card.tsx"

export function Factions() {
    return (
        <div className="">
            <div className="flex gap-4">
                <Card className="">
                    <CardContent>
                        <img className="aspect-auto object-cover" src="/screenshot-1.png" />
                    </CardContent>

                    <CardFooter>
                        <pre>2ºBIL</pre>
                    </CardFooter>
                </Card>

                <Card className="">
                    <CardContent>
                        <img className="aspect-auto object-cover" src="/screenshot-2.jpg" />
                    </CardContent>

                    <CardFooter>
                        <pre>Coalizão</pre>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export function LandingPageContent() {
    return (
        <>
            <section className="mx-auto flex max-w-2/3 flex-col items-center gap-5 rounded-xl p-5 shadow-xl">
                <Container className="flex flex-col">
                    <Factions></Factions>
                </Container>
            </section>
            <section className="mx-auto flex max-w-2/3 flex-col items-center gap-5 p-5">
                <Container className="flex flex-col">
                    <pre>Videos section</pre>
                    <pre className="text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                        sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </pre>
                </Container>
            </section>
            <section className="mx-auto flex max-w-2/3 flex-col items-center gap-5 p-5">
                <Container className="flex flex-col">
                    Application CTA
                    <pre className="text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                        sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </pre>
                    <pre className="text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                        sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </pre>
                </Container>
            </section>
            <section className="mx-auto flex max-w-2/3 flex-col items-center gap-5 p-5">
                <Container className="flex flex-col">
                    <pre>FAQ section</pre>
                    <pre className="text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                        sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </pre>
                    <pre className="text-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                        sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </pre>
                </Container>
            </section>
        </>
    )
}
