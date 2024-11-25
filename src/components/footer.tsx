import { FaRedditAlien, FaTelegram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" p-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 z-50">
            <img src="/logo2.png" alt="Moonex Logo" className="w-32" />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-20 font-Raleway font-bold z-50">
          {/* <a className="relative hover:text-yellow-400 group cursor-pointer">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a> */}
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

        {/* Contact Section */}
        <div className="flex flex-col gap-5 items-center space-x-4 mt-4 md:mt-0 z-50">
          <h3 className="text-white font-NeueMachina-Bold text-[30px]">
            <span>Contact </span>
            <span className="text-yellow-500">Us</span>
          </h3>
          <div className="flex gap-5 justify-between w-full">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaRedditAlien size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition"
            >
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
