import moonexLogo from "../assets/moonexLogo.png";
import uniswapLogo from "../assets/uniswapLogo.png";
import comparisonLogo from "../assets/comparisonLogo.png";

export default function Page1() {
  const rows = [
    "Point no one",
    "Point no two this",
    "Point no two this",
    "Point no two this",
    "Point no two this",
  ];

  return (
    <div className="overflow-hidden h-full w-screen">
      {/* Section Heading */}
      <div className="w-full h-full flex flex-col gap-10 p-5 py-10 sm:p-32 font-NeueMachina-Regular z-50">
        <h2 className="text-3xl md:text-5xl font-NeueMachina-Bold">
          Why <span className="text-yellow-400">MoonEX </span>?
        </h2>

        {/* Comparison Table */}
        <div className="w-full bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl shadow-lg p-2 sm:p-10 z-50">
          <table className="w-full text-left border-collapse z-50">
            {/* Table Header */}
            <thead >
              <tr >
                {/* <th className="text-yellow-400 text-[28px] pb-4 font-NeueMachina-Bold">Comparison</th> */}
                <th className="text-yellow-400 pb-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={comparisonLogo}
                      alt="Moonex Logo"
                      className="w-56"
                    />
                  </div>
                </th>
                <th className="text-yellow-400  pb-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <img src={moonexLogo} alt="Moonex Logo" className="w-56" />
                  </div>
                </th>
                <th className="text-pink-600  pb-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={uniswapLogo}
                      alt="Uniswap Logo"
                      className="w-56"
                    />
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-[14px] sm:text-[16px]">
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="sm:py-8 sm:pl-4 text-gray-300">
                    {index + 1}. {row}
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-green-400 text-xl">✔</span>
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-red-500 text-xl">✘</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
