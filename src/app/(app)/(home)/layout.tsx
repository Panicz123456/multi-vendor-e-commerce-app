import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Footer } from "@/components/common/Footer"
import { Navbar } from "@/components/common/Navbar"
import { SearchFilters, SearchFiltersLoading } from "@/components/common/search-filters/SearchFilters";
import { getQueryClient, trpc } from '@/trpc/server';
import { Suspense } from "react";

interface Props {
  children: React.ReactNode
}

async function Layout({ children }: Props) {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions()
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersLoading />}>
          <SearchFilters />
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1 bg-[#F4F4F0]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout