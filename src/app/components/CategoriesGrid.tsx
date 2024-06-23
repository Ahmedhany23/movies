"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function CategoriesGrid() {
  const [categories, setCategories] = useState<any>([]);
  const getcategories = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );

    setCategories(res.data.genres);
  };
  useEffect(() => {
    getcategories();
  }, []);
  if (!categories) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto py-10">
      <p className="text-xl">Categories</p>
      <div className=" grid grid-cols-1  mx-auto sm:max-w-none  sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 text-center mt-5 gap-3">
        {categories.map((c: any) => (
          <div
            key={c.id}
            className="text-white px-5 py-4 bg-[var(--light-color)] rounded-2xl hover:scale-105 duration-200 "
          >
            <Link href={`/pages/categorie/${c.id}`}>{c.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
