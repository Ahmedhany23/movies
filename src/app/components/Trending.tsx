"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const image = "https://image.tmdb.org/t/p/w500";

export default function Trending() {
  const [movies, setMovies] = useState<any>([]);
  const getTrending = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US"
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div className=" container mx-auto ">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-semibold text-xl">Trending</h1>
        <button className="text-white border px-2 rounded-xl hover:bg-[var(--light-color)] duration-150">
          <Link href='/pages/trending'>See More</Link>
          
        </button>
      </div>
     <MovieCard movies={movies} path={"pages/details/"}/>
    </div>
  );
}
