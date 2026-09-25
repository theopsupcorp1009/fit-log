import React from "react";
import BannerImg from "../../assets/banner.png";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center bg-[#15171D] p-10 rounded-2xl mt-10 mx-5 lg:mx-0">
      <div className="space-y-3 md:space-y-5 lg:space-y-5 col-span-2 max-w-[700px] text-center md:text-left lg:text-left">
        <p className="font-inter font-bold text-[#C2F800] text-[11px]">
          WORKOUT LIBRARY
        </p>
        <h1 className="text-[34px] md:text-[48px] lg:text-[60px] font-[800] leading-10 md:leading-13 lg:leading-15">
          TRAIN WITH INTENT.<br className="md:hidden lg:hidden"/>LOG EVERY SET.
        </h1>
        <p className="hidden md:block lg:block font-inter text-[#9CA3AF] text-[12px] md:text-[14px] lg:text-[16px] max-w-[500px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <a href="#library" className="hidden md:block lg:block">
          <button className="btn bg-[#C2F800] rounded-[8px] font-inter font-bold text-[12px] text-[#000000] hover:bg-[#e0ff64]">
            BROWSE WORKOUTS
          </button>
        </a>
      </div>

      <div className="mt-3 md:mt-0 lg:mt-0">
        <Image src={BannerImg} alt="Banner Image"/>
      </div>

      <div className="text-center space-y-5 mt-3 md:hidden lg:hidden">
        <p className=" font-inter text-[#9CA3AF] text-[12px] md:text-[14px] lg:text-[16px] max-w-[500px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <a href="#library">
          <button className="btn bg-[#C2F800] rounded-[8px] font-inter font-bold text-[12px] text-[#000000] hover:bg-[#e0ff64]">
            BROWSE WORKOUTS
          </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Banner;
