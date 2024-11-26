import Navbar from "../components/navbar";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Footer from "@/components/footer";
import StarAnimation from "@/components/starAnimation";
import { RiShining2Fill } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="relative h-full w-screen bg-[#071624] overflow-hidden text-white  font-NeueMachina-Regular">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex justify-start items-end w-screen h-screen p-20">
        <div className="flex flex-col gap-5 justify-end h-full p-10 z-50">
          <div className="text-4xl md:text-7xl font-bold font-NeueMachina-Bold ">
            <h1>Trusted Multi-Chain</h1>
            <span className="text-yellow-400">DEX Platform</span>
          </div>
          <p className="text-gray-400 text-[20px]">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className=" flex space-x-4 font-Raleway font-bold text-[14px]">
            {/* <Button className="button-hover-animation">Connect Wallet</Button> */}
            <button className="relative bg-yellow-400 text-black hover:text-yellow-400 hover:text-yell px-6 py-3 rounded-full overflow-hidden group border border-yellow-400">
              <span className="relative z-10">Connect Wallet</span>
              <span className="absolute inset-0 bg-[#071624] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>
            <button className="relative bg-transparent text-yellow-400 hover:text-black hover:text-yell px-6 py-3 rounded-full overflow-hidden group border border-yellow-400">
              <span className="relative z-10">Trade Crypto</span>
              <span className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>

      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />

      <img
        src="/ellipse.png"
        className="absolute -top-[10%] -left-[20%] w-[80%]"
      ></img>
      <img
        src="/ellipse.png"
        className="absolute top-[8%] -right-[20%] w-[80%] opacity-70"
      ></img>
      <img
        src="/ellipse.png"
        className="absolute top-[35%] right-[25%] w-[60%] opacity-70"
      ></img>
      <img
        src="/ellipse.png"
        className="absolute bottom-[7%] -left-[30%] w-[60%] opacity-50"
      ></img>
      <img
        src="/ellipse.png"
        className="absolute bottom-[15%] -right-[30%] w-[60%] opacity-70"
      ></img>

      <img
        src="/SpiralLogo.svg"
        className="absolute -top-10 left-20 -rotate-12 "
      ></img>
      <div className="absolute top-24 right-[40rem] w-60 h-60 bg-gradient-to-br from-[#f1f1db] via-[#E3B30C] to-[#e7d69ad6] rounded-full z-50 hover:shadow-[0px_0px_40px_5px_rgba(255,255,0,0.7)] hover:shadow-yellow-300 transition-all  duration-500"></div>

      <div className="absolute top-0 left-0 w-screen h-full z-10">
        <StarAnimation />
      </div>

      <div className="absolute top-[40rem] left-[80rem]">
        <RiShining2Fill className="twinkling-star" />
      </div>
      <div className="absolute top-[10rem] left-[90rem]">
        <RiShining2Fill color="white" className="twinkling-star" />
      </div>
      <div className="absolute top-[20rem] left-[20rem]">
        <RiShining2Fill color="white" className="twinkling-star" />
      </div>
    </div>
  );
};

export default HeroSection;
