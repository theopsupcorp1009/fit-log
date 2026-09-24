"use client";

import React, { useState } from "react";
import { Context } from "@/Context/Context";
import { useContext } from "react";
import TodayPlanCard from "../components/shared/TodayPlanCard";
import SavedForLaterCard from "../components/shared/SavedForLaterCard";
import EmptyCard from "../components/shared/EmptyCard";

const page = () => {
  const { todayPlan, saveForLater } = useContext(Context);
  const [activeTab, setActiveTab] = useState("today");

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

      <div className="relative mt-8">
        <div className="flex items-center font-inter w-60 rounded-[12px] text-[12px] bg-[#1B1F27] p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer ${
              activeTab === "today" &&
              "bg-[#1F242D] border-2 border-[#2B303D] text-white font-semibold"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer ${
              activeTab === "saved" &&
              "bg-[#1F242D] border-2 border-[#2B303D] text-white font-semibold"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 justify-between items-center">
          <p className="font-inter text-[12px] text-[#8A92A0] shrink-0">
            Sort By
          </p>
          <select
            defaultValue="Duration"
            className="select select-ghost bg-[#13161D] border-[#232732] rounded-[9px] font-inter text-[12px]"
          >
            <option value={"duration"}>Duration</option>
            <option value="categories">Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        {activeTab === "today" ? (
          todayPlan.length > 0 ? (
            <div className="grid gap-4">
              {todayPlan.map((plan) => (
                <TodayPlanCard key={plan.id} data={plan} />
              ))}
            </div>
          ) : (
            <EmptyCard />
          )
        ) : saveForLater.length > 0 ? (
          <div className="grid gap-4">
            {saveForLater.map((saved) => (
              <SavedForLaterCard key={saved.id} data={saved} />
            ))}
          </div>
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default page;
