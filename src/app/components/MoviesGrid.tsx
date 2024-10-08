import Link from "next/link"
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import Loading from "./Loading";

const image = "https://image.tmdb.org/t/p/w500";

export default function MoviesGrid({movies,isLoading}:any) {
  if(isLoading){
    return <div className="min-h-screen flex items-center justify-center"><Loading/></div> 
  }
  return (
    <div className="flex justify-center">
         <div className="  grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 mx-auto gap-8 pb-20">
    {movies &&
    movies.results.map((m: any, i: number) => (
      <div
        key={i}
        className=" px-2 w-[200px] sm:w-[170px!important] hover:scale-95 duration-200 cursor-pointer "
      >
        <Link href={"/pages/details/" + m.id} prefetch={false}>
          <Image
            src={image + m.poster_path}
            alt={m.title}
            width={101}
            height={100}
            className="w-[200px] sm:w-[150px!important] h-[225px] rounded-xl transition-opacity opacity-0 duration-200 "
            onLoadingComplete={(image)=> image.classList.remove('opacity-0')}
            
          />
          <div className="flex flex-col mt-1  ">
            <p className="text-wrap m-w-[120px] overflow-hidden text-ellipsis font-light text-[14px] ">
              {m.title}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <FaStar className="text-[#e0b20f]" />
                <p>{m.vote_average.toFixed(1)}</p>
              </div>
              <div>
                <p>{m.release_date?.slice(0, 4)}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
    </div>
    </div>
 
  )
}
