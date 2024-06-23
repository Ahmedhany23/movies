"use client";
import { useState, useEffect } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Loading from "@/app/components/Loading";
import { useDispatch } from "react-redux";
import { getTrending } from "@/app/redux/actions/movieAction";
import { useSelector } from "react-redux";

export default function Trending() {
  const [movies, setMovies] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending());
  });
  const dataMovies = useSelector((state: any) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <main className="container mx-auto mt-32 lg:mt-16">
      <p className="text-xl mb-4">Trending</p>
      {movies.length >= 1 ? (
        <MoviesGrid movies={movies} path={"pages/details/"} />
      ) : (
        <Loading />
      )}
    </main>
  );
}
