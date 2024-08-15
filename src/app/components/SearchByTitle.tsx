"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesGrid from "@/app/components/MoviesGrid";
import { getAllMovie, getPageBySearch } from "../redux/actions/movieAction";
import Loading from "./Loading";
import Pagination from "./Pagination";
import { useSearch } from "@/app/services/useSearch";
import { useCurrentPage } from "@/app/context/useCurrentPage";
export default function SearchByTitle() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { currentPage } = useCurrentPage();
  const { data, isFetching ,isLoading} = useSearch(query, currentPage);
  
  if(isLoading){
    return  <div className="min-h-screen flex items-center justify-center"><Loading/></div>
  }

  return (
    <div className="container mx-auto mt-32 lg:mt-16">
      <p className="text-2xl mb-5">Search Results</p>
      <MoviesGrid movies={data} isLoading={isFetching} />
      <Pagination  count={data.total_pages}/>
    </div>
  );
}
