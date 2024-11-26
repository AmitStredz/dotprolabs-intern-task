import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="w-full flex justify-between items-center p-3 sm:p-5 sm:px-10 lg:px-20 font-Raleway font-bold">
      {/* <div className="text-yellow-400 font-bold text-lg">Moonex</div> */}
      <img src="logo.png" className="w-32 sm:w-60 z-50"></img>
      <nav className="hidden md:flex gap-10 lg:gap-20 z-50 ">
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>

        <a className="relative hover:text-yellow-400 group cursor-pointer">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Roadmap
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          FAQs
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Contact Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
      </nav>
      <button className="relative bg-yellow-400 text-black text-[12px] sm:text-[16px] hover:text-yellow-400 hover:text-yell p-2 sm:px-4 lg:px-6 lg:py-3 rounded-full overflow-hidden group border border-yellow-400 z-50">
        <span className="relative z-10">Connect Wallet</span>
        <span className="absolute inset-0 bg-[#071624] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </button>
      <div className="flex md:hidden z-50">
        <HiMenu size={30} onClick={() => setIsMenu(!isMenu)} />
      </div>

      <div
        className={` fixed p-5 px-14 flex flex-col items-center justify-evenly h z-[10000] h-screen w-screen top-0 gap-10  transition-all bg-[#071624] ${
          isMenu ? "right-0" : "-right-[500%]"
        }`}
      >
        <div className="flex items-end w-full">
          <IoClose size={30} onClick={() => setIsMenu(!isMenu)} />
        </div>

        {/* <nav className="flex flex-col justify-evenly w-screen h-screen sm:hidden"> */}
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>

        <a className="relative hover:text-yellow-400 group cursor-pointer">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Roadmap
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          FAQs
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Contact Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        {/* </nav> */}
      </div>
    </header>
  );
}
