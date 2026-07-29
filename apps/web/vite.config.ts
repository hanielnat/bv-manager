import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const config = defineConfig({
    resolve: { tsconfigPaths: true },

    build: {
        rolldownOptions: {
            external: ["bun", /^bun:/],
        },
    },

    plugins: [
        cloudflare({
            viteEnvironment: {
                name: "ssr",
            },
        }),

        devtools(),

        tailwindcss(),

        tanstackStart({
            router: {
                quoteStyle: "double",
                semicolons: false,
            },
        }),

        react(),
    ],
})

export default config
