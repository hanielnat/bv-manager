import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// const serverPort = Number(process.env.SERVER_PORT || 3000)

const config = defineConfig({
    resolve: { tsconfigPaths: true },

    /*
    server: {
        headers: {
            "Content-Security-Policy": [
                "default-src 'self';",
                "script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173;",
                "style-src 'self' 'unsafe-inline';",
                "connect-src 'self' ws://localhost:5173 http://localhost:5173;",
            ].join(" "),
        },

        proxy: {
            "/api": {
                target: `http://localhost:${serverPort}`,
                changeOrigin: true,
                secure: false,
            },
        },
    },
    */

    plugins: [
        devtools(),

        tailwindcss(),

        tanstackStart(),

        viteReact(),
    ],
})

export default config
