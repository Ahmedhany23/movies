"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesGrid from "@/app/components/MoviesGrid";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie, getPageBySearch } from "../redux/actions/movieAction";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function SearchByTitle() {
  const [movies, setMovies] = useState<any[]>([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const dataSearch = useSelector((state: any) => state.movies);
  const pageCount = useSelector((state: any) => state.pageCount);

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") {
        await dispatch(getAllMovie(page));
      } else {
        await dispatch(getPageBySearch(query, page));
      }
    };

    fetchData();
  }, [query, page, dispatch]);

  useEffect(() => {
    setMovies(dataSearch);
    setPages(pageCount);
  }, [dataSearch, pageCount]);


  return (
    <div className="container mx-auto mt-32 lg:mt-16">
      <p className="text-2xl mb-5">Search Results</p>
      {movies.length >= 1 ? <MoviesGrid movies={movies} /> : <Loading />}
      <Pagination
        getPage={null}
        getPageBySearch={getPageBySearch}
        getAllMovie={query === "" ? getAllMovie : null}
        count={pages}
        currentpage={page}
        query={query}
        id={null}
      />
    </div>
  );
}
