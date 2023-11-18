"use client";

import { textArray } from "@/constants";
import { useMediaQuery } from "@mui/material";

type ProfileCardProps = {
  text: string;
  href: string;
  id: number;
};

const ProfileCard = ({ text, href, id }: ProfileCardProps) => {
  const matches = useMediaQuery("(min-width:600px)");

  if (!matches) {
    if (id < 3) {
      return (
        <div className="sm:max-w-[200px] max-w-none w-full h-[100px] rounded-[8px] bg-input relative">
          <p className="absolute left-[10px] top-[10px] text-profileText font-medium">
            {id}/4
          </p>
          <a
            className="absolute left-[10px] bottom-[10px] font-medium"
            href={href}
          >
            {text}
          </a>
        </div>
      );
    }
  } else {
    return (
      <div className="max-w-[200px] w-full h-[100px] rounded-[8px] bg-input relative">
        <p className="absolute left-[10px] top-[10px] text-profileText font-medium">
          {id}/4
        </p>
        <a
          className="absolute left-[10px] bottom-[10px] font-medium"
          href={href}
        >
          {text}
        </a>
      </div>
    );
  }
};

const RoomsList = () => {
  return (
    <div
      className="w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4
            border-solid border-[1px] border-bordercolor border-opacity-[0.1]"
    >
      <a className="xs:text-[24px] text-[18px] font-medium" href="#">
        Комнаты друзей
      </a>
      <div className="md:mt-[20px] mt-[10px] flex flex-wrap gap-[10px]">
        {textArray.map((item, id) => (
          <ProfileCard key={id} {...item} id={id} />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
