"use client";

import { serviceArray } from "@/constants";
import { Prompt } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const prompt = Prompt({ subsets: ["latin"], weight: "500" });

const NavbarMenu = () => {
  const [mobileServiceMenu, setMobileServiceMenu] = useState(false);

  const MobileServiceMenu = () => {
    return (
      <div className="flex flex-col rounded-t-[8px] rounded-b-[8px] bg-[#242424] py-2 mb-[30px]">
        {serviceArray.map((item) => (
          <Link
            href="#"
            className="flex justify-between items-center w-full h-[50px] ease duration-300 
           hover:bg-gray-400 hover:bg-opacity-[0.05] p-3
           border-solid border-b-[1px] border-bordercolor border-opacity-[0.2] last:border-b-transparent"
            key={item.title}
          >
            <div>
              <h2 className="text-[14px] font-medium">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-[200px] bg-primary absolute top-[10px] border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]">
      <div className="flex flex-col px-[30px] py-[20px] relative">
        <div className="flex flex-col gap-[20px] mb-[20px]">
          <Link href="#" className="flex justify-between items-center">
            <p>Смотреть</p>
            <Image
              width={15}
              height={15}
              src="/arrow.svg"
              alt="arrow icon"
              className="flex cursor-pointer rotate-[-90deg]"
            />
          </Link>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setMobileServiceMenu(!mobileServiceMenu)}
          >
            <p>О сервисе</p>
            <Image
              width={15}
              height={15}
              src="/arrow.svg"
              alt="arrow icon"
              className="flex cursor-pointer rotate-[-90deg]"
            />
          </div>
        </div>
        {mobileServiceMenu && <MobileServiceMenu />}
        <button className="block bg-subprimary p-4 rounded-[8px] w-full">
          Аккаунт
        </button>
      </div>
    </div>
  );
};

const ServiceMenu = () => {
  return (
    <div className="w-full min-h-[200px] bg-primary absolute top-[10px] border-[1px] border-solid border-bordercolor border-opacity-[0.2] rounded-[12px]">
      <div className="flex px-[30px] relative">
        <div className="grid grid-cols-2 gap-[20px] mb-[30px] p-2 md:w-[80%] w-full py-[20px]">
          {serviceArray.map((item) => (
            <Link
              href={`/about/${item.href}`}
              className="flex justify-between items-center md:min-w-[400px] min-w-[100px] h-[60px] ease duration-300 
              hover:bg-gray-400 hover:bg-opacity-[0.05] p-4 rounded-[8px]"
              key={item.title}
            >
              <div>
                <h2 className="text-[16px] font-medium">{item.title}</h2>
                <p className="text-[16px] text-profileText">{item.tip}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="min-h-[200px] w-[20%] border-navbar relative md:flex hidden items-center justify-center flex-col py-[30px] text-center ml-[20px]">
          <h2 className="text-profile Text mb-[15px]">
            Не нашли то, что искали? Мы поможем!
          </h2>
          <button
            className="py-2 px-8 border-solid border-[1px] border-bordercolor border-opacity-[0.2] rounded-[8px]
          ease duration-300 hover:bg-subprimary"
          >
            Начать
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);

  return (
    <div
      className="w-[95%] mx-auto 
    h-[80px] bg-primary rounded-[12px] border-solid border-bordercolor border-[1px] border-opacity-[0.2] sm:my-8 my-4
    absolute top-0 left-0 right-0 z-10"
    >
      <div className="w-full h-full flex justify-between items-center px-[30px]">
        <a href="/" className={`${prompt.className} text-[18px]`}>
          WatchTogether
        </a>
        <div className="sm:flex hidden gap-[20px]">
          {/* TODO: If user is logged in navigate him to profile page */}
          <Link href="/registration">Смотреть</Link>
          <div
            className="flex gap-[5px] items-center cursor-pointer"
            onClick={() => setServiceActive(!serviceActive)}
          >
            <p>О сервисе</p>
            <Image
              width={15}
              height={15}
              src="./arrow.svg"
              alt="arrow icon"
              className="flex cursor-pointer"
            />
          </div>
        </div>
        <a
          href="/registration"
          className="sm:block hidden bg-subprimary p-4 rounded-[8px] w-[150px] text-center ease duration-300 hover:bg-subprimary"
        >
          Аккаунт
        </a>
        <Image
          width={30}
          height={30}
          src="./menu.svg"
          alt="menu icon"
          className="sm:hidden flex cursor-pointer"
          onClick={() => setActive(!active)}
        />
      </div>
      <div className="relative">{serviceActive && <ServiceMenu />}</div>
      <div className="relative">{active && <NavbarMenu />}</div>
    </div>
  );
};

export default Navbar;
