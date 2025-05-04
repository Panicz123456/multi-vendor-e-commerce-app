import { CustomCategory } from "@/lib/types"
import { Categories } from "./Categories"
import { SearchInputs } from "./SearchInputs"

interface Props {
  data: CustomCategory[]
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInputs data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  )
}