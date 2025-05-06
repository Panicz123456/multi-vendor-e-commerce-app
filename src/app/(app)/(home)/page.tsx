'use client'

import { useQuery } from "@tanstack/react-query"

import { useTRPC } from "@/trpc/client"

export default function Page() {
  const trpc = useTRPC()
  const categories = useQuery(trpc.categories.getMany.queryOptions())

  return (
    <div>
      Home
    </div>
  )
}
