import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Page3() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "You can get a referral code by signing up on our platform.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "You can get a referral code by signing up on our platform.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#0b1120] text-white py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-yellow-500">FAQs</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-gray-700 py-4 ${
              index === activeIndex ? "bg-[#131a2a]" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <div className="text-gray-400">
                {index === activeIndex ? (
                  <FiMinus size={24} />
                ) : (
                  <FiPlus size={24} />
                )}
              </div>
            </div>
            {index === activeIndex && (
              <p className="mt-4 text-sm text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
