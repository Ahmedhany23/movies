"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/pagination";
const image = "https://image.tmdb.org/t/p/w500";

export default function Trending() {
  const [movies, setMovies] = useState<any>([]);
  const getTrending = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US"
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div className=" container mx-auto mt-32">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-semibold text-xl">Trending</h1>
        <button className="text-white border px-2 rounded-xl hover:bg-[var(--light-color)] duration-150">
          See More
        </button>
      </div>
      <div className=" lg:mx-3  relative ">
        <div className="swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button-prev">
          <IoIosArrowBack />
        </div>

        <Swiper
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          speed={500}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full h-[300px]"
        >
          {movies.map((m: any, i: number) => (
            <SwiperSlide
              key={i}
              className=" px-2 w-[170px!important] hover:scale-95 duration-200 cursor-pointer "
            >
              <Link href={`pages/details/${m.id}`}>
                <Image
                  src={image + m.poster_path}
                  alt={m.title}
                  width={1000}
                  height={600}
                  className=" w-[150px!important] h-[225px] rounded-xl "
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
