"use client";
import MoviesGrid from "@/app/components/MoviesGrid";
import Pagination from "@/app/components/Pagination";
import { useCurrentPage } from "@/app/context/useCurrentPage";
import { useCategoryById } from "@/app/services/useCatgorieById";
export default function CategorieComponent({ id }: any) {
  const { currentPage } = useCurrentPage();
  const { data, isLoading } = useCategoryById(id, currentPage);



  return (
    <div className="pt-4 mb-10 container mx-auto mt-6">
      <MoviesGrid movies={data} isLoading={isLoading} />
      <Pagination count={data?.total_pages} />
    </div>
  );
}
