"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { getCategories } from "@/app/redux/actions/movieAction";
import {useCategories} from '@/app/services/useCategories'
export default function CategoriesGrid() {
  const {data ,isLoading} = useCategories();
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto py-20">
      <p className="text-xl">Categories</p>
      <div className="grid grid-cols-1 mx-auto sm:max-w-none sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 text-center mt-5 gap-3">
        {data.genres.map((c: any) => (
          <div
            key={c.id}
            className="text-white px-5 py-4 bg-[var(--light-color)] rounded-2xl hover:scale-105 duration-200 whitespace-nowrap"
          >
            <Link href={`/pages/categorie/${c.id}`}  prefetch={false}>{c.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
