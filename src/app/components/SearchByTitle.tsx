"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import MoviesGrid from "@/app/components/MoviesGrid";

export default function SearchByTitle() {
  const [movies, setMovies] = useState<any[]>([]);
 
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const getMoviesBySearch = async (query: string) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&query=${query}`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    if (query) {
      getMoviesBySearch(query);
    }
    else{
        getAllMovies();
    }
  }, [query]);

  return (
    <div className="container mx-auto mt:32 lg:mt-16">
    
        <p className="text-2xl mb-5">Search Results</p>
        <MoviesGrid movies={movies} />
      
    </div>
  );
}
