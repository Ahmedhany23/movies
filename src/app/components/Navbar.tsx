"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Dosis } from "next/font/google";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
const inter = Dosis({ subsets: [] });

export default function Navbar() {
  const [searchParams]: any = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <nav className="py-3 z-10 relative ">
      <div className="flex gap-[20px] flex-col lg:flex-row  lg:justify-between lg:items-center container mx-auto  ">
        <div>
          <Link href="/">
            <h1
              className={`text-[34px] text-[#f8f8f8] font-light ${inter.className}`}
            >
              movie<strong className="font-semibold">pick</strong>
            </h1>
          </Link>
        </div>
        <form className="mt-0 flex items-center text-center relative">
          <input
            onChange={handleChangeInput}
            value={inputValue}
            className="group searchinput bg-[var(--light-color)] hover:bg-[var(--blue-dark)] focus:bg-[var(--blue-dark)] outline-none text-[var(--white)] border-none placeholder:text-[var(--white)] text-lg font-light py-[4.5px] pr-[8px] pl-[16px] w-full lg:w-[300px]"
            type="search"
            placeholder="Search a movie"
          />
          <Link
            className="min-h-[37px] text-center py-2 group-hover:bg-[var(--blue-dark)] bg-[var(--light-color)] hover:bg-[var(--blue-dark)] cursor-pointer duration-200 search h-full"
            href={`/pages/search?query=${inputValue}`}
          >
            <IoIosSearch className="text-[var(--white)] text-xl " />
          </Link>
        </form>
      </div>
    </nav>
  );
}