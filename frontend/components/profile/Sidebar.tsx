"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlockUrls = () => {
  const [active, setActive] = useState(false);

  const item = [
    {
      text: "Профиль",
      url: "/profile",
    },
    {
      text: "Главная",
      url: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      {item.map((item, index) => (
        <Link
          className="w-full px-4 bg-input h-[60px] text-[18px] font-medium flex items-center rounded-[8px]"
          href={item.url}
          key={index}
          onClick={() => setActive(!active)}
        >
          <div>{item.text}</div>
        </Link>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle ? "block max-w-[400px] w-full" : "max-w-[60px] w-full"
      } bg-primary h-full fixed left-0 overflow-y-auto top-0 z-10 ease duration-300
      border-solid border-r-[1px] border-bordercolor border-opacity-[0.1] overflow-x-hidden`}
      id="container"
    >
      <nav className={`py-[80px] z-10 h-full relative p-4`}>
        <Image
          width={20}
          height={20}
          src="/menu.svg"
          alt="menu icon"
          className="w-[25px] h-[25px] absolute top-[30px] left-[18px]"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && <BlockUrls />}
      </nav>
    </div>
  );
};

export default Sidebar;
