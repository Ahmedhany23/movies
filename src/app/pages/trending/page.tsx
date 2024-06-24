"use client";
import { useState, useEffect } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Loading from "@/app/components/Loading";
import { getTrending } from "@/app/redux/actions/movieAction";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";

export default function Trending() {
  const [movies, setMovies] = useState<any>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrending());
  },[dispatch]);
  const dataMovies = useAppSelector((state: any) => state.moviesReducer.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <main className="container mx-auto mt-32 lg:mt-16">
      <p className="text-xl mb-4">Trending</p>
      {movies? (
        <MoviesGrid movies={movies} path={"pages/details/"} />
      ) : (
        <Loading />
      )}
    </main>
  );
}
