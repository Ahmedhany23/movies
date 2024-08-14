"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react";
import { ReactNode } from "react";


export default function QueryClientProviderComponent({children}:{children:ReactNode}) {
  const [queryClient] = useState(()=>new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}