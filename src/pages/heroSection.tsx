import React from "react";
import Navbar from "../components/navbar";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const HeroSection = () => {
  return (
    <div className="relative h-full w-screen bg-[#071624] overflow-hidden text-white  font-NeueMachina-Regular">
      {/* Rotating Solar System */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <div className="absolute w-full h-full rounded-full border-2 border-gray-500 opacity-30"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div> */}

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex justify-start items-end w-screen h-screen p-20">
        <div className="flex flex-col gap-5 justify-end h-full p-10">
          <div className="text-4xl md:text-7xl font-bold font-NeueMachina-Bold ">
            <h1>Trusted Multi-Chain</h1>
            <span className="text-yellow-400">DEX Platform</span>
          </div>
          <p className="text-gray-400 text-[20px]">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className=" flex space-x-4 font-Raleway font-bold text-[14px]">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300">
              Connect Wallet
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-black">
              Trade Crypto
            </button>
          </div>
        </div>
      </div>

      <Page1 />
      <Page2 />
      <Page3 />
      {/* Decorative Yellow Sphere */}
      {/* <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full shadow-xl"></div> */}
    </div>
  );
};

export default HeroSection;
