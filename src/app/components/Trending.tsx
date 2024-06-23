"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../redux/actions/movieAction";



export default function Trending() {
  const [movies, setMovies] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);
  const dataMovies = useSelector((state: any) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <div className=" container mx-auto ">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-semibold text-xl">Trending</h1>
        <button className="text-white border px-2 rounded-xl hover:bg-[var(--light-color)] duration-150">
          <Link href="/pages/trending">See More</Link>
        </button>
      </div>
      {movies.length >= 1 ? (
        <MovieCard movies={movies} path={"pages/details/"} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
