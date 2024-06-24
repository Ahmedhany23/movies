"use client";
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
export default function MovieCard({movies,path}:any) {
    
  return (
    <div className=" lg:mx-3  relative ">
        <div className="swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button-prev">
          <IoIosArrowBack />
        </div>

        <Swiper
          spaceBetween={0}
         slidesPerView="auto"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          speed={200}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full h-[300px]"
        >
          {movies && movies.map((m: any, i: number) => (
            <SwiperSlide
              key={i}
              className=" px-2 w-[170px!important] hover:scale-95 duration-200 cursor-pointer "
            >
              <Link href={path + m.id}  prefetch={false}>
                <Image
                  src={image + m.poster_path}
                  alt={m.title}
                  width={101}
                  height={100}
                  priority={true}
                   loading="eager"
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
  )
}
