import React from "react";
import { BiChevronDown } from "react-icons/bi";

const page = () => {
  return (
    <div className="container mx-auto mt-15">
      <div className="space-y-2">
        <h2 className="text-[30px] font-bold">MY PLAN</h2>
        <p className="font-inter text-[14px] text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 py-6 px-6 bg-[#13161D] border-2 border-[#232732] rounded-2xl">
        <div>
          <p className="font-inter text-[12px] text-[#8A92A0]">Exercises</p>
          <span className="font-bold text-[36px] text-[#CCFF00]">1</span>
        </div>
        <div className="border-l pl-8 border-[#232732]">
          <p className="font-inter text-[12px] text-[#8A92A0]">Minutes</p>
          <span className="font-bold text-[36px]">1</span>
        </div>
        <div className="border-l pl-8 border-[#232732]">
          <p className="font-inter text-[12px] text-[#8A92A0]">Calories</p>
          <span className="font-bold text-[36px]">1</span>
        </div>
      </div>

      <div className="flex justify-between items-center  mt-10">
        <div className="tabs tabs-box grid grid-cols-2 justify-between items-center rounded-[12px] w-60">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab font-inter text-[12px] rounded-[12px]"
            aria-label="Today's Plan"
          />

          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-[12px] font-inter text-[12px]"
            aria-label="Saved"
            defaultChecked
          />
        </div>

        <div className="flex gap-2 justify-between items-center">
          <p className="font-inter text-[12px] text-[#8A92A0] shrink-0">
            Sort By
          </p>
          <div className="flex items-center justify-between rounded-[9px] border border-[#232732] bg-[#13161D] px-3">
            <select
              defaultValue="Duration"
              className="select-neutral appearance-none bg-transparent py-2 pr-8 font-inter text-[12px] text-[#D1D5DB] outline-none"
            >
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>

            <div className="pointer-events-none -ml-7 text-[#8A92A0]">
              <BiChevronDown size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center text-center p-25 border-2 border-[#111317] rounded-[8px] mt-8 space-y-5">
        <div className="max-w-[280px]">
          <h2 className="font-bold text-[20px]">NOTHING HERE YET</h2>
          <p className="font-inter text-[12px] text-[#A1A1AA]">
            Browse the library and add a lift to get today moving.
          </p>
        </div>
        <button className="btn font-inter font-semibold text-[#000000] text-[12px] bg-[#CCFF00] rounded-3xl w-40 mx-auto">
          Go to workouts
        </button>
      </div>
    </div>
  );
};

export default page;
