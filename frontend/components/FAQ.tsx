"use client";

import { faqArray } from "@/constants";
import Image from "next/image";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="bg-primary sm:px-[20px] px-[10px] rounded-[12px]">
      <div className="sm:h-[90px] h-full py-4">
        <div className="w-full h-full flex justify-between items-center">
          <h2 className="sm:text-[18px] text-[14px] font-medium">{question}</h2>
          <Image
            className={`${
              active ? "arrow-animation" : "arrow-animation-back"
            } object-fit cursor-pointer bg-[#252525] w-[40px] h-[40px] 
              p-3 rounded-full flex justify-center items-center`}
            src="/arrow.svg"
            alt="arrow icon"
            width={30}
            height={30}
            priority
            onClick={handleClick}
          />
        </div>
      </div>
      {active && (
        <div className="h-full mb-[30px] text-animation text-[18px]">
          <p className="sm:text-[16px] text-[14px]">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-[95%] mx-auto mt-[60px]">
      <div className="hashspan" id="faq"></div>
      <h2 className="sm:text-[48px] xs:text-[32px] text-[24px] font-medium text-center">
        Отвечаем на вопросы
      </h2>
      <div className="w-[95%] mx-auto flex flex-col gap-[15px] mt-[60px]">
        {faqArray.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
