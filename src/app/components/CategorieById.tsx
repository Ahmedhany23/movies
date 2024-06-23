"use client";
import { useState, useEffect } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Pagination from "@/app/components/Pagination";
import Loading from "./Loading";
import { getPage } from "../redux/actions/movieAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
export default function CategorieComponent({ id }: any) {
  const [currentpage, setCurrentpage] = useState(1);
  const [categories, setCategories] = useState(null);
  const [pages, setPages] = useState(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPage(id, currentpage));
  });
  const Movie = useAppSelector((state: any) => state.movies);
  const pageCount = useAppSelector((state: any) => state.pageCount);
  useEffect(() => {
    setCategories(Movie);
    setPages(pageCount);
  }, [Movie, pageCount]);
  if (!categories) {
    return <Loading />;
  }
  if (categories) {
    return (
      <div className="pt-4 mb-10 container mx-auto mt-6  ">
        <MoviesGrid movies={categories} />
        <Pagination
          getPage={getPage}
          count={pages}
          currentpage={currentpage}
          id={id}
        />
      </div>
    );
  }
}
