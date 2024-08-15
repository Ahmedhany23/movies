"use client";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Pagination from "@/app/components/Pagination";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { getPage } from "@/app/redux/actions/movieAction";
import { useCategoryById } from "@/app/services/useCatgorieById";
import { useCurrentPage } from "@/app/context/useCurrentPage";
export default function CategorieComponent({ id }:any) {

  const [categories, setCategories] = useState(null);
  const [pages, setPages] = useState(null);
  const { currentPage } = useCurrentPage();
  const { data, isLoading , isFetching } = useCategoryById(id, currentPage);





  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="pt-4 mb-10 container mx-auto mt-6">
      <MoviesGrid movies={data} isLoading={isFetching} />
      <Pagination
        count={data.total_pages}
      />
    </div>
  );
}
