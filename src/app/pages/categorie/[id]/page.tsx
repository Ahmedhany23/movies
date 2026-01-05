"use client";
import CategorieComponent from "@/app/components/Categories/CategorieById";
import CategoriesSwiper from "@/app/components/Categories/CategoriesSwiper";
import { useParams } from "next/navigation";

export default function Categorie() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="py-22 container mx-auto">
      <CategoriesSwiper id={id} />
      <CategorieComponent id={id} />
    </div>
  );
}
