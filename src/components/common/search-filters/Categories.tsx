"use client"

import { Category } from "@/payload-types"
import { CategoryDropdown } from "./CategoryDropdown"

interface Props {
  data: any
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigatedHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}