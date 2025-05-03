import { Categories } from "./Categories"
import { SearchInputs } from "./SearchInputs"

interface Props {
  data: any
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInputs />
      <Categories data={data} />
    </div>
  )
}