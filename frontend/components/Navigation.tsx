"use client";

import { linksArray } from "@/constants";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("");
  return (
    <div className="w-[95%] mx-auto flex justify-center items-center">
      <div
        className="max-w-[700px] w-full bg-primary border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]
      p-6 sm:flex hidden justify-between mt-[60px]"
      >
        {linksArray.map((item) => (
          <a
            href={`${item.href}`}
            className={`${
              active === item.text ? "text-white" : "text-gray-400"
            }`}
            onClick={() => {
              setActive(item.text);
            }}
            key={item.text}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div
        className="w-full
      p-4 sm:hidden flex flex-col mt-[30px] gap-[10px]"
      >
        {linksArray.map((item) => (
          <div
            className="w-full h-[80px] items-center flex px-[15px] justify-center bg-primary 
            border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]"
            key={item.text}
          >
            <a
              href={`${item.href}`}
              className={`${
                active === item.text ? "text-white" : "text-gray-400"
              }`}
              onClick={() => {
                setActive(item.text);
              }}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
