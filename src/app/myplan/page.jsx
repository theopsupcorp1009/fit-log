"use client";

import React, { useEffect, useState } from "react";
import { Context } from "@/Context/Context";
import { useContext } from "react";
import TodayPlanCard from "../components/shared/TodayPlanCard";
import SavedForLaterCard from "../components/shared/SavedForLaterCard";
import EmptyCard from "../components/shared/EmptyCard";

const page = () => {
  const { todayPlan, saveForLater } = useContext(Context);
  const [activeTab, setActiveTab] = useState("today");
  const [todayPlanLoading, setTodayPlanLoading] = useState(true);
  const [saveforLaterLoading, setSaveForLaterLoading] = useState(true);

  useEffect(() => {
    if (todayPlan.length > 0) {
      const timer = setTimeout(() => {
        setTodayPlanLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setTodayPlanLoading(false);
    }
  }, [todayPlan]);

  useEffect(() => {
    if (saveForLater.length > 0) {
      const timer = setTimeout(() => {
        setSaveForLaterLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setSaveForLaterLoading(false);
    }
  }, [saveForLater]);

  const currentPlan = activeTab === "today" ? todayPlan : saveForLater;
  const totalExercises = currentPlan.length;
  const totalDuration = currentPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
  const totalCaloriesBurned = currentPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  const [sortBy, setSortBy] = useState("duration");

  const sortMyPlan = (plans) => {
    const sortedPlans = [...plans];
    if(sortBy==="duration"){
      sortedPlans.sort((a,b)=>b.duration-a.duration)
    }else if(sortBy==="calories"){
      sortedPlans.sort((a,b)=>b.caloriesBurned-a.caloriesBurned)
    }else if(sortBy=="rating"){
      sortedPlans.sort((a,b)=>b.rating-a.rating)
    }
    return sortedPlans
  }

  const sortedTodayPlan = sortMyPlan(todayPlan);
  const sortedSaveForLater = sortMyPlan(saveForLater);

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
          <span className="font-bold text-[36px] text-[#CCFF00]">
            {totalExercises}
          </span>
        </div>
        <div className="border-l pl-8 border-[#232732]">
          <p className="font-inter text-[12px] text-[#8A92A0]">Minutes</p>
          <span className="font-bold text-[36px]">{totalDuration}</span>
        </div>
        <div className="border-l pl-8 border-[#232732]">
          <p className="font-inter text-[12px] text-[#8A92A0]">Calories</p>
          <span className="font-bold text-[36px]">{totalCaloriesBurned}</span>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="flex items-center font-inter w-60 rounded-[12px] text-[12px] bg-[#1B1F27] p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer ${
              activeTab === "today" &&
              "border-2 border-[#2B303D] bg-[#000000] text-[#CCFF00] font-semibold"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer ${
              activeTab === "saved" &&
              "border-2 border-[#2B303D] bg-[#000000] text-[#CCFF00] font-semibold"
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
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="cursor-pointer select select-ghost bg-[#13161D] border-[#232732] rounded-[9px] font-inter text-[12px]"
          >
            <option value={"duration"}>Duration</option>
            <option value="calories">Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        {activeTab === "today" ? (
          todayPlanLoading ? (
            <h2 className="font-inter text-[24px] text-[#CCFF00] font-bold flex justify-center items-center p-25">
              Loading workouts…
            </h2>
          ) : sortedTodayPlan.length > 0 ? (
            <div className="grid gap-4">
              {sortedTodayPlan.map((plan) => (
                <TodayPlanCard
                  activeTab={activeTab}
                  key={plan.id}
                  data={plan}
                />
              ))}
            </div>
          ) : (
            <EmptyCard />
          )
        ) : saveforLaterLoading ? (
          <h2 className="font-inter text-[24px] text-[#CCFF00] font-bold flex justify-center items-center p-25">
              Loading workouts…
            </h2>
        ) : sortedSaveForLater.length > 0 ? (
          <div className="grid gap-4">
            {sortedSaveForLater.map((saved) => (
              <SavedForLaterCard
                activeTab={activeTab}
                key={saved.id}
                data={saved}
              />
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
