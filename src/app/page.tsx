import CategoriesGrid from "@/app/components/Categories/CategoriesGrid";
import Movieslist from "./components/Movieslist";
import Image from "next/image";
import header from "@/app/assets/headerimage.webp";
import Loading from "./components/Loading";

export default function Home() {

  return (
    <header>
      <div className=" relative  my-[10vh] h-[250px] md:w-full  container mx-auto  shadow-lg flex items-center justify-center text-center">
        <div className="overlay absolute top-0 left-0 bottom-0 right-0 w-full h-full  z-[1]  rounded-3xl"></div>
        <Image
          src={header}
          alt="image"
          className="absolute h-[250px]  md:w-full rounded-3xl z-0"
          loading="eager"
          priority
          width={700}
          height={300}
        />
        <h1 className="text-white font-extralight text-4xl z-10">
          Let us
          <strong className="  font-medium  py-[24px] mx-1">recommend</strong> a
          movie for you
        </h1>
      </div>
      <Movieslist />
      <CategoriesGrid />
    </header>
  );
}
