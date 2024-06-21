"use client";
import Link from "next/link";
import axios from "axios";
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

export default function CategoriesSwiper({id}:any) {
    const [categories, setCategories] = useState<any>([]);
    const [active,setActive] = useState(false);
  const getcategories = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    console.log(res.data.genres);
    setCategories(res.data.genres);
  };
  useEffect(() => {
    getcategories();
  }, []);
  return (
    <div className=" lg:mx-3  relative  mt-10">
        <div className="swiper-button-next-categories">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button-prev-categories">
          <IoIosArrowBack />
        </div>

        <Swiper
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 7,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          speed={700}
          loop
          navigation={{
            nextEl: ".swiper-button-next-categories",
            prevEl: ".swiper-button-prev-categories",
          }}
          className="flex"
        >
          {categories.map((c:any) => (
        <SwiperSlide key={c.id} className={` max-w-[120px] whitespace-nowrap text-white text-center px-2 py-4 rounded-2xl hover:scale-105 duration-200 ml-3 ${c.id == id ? "bg-[var(--blue-dark)]" : " bg-[var(--light-color)]"}`}>
            <Link href={`/pages/categorie/${c.id}`}>
            {c.name}
            </Link>
          
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
  )
}
