"use client";

import Image from "next/image";
import { useState } from "react";

const UserInfo = () => {
  const [addEmail, setAddEmail] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(1);
  }

  return (
    <div
      className="lg:w-full lg:max-w-[500px] max-w-none sm:w-1/2 w-full h-[400px] bg-primary 
            rounded-[12px] flex flex-col justify-center items-center text-center
            border-solid border-[1px] border-bordercolor border-opacity-[0.1] relative"
    >
      <button>
        <Image
          width={50}
          height={50}
          src="/profile/profile-edit.svg"
          alt="profile edit icon"
          className="w-[30px] h-[30px] absolute top-[30px] right-[30px] 
        cursor-pointer ease duration-300 opacity-[0.9] hover:opacity-[0.7]"
          onClick={() => setEditProfile(!editProfile)}
        />
      </button>
      <div className="w-[150px] h-[150px] rounded-full bg-input"></div>
      <form action="" onSubmit={(e) => handleSubmit(e)} className="my-[15px]">
        <input
          className="text-[24px] font-medium bg-transparent text-center mx-auto max-w-[200px] 
          focus:outline-none focus:outline-subprimary rounded-[4px] mb-[2px]"
          defaultValue={"PAnanasik038"}
          disabled={editProfile ? false : true}
        />
        <p className="text-[16px] text-gray-400">почта не подтверждена</p>
        {editProfile && (
          <button
            className="bg-input text-white py-2 px-4 rounded-[8px] ease duration-300 hover:opacity-[0.8] 
            sm:min-w-[250px] min-w-[200px] mt-[10px]"
            // onClick={() => setEditProfile(false)}
            type="submit"
          >
            Сохранить
          </button>
        )}
        {!editProfile && (
          <button
            className="bg-input text-white py-2 px-4 rounded-[8px] ease duration-300 hover:opacity-[0.8] 
            sm:min-w-[250px] min-w-[200px] mt-[10px]"
            onClick={() => setAddEmail(!addEmail)}
            type="submit"
          >
            {addEmail ? "Закончить добавление" : "Добавить почту"}
          </button>
        )}
      </form>
    </div>
  );
};

export default UserInfo;
