"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    matches && videoRef.current?.play();
  }, [matches]);

  return (
    <div>
      {matches ? (
        <video
          ref={videoRef}
          loop
          muted
          className="w-full sm:h-[700px] h-[500px] absolute z-[-1] top-0 object-cover"
          rel="prerender"
        >
          <source
            src="https://watch2getha.netlify.app/video.webm"
            rel="prerender"
            type="video/webm"
          />
        </video>
      ) : (
        <Image
          className="w-full sm:h-[700px] h-[500px] absolute z-[-1] top-0 object-cover"
          src="/background.png"
          alt="background png"
          width={800}
          height={600}
          priority
        />
      )}

      <div className="w-full max-w-[1640px] mx-auto sm:pt-[320px] pt-[210px]">
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="md:text-[56px] sm:text-[48px] text-[32px] font-bold md:max-w-[1200px] sm:max-w-[1000px] text-center">
            Комфортный просмотр ваших любимых фильмов вместе!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
