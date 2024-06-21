"use client";
import CategorieComponent from "@/app/components/CategorieById";
import CategoriesSwiper from "@/app/components/CategoriesSwiper";
import { useParams } from "next/navigation";


export default function Categorie() {
  const { id } = useParams();

  return (
    <div className="py-22 container mx-auto">
      <CategoriesSwiper id={id}/>
     <CategorieComponent id={id}/>
     
    </div>
  );
}