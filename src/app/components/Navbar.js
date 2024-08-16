import React from "react";
import Image from "next/image";
import { Ultra } from "next/font/google";
const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      id: "#home",
    },
    {
      title: "About Me",
      id: "#about",
    },
    {
      title: "Services",
      id: "#services",
    },
    {
      title: "Projects",
      id: "#projects",
    },
    {
      title: "Testimonials",
      id: "#testimonials",
    },
    {
      title: "Contacts",
      id: "#contacts",
    },
  ];
  return (
    <nav className="w-full flex justify-between items-center py-4">
      <section className="flex gap-x-1 justify-center items-center lg:text-3xl font-[Poppins]">
        <Image src="/images/FirstLetter.png" alt="" width={30} height={30} />
        <span className="font-semibold">M</span>
        <span className="text-[#818080] dark:text-slate-400 -ml-1">umair</span>
      </section>
      <section>
        <ul className="lg:flex lg:items-center hidden gap-x-4">
        {NavLinks.map((link,id)=>(
        <li key={id} className="">{link.title}</li>  
        ))}
        <button className="bg-[#fd6f00] font-semibold py-2 px-3 rounded-md text-white">Download CV</button>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
