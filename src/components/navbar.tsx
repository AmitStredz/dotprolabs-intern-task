import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-5 px-20 font-Raleway font-bold">
      {/* <div className="text-yellow-400 font-bold text-lg">Moonex</div> */}
      <img src="logo.png" className="w-60 z-50"></img>
      <nav className="flex gap-20 z-50">
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
      <button className="relative bg-yellow-400 text-black hover:text-yellow-400 hover:text-yell px-6 py-3 rounded-full overflow-hidden group border border-yellow-400 z-50">
        <span className="relative z-10">Connect Wallet</span>
        <span className="absolute inset-0 bg-[#071624] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </button>
    </header>
  );
}
