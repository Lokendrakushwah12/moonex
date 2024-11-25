import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "You can get it by signing up.",
    },
    {
      question: "Do I get rewarded in tokens or ETH?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "You can get it by signing up.",
    },
  ];

  return (
    <section className="py-12 w-full justify-start items-center flex flex-col px-4 sm:px-12">
      <main className="bg-[#ffffff05] size-full max-w-[1000px] rounded-[10px] py-4">
        <h2 className="text-center text-[35px] font-bold text-[#F9D423]">
          FAQs
        </h2>
        <div className="mt-8 size-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-y border-[#BBBBBB]/10 -mb-[1px] size-full cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div
                className="p-4 flex w-full justify-between items-center hover:bg-[#ffffff1a] transition-colors duration-300"
              >
                <h3>{faq.question}</h3>
                <span>
                  {openIndex === index ? (
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="22.4788"
                        cy="22.4788"
                        r="22.4788"
                        fill="#D9D9D9"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M29.9937 22.0273H14.9937"
                        stroke="#FDFEFF"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="22.9851"
                        cy="23.4514"
                        r="22.4788"
                        fill="#D9D9D9"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M30.5 23H15.5"
                        stroke="#FDFEFF"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23 15.5V30.5"
                        stroke="#FDFEFF"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-[#BBBBBB]/10"
              >
                <p className="p-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default FAQ;