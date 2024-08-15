"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import MovieCard from "@/app/components/MovieCard";
import Loading from "@/app/components/Loading";
import {useMovieDetails} from "@/app/services/useMovieDetails"
import {useSimilarMovies} from "@/app/services/useSimilarMovies"
export default function Details() {
  const { id } = useParams();
 const {data : movie , isFetching} = useMovieDetails(id); 
 const {data : similar , isLoading: loadingsimilar} = useSimilarMovies(id); 


  if(isFetching){
    return (
      <main className=" relative">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(16, 28, 45, 0.565) 8%, rgba(248, 248, 248, 0.02), rgb(62, 80, 91) 90%)`,
          }}
          className="  fixed min-h-screen w-full md:bg-[50%] bg-no-repeat bg-cover  top-0 bottom-0 left-0 right-0"
        ></div>
        <div className="container mx-auto detailMovie-container relative top-[50px]">
          <div className="flex flex-col md:flex-row gap-10 mb-10 mx-auto">
            <div className="rounded-xl w-[198px] h-[297px] mx-auto md:mx-none bg-transparent backdrop-blur-sm">
            <Loading/>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="text-white font-medium text-2xl w-full  h-4  bg-transparent backdrop-blur-sm py-2 rounded-3xl"></div>
              <div className="flex flex-col gap-10">
               
                  <div className="pb-5 w-[300px] h-4   bg-transparent backdrop-blur-sm py-2 rounded-3xl"></div>
                  <div className="w-[300px] h-4   bg-transparent backdrop-blur-sm py-2 rounded-3xl"></div>
                
              </div>
            </div>
          </div>
          
            <div className="flex flex-col">
              <p className="text-2xl">Similar movies</p>
              <div className="mt-5">
              <Loading/>
              </div>
            </div>
         
        </div>
      </main>
    );
  }




  return (
    <main className=" relative">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(16, 28, 45, 0.565) 8%, rgba(248, 248, 248, 0.02), rgb(62, 80, 91) 90%)`,
        }}
        className="  fixed min-h-screen w-full md:bg-[50%] bg-no-repeat bg-cover  top-0 bottom-0 left-0 right-0"
      ></div>
      <div className="container mx-auto detailMovie-container relative top-[50px]">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          {movie.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={1000}
              height={297}
              priority={true}
              className="rounded-xl w-[198px] h-[297px] mx-auto md:mx-none"
            />
          )}
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-medium text-2xl">{movie.title}</h1>
            <div className="flex">
              <div>
                <p className="pb-5">{movie.tagline}</p>
                <p>{movie.overview}</p>
                <div className="flex gap-3 py-3">
                  { movie.genres &&
                    movie.genres.map((g: any) => (
                      <div key={g.id}>
                        <p className="font-medium text-lg">{g.name}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mr-5 flex gap-2">
                <FaStar className="text-2xl text-[#e0b20f]" />
                <p>{movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
        {similar && (
          <div className="flex flex-col">
            <p className="text-2xl">Similar movies</p>
            <div className="mt-5">
              <MovieCard movies={similar} path={"/pages/details/"} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
