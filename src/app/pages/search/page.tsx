import Loading from "@/app/components/Loading";
import SearchByTitle from "@/app/components/SearchByTitle";
import { Suspense } from "react";

export default function Search() {
  return (
    <Suspense fallback={<Loading/>}><SearchByTitle/></Suspense>
  )
}
