"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { getCategories } from "@/app/redux/actions/movieAction";
export default function CategoriesSwiper({ id }: any) {
  const [categories, setCategories] = useState<any[]>([]);
  const [swiperindex,setSwiperindex] = useState<any>(0)

  const dispatch = useAppDispatch();

  const handleClickRouter = (index:number) =>{

    setSwiperindex(index)
  }
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCategories());
    };
    fetchData();
  }, [dispatch]);

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
        initialSlide={swiperindex}
        key={id}
        spaceBetween={0}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        speed={700}
        slidesPerView="auto"
        navigation={{
          nextEl: ".swiper-button-next-categories",
          prevEl: ".swiper-button-prev-categories",
        }}
        className="flex"
      >
        {categories.map((c: any,i:number) => (
          <SwiperSlide
            key={c.id}
            className={`max-w-[120px] whitespace-nowrap text-white text-center px-2 py-4 rounded-2xl hover:scale-105 duration-200 ml-3 ${
              c.id == id ? "bg-[var(--blue-dark)]" : "bg-[var(--light-color)]"
            }`}
          >
            <Link href={`/pages/categorie/${c.id}`} onClick={(e)=>handleClickRouter(i)}>{c.name}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
