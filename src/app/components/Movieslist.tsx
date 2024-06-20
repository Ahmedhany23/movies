import Trending from "./Trending";
import Image from "next/image";
import headerimage from "@/app/assets/headerimage.webp";
export default function Movieslist() {
  return (
    <main className="  bg-[var(--blue-medium)] relative">
      <Trending />
    </main>
  );
}
