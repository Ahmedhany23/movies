"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import { getTrending } from "../redux/actions/movieAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

export default function Trending() {
  const [trending, setTrending] = useState<any>(null);
  const dispatch = useAppDispatch();


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTrending());
    }
    fetchData();
  }, [dispatch]);

  const dataMovies = useAppSelector((state: any) => state.moviesReducer.movies);


  useEffect(() => {
    setTrending(dataMovies);
  }, [dataMovies]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-semibold text-xl">Trending</h1>
        <button className="text-white border px-2 rounded-xl hover:bg-[var(--light-color)] duration-150">
          <Link href="/pages/trending" prefetch={false}>See More</Link>
        </button>
      </div>
      {trending ? (
        <MovieCard movies={trending} path={"pages/details/"} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
