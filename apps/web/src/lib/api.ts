import { hc } from "hono/client"
import type { ApiType } from "server/app"

const getApiBase = () => {
    if (typeof window !== "undefined") return "/"
    return "http://localhost:3000"
}

export const apiClient = hc<ApiType>(getApiBase())
