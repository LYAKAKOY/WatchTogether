"use client";

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

export default ProfileCard;
