import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

const ExerciseCard = ({ data }) => {

  return (
    <div className="bg-[#20242e9c] rounded-2xl">
      <Link href={`exercises/${data.id}`}>
        <div className="relative w-full h-[25vh]">
        <Image src={data.image} fill alt={data.name} className="object-cover rounded-t-2xl" />
      </div>

      <div className="p-5 space-y-4">
        <div className="flex gap-2 font-inter text-[11px] font-bold uppercase leading-none">
          {data.muscleGroups.map((muscle, index) => (
            <span key={index} className="bg-[#C2F800] text-[#000000] px-2 py-1 rounded-2xl">
              {muscle}
            </span>
          ))}
        </div>

        <div>
          <h2 className="uppercase text-[18px] font-bold">{data.name}</h2>
          <p className="font-inter text-[12px] text-[#9CA3AF]">
            {data.equipment}
          </p>
        </div>

          <hr className=" border-[#9ca3af22]"/>

        <div className="flex gap-5 justify-start items-center text-[12px] text-[#9CA3AF] font-inter">
          <div className="flex gap-1.5 items-center">
            <FaRegClock />
            <p>{data.duration} min</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <FaFireFlameCurved />
            <p>{data.caloriesBurned} kcal</p>
          </div>
          <div className="flex gap-1.5 justify items-center">
            <FaRegStar />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
