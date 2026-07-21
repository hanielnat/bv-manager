import { createServerFn } from "@tanstack/react-start"

import { apiClient } from "@/lib/api"

export const getHono = createServerFn().handler(async (): Promise<{ message: string }> => {
    const res = await apiClient.api.hono.$get()
    return res.json()
})
