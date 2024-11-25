import { BsFillTelephoneXFill } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { PiShieldCheckBold } from "react-icons/pi";

export default function Page2() {
  const features = [
    {
      icon: <FiDollarSign size={40} />,
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: <PiShieldCheckBold size={40} />,
      title: "CertiK",
      description:
        "We are Audited by CertiK. CertiK is the leading security-focused ranking platform.",
    },
    {
      icon: <BsFillTelephoneXFill size={40} />,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets.",
    },
    {
      icon: <HiOutlineAdjustmentsHorizontal size={40} />,
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price.",
    },
  ];

  return (
    <section className="p-20 px-32 z-50">
      <div className="text-center mb-12 z-50">
        <h2 className="text-5xl font-bold font-NeueMachina-Bold text-white z-50">
          Our <span className="text-yellow-500 z-50">Features</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0 z-50">
        {features.map((feature, index) => (
          <div 
          key={index}
          className="relative flex flex-col gap-5 bg-white bg-opacity-[0.02] p-6 rounded-2xl border border-slate-700 font-Raleway overflow-hidden group z-50"
        >
          <div className="flex">
            <div className="text-3xl p-3 rounded-full bg-white bg-opacity-10">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-sm text-slate-400">{feature.description}</p>
        
          {/* <!-- Smooth diagonal reflect effect --> */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cccf2fc9] to-transparent opacity-0 transform scale-150 rotate-45 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] transition-all duration-700 ease-out will-change-transform w-[200%] h-[200%]"></span>
        </div>
        
        ))}
      </div>
    </section>
  );
}
