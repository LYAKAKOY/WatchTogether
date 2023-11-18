"use client";

import Image from "next/image";
import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div
      className="lg:w-1/3 w-full lg:h-[600px] h-[300px] rounded-[12px] bg-primary relative py-4
  border-solid border-[1px] border-bordercolor border-opacity-[0.1]"
    >
      <div className="lg:h-[500px] h-[200px] overflow-y-auto" id="chat">
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
        <div className="bg-input h-[60px] w-[90%] mx-auto mb-[10px]"></div>
      </div>
      <form action="#">
        <div
          className="relative mt-[10px] left-0 right-0 mx-auto w-[90%] bg-input h-[60px]
    rounded-[8px] flex items-center"
        >
          <input
            type="text"
            className="absolute left-0 w-full bg-input min-h-[60px]
    rounded-[8px] pl-[20px] pr-[43px] focus:outline-none focus:outline-subprimary"
            placeholder="Написать в чат"
            onInput={handleInput}
          ></input>
          {text && (
            <button type="submit" className="flex items-center">
              <Image
                width={40}
                height={40}
                src="/profile/send.png"
                alt="send icon"
                className="flex h-[30px] w-[30px] rounded-full object-cover absolute right-[10px] cursor-pointer"
              />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Chat;
