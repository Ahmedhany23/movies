"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesGrid from "@/app/components/MoviesGrid";

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
    <main className="container mx-auto mt-32 lg:mt-16">
        <p className="text-xl mb-4">Trending</p>
        <MoviesGrid movies={movies}/>
     
    </main>
  );
}
