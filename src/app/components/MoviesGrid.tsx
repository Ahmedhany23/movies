import Link from "next/link"
import Image from "next/image"
import { FaStar } from "react-icons/fa";


const image = "https://image.tmdb.org/t/p/w500";
export default function MoviesGrid({movies}:any) {
  return (
    <div className=" grid md:gap-[20px] xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-content-center mx-auto">
    {movies &&
    movies.map((m: any, i: number) => (
      <div
        key={i}
        className=" px-2 md:w-[170px!important] hover:scale-95 duration-200 cursor-pointer "
      >
        <Link href={"/pages/details/" + m.id}>
          <Image
            src={image + m.poster_path}
            alt={m.title}
            width={1000}
            height={600}
            className=" md:w-[150px!important] md:h-[225px] rounded-xl "
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
  )
}