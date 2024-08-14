"use client";
import { useState, useEffect } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Loading from "@/app/components/Loading";
import { getTrending } from "@/app/redux/actions/movieAction";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { useTrending } from "@/app/services/useTrending";

export default function Trending() {
  const { data, isLoading } = useTrending();

  return (
    <main className="container mx-auto py-32 lg:py-16">
      <p className="text-xl mb-4">Trending</p>
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesGrid movies={data} path={"pages/details/"} />
      )}
    </main>
  );
}
