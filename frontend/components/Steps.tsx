"use client";

import { stepsArray } from "@/constants";
import { useState } from "react";

const Steps = () => {
  const [active, setActive] = useState("");
  return (
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
            onClick={() => {
              setActive(item.text);
            }}
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
              onClick={() => {
                setActive(item.text);
              }}
            >
              {item.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
