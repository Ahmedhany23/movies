"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

export default function CategoriesSwiper({ id }: any) {
  const [categories, setCategories] = useState<any[]>([]);
  const swiperRef = useRef<any>(null);

  const getCategories = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    setCategories(res.data.genres);
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  useEffect(() => {
    if (swiperRef.current) {
      const activeIndex = categories.findIndex((c) => c.id === id);
      if (activeIndex !== -1) {
        swiperRef.current.slideTo(activeIndex);
      }
    }
  }, [id, categories]);

  return (
    <div className="lg:mx-3 relative mt-10">
      <div className="swiper-button-next-categories">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button-prev-categories">
        <IoIosArrowBack />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        speed={700}
        navigation={{
          nextEl: ".swiper-button-next-categories",
          prevEl: ".swiper-button-prev-categories",
        }}
        className="flex"
      >
        {categories.map((c: any) => (
          <SwiperSlide
            key={c.id}
            className={`max-w-[120px] whitespace-nowrap text-white text-center px-2 py-4 rounded-2xl hover:scale-105 duration-200 ml-3 ${
              c.id == id ? "bg-[var(--blue-dark)]" : "bg-[var(--light-color)]"
            }`}
          >
            <Link href={`/pages/categorie/${c.id}`}>{c.name}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
