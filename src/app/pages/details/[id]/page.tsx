"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import MovieCard from "@/app/components/MovieCard";
import Loading from "@/app/components/Loading";
export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`
        );
        setMovie(res.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    getMovie();
    getMovies();
  }, [id]);

  if (!movie) {
    return <Loading/>;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    tagline,
    overview,
    genres,
    vote_average,
  } = movie;

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : "";
  const posterUrl = poster_path ? imageBaseUrl + poster_path : "";

  return (
    <main
     
      className=" relative"
    >
      <div  style={{
        backgroundImage: `linear-gradient(rgba(16, 28, 45, 0.565) 8%, rgba(248, 248, 248, 0.02), rgb(62, 80, 91) 90%), url(${backdropUrl})`,
      }} className="  fixed min-h-screen w-full md:bg-[50%] bg-no-repeat bg-cover  top-0 bottom-0 left-0 right-0"></div>
      <div className="container mx-auto detailMovie-container relative top-[50px]">
        <div className="flex gap-10 mb-10">
          {poster_path && (
            <Image
              src={posterUrl}
              alt={title}
              width={198}
              height={297}
              className="rounded-xl"
            />
          )}
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-medium text-2xl">{title}</h1>
            <div className="flex">
              <div>
                <p className="pb-5">{tagline}</p>
                <p>{overview}</p>
                <div className="flex gap-3 py-3">
                  {genres.length > 0 &&
                    genres.map((g:any) => (
                      <div key={g.id}>
                        <p className="font-medium text-lg">{g.name}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mr-5 flex gap-2">
                <FaStar className="text-2xl text-[#e0b20f]" />
                <p>{vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">Similar movies</p>
          <div className="mt-5">
          <MovieCard movies={movies} path={"/pages/details/"} />
          </div>
          
        </div>
      </div>
    </main>
  );
}
