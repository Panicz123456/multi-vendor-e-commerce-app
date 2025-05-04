'use client'

import { ListFilterIcon, SearchIcon } from "lucide-react"
import { Input } from "../../ui/input"
import { CustomCategory } from "@/lib/types"
import { CategoriesSidebar } from "./CategoriesSidebar"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Props {
  disabled?: boolean
  data: CustomCategory[]
}

export const SearchInputs = ({ disabled, data }: Props) => {
  const [open, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar data={data} open={open} onOpenChange={setIsOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input className="pl-8" placeholder="Search products" disabled={disabled} />
      </div>
      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {/* TODO: Add library button */}
    </div>
  )
}