import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import RemoveButton from "../allPlans/RemoveButton";

const SavedForLaterCard = ({ data }) => {

  return (
    <div className="bg-[#14171E] border-[#232732] flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-3 md:gap-0 lg:gap-0 md:flex-row lg:flex-row md:items-center lg:items-center p-3 sm:p-5 md:p-5 lg:p-5 rounded-3xl">
      <div className="flex justify-start gap-5 items-center">
        <div className="relative h-[80px] w-[124px] md:w-[144px] md:h-[100px] lg:w-[144px] lg:h-[100px]">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-fit rounded-2xl"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-[16px] uppercase">{data.name}</h2>
          <p className="mt-1 font-inter font-semibold text-[12px] text-[#8A92A0]">
            {data.equipment}
          </p>
          <div className="mt-3 flex gap-2 md:gap-5 lg:gap-5 justify-start items-center text-[12px] text-[#9CA3AF] font-inter">
            <div className="flex gap-1.5 items-center">
              <FaRegClock className="text-[#CCFF00]" />
              <p>{data.duration} min</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <FaFireFlameCurved className="text-[#CCFF00]" />
              <p>{data.caloriesBurned} kcal</p>
            </div>
            <div className="flex gap-1.5 justify items-center">
              <FaRegStar className="text-[#CCFF00]" />
              <span>{data.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center md:justify-end lg:justify-end border-2 border-[#2B303D] rounded-2xl md:border-none lg:border-none py-3 px-3 md:p-0 lg:p-0">
        <button className="btn rounded-4xl font-inter text-[12px] text-[#CCFF00] md:text-white lg:text-white border-[#374151] bg-[#00000028] hover:bg-transparent hover:border-0">
          <Link href={`/exercises/${data.id}`}>View Details</Link>
        </button>
        <RemoveButton data={data} />
      </div>
    </div>
  );
};

export default SavedForLaterCard;
