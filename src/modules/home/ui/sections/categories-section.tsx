"use client";

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";

import { Suspense } from "react";
import { FilterCarousel } from "@/components/filter-carousel";
import { useRouter } from "next/navigation";

interface CategoriesSecionPropas {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSecionPropas) => {
  return (
    <Suspense fallback={<CategoriesSkeleton/>}>
      <ErrorBoundary fallback={<p>Error...</p>}>
                       <CategoriesSectionSuspence categoryId={categoryId}/>
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton =()=>{
    return <FilterCarousel isLoading data={[]} onSelect={()=>{} } />
}

 const CategoriesSectionSuspence = ({ categoryId }: CategoriesSecionPropas) => {
    const router =useRouter();

  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data =categories.map((categorie)=>({
    value:categorie.id,
    label:categorie.name,
  }));


  const onSlect = (value :string | null)=>{
    const url = new URL(window.location.href);
    if(value){
        url.searchParams.set("categoryId",value);
    } else {
        url.searchParams.delete("categoryId")
    }
    router.push(url.toString());
  }
  return<FilterCarousel value={categoryId} data={data} onSelect={onSlect}/>
};
