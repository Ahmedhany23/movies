
import CategoriesGrid from "./components/CategoriesGrid";
import Movieslist from "./components/Movieslist";





export default function Home() {

  return (
    <main>
      <div className=" w-full my-[10vh] h-[250px] rounded-3xl container mx-auto recommend-container shadow-lg flex items-center justify-center text-center">
      <h1 className="text-white font-extralight text-4xl">Let us <strong className="  font-medium  py-[24px] mx-1">recommend</strong> a movie for you</h1>
      </div>
      <Movieslist/>
      <CategoriesGrid/>
    </main>
  );
}
