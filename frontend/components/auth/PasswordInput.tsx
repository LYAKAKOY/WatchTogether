"use client";

import Image from "next/image";
import { useState } from "react";

type PasswordInputProps = {
  placeholder: string;
  id: string;
};

const PasswordInput = ({ placeholder, id }: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center">
      <input
        type={show ? "text" : "password"}
        name=""
        id={id}
        placeholder={placeholder}
        className="bg-input text-gray-400 h-[60px] w-full rounded-[8px] px-[20px] focus:outline-none focus:outline-subprimary"
        pattern="[a-z][0-9]"
        title="Неверная форма пароля"
        required
      />
      <div
        className="absolute right-[20px] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <Image width={18} height={18} src="/login/eye.png" alt="eye icon" />
      </div>
    </div>
  );
};

export default PasswordInput;
