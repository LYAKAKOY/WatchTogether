"use client";
import { useState } from "react";
import { stepsArray } from "@/constants";
import Image from "next/image";

type SpecificsProps = {
  step: string;
  title: string;
  text: string;
  button?: string;
};

const Specifics = ({ step, title, text, button }: SpecificsProps) => {
  return (
    <div className="w-[95%] mx-auto bg-primary md:h-[400px] h-full mt-[60px] rounded-[20px] sm:p-8 p-4 flex justify-between sm:gap-[15px]">
      <div>
        <h2 className="text-[24px] font-semibold">{step}</h2>
        <div className="flex flex-col mt-[30px] md:max-w-[600px] max-w-none w-full">
          <h2 className="sm:text-[32px] text-[24px] font-semibold mb-[10px]">
            {title}
          </h2>
          <p className="text-[18px] text-gray-400">{text}</p>
        </div>
        {button && (
          <button className="bg-subprimary text-white py-4 px-8 rounded-[8px] mt-[30px]">
            {button}
          </button>
        )}
      </div>
      <div className="md:block hidden bg-[#202020] w-1/2 h-full p-4 rounded-[12px]"></div>
      {/* <Image
        width={15}
        height={15}
        src="./arrow.svg"
        alt="arrow icon"
        className="flex cursor-pointer"
      /> */}
    </div>
  );
};

const BeginSection = () => {
  const [active, setActive] = useState("1 шаг");

  const DisplayTabContent = () => {
    switch (active) {
      case "1 шаг":
        return (
          <Specifics
            step="1 шаг"
            title="Войдите"
            text="Здесь все просто! Вам всего лишь нужно завести новый аккаунт для того, чтобы вместе с друзьями смотреть много контента"
            button="Завести аккаунт"
          />
        );
      case "2 шаг":
        return (
          <Specifics
            step="2 шаг"
            title="Создайте/найдите комнату"
            text="Ощутите удовольствие от совместного просмотра, будто вы находитесь в одном месте, несмотря на расстояние. Создавайте незабываемые моменты вместе с нашими виртуальными комнатами!"
            button="Попробовать"
          />
        );
      case "3 шаг":
        return (
          <Specifics
            step="3 шаг"
            title="Соберитесь с друзьями в комнате"
            text="Наши комнаты предоставляют вам возможность создать интимное пространство, где каждый может поделиться впечатлениями и эмоциями, наслаждаясь просмотром вместе"
          />
        );
      case "4 шаг":
        return (
          <Specifics
            step="4 шаг"
            title="Наслаждайтесь совместным просмотром"
            text="Все, создавайте незабываемые воспоминания, наслаждаясь моментами веселого и комфортного времяпровождения :)"
          />
        );
    }
  };

  return (
    <div className="w-[95%] mx-auto mt-[60px]">
      <div className="hashspan" id="begin"></div>
      <h2 className="sm:text-[48px] xs:text-[32px] text-[24px] font-medium text-center">
        Как смотреть вместе?
      </h2>
      <div className="w-full flex justify-center items-center">
        <div
          className="max-w-[700px] w-full bg-primary border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]
      p-6 sm:flex hidden justify-between mt-[60px]"
        >
          {stepsArray.map((item) => (
            <button
              className={`${
                active === item.text ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActive(item.text)}
              key={item.text}
            >
              {item.text}
            </button>
          ))}
        </div>
        <div
          className="w-full
      p-4 sm:hidden flex flex-col mt-[30px] gap-[10px]"
        >
          {stepsArray.map((item) => (
            <div
              className="w-full h-[80px] items-center flex px-[15px] justify-center bg-primary 
            border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]"
              key={item.text}
            >
              <button
                className={`${
                  active === item.text ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setActive(item.text)}
              >
                {item.text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <DisplayTabContent />
    </div>
  );
};

export default BeginSection;
