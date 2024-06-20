import { Dosis } from "next/font/google";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
const inter = Dosis({ subsets: [] });
export default function Navbar() {
  return (
    <nav className="py-6 fixed top-0 right-0  left-0 ">
      <div className="flex gap-[20px] flex-col lg:flex-row  lg:justify-between lg:items-center container mx-auto  ">
        <div>
          <Link href='/'> <h1 className={`text-[34px] text-[#f8f8f8]  font-light ${inter.className}`} >movie<strong className="font-semibold">pick</strong></h1></Link>
         
        </div>
        <form className=" mt-0   flex items-center   text-center relative">
          <input className="group searchinput bg-[var(--light-color)]   hover:bg-[var(--blue-dark)] focus:bg-[var(--blue-dark)] outline-none text-[var(--white)]  border-none  placeholder:text-[var(--white)]  text-lg font-light py-[4.5px] pr-[8px] pl-[16px] w-full lg:w-[300px] " type="search" name="" id="" placeholder="Search a movie" />
          <a className="min-h-[37px]  text-center py-2  group-hover:bg-[var(--blue-dark)]  bg-[var(--light-color)] hover:bg-[var(--blue-dark)] cursor-pointer duration-200 search h-full"><IoIosSearch className="text-[var(--white)] text-xl " /></a>
        </form>
      </div>
    </nav>
  );
}
