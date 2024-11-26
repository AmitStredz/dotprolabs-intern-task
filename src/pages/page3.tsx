import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page3() {
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

  return (
    <section className="flex items-center justify-center w-screen h-full text-white p-3 py-16">
      <div className="bg-white bg-opacity-[0.02] rounded-xl p-3 sm:p-5 sm:w-[70%]">
        <div className="text-center mb-8">
          <h2 className="text-5xl  text-white">
            <span className="text-yellow-500 font-NeueMachina-Bold">FAQs</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5 font-Raleway z-50">
          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible key={index} className="z-50">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px] duration-500">{faq?.question}</AccordionTrigger>
                <AccordionContent className="text-slate-400">{faq?.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
