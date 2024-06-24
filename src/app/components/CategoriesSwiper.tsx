"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { getCategories } from "../redux/actions/movieAction";

export default function CategoriesSwiper({ id }: any) {
  const [categories, setCategories] = useState<any[]>([]);
 
  const dispatch = useAppDispatch();

  useEffect(() => {
   
      dispatch(getCategories());
  
  });

  const list = useAppSelector((state) => state.categorieReducer.categories);
  useEffect(() => {
    setCategories(list);
  }, [list]);

  return (
    <div className="lg:mx-3 relative mt-10">
      <div className="swiper-button-next-categories">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button-prev-categories">
        <IoIosArrowBack />
      </div>

      <Swiper
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
