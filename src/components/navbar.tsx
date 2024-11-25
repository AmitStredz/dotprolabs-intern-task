import React from "react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-5 px-20 font-Raleway font-bold">
      {/* <div className="text-yellow-400 font-bold text-lg">Moonex</div> */}
      <img src="logo.png" className="w-60"></img>
      <nav className="flex gap-20">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#about" className="hover:text-yellow-400">
          About Us
        </a>
        <a href="#roadmap" className="hover:text-yellow-400">
          Roadmap
        </a>
        <a href="#faqs" className="hover:text-yellow-400">
          FAQs
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact Us
        </a>
      </nav>
      <button className="bg-yellow-400 text-black p-3 px-5 rounded-full hover:bg-yellow-300">
        Connect Wallet
      </button>
    </header>
  );
}
