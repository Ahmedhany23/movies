"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { getCategories } from "@/app/redux/actions/movieAction";

export default function CategoriesGrid() {
  const [categories, setCategories] = useState<any>([]);
  const dispatch = useAppDispatch();


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCategories());
    };
    fetchData();
  }, [dispatch]);

  const list = useAppSelector((state) => state.categorieReducer.categories);

  useEffect(() => {
    setCategories(list);
  }, [list]);

  if (!categories.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto py-10">
      <p className="text-xl">Categories</p>
      <div className="grid grid-cols-1 mx-auto sm:max-w-none sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 text-center mt-5 gap-3">
        {categories.map((c: any) => (
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
