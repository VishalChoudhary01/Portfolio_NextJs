import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen dark:bg-[#1e1e1e bg-[#ffff]"></div>
    <main className="flexflex-col items-center justify-between container mx-auto px-12">
      <Navbar/>
      <About/>
    </main>
    </>
  );
}
