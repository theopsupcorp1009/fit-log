import React from "react";
import BannerImg from "../../assets/banner.png";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-[#15171D] p-10 rounded-2xl mt-10">
      <div className="space-y-5 col-span-2 max-w-[700px]">
        <p className="font-inter font-bold text-[#C2F800] text-[11px]">
          WORKOUT LIBRARY
        </p>
        <h1 className="text-[60px] font-[800] leading-15">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="font-inter text-[#9CA3AF] text-[16px] max-w-[500px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <a href="#library">
          <button className="btn bg-[#C2F800] rounded-[8px] font-inter font-bold text-[12px] text-[#000000] hover:bg-[#e0ff64]">
            BROWSE WORKOUTS
          </button>
        </a>
      </div>

      <div>
        <Image src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
